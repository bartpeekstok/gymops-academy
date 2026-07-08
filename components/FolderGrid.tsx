import Link from "next/link";
import { Folder } from "lucide-react";
import { moduleLessons, type Module } from "@/lib/courses";

type Props = {
  courseSlug: string;
  basePath: string[];
  modules: Module[];
};

export default function FolderGrid({ courseSlug, basePath, modules }: Props) {
  return (
    <div className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))]">
      {modules.map((module) => {
        const lessonCount = moduleLessons(module).length;
        const mapCount = module.submodules?.length ?? 0;
        const href = `/${courseSlug}/${[...basePath, module.slug].join("/")}`;
        return (
          <Link
            key={module.slug}
            href={href}
            className="flex items-start gap-3 rounded-[20px] bg-white p-4 border border-border shadow-card transition duration-[250ms] ease-smooth hover:-translate-y-[3px] hover:shadow-lift hover:border-border-strong"
          >
            <div className="w-10 h-10 rounded-xl bg-mint-tint text-mint-deep flex items-center justify-center shrink-0">
              <Folder className="w-[18px] h-[18px]" />
            </div>
            <div className="min-w-0">
              <div className="text-[15px] font-bold text-ink">
                {module.title}
              </div>
              <div className="mt-0.5 text-xs text-fg-muted">
                {mapCount > 0 &&
                  `${mapCount} ${mapCount === 1 ? "map" : "mappen"} · `}
                {lessonCount} {lessonCount === 1 ? "les" : "lessen"}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
