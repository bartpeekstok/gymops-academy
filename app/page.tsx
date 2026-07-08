import Link from "next/link";
import { PlayCircle } from "lucide-react";
import { courses, flattenLessons } from "@/lib/courses";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <header
        className="relative text-white"
        style={{
          backgroundImage:
            "linear-gradient(152deg, rgba(10,10,15,.93) 0%, rgba(10,10,15,.82) 46%, rgba(11,16,15,.66) 72%, rgba(16,185,129,.40) 100%), url(/assets/gym-header.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center 38%",
        }}
      >
        <div className="container-page pt-[84px] pb-[76px]">
          <div className="eyebrow !text-mint-light">GymOps · Academy</div>
          <h1 className="mt-3 text-[clamp(38px,4.4vw,56px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-white">
            Leer alles uit GymOps te halen
          </h1>
          <p className="mt-[18px] max-w-[620px] text-[19px] leading-[1.65] text-white/[.72]">
            Korte, praktische videolessen die je laten zien hoe je je gym
            efficiënter runt met het GymOps systeem.
          </p>
        </div>
      </header>

      <section className="container-page pt-14 pb-[104px]">
        <h2 className="text-[26px] font-extrabold tracking-[-0.025em] text-ink">
          Onderwerpen
        </h2>
        <div className="mt-6 grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(340px,1fr))]">
          {courses.map((course) => {
            const lessonCount = flattenLessons(course).length;
            const href = `/${course.slug}`;
            const Icon = course.icon;
            return (
              <Link
                key={course.slug}
                href={href}
                className="flex gap-4 rounded-[20px] bg-white p-6 border border-border shadow-card transition duration-[250ms] ease-smooth hover:-translate-y-[3px] hover:shadow-lift hover:border-border-strong"
              >
                <div className="w-12 h-12 rounded-[14px] bg-mint-tint text-mint-deep flex items-center justify-center shrink-0">
                  <Icon className="w-[22px] h-[22px]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-extrabold text-ink">
                    {course.title}
                  </h3>
                  <p className="mt-1 text-sm leading-[1.55] text-fg-muted">
                    {course.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-[13px] font-semibold text-mint-deep">
                    <PlayCircle className="w-3.5 h-3.5" />
                    {lessonCount} {lessonCount === 1 ? "les" : "lessen"}
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
