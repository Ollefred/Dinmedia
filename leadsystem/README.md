# Din Media — Lead Radar

Säljsystem som hittar personer med perfekt timing för att bygga personligt
varumärke och content — inte ett vanligt lead-register sorterat på bransch
eller titel.

Utan konfiguration körs appen i **demo-läge** mot mockdata
(`src/data/mockLeads.ts`) så att UX och koncept alltid går att testa direkt.
Kopplar du på Supabase enligt nedan går den istället skarpt: riktiga leads,
statusändringar som faktiskt sparas, och en research-pipeline som varje
vecka letar upp nya personer.

## Kom igång (demo-läge, ingen setup krävs)

```bash
npm install
npm run dev
```

## Koppla på skarpt läge

Systemet består av tre delar:

1. **Databas** — Supabase (Postgres). Lagrar leads och statusar.
2. **Frontend** — den här appen, läser/skriver mot Supabase.
3. **Research-pipeline** — ett schemalagt Claude Code-pass som varje vecka
   söker upp, verifierar och skriver in nya leads. Instruktionerna för hur
   den ska tänka och vad den får/inte får göra finns i
   [`RESEARCH_PLAYBOOK.md`](./RESEARCH_PLAYBOOK.md).

### 1. Skapa Supabase-projekt

1. Skapa ett gratis projekt på [supabase.com](https://supabase.com).
2. Öppna **SQL Editor** i projektet och kör innehållet i
   [`supabase/schema.sql`](./supabase/schema.sql) (skapar tabellerna `leads`
   och `research_runs`, rad-nivå-säkerhet och statusfunktionen).
3. Kör sedan [`supabase/seed.sql`](./supabase/seed.sql) om du vill ha samma
   17 exempel-leads som demo-läget som utgångspunkt.
4. Under **Project Settings → API** hittar du:
   - **Project URL**
   - **anon public**-nyckeln (säker att exponera i frontend — den kan bara
     läsa leads och byta status via en specifik funktion, se
     `supabase/schema.sql`)
   - **service_role**-nyckeln (hemlig — ger full skrivrätt, används bara av
     research-pipelinen, aldrig i frontend)

### 2. Koppla frontend

Skapa `leadsystem/.env.local` (den är redan gitignorad):

```
VITE_SUPABASE_URL=https://ditt-projekt.supabase.co
VITE_SUPABASE_ANON_KEY=din-anon-nyckel
```

Kör om `npm run dev` (eller sätt samma variabler i din hosting-tjänst, t.ex.
Vercel/Netlify, vid deploy). Demo-bannern försvinner automatiskt så fort
Supabase svarar.

### 3. Koppla på research-pipelinen

Research-passet behöver `SUPABASE_URL` och `SUPABASE_SERVICE_ROLE_KEY` som
miljövariabler/secrets i den Claude Code-miljö som kör det schemalagda
passet (inte i frontend-bygget). Lägg till dem i miljöns inställningar, säg
sedan till i chatten — då sätter jag upp ett veckovis schema som kör
[`RESEARCH_PLAYBOOK.md`](./RESEARCH_PLAYBOOK.md) och skriver nya leads
direkt till databasen. Passet vägrar göra något (och fabricerar aldrig
leads) om nycklarna saknas, så det är säkert att låta stå orört tills du är
redo.

## Vad som finns i frontend

- **Leadkort** med "VARFÖR RINGA NU?" som huvudbudskap, färskhetsbadge på
  triggern, tre delscores (Timing / Commercial / Content Fit) plus en
  viktad totalscore.
- **Detaljvy** med full AI-analys, öppningsvinkel till samtalet,
  budgetsignaler och källor.
- **Statusflöde**: Ny → Researchad → Ska ringas → Ringd → Uppföljning →
  Möte bokat / Inte relevant. I skarpt läge sparas ändringar i Supabase via
  en säker RPC-funktion (frontend kan aldrig skriva över AI-analys eller
  scores, bara status). I demo-läge sparas de i webbläsarens `localStorage`.
- **Filter & sortering** på kategori, status, fritext och sortering på
  total score, timing eller senast tillagd.
- **Färskhetslogik** (`src/utils/scoring.ts`): triggerns score tappar
  gradvis värde ju äldre den blir, i linje med att tajming är kärnan i
  systemet — helt automatiskt, ingen manuell nedtrappning behövs.
- **Research-logg**: header visar datum för senaste körning samt hur många
  kandidater som granskades och hur många leads som tillkom, så det syns
  att systemet faktiskt arbetar även de veckor få eller inga leads höll
  måttet.

## Utveckling

```bash
npm run dev      # dev-server
npm run build    # typecheck + produktionsbygge
npm run lint     # oxlint
```

`supabase/seed.sql` genereras från mockdatan med:

```bash
npx tsx scripts/generate-seed-sql.ts > supabase/seed.sql
```
