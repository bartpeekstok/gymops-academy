import type { LucideIcon } from "lucide-react";
import {
  Calendar,
  Contact,
  LayoutDashboard,
  ListTodo,
  Megaphone,
  MessageSquare,
  Settings,
  UserPlus,
  Workflow,
} from "lucide-react";

export type LessonWorkflow = {
  name: string;
  whatsapp: string;
};

export type LessonVideo = {
  title?: string;
  loomId: string;
};

export type Lesson = {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  loomId?: string;
  videos?: LessonVideo[];
  image?: string;
  imageAlt?: string;
  durationMinutes?: number;
  workflows?: LessonWorkflow[];
};

export type Module = {
  slug: string;
  title: string;
  description?: string;
  lessons: Lesson[];
  submodules?: Module[];
};

export type Course = {
  slug: string;
  title: string;
  description: string;
  intro?: string;
  icon: LucideIcon;
  modules: Module[];
};

const contactenModule: Module = {
  slug: "contacten",
  title: "Contacten",
  lessons: [
    {
      slug: "introductie-contacten",
      title: "Introductie contacten",
      description:
        "Contacten vormen de basis van GymOps. Elke lead, elk lid en elke oud-klant heeft een eigen contactkaart waarop alles samenkomt: hun gegevens, de communicatie die je met ze hebt gehad, afspraken, taken en in welke fase ze zich bevinden.\n\nOmdat alles aan een contact gekoppeld is, weet je altijd precies met wie je te maken hebt en wat er speelt. In de volgende lessen laten we zien hoe je contacten aanmaakt, bekijkt, bewerkt, samenvoegt en hoe je met slimme lijsten snel de juiste mensen filtert.",
    },
    {
      slug: "introductie",
      title: "Rondleiding contacten",
      description:
        "Een korte rondleiding door het onderdeel Contacten in GymOps, zodat je weet waar je alles terugvindt.",
      loomId: "e7b00165744c4508b33e75341ea2252b",
      durationMinutes: 2,
    },
    {
      slug: "nieuw-contact-aanmaken",
      title: "Nieuw contact aanmaken",
      description:
        "Hier laten we zien hoe je handmatig een nieuw contact aanmaakt en welke gegevens je het beste meteen invult.",
      loomId: "5397bc98684848cc99258b000e93907a",
      durationMinutes: 3,
    },
    {
      slug: "contactkaart-bekijken",
      title: "Contactkaart bekijken",
      description:
        "De contactkaart is het overzicht van alles wat bij een contact hoort. We laten zien welke informatie je hier vindt en hoe je die gebruikt.",
      loomId: "5ae0568a8aa24b088bc52f11cb5f943d",
      durationMinutes: 7,
    },
    {
      slug: "contact-bewerken",
      title: "Contact bewerken",
      description:
        "Pas eenvoudig de gegevens van een contact aan, bijvoorbeeld een telefoonnummer, e-mailadres of andere details.",
      loomId: "d72f56f9b1574af1be1547d69061d5ea",
      durationMinutes: 1,
    },
    {
      slug: "dubbele-contacten-samenvoegen",
      title: "Dubbele contacten samenvoegen",
      description:
        "Soms ontstaat hetzelfde contact twee keer. Hier zie je hoe je dubbele contacten samenvoegt, zodat alle informatie weer op één kaart staat.",
      loomId: "e61aa4e9660a49cbb4220e3b58562940",
      durationMinutes: 3,
    },
    {
      slug: "melding-duplicated-contacts-oplossen",
      title: "Melding duplicated contacts oplossen",
      description:
        "Een telefoonnummer of e-mailadres kan in GymOps maar aan één contact gekoppeld zijn. Krijg je de melding 'duplicated contact'? Dan komt dat doordat hetzelfde nummer of e-mailadres al bij een ander contact in gebruik is. In deze video laten we zien hoe je dit oplost.",
      loomId: "427f6f12c8e445eb97e08d348a19705d",
    },
    {
      slug: "slimme-lijsten-met-filters",
      title: "Slimme lijsten maken met filters",
      description:
        "Met slimme lijsten filter je je contacten op precies de kenmerken die je zoekt, zodat je snel de juiste groep mensen te pakken hebt.",
      loomId: "8df2683d82e24cc7a356a369cb488877",
      durationMinutes: 3,
    },
    {
      slug: "handgeschreven-ansichtkaart-versturen",
      title: "Handgeschreven ansichtkaart versturen",
      description:
        "Een handgeschreven ansichtkaart is een persoonlijk gebaar dat blijft hangen, bijvoorbeeld bij een jubileum, blessure of verjaardag. In deze video zie je hoe je vanuit GymOps een handgeschreven kaart naar een contact verstuurt.",
      loomId: "38d3a1ae173c49f69bb04553dbce5680",
    },
  ],
};

const conversationsModule: Module = {
  slug: "conversations",
  title: "Conversations",
  lessons: [
    {
      slug: "introductie-conversations",
      title: "Introductie Conversations",
      description:
        "In Conversations komt alle communicatie met je leads en leden op één plek samen: WhatsApp, e-mail, sms, social media-berichten en telefoongesprekken. Je hoeft dus niet meer te switchen tussen allerlei losse apps.\n\nAlles wat je hier verstuurt en ontvangt wordt automatisch vastgelegd bij het juiste contact, zodat je altijd terug kunt lezen wat er is besproken. In de volgende lessen lopen we de verschillende kanalen één voor één door.\n\nNet zoals het belangrijk is om je takenlijst elke dag af te werken, is het minstens zo belangrijk om je inbox in GymOps dagelijks bij te houden. Reageer snel op nieuwe berichten en laat niets te lang liggen. Pas als je je communicatie consequent op deze ene plek beheert, maak je echt ten volle gebruik van het systeem en mis je geen enkel contactmoment met je leads en leden.",
    },
    {
      slug: "intro-gesprekken",
      title: "Intro gesprekken",
      description:
        "Een korte introductie van de inbox in GymOps en hoe gesprekken hier werken.",
      loomId: "2e5f49b5bb1640a1a7f00d5ef16964c6",
    },
    {
      slug: "gesprekken-en-berichten-teruglezen",
      title: "Gesprekken en berichten teruglezen",
      description:
        "Hier laten we zien hoe je eerdere gesprekken en berichten terugvindt en terugleest bij een contact.",
      loomId: "10c56538f7d141f7a220593fb0a45b2c",
    },
    {
      slug: "whatsapp",
      title: "WhatsApp",
      description:
        "WhatsApp-berichten versturen en ontvangen, rechtstreeks vanuit GymOps.",
      loomId: "0706a8c0bbe14ed2b8b6fe45071c7c8b",
    },
    {
      slug: "e-mail",
      title: "E-mail",
      description:
        "Hoe je e-mails verstuurt en ontvangt vanuit de inbox, gekoppeld aan het juiste contact.",
      loomId: "58036091af6c446aa103af05ecb374a2",
    },
    {
      slug: "sms-berichten",
      title: "Sms-berichten",
      description: "Sms'en met je leads en leden vanuit GymOps.",
      loomId: "41f8ca81626e42898728c43f9d721db5",
    },
    {
      slug: "dms-via-facebook-of-instagram",
      title: "DM's via Facebook of Instagram",
      description:
        "Reageer op directe berichten via Facebook en Instagram, zonder de apps apart te openen.",
      loomId: "bc7ffa9523c847a4a8703133c280b0d0",
    },
    {
      slug: "telefoongesprekken",
      title: "Telefoongesprekken",
      description:
        "Bellen en gebeld worden via GymOps, inclusief het vastleggen van je gesprekken bij het contact.",
      loomId: "9f6a5f40a4bb4af798fe1e21c0e69185",
    },
    {
      slug: "internal-notes",
      title: "Internal notes",
      description:
        "Met interne notities leg je informatie vast voor jezelf of je team, zonder dat de klant dit ziet.",
      loomId: "9e0079ec1b6942b7adf723726c0bcbaa",
    },
  ],
};

const takenModule: Module = {
  slug: "taken",
  title: "Taken",
  lessons: [
    {
      slug: "introductie-taken",
      title: "Introductie taken",
      subtitle:
        "Persoonlijk contact dat niet vergeten of overgeslagen wordt.",
      description:
        "Taken vormen het hart van het opvolgsysteem in GymOps. Er worden automatisch veel taken aangemaakt vanuit workflows, maar je kunt ze ook altijd handmatig aanmaken. Zo'n taak kun je bij jezelf aanmaken of bij een ander teamlid, zodat zaken nooit blijven liggen.\n\nDenk bijvoorbeeld aan leads die opgevolgd moeten worden, maar net zo goed aan leden waar je contact mee wilt opnemen: omdat ze al even niet geweest zijn, omdat ze een blessure hebben, of juist omdat er iets te vieren valt.\n\nHet aanmaken van taken werkt anders dan het versturen van automatische berichten. Bij een taak blijft het contact persoonlijk: de tekst die je schrijft, de app die je stuurt of de video die je opneemt komt nog steeds écht van jou. Het enige wat de taak doet, is ervoor zorgen dat dit contact niet wordt vergeten, zodat er niemand door het net valt.\n\n**We raden aan om je takenlijst elke dag bij te werken.** Werk dagelijks zo veel mogelijk openstaande taken af, zodat taken niet te lang blijven openstaan. Als je dat consequent doet, haal je het maximale uit GymOps en zorg je ervoor dat iedere lead en ieder lid de persoonlijke aandacht krijgt die het verdient. En net als bij je taken geldt dit ook voor je inbox in Conversations: werk die elke dag bij. Samen zorgen je takenlijst en je inbox ervoor dat er echt niets blijft liggen.\n\nHieronder vind je een overzicht van de workflows die automatisch taken voor je aanmaken, gegroepeerd per onderwerp.\n\n**LEADS OPVOLGEN**\n• **Nieuwe lead taakgenerator:** maakt bij elke nieuwe lead elke 24 uur een nieuwe taak aan om contact op te nemen, en blijft dat dagenlang doen totdat er écht contact is geweest. Zo glijdt geen enkele lead door de mazen van het net.\n• **3 uur in pipelinestage Showed:** geeft een dubbele check: is iemand op intake of proefles geweest, en is er een taak aangemaakt om contact op te nemen en een vervolgafspraak te plannen?\n• **No-show (Free Intake, algemene afspraken en de proeflesplanner in Sportbit):** laat je contact opnemen met iemand die niet is komen opdagen voor een intake of proefles, of die zijn afspraak heeft afgezegd.\n• **15 uur in pipelinestage Showed:** een dubbele check waarom iemand na vijftien uur nog niet gewonnen of verloren is, met een taak om te controleren of dit wel goed gaat.\n\n**LEDEN BETROKKEN HOUDEN**\n• **Afwezige leden wachtrij:** laat je contact opnemen met leden die al lang niet meer in je box zijn geweest. Erg belangrijk om afhakers op tijd terug te halen.\n• **Eerste 90 dagen:** zorgt dat je wekelijks contact opneemt met nieuwe leden om in te checken hoe het met ze gaat.\n• **Milestones:** maakt een taak aan zodra iemand een x-aantal workouts heeft voltooid, met de herinnering om een cadeautje klaar te leggen.\n• **Jaarlijkse ansichtkaart:** maakt bij elk lid minstens één keer per jaar een taak aan om een persoonlijke ansichtkaart te sturen. Zo krijgen niet alleen de leden die het meest opvallen een kaartje, maar iedereen.\n\n**EX-LEDEN EN OPZEGGINGEN**\n• **Ex-leden campagne:** start met een taak om te checken of iemand écht de ex-ledencampagne in moet. Belangrijk om te voorkomen dat leden hier per ongeluk in terechtkomen.\n• **Opzegformulier ingediend:** herinnert je eraan om de opzegging in Sportbit te verwerken.\n• **Ansichtkaart ingevuld:** laat je contact opnemen met een ex-lid dat gebruikmaakt van een aanbieding die hij of zij via een ansichtkaart heeft gekregen.\n\n**REVIEWS**\n• **Google review ontvangen:** laat je persoonlijk reageren op de review en deze loggen op de klantenkaart, zodat je later makkelijk kunt filteren op wie wel of geen Google review heeft achtergelaten.\n\nBekijk hieronder de volgende video's en maak daarna eens wat taken aan voor jezelf of een ander teamlid. Maak je geen zorgen, er kan niks misgaan: er gaan geen uitgaande berichten de deur uit. Maak gewoon een paar taken aan en kijk of je ze in je takenlijst terugvindt.",
    },
    {
      slug: "hoe-werkt-je-takenlijst",
      title: "Hoe werkt je takenlijst",
      description: "",
      loomId: "f59d796a778848cc9e79b3b3b5162852",
    },
    {
      slug: "taken-in-workflows-aanmaken-en-aanpassen",
      title: "Taken in workflows aanmaken en aanpassen",
      description: "",
      loomId: "cb68edc02f474454abfe8b1af4505edd",
    },
    {
      slug: "taken-bekijken-op-klantenkaart-bij-contact",
      title: "Taken bekijken op klantenkaart bij contact",
      description: "",
      loomId: "b52484d29ec34076b2f368cec208114f",
    },
    {
      slug: "taak-aanmaken-bij-contact",
      title: "Taak aanmaken bij contact",
      description: "",
      loomId: "6a6d73d3a28c4d2cb37fddffca6664d4",
    },
  ],
};

const stapTweeIntroModule: Module = {
  slug: "introductie-stap-twee",
  title: "Introductie",
  lessons: [
    {
      slug: "welkom",
      title: "Welkom bij stap twee",
      description:
        "Welkom bij stap twee van je onboarding! In stap één heb je de basis gelegd en allerlei diensten aan GymOps gekoppeld. Nu gaan we je echt wegwijs maken in het systeem zelf.\n\nGymOps kan je ontzettend veel werk uit handen nemen, maar het doet het niet helemaal vanzelf. Je haalt er pas echt het maximale uit als je je het systeem ook zelf eigen maakt. In de hoofdstukken hieronder zetten we daarvoor de eerste stappen: je leert werken met je Contacten, met Conversations (je inbox) en met Taken.\n\nAls er één ding is dat je uit deze stap moet meenemen, dan is het dit:\n\n{{big:Werk elke dag je inbox bij en vink elke dag je takenlijst af.}}\n\nHet lijkt misschien wat overdreven om dit zo groot neer te zetten, maar het is echt van wezenlijk belang om het systeem goed te laten werken. Deze twee gewoonten zijn samen de motor onder GymOps: houd je ze vol, dan blijft er niets liggen, voelt je communicatie persoonlijk en haal je alles uit het systeem.\n\nKom je erachter dat je hier zelf de tijd niet voor hebt? Dan is het misschien tijd om het uit te besteden aan iemand anders. Want elke dag dat je je takenlijst en inbox niet bijwerkt, laat je omzet liggen. Het goed bijhouden van deze twee zaken levert je uiteindelijk dus gewoon geld op, en daarom kun je er ook prima iemand op zetten.\n\nNeem rustig de tijd en doorloop de hoofdstukken hieronder. Veel succes!",
    },
  ],
};

export const courses: Course[] = [
  {
    slug: "onboarding-stap-een",
    title: "Onboarding stap één",
    description:
      "De eerste stappen om je gym op te zetten in GymOps.",
    icon: UserPlus,
    modules: [
      {
        slug: "onboarding-stap-een",
        title: "Onboarding stap één",
        lessons: [
          {
            slug: "introductie",
            title: "Welkom bij GymOps",
            subtitle: "De eerste stappen om je gym op te zetten in GymOps.",
            description:
              "Welkom bij GymOps! Leuk dat je erbij bent. In dit eerste hoofdstuk zetten we samen de allereerste stappen om je gym helemaal klaar te maken in GymOps.\n\nGymOps is het systeem waarin straks alles samenkomt: je leads, je leden, je communicatie en je marketing. Om er echt het maximale uit te halen, koppelen we in deze onboarding een heleboel andere diensten aan GymOps. Denk aan je social media, WhatsApp, Google en een eigen lokaal telefoonnummer, zodat je vanuit één plek alles kunt beheren en geen enkel contactmoment meer mist.\n\nDeze eerste stap draait om de basis: je betaalgegevens, de app op je telefoon, een telefoonnummer en je WhatsApp Business-account. Daarmee staat het fundament en kun je in de volgende stappen steeds meer uit het systeem halen.\n\nDoorloop de lessen hieronder in de aangegeven volgorde, één voor één. Het is belangrijk dat je de stappen op volgorde doet, omdat ze op elkaar voortbouwen. Aan het einde van dit hoofdstuk heb je de meeste zaken gekoppeld en ben je klaar voor onboarding call één. Veel succes!",
          },
          {
            slug: "betaalgegevens-invoeren",
            title: "1. Betaalgegevens invoeren",
            description:
              "We beginnen met het invoeren van je betaalgegevens. Voer hier je creditcardgegevens in. Deze creditcard wordt gebruikt om je GymOps-abonnement te betalen, én voor het verbruik van telefonie-, sms- en WhatsApp-kosten.",
            loomId: "e5caea80523d4a6d945dc162231bc2f2",
          },
          {
            slug: "lead-connector-app-downloaden",
            title: "2. Lead Connector app downloaden",
            description:
              "Download de Lead Connector app uit de App Store of Google Play en log in met je GymOps-account. Het is handig om de app ook op je telefoon te installeren, zodat je het meeste uit GymOps haalt: je ontvangt meldingen, kunt onderweg reageren op leads en klanten en blijft altijd bereikbaar.",
            image: "/lead-connector.png",
            imageAlt: "Lead Connector app logo",
          },
          {
            slug: "telefoonnummer-aanschaffen",
            title: "3. Telefoonnummer aanschaffen",
            description:
              "Hier schaffen we een virtueel nummer aan in GymOps dat we gebruiken om te bellen en eventueel te sms'en. Dit nummer verbergen we later achter een lokaal nummer.",
            loomId: "14652347e219454e910d6096d196a442",
          },
          {
            slug: "lokaal-nummer-instellen",
            title: "4. Lokaal nummer instellen",
            description:
              "In dit hoofdstuk laten we zien hoe je een lokaal nummer instelt om te gebruiken in GymOps. Dit zorgt ervoor dat je leads en klanten vaker de telefoon opnemen, doordat je nummer vertrouwd overkomt.",
            videos: [
              { title: "Deel 1", loomId: "54c80427622e46edbbc92b4f6b1deb30" },
              { title: "Deel 2", loomId: "e52b1a744eb4442e8751bd68750c5f64" },
            ],
          },
          {
            slug: "verifieer-je-lokale-nummer",
            title: "5. Verifieer je lokale nummer",
            description:
              "Hier verifieer je je lokale nummer en koppel je het aan GymOps, zodat dit nummer altijd zichtbaar is en je telefoontjes goed worden opgenomen.",
            loomId: "e5ff15dfcd034c1cb9c1c167725f85f7",
          },
          {
            slug: "whatsapp-business-account-koppelen",
            title: "6. WhatsApp Business account koppelen",
            description:
              "WhatsApp gebruiken we veel in GymOps; het is in Europa nog altijd de meest gangbare manier van texten. We raden aan om het lokale nummer dat je in GymOps gebruikt óók te gebruiken voor je WhatsApp Business account.\n\nHeb je al een lokaal nummer met een WhatsApp Business account op een telefoon staan? Dan is dat een goed uitgangspunt. We raden aan om, als je dit WhatsApp Business account wilt behouden, het nummer ervan te wijzigen naar je lokale nummer.\n\nHeb je nog geen WhatsApp Business account op een mobiel staan? Download dan op een telefoon de WhatsApp Business app en maak daar een nieuw WhatsApp Business account voor je gym aan met het lokale nummer dat je hebt aangeschaft.\n\nBelangrijk: het WhatsApp Business account dat je gaat koppelen moet eerst op een mobiel staan. Dat hoeft geen 06-nummer te zijn, sterker nog: we doen dit het liefst met het lokale nummer dat we zojuist hebben ingesteld. Heb je dit klaarstaan, doorloop dan de stappen in de video hieronder.",
            loomId: "be72b284d13c460ebc8fd8950d7d8f82",
          },
          {
            slug: "google-account-koppelen",
            title: "7. Google-account koppelen",
            description:
              "Het koppelen van je Google-account is belangrijk, zodat je makkelijk vanuit je Google Drive kunt werken. Zo kun je bijvoorbeeld deelnemerslijsten naar Google Sheets sturen, foto's ophalen en meer van dat soort zaken.",
            loomId: "efb96c1dd3b145c7a097ef36faf017d9",
          },
          {
            slug: "google-bedrijfsprofiel-koppelen",
            title: "8. Google Bedrijfsprofiel koppelen",
            description:
              "Het koppelen van je Google Bedrijfsprofiel (Google My Business) is belangrijk om je reviews en recensies te beheren. Zo reageer je vanuit GymOps eenvoudig op alle beoordelingen van je gym.",
            loomId: "faf3dd4920cb4827985c55fa8b2d6b48",
          },
          {
            slug: "facebook-en-instagram-koppelen",
            title: "9. Facebook en Instagram koppelen",
            description: "",
            loomId: "4944927f25324980a67ce92949ae1ca9",
          },
          {
            slug: "meta-ads-express-formulieren-koppelen",
            title: "10. Meta ads express formulieren koppelen",
            description: "",
            loomId: "b006fce5ba3e457e8171b5673961978d",
          },
          {
            slug: "medewerkers-toevoegen-bewerken-en-verwijderen",
            title: "11. Medewerkers toevoegen, bewerken en verwijderen",
            description:
              "Het toevoegen van medewerkers is belangrijk zodat zij ook in het systeem kunnen werken, én zodat ze te boeken zijn voor intakes, check-ins, personal trainings of andere afspraken waarvan je de agenda's in GymOps beheert.",
            loomId: "87936d0cd0fb430e9f34b7d6d9b34a3e",
          },
          {
            slug: "beschikbaarheid-en-agenda-instellingen-voor-medewerkers",
            title: "12. Beschikbaarheid en agenda-instellingen voor medewerkers",
            description:
              "Stel hier in op welke tijdblokken je medewerkers beschikbaar zijn (of moeten zijn) om geboekt te worden voor gratis intakes, proeflessen, check-ins, personal trainings of andere afspraken. Het is niet erg als de juiste agenda's nog niet in het systeem staan, dat doen we later samen, maar vul wel alvast de beschikbaarheid van je medewerkers in.",
            loomId: "32c2b37244804a35860bb78763a0e088",
          },
          {
            slug: "persoonlijke-agenda-koppelen",
            title: "13. Persoonlijke agenda koppelen",
            description:
              "Het koppelen van je privéagenda is belangrijk, zodat afspraken die je in GymOps maakt ook in je privéagenda terechtkomen. Daarnaast kan GymOps zo zien of je op een bepaald moment al een afspraak hebt staan en die tijd dan automatisch voor je blokkeren.",
            loomId: "c5dff764626f477882e0ca0dbbc9c9fd",
          },
        ],
      },
    ],
  },
  {
    slug: "onboarding-stap-twee",
    title: "Onboarding stap twee",
    description:
      "Stap twee van je onboarding: werken met Contacten, Conversations en Taken.",
    icon: UserPlus,
    modules: [
      stapTweeIntroModule,
      contactenModule,
      conversationsModule,
      takenModule,
    ],
  },
  {
    slug: "set-up",
    title: "Set up",
    description:
      "Initiële configuratie van GymOps: account, gebruikers, locaties en integraties.",
    icon: Settings,
    modules: [
      {
        slug: "set-up",
        title: "Set up",
        lessons: [
          {
            slug: "whatsapp-business-account-koppelen",
            title: "WhatsApp Business account koppelen",
            description: "",
            loomId: "be72b284d13c460ebc8fd8950d7d8f82",
          },
          {
            slug: "betaalgegevens-invoeren",
            title: "Betaalgegevens invoeren",
            description: "",
            loomId: "e5caea80523d4a6d945dc162231bc2f2",
          },
          {
            slug: "telefoonnummer-aanschaffen",
            title: "Telefoonnummer aanschaffen",
            description: "",
            loomId: "14652347e219454e910d6096d196a442",
          },
          {
            slug: "google-account-koppelen",
            title: "Google-account koppelen",
            description:
              "Het koppelen van je Google-account is belangrijk, zodat je makkelijk vanuit je Google Drive kunt werken. Zo kun je bijvoorbeeld deelnemerslijsten naar Google Sheets sturen, foto's ophalen en meer van dat soort zaken.",
            loomId: "efb96c1dd3b145c7a097ef36faf017d9",
          },
          {
            slug: "google-bedrijfsprofiel-koppelen",
            title: "Google Bedrijfsprofiel koppelen",
            description:
              "Het koppelen van je Google Bedrijfsprofiel (Google My Business) is belangrijk om je reviews en recensies te beheren. Zo reageer je vanuit GymOps eenvoudig op alle beoordelingen van je gym.",
            loomId: "faf3dd4920cb4827985c55fa8b2d6b48",
          },
          {
            slug: "facebook-en-instagram-koppelen",
            title: "Facebook en Instagram koppelen",
            description: "",
            loomId: "4944927f25324980a67ce92949ae1ca9",
          },
          {
            slug: "meta-ads-express-formulieren-koppelen",
            title: "Meta ads express formulieren koppelen",
            description: "",
            loomId: "b006fce5ba3e457e8171b5673961978d",
          },
          {
            slug: "medewerkers-toevoegen-bewerken-en-verwijderen",
            title: "Medewerkers toevoegen, bewerken en verwijderen",
            description:
              "Het toevoegen van medewerkers is belangrijk zodat zij ook in het systeem kunnen werken, én zodat ze te boeken zijn voor intakes, check-ins, personal trainings of andere afspraken waarvan je de agenda's in GymOps beheert.",
            loomId: "87936d0cd0fb430e9f34b7d6d9b34a3e",
          },
          {
            slug: "dagelijks-mailoverzicht-openstaande-taken",
            title: "Dagelijks mailoverzicht van openstaande taken",
            description: "",
            loomId: "97160a75a43e4c9d8cec9e7a54001863",
          },
          {
            slug: "persoonlijke-agenda-koppelen",
            title: "Persoonlijke agenda koppelen",
            description:
              "Het koppelen van je privéagenda is belangrijk, zodat afspraken die je in GymOps maakt ook in je privéagenda terechtkomen. Daarnaast kan GymOps zo zien of je op een bepaald moment al een afspraak hebt staan en die tijd dan automatisch voor je blokkeren.",
            loomId: "c5dff764626f477882e0ca0dbbc9c9fd",
          },
          {
            slug: "automatische-whatsapp-bij-gemiste-oproep-instellen",
            title: "Automatische WhatsApp bij gemiste oproep instellen",
            description: "",
            loomId: "b5e1aa1059894d0aa3fecb0b64d1532a",
          },
          {
            slug: "beschikbaarheid-en-agenda-instellingen-voor-medewerkers",
            title: "Beschikbaarheid en agenda-instellingen voor medewerkers",
            description:
              "Stel hier in op welke tijdblokken je medewerkers beschikbaar zijn (of moeten zijn) om geboekt te worden voor gratis intakes, proeflessen, check-ins, personal trainings of andere afspraken. Het is niet erg als de juiste agenda's nog niet in het systeem staan, dat doen we later samen, maar vul wel alvast de beschikbaarheid van je medewerkers in.",
            loomId: "32c2b37244804a35860bb78763a0e088",
          },
        ],
      },
    ],
  },
  {
    slug: "dashboard",
    title: "Dashboard",
    description:
      "Inzicht in je gym: KPI's, leden en conversie in één overzicht.",
    icon: LayoutDashboard,
    modules: [
      {
        slug: "dashboard",
        title: "Dashboard",
        lessons: [],
      },
    ],
  },
  {
    slug: "agendas",
    title: "Agenda's",
    description:
      "Agenda's instellen en beheren: beschikbaarheid, afspraaktypes, boekingen en herinneringen.",
    icon: Calendar,
    modules: [
      {
        slug: "agendas",
        title: "Agenda's",
        lessons: [
          {
            slug: "introductie-kalenders",
            title: "Introductie Kalenders",
            description: "",
            loomId: "d0d7d70309054515a35ebeab2600f772",
          },
          {
            slug: "kalenders-instellen",
            title: "Kalenders instellen",
            description: "",
            loomId: "3a0ff972761849dc877a5f00060ffac6",
          },
          {
            slug: "beschikbaarheid-medewerkers-instellen-in-agenda",
            title: "Beschikbaarheid medewerkers instellen in agenda",
            description: "",
            loomId: "10f0e6c81a824fb9a909414a7658cd0e",
          },
          {
            slug: "afspraken-boeken",
            title: "Afspraken boeken",
            description: "",
            loomId: "53ef83f524c841028d2980d799f92b09",
          },
          {
            slug: "afspraken-wijzigen",
            title: "Afspraken wijzigen",
            description: "",
            loomId: "0657645ab7ee43c5a81e008bdab30811",
          },
          {
            slug: "afspraak-verwijderen-of-annuleren",
            title: "Afspraak verwijderen of annuleren",
            description: "",
            loomId: "a840695758844935aded81c17343a9e6",
          },
          {
            slug: "tijdslots-blokkeren-in-agenda",
            title: "Tijdslots blokkeren in agenda",
            description: "",
            loomId: "dd353d7da33643d69ac3971b77edfe66",
          },
        ],
      },
    ],
  },
  {
    slug: "leads",
    title: "Leads",
    description:
      "Leads beheren: aanmeldingen, opvolging, automatische berichten en conversie naar leden.",
    icon: UserPlus,
    modules: [
      {
        slug: "leads",
        title: "Leads",
        lessons: [
          {
            slug: "wat-is-een-lead-opportunity",
            title: "Wat is een lead/opportunity?",
            description: "",
            loomId: "d0e89a275bc74dc98767115e3cf6bd61",
          },
          {
            slug: "verschil-tussen-lead-statussen",
            title: "Verschil tussen lead statussen",
            description: "",
            loomId: "7a27e78113ea4e1cbd1ebd6418e8026f",
          },
          {
            slug: "free-intro-pipeline",
            title: "Free intro pipeline",
            description: "",
            loomId: "c1ba1f5fb10d4dc1a2ad40e61ff301a0",
          },
          {
            slug: "opportunity-handmatig-aanmaken",
            title: "Opportunity handmatig aanmaken",
            description: "",
            loomId: "0aaf5d1435834bbfa552fd099d4fe9ef",
          },
          {
            slug: "opportunities-verplaatsen-in-de-pipeline",
            title: "Opportunities verplaatsen in de pipeline",
            description: "",
            loomId: "36b4427419394eb8b1bec3b925b4de95",
          },
        ],
      },
    ],
  },
  {
    slug: "workflows",
    title: "Workflows",
    description:
      "Alle workflows in GymOps, ingedeeld in dezelfde mappen als in het systeem: wat elke workflow doet en wat je er zelf aan kunt aanpassen.",
    intro:
      "Workflows zijn de motor van GymOps: ze versturen automatisch berichten, maken taken aan en zorgen dat leads en leden op het juiste moment de juiste opvolging krijgen.\n\nDe mappen hieronder zijn precies hetzelfde ingedeeld als de workflow-mappen in GymOps zelf. Zoek je een workflow op in het systeem? Dan vind je hem hier in dezelfde map terug, met uitleg over wat de workflow doet en wat je er zelf aan kunt aanpassen.\n\nBekijk eerst de lessen bij Introductie. Daarin laten we de algemene dingen zien die voor alle workflows gelden: hoe je e-mailteksten wijzigt, hoe je taken en WhatsApp-templates aanpast en hoe wachtstappen werken. Daarna kun je per map de losse workflows bekijken.\n\n**Let op:** we moedigen je juist aan om de berichten in het systeem aan te passen, zodat alles zo goed mogelijk past bij jouw gym en jouw manier van communiceren. Houd er wel rekening mee dat wij een workflow alleen kunnen terugzetten naar de basisversie. Jouw eigen aanpassingen kunnen we dan niet terughalen. Wijzig je iets? Zorg dan dat je goed weet wat je doet, bijvoorbeeld door eerst de introductielessen te bekijken.",
    icon: Workflow,
    modules: [
      {
        slug: "introductie",
        title: "Introductie",
        lessons: [
          {
            slug: "berichten-bij-intake-geboekt-wijziging-of-no-show",
            title: "Berichten bij intake geboekt, wijziging of no-show",
            description: "",
            loomId: "38fd4b55b04e469ab5578404800ac08c",
          },
          {
            slug: "e-mailteksten-wijzigen-in-workflows",
            title: "E-mailteksten wijzigen in workflows",
            description: "",
            loomId: "6423b64a4ee34a44a6ba86fd34329e37",
          },
          {
            slug: "taken-aanpassen-in-workflows",
            title: "Taken aanpassen in workflows",
            description: "",
            loomId: "d539728b43174335a84583b2eefd6cdb",
          },
          {
            slug: "overzicht-workflows-met-whatsapp-berichten",
            title: "Overzicht workflows met WhatsApp-berichten",
            description: "",
            loomId: "5d26ed097e814783b3b2945f30b316b9",
            durationMinutes: 7,
            workflows: [
              { name: "Afspraak geboekt in kalender 'Free intro'", whatsapp: "Ingesteld door GymOps" },
              { name: "Afspraak geboekt in proeflesplanner SportBit", whatsapp: "Ingesteld door GymOps" },
              { name: "Afspraak in kalender \"Free Intro\" is afgezegd", whatsapp: "Ingesteld door GymOps" },
              { name: "Afspraak in kalender \"Free Intro\" is no show", whatsapp: "Ingesteld door GymOps" },
              { name: "Afspraak in proeflesplanner SportBit is no show", whatsapp: "Ingesteld door GymOps" },
              { name: "Bring A friend Inschrijving", whatsapp: "Ingesteld door GymOps" },
              { name: "Ex-leden campagne", whatsapp: "Ingesteld door GymOps" },
              { name: "Fitness test afgerond", whatsapp: "Ingesteld door GymOps" },
              { name: "Flex Friday Form Submitted", whatsapp: "Ingesteld door GymOps" },
              { name: "Hyrox Simulation Sign-up (inbound webhook needed)", whatsapp: "Ingesteld door GymOps" },
              { name: "Nieuwe lead campagne", whatsapp: "Ingesteld door GymOps" },
              { name: "Opzegformulier ingediend", whatsapp: "Ingesteld door GymOps" },
              { name: "Prijsaanvraag campagne", whatsapp: "Ingesteld door GymOps" },
              { name: "Whatsapp drip campagne 4 weken programma", whatsapp: "Ingesteld door GymOps" },
              { name: "Whatsapp drip campagne HYROX tijd verbeteren", whatsapp: "Ingesteld door GymOps" },
              { name: "Whatsapp drip campagne eerste HYROX", whatsapp: "Ingesteld door GymOps" },
              { name: "Whatsapp drip campagne start kleine groep", whatsapp: "Ingesteld door GymOps" },
              { name: "flex friday campaign", whatsapp: "Ingesteld door GymOps" },
              { name: "verjaardag whatsapp/mail leden", whatsapp: "Ingesteld door GymOps" },
              { name: "Long Term Client Nurture Campagne", whatsapp: "Ingesteld door GymOps" },
              { name: "Long term lead nurture", whatsapp: "Ingesteld door GymOps" },
              { name: "Prijsaanvraag ingevuld", whatsapp: "Ingesteld door GymOps" },
              { name: "Voorbeeld campagne eerste 90 dagen (veel automatische Whatsapps)", whatsapp: "Zelf instellen" },
              { name: "Voorbeeld campagne eerste 90 dagen (veel taken en persoonlijk contact)", whatsapp: "Zelf instellen" },
            ],
          },
          {
            slug: "whatsapp-templates-aanpassen-in-workflows",
            title: "WhatsApp templates aanpassen in workflows",
            description: "",
            loomId: "4130b2ac44a64ad99c9eb379cc9f7c70",
          },
          {
            slug: "nieuwe-whatsapp-template-maken",
            title: "Nieuwe WhatsApp-template maken",
            description: "",
            loomId: "9d6ef65528774002a19a88ba4c141b58",
          },
          {
            slug: "engelse-en-nederlandse-berichten-aanpassen",
            title: "Engelse en Nederlandse berichten aanpassen",
            description: "",
            loomId: "c65b92d703a14a998ab84e0e62ffce90",
          },
          {
            slug: "zo-werken-wachtstappen-in-je-workflows",
            title: "Zo werken wachtstappen in je workflows",
            description: "",
            loomId: "f87c80c39b094a80a41138085ce43d43",
          },
          {
            slug: "algemene-afspraken-workflows",
            title: "Algemene afspraken workflows",
            description: "",
            loomId: "f8d891de08964e8f8db72fc68241d166",
          },
          {
            slug: "instellingen-workflows",
            title: "Instellingen workflows",
            description:
              "Elke workflow heeft een aantal instellingen waar je op moet letten. In deze video zie je de belangrijkste: hertoegang (mag iemand de workflow opnieuw doorlopen als die er nog een keer in komt), wat er gebeurt met verplaatste afspraken (de persoon gaat opnieuw de workflow in met de nieuwe datum), en het tijdvenster voor uitgaande berichten: die worden alleen op doordeweekse dagen binnen kantoortijden verstuurd, zodat niemand midden in de nacht een appje krijgt. Tot slot zie je wat 'berichten als gelezen markeren' doet met je inbox.",
            loomId: "adc141e24e134ebabeb8e43bb55270d4",
          },
          {
            slug: "deelnamegeschiedenis-en-logboeken",
            title: "Deelnamegeschiedenis en logboeken",
            description:
              "In elke workflow vind je de deelnamegeschiedenis (enrollment history) en de logboeken (execution logs). In de deelnamegeschiedenis zie je welke contacten de workflow zijn ingegaan, via welke trigger, in welke wachtstap ze nu zitten en wanneer de volgende stap wordt uitgevoerd. Per contact kun je grafisch de hele route volgen, iemand uit de workflow verwijderen of juist doorduwen naar de volgende stap. De logboeken tonen alle uitgevoerde stappen. Handig als je wilt controleren of een workflow doet wat je verwacht.",
            loomId: "6eae0c39870746348387ade6535dd985",
          },
        ],
      },
      {
        slug: "agendas",
        title: "Agenda's",
        lessons: [],
        submodules: [
          {
            slug: "algemene-afspraken-agendagroep-leden",
            title: "Algemene afspraken, agendagroep 'leden'",
            lessons: [
              {
                slug: "algemene-afspraken-leden-geannuleerd",
                title: "Algemene afspraken leden GEANNULEERD",
                description:
                  "Deze workflow start zodra een afspraak in een agenda uit de agendagroep 'leden' wordt geannuleerd. Het lid krijgt automatisch een bericht over de annulering, zodat diegene weet dat de afzegging goed is verwerkt. In de video zie je hoe de workflow is opgebouwd en welke berichten je zelf kunt aanpassen.",
                loomId: "707ed537349a4203aacff5d9001e48cf",
              },
              {
                slug: "algemene-afspraken-leden-geboekt",
                title: "Algemene afspraken leden GEBOEKT",
                description:
                  "Deze workflow start zodra er een afspraak wordt geboekt in een agenda uit de agendagroep 'leden'. Het lid krijgt automatisch een bevestiging van de afspraak. In de video zie je hoe de workflow is opgebouwd en welke berichten je zelf kunt aanpassen.",
                loomId: "15012a1e385c47b1bba1768d6274f62f",
              },
              {
                slug: "algemene-afspraken-leden-no-show",
                title: "Algemene afspraken leden NO SHOW",
                description:
                  "Deze workflow start zodra een afspraak in een agenda uit de agendagroep 'leden' op no show wordt gezet. Het lid krijgt automatisch een bericht en je kunt opvolging regelen, zodat een gemiste afspraak niet ongemerkt voorbijgaat. In de video zie je hoe de workflow is opgebouwd en welke berichten je zelf kunt aanpassen.",
                loomId: "826ed2a214c84fe9858771c78fe7105b",
              },
            ],
          },
        ],
      },
      {
        slug: "evenementen",
        title: "Evenementen",
        lessons: [],
        submodules: [
          {
            slug: "bring-a-friend",
            title: "Bring A Friend",
            lessons: [
              {
                slug: "bring-a-friend-inschrijving",
                title: "Bring A friend Inschrijving",
                description:
                  "Deze workflow start zodra iemand zich inschrijft voor een Bring A Friend-evenement. De inschrijving wordt automatisch bevestigd en het contact wordt goed weggezet in het systeem, zodat je precies weet wie er komt. In de video zie je hoe de workflow is opgebouwd en welke berichten je zelf kunt aanpassen.",
                loomId: "48d7ae6e3bc94eedb8cf5aa09cde437b",
              },
            ],
          },
          {
            slug: "hyrox-simulation",
            title: "Hyrox simulation",
            lessons: [
              {
                slug: "hyrox-simulation-sign-up",
                title: "Hyrox Simulation Sign-up (inbound webhook needed)",
                description: "",
              },
            ],
          },
        ],
      },
      {
        slug: "fitness-test-website",
        title: "Fitness Test (website)",
        lessons: [
          {
            slug: "fitness-test-afgerond",
            title: "Fitness test afgerond",
            description:
              "Deze workflow start zodra iemand de fitness test op de website heeft afgerond. De resultaten worden automatisch opgevolgd, zodat je van elke deelnemer een warme lead maakt. In de video zie je hoe de workflow is opgebouwd en welke berichten je zelf kunt aanpassen.",
            loomId: "5a8b72523d634dcbb97776ffc5220d96",
          },
        ],
      },
      {
        slug: "formulieren",
        title: "Formulieren",
        lessons: [
          {
            slug: "contact-formulier-ingevuld",
            title: "Contact formulier ingevuld",
            description:
              "Deze workflow start zodra iemand het contactformulier invult. De aanvraag wordt automatisch bevestigd en er wordt opvolging klaargezet, zodat er geen enkele aanvraag blijft liggen. In de video zie je hoe de workflow is opgebouwd en welke berichten je zelf kunt aanpassen.",
            loomId: "3333b76446354c8196b265d91a239d79",
          },
          {
            slug: "ex-leden-ansichtkaart-ingevuld",
            title: "Ex leden ansichtkaart ingevuld",
            description:
              "Deze workflow start zodra een ex-lid het formulier van de ansichtkaart invult. Er wordt automatisch opvolging klaargezet, zodat je dit warme contactmoment direct kunt gebruiken om diegene weer binnen te halen. In de video zie je hoe de workflow is opgebouwd en welke berichten je zelf kunt aanpassen.",
            loomId: "78d8f0e29753411f84fc9a0025e3b630",
          },
          {
            slug: "goal-review-vragenlijst-ingevuld",
            title: "Goal review vragenlijst ingevuld",
            description:
              "Deze workflow start zodra de goal review vragenlijst wordt ingevuld, bijvoorbeeld tijdens een 90-dagengesprek of check-in. De antwoorden en gemaakte afspraken worden automatisch als notitie bij het lid gelogd, zodat je alles later terugvindt in het contact. In de video zie je hoe de vragenlijst in elkaar zit, welke vragen je kunt aanpassen en hoe je er een Google review-verzoek in kunt verwerken.\n\n**Tip:** de vragenlijst zelf vind je in GymOps onder Sites → Surveys.",
            loomId: "afddaca13ee149dc9be5455d093636fb",
          },
          {
            slug: "intake-vragenlijst-ingevuld",
            title: "Intake vragenlijst ingevuld",
            description:
              "Deze workflow start zodra de intake vragenlijst wordt ingevuld tijdens een intakegesprek. De antwoorden, zoals waar iemand naar op zoek is en wat diegene al heeft geprobeerd, worden automatisch als notitie bij het contact gelogd en zijn daarna terug te zien op de klantenkaart. In de video zie je hoe de vragenlijst in elkaar zit en hoe je hem als vaste link op je bureaublad zet, zodat je hem bij elke intake snel bij de hand hebt.\n\n**Tip:** de vragenlijst zelf vind je in GymOps onder Sites → Surveys.",
            loomId: "9557ed68bafa4c6d983c5625ac7a3dd3",
          },
          {
            slug: "meta-lead-ad-form-ingevuld",
            title: "Meta lead ad form ingevuld",
            description:
              "Deze workflow start zodra iemand een lead ad-formulier op Meta (Facebook of Instagram) invult. De trigger staat standaard aan voor al je pagina's en formulieren. De lead wordt direct toegewezen aan de assigned user, de nieuwe lead campagne gaat lopen met WhatsApps, mails en taken, en de lead komt in je free intro-pijplijn zodat je het overzicht houdt. Zat diegene al in de prijsaanvraagcampagne, dan wordt die eruit gehaald om dubbele berichten te voorkomen. In de video zie je hoe de workflow is opgebouwd en welke onderdelen je zelf kunt aanpassen.",
            loomId: "10a4c239a7fa4cd9a93b77ca0670ccf7",
          },
          {
            slug: "prijsaanvraag-ingevuld",
            title: "Prijsaanvraag ingevuld",
            description:
              "Deze workflow start zodra iemand het prijsaanvraagformulier op je website invult. Het systeem maakt automatisch een nieuw contact aan en voegt diegene direct toe aan de prijsaanvraagcampagne, die de lead met berichten richting een intake of proefles begeleidt. In de video zie je hoe deze koppeling werkt; de berichten van de campagne zelf worden behandeld in de les 'Prijsaanvraag campagne' in de map Leads.",
            loomId: "04f3366bdabf469993a5b22a139011c8",
          },
          {
            slug: "website-formulier-ingevuld",
            title: "Website formulier ingevuld",
            description:
              "Deze workflow start zodra iemand het formulier op je website invult, bijvoorbeeld via 'gratis kennismaking' of 'gratis proefles'. Er wordt automatisch een contact aangemaakt, de lead wordt toegewezen aan de assigned user die bij jouw gym de leads oppakt, en diegene komt met de juiste tags in de free intro-pijplijn. Daarnaast start de nieuwe lead campagne; de e-mails en WhatsApps daarvan worden behandeld in de les 'Nieuwe lead campagne' in de map Leads.",
            loomId: "4d3b878724fd48cc99b8aaa54d353708",
          },
        ],
      },
      {
        slug: "leads",
        title: "Leads",
        lessons: [
          {
            slug: "lead-antwoord-verwijder-uit-nieuwe-lead-campagne-en-prijsaanvraag",
            title:
              "Lead antwoord: verwijder uit nieuwe lead campagne en prijsaanvraag",
            description:
              "Leads in de nieuwe lead- en prijsaanvraagcampagne krijgen automatische appjes en mails met als doel dat ze reageren en er een echt gesprek ontstaat. Reageert een lead, dan is het vervelend als er daarna nog een automatisch bericht volgt dat geen rekening houdt met dat antwoord. Deze workflow haalt de lead daarom direct na een reactie uit beide campagnes, zodat jij het gesprek persoonlijk kunt overnemen. In de video zie je hoe de workflow is opgebouwd.",
            loomId: "40a1686a292d47489e84e585cfc63471",
          },
          {
            slug: "lead-antwoord-verwijder-uit-taakgenerator",
            title: "Lead antwoord: verwijder uit taakgenerator",
            description:
              "Een klein maar handig hulpje: zodra een lead reageert via WhatsApp, mail of sms, haalt deze workflow diegene uit de taakgenerator. De dagelijkse taken om die lead persoonlijk te benaderen stoppen dan automatisch, want er is al contact geweest. In de video zie je kort hoe de workflow is opgebouwd.",
            loomId: "03a348c18a9c421eaf42762390c429d1",
          },
          {
            slug: "long-term-lead-nurture",
            title: "Long term lead nurture",
            description:
              "In deze workflow komen leads terecht die na de nieuwe lead- of prijsaanvraagcampagne (nog) geen interesse tonen. In plaats van dagelijkse berichten krijgt de lead nu zo'n 300 dagen lang elke 30 dagen één mail die het gesprek probeert te openen, soms met een link naar de intakeplanner. Zo blijf je op een rustige manier in beeld zonder op te dringen. Is de campagne afgelopen, dan kun je deze leads nog altijd bereiken via de WhatsApp drip campagnes en je nieuwsbrief. In de video zie je hoe de workflow is opgebouwd en welke mails je zelf kunt aanpassen.",
            loomId: "956e3f36a711426f9c45a1b1f6bf6044",
          },
          {
            slug: "nieuwe-lead-campagne",
            title: "Nieuwe lead campagne",
            description:
              "Dit is de campagne waar het grootste deel van je inbound leads doorheen loopt. Zodra iemand een formulier op je website of een Meta lead ad invult, start direct een reeks berichten: eerst WhatsApp (in het Nederlands of Engels), met sms als back-up als WhatsApp niet aankomt, en daarna een mail met een link om een intake te boeken, allemaal binnen een paar minuten. Daarna herhaalt dit ritme zich dagelijks tot en met dag vier. Reageert de lead ergens op, dan stopt de campagne meteen zodat jij het gesprek persoonlijk kunt oppakken. In de video zie je hoe de workflow is opgebouwd en welke berichten je zelf kunt aanpassen.",
            loomId: "daf2db9672b54505853a5a8c84160740",
          },
          {
            slug: "nieuwe-lead-taak-generator",
            title: "Nieuwe lead taak generator",
            description:
              "Deze workflow zorgt dat een nieuwe lead niet alleen automatische berichten krijgt, maar ook echt persoonlijk wordt opgevolgd. Zodra een lead binnenkomt gaat er na een minuut een interne mail naar je algemene e-mailadres met de leadgegevens en het verzoek om snel contact op te nemen, en wordt er direct een taak aangemaakt voor de assigned user. Daarna komt er elke dag opnieuw een taak om contact op te nemen, net zolang tot er contact is geweest. In de video zie je hoe de workflow is opgebouwd en wat je eraan kunt aanpassen.",
            loomId: "b79114d458fe4841b0dbf7762be89328",
          },
          {
            slug: "prijsaanvraag-campagne",
            title: "Prijsaanvraag campagne",
            description:
              "Deze campagne volgt leads op die het prijsaanvraagformulier op je website hebben ingevuld. De lead wordt uit de nieuwe lead campagne gehaald (zodat er geen dubbele berichten lopen) en toegevoegd aan de taakgenerator, zodat persoonlijk contact niet wordt vergeten. Daarna volgt vier dagen lang een afwisseling van WhatsApp en mail (met sms als back-up als WhatsApp niet aankomt) en later nog een laatste mail met langere tussenpozen. Reageert de lead via WhatsApp, sms of mail, dan stopt de campagne direct en pak jij het gesprek op. In de video zie je hoe de workflow is opgebouwd en welke berichten je zelf kunt aanpassen.",
            loomId: "c74f24e8db174fbdb7e30c54b2fcdf94",
          },
          {
            slug: "whatsapp-drip-campagnes",
            title: "Whatsapp drip campagnes",
            description:
              "Met een WhatsApp drip campagne open je in één keer het gesprek met een grote groep leads of ex-leden. Je gooit een batch contacten in de workflow en er druppelen elk uur vijf berichten naar buiten, alleen tijdens kantoortijden op doordeweekse dagen, zodat de reacties niet allemaal tegelijk binnenkomen. Reageert iemand, dan stopt de workflow voor diegene; blijft het na 23 uur stil, dan volgt automatisch een check-in bericht. Alle drip campagnes (4 weken programma, HYROX tijd verbeteren, eerste HYROX en start kleine groep) werken op dezelfde manier. In de video zie je hoe de workflow is opgebouwd en hoe je via een tag in één keer honderden contacten toevoegt.",
            loomId: "2773d844529e40f8a0ae3a8fa6d6cbc8",
          },
        ],
        submodules: [
          {
            slug: "free-intro-gymops",
            title: "Free intro GymOps",
            lessons: [
              {
                slug: "afspraak-geboekt-in-kalender-free-intro",
                title: "Afspraak geboekt in kalender 'Free intro'",
                description:
                  "Deze workflow start zodra iemand een free intro of gratis intake boekt in de free intro-kalender. De lead schuift in de pijplijn van 'New Lead' naar 'Appointment Booked', krijgt de tag 'Free Intro geboekt' en wordt uit andere lead-workflows gehaald zodat er geen dubbele berichten meer komen. Daarna gaat er direct een bevestigingsmail uit, gevolgd door WhatsApp- en sms-herinneringen richting de afspraak, met in het laatste bericht ook het adres. In de video zie je hoe de workflow is opgebouwd en welke berichten je zelf kunt aanpassen.",
                loomId: "9c37e305a28743b6a0f6f1ebe7198c02",
              },
              {
                slug: "afspraak-free-intro-afgezegd",
                title: "Afspraak in kalender \"Free Intro\" is afgezegd",
                description:
                  "Deze workflow start zodra een gratis kennismaking wordt afgezegd. De lead schuift naar de pijplijnstage 'Afspraak afgezegd', krijgt een tag en wordt uit de geboekt-workflow gehaald zodat de herinneringsberichten stoppen. Er wordt direct een taak aangemaakt voor de assigned user om contact op te nemen en opnieuw in te plannen, en de lead ontvangt een mail met een link om zelf direct een nieuwe afspraak te boeken. Na een dag start de long term lead nurture, zodat de lead niet uit beeld raakt. In de video zie je hoe de workflow is opgebouwd en welke berichten je zelf kunt aanpassen.",
                loomId: "6b2bd81a48cb4c1fa1ea756e170c597b",
              },
              {
                slug: "afspraak-free-intro-no-show",
                title: "Afspraak in kalender \"Free Intro\" is no show",
                description:
                  "Deze workflow start zodra een free intro op no show wordt gezet. De lead schuift naar de no show-stage in de free intro-pijplijn, krijgt een no show-tag en wordt uit de andere free intro-workflows gehaald. Er wordt direct een taak aangemaakt voor de assigned user om contact op te nemen, en de lead krijgt een mail en WhatsApp met de boodschap dat we diegene gemist hebben en dat er zo een nieuwe intake gepland is. Lukt het na vijf dagen niet om contact te krijgen, dan gaat de lead automatisch de long term lead nurture in. In de video zie je hoe de workflow is opgebouwd en welke berichten je zelf kunt aanpassen.",
                loomId: "6291b2af4f36401cbdb47d033ca36645",
              },
              {
                slug: "afspraak-free-intro-showed",
                title: "Afspraak in kalender \"Free Intro\" is Showed",
                description:
                  "Deze workflow start zodra een free intro op showed wordt gezet en is vooral administratief: er gaan geen berichten naar de lead. Het kaartje in de free intro-pijplijn schuift naar 'Showed', de lead krijgt een tag dat diegene is verschenen en oude tags van eerdere intakes worden opgeruimd. Zo blijft je pijplijn kloppen en zie je in één oogopslag wie er daadwerkelijk geweest is. In de video zie je hoe de workflow is opgebouwd.",
                loomId: "6a056b7905414d3bbee87b7e23b58a5c",
              },
            ],
          },
          {
            slug: "proeflesplanner-sportbit",
            title: "Proeflesplanner SportBit",
            lessons: [
              {
                slug: "afspraak-geboekt-in-proeflesplanner-sportbit",
                title: "Afspraak geboekt in proeflesplanner SportBit",
                description:
                  "Deze workflow start zodra iemand een proefles boekt via de proeflesplanner van SportBit; de trial date die SportBit doorgeeft is de trigger. De lead wordt uit de lopende lead-campagnes en taakgenerators gehaald, schuift in de pijplijn naar 'Afspraak geboekt' en krijgt de juiste tags. Daarna volgen een bevestigingsmail en WhatsApp-herinneringen (met sms en e-mail als back-up) op vaste momenten vóór de proefles, zoals twee dagen, één dag en vier uur van tevoren. De sms- en mailteksten pas je aan in de workflow zelf; de WhatsApp-teksten wijzig je via de WhatsApp-templates. In de video zie je hoe de workflow is opgebouwd.",
                loomId: "7c45ae2fc03f43cbb9dfeeb999f5bbdf",
              },
              {
                slug: "afspraak-proeflesplanner-sportbit-showed",
                title: "Afspraak in proeflesplanner SportBit is Showed",
                description:
                  "Deze workflow start zodra een proefles in SportBit op showed wordt gezet en is puur administratief: er gaan geen berichten naar de lead. Diegene krijgt een tag dat de proefles is bijgewoond en oude tags van gemiste of afgezegde intakes worden opgeruimd. Aan deze workflow hoef je eigenlijk niets te wijzigen. In de video zie je kort hoe hij is opgebouwd.",
                loomId: "3c0f1ca87d0c46eea6ed69ade923eab3",
              },
              {
                slug: "afspraak-proeflesplanner-sportbit-afgezegd",
                title: "Afspraak in proeflesplanner SportBit is afgezegd",
                description:
                  "Deze workflow start zodra iemand de proefles afzegt; de trigger is de proeflesdatum die vanuit SportBit wijzigt. De lead schuift in de pijplijn naar 'Afspraak afgezegd', krijgt de tag 'free intro afgezegd' en wordt uit de geboekt-workflow gehaald zodat de herinneringen stoppen. Er wordt direct een taak aangemaakt voor de assigned user om contact op te nemen, en de lead ontvangt een mail met een link om zelf opnieuw een proefles te boeken. Na zeven dagen zonder actie gaat de lead automatisch de long term lead nurture in. In de video zie je hoe de workflow is opgebouwd en welke berichten je zelf kunt aanpassen.",
                loomId: "887606dea90145b3bd87f7359d203e48",
              },
              {
                slug: "afspraak-proeflesplanner-sportbit-no-show",
                title: "Afspraak in proeflesplanner SportBit is no show",
                description:
                  "Deze workflow start zodra een proefles op no show wordt gezet. De lead krijgt een no show-tag, tags van eerder geboekte proeflessen of free intro's worden opgeruimd en diegene wordt uit de andere free intro-workflows gehaald om dubbele acties te voorkomen. Daarna gaat er een mail uit met de boodschap dat we diegene gemist hebben, inclusief een link om direct opnieuw een proefles te boeken. In de video zie je hoe de workflow is opgebouwd en welke berichten je zelf kunt aanpassen.",
                loomId: "7a1571f10e8b47688d478fb73e1d17dd",
              },
              {
                slug: "datumveld-proefles-wijzigt-toevoegen-aan-gepland",
                title: "Datumveld proefles wijzigt → toevoegen aan gepland",
                description:
                  "Deze workflow start zodra de datum van een proefles wordt gewijzigd. De lead wordt eerst uit de 'afspraak geboekt'-workflow gehaald, zodat de herinneringen voor de oude datum stoppen, en na een minuut opnieuw toegevoegd. De workflow begint dan vanaf het begin met de nieuwe datum. Dit is een technisch hulpstukje dat gewoon zijn werk doet: ons advies is om hier niets aan te wijzigen. In de video zie je kort hoe hij is opgebouwd.",
                loomId: "9a957ede71a3418bab2b441f3ae5820b",
              },
              {
                slug: "trial-date-naar-datumveld",
                title: "Trial date naar datumveld",
                description:
                  "Deze workflow doet één ding: wanneer SportBit een nieuwe proeflesdatum doorgeeft als tekst, zet hij die om naar een echt datumveld. Daardoor kunnen andere workflows, zoals de herinneringen rond de proefles, goed met die datum rekenen. Dit is bewust zo ingericht: niet aankomen, gewoon laten staan. In de video zie je kort wat hij doet.",
                loomId: "e1b6157cfcbf4217b730f25def609ea2",
              },
            ],
          },
        ],
      },
      {
        slug: "leden",
        title: "Leden",
        lessons: [
          {
            slug: "jaarlijkse-ansichtkaart",
            title: "Jaarlijkse ansichtkaart",
            description:
              "Deze workflow zorgt ervoor dat er voor elk lid minstens één keer per jaar een taak wordt aangemaakt om een persoonlijke ansichtkaart te sturen. Zo krijgt niet alleen het lid dat het meest opvalt een kaartje, maar iedereen. Een handgeschreven kaart is een klein gebaar dat lang blijft hangen en laat zien dat je je leden echt ziet.\n\nDe bijbehorende wachtrij verdeelt de taken over het jaar, zodat je niet in één keer voor je hele ledenbestand kaartjes hoeft te schrijven. Leden gaan er gedoseerd doorheen en komen er aan de andere kant uit als taak in je takenlijst. Aan die wachtrij hoef je niets aan te passen, gewoon laten lopen.\n\nIn de video zie je hoe de workflow is opgebouwd en hoe de taken in je takenlijst terechtkomen.",
            loomId: "f48dc860313b4ae48e4da5e4e98ab8b2",
          },
          {
            slug: "long-term-client-nurture-campagne",
            title: "Long Term Client Nurture Campagne",
            description: "",
          },
          {
            slug: "milestones",
            title: "Milestones",
            description:
              "Deze workflow maakt automatisch een taak aan zodra een lid een milestone bereikt, bijvoorbeeld 100, 200 of 300 workouts. De taak herinnert je eraan om een cadeautje klaar te leggen en het lid persoonlijk te feliciteren. Juist het vieren van deze mijlpalen zorgt ervoor dat leden zich gezien voelen en langer lid blijven.\n\nVult een lid de vragenlijst van een milestone in, dan worden de antwoorden automatisch als notitie bij het lid gelogd. Zo vind je ze terug op de klantenkaart en kun je er persoonlijk op reageren.\n\nIn de video zie je hoe de workflow is opgebouwd en welke onderdelen je zelf kunt aanpassen.",
            loomId: "6c657d55353846c3852d6c1fc2bf50a2",
          },
          {
            slug: "eerste-90-dagen-ledenflows",
            title: "Nieuw lid: eerste 90 dagen",
            description:
              "De eerste 90 dagen bepalen of een nieuw lid blijft of stilletjes afhaakt. Deze flows zorgen ervoor dat elk nieuw lid in die periode structureel aandacht krijgt: automatische berichten op de juiste momenten en taken om zelf persoonlijk contact op te nemen. Zo check je wekelijks in hoe het gaat, vier je de eerste successen en zie je op tijd wanneer iemand dreigt af te haken.\n\nIn de video's zie je hoe de flows zijn opgebouwd en welke berichten en taken je zelf kunt aanpassen.",
            videos: [
              {
                title: "Deel 1",
                loomId: "81faadd1df744c0895097c8cf8661913",
              },
              {
                title: "Deel 2",
                loomId: "456631d37d6a43098418ef3ab4f0649c",
              },
              {
                title: "Deel 3",
                loomId: "a46f1c2db8064a6b9669d21401b80717",
              },
            ],
          },
          {
            slug: "verjaardag-whatsapp-mail-leden",
            title: "Verjaardag whatsapp/mail leden",
            description: "",
          },
        ],
        submodules: [
          {
            slug: "zwangerschap",
            title: "Zwangerschap",
            lessons: [
              {
                slug: "status-zwangerschap-zwanger",
                title: "Status zwangerschap: zwanger",
                description: "",
              },
              {
                slug: "status-zwangerschap-bevallen",
                title: "Status zwangerschap: bevallen",
                description: "",
              },
              {
                slug: "status-zwangerschap-anders-verlopen",
                title: "Status zwangerschap: anders verlopen",
                description: "",
              },
            ],
          },
        ],
      },
      {
        slug: "migratie",
        title: "Migratie",
        lessons: [
          {
            slug: "migratie-stap-1",
            title: "Migratie stap 1",
            description: "",
          },
          {
            slug: "migratie-stap-2",
            title: "Migratie stap 2",
            description: "",
          },
        ],
      },
      {
        slug: "opzeggers",
        title: "Opzeggers",
        lessons: [
          {
            slug: "ex-leden-campagne",
            title: "Ex-leden campagne",
            description: "",
            loomId: "2dff417aad0c40c28fc435ebc7efab4d",
          },
          {
            slug: "opzegformulier-ingediend",
            title: "Opzegformulier ingediend",
            description: "",
          },
        ],
        submodules: [
          {
            slug: "ansichtkaart-ex-leden-campagne",
            title: "Ansichtkaart ex leden campagne",
            lessons: [
              {
                slug: "ansichtkaart-ex-leden-campagne",
                title: "Ansichtkaart ex-leden campagne",
                description: "",
              },
              {
                slug: "wachtrij-ansichtkaart-ex-leden-campagne",
                title: "Wachtrij ansichtkaart ex-leden campagne",
                description: "",
              },
            ],
          },
        ],
      },
      {
        slug: "overige",
        title: "Overige",
        lessons: [
          {
            slug: "abo-of-rittenkaart-toegevoegd-klant-en-assigned-user",
            title: "Abo of rittenkaart toegevoegd: klant en assigned user",
            description: "",
          },
          {
            slug: "auto-reply-klant-ledenservice",
            title: "Auto reply klant: ledenservice",
            description: "",
          },
          {
            slug: "google-review-ontvangen",
            title: "Google review ontvangen",
            description: "",
            loomId: "27cd9e4250c748709faf2ca1e8c98bd9",
          },
          {
            slug: "nieuw-contact-toevoegen-aan-assigned-user",
            title: "Nieuw contact: toevoegen aan assigned user",
            description: "",
          },
        ],
      },
      {
        slug: "pijplijn-triggers",
        title: "Pijplijn triggers",
        lessons: [
          {
            slug: "na-drie-uur-showed-check-of-er-een-taak-is-aangemaakt",
            title: "Na drie uur showed: check of er een taak is aangemaakt",
            description: "",
          },
          {
            slug: "pijplijn-stage-veranderd-naar-afspraak-no-show",
            title: "Pijplijn stage veranderd naar Afspraak no show",
            description: "",
          },
          {
            slug: "pijplijn-stage-veranderd-naar-afspraak-showed",
            title: "Pijplijn stage veranderd naar Afspraak showed",
            description: "",
          },
          {
            slug: "status-veranderd-naar-abandoned",
            title: "Status veranderd naar Abandoned",
            description: "",
          },
          {
            slug: "status-veranderd-naar-afspraak-afgezegd",
            title: "Status veranderd naar Afspraak afgezegd",
            description: "",
          },
          {
            slug: "status-veranderd-naar-lost",
            title: "Status veranderd naar Lost",
            description: "",
          },
          {
            slug: "status-veranderd-naar-won",
            title: "Status veranderd naar Won",
            description: "",
          },
        ],
      },
      {
        slug: "sportbit-retentie",
        title: "SportBit/retentie",
        lessons: [
          {
            slug: "afwezige-leden-wachtrij",
            title: "Afwezige leden wachtrij",
            description: "",
          },
          {
            slug: "verwijder-en-voeg-toe-aan-afwezige-leden-wachtrij",
            title: "Verwijder en voeg toe aan afwezige leden wachtrij",
            description: "",
          },
        ],
      },
      {
        slug: "writify",
        title: "Writify",
        lessons: [
          {
            slug: "ansichtkaart-versturen-via-klantenkaart",
            title: "Ansichtkaart versturen via klantenkaart",
            description: "",
          },
        ],
      },
    ],
  },
  {
    slug: "marketing",
    title: "Marketing",
    description:
      "Marketing campagnes opzetten en uitvoeren: socials en e-mail.",
    icon: Megaphone,
    modules: [
      {
        slug: "socials",
        title: "Socials",
        lessons: [
          {
            slug: "social-media-planner",
            title: "Social media planner",
            description: "",
            loomId: "727526f2a09b4b1caa9e46fa706612f2",
          },
          {
            slug: "google-reviews-automatisch-delen-op-social-media",
            title: "Google reviews automatisch delen op social media",
            description: "",
            loomId: "3a334b8198ca4466a60609571a5fb13b",
          },
        ],
      },
      {
        slug: "e-mail",
        title: "E-mail",
        lessons: [
          {
            slug: "e-mail-sjablonen",
            title: "E-mail sjablonen",
            description: "",
            loomId: "b5cef1453ceb441c8b8c77dfec777017",
          },
        ],
      },
    ],
  },
  {
    slug: "contacten",
    title: "Contacten",
    description:
      "Alles over het beheren van je contacten: aanmaken, bewerken, samenvoegen en slimme lijsten met filters.",
    icon: Contact,
    modules: [contactenModule],
  },
  {
    slug: "conversations",
    title: "Conversations",
    description:
      "Inbox voor al je communicatie: WhatsApp, e-mail, SMS en social op één plek beheren.",
    icon: MessageSquare,
    modules: [conversationsModule],
  },
  {
    slug: "taken",
    title: "Taken",
    description:
      "Werken met taken in GymOps: aanmaken, opvolgen en afronden.",
    icon: ListTodo,
    modules: [takenModule],
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

function findLessonInModules(
  modules: Module[],
  lessonSlug: string,
  path: Module[]
): { modulePath: Module[]; lesson: Lesson } | undefined {
  for (const module of modules) {
    if (module.submodules) {
      const found = findLessonInModules(module.submodules, lessonSlug, [
        ...path,
        module,
      ]);
      if (found) return found;
    }
    const lesson = module.lessons.find((l) => l.slug === lessonSlug);
    if (lesson) return { modulePath: [...path, module], lesson };
  }
  return undefined;
}

export function getLesson(
  courseSlug: string,
  lessonSlug: string
):
  | { course: Course; module: Module; modulePath: Module[]; lesson: Lesson }
  | undefined {
  const course = getCourse(courseSlug);
  if (!course) return undefined;
  const found = findLessonInModules(course.modules, lessonSlug, []);
  if (!found) return undefined;
  return {
    course,
    module: found.modulePath[found.modulePath.length - 1],
    modulePath: found.modulePath,
    lesson: found.lesson,
  };
}

export function findModuleByPath(
  course: Course,
  path: string[]
): { module: Module; modulePath: Module[] } | undefined {
  let modules = course.modules;
  const modulePath: Module[] = [];
  for (const slug of path) {
    const found = modules.find((m) => m.slug === slug);
    if (!found) return undefined;
    modulePath.push(found);
    modules = found.submodules ?? [];
  }
  const module = modulePath[modulePath.length - 1];
  return module ? { module, modulePath } : undefined;
}

export function allFolderPaths(course: Course): string[][] {
  const paths: string[][] = [];
  function walk(modules: Module[], prefix: string[]) {
    for (const m of modules) {
      const path = [...prefix, m.slug];
      paths.push(path);
      if (m.submodules) walk(m.submodules, path);
    }
  }
  walk(course.modules, []);
  return paths;
}

export function moduleLessons(module: Module): Lesson[] {
  return [
    ...(module.submodules ?? []).flatMap(moduleLessons),
    ...module.lessons,
  ];
}

export function flattenLessons(course: Course): Lesson[] {
  return course.modules.flatMap(moduleLessons);
}

export type SearchableLesson = {
  courseSlug: string;
  courseTitle: string;
  moduleTitle: string;
  lesson: Lesson;
};

export function allSearchableLessons(): SearchableLesson[] {
  function collect(course: Course, module: Module): SearchableLesson[] {
    return [
      ...(module.submodules ?? []).flatMap((sub) => collect(course, sub)),
      ...module.lessons.map((lesson) => ({
        courseSlug: course.slug,
        courseTitle: course.title,
        moduleTitle: module.title,
        lesson,
      })),
    ];
  }
  return courses.flatMap((course) =>
    course.modules.flatMap((module) => collect(course, module))
  );
}

export function adjacentLessons(
  course: Course,
  lessonSlug: string
): { prev?: Lesson; next?: Lesson } {
  const all = flattenLessons(course);
  const i = all.findIndex((l) => l.slug === lessonSlug);
  if (i === -1) return {};
  return { prev: all[i - 1], next: all[i + 1] };
}
