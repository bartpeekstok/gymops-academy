import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import FolderGrid from "@/components/FolderGrid";
import LessonList from "@/components/LessonList";
import LessonDescription from "@/components/LessonDescription";
import { courses, getCourse } from "@/lib/courses";

type Params = { course: string };

export function generateStaticParams(): Params[] {
  return courses.map((course) => ({ course: course.slug }));
}

export function generateMetadata({ params }: { params: Params }) {
  const course = getCourse(params.course);
  if (!course) return { title: "Onderwerp niet gevonden" };
  return {
    title: `${course.title} – GymOps Academy`,
    description: course.description,
  };
}

export default function CoursePage({ params }: { params: Params }) {
  const course = getCourse(params.course);
  if (!course) notFound();
  const Icon = course.icon;
  const folderMode = course.modules.some((m) => m.submodules?.length);
  const introModule = folderMode
    ? course.modules.find((m) => m.slug === "introductie")
    : undefined;
  const folderModules = folderMode
    ? course.modules.filter((m) => m !== introModule)
    : [];

  return (
    <div className="min-h-screen bg-bg-soft">
      <div className="max-w-[880px] mx-auto px-6 lg:px-8 pt-9 pb-[104px]">
        <Link
          href="/"
          className="eyebrow inline-flex items-center gap-1 hover:text-mint transition"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          Alle onderwerpen
        </Link>

        <div className="mt-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-[14px] bg-mint-tint text-mint-deep flex items-center justify-center shrink-0">
            <Icon className="w-[22px] h-[22px]" />
          </div>
          <h1 className="text-[34px] font-extrabold tracking-[-0.03em] text-ink">
            {course.title}
          </h1>
        </div>
        <p className="mt-3 max-w-[640px] text-base text-fg-muted">
          {course.description}
        </p>

        {course.intro && <LessonDescription text={course.intro} />}

        {folderMode ? (
          <>
            {introModule && introModule.lessons.length > 0 && (
              <section className="mt-10">
                <h2 className="text-[19px] font-bold text-ink mb-3.5">
                  {introModule.title}
                </h2>
                <LessonList
                  courseSlug={course.slug}
                  lessons={introModule.lessons}
                />
              </section>
            )}
            <section className="mt-10">
              <h2 className="text-[19px] font-bold text-ink mb-3.5">Mappen</h2>
              <FolderGrid
                courseSlug={course.slug}
                basePath={[]}
                modules={folderModules}
              />
            </section>
          </>
        ) : (
          course.modules.map((module) => (
            <section key={module.slug} className="mt-10">
              {course.modules.length > 1 && (
                <h2 className="text-[19px] font-bold text-ink mb-3.5">
                  {module.title}
                </h2>
              )}
              <LessonList courseSlug={course.slug} lessons={module.lessons} />
            </section>
          ))
        )}
      </div>
    </div>
  );
}
