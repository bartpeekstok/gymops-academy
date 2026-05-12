import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LoomVideo from "@/components/LoomVideo";
import LessonSidebar from "@/components/LessonSidebar";
import {
  adjacentLessons,
  courses,
  flattenLessons,
  getLesson,
} from "@/lib/courses";

type Params = { course: string; lesson: string };

export function generateStaticParams(): Params[] {
  return courses.flatMap((course) =>
    flattenLessons(course).map((lesson) => ({
      course: course.slug,
      lesson: lesson.slug,
    }))
  );
}

export function generateMetadata({ params }: { params: Params }) {
  const found = getLesson(params.course, params.lesson);
  if (!found) return { title: "Les niet gevonden" };
  return {
    title: `${found.lesson.title} – ${found.course.title} – GymOps Academy`,
    description: found.lesson.description,
  };
}

export default function LessonPage({ params }: { params: Params }) {
  const found = getLesson(params.course, params.lesson);
  if (!found) notFound();
  const { course, module, lesson } = found;
  const { prev, next } = adjacentLessons(course, lesson.slug);

  return (
    <div className="min-h-screen bg-off-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-8 grid gap-6 lg:grid-cols-[1fr_280px]">
        <main>
          <div className="text-xs uppercase tracking-widest text-primary font-semibold">
            {module.title}
          </div>
          <h1 className="mt-1 text-2xl md:text-3xl font-bold text-navy">
            {lesson.title}
          </h1>

          <div className="mt-5">
            <LoomVideo loomId={lesson.loomId} title={lesson.title} />
          </div>

          {lesson.description && (
            <p className="mt-5 text-dark/80 leading-relaxed">
              {lesson.description}
            </p>
          )}

          <div className="mt-8 flex items-center justify-between gap-3 border-t border-black/5 pt-5">
            {prev ? (
              <Link
                href={`/${course.slug}/${prev.slug}`}
                className="flex items-center gap-2 text-sm text-dark/70 hover:text-primary"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="text-left">
                  <span className="block text-xs uppercase tracking-wider text-dark/40">
                    Vorige
                  </span>
                  <span className="block font-medium">{prev.title}</span>
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/${course.slug}/${next.slug}`}
                className="flex items-center gap-2 text-sm text-dark/70 hover:text-primary text-right ml-auto"
              >
                <span className="text-right">
                  <span className="block text-xs uppercase tracking-wider text-dark/40">
                    Volgende
                  </span>
                  <span className="block font-medium">{next.title}</span>
                </span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            ) : (
              <span />
            )}
          </div>
        </main>

        <aside className="lg:sticky lg:top-6 lg:self-start">
          <LessonSidebar course={course} activeLessonSlug={lesson.slug} />
        </aside>
      </div>
    </div>
  );
}
