import Link from "next/link";
import { CheckCircle2, PlayCircle } from "lucide-react";
import type { Course } from "@/lib/courses";



type Props = {
  course: Course;
  activeLessonSlug: string;
};

export default function LessonSidebar({ course, activeLessonSlug }: Props) {
  const Icon = course.icon;
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
          <li key={module.slug}>
            {course.modules.length > 1 && (
              <div className="text-xs uppercase tracking-wider font-semibold text-dark/50 mb-2">
                {module.title}
              </div>
            )}
            <ul className="space-y-1">
              {module.lessons.map((lesson) => {
                const isActive = lesson.slug === activeLessonSlug;
                return (
                  <li key={lesson.slug}>
                    <Link
                      href={`/${course.slug}/${lesson.slug}`}
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
              })}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
