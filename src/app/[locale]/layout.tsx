import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { locales, isLocale, isRtl, type Locale } from "@/lib/locales";
import { getDictionary } from "@/lib/get-dictionary";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_NAME } from "@/lib/site-config";
import "../globals.css";

const barlow = Barlow_Condensed({ subsets: ["latin", "vietnamese"], variable: "--font-barlow", weight: ["500", "600", "700"], display: "swap" });
const inter = Inter({ subsets: ["latin", "vietnamese"], variable: "--font-inter", display: "swap" });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return { title: `${SITE_NAME} — ${dict.meta.tagline}`, description: dict.home.heroSubtitle };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const dir = isRtl(locale as Locale) ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className={`${barlow.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header locale={locale as Locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale as Locale} dict={dict} />
      </body>
    </html>
  );
}
