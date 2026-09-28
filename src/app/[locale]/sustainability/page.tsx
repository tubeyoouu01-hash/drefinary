import Image from "next/image";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/get-dictionary";
import { isLocale, type Locale } from "@/lib/locales";
import { pillars, seedImage } from "@/lib/services";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";

export default async function SustainabilityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const s = dict.sustainability;

  return (
    <>
      <PageHero title={s.heroTitle} subtitle={s.heroSubtitle} />

      <section className="mx-auto max-w-3xl px-6 pt-20 text-center">
        <span className="red-bar mx-auto mb-5" />
        <h2 className="font-display text-4xl font-bold uppercase text-blue-deep mb-4">{s.introTitle}</h2>
        <p className="text-slate leading-relaxed">{s.introBody}</p>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16 space-y-20">
        {pillars.map((p, i) => {
          const Icon = (Icons as unknown as Record<string, LucideIcon>)[p.icon] ?? Icons.Leaf;
          return (
            <section key={p.id} id={p.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-mt-32">
              <div className={`relative h-72 lg:h-96 rounded-sm overflow-hidden border border-line ${i % 2 ? "" : "lg:order-2"}`}>
                <Image src={seedImage(p.seed, 1000, 800)} alt="" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
              </div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue text-white mb-5">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-4xl font-bold uppercase text-blue-deep mb-4">{s.pillarNames[p.id]}</h3>
                <p className="text-slate leading-relaxed text-lg">{s.pillarDescriptions[p.id]}</p>
              </div>
            </section>
          );
        })}
      </div>

      <CtaBand title={s.ctaTitle} body={s.ctaBody} buttonLabel={dict.common.contactUs} href={`/${locale}/contact`} />
    </>
  );
}
