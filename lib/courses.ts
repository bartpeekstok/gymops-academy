import type { LucideIcon } from "lucide-react";
import {
  Calendar,
  Contact,
  LayoutDashboard,
  Megaphone,
  MessageSquare,
  Settings,
  UserPlus,
  Workflow,
} from "lucide-react";

export type Lesson = {
  slug: string;
  title: string;
  description: string;
  loomId: string;
  durationMinutes?: number;
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

export const courses: Course[] = [
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
            slug: "writify-instellen",
            title: "Writify instellen",
            description: "",
            loomId: "24c4f51f66f24185b76fe08d9d9d0559",
          },
          {
            slug: "betaalgegevens-invoeren",
            title: "Betaalgegevens invoeren",
            description: "",
            loomId: "e5caea80523d4a6d945dc162231bc2f2",
          },
          {
            slug: "persoonlijke-agenda-koppelen",
            title: "Persoonlijke agenda koppelen",
            description: "",
            loomId: "c5dff764626f477882e0ca0dbbc9c9fd",
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
    slug: "contacten",
    title: "Contacten",
    description:
      "Alles over het beheren van je contacten: aanmaken, bewerken, samenvoegen en slimme lijsten met filters.",
    icon: Contact,
    modules: [
      {
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
    slug: "conversations",
    title: "Conversations",
    description:
      "Inbox voor al je communicatie: WhatsApp, e-mail, SMS en social op één plek beheren.",
    icon: MessageSquare,
    modules: [
      {
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
            slug: "berichtenstroom-bij-algemene-afspraken",
            title: "Berichtenstroom bij algemene afspraken",
            description: "",
            loomId: "26ce91bad70d44f485f0b6bb93cda180",
          },
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
