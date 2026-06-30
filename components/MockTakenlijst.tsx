import { CheckCircle2 } from "lucide-react";

type Row = {
  emoji: string;
  title: string;
  preview: string;
  contact?: { initials: string; name: string; color: string };
  assignee: string;
  date: string;
};

const ROWS: Row[] = [
  {
    emoji: "🔔",
    title: "Nieuwe lead",
    preview: "Neem zsm contact op: Jeroen…",
    contact: { initials: "JV", name: "jeroen van duijn", color: "bg-sky-200 text-sky-800" },
    assignee: "JS",
    date: "Jun 27, 2026 09:06 PM",
  },
  {
    emoji: "🎉",
    title: "Google review ontvangen",
    preview: "Er is een nieuwe Google review! Log…",
    assignee: "JS",
    date: "Jun 27, 2026 04:13 PM",
  },
  {
    emoji: "🔔",
    title: "Nieuwe lead",
    preview: "Neem zsm contact op: AvfCSDFvsg…",
    contact: { initials: "BD", name: "bart de tester", color: "bg-violet-200 text-violet-800" },
    assignee: "JS",
    date: "Jun 27, 2026 11:11 AM",
  },
  {
    emoji: "🗂️",
    title: "Jaarlijkse ansichtkaart voor Miria…",
    preview: "Stuur de jaarlijkse ansichtkaart naar…",
    contact: {
      initials: "ME",
      name: "miriam eleonora bisschop",
      color: "bg-rose-200 text-rose-800",
    },
    assignee: "JS",
    date: "Jun 27, 2026 10:48 AM",
  },
];

export default function MockTakenlijst() {
  return (
    <div className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">
      <div className="divide-y divide-black/5">
        {ROWS.map((row, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-off-white"
          >
            <CheckCircle2 className="w-5 h-5 shrink-0 text-dark/20" />

            <div className="w-[34%] min-w-0 font-medium text-dark/90 truncate">
              <span className="mr-1">{row.emoji}</span>
              {row.title}
              <span className="ml-1">{row.emoji}</span>
            </div>

            <div className="hidden md:block w-[28%] min-w-0 truncate text-dark/60">
              {row.preview}
            </div>

            <div className="flex-1 min-w-0 flex items-center gap-2">
              {row.contact && (
                <>
                  <span
                    className={`grid place-items-center w-6 h-6 shrink-0 rounded-full text-[10px] font-semibold ${row.contact.color}`}
                  >
                    {row.contact.initials}
                  </span>
                  <span className="truncate text-dark/70">{row.contact.name}</span>
                </>
              )}
            </div>

            <span className="grid place-items-center w-6 h-6 shrink-0 rounded-full bg-cyan-200 text-cyan-800 text-[10px] font-semibold">
              {row.assignee}
            </span>

            <div className="w-[120px] shrink-0 text-right text-xs text-red-500 whitespace-nowrap">
              {row.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
