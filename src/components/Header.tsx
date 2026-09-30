"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";
import type { Locale } from "@/lib/locales";
import type { Dictionary } from "@/lib/get-dictionary";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { LogoMark } from "./LogoMark";
import {
  SITE_SHORT_NAME,
  SITE_SUFFIX,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
} from "@/lib/site-config";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/products`, label: dict.nav.products },
    { href: `/${locale}/sustainability`, label: dict.nav.sustainability },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  const isActive = (href: string) => (href === `/${locale}` ? pathname === href : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="bg-blue-dark text-white/80 text-xs">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-9">
          <div className="hidden sm:flex items-center gap-5">
            <a href={`tel:${CONTACT_PHONE_HREF}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="h-3 w-3" strokeWidth={1.75} />
              {CONTACT_PHONE_DISPLAY}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="h-3 w-3" strokeWidth={1.75} />
              {CONTACT_EMAIL}
            </a>
          </div>
          <span className="sm:hidden">{SITE_SHORT_NAME}</span>
          <LanguageSwitcher current={locale} />
        </div>
      </div>

      <div className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-20">
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <LogoMark className="h-11 w-11" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-2xl font-bold uppercase tracking-wide text-blue-deep group-hover:text-blue transition-colors">
                {SITE_SHORT_NAME}
              </span>
              <span className="text-[0.65rem] tracking-[0.3em] uppercase text-slate mt-1">{SITE_SUFFIX}</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 text-sm font-medium transition-colors hover:text-blue ${
                  isActive(item.href) ? "text-blue" : "text-ink"
                }`}
              >
                {item.label}
                {isActive(item.href) && <span className="absolute inset-x-0 -bottom-[1px] h-[2px] bg-red" />}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href={`/${locale}/contact`}
              className="hidden sm:inline-flex items-center rounded-sm bg-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-deep transition-colors"
            >
              {dict.common.contactUs}
            </Link>
            <button type="button" className="lg:hidden text-blue-deep" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="lg:hidden border-t border-line bg-white px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium ${isActive(item.href) ? "text-blue" : "text-ink"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
