# Menel: Pobiedziska – notatki z projektu

Stan na 26.11.2026.

## Linki
- Repo: https://github.com/mmhouse61-svg/menel-v1 (publiczne)
- Prywatny podgląd (artefakt Claude): https://claude.ai/artifact/ASws1XGExkBbT2i19uRbNs
- Hosting: GitHub Pages (workflow `.github/workflows/pages.yml` publikuje `public/`): https://mmhouse61-svg.github.io/menel-v1/
- Cloudflare: odrzucone 24.11 (`wrangler.jsonc` zostaje w repo, nieużywany).
- PWA: `public/manifest.json`, `sw.js` (przy każdej zmianie gry podbij `WERSJA`, teraz v7), ikony.

## Zmiany 26.11 (SW v6)
- Balans cen (zastępuje liczby niżej): torba 3 zł, worek 6 zł, wózek 8 zł (czas ×1,15), rower 12 zł, rower+wózek 18 zł (+35, czas ×0,5).
- Progi oceny dnia: 95 zł świetny, 60 zł przeżyłeś.
- Dźwięki syntezowane + wibracja (przycisk 🔊), samouczek 3 dymki (przycisk ?), większe napisy.
- Bot do balansu: `node narzedzia/bot.js 600`. Średnio: bez sprzętu 70 zł, z różnym sprzętem 80–89 zł.

## Mechanika (stan 24.11, SW v5)
- Plansza 18×8 pól zamiast mapy: ulica 5 min/⚡0,5, trawnik 10/1, zarośla 15/1,5; woda i budynki nieprzechodnie. Podgląd trasy i kosztu, drugie stuknięcie = idź, strzałki/WASD.
- Sprzęt w sklepie: mocna torba 4 zł (+10), duży worek 8 zł (+15), wózek 15 zł (+30, czas ×1,25), rower 22 zł (+5, czas i siły ×0,5), rower+wózek 34 zł (+30, ×0,65; dopłata różnicy).
- Kitrunek na ławce: schowek na 40 butelek, przechodzi na kolejny dzień (localStorage `menel_kit`), 15% szans, że w nocy ktoś zabierze połowę.
- Układ responsywny na komputer; „obróć telefon” tylko na telefonie.

## Mechanika (v1, pierwotna)
- Start 7:00 na ławce, koniec 24:00.
- Plastik 0,50 zł, szkło po piwie 1,00 zł. Reklamówka 15 szt. (mocna torba +10 za 4 zł).
- Przejście 10–60 min (mapa schematyczna), przeszukanie 20 min, oddanie butelek w sklepie (czynny 6–22).
- Siły spadają z czasem; 0 = omdlenie (−2 h, kradną połowę butelek). Bułka 2 zł, piwo 4 zł, drzemka 60 min.
- Pule butelek odnawiają się z czasem, każde miejsce ma swoje godziny szczytu. Zdarzenia losowe (straż miejska, pies, Zbychu z Letniska).
- Butelki w torbie o północy przepadają. Rekord w localStorage.

## Lokacje
Prawdziwe (źródła: Wikipedia EN „Pobiedziska”, poznan.pl – Skansen Miniatur, komoot – jeziora):
Rynek (fontanna Lecha, Czecha i Rusa, pomnik Powstania Wlkp.), kościół św. Michała Archanioła, kościół Ducha Świętego,
pomnik Kazimierza Odnowiciela, dworzec PKP Pobiedziska, przystanek Pobiedziska Letnisko, Ośrodek Kultury i Sportu (ul. Kostrzyńska 21),
Jezioro Dobre (łowisko karpiowe), Jezioro Biezdruchowo (plaża, kajaki, wakeboard), Skansen Miniatur (ok. 5 km, 8:00–20:00).

Wymyślone: „Ławka pod blokiem” (start), „Sklep z punktem zwrotu” (godziny 6–22 zgadywane).

## Otwarte pytania
- Prawdziwe sklepy z Pobiedzisk (nazwy, ulice) – czeka na Marcina.
- Balans: bot w `narzedzia/bot.js`. Bot nie mdleje (je bułki), więc siły sprawdzić graniem.
- Docelowo PWA / natywna apka.

## Pliki
- `public/index.html` – cała gra (jeden plik)
- `wrangler.jsonc` – konfiguracja Cloudflare (statyczne assets)
