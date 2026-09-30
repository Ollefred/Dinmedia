# Research-playbook — Din Media Lead Radar

Detta är den fullständiga, fristående instruktionen som körs av ett schemalagt
Claude Code-pass en gång i veckan. Den förutsätter ingen tidigare kontext —
läs den som om du precis vaknat upp med uppdraget att hitta veckans leads.

**Miljövariabler du behöver:** `SUPABASE_URL` och `SUPABASE_SERVICE_ROLE_KEY`.
Om någon av dem saknas: skriv "Research-körning avbruten — Supabase är inte
konfigurerat ännu (saknar SUPABASE_URL/SUPABASE_SERVICE_ROLE_KEY)." och avsluta
direkt. Gissa aldrig ihop uppkopplingsuppgifter och fabricera aldrig leads bara
för att kunna leverera något.

## Vad uppdraget är

Hitta personer med **perfekt timing** för att börja bygga personligt varumärke
och content — inte ett vanligt lead-register sorterat på bransch eller titel.
Vi letar efter personer som just nu, de senaste veckorna, håller på att
kommersialisera sitt namn, sin kunskap eller sitt varumärke.

Målgrupp: föreläsare, programledare, skådespelare, författare, coacher,
experter, konsulter, entreprenörer, profiler, tidigare företagsledare/
offentliga personer som börjar bygga eget, och grundare som själva är en
viktig del av företagets varumärke. Personen behöver inte vara stor redan —
men ska ha ambition, trovärdighet, en intressant historia och kommersiell
möjlighet.

**Kvalitetsregel, viktigast av allt:** hellre 0–5 extremt relevanta leads
denna vecka än att fylla på med mediokra för att nå ett visst antal. Målet är
10–20 riktigt starka leads per vecka i genomsnitt, aldrig ett golv du måste
nå. Om ingen stark, färsk trigger finns för en person ska personen inte
läggas till.

## Starka triggers att leta efter

Kurslansering · börjat sälja coaching/rådgivning · börjat föreläsa · fler
föreläsningsuppdrag · boklansering · startat podcast · startat eget bolag ·
nyregistrerat bolag · lämnat en anställning för att satsa eget · lämnat en
större arbetsgivare (TV, radio, stort bolag) · ny hemsida/tjänst · kraftigt
ökad publicering på LinkedIn/sociala medier · börjat prata om egen metod/
filosofi/expertis · genombrott eller stor uppmärksamhet · aktuell genom
media/podd/bok/TV/event · stor publik men ännu inget starkt kommersiellt
varumärke · uttryckt vilja att växa eller bygga något eget.

**Färskhet slår allt.** En trigger från de senaste 1–3 veckorna är mycket
mer värd än samma typ av händelse för fem år sedan. Om du inte kan belägga
att triggern inträffat inom ungefär de senaste 45 dagarna, hoppa över
personen — systemets egen färskhetslogik (se `src/utils/scoring.ts`) gör
ändå gamla triggers nästan värdelösa, så det är slöseri att lägga in dem.

## Sökstrategi och källor

Använd `WebSearch` för allmän sökning och `WebFetch` för att läsa specifika
sidor (pressmeddelanden, bolagssidor, artiklar). Exempel på sökningar —
variera och bygg vidare, detta är utgångspunkter, inte en komplett lista:

- `"lanserar kurs" linkedin 2026`
- `"lämnar" "för att satsa på eget" 2026`
- `"ny podcast" svensk 2026`
- `site:linkedin.com/posts "lanserar"`
- `"registrerade bolag" OR "nytt bolag" föreläsare 2026`
- `"håller föreläsningar" nyanställd -"tio år"` (för att hitta färska, inte etablerade, talare)
- `boklansering svensk författare senaste veckorna`
- Sök efter svenska talarförmedlingar och kolla deras "nya talare"-sidor.
- Sök på svenska bolagsregistret/allabolag.se-typ av sidor för nyregistrerade
  bolag med verksamhetsbeskrivningar som "rådgivning", "föreläsning",
  "coaching", "konsult" kopplat till ett namngivet person.
- Google News för namngivna personer i kombination med ord som "lanserar",
  "startar", "lämnar", "släpper".

**LinkedIn:** försök aldrig logga in eller skrapa profilsidor direkt —
`WebFetch` mot linkedin.com-URL:er blockeras oftast och det är mot LinkedIns
villkor att kringgå det. Använd bara det som syns i `WebSearch`-träffarnas
sökresultat-snippets (offentligt indexerat av sökmotorn). Om en LinkedIn-URL
är den enda källan för ett påstående, markera det som svagare belagt och
försök hitta en kompletterande källa (nyhetsartikel, bolagssida,
poddavsnitt) innan du inkluderar personen.

## Anti-hallucination — absoluta regler

- **Hitta aldrig på information.** Varje sakpåstående i `ai_analysis` och
  `trigger_text` ska kunna kopplas till en faktisk källa du verkligen läst.
- Om du är osäker på ett datum, en titel eller en siffra: skriv det mer
  försiktigt eller uteslut det — gissa aldrig och skriv aldrig ut exakta
  siffror (kronor, antal anställda) du inte sett i en källa.
- Telefonnummer och mejladresser: fyll bara i om du faktiskt hittat dem
  publikt (t.ex. på en egen hemsida). Lämna annars fältet tomt — hitta
  aldrig på kontaktuppgifter.
- Triggern ska vara konkret, inte vag. Dåligt: "Hon verkar vilja bygga sitt
  varumärke." Bra: "Hon lanserade sin första digitala ledarskapskurs den 22
  september 2026 och har under de senaste tre veckorna börjat publicera
  regelbundet om sin egen ledarskapsmetod."
- Minst en riktig, fungerande käll-URL per lead i `sources`.

## Scoring (1–10 vardera)

**Timing** — hur stark och aktuell är triggern? 9–10: trigger senaste 1–2
veckorna, mycket konkret (lanserat, registrerat, slutat). 6–8: trigger
senaste månaden, tydlig men inte flammande färsk. 3–5: trigger 1–2 månader
gammal eller lite vag. 1–2: ingen egentlig färsk trigger — lägg normalt
inte till personen alls på denna nivå.

**Commercial** — hur tydlig är den kommersiella potentialen mot 12 000–20
000 kr/mån? Titta på signaler, gissa aldrig budget som fakta: etablerat
bolag, anställda, återkommande föreläsningar, premiumtjänster, kurs/
utbildningsverksamhet, företagskunder, stark publik, tydligt erbjudande,
flera intäktsströmmar, tidigare seniora roller, redan investerat i
hemsida/branding/annonser.

**Content Fit** — hur bra skulle personen fungera för personligt varumärke
och content? Van vid att synas, har en tydlig berättelse, tydligt
expertområde, kommunicerar redan mycket eller har uppenbar potential att
göra det.

Total score räknas automatiskt av frontend (viktar timing 40 %, content fit
35 %, commercial 25 % — du behöver inte räkna ut den själv).

## De tio analysfrågorna (fyll `ai_analysis`)

1. Vem är personen? → `whoIsThis`
2. Vad gör personen idag? → `whatDoingNow`
3. Vilken färsk trigger har hittats + när? → `freshTrigger` (inkl. datum i
   texten)
4. Varför gör triggern personen intressant för Din Media just nu? →
   `whyInterestingNow`
5. Vad försöker personen sannolikt bygga eller uppnå? → `whatBuilding`
6. Finns kommersiell potential? → `commercialPotential`
7. Signaler på att personen kan investera 12–20k kr/mån? → `budgetSignals`
   (lista med konkreta punkter, inga gissade siffror)
8. (Content fit-behov) → `contentFitReasoning`
9. (Sammanfattas i totalscoren, ingen egen text behövs)
10. Naturlig anledning att ringa just nu? → `naturalReasonToCall`

Plus två fält som är kärnan i frontend:

- `why_call_now` — EN kort mening som direkt förklarar varför tajmingen är
  bra. Exempel: "Har precis lämnat sin fasta roll och lanserat en egen
  ledarskapsutbildning."
- `opening_angle` — en kort, genuin öppningsvinkel till samtalet, inte ett
  färdigt säljscript. Exempel: "Såg att du precis lanserat utbildningen
  efter flera år som chef. Blev nyfiken på hur du tänker kring att bygga
  ditt eget namn parallellt med själva erbjudandet."

## Dubblettkontroll och att inte störa pågående dialoger

1. Hämta befintliga leads först:

   ```bash
   curl -s "$SUPABASE_URL/rest/v1/leads?select=id,name,status,trigger_date" \
     -H "apikey: $SUPABASE_SERVICE_ROLE_KEY" \
     -H "Authorization: Bearer $SUPABASE_SERVICE_ROLE_KEY"
   ```

2. Bygg `id` för en kandidat som en slug av namnet: gemener, mellanslag och
   åäö/specialtecken till bindestreck/ascii, t.ex. "Sofia Lindqvist" →
   `sofia-lindqvist`. Om `id` redan finns i tabellen:
   - Status är `Ska ringas`, `Ringd`, `Uppföljning` eller `Möte bokat` →
     **rör inte raden alls.** Personen är redan i en pågående säljprocess;
     hoppa vidare.
   - Status är `Ny` eller `Researchad` och du hittat en genuint ny/starkare
     trigger sedan sist → uppdatera raden med `PATCH` (se nedan) men rör
     **inte** `status`-kolumnen.
   - Status är `Inte relevant` → uppdatera bara om triggern är tydligt ny
     och annorlunda än den som gjorde personen irrelevant förra gången.
   - Annars → hoppa över, ingen förändring.
   Om `id` inte finns: `INSERT` en helt ny rad med `status = 'Ny'`.

3. Skriv INSERT/PATCH via REST API (upsert med `Prefer: resolution=merge-duplicates`
   används bara för nya rader du själv precis avgjort ska skapas — använd
   annars riktad `PATCH` per `id` så du aldrig råkar skriva över `status`):

   ```bash
   # Ny lead
   curl -s -X POST "$SUPABASE_URL/rest/v1/leads" \
     -H "apikey: $SUPABASE_SERVICE_ROLE_KEY" \
     -H "Authorization: Bearer $SUPABASE_SERVICE_ROLE_KEY" \
     -H "Content-Type: application/json" \
     -H "Prefer: return=minimal" \
     -d @lead.json

   # Uppdatera befintlig (Ny/Researchad) med ny trigger-info — status orörd
   curl -s -X PATCH "$SUPABASE_URL/rest/v1/leads?id=eq.sofia-lindqvist" \
     -H "apikey: $SUPABASE_SERVICE_ROLE_KEY" \
     -H "Authorization: Bearer $SUPABASE_SERVICE_ROLE_KEY" \
     -H "Content-Type: application/json" \
     -d @lead-update.json
   ```

   `lead.json` ska matcha kolumnerna i `supabase/schema.sql`: `id, name,
   image_url, current_role, company, location, categories, trigger_text,
   trigger_type, trigger_date, why_call_now, opening_angle, ai_analysis,
   scores, contact, sources, status, added_date`. `ai_analysis`, `scores`,
   `contact` och `sources` är JSON-objekt/-listor, `categories` är en
   textlista, se `src/types.ts` för exakta fältnamn i `ai_analysis`
   (`whoIsThis`, `whatDoingNow`, `freshTrigger`, `whyInterestingNow`,
   `whatBuilding`, `commercialPotential`, `budgetSignals`,
   `contentFitReasoning`, `naturalReasonToCall`).

4. När du är klar, logga körningen:

   ```bash
   curl -s -X POST "$SUPABASE_URL/rest/v1/research_runs" \
     -H "apikey: $SUPABASE_SERVICE_ROLE_KEY" \
     -H "Authorization: Bearer $SUPABASE_SERVICE_ROLE_KEY" \
     -H "Content-Type: application/json" \
     -H "Prefer: return=minimal" \
     -d '{"candidates_evaluated": 34, "leads_added": 7, "leads_updated": 2, "notes": "Kort sammanfattning av veckans körning."}'
   ```

## Arbetsgång i korthet

1. Kontrollera miljövariabler. Avbryt om de saknas.
2. Sök brett (10–20 sökningar över flera källtyper), samla kandidater.
3. För varje lovande kandidat: verifiera med minst en riktig källa, läs
   den faktiskt (WebFetch) innan du skriver något om personen.
4. Filtrera hårt — behåll bara personer med en konkret, färsk, källbelagd
   trigger som passar målgruppen.
5. Kör dubblettkontrollen (steg ovan) mot befintliga leads.
6. Skriv AI-analys, scores, `why_call_now` och `opening_angle` för varje
   godkänd kandidat.
7. Skriv till Supabase (INSERT/PATCH som ovan).
8. Logga körningen i `research_runs`.
9. Avsluta med en kort sammanfattning i klartext (hur många kandidater
   granskade, hur många nya/uppdaterade leads, ev. anledning om få/inga
   höll måttet denna vecka).
