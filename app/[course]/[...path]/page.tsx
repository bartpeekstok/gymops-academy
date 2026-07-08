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
    <nav className="eyebrow flex flex-wrap items-center gap-x-1.5 gap-y-1">
      {items.map((item) => (
        <span key={item.href} className="flex items-center gap-1.5">
          <Link href={item.href} className="hover:text-mint transition">
            {item.title}
          </Link>
          <span className="text-border-strong">›</span>
        </span>
      ))}
      <span className="text-fg-muted normal-case tracking-normal font-bold">
        {current}
      </span>
    </nav>
  );
}

function folderCrumbs(course: Course, modulePath: Module[]) {
  const crumbs = [
    { title: "Academy", href: "/" },
    { title: course.title, href: `/${course.slug}` },
    ...modulePath.map((module, i) => ({
      title: module.title,
      href: `/${course.slug}/${modulePath
        .slice(0, i + 1)
        .map((m) => m.slug)
        .join("/")}`,
    })),
  ];
  // Modules met dezelfde titel als de cursus (single-module cursussen)
  // zouden anders dubbel in het kruimelpad staan.
  return crumbs.filter((c, i) => i === 0 || c.title !== crumbs[i - 1].title);
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
    <div className="min-h-screen bg-bg-soft">
      <div className="max-w-[880px] mx-auto px-6 lg:px-8 pt-9 pb-[104px]">
        <Crumbs items={crumbs} current={module.title} />
        <h1 className="mt-3 text-[32px] font-extrabold tracking-[-0.03em] text-ink">
          {module.title}
        </h1>
        {module.description && (
          <p className="mt-2 max-w-[640px] text-base text-fg-muted">
            {module.description}
          </p>
        )}

        {module.lessons.length > 0 && (
          <div className="mt-6">
            <LessonList courseSlug={course.slug} lessons={module.lessons} />
          </div>
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
    <div className="min-h-screen bg-bg-soft">
      <div className="max-w-[880px] mx-auto px-6 lg:px-8 pt-9 pb-[104px]">
        <Crumbs items={crumbs} current={lesson.title} />
        <h1 className="mt-3 text-[32px] font-extrabold tracking-[-0.03em] text-ink">
          {lesson.title}
        </h1>

        {lesson.subtitle && (
          <p className="mt-2 text-lg text-fg-muted">{lesson.subtitle}</p>
        )}

        {lesson.description && <LessonDescription text={lesson.description} />}

        {lesson.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={lesson.image}
            alt={lesson.imageAlt ?? lesson.title}
            className="mt-5 rounded-[14px] border border-border shadow-card max-w-sm"
          />
        )}

        {lesson.videos && lesson.videos.length > 0 ? (
          <div className="mt-5 space-y-8">
            {lesson.videos.map((video) => (
              <div key={video.loomId}>
                {video.title && (
                  <h2 className="mb-2 text-lg font-bold text-ink">
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
          <div className="mt-6 overflow-x-auto rounded-[20px] border border-border bg-white shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-[0.06em] text-fg-muted border-b border-border">
                  <th className="py-3 px-4 font-bold">Workflow</th>
                  <th className="py-3 px-4 font-bold w-[220px]">WhatsApp</th>
                </tr>
              </thead>
              <tbody>
                {lesson.workflows.map((w) => (
                  <tr
                    key={w.name}
                    className="border-b border-bg-soft last:border-b-0"
                  >
                    <td className="py-2.5 px-4 text-fg-body">{w.name}</td>
                    <td className="py-2.5 px-4 text-fg-muted whitespace-nowrap">
                      {w.whatsapp}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-10 grid gap-4 sm:grid-cols-2 border-t border-border pt-6">
          {prev ? (
            <Link
              href={`/${course.slug}/${prev.slug}`}
              className="group flex items-center gap-4 rounded-[14px] bg-white border border-border shadow-card p-5 transition duration-[250ms] ease-smooth hover:-translate-y-[3px] hover:shadow-lift hover:border-border-strong"
            >
              <span className="w-10 h-10 rounded-full bg-mint-tint text-mint-deep flex items-center justify-center shrink-0 transition group-hover:bg-mint group-hover:text-white">
                <ChevronLeft className="w-5 h-5" />
              </span>
              <span className="min-w-0 text-left">
                <span className="block text-[11px] font-bold uppercase tracking-[0.08em] text-fg-muted">
                  Vorige
                </span>
                <span className="mt-0.5 block text-base font-bold text-ink group-hover:text-mint-deep transition">
                  {prev.title}
                </span>
              </span>
            </Link>
          ) : (
            <span className="hidden sm:block" />
          )}
          {next ? (
            <Link
              href={`/${course.slug}/${next.slug}`}
              className="group flex items-center justify-end gap-4 rounded-[14px] bg-white border border-border shadow-card p-5 transition duration-[250ms] ease-smooth hover:-translate-y-[3px] hover:shadow-lift hover:border-border-strong sm:col-start-2"
            >
              <span className="min-w-0 text-right">
                <span className="block text-[11px] font-bold uppercase tracking-[0.08em] text-fg-muted">
                  Volgende
                </span>
                <span className="mt-0.5 block text-base font-bold text-ink group-hover:text-mint-deep transition">
                  {next.title}
                </span>
              </span>
              <span className="w-10 h-10 rounded-full bg-mint-tint text-mint-deep flex items-center justify-center shrink-0 transition group-hover:bg-mint group-hover:text-white">
                <ChevronRight className="w-5 h-5" />
              </span>
            </Link>
          ) : (
            <span className="hidden sm:block" />
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
