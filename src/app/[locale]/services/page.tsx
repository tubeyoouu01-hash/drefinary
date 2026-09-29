import Image from "next/image";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/get-dictionary";
import { isLocale, type Locale } from "@/lib/locales";
import { services } from "@/lib/services";
import { images } from "@/lib/images";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";

const serviceImageByService = {
  refining: images.serviceRefining,
  distribution: images.serviceDistribution,
  exploration: images.serviceExploration,
} as const;

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const s = dict.services;

  return (
    <>
      <PageHero eyebrow={dict.meta.subTagline} title={s.heroTitle} subtitle={s.heroSubtitle} />

      <Reveal className="mx-auto max-w-3xl px-6 pt-24 text-center">
        <span className="red-bar mx-auto mb-5" />
        <h2 className="font-display text-4xl font-bold uppercase text-blue-deep mb-4">{s.introTitle}</h2>
        <p className="text-slate leading-relaxed">{s.introBody}</p>
      </Reveal>

      <div className="mx-auto max-w-7xl px-6 py-16 space-y-20">
        {services.map((svc, i) => {
          const Icon = (Icons as unknown as Record<string, LucideIcon>)[svc.icon] ?? Icons.Factory;
          const image = serviceImageByService[svc.id];
          return (
            <section key={svc.id} id={svc.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-mt-32">
              <Reveal className={`relative h-72 lg:h-96 rounded-sm overflow-hidden border border-line card-lift ${i % 2 ? "lg:order-2" : ""}`}>
                <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
              </Reveal>
              <Reveal>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-tint text-blue mb-5">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-4xl font-bold uppercase text-blue-deep mb-4">{s.serviceNames[svc.id]}</h3>
                <p className="text-slate leading-relaxed mb-6">{s.serviceDescriptions[svc.id]}</p>
                <ul className="space-y-3">
                  {s.servicePoints[svc.id].map((p) => (
                    <li key={p} className="flex items-start gap-3 text-slate">
                      <CheckCircle2 className="h-5 w-5 text-blue shrink-0 mt-0.5" strokeWidth={1.75} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </section>
          );
        })}
      </div>

      <CtaBand title={s.ctaTitle} body={s.ctaBody} buttonLabel={dict.common.contactUs} href={`/${locale}/contact`} />
    </>
  );
}
