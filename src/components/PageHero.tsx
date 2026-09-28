export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-blue-deep text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        {eyebrow && <p className="text-xs tracking-[0.25em] uppercase text-white/70 mb-4">{eyebrow}</p>}
        <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase leading-[1.05] max-w-3xl">{title}</h1>
        <span className="red-bar mt-6" />
        {subtitle && <p className="mt-6 text-white/80 text-lg max-w-2xl leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}
