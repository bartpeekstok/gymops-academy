import Link from "next/link";
import { CheckCircle2, PlayCircle } from "lucide-react";
import type { Course, Lesson, Module } from "@/lib/courses";

type Props = {
  course: Course;
  activeLessonSlug: string;
};

function LessonLink({
  lesson,
  courseSlug,
  isActive,
}: {
  lesson: Lesson;
  courseSlug: string;
  isActive: boolean;
}) {
  return (
    <li>
      <Link
        href={`/${courseSlug}/${lesson.slug}`}
        className={`flex items-start gap-2 rounded-lg px-2 py-1.5 text-sm transition ${
          isActive
            ? "bg-primary/10 text-primary font-medium"
            : "text-dark/80 hover:bg-off-white"
        }`}
      >
        {isActive ? (
          <PlayCircle className="w-4 h-4 mt-0.5 shrink-0" />
        ) : (
          <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-dark/20" />
        )}
        <span className="flex-1">{lesson.title}</span>
        {lesson.durationMinutes && (
          <span className="text-xs text-dark/40 shrink-0">
            {lesson.durationMinutes}m
          </span>
        )}
      </Link>
    </li>
  );
}

function ModuleSection({
  module,
  courseSlug,
  activeLessonSlug,
  depth,
  showTitle,
}: {
  module: Module;
  courseSlug: string;
  activeLessonSlug: string;
  depth: number;
  showTitle: boolean;
}) {
  const hasSubmodules = !!module.submodules?.length;
  return (
    <li>
      {showTitle && (
        <div
          className={
            depth === 0
              ? "text-xs uppercase tracking-wider font-semibold text-dark/50 mb-2"
              : "text-xs font-semibold text-dark/60 mb-1.5"
          }
        >
          {module.title}
        </div>
      )}
      {hasSubmodules && (
        <ul className="space-y-4 ml-1 pl-2.5 border-l border-black/10 mb-2">
          {module.submodules!.map((sub) => (
            <ModuleSection
              key={sub.slug}
              module={sub}
              courseSlug={courseSlug}
              activeLessonSlug={activeLessonSlug}
              depth={depth + 1}
              showTitle
            />
          ))}
        </ul>
      )}
      {module.lessons.length > 0 && (
        <ul className="space-y-1">
          {module.lessons.map((lesson) => (
            <LessonLink
              key={lesson.slug}
              lesson={lesson}
              courseSlug={courseSlug}
              isActive={lesson.slug === activeLessonSlug}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function LessonSidebar({ course, activeLessonSlug }: Props) {
  const Icon = course.icon;
  const showTitles = course.modules.length > 1;
  return (
    <nav aria-label="Lessen" className="bg-white rounded-xl border border-black/5 p-4">
      <Link
        href="/"
        className="text-xs uppercase tracking-widest font-semibold text-primary hover:text-primary-dark"
      >
        ← Alle onderwerpen
      </Link>
      <div className="mt-2 flex items-center gap-2">
        <Icon className="w-5 h-5 text-primary shrink-0" />
        <h2 className="text-base font-semibold text-navy">{course.title}</h2>
      </div>

      <ul className="mt-4 space-y-5">
        {course.modules.map((module) => (
          <ModuleSection
            key={module.slug}
            module={module}
            courseSlug={course.slug}
            activeLessonSlug={activeLessonSlug}
            depth={0}
            showTitle={showTitles}
          />
        ))}
      </ul>
    </nav>
  );
}
