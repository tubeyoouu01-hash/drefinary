import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { getDictionary } from "@/lib/get-dictionary";
import { isLocale, type Locale } from "@/lib/locales";
import { services, pillars } from "@/lib/services";
import { whyChooseUs } from "@/lib/why-choose";
import { images } from "@/lib/images";
import { StatsBar } from "@/components/StatsBar";
import { ServiceCard } from "@/components/ServiceCard";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";

const serviceImageByService = {
  refining: images.serviceRefining,
  distribution: images.serviceDistribution,
  exploration: images.serviceExploration,
} as const;

const pillarImageByPillar = {
  safety: images.pillarSafety,
  environment: images.pillarEnvironment,
  quality: images.pillarQuality,
} as const;

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const h = dict.home;

  return (
    <>
      {/* Hero — image visible, dark overlay only on the text side, gentle Ken Burns zoom */}
      <section
        className="relative bg-blue-dark text-white overflow-hidden"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)" }}
      >
        <div className="absolute inset-0 animate-kenburns">
          <Image src={images.heroHome.src} alt={images.heroHome.alt} fill priority className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-dark from-5% via-blue-dark/55 via-40% to-transparent to-85%" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-40">
          <p className="text-xs tracking-[0.25em] uppercase text-white/75 mb-5">{h.heroEyebrow}</p>
          <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase leading-[1.02] max-w-3xl">{h.heroTitle}</h1>
          <span className="red-bar mt-7" />
          <p className="mt-7 text-white/85 text-lg leading-relaxed max-w-2xl">{h.heroSubtitle}</p>
          <div className="mt-10">
            <Link href={`/${locale}/services`} className="btn-press inline-flex items-center gap-2 rounded-sm bg-white px-7 py-3.5 text-sm font-semibold text-blue-deep">
              {h.heroCtaSecondary}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      <StatsBar stats={h.stats} />

      {/* Intro */}
      <Reveal className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="red-bar mb-5" />
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-blue-deep mb-6 leading-tight">{h.introTitle}</h2>
          <p className="text-slate leading-relaxed mb-4">{h.introBody1}</p>
          <p className="text-slate leading-relaxed">{h.introBody2}</p>
        </div>
        <div className="relative h-80 lg:h-[26rem] rounded-sm overflow-hidden border border-line card-lift">
          <Image src={images.introHome.src} alt={images.introHome.alt} fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
        </div>
      </Reveal>

      {/* Services */}
      <section className="bg-blue-tint py-20 border-y border-line">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl mb-12">
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-blue-deep mb-4">{h.servicesTitle}</h2>
            <p className="text-slate leading-relaxed">{h.servicesSubtitle}</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 100}>
                <ServiceCard id={s.id} icon={s.icon} image={serviceImageByService[s.id]} name={dict.services.serviceNames[s.id]} description={dict.services.serviceDescriptions[s.id]} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Link href={`/${locale}/services`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:text-blue-deep transition-colors">
              {dict.common.viewAll}<ArrowRight className="h-4 w-4 rtl:rotate-180" strokeWidth={2} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Process — new section */}
      <section className="relative overflow-hidden">
        <div className="relative h-72 sm:h-96">
          <Image src={images.processBand.src} alt={images.processBand.alt} fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-blue-deep/80" />
          <div className="relative mx-auto max-w-7xl h-full px-6 flex flex-col justify-center">
            <Reveal>
              <span className="red-bar mb-5" />
              <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-white mb-4 max-w-xl">{h.processTitle}</h2>
              <p className="text-white/80 max-w-xl leading-relaxed">{h.processSubtitle}</p>
            </Reveal>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 py-16 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {h.processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 90} className="relative pt-8">
                <span className="font-display text-5xl font-bold text-blue/15 absolute top-0 start-0">{String(i + 1).padStart(2, "0")}</span>
                <div className="pt-8 border-t-2 border-red mt-2">
                  <h3 className="font-display text-lg font-bold uppercase text-blue-deep mb-2">{step.title}</h3>
                  <p className="text-sm text-slate leading-relaxed">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal className="max-w-2xl mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-blue-deep mb-4">{h.pillarsTitle}</h2>
          <p className="text-slate leading-relaxed">{h.pillarsSubtitle}</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <Reveal key={p.id} delay={i * 100}>
              <ServiceCard id={`home-${p.id}`} icon={p.icon} image={pillarImageByPillar[p.id]} name={dict.sustainability.pillarNames[p.id]} description={dict.sustainability.pillarDescriptions[p.id]} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Choose Us — new section */}
      <section className="bg-blue-tint border-y border-line py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl mb-12">
            <span className="red-bar mb-5" />
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-blue-deep mb-4">{h.whyTitle}</h2>
            <p className="text-slate leading-relaxed">{h.whySubtitle}</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((w, i) => {
              const Icon = (Icons as unknown as Record<string, LucideIcon>)[w.icon] ?? Icons.CheckCircle2;
              return (
                <Reveal key={w.id} delay={i * 90} className="card-lift bg-white border border-line rounded-sm p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-tint text-blue mb-5 animate-float">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-lg font-bold uppercase text-blue-deep mb-2">{h.whyItems[w.id].title}</h3>
                  <p className="text-sm text-slate leading-relaxed">{h.whyItems[w.id].body}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand title={h.ctaTitle} body={h.ctaBody} buttonLabel={h.ctaButton} href={`/${locale}/contact`} />
    </>
  );
}
