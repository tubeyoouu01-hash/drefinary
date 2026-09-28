"use client";

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import type { TestimonialPerson } from "@/lib/testimonials";

type Copy = { text: string; role: string };
const AUTO_MS = 7000;
const DRAG_RATIO = 0.15;

export function TestimonialCarousel({
  testimonials, people, locale, prevLabel, nextLabel,
}: { testimonials: Copy[]; people: TestimonialPerson[]; locale: string; prevLabel: string; nextLabel: string }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const count = testimonials.length;
  const viewportRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const pid = useRef<number | null>(null);

  const regionNames = useMemo(() => {
    try { return new Intl.DisplayNames([locale], { type: "region" }); } catch { return null; }
  }, [locale]);

  const goTo = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);

  useEffect(() => {
    if (paused || isDragging || count <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), AUTO_MS);
    return () => clearInterval(t);
  }, [paused, isDragging, count]);

  if (count === 0) return null;

  function down(e: React.PointerEvent<HTMLDivElement>) {
    setPaused(true); setIsDragging(true);
    startX.current = e.clientX; pid.current = e.pointerId;
    e.currentTarget.setPointerCapture(e.pointerId);
  }
  function move(e: React.PointerEvent<HTMLDivElement>) {
    if (isDragging) setDragOffset(e.clientX - startX.current);
  }
  function finish() {
    const w = viewportRef.current?.offsetWidth ?? 0;
    if (dragOffset > w * DRAG_RATIO) goTo(index - 1);
    else if (dragOffset < -w * DRAG_RATIO) goTo(index + 1);
    setDragOffset(0); setIsDragging(false); setPaused(false); pid.current = null;
  }
  function up(e: React.PointerEvent<HTMLDivElement>) {
    if (pid.current !== null) e.currentTarget.releasePointerCapture(pid.current);
    finish();
  }

  const w = viewportRef.current?.offsetWidth ?? 1;
  const pct = isDragging ? (dragOffset / w) * 100 : 0;
  // RTL: slides are laid out right-to-left, so the translate direction flips
  const dir = typeof document !== "undefined" && document.documentElement.dir === "rtl" ? 1 : -1;
  const trackStyle: React.CSSProperties = {
    transform: `translateX(calc(${dir * index * 100}% + ${pct}%))`,
    transition: isDragging ? "none" : "transform 500ms ease-out",
  };

  const arrow = "hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-blue hover:border-red hover:text-blue-deep transition-colors";

  return (
    <div className="flex items-center gap-3 sm:gap-6">
      <button type="button" onClick={() => goTo(index - 1)} aria-label={prevLabel} className={arrow}>
        <ChevronLeft className="h-5 w-5 rtl:rotate-180" strokeWidth={1.75} />
      </button>

      <div
        ref={viewportRef}
        className="flex-1 overflow-hidden touch-pan-y cursor-grab active:cursor-grabbing select-none"
        onPointerDown={down} onPointerMove={move} onPointerUp={up}
        onPointerLeave={(e) => (isDragging ? up(e) : setPaused(false))}
        onPointerCancel={up}
      >
        <div className="flex" style={trackStyle}>
          {testimonials.map((t, i) => {
            const p = people[i];
            const country = p ? regionNames?.of(p.countryCode) ?? p.countryCode : null;
            return (
              <div key={t.role + i} className="w-full shrink-0 px-2 text-center">
                <Quote className="h-8 w-8 text-blue mx-auto mb-6" strokeWidth={1.5} />
                <p className="text-lg sm:text-xl text-ink leading-relaxed min-h-[10rem] sm:min-h-[8rem] flex items-center justify-center">
                  &ldquo;{t.text}&rdquo;
                </p>
                <span className="red-bar mx-auto mt-6" />
                <div className="mt-5">
                  {p && (
                    <p className="font-display text-xl font-bold uppercase text-blue-deep">
                      {p.name}
                      {country && <span className="text-slate-light font-normal normal-case"> — {country}</span>}
                    </p>
                  )}
                  <p className="mt-1 text-sm text-slate">{t.role}</p>
                </div>
              </div>
            );
          })}
        </div>

        {count > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((t, i) => (
              <button key={t.role + i} type="button" onClick={() => goTo(i)} aria-label={`${i + 1}`} aria-current={i === index}
                className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-blue" : "w-1.5 bg-line hover:bg-blue-light"}`} />
            ))}
          </div>
        )}
      </div>

      <button type="button" onClick={() => goTo(index + 1)} aria-label={nextLabel} className={arrow}>
        <ChevronRight className="h-5 w-5 rtl:rotate-180" strokeWidth={1.75} />
      </button>
    </div>
  );
}
