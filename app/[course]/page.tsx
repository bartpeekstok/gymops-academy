import Link from "next/link";
import { notFound } from "next/navigation";
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
    <div className="min-h-screen bg-off-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-8">
        <Link
          href="/"
          className="text-xs uppercase tracking-widest font-semibold text-primary hover:text-primary-dark"
        >
          ← Alle onderwerpen
        </Link>

        <div className="mt-3 flex items-center gap-3">
          <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <Icon className="w-6 h-6" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-navy">
            {course.title}
          </h1>
        </div>
        <p className="mt-3 text-dark/70">{course.description}</p>

        {course.intro && <LessonDescription text={course.intro} />}

        {folderMode ? (
          <>
            {introModule && introModule.lessons.length > 0 && (
              <section className="mt-10">
                <h2 className="text-lg font-semibold text-navy mb-3">
                  {introModule.title}
                </h2>
                <LessonList
                  courseSlug={course.slug}
                  lessons={introModule.lessons}
                />
              </section>
            )}
            <section className="mt-10">
              <h2 className="text-lg font-semibold text-navy mb-3">Mappen</h2>
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
                <h2 className="text-lg font-semibold text-navy mb-3">
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
