import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/get-dictionary";
import { isLocale, type Locale } from "@/lib/locales";
import { productGroups, type ProductId } from "@/lib/products";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const p = dict.products;

  return (
    <>
      <PageHero title={p.heroTitle} subtitle={p.heroSubtitle} />

      <Reveal className="mx-auto max-w-3xl px-6 pt-24 text-center">
        <span className="red-bar mx-auto mb-5" />
        <h2 className="font-display text-4xl font-bold uppercase text-blue-deep mb-4">{p.introTitle}</h2>
        <p className="text-slate leading-relaxed">{p.introBody}</p>
      </Reveal>

      <div className="mx-auto max-w-7xl px-6 py-16 space-y-20">
        {/* {productGroups.map((group, gi) => {
          const GroupIcon = (Icons as unknown as Record<string, LucideIcon>)[group.icon] ?? Icons.Package;
          return (
            <section key={group.id} id={group.id} className="scroll-mt-32">
              <Reveal className="flex items-center gap-4 mb-8">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue text-white">
                  <GroupIcon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-display text-3xl font-bold uppercase text-blue-deep">{p.groupNames[group.id]}</h3>
                  <p className="text-sm text-slate">{p.groupDescriptions[group.id]}</p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((itemId: ProductId, i: number) => {
                  const ItemIcon = (Icons as unknown as Record<string, LucideIcon>)[productIcons[itemId]] ?? Icons.Droplet;
                  const item = p.items[itemId];
                  return (
                    <Reveal key={itemId} delay={i * 80} className="card-lift bg-white border border-line rounded-sm p-6 border-t-2 border-t-red/0 hover:border-t-red">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-tint text-blue mb-4">
                        <ItemIcon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <h4 className="font-display text-xl font-bold uppercase text-blue-deep mb-2">{item.name}</h4>
                      <p className="text-sm text-slate leading-relaxed mb-4">{item.description}</p>
                      <Link href={`/${locale}/contact`} className="text-xs font-semibold text-blue hover:text-blue-deep transition-colors uppercase tracking-wide">
                        {p.specSheetCta} →
                      </Link>
                    </Reveal>
                  );
                })}
              </div>
            </section>
          );
        })} */}

        {productGroups.map((group) => {
  const GroupIcon =
    (Icons as unknown as Record<string, LucideIcon>)[group.icon] ??
    Icons.Package;

  return (
    <section
      key={group.id}
      id={group.id}
      className="scroll-mt-32"
    >
      <Reveal className="flex items-center gap-4 mb-8">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue text-white">
          <GroupIcon
            className="h-6 w-6"
            strokeWidth={1.75}
          />
        </span>

        <div>
          <h3 className="font-display text-3xl font-bold uppercase text-blue-deep">
            {group.name}
          </h3>

          <p className="text-sm text-slate">
            {group.description}
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {group.items.map((item, i) => {
          const ItemIcon =
            (Icons as unknown as Record<string, LucideIcon>)[item.icon] ??
            Icons.Droplet;

          return (
            <Reveal
              key={item.id}
              delay={i * 80}
              className="card-lift bg-white border border-line rounded-sm p-6 border-t-2 border-t-red/0 hover:border-t-red"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-tint text-blue mb-4">
                <ItemIcon
                  className="h-5 w-5"
                  strokeWidth={1.75}
                />
              </span>

              <h4 className="font-display text-xl font-bold uppercase text-blue-deep mb-2">
                {item.name}
              </h4>

              <p className="text-sm text-slate leading-relaxed mb-4">
                {item.description}
              </p>

              <Link
                href={`/${locale}/contact`}
                className="text-xs font-semibold text-blue hover:text-blue-deep transition-colors uppercase tracking-wide"
              >
                Request Specification →
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
})}

      </div>

      <CtaBand title={p.ctaTitle} body={p.ctaBody} buttonLabel={dict.common.contactUs} href={`/${locale}/contact`} />
    </>
  );
}
