"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { PlayCircle, Search } from "lucide-react";
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
    <div className="sticky top-0 z-40 bg-white/85 backdrop-blur-[12px] border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-3 flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.png" alt="GymOps" className="h-[26px] w-auto" />
          <span className="rounded-full bg-mint-tint px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-mint-deep">
            Academy
          </span>
        </Link>

        <div ref={containerRef} className="relative flex-1 max-w-[560px]">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-fg-muted pointer-events-none" />
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
            className="w-full rounded-[10px] bg-white text-fg-body placeholder:text-fg-muted border border-border pl-[38px] pr-3.5 py-[9px] text-sm focus:outline-none focus:border-mint focus:[box-shadow:0_0_0_3px_rgba(62,120,142,.14)] transition"
          />

          {showResults && (
            <div className="absolute left-0 right-0 mt-2 rounded-[14px] bg-white shadow-lift border border-border overflow-hidden">
              {results.length === 0 ? (
                <div className="px-4 py-3 text-sm text-fg-muted">
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
                          i === activeIndex ? "bg-mint-tint" : ""
                        }`}
                      >
                        <PlayCircle className="w-[15px] h-[15px] mt-0.5 text-mint shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-ink truncate">
                            {r.lesson.title}
                          </div>
                          <div className="text-xs text-fg-muted truncate">
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
