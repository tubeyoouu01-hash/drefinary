import Image from "next/image";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/get-dictionary";
import { isLocale, type Locale } from "@/lib/locales";
import { images } from "@/lib/images";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Avatar } from "@/components/Avatar";
import { CEO_NAME, CEO_INITIALS, CEO_AVATAR_IMAGE } from "@/lib/leadership";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const a = (await getDictionary(locale as Locale)).about;

  return (
    <>
      <PageHero title={a.heroTitle} subtitle={a.heroSubtitle} />

      <section className="mx-auto max-w-7xl px-6 pt-24 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        <Reveal className="relative h-80 lg:h-full min-h-[24rem] rounded-sm overflow-hidden border border-line order-2 lg:order-1 card-lift">
          <Image src={images.aboutStory.src} alt={images.aboutStory.alt} fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
        </Reveal>
        <Reveal className="order-1 lg:order-2">
          <span className="red-bar mb-5" />
          <h2 className="font-display text-4xl font-bold uppercase text-blue-deep mb-6">{a.storyTitle}</h2>
          <p className="text-slate leading-relaxed mb-4">{a.storyBody1}</p>
          <p className="text-slate leading-relaxed mb-4">{a.storyBody2}</p>
          <p className="text-slate leading-relaxed">{a.storyBody3}</p>
        </Reveal>
      </section>

      <section className="bg-blue-deep text-white py-20">
        <Reveal className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-4xl font-bold uppercase mb-4">{a.missionTitle}</h2>
          <span className="red-bar mx-auto mb-6" />
          <p className="text-white/85 text-xl leading-relaxed">{a.missionBody}</p>
        </Reveal>
      </section>

      <section className="bg-white py-20">
        <Reveal className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-slate-light mb-6">{a.ceoSectionTitle}</p>
          <Avatar initials={CEO_INITIALS} image={CEO_AVATAR_IMAGE} className="h-24 w-24 text-3xl mx-auto" />
          <p className="mt-8 text-xl sm:text-2xl text-ink leading-relaxed font-display italic">&ldquo;{a.ceoQuote}&rdquo;</p>
          <span className="red-bar mx-auto mt-6 mb-4" />
          <p className="font-display text-lg font-bold uppercase text-blue-deep">{CEO_NAME}</p>
          <p className="text-sm text-slate">{a.ceoTitle}</p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <h2 className="font-display text-4xl font-bold uppercase text-blue-deep mb-12 text-center">{a.valuesTitle}</h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {a.values.map((v, i) => (
            <Reveal key={v.title} delay={i * 100} className="pt-6 border-t-2 border-blue">
              <span className="font-display text-4xl font-bold text-blue/20">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-2xl font-bold uppercase text-blue-deep mt-2 mb-2">{v.title}</h3>
              <p className="text-sm text-slate leading-relaxed">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-blue-tint border-y border-line py-20">
        <Reveal className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-4xl font-bold uppercase text-blue-deep mb-5">{a.leadershipTitle}</h2>
          <p className="text-slate leading-relaxed">{a.leadershipBody}</p>
          <p className="mt-8 text-xs text-slate-light italic">{a.licenseNote}</p>
        </Reveal>
      </section>
    </>
  );
}
