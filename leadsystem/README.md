# Din Media — Lead Radar

Frontend-prototyp för Din Medias säljsystem: hittar personer med perfekt
timing för att bygga personligt varumärke och content — inte en vanlig
lead-lista sorterad på bransch eller titel.

Körs just nu helt mot mockdata (`src/data/mockLeads.ts`) för att kunna
testa koncept, scoring och UX innan research-backend och AI-analys byggs.

## Kom igång

```bash
npm install
npm run dev
```

## Vad som finns

- **Leadkort** med "VARFÖR RINGA NU?" som huvudbudskap, färskhetsbadge på
  triggern, tre delscores (Timing / Commercial / Content Fit) plus en
  viktad totalscore.
- **Detaljvy** med full AI-analys, öppningsvinkel till samtalet,
  budgetsignaler och källor.
- **Statusflöde**: Ny → Researchad → Ska ringas → Ringd → Uppföljning →
  Möte bokat / Inte relevant. Statusändringar sparas i webbläsarens
  `localStorage`.
- **Filter & sortering** på kategori, status, fritext och sortering på
  total score, timing eller senast tillagd.
- **Färskhetslogik** (`src/utils/scoring.ts`): triggerns score tappar
  gradvis värde ju äldre den blir, i linje med att tajming är kärnan i
  systemet.

## Nästa steg (utanför denna prototyp)

Koppla på riktig research (Google News, LinkedIn, bolagsregister,
podcastplattformar m.fl.) och AI-analys som ersätter mockdatan, samt en
enkel backend för att lagra leads och statusar permanent.
