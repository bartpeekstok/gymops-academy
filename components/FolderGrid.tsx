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
    <div className="grid gap-4 sm:grid-cols-2">
      {modules.map((module) => {
        const lessonCount = moduleLessons(module).length;
        const mapCount = module.submodules?.length ?? 0;
        const href = `/${courseSlug}/${[...basePath, module.slug].join("/")}`;
        return (
          <Link
            key={module.slug}
            href={href}
            className="group flex items-start gap-3 rounded-xl bg-white p-4 border border-black/5 shadow-sm hover:border-primary/40 hover:shadow-md transition"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition">
              <Folder className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="font-semibold text-navy group-hover:text-primary transition">
                {module.title}
              </div>
              <div className="mt-0.5 text-xs text-dark/50">
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
