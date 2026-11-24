# Menel: Pobiedziska – notatki z projektu

Stan na 24.11.2026.

## Linki
- Repo: https://github.com/mmhouse61-svg/menel-v1 (publiczne)
- Prywatny podgląd (artefakt Claude): https://claude.ai/artifact/ASws1XGExkBbT2i19uRbNs
- Cloudflare: w trakcie. Aplikacja Cloudflare na GitHubie widzi tylko repo `mitinspect`; trzeba dodać `menel-v1`
  (https://github.com/settings/installations/174761365, weryfikacja e-mailem), potem Workers & Pages → Create → Continue with GitHub → menel-v1 → Deploy.

## Mechanika (v1)
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
- Balans: bot losowy robi 33–72 zł/dzień.
- Docelowo PWA / natywna apka.

## Pliki
- `public/index.html` – cała gra (jeden plik)
- `wrangler.jsonc` – konfiguracja Cloudflare (statyczne assets)
