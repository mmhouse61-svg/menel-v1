// Bot do balansu: gra N dni na prawdziwym kodzie z public/index.html.
// Użycie: node narzedzia/bot.js [liczba_dni]
const fs = require('fs'), path = require('path'), vm = require('vm');
const html = fs.readFileSync(path.join(__dirname, '../public/index.html'), 'utf8');
const kod = html.match(/<script>([\s\S]*?)<\/script>/)[1];

function nowaGra() {
  const el = () => ({ style: {}, classList: { add() {}, remove() {}, toggle() {}, contains: () => false }, innerHTML: '', textContent: '' });
  const ctx = {
    Math, JSON, console,
    document: { getElementById: el, querySelector: () => null },
    localStorage: { getItem: () => null, setItem() {} },
    navigator: {}, window: {}, addEventListener() {}, setTimeout: f => f(),
  };
  vm.createContext(ctx);
  vm.runInContext(kod, ctx);
  return ctx;
}

// strategia: idź tam, gdzie najwięcej kasy na minutę; sprzedawaj przy pełnej torbie; jedz gdy słabo
function bot(strategiaSprzetu) {
  return `(()=>{
    startGame();
    const bought={}, plan=${JSON.stringify(strategiaSprzetu)};
    const go=id=>{const [c,r]=PLACES[id]; if(S.pos.c===c&&S.pos.r===r)return true;
      walkPath(findPath(S.pos.c,S.pos.r,c,r),false); return S.pos.c===c&&S.pos.r===r;};
    const cost=id=>{const [c,r]=PLACES[id]; return planTo(c,r)||{t:0,e:0}};
    const goFull=id=>{for(let i=0;i<8&&!S.over;i++) if(go(id))return true; return false};
    let guard=0;
    while(!S.over&&guard++<600){
      const n=S.bagP+S.bagG, toShop=cost('sklep'), shopOpen=S.t+toShop.t<22*60-20;
      const val=S.bagP*PLASTIC+S.bagG*GLASS;
      if(S.hp<30){
        if(S.cash>=2&&shopOpen){ if(goFull('sklep'))buy('bulka'); } else rest();
        continue;
      }
      if(shopOpen&&n&&(n>=S.cap*0.8||S.t+toShop.t>22*60-60||(S.hp<45&&S.cash<2))){
        if(goFull('sklep')){cashIn();
          for(const g of plan){ const pr=BAGS[g]?BAGS[g].price:ridePrice(g);
            const have=BAGS[g]?S.has[g]:S.ride===g;
            if(!have&&S.cash>=pr+2&&S.t<17*60){buy(g);bought[g]=S.t} }
          while(S.hp<60&&S.cash>=2&&!S.over&&S.t<22*60) buy('bulka');
        }
        continue;
      }
      if(S.t>=22*60&&n) { goFull('lawka'); stash(); }
      let best=null,bs=-1;
      for(const l of LOCS){
        if(l.open&&!isOpen(l,S.t+cost(l.id).t))continue;
        const pl=S.pools[l.id], luck=Math.max(.15,.85-pl.searched*.3);
        const ev=luck*(pl.p*PLASTIC+pl.g*GLASS), q=cost(l.id);
        const score=ev/(q.t+20+q.e*3);
        if(score>bs){bs=score;best=l.id}
      }
      if(goFull(best)) search();
    }
    return {cash:S.cash,faints:S.faints,bought,walked:S.walked,searches:S.searches};
  })()`;
}

const N = +process.argv[2] || 300;
const plany = { 'bez sprzętu': [], 'torba+worek': ['torba', 'worek'], 'wózek': ['wozek'], 'rower': ['rower'], 'rower+wózek': ['rower', 'rowerwozek'], 'wszystko': ['torba', 'worek', 'rower', 'rowerwozek'] };
console.log('plan            | śr. zł | min10 | max90 | omdlenia | kupił 1. sprzęt');
for (const [nazwa, plan] of Object.entries(plany)) {
  const w = [];
  for (let i = 0; i < N; i++) w.push(vm.runInContext(bot(plan), nowaGra()));
  const c = w.map(x => x.cash).sort((a, b) => a - b), avg = a => a.reduce((s, x) => s + x, 0) / a.length;
  const k = plan[0] ? w.filter(x => x.bought[plan[0]]) : [];
  console.log(nazwa.padEnd(15), '|', avg(c).toFixed(1).padStart(6), '|', String(c[N * .1 | 0]).padStart(5), '|', String(c[N * .9 | 0]).padStart(5), '|', avg(w.map(x => x.faints)).toFixed(2).padStart(8), '|', plan[0] ? `${Math.round(k.length / N * 100)}% ok. ${(avg(k.map(x => x.bought[plan[0]])) / 60).toFixed(1)} h` : '-');
}
