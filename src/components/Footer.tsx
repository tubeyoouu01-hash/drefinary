import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import type { Locale } from "@/lib/locales";
import type { Dictionary } from "@/lib/get-dictionary";
import { services } from "@/lib/services";
import { YoutubeIcon, FacebookIcon, LinkedinIcon, XIcon, InstagramIcon } from "./SocialIcons";
import { LogoMark } from "./LogoMark";
import {
  SITE_NAME,
  SITE_SHORT_NAME,
  SITE_SUFFIX,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  OFFICE_FULL_ADDRESS,
  SOCIAL_LINKS,
  type SocialPlatform,
} from "@/lib/site-config";

const socialIconMap: Record<SocialPlatform, typeof YoutubeIcon> = {
  youtube: YoutubeIcon,
  facebook: FacebookIcon,
  linkedin: LinkedinIcon,
  x: XIcon,
  instagram: InstagramIcon,
};

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();
  const link = "hover:text-white transition-colors";

  return (
    <footer className="bg-blue-dark text-white/70 border-t-4 border-red">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <LogoMark className="h-10 w-10" />
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl font-bold uppercase text-white">{SITE_SHORT_NAME}</span>
              <span className="text-[0.6rem] tracking-[0.3em] uppercase text-white/60 mt-1">{SITE_SUFFIX}</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed">{dict.footer.description}</p>
          <div className="flex items-center gap-4 mt-5">
            {SOCIAL_LINKS.map((s) => {
              const Icon = socialIconMap[s.platform];
              return (
                <a key={s.name} href={s.href} aria-label={s.name} className="text-white/60 hover:text-white transition-colors">
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg uppercase tracking-wide text-white mb-4">{dict.footer.quickLinks}</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href={`/${locale}`} className={link}>{dict.nav.home}</Link></li>
            <li><Link href={`/${locale}/about`} className={link}>{dict.nav.about}</Link></li>
            <li><Link href={`/${locale}/services`} className={link}>{dict.nav.services}</Link></li>
            <li><Link href={`/${locale}/products`} className={link}>{dict.nav.products}</Link></li>
            <li><Link href={`/${locale}/sustainability`} className={link}>{dict.nav.sustainability}</Link></li>
            <li><Link href={`/${locale}/contact`} className={link}>{dict.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg uppercase tracking-wide text-white mb-4">{dict.footer.services}</h3>
          <ul className="space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.id}>
                <Link href={`/${locale}/services#${s.id}`} className={link}>{dict.services.serviceNames[s.id]}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg uppercase tracking-wide text-white mb-4">{dict.footer.getInTouch}</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-white" strokeWidth={1.75} />
              <span>{OFFICE_FULL_ADDRESS}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-white" strokeWidth={1.75} />
              <a href={`mailto:${CONTACT_EMAIL}`} className={link}>{CONTACT_EMAIL}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-white" strokeWidth={1.75} />
              <a href={`tel:${CONTACT_PHONE_HREF}`} className={link}>{CONTACT_PHONE_DISPLAY}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-white/50">
          <p>© {year} {SITE_NAME}. {dict.footer.rights}</p>
          <div className="flex gap-5">
            <Link href={`/${locale}/privacy`} className={link}>{dict.footer.privacy}</Link>
            <Link href={`/${locale}/terms`} className={link}>{dict.footer.terms}</Link>
          </div>
        </div>
        <p className="mx-auto max-w-7xl px-6 pb-4 text-[0.7rem] text-white/40 italic">{dict.footer.disclaimer}</p>
      </div>
    </footer>
  );
}
