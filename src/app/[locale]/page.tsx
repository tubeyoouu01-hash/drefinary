import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getDictionary } from "@/lib/get-dictionary";
import { isLocale, type Locale } from "@/lib/locales";
import { services, pillars, seedImage } from "@/lib/services";
import { testimonialPeople } from "@/lib/testimonials";
import { StatsBar } from "@/components/StatsBar";
import { ServiceCard } from "@/components/ServiceCard";
import { CtaBand } from "@/components/CtaBand";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const h = dict.home;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-blue-dark text-white overflow-hidden">
        <Image src={"/images5.jpeg"} alt="" fill priority className="object-cover opacity-100" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-dark via-blue-dark/80 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-36">
          <p className="text-xs tracking-[0.25em] uppercase text-white/75 mb-5">{h.heroEyebrow}</p>
          <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase leading-[1.02] max-w-3xl">{h.heroTitle}</h1>
          <span className="red-bar mt-7" />
          <p className="mt-7 text-white/85 text-lg leading-relaxed max-w-2xl">{h.heroSubtitle}</p>
          <div className="mt-10">
            <Link href={`/${locale}/services`} className="inline-flex items-center gap-2 rounded-sm bg-white px-7 py-3.5 text-sm font-semibold text-blue-deep hover:bg-blue-tint transition-colors">
              {h.heroCtaSecondary}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      <StatsBar stats={h.stats} />

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="red-bar mb-5" />
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-blue-deep mb-6 leading-tight">{h.introTitle}</h2>
          <p className="text-slate leading-relaxed mb-4">{h.introBody1}</p>
          <p className="text-slate leading-relaxed">{h.introBody2}</p>
        </div>
        <div className="relative h-80 lg:h-[26rem] rounded-sm overflow-hidden border border-line">
          {/* <Image src={seedImage("crude-oil-storage-tanks", 1000, 800)} alt="" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" /> */}
          <Image src={"/images6.jpeg"} alt="" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
        </div>
      </section>

      {/* Services */}
      <section className="bg-blue-tint py-20 border-y border-line">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-blue-deep mb-4">{h.servicesTitle}</h2>
            <p className="text-slate leading-relaxed">{h.servicesSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.id} id={s.id} icon={s.icon} seed={s.seed} image={s.image} name={dict.services.serviceNames[s.id]} description={dict.services.serviceDescriptions[s.id]} />
            ))}
          </div>
          <div className="mt-10">
            <Link href={`/${locale}/services`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:text-blue-deep transition-colors">
              {dict.common.viewAll}<ArrowRight className="h-4 w-4 rtl:rotate-180" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-blue-deep mb-4">{h.pillarsTitle}</h2>
          <p className="text-slate leading-relaxed">{h.pillarsSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <ServiceCard   key={p.id} id={`home-${p.id}`} icon={p.icon} seed={p.seed} name={dict.sustainability.pillarNames[p.id]} description={dict.sustainability.pillarDescriptions[p.id]} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="bg-blue-tint border-y border-line">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <TestimonialCarousel testimonials={h.testimonials} people={testimonialPeople} locale={locale} prevLabel={h.prevTestimonial} nextLabel={h.nextTestimonial} />
        </div>
      </section> */}

      <CtaBand title={h.ctaTitle} body={h.ctaBody} buttonLabel={h.ctaButton} href={`/${locale}/contact`} />
    </>
  );
}
