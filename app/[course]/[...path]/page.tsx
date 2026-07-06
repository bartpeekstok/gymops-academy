import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LoomVideo from "@/components/LoomVideo";
import LessonDescription from "@/components/LessonDescription";
import FolderGrid from "@/components/FolderGrid";
import LessonList from "@/components/LessonList";
import {
  adjacentLessons,
  allFolderPaths,
  courses,
  findModuleByPath,
  flattenLessons,
  getCourse,
  getLesson,
  type Course,
  type Lesson,
  type Module,
} from "@/lib/courses";

type Params = { course: string; path: string[] };

export function generateStaticParams(): Params[] {
  return courses.flatMap((course) => [
    ...flattenLessons(course).map((lesson) => ({
      course: course.slug,
      path: [lesson.slug],
    })),
    ...allFolderPaths(course).map((path) => ({
      course: course.slug,
      path,
    })),
  ]);
}

export function generateMetadata({ params }: { params: Params }) {
  const course = getCourse(params.course);
  if (!course) return { title: "Niet gevonden" };
  const folder = findModuleByPath(course, params.path);
  if (folder) {
    return {
      title: `${folder.module.title} – ${course.title} – GymOps Academy`,
    };
  }
  if (params.path.length === 1) {
    const found = getLesson(params.course, params.path[0]);
    if (found) {
      return {
        title: `${found.lesson.title} – ${course.title} – GymOps Academy`,
        description: found.lesson.description,
      };
    }
  }
  return { title: "Niet gevonden" };
}

function Crumbs({
  items,
  current,
}: {
  items: { title: string; href: string }[];
  current: string;
}) {
  return (
    <nav className="text-xs uppercase tracking-widest font-semibold text-primary flex flex-wrap items-center gap-x-1.5 gap-y-1">
      {items.map((item) => (
        <span key={item.href} className="flex items-center gap-1.5">
          <Link href={item.href} className="hover:text-primary-dark">
            {item.title}
          </Link>
          <span className="text-dark/30">›</span>
        </span>
      ))}
      <span className="text-dark/50">{current}</span>
    </nav>
  );
}

function folderCrumbs(course: Course, modulePath: Module[]) {
  return [
    { title: course.title, href: `/${course.slug}` },
    ...modulePath.map((module, i) => ({
      title: module.title,
      href: `/${course.slug}/${modulePath
        .slice(0, i + 1)
        .map((m) => m.slug)
        .join("/")}`,
    })),
  ];
}

function FolderPage({
  course,
  modulePath,
}: {
  course: Course;
  modulePath: Module[];
}) {
  const module = modulePath[modulePath.length - 1];
  const crumbs = folderCrumbs(course, modulePath.slice(0, -1));
  const pathSlugs = modulePath.map((m) => m.slug);

  return (
    <div className="min-h-screen bg-off-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-8">
        <Crumbs items={crumbs} current={module.title} />
        <h1 className="mt-2 text-2xl md:text-3xl font-bold text-navy">
          {module.title}
        </h1>
        {module.description && (
          <p className="mt-2 text-dark/70">{module.description}</p>
        )}

        {module.submodules && module.submodules.length > 0 && (
          <div className="mt-6">
            <FolderGrid
              courseSlug={course.slug}
              basePath={pathSlugs}
              modules={module.submodules}
            />
          </div>
        )}

        {module.lessons.length > 0 && (
          <div className="mt-6">
            <LessonList courseSlug={course.slug} lessons={module.lessons} />
          </div>
        )}
      </div>
    </div>
  );
}

function LessonPage({
  course,
  modulePath,
  lesson,
}: {
  course: Course;
  modulePath: Module[];
  lesson: Lesson;
}) {
  const { prev, next } = adjacentLessons(course, lesson.slug);
  const crumbs = folderCrumbs(course, modulePath);

  return (
    <div className="min-h-screen bg-off-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-8">
        <Crumbs items={crumbs} current={lesson.title} />
        <h1 className="mt-2 text-2xl md:text-3xl font-bold text-navy">
          {lesson.title}
        </h1>

        {lesson.subtitle && (
          <p className="mt-2 text-lg text-dark/60">{lesson.subtitle}</p>
        )}

        {lesson.description && <LessonDescription text={lesson.description} />}

        {lesson.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={lesson.image}
            alt={lesson.imageAlt ?? lesson.title}
            className="mt-5 rounded-xl border border-black/10 shadow-sm max-w-sm"
          />
        )}

        {lesson.videos && lesson.videos.length > 0 ? (
          <div className="mt-5 space-y-8">
            {lesson.videos.map((video) => (
              <div key={video.loomId}>
                {video.title && (
                  <h2 className="mb-2 text-lg font-semibold text-navy">
                    {video.title}
                  </h2>
                )}
                <LoomVideo
                  loomId={video.loomId}
                  title={video.title ?? lesson.title}
                />
              </div>
            ))}
          </div>
        ) : lesson.loomId ? (
          <div className="mt-5">
            <LoomVideo loomId={lesson.loomId} title={lesson.title} />
          </div>
        ) : null}

        {lesson.workflows && lesson.workflows.length > 0 && (
          <div className="mt-6 overflow-x-auto rounded-lg border border-black/10 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-dark/50 border-b border-black/10">
                  <th className="py-3 px-4 font-semibold">Workflow</th>
                  <th className="py-3 px-4 font-semibold">WhatsApp</th>
                </tr>
              </thead>
              <tbody>
                {lesson.workflows.map((w) => (
                  <tr
                    key={w.name}
                    className="border-b border-black/5 last:border-b-0"
                  >
                    <td className="py-2.5 px-4 text-dark/90">{w.name}</td>
                    <td className="py-2.5 px-4 text-dark/70 whitespace-nowrap">
                      {w.whatsapp}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
      </div>
    </div>
  );
}

export default function CoursePathPage({ params }: { params: Params }) {
  const course = getCourse(params.course);
  if (!course) notFound();

  const folder = findModuleByPath(course, params.path);
  if (folder) {
    return <FolderPage course={course} modulePath={folder.modulePath} />;
  }

  if (params.path.length === 1) {
    const found = getLesson(params.course, params.path[0]);
    if (found) {
      return (
        <LessonPage
          course={course}
          modulePath={found.modulePath}
          lesson={found.lesson}
        />
      );
    }
  }

  notFound();
}
