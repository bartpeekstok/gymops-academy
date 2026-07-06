import Link from "next/link";
import { PlayCircle } from "lucide-react";
import type { Lesson } from "@/lib/courses";

type Props = {
  courseSlug: string;
  lessons: Lesson[];
};

export default function LessonList({ courseSlug, lessons }: Props) {
  return (
    <div className="rounded-xl bg-white border border-black/5 shadow-sm divide-y divide-black/5 overflow-hidden">
      {lessons.map((lesson) => (
        <Link
          key={lesson.slug}
          href={`/${courseSlug}/${lesson.slug}`}
          className="flex items-center gap-3 px-4 py-3 hover:bg-off-white transition"
        >
          <PlayCircle className="w-5 h-5 text-primary shrink-0" />
          <span className="flex-1 text-sm text-dark/90">{lesson.title}</span>
          {lesson.durationMinutes && (
            <span className="text-xs text-dark/40 shrink-0">
              {lesson.durationMinutes}m
            </span>
          )}
        </Link>
      ))}
    </div>
  );
}
