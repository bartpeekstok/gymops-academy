import Link from "next/link";
import { PlayCircle } from "lucide-react";
import type { Lesson } from "@/lib/courses";

type Props = {
  courseSlug: string;
  lessons: Lesson[];
};

export default function LessonList({ courseSlug, lessons }: Props) {
  return (
    <div className="rounded-[20px] bg-white border border-border shadow-card divide-y divide-bg-soft overflow-hidden">
      {lessons.map((lesson) => (
        <Link
          key={lesson.slug}
          href={`/${courseSlug}/${lesson.slug}`}
          className="flex items-center gap-3 px-[18px] py-[13px] hover:bg-bg-soft-2 transition"
        >
          <PlayCircle className="w-[18px] h-[18px] text-mint shrink-0" />
          <span className="flex-1 text-sm font-medium text-ink">
            {lesson.title}
          </span>
          {lesson.durationMinutes && (
            <span className="text-xs text-fg-muted shrink-0">
              {lesson.durationMinutes} min
            </span>
          )}
        </Link>
      ))}
    </div>
  );
}
