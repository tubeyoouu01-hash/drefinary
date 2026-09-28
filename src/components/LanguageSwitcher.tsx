"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe, ChevronDown } from "lucide-react";
import { locales, localeLabels, type Locale } from "@/lib/locales";

export function LanguageSwitcher({ current }: { current: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  function switchTo(locale: Locale) {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/") || "/");
    setOpen(false);
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-sm text-white/85 hover:text-white transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe className="h-3.5 w-3.5" strokeWidth={1.75} />
        <span>{localeLabels[current]}</span>
        <ChevronDown className="h-3 w-3" strokeWidth={2} />
      </button>
      {open && (
        <ul role="listbox" className="absolute end-0 top-full mt-2 w-44 max-h-80 overflow-y-auto rounded-sm border border-line bg-white shadow-lg z-50">
          {locales.map((locale) => (
            <li key={locale}>
              <button
                type="button"
                onClick={() => switchTo(locale)}
                className={`block w-full px-4 py-2 text-start text-sm hover:bg-blue-tint transition-colors ${
                  locale === current ? "text-blue font-semibold" : "text-ink"
                }`}
              >
                {localeLabels[locale]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
