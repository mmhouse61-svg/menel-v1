# Stan projektu: Menel: Pobiedziska
Zaktualizowano: 2026-11-24 23:56

## Kierunek
Przeglądarkowa gra na telefon (poziomo) o zbieraniu butelek z kaucją w Pobiedziskach, jeden dzień 7:00–24:00. Prototyp dla siebie, hostowany jak gry Łucji i Róży. Bez planu biznesowego, cel: grywalna, zbalansowana wersja.

## Gdzie jesteśmy
- Online (GitHub Pages): https://mmhouse61-svg.github.io/menel-v1/, repo mmhouse61-svg/menel-v1 (publiczne). Push do `main` = wdrożenie (~30 s).
- Kod: jeden `public/index.html` (ok. 600 linii), PWA (`sw.js` WERSJA menel-v8, manifest, ikony). Przy każdej zmianie gry podbij WERSJĘ.
- Plansza 18×8 pól, koszt sił i czasu na polu, podgląd trasy, strzałki/WASD. 12 miejsc (10 prawdziwych z Pobiedzisk + Ławka i Sklep wymyślone).
- Sprzęt w sklepie: torba, worek, wózek, rower, rower+wózek. Kitrunek na ławce (40 szt., przechodzi na następny dzień, 15% ryzyka kradzieży).
- Układ responsywny na komputer. Testowane tylko w headless Chrome, nie na telefonie.
- Notatki o mechanice: [NOTATKI.md](../NOTATKI.md).

- 26.11: zrobiony pakiet A (balans cen botem `narzedzia/bot.js`, dźwięki i wibracja, samouczek, czytelność). Opublikowane 26.11 (SW v6).

## Następny krok
1. Zagrać partię na telefonie (poziomo, zainstalowana PWA) i spisać uwagi: czytelność planszy, tempo, czy siły nie schodzą za szybko, czy sprzęt się opłaca.
2. Poprawki balansu (tabela TERR, ceny BAGS/RIDES, KIT_CAP/KIT_RISK) z tych uwag.
3. Prawdziwe sklepy z Pobiedzisk (nazwy, ulice), które poda Marcin.

## Decyzje
- 2026-11-24 — Hosting GitHub Pages, nie Cloudflare — jak gry dziewczynek, zero konfiguracji; wrangler.jsonc zostaje nieużywany.
- 2026-11-24 — PWA wzorowane na grze Róży (sw: najpierw sieć) — sprawdzony wzór.
- 2026-11-24 — Mapa zastąpiona planszą z polami — prośba użytkownika: nie wszystko przez centrum, widać koszt sił.
- 2026-11-24 — Sprzęt skaluje czas i siły razem; rower+wózek z dopłatą różnicy.
- 2026-11-24 — Kitrunek tylko na ławce, 40 szt., 15% ryzyka — przenosi butelki na następny dzień.
- 2026-11-24 — Czas płynie co 5 min (było 10) — plansza ma krótkie kroki.

## Parking pomysłów
Wszystkie pomysły są w [BACKLOG.md](../BACKLOG.md).

## Blokery / pytania do użytkownika
- Strażnik: w sesji doszło sporo funkcji naraz (PWA, sprzęt, kitrunek, plansza) przed pierwszym graniem na telefonie. Kolejne dodatki dopiero po jego uwagach.
- Brak nazw prawdziwych sklepów z Pobiedzisk (czeka na Marcina).
