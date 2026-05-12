import Link from "next/link";
import { courses, flattenLessons } from "@/lib/courses";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <header className="bg-navy text-white py-8">
        <div className="container-page">
          <h1 className="text-3xl md:text-4xl font-bold">
            Leer alles uit GymOps te halen
          </h1>
          <p className="mt-2 max-w-2xl text-off-white/80">
            Korte, praktische videolessen die je laten zien hoe je je gym
            efficiënter runt met het GymOps systeem.
          </p>
        </div>
      </header>

      <section className="container-page py-10">
        <h2 className="text-xl font-semibold mb-5 text-navy">Onderwerpen</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {courses.map((course) => {
            const lessonCount = flattenLessons(course).length;
            const firstLesson = flattenLessons(course)[0];
            const href = firstLesson
              ? `/${course.slug}/${firstLesson.slug}`
              : `/${course.slug}`;
            const Icon = course.icon;
            return (
              <Link
                key={course.slug}
                href={href}
                className="group block rounded-xl bg-white p-6 shadow-sm border border-black/5 hover:border-primary/40 hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-navy group-hover:text-primary transition">
                      {course.title}
                    </h3>
                    <p className="mt-1 text-sm text-dark/70">
                      {course.description}
                    </p>
                    <div className="mt-3 text-xs text-dark/50">
                      {lessonCount} {lessonCount === 1 ? "les" : "lessen"}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
