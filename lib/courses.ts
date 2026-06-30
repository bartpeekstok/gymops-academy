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
};

export type Course = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  modules: Module[];
};

const contactenModule: Module = {
  slug: "contacten",
  title: "Contacten",
  lessons: [
    {
      slug: "introductie",
      title: "Introductie contacten",
      description: "",
      loomId: "e7b00165744c4508b33e75341ea2252b",
      durationMinutes: 2,
    },
    {
      slug: "nieuw-contact-aanmaken",
      title: "Nieuw contact aanmaken",
      description: "",
      loomId: "5397bc98684848cc99258b000e93907a",
      durationMinutes: 3,
    },
    {
      slug: "contactkaart-bekijken",
      title: "Contactkaart bekijken",
      description: "",
      loomId: "5ae0568a8aa24b088bc52f11cb5f943d",
      durationMinutes: 7,
    },
    {
      slug: "contact-bewerken",
      title: "Contact bewerken",
      description: "",
      loomId: "d72f56f9b1574af1be1547d69061d5ea",
      durationMinutes: 1,
    },
    {
      slug: "dubbele-contacten-samenvoegen",
      title: "Dubbele contacten samenvoegen",
      description: "",
      loomId: "e61aa4e9660a49cbb4220e3b58562940",
      durationMinutes: 3,
    },
    {
      slug: "slimme-lijsten-met-filters",
      title: "Slimme lijsten maken met filters",
      description: "",
      loomId: "8df2683d82e24cc7a356a369cb488877",
      durationMinutes: 3,
    },
  ],
};

const conversationsModule: Module = {
  slug: "conversations",
  title: "Conversations",
  lessons: [
    {
      slug: "intro-gesprekken",
      title: "Intro gesprekken",
      description: "",
      loomId: "2e5f49b5bb1640a1a7f00d5ef16964c6",
    },
    {
      slug: "gesprekken-en-berichten-teruglezen",
      title: "Gesprekken en berichten teruglezen",
      description: "",
      loomId: "10c56538f7d141f7a220593fb0a45b2c",
    },
    {
      slug: "whatsapp",
      title: "WhatsApp",
      description: "",
      loomId: "0706a8c0bbe14ed2b8b6fe45071c7c8b",
    },
    {
      slug: "e-mail",
      title: "E-mail",
      description: "",
      loomId: "58036091af6c446aa103af05ecb374a2",
    },
    {
      slug: "sms-berichten",
      title: "Sms-berichten",
      description: "",
      loomId: "41f8ca81626e42898728c43f9d721db5",
    },
    {
      slug: "dms-via-facebook-of-instagram",
      title: "DM's via Facebook of Instagram",
      description: "",
      loomId: "bc7ffa9523c847a4a8703133c280b0d0",
    },
    {
      slug: "telefoongesprekken",
      title: "Telefoongesprekken",
      description: "",
      loomId: "9f6a5f40a4bb4af798fe1e21c0e69185",
    },
    {
      slug: "internal-notes",
      title: "Internal notes",
      description: "",
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
        "Taken vormen het hart van het opvolgsysteem in GymOps. Er worden automatisch veel taken aangemaakt vanuit workflows, maar je kunt ze ook altijd handmatig aanmaken. Zo'n taak kun je bij jezelf aanmaken of bij een ander teamlid, zodat zaken nooit blijven liggen.\n\nDenk bijvoorbeeld aan leads die opgevolgd moeten worden, maar net zo goed aan leden waar je contact mee wilt opnemen: omdat ze al even niet geweest zijn, omdat ze een blessure hebben, of juist omdat er iets te vieren valt.\n\nHet aanmaken van taken werkt anders dan het versturen van automatische berichten. Bij een taak blijft het contact persoonlijk: de tekst die je schrijft, de app die je stuurt of de video die je opneemt komt nog steeds écht van jou. Het enige wat de taak doet, is ervoor zorgen dat dit contact niet wordt vergeten — zo valt er niemand door het net.\n\n![Voorbeeld van een takenlijst in GymOps](/taken-takenlijst.png)\n\nWe raden aan om je takenlijst elke dag bij te werken. Werk dagelijks zo veel mogelijk openstaande taken af, zodat taken niet te lang blijven openstaan. Als je dat consequent doet, haal je het maximale uit GymOps en zorg je ervoor dat iedere lead en ieder lid de persoonlijke aandacht krijgt die het verdient.\n\n![Voorbeeld van een taak met omschrijving en deadline in GymOps|small](/taken-voorbeeld-taak.png)\n\nHieronder vind je een overzicht van de workflows die automatisch taken voor je aanmaken, gegroepeerd per onderwerp.\n\nLEADS OPVOLGEN\n• **Nieuwe lead taakgenerator:** maakt bij elke nieuwe lead elke 24 uur een nieuwe taak aan om contact op te nemen, en blijft dat dagenlang doen totdat er écht contact is geweest. Zo glijdt geen enkele lead door de mazen van het net.\n• **3 uur in pipelinestage Showt:** geeft een dubbele check: is iemand op intake of proefles geweest, en is er een taak aangemaakt om contact op te nemen en een vervolgafspraak te plannen?\n• **No-show (Free Intake, algemene afspraken en de proeflesplanner in Sportbit):** laat je contact opnemen met iemand die niet is komen opdagen voor een intake of proefles, of die zijn afspraak heeft afgezegd.\n• **15 uur in pipelinestage Showt:** een dubbele check waarom iemand na vijftien uur nog niet gewonnen of verloren is, met een taak om te controleren of dit wel goed gaat.\n\nLEDEN BETROKKEN HOUDEN\n• **Afwezige leden wachtrij:** laat je contact opnemen met leden die al lang niet meer in je box zijn geweest. Erg belangrijk om afhakers op tijd terug te halen.\n• **Eerste 90 dagen:** zorgt dat je wekelijks contact opneemt met nieuwe leden om in te checken hoe het met ze gaat.\n• **Milestones:** maakt een taak aan zodra iemand een x-aantal workouts heeft voltooid, met de herinnering om een cadeautje klaar te leggen.\n• **Jaarlijkse ansichtkaart:** maakt bij elk lid minstens één keer per jaar een taak aan om een persoonlijke ansichtkaart te sturen. Zo krijgen niet alleen de leden die het meest opvallen een kaartje, maar iedereen.\n\nEX-LEDEN EN OPZEGGINGEN\n• **Ex-leden campagne:** start met een taak om te checken of iemand écht de ex-ledencampagne in moet. Belangrijk om te voorkomen dat leden hier per ongeluk in terechtkomen.\n• **Opzegformulier ingediend:** herinnert je eraan om de opzegging in Sportbit te verwerken.\n• **Ansichtkaart ingevuld:** laat je contact opnemen met een ex-lid dat gebruikmaakt van een aanbieding die hij of zij via een ansichtkaart heeft gekregen.\n\nREVIEWS\n• **Google review ontvangen:** laat je persoonlijk reageren op de review en deze loggen op de klantenkaart, zodat je later makkelijk kunt filteren op wie wel of geen Google review heeft achtergelaten.",
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
              "WhatsApp gebruiken we veel in GymOps; het is in Europa nog altijd de meest gangbare manier van texten. We raden aan om het lokale nummer dat je in GymOps gebruikt óók te gebruiken voor je WhatsApp Business account.\n\nHeb je al een lokaal nummer met een WhatsApp Business account op een telefoon staan? Dan is dat een goed uitgangspunt. We raden aan om, als je dit WhatsApp Business account wilt behouden, het nummer ervan te wijzigen naar je lokale nummer.\n\nHeb je nog geen WhatsApp Business account op een mobiel staan? Download dan op een telefoon de WhatsApp Business app en maak daar een nieuw WhatsApp Business account voor je gym aan met het lokale nummer dat je hebt aangeschaft.\n\nBelangrijk: het WhatsApp Business account dat je gaat koppelen moet eerst op een mobiel staan. Dat hoeft geen 06-nummer te zijn — sterker nog, we doen dit het liefst met het lokale nummer dat we zojuist hebben ingesteld. Heb je dit klaarstaan, doorloop dan de stappen in de video hieronder.",
            loomId: "be72b284d13c460ebc8fd8950d7d8f82",
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
            description: "",
            loomId: "efb96c1dd3b145c7a097ef36faf017d9",
          },
          {
            slug: "google-bedrijfsprofiel-koppelen",
            title: "Google Bedrijfsprofiel koppelen",
            description: "",
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
            description: "",
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
            description: "",
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
            description: "",
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
      "Bekijk wat er gebeurt in het GymOps systeem als om ervoor te zorgen dat je leden lid blijven dat je leads lid worden.",
    icon: Workflow,
    modules: [
      {
        slug: "workflows",
        title: "Workflows",
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
            slug: "eerste-90-dagen-ledenflows",
            title: "Eerste 90 dagen ledenflows",
            description: "",
            loomId: "cbd7b66a609843629311c207edff7d93",
          },
          {
            slug: "ex-leden-campagne",
            title: "Ex-leden campagne",
            description: "",
            loomId: "2dff417aad0c40c28fc435ebc7efab4d",
          },
          {
            slug: "google-review-ontvangen",
            title: "Google review ontvangen",
            description: "",
            loomId: "27cd9e4250c748709faf2ca1e8c98bd9",
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

export function getLesson(
  courseSlug: string,
  lessonSlug: string
): { course: Course; module: Module; lesson: Lesson } | undefined {
  const course = getCourse(courseSlug);
  if (!course) return undefined;
  for (const module of course.modules) {
    const lesson = module.lessons.find((l) => l.slug === lessonSlug);
    if (lesson) return { course, module, lesson };
  }
  return undefined;
}

export function flattenLessons(course: Course): Lesson[] {
  return course.modules.flatMap((m) => m.lessons);
}

export type SearchableLesson = {
  courseSlug: string;
  courseTitle: string;
  moduleTitle: string;
  lesson: Lesson;
};

export function allSearchableLessons(): SearchableLesson[] {
  return courses.flatMap((course) =>
    course.modules.flatMap((module) =>
      module.lessons.map((lesson) => ({
        courseSlug: course.slug,
        courseTitle: course.title,
        moduleTitle: module.title,
        lesson,
      }))
    )
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
