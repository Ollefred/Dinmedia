import type { Lead } from '../types'

// Mockdata för att testa konceptet visuellt.
// I skarpt läge ersätts detta av AI-researchern som hämtar från
// Google News, LinkedIn, bolagsregister, podcastplattformar m.fl.
export const mockLeads: Lead[] = [
  {
    id: 'l-001',
    name: 'Sofia Lindqvist',
    imageUrl: '',
    currentRole: 'Tidigare HR-direktör, nu ledarskapscoach',
    company: 'Lindqvist Leadership AB',
    location: 'Stockholm',
    categories: ['Coach', 'Före detta företagsledare'],
    trigger:
      'Lämnade sin roll som HR-direktör på ett börsbolag och lanserade en digital ledarskapskurs "Leda med Tillit". Har de senaste tre veckorna publicerat 2-3 inlägg/vecka om sin egen ledarskapsmetod på LinkedIn.',
    triggerType: 'Kurslansering',
    triggerDate: '2026-09-22',
    whyCallNow:
      'Har precis lämnat sin fasta roll och lanserat en egen ledarskapsutbildning.',
    openingAngle:
      'Såg att du precis lanserat utbildningen efter flera år som HR-chef. Blev nyfiken på hur du tänker kring att bygga ditt eget namn parallellt med själva erbjudandet.',
    aiAnalysis: {
      whoIsThis:
        'Sofia Lindqvist var HR-direktör på ett större svenskt börsbolag i sju år innan hon lämnade rollen i augusti 2026.',
      whatDoingNow:
        'Driver sedan augusti eget bolag och säljer ledarskapscoaching samt en nylanserad digital kurs riktad mot mellanchefer.',
      freshTrigger:
        'Lanserade den digitala kursen "Leda med Tillit" den 22 september 2026 och har sedan dess ökat sin publiceringstakt på LinkedIn kraftigt (från ca 1 inlägg/månad till 2-3/vecka).',
      whyInterestingNow:
        'Hon är mitt i uppbyggnaden av ett personligt varumärke men saknar fortfarande sammanhängande visuell identitet, hemsida och content-strategi bortom LinkedIn-textinlägg.',
      whatBuilding:
        'Verkar bygga ett skalbart utbildnings- och föreläsningskoncept kring sin ledarskapsmetod, med kursen som första produkt.',
      commercialPotential:
        'Hög. Har redan en betalprodukt (kurs, ca 4 000 kr/deltagare) och 14 års erfarenhet från seniora roller som ger trovärdighet mot företagskunder.',
      budgetSignals: [
        'Driver eget aktiebolag sedan augusti 2026',
        'Säljer en prissatt digital produkt redan idag',
        '14 år i seniora HR-roller på börsbolag',
        'Har investerat i egen hemsida och bokningssystem för coaching',
      ],
      contentFitReasoning:
        'Skriver redan regelbundet, har en tydlig metod att kommunicera och en berättelse (från börsbolag till eget bolag) som fungerar mycket bra som content.',
      naturalReasonToCall:
        'Hon är i uppstartsfasen av sitt varumärke just nu — exakt när professionellt content och strategi gör störst skillnad för hennes framtida prissättning.',
    },
    scores: { timing: 9, commercial: 7, contentFit: 9 },
    contact: {
      phone: '070-123 45 67',
      email: 'sofia@lindqvistleadership.se',
      linkedin: 'linkedin.com/in/sofialindqvist',
    },
    sources: [
      { label: 'LinkedIn-inlägg om kurslansering', url: 'https://linkedin.com/posts/example-1', date: '2026-09-22' },
      { label: 'Lindqvist Leadership AB - hemsida', url: 'https://example.com/lindqvist', date: '2026-09-23' },
    ],
    status: 'Ny',
    addedDate: '2026-09-29',
  },
  {
    id: 'l-002',
    name: 'Marcus Bern',
    imageUrl: '',
    currentRole: 'Programledare, nu även föreläsare',
    company: 'Frilans',
    location: 'Göteborg',
    categories: ['Programledare', 'Föreläsare', 'Profil'],
    trigger:
      'Lämnade sin fasta roll som programledare på regional radio i juni. Har sedan dess börjat ta uppdrag som moderator/föreläsare på företagsevent — tre bokade uppdrag på fem veckor enligt talarförmedlingen Speakers House.',
    triggerType: 'Fler föreläsningsuppdrag',
    triggerDate: '2026-09-18',
    whyCallNow:
      'Har på kort tid gått från en handfull till tre bokade företagsuppdrag och saknar egen hemsida att hänvisa bokare till.',
    openingAngle:
      'Noterade att du dykt upp hos Speakers House och redan fått flera bokningar sen du slutade på radion. Hur ser du på att bygga ett eget varumärke som talare vid sidan om uppdragen?',
    aiAnalysis: {
      whoIsThis:
        'Marcus Bern var en känd lokal radioröst i Västsverige under åtta år innan han lämnade sin tjänst i juni 2026.',
      whatDoingNow:
        'Frilansar som moderator och föreläsare, och har nyligen listats hos talarförmedlingen Speakers House.',
      freshTrigger:
        'Fick sitt tredje företagsuppdrag som moderator inom loppet av fem veckor (senast bekräftat 18 september 2026), en tydlig ökning jämfört med tidigare sporadiska uppdrag.',
      whyInterestingNow:
        'Efterfrågan ökar snabbt men han saknar egen hemsida, showreel och ett tydligt personligt erbjudande — bokare hänvisas idag enbart till talarförmedlingens standardprofil.',
      whatBuilding:
        'Bygger sannolikt en karriär som professionell moderator/föreläsare och behöver differentiera sig från andra profiler i samma nisch.',
      commercialPotential:
        'Medel till hög. Föreläsningsarvoden ger honom redan en intäktston, men utan eget varumärke konkurrerar han på förmedlingens villkor snarare än sina egna.',
      budgetSignals: [
        'Tre betalda företagsuppdrag på fem veckor',
        'Listad hos etablerad talarförmedling',
        'Åtta år som välkänd medieprofil regionalt',
      ],
      contentFitReasoning:
        'Van vid att synas och prata inför publik, men har näst intill ingen egen digital närvaro utanför förmedlingens sida — stor outnyttjad potential.',
      naturalReasonToCall:
        'Efterfrågan är het just nu. Om han bygger sitt eget varumärke innan förmedlingen blir hans huvudsakliga kanal kan han förhandla högre arvoden på sikt.',
    },
    scores: { timing: 8, commercial: 6, contentFit: 8 },
    contact: {
      phone: '073-234 56 78',
      email: 'marcus.bern@example.se',
      linkedin: 'linkedin.com/in/marcusbern',
    },
    sources: [
      { label: 'Speakers House - talarprofil', url: 'https://example.com/speakershouse/marcus-bern', date: '2026-09-18' },
      { label: 'Lokalt branschmagasin, notis om uppdrag', url: 'https://example.com/nyhet-marcus', date: '2026-09-10' },
    ],
    status: 'Researchad',
    addedDate: '2026-09-27',
  },
  {
    id: 'l-003',
    name: 'Elin Fransson',
    imageUrl: '',
    currentRole: 'Författare och relationsexpert',
    company: '',
    location: 'Malmö',
    categories: ['Författare', 'Expert'],
    trigger:
      'Släppte sin första bok "Modet att Stanna" den 8 september 2026 på ett mindre förlag. Har därefter medverkat i två poddar och en morgonsoffa (lokal-TV) under samma månad.',
    triggerType: 'Boklansering',
    triggerDate: '2026-09-08',
    whyCallNow:
      'Debutboken är tre veckor gammal och hon får just nu mediauppmärksamhet hon inte haft tidigare, men saknar en samlad digital plattform att fånga upp intresset på.',
    openingAngle:
      'Grattis till boken! Såg dig i morgonsoffan förra veckan. Undrar hur du tänker fånga upp allt det nya intresset digitalt när mediarundan lugnar ner sig.',
    aiAnalysis: {
      whoIsThis:
        'Elin Fransson är parterapeut i grunden och debuterade som författare i september 2026 med boken "Modet att Stanna".',
      whatDoingNow:
        'Driver en mindre terapipraktik samtidigt som hon just nu gör mediarundor för att lansera sin bok.',
      freshTrigger:
        'Boksläpp 8 september 2026 följt av medverkan i två poddar och lokal-TV under samma tre veckor — ovanligt hög exponering för en debutant.',
      whyInterestingNow:
        'Hon rider just nu på en våg av uppmärksamhet som normalt klingar av inom några veckor om den inte fångas upp digitalt och omvandlas till en byggd följarskara.',
      whatBuilding:
        'Verkar vilja bygga en plattform som relationsexpert utöver terapipraktiken — troligen fler böcker, föreläsningar och kanske kurser.',
      commercialPotential:
        'Medel. Ingen etablerad verksamhet med anställda ännu, men boken och medietäckningen ger snabbt växande trovärdighet och en tydlig nisch.',
      budgetSignals: [
        'Utgiven bok med aktivt förlagsstöd',
        'Tre medieframträdanden på tre veckor',
        'Etablerad terapipraktik med betalande klienter sedan tidigare',
      ],
      contentFitReasoning:
        'Har en färdig historia (boken), är van att synas i media just nu och har ett ämne (relationer) som fungerar mycket väl som content.',
      naturalReasonToCall:
        'Uppmärksamheten kring boken är färsk men flyktig — ju längre hon väntar med att bygga en digital plattform, desto mer av intresset går förlorat.',
    },
    scores: { timing: 9, commercial: 5, contentFit: 8 },
    contact: {
      phone: '076-345 67 89',
      email: 'elin@elinfransson.se',
      linkedin: 'linkedin.com/in/elinfransson',
    },
    sources: [
      { label: 'Förlagets pressmeddelande', url: 'https://example.com/pressmeddelande-elin', date: '2026-09-08' },
      { label: 'Podcastavsnitt "Relationspodden"', url: 'https://example.com/podd-elin', date: '2026-09-15' },
    ],
    status: 'Ny',
    addedDate: '2026-09-29',
  },
  {
    id: 'l-004',
    name: 'Jonas Åkerlund',
    imageUrl: '',
    currentRole: 'Tidigare vd, nu styrelseproffs och rådgivare',
    company: 'Åkerlund Advisory',
    location: 'Stockholm',
    categories: ['Konsult', 'Före detta företagsledare', 'Expert'],
    trigger:
      'Klev av som vd för ett medelstort industribolag i somras efter tio år på posten. Registrerade nytt bolag "Åkerlund Advisory AB" den 3 september 2026 och har börjat erbjuda strategirådgivning till styrelser.',
    triggerType: 'Nytt bolag registrerat',
    triggerDate: '2026-09-03',
    whyCallNow:
      'Registrerade sitt nya rådgivningsbolag för tre veckor sedan efter tio år som vd och behöver bygga trovärdighet som oberoende rådgivare, inte bara "förre detta vd:n".',
    openingAngle:
      'Såg att du startat Åkerlund Advisory efter tio år som vd. Hur tänker du positionera dig som rådgivare nu när du inte längre har ett bolag i ryggen som referens?',
    aiAnalysis: {
      whoIsThis:
        'Jonas Åkerlund var vd för ett medelstort svenskt industribolag i tio år fram till sommaren 2026.',
      whatDoingNow:
        'Bygger upp ett nytt rådgivningsbolag och har börjat ta uppdrag som styrelseledamot och strategisk rådgivare.',
      freshTrigger:
        'Nyregistrerat aktiebolag (Åkerlund Advisory AB) den 3 september 2026 i Bolagsverkets register, med verksamhetsbeskrivning "strategisk rådgivning och styrelsearbete".',
      whyInterestingNow:
        'Han går just nu från att vara känd internt i en bransch till att behöva bygga ett offentligt, oberoende varumärke — en klassisk övergång där personligt content är avgörande för att få in uppdrag.',
      whatBuilding:
        'Bygger en rådgivnings- och styrelseportfölj där hans eget namn och trovärdighet är hela produkten.',
      commercialPotential:
        'Hög. Tio år som vd ger stor trovärdighet mot företagskunder, och rådgivningsuppdrag och styrelsearvoden ligger typiskt på nivåer som gör 15 000 kr/månad i content en marginell kostnad.',
      budgetSignals: [
        'Nyregistrerat aktiebolag med rådgivningsverksamhet',
        'Tio år som vd för medelstort industribolag',
        'Målgrupp är styrelser och företagsledningar (företagskunder)',
        'Inga tecken på egen hemsida eller LinkedIn-aktivitet ännu — tidigt skede, stort utrymme',
      ],
      contentFitReasoning:
        'Har ännu ingen digital närvaro men mycket substans att kommunicera (tio års vd-erfarenhet). Behöver hjälp att komma igång, vilket gör honom till en tydlig "från noll"-kund.',
      naturalReasonToCall:
        'Han är i uppstarten av sitt rådgivningsbolag och har ännu inte etablerat sitt nya varumärke — perfekt tajming innan han hittar ett annat sätt att synas.',
    },
    scores: { timing: 8, commercial: 9, contentFit: 6 },
    contact: {
      phone: '070-456 78 90',
      email: 'jonas@akerlundadvisory.se',
      linkedin: 'linkedin.com/in/jonasakerlund',
    },
    sources: [
      { label: 'Bolagsverket - nyregistrering', url: 'https://example.com/bolagsverket-akerlund', date: '2026-09-03' },
      { label: 'Branschtidning, kort notis om avgång', url: 'https://example.com/notis-akerlund', date: '2026-06-20' },
    ],
    status: 'Ska ringas',
    addedDate: '2026-09-25',
  },
  {
    id: 'l-005',
    name: 'Amanda Sjöberg',
    imageUrl: '',
    currentRole: 'Skådespelare, nu även föreläsare om scenframträdande',
    company: '',
    location: 'Stockholm',
    categories: ['Skådespelare', 'Föreläsare'],
    trigger:
      'Efter en roll i en uppmärksammad tv-produktion har hon börjat hålla workshops för företag i "närvaro och kommunikation" — tre workshops genomförda sedan i somras, enligt LinkedIn-inlägg.',
    triggerType: 'Har börjat föreläsa',
    triggerDate: '2026-08-30',
    whyCallNow:
      'Använder sitt genombrott i tv-produktionen för att sälja in företagsworkshops, men marknadsför dem ännu bara via enstaka LinkedIn-inlägg.',
    openingAngle:
      'Kul att se dig gå från skärmen till att hålla workshops om närvaro för företag. Hur ser du på att bygga det här som ett eget spår vid sidan om skådespeleriet?',
    aiAnalysis: {
      whoIsThis:
        'Amanda Sjöberg är utbildad skådespelare som fått ett genombrott genom en uppmärksammad tv-roll under 2026.',
      whatDoingNow:
        'Fortsätter arbeta som skådespelare samtidigt som hon sedan i somras håller företagsworkshops om närvaro och kommunikation.',
      freshTrigger:
        'Tre genomförda workshops för företag sedan slutet av augusti, samtliga omnämnda i egna LinkedIn-inlägg utan någon samlad marknadsföring.',
      whyInterestingNow:
        'Hon har ett färskt medialt genombrott som ger henne uppmärksamhet just nu, och testar parallellt en kommersiell sidoverksamhet som ännu inte är strukturerad.',
      whatBuilding:
        'Verkar utforska ett andra ben som föreläsare/workshopledare med skådespeleriet som trovärdighetsbas.',
      commercialPotential:
        'Medel. Tre betalda workshops indikerar efterfrågan, men ingen synlig prissättning, hemsida eller paketering ännu.',
      budgetSignals: [
        'Tre genomförda företagsworkshops på tio veckor',
        'Färskt medialt genombrott ger förhandlingsstyrka',
        'Ingen egen hemsida eller tydligt erbjudande ännu synligt',
      ],
      contentFitReasoning:
        'Van vid scen och kommunikation professionellt, har en färsk och relaterbar berättelse (skådespelare som lär ut närvaro) som fungerar mycket bra visuellt.',
      naturalReasonToCall:
        'Hon testar just nu om workshopspåret bär, vilket är exakt läget då ett tydligt varumärke kan avgöra om det blir en stadig sidoverksamhet eller rinner ut i sanden.',
    },
    scores: { timing: 6, commercial: 5, contentFit: 8 },
    contact: {
      phone: '072-567 89 01',
      email: 'amanda.sjoberg@example.se',
      linkedin: 'linkedin.com/in/amandasjoberg',
    },
    sources: [
      { label: 'LinkedIn-inlägg om workshop #3', url: 'https://linkedin.com/posts/example-amanda', date: '2026-08-30' },
    ],
    status: 'Ny',
    addedDate: '2026-09-26',
  },
  {
    id: 'l-006',
    name: 'Peter Wallin',
    imageUrl: '',
    currentRole: 'Säljexpert och podcastvärd',
    company: 'Wallin Sales AB',
    location: 'Uppsala',
    categories: ['Expert', 'Entreprenör'],
    trigger:
      'Startade podcasten "Sälj Utan Struntprat" den 1 september 2026. Fem avsnitt publicerade, med gäster från kända svenska säljorganisationer.',
    triggerType: 'Startat podcast',
    triggerDate: '2026-09-01',
    whyCallNow:
      'Ny podcast med fem avsnitt ute och redan tunga gäster — bygger snabbt räckvidd men saknar en samlad visuell identitet mellan podd, LinkedIn och hemsida.',
    openingAngle:
      'Har lyssnat på ett par avsnitt av "Sälj Utan Struntprat" — bra gäster redan från start. Hur tänker du kring att knyta ihop podden med resten av ditt varumärke visuellt?',
    aiAnalysis: {
      whoIsThis:
        'Peter Wallin har drivit säljutbildningsbolaget Wallin Sales i fem år och är en etablerad men lokalt känd profil inom B2B-sälj.',
      whatDoingNow:
        'Driver sitt utbildningsbolag och lanserade i september en egen podcast för att bredda sin räckvidd nationellt.',
      freshTrigger:
        'Fem podcastavsnitt publicerade på fyra veckor (start 1 september 2026), med gäster från välkända svenska säljorganisationer redan i de första avsnitten.',
      whyInterestingNow:
        'Han satsar aktivt på att växa sin räckvidd bortom det lokala nätverket just nu, vilket är ett tydligt fönster för att professionalisera varumärket innan podden hittar sin form på egen hand.',
      whatBuilding:
        'Bygger en nationell plattform för sitt säljutbildningsbolag med podden som draglok för nya kunder och samarbeten.',
      commercialPotential:
        'Hög. Har ett etablerat bolag med fem års historik, betalande företagskunder inom utbildning, och investerar redan tid i en ny kanal.',
      budgetSignals: [
        'Femårigt etablerat utbildningsbolag',
        'Har redan företagskunder inom B2B-sälj',
        'Investerar aktivt i ny kanal (podcast) med produktionskostnad',
        'Bokar tunga gäster vilket kräver egen relationskapital',
      ],
      contentFitReasoning:
        'Redan van att prata inför mikrofon och kamera genom podden, har ett tydligt expertområde och en produkt (utbildning) som drar nytta av synlighet.',
      naturalReasonToCall:
        'Podden är ny och formbar just nu — rätt läge att bygga en sammanhållen visuell och innehållsmässig strategi innan vanor sätter sig.',
    },
    scores: { timing: 7, commercial: 8, contentFit: 7 },
    contact: {
      phone: '070-678 90 12',
      email: 'peter@wallinsales.se',
      linkedin: 'linkedin.com/in/peterwallin',
    },
    sources: [
      { label: 'Podcast "Sälj Utan Struntprat" på Spotify', url: 'https://example.com/podd-wallin', date: '2026-09-01' },
      { label: 'Wallin Sales AB - hemsida', url: 'https://example.com/wallinsales', date: '2026-09-20' },
    ],
    status: 'Researchad',
    addedDate: '2026-09-24',
  },
  {
    id: 'l-007',
    name: 'Nadia Cederholm',
    imageUrl: '',
    currentRole: 'Tech-entreprenör och grundare',
    company: 'Cedra AI',
    location: 'Stockholm',
    categories: ['Entreprenör', 'Grundare'],
    trigger:
      'Tog in en pre-seed-runda för sitt AI-bolag Cedra AI (pressmeddelande 25 september 2026) och har efter det börjat synas i branschmedia som en profil att hålla koll på inom svensk AI-startup-scen.',
    triggerType: 'Fått genombrott/uppmärksamhet',
    triggerDate: '2026-09-25',
    whyCallNow:
      'Finansieringsrundan är fem dagar gammal och hon är just nu ett hett namn i startup-medier — ett kort fönster innan uppmärksamheten går till nästa bolag.',
    openingAngle:
      'Grattis till pre-seed-rundan! Nu när Cedra AI börjar synas i media — hur tänker du kring att bygga ditt eget namn som grundare parallellt med bolagets varumärke?',
    aiAnalysis: {
      whoIsThis:
        'Nadia Cederholm är medgrundare och vd för AI-startupen Cedra AI, verksam inom automatiserad dokumenthantering.',
      whatDoingNow:
        'Driver bolaget genom en tidig tillväxtfas och har precis stängt en pre-seed-finansiering.',
      freshTrigger:
        'Pressmeddelande om pre-seed-runda den 25 september 2026, följt av omnämnanden i två branschmedier inom en vecka.',
      whyInterestingNow:
        'Hon är just nu i strålkastarljuset som grundare vilket är ett tidsbegränsat fönster — investerare, talent och kunder googlar henne aktivt just nu.',
      whatBuilding:
        'Bygger ett teknikbolag där hennes egen trovärdighet som grundare direkt påverkar förmågan att attrahera nästa finansieringsrunda, kunder och medarbetare.',
      commercialPotential:
        'Hög. Nyligen kapitaliserat bolag med investerare i ryggen, vilket normalt innebär en marknadsföringsbudget och ett tydligt intresse av att synas.',
      budgetSignals: [
        'Genomförd pre-seed-finansieringsrunda',
        'Bolag med investerare och tillväxtmål',
        'Medieomnämnanden inom en vecka från nyheten',
        'Konkurrerar i en snabbrörlig bransch där synlighet direkt påverkar affären',
      ],
      contentFitReasoning:
        'Grundarprofiler inom tech är ofta starka content-personer — konkret produkt, tydlig vision och en färsk nyhet att bygga vidare på.',
      naturalReasonToCall:
        'Uppmärksamheten kring finansieringsrundan är på topp just nu och klingar normalt av inom några veckor om den inte omvandlas till ett byggt personligt varumärke.',
    },
    scores: { timing: 10, commercial: 8, contentFit: 8 },
    contact: {
      phone: '076-789 01 23',
      email: 'nadia@cedra.ai',
      linkedin: 'linkedin.com/in/nadiacederholm',
    },
    sources: [
      { label: 'Pressmeddelande, pre-seed-runda', url: 'https://example.com/pressmeddelande-cedra', date: '2026-09-25' },
      { label: 'Branschmedia, artikel om Cedra AI', url: 'https://example.com/artikel-cedra', date: '2026-09-27' },
    ],
    status: 'Ny',
    addedDate: '2026-09-30',
  },
  {
    id: 'l-008',
    name: 'Henrik Dahl',
    imageUrl: '',
    currentRole: 'Kostexpert och kursledare',
    company: 'Dahl Nutrition',
    location: 'Linköping',
    categories: ['Expert', 'Coach'],
    trigger:
      'Har under de senaste sex veckorna ökat sin publiceringstakt på Instagram och LinkedIn kraftigt och annonserat en kommande kurs "från november", men inget konkret lanserat än.',
    triggerType: 'Ökad publiceringstakt',
    triggerDate: '2026-08-20',
    whyCallNow:
      'Signalerna är otydliga — ökad aktivitet men ingen konkret produkt, betalkund eller nyregistrering hittad ännu.',
    openingAngle:
      'Har följt din ökade aktivitet kring kostcoaching senaste tiden. Vad är det du bygger mot just nu?',
    aiAnalysis: {
      whoIsThis:
        'Henrik Dahl är legitimerad dietist som driver enskild firma med individuell kostrådgivning.',
      whatDoingNow:
        'Fortsätter sin kostrådgivning och har på sociala medier aviserat en kommande kurs utan fastställt datum.',
      freshTrigger:
        'Ökad publiceringsfrekvens på Instagram och LinkedIn sedan slutet av augusti, men ingen lanserad produkt, bokad föreläsning eller nyregistrerat bolag har hittats.',
      whyInterestingNow:
        'Triggern är svag — ökad aktivitet är ett tidigt tecken men saknar en konkret, verifierbar händelse. Bör bevakas snarare än kontaktas nu.',
      whatBuilding:
        'Oklart. Möjligen en kommande kurs, men inget datum, pris eller produkt är bekräftat.',
      commercialPotential:
        'Låg till medel. Enskild firma utan anställda och inga tecken på företagskunder eller premiumtjänster ännu.',
      budgetSignals: [
        'Enskild firma, ingen känd anställd personal',
        'Ingen bekräftad betalprodukt ännu',
      ],
      contentFitReasoning:
        'Kost är en innehållsmässigt trång nisch med mycket konkurrens, och utan en tydlig egen metod är differentieringen svag idag.',
      naturalReasonToCall:
        'Svag anledning just nu — bör bevakas till dess en konkret trigger (kurslansering, prissatt produkt) faktiskt inträffar.',
    },
    scores: { timing: 3, commercial: 3, contentFit: 4 },
    contact: {
      phone: '',
      email: 'henrik@dahlnutrition.se',
      linkedin: 'linkedin.com/in/henrikdahl',
    },
    sources: [
      { label: 'Instagram-profil, ökad postfrekvens', url: 'https://example.com/instagram-henrik', date: '2026-08-20' },
    ],
    status: 'Inte relevant',
    addedDate: '2026-09-15',
  },
  {
    id: 'l-009',
    name: 'Camilla Roos',
    imageUrl: '',
    currentRole: 'Tidigare nyhetsankare, nu moderator och föreläsare',
    company: '',
    location: 'Stockholm',
    categories: ['Programledare', 'Profil', 'Föreläsare'],
    trigger:
      'Lämnade sin roll som nyhetsankare på en rikskanal i augusti efter tolv år. Har sedan dess bokats som moderator för två branschkonferenser under oktober, enligt respektive konferens hemsida.',
    triggerType: 'Lämnat större arbetsgivare',
    triggerDate: '2026-09-12',
    whyCallNow:
      'Lämnade en av landets mest kända nyhetsroller för sex veckor sedan och är redan bokad för två konferenser — ett starkt tecken på att hon aktivt bygger en frilanskarriär just nu.',
    openingAngle:
      'Efter tolv år i nyhetsstudion och nu två konferensuppdrag redan bokade — hur ser du på att bygga ett eget varumärke som moderator vid sidan om de klassiska mediauppdragen?',
    aiAnalysis: {
      whoIsThis:
        'Camilla Roos var nyhetsankare på en riksomfattande TV-kanal i tolv år, ett av Sveriges mer kända mediaansikten inom nyheter.',
      whatDoingNow:
        'Frilansar sedan hon lämnade sin tjänst i augusti 2026, med fokus på moderatoruppdrag och föreläsningar.',
      freshTrigger:
        'Bokad som moderator för två branschkonferenser i oktober 2026, bekräftat via respektive konferens officiella hemsida (bokning tillkännagiven 12 september).',
      whyInterestingNow:
        'Hon har mycket hög igenkänning från tolv år i rikstäckande media och är just nu i startfasen av att omvandla den kändisskapen till en egen kommersiell verksamhet.',
      whatBuilding:
        'Bygger sannolikt en karriär som moderator, föreläsare och möjligen egen medieproduktion, med sitt namn som huvudsakliga varumärke.',
      commercialPotential:
        'Mycket hög. Tolv års riksmedial exponering ger extremt hög trovärdighet och attraktionskraft mot företagskunder som bokar moderatorer och talare.',
      budgetSignals: [
        'Två bokade konferensuppdrag inom sex veckor från avgång',
        'Tolv år som riksbekant mediaprofil',
        'Hög allmän igenkänning ger stark förhandlingsposition för arvoden',
      ],
      contentFitReasoning:
        'Professionellt van vid kamera, scen och kommunikation på högsta nivå — mycket starkt content-fit och en berättelse (från nyhetsstudio till eget) som är lätt att paketera.',
      naturalReasonToCall:
        'Hon är i ett kort och avgörande fönster där hon går från anställd mediaprofil till eget varumärke — den som hjälper henne bygga det nu blir en del av hela hennes nya karriär.',
    },
    scores: { timing: 9, commercial: 9, contentFit: 10 },
    contact: {
      phone: '070-890 12 34',
      email: 'camilla.roos@example.se',
      linkedin: 'linkedin.com/in/camillaroos',
    },
    sources: [
      { label: 'Konferenshemsida, talarpresentation', url: 'https://example.com/konferens-camilla', date: '2026-09-12' },
      { label: 'Branschnotis om avgång från nyhetsstudion', url: 'https://example.com/notis-camilla', date: '2026-08-14' },
    ],
    status: 'Ska ringas',
    addedDate: '2026-09-28',
  },
  {
    id: 'l-010',
    name: 'Oskar Lund',
    imageUrl: '',
    currentRole: 'Grundare, teknikkonsultbolag',
    company: 'Lund & Partners',
    location: 'Malmö',
    categories: ['Grundare', 'Konsult', 'Entreprenör'],
    trigger:
      'Har publicerat sin femte artikel på LinkedIn om "framtidens IT-upphandling" på sex veckor och fått betydligt högre engagemang än tidigare inlägg, men ingen ny produkt eller händelse utöver det.',
    triggerType: 'Ökad publiceringstakt',
    triggerDate: '2026-09-05',
    whyCallNow:
      'Genererar stigande engagemang organiskt men saknar fortfarande en tydlig produkt eller ett konkret erbjudande att bygga vidare på.',
    openingAngle:
      'Dina LinkedIn-inlägg om IT-upphandling får allt mer spridning. Har du funderat på att göra det till ett tydligare eget erbjudande?',
    aiAnalysis: {
      whoIsThis:
        'Oskar Lund grundade IT-konsultbolaget Lund & Partners för fyra år sedan och arbetar huvudsakligen med offentlig sektor.',
      whatDoingNow:
        'Driver sitt konsultbolag med ett fåtal anställda och har den senaste tiden skrivit fler LinkedIn-artiklar om sitt expertområde.',
      freshTrigger:
        'Fem LinkedIn-artiklar på sex veckor med stigande engagemang (senaste 5 september), men ingen ny produkt, kurs eller föreläsning har identifierats.',
      whyInterestingNow:
        'Signalen är måttlig — organiskt ökat engagemang tyder på intresse att synas mer, men det saknas en konkret kommersiell trigger att koppla samtalet till.',
      whatBuilding:
        'Oklart om han bygger mot en specifik produkt eller bara vill positionera sig som tankeledare inom sin nisch.',
      commercialPotential:
        'Medel. Etablerat konsultbolag med företagskunder inom offentlig sektor ger ekonomisk stabilitet, men inget tydligt nytt kommersiellt erbjudande syns ännu.',
      budgetSignals: [
        'Fyra år etablerat konsultbolag med anställda',
        'Företagskunder inom offentlig sektor',
        'Stigande organiskt engagemang på LinkedIn',
      ],
      contentFitReasoning:
        'Skriver redan regelbundet och har en tydlig nisch, men saknar en skarp personlig vinkel bortom sakinnehållet.',
      naturalReasonToCall:
        'Svagare trigger än övriga i listan — värt en lägre prioriterad kontakt eller fortsatt bevakning snarare än akut uppringning.',
    },
    scores: { timing: 5, commercial: 6, contentFit: 5 },
    contact: {
      phone: '073-901 23 45',
      email: 'oskar@lundpartners.se',
      linkedin: 'linkedin.com/in/oskarlund',
    },
    sources: [
      { label: 'LinkedIn-artikelserie om IT-upphandling', url: 'https://linkedin.com/pulse/example-oskar', date: '2026-09-05' },
    ],
    status: 'Researchad',
    addedDate: '2026-09-20',
  },
  {
    id: 'l-011',
    name: 'Linnea Ekström',
    imageUrl: '',
    currentRole: 'Elitidrottare (nyligen avslutad karriär), nu föreläsare',
    company: '',
    location: 'Örebro',
    categories: ['Föreläsare', 'Profil'],
    trigger:
      'Avslutade sin elitidrottskarriär officiellt den 15 september 2026 efter en presskonferens som fick stor medial uppmärksamhet. Har inom en vecka fått tre förfrågningar om föreläsningsuppdrag enligt egen LinkedIn-post.',
    triggerType: 'Fått genombrott/uppmärksamhet',
    triggerDate: '2026-09-15',
    whyCallNow:
      'Karriäravslutet är två veckor gammalt och genererar just nu stor medial goodwill och inbound-förfrågningar hon ännu inte hunnit strukturera.',
    openingAngle:
      'Följde din pressträff om karriäravslutet — stark story. Nu när förfrågningarna om föreläsningar redan börjat trilla in, hur tänker du kring att bygga en egen plattform runt det?',
    aiAnalysis: {
      whoIsThis:
        'Linnea Ekström var landslagsaktiv inom sin idrott i över ett decennium och avslutade officiellt karriären i september 2026.',
      whatDoingNow:
        'Befinner sig i en tydlig övergångsfas från elitidrott till civilt liv och har redan börjat få förfrågningar om föreläsningar.',
      freshTrigger:
        'Officiellt karriäravslut med pressträff 15 september 2026, följt av tre inkomna föreläsningsförfrågningar inom en vecka enligt hennes eget LinkedIn-inlägg.',
      whyInterestingNow:
        'Hon har just nu maximal medial goodwill och en stark, känslomässig berättelse om karriär, motgångar och nästa kapitel — perfekt råmaterial för ett personligt varumärke, men inget är strukturerat än.',
      whatBuilding:
        'Håller sannolikt på att forma en ny karriär som föreläsare/förebild, men har ännu inte något bolag, hemsida eller tydligt erbjudande.',
      commercialPotential:
        'Medel till hög. Stark igenkänning och inbound-intresse redan, men avsaknad av struktur (bolag, prissättning) gör att potentialen ännu är obekräftad snarare än bevisad.',
      budgetSignals: [
        'Tre inkomna föreläsningsförfrågningar på en vecka',
        'Stor medial uppmärksamhet kring karriäravslutet',
        'Decennium som landslagsaktiv ger hög trovärdighet och kändisskap',
      ],
      contentFitReasoning:
        'Mycket stark personlig berättelse och van vid att synas offentligt genom sin idrottskarriär — bland de starkaste content-profilerna i listan just nu.',
      naturalReasonToCall:
        'Hon är i det absolut mest formbara ögonblicket av sin nya karriär — innan hon hunnit bestämma sig för en riktning eller redan bundit sig till en förmedling.',
    },
    scores: { timing: 10, commercial: 6, contentFit: 9 },
    contact: {
      phone: '072-012 34 56',
      email: 'linnea.ekstrom@example.se',
      linkedin: 'linkedin.com/in/linneaekstrom',
    },
    sources: [
      { label: 'Pressträff om karriäravslut (klipp)', url: 'https://example.com/press-linnea', date: '2026-09-15' },
      { label: 'LinkedIn-inlägg om föreläsningsförfrågningar', url: 'https://linkedin.com/posts/example-linnea', date: '2026-09-21' },
    ],
    status: 'Ny',
    addedDate: '2026-09-29',
  },
  {
    id: 'l-012',
    name: 'David Berggren',
    imageUrl: '',
    currentRole: 'Managementkonsult, nu egen praktik',
    company: 'Berggren Strategy',
    location: 'Stockholm',
    categories: ['Konsult', 'Expert', 'Entreprenör'],
    trigger:
      'Lämnade en partnerroll på en stor konsultfirma i juli och startade eget i augusti. Har fått sitt första större företagsuppdrag (ramavtal, omnämnt i eget LinkedIn-inlägg) i september och håller på att bygga sin hemsida.',
    triggerType: 'Startat eget företag',
    triggerDate: '2026-09-10',
    whyCallNow:
      'Har precis landat sitt första större kunduppdrag som egen konsult och bygger just nu sin hemsida — helt rätt tajming att forma hela varumärket samtidigt.',
    openingAngle:
      'Grattis till ramavtalet! Som ny egen konsult efter partnerrollen — vad är planen för att bygga ett eget varumärke som håller i längden, inte bara för det här uppdraget?',
    aiAnalysis: {
      whoIsThis:
        'David Berggren var partner på en stor internationell konsultfirma i åtta år innan han lämnade i juli 2026 för att starta eget.',
      whatDoingNow:
        'Driver sin nystartade konsultpraktik Berggren Strategy och landade nyligen sitt första större ramavtal.',
      freshTrigger:
        'Meddelade på LinkedIn den 10 september 2026 att han tecknat ett ramavtal med en ny kund, sitt första större avtal sedan starten i augusti.',
      whyInterestingNow:
        'Han bygger just nu grunden för sin egen praktik och har enligt egen utsago påbörjat arbetet med en ny hemsida — ett tydligt fönster att forma varumärket från grunden.',
      whatBuilding:
        'Bygger en konsultpraktik inom management/strategi där hans personliga trovärdighet från åtta år som partner är kärnan i erbjudandet.',
      commercialPotential:
        'Hög. Åtta år som partner på stor firma, redan ett tecknat ramavtal och en tydlig målgrupp (större företagskunder) som normalt betalar väl för rådgivning.',
      budgetSignals: [
        'Åtta år som partner på stor internationell konsultfirma',
        'Redan tecknat ramavtal som ny egen konsult',
        'Bygger aktivt ny hemsida — investerar i varumärket',
      ],
      contentFitReasoning:
        'Har tung substans att dela men ingen etablerad digital kanal ännu — stort utrymme att bygga från grunden med rätt hjälp.',
      naturalReasonToCall:
        'Han bygger just nu hela sin nya identitet som egen konsult samtidigt som hemsidan är under uppbyggnad — svårt att hitta ett bättre läge att komma in tidigt.',
    },
    scores: { timing: 8, commercial: 9, contentFit: 6 },
    contact: {
      phone: '070-123 98 76',
      email: 'david@berggrenstrategy.se',
      linkedin: 'linkedin.com/in/davidberggren',
    },
    sources: [
      { label: 'LinkedIn-inlägg om nytt ramavtal', url: 'https://linkedin.com/posts/example-david', date: '2026-09-10' },
      { label: 'Berggren Strategy - hemsida (under uppbyggnad)', url: 'https://example.com/berggrenstrategy', date: '2026-09-25' },
    ],
    status: 'Uppföljning',
    addedDate: '2026-09-18',
  },
  {
    id: 'l-013',
    name: 'Maja Holmqvist',
    imageUrl: '',
    currentRole: 'Kreativ chef, på väg mot eget bolag',
    company: 'Frilans (tidigare reklambyrå)',
    location: 'Stockholm',
    categories: ['Konsult', 'Profil', 'Expert'],
    trigger:
      'Lämnade sin roll som kreativ chef på en känd reklambyrå i september och har på LinkedIn skrivit öppet om att hon "bygger något eget inom varumärkesstrategi" utan att ännu ha lanserat något konkret.',
    triggerType: 'Uttryckt vilja att bygga eget',
    triggerDate: '2026-09-19',
    whyCallNow:
      'Har öppet signalerat att hon vill bygga eget efter en profilerad byråroll, men är fortfarande i planeringsstadiet utan lanserad verksamhet.',
    openingAngle:
      'Såg att du skrivit om att bygga något eget efter din tid som kreativ chef. Var befinner du dig i det just nu — och kan jag hjälpa till att tänka högt kring det?',
    aiAnalysis: {
      whoIsThis:
        'Maja Holmqvist var kreativ chef på en välkänd svensk reklambyrå i sex år fram till september 2026.',
      whatDoingNow:
        'Frilansar tillfälligt medan hon enligt egna uttalanden planerar att starta eget inom varumärkesstrategi.',
      freshTrigger:
        'LinkedIn-inlägg den 19 september 2026 där hon skriver att hon "bygger något eget" utan ytterligare detaljer om bolag, produkt eller lansering.',
      whyInterestingNow:
        'Hon har uttryckt tydlig avsikt men inget är ännu konkretiserat — ett tidigt läge som kan vara värdefullt om hon är mottaglig för hjälp att forma varumärket från start, men mer osäkert än leads med en bekräftad lansering.',
      whatBuilding:
        'Oklart i detalj, men troligen ett konsult- eller rådgivningserbjudande inom varumärke och kreativ strategi.',
      commercialPotential:
        'Medel. Sex år som kreativ chef på känd byrå ger stark trovärdighet, men inget bolag eller betalande kund är ännu bekräftat.',
      budgetSignals: [
        'Sex år som kreativ chef på välkänd reklambyrå',
        'Starkt professionellt nätverk inom varumärke och kommunikation',
        'Inget bolag eller produkt bekräftat ännu',
      ],
      contentFitReasoning:
        'Kreativ bakgrund och van vid varumärkesarbete professionellt — sannolikt mycket goda förutsättningar för starkt eget content när hon väl landar i en riktning.',
      naturalReasonToCall:
        'Hon är i ett tidigt, formbart skede — värd kontakt men med förväntan att det kan handla om att så ett frö snarare än en färdig affär idag.',
    },
    scores: { timing: 6, commercial: 5, contentFit: 8 },
    contact: {
      phone: '076-234 56 90',
      email: 'maja.holmqvist@example.se',
      linkedin: 'linkedin.com/in/majaholmqvist',
    },
    sources: [
      { label: 'LinkedIn-inlägg om att bygga eget', url: 'https://linkedin.com/posts/example-maja', date: '2026-09-19' },
    ],
    status: 'Ny',
    addedDate: '2026-09-28',
  },
  {
    id: 'l-014',
    name: 'Anders Kling',
    imageUrl: '',
    currentRole: 'Ekonomiexpert och kolumnist',
    company: '',
    location: 'Stockholm',
    categories: ['Expert', 'Profil'],
    trigger:
      'Har varit återkommande ekonomikommentator i affärsmedia i över tre år med jämn men oförändrad synlighet. Ingen ny händelse identifierad senaste kvartalet.',
    triggerType: 'Ingen färsk trigger',
    triggerDate: '2026-06-01',
    whyCallNow:
      'Ingen konkret färsk trigger hittad — stabil men "gammal" profil utan tecken på förändring just nu.',
    openingAngle:
      '',
    aiAnalysis: {
      whoIsThis:
        'Anders Kling är en etablerad ekonomikommentator som regelbundet anlitas av affärsmedia.',
      whatDoingNow:
        'Fortsätter i samma roll som han haft i flera år, utan synlig förändring i verksamhet eller ambition.',
      freshTrigger:
        'Ingen färsk, konkret trigger har identifierats de senaste tre månaderna — aktiviteten är stabil snarare än förändrad.',
      whyInterestingNow:
        'Uppfyller inte kravet på färsk timing. Bör inte kontaktas nu enligt systemets kriterier, men kan bevakas om en ny händelse dyker upp.',
      whatBuilding: 'Inget tecken på förändring i vad han bygger mot.',
      commercialPotential: 'Okänd — ingen ny signal att bedöma mot.',
      budgetSignals: [],
      contentFitReasoning:
        'Redan en etablerad mediaprofil, men utan färsk trigger finns ingen naturlig anledning att höra av sig just nu.',
      naturalReasonToCall:
        'Ingen — detta är ett exempel på en person som systemet korrekt väljer att INTE lyfta fram eftersom ingen stark, aktuell trigger finns.',
    },
    scores: { timing: 1, commercial: 4, contentFit: 5 },
    contact: {
      phone: '',
      email: '',
      linkedin: 'linkedin.com/in/anderskling',
    },
    sources: [
      { label: 'Affärsmedia, återkommande kommentator', url: 'https://example.com/kling-arkiv', date: '2026-06-01' },
    ],
    status: 'Inte relevant',
    addedDate: '2026-09-05',
  },
  {
    id: 'l-015',
    name: 'Ida Renström',
    imageUrl: '',
    currentRole: 'Före detta elithandbollsspelare, nu affärscoach',
    company: 'Renström Performance',
    location: 'Kristianstad',
    categories: ['Coach', 'Föreläsare'],
    trigger:
      'Höll sin första betalda företagsföreläsning om "prestationskultur" den 26 september 2026 för ett medelstort bolag, efter att ha byggt upp sitt varumärke organiskt under våren. Fick mycket positiv respons och en uppföljande förfrågan samma vecka.',
    triggerType: 'Har börjat föreläsa',
    triggerDate: '2026-09-26',
    whyCallNow:
      'Höll sin första betalda företagsföreläsning för fyra dagar sedan och fick direkt en uppföljande förfrågan — tydligt tecken på att efterfrågan just har tänt.',
    openingAngle:
      'Hörde att din första företagsföreläsning om prestationskultur gick riktigt bra och redan gett en ny förfrågan. Hur ser planen ut för att ta det vidare på riktigt?',
    aiAnalysis: {
      whoIsThis:
        'Ida Renström spelade handboll på elitnivå i tio år och driver sedan ett år tillbaka enskild firma inom prestationscoaching.',
      whatDoingNow:
        'Coachar idag enskilda klienter och höll nyligen sin första betalda föreläsning för ett företag.',
      freshTrigger:
        'Genomförde sin första betalda företagsföreläsning den 26 september 2026 och fick en uppföljande förfrågan om ny föreläsning inom samma vecka.',
      whyInterestingNow:
        'Detta är ett tydligt vändpunktsögonblick — övergången från enskild coaching till betalda företagsföreläsningar just har inträffat och validerats direkt av marknaden.',
      whatBuilding:
        'Bygger en föreläsnings- och coachingverksamhet riktad mot företag, med sin idrottsbakgrund som grund för konceptet "prestationskultur".',
      commercialPotential:
        'Medel till hög. Första företagsuppdraget är precis validerat med omedelbar efterfrågan, vilket är ett starkt tidigt signal även om historiken ännu är kort.',
      budgetSignals: [
        'Första betalda företagsföreläsningen direkt uppföljd av ny förfrågan',
        'Tio år som elitidrottare ger trovärdig bakgrundshistoria',
        'Enskild firma redan igång sedan ett år',
      ],
      contentFitReasoning:
        'Stark personlig historia (elitidrott till coaching) och har precis bevisat att konceptet fungerar i företagsmiljö — mycket goda förutsättningar för content som visar resan.',
      naturalReasonToCall:
        'Hon är i det exakta ögonblick då efterfrågan just bevisats — nästa steg är att bygga en plattform som kan ta emot fler uppdrag innan hon tackar nej i brist på kapacitet eller synlighet.',
    },
    scores: { timing: 10, commercial: 6, contentFit: 9 },
    contact: {
      phone: '073-345 67 12',
      email: 'ida@renstromperformance.se',
      linkedin: 'linkedin.com/in/idarenstrom',
    },
    sources: [
      { label: 'LinkedIn-inlägg efter föreläsning', url: 'https://linkedin.com/posts/example-ida', date: '2026-09-26' },
    ],
    status: 'Ny',
    addedDate: '2026-09-30',
  },
  {
    id: 'l-016',
    name: 'Robert Nyman',
    imageUrl: '',
    currentRole: 'Tidigare tv-kock, nu föreläsare om entreprenörskap',
    company: 'Nyman & Co',
    location: 'Helsingborg',
    categories: ['Profil', 'Entreprenör', 'Föreläsare'],
    trigger:
      'Sålde sin restaurangkedja i juni 2026 och lanserade i september en föreläsningsserie om entreprenörskap riktad mot branschorganisationer. Möte bokat med Din Media efter inledande kontakt.',
    triggerType: 'Sålt bolag / ny fas',
    triggerDate: '2026-09-14',
    whyCallNow:
      'Sålde sin restaurangkedja i somras och lanserade i september en föreläsningsserie — redan i konkret uppstartsfas.',
    openingAngle:
      'Efter försäljningen av kedjan och nu föreläsningsserien om entreprenörskap — vi ses ju redan på mötet, så här kan vi förbereda oss tillsammans.',
    aiAnalysis: {
      whoIsThis:
        'Robert Nyman byggde och sålde en regional restaurangkedja och är sedan tidigare känd genom medverkan i en tv-produktion om matlagning.',
      whatDoingNow:
        'Har efter försäljningen i juni börjat bygga en ny verksamhet kring föreläsningar om entreprenörskap och varumärkesbyggande i restaurangbranschen.',
      freshTrigger:
        'Lanserade i september 2026 en föreläsningsserie riktad mot branschorganisationer, kort efter att försäljningen av restaurangkedjan slutfördes.',
      whyInterestingNow:
        'Har både kapital från försäljningen och en färsk, stark story att bygga varumärke kring — ett ovanligt starkt kommersiellt läge.',
      whatBuilding:
        'Bygger en föreläsnings- och rådgivningsverksamhet riktad mot entreprenörer och restaurangbranschen, med sin egen framgångshistoria som bas.',
      commercialPotential:
        'Mycket hög. Kapital från bolagsförsäljning, etablerat varumärke från tv och egen kedja, samt en redan lanserad föreläsningsserie mot organisationer.',
      budgetSignals: [
        'Genomförd försäljning av egen restaurangkedja',
        'Tidigare tv-medverkan ger hög igenkänning',
        'Redan lanserad föreläsningsserie mot branschorganisationer',
      ],
      contentFitReasoning:
        'Mycket stark personlig historia och medial vana genom tv, plus en tydlig ny satsning att kommunicera kring.',
      naturalReasonToCall:
        'Redan i dialog — mötet är bokat och det här är ett exempel på var i flödet ett lead hamnar efter att status uppdaterats manuellt.',
    },
    scores: { timing: 8, commercial: 9, contentFit: 8 },
    contact: {
      phone: '070-456 12 34',
      email: 'robert@nymanco.se',
      linkedin: 'linkedin.com/in/robertnyman',
    },
    sources: [
      { label: 'Pressmeddelande om försäljning', url: 'https://example.com/press-nyman', date: '2026-06-10' },
      { label: 'Föreläsningsserie, lanseringssida', url: 'https://example.com/nymanco-forelasning', date: '2026-09-14' },
    ],
    status: 'Möte bokat',
    addedDate: '2026-09-16',
  },
  {
    id: 'l-017',
    name: 'Sara Lindberg',
    imageUrl: '',
    currentRole: 'Jurist, nu digital föreläsare inom arbetsrätt',
    company: 'Lindberg Juridik',
    location: 'Stockholm',
    categories: ['Expert', 'Konsult'],
    trigger:
      'Lanserade en betald webinarserie om nya arbetsrättsregler den 29 september 2026 (igår) riktad mot HR-avdelningar, med över 200 anmälda till första tillfället enligt eget LinkedIn-inlägg.',
    triggerType: 'Kurslansering',
    triggerDate: '2026-09-29',
    whyCallNow:
      'Lanserade sin betalda webinarserie igår med redan 200+ anmälda — en mycket stark validering av efterfrågan i realtid.',
    openingAngle:
      'Wow, 200 anmälda redan till första webinariet om de nya arbetsrättsreglerna! Hur tänker du skala det här vidare nu när det tagit fart så snabbt?',
    aiAnalysis: {
      whoIsThis:
        'Sara Lindberg är arbetsrättsjurist och driver en mindre juridikbyrå med fokus på HR-relaterad rådgivning.',
      whatDoingNow:
        'Driver sin juridikbyrå och lanserade igår en ny betald webinarserie riktad mot HR-avdelningar på företag.',
      freshTrigger:
        'Lanserade webinarserien "Nya arbetsrättsregler 2026" den 29 september, med över 200 anmälningar till det första tillfället inom det första dygnet.',
      whyInterestingNow:
        'Detta är en mycket färsk och starkt validerad trigger — en produktlansering igår med omedelbart högt genomslag visar att hon just nu har medvind att bygga vidare på.',
      whatBuilding:
        'Bygger en skalbar utbildningsverksamhet inom arbetsrätt riktad mot HR-avdelningar, vid sidan om den traditionella juridikrådgivningen.',
      commercialPotential:
        'Hög. Etablerad juridikbyrå med företagskunder, och en ny betald produkt med starkt initialt genomslag (200+ anmälda på ett dygn).',
      budgetSignals: [
        'Etablerad juridikbyrå med företagskunder inom HR',
        'Ny betald webinarserie med starkt initialt genomslag',
        'Driver egen verksamhet med investerad tid i ny produkt',
      ],
      contentFitReasoning:
        'Har ett skarpt expertområde (arbetsrätt) med tydlig efterfrågan just nu, men behöver hjälp att paketera sig visuellt bortom det juridiska sakinnehållet.',
      naturalReasonToCall:
        'Lanseringen skedde igår och är fortfarande i sitt mest aktuella skede — perfekt läge att fånga momentum innan nästa regeländring blir nyheten istället.',
    },
    scores: { timing: 10, commercial: 8, contentFit: 7 },
    contact: {
      phone: '072-678 90 45',
      email: 'sara@lindbergjuridik.se',
      linkedin: 'linkedin.com/in/saralindberg',
    },
    sources: [
      { label: 'LinkedIn-inlägg om webinarlansering', url: 'https://linkedin.com/posts/example-sara', date: '2026-09-29' },
      { label: 'Lindberg Juridik - webinarsida', url: 'https://example.com/lindbergjuridik-webinar', date: '2026-09-29' },
    ],
    status: 'Ny',
    addedDate: '2026-09-30',
  },
]
