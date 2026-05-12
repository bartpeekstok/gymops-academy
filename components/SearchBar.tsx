"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { GraduationCap, PlayCircle, Search } from "lucide-react";
import type { SearchableLesson } from "@/lib/courses";

type Props = {
  lessons: SearchableLesson[];
};

const MAX_RESULTS = 8;

function matches(item: SearchableLesson, terms: string[]): boolean {
  if (terms.length === 0) return false;
  const haystack = [
    item.lesson.title,
    item.lesson.description,
    item.moduleTitle,
    item.courseTitle,
  ]
    .join(" ")
    .toLowerCase();
  return terms.every((t) => haystack.includes(t));
}

export default function SearchBar({ lessons }: Props) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (terms.length === 0) return [];
    return lessons.filter((l) => matches(l, terms)).slice(0, MAX_RESULTS);
  }, [query, lessons]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "/" && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, Math.max(0, results.length - 1)));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(0, i - 1));
    } else if (e.key === "Enter") {
      const target = results[activeIndex];
      if (target) {
        e.preventDefault();
        setOpen(false);
        setQuery("");
        router.push(`/${target.courseSlug}/${target.lesson.slug}`);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
  }

  const showResults = open && query.trim().length > 0;

  return (
    <div className="sticky top-0 z-40 bg-navy/95 backdrop-blur border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-3 flex items-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-white shrink-0 hover:text-accent transition"
        >
          <GraduationCap className="w-5 h-5 text-accent" />
          <span className="font-semibold text-sm tracking-wide">GymOps Academy</span>
        </Link>

        <div ref={containerRef} className="relative flex-1 max-w-xl">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-dark/40 pointer-events-none" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            placeholder="Waar ben je naar op zoek?"
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={handleKeyDown}
            className="w-full rounded-lg bg-white text-dark placeholder:text-dark/40 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          />

          {showResults && (
            <div className="absolute left-0 right-0 mt-2 rounded-lg bg-white shadow-xl border border-black/5 overflow-hidden">
              {results.length === 0 ? (
                <div className="px-4 py-3 text-sm text-dark/50">
                  Geen lessen gevonden voor &ldquo;{query}&rdquo;.
                </div>
              ) : (
                <ul>
                  {results.map((r, i) => (
                    <li key={`${r.courseSlug}-${r.lesson.slug}`}>
                      <Link
                        href={`/${r.courseSlug}/${r.lesson.slug}`}
                        onClick={() => {
                          setOpen(false);
                          setQuery("");
                        }}
                        onMouseEnter={() => setActiveIndex(i)}
                        className={`flex items-start gap-3 px-4 py-2.5 transition ${
                          i === activeIndex ? "bg-primary/10" : ""
                        }`}
                      >
                        <PlayCircle className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-navy truncate">
                            {r.lesson.title}
                          </div>
                          <div className="text-xs text-dark/50 truncate">
                            {r.courseTitle}
                            {r.lesson.durationMinutes
                              ? ` · ${r.lesson.durationMinutes} min`
                              : ""}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
