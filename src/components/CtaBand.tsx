import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBand({ title, body, buttonLabel, href }: { title: string; body: string; buttonLabel: string; href: string }) {
  return (
    <section className="bg-blue-deep text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase mb-3">{title}</h2>
          <p className="text-white/75">{body}</p>
        </div>
        <Link href={href} className="btn-press inline-flex items-center gap-2 rounded-sm bg-white px-7 py-3.5 text-sm font-semibold text-blue-deep whitespace-nowrap">
          {buttonLabel}
          <ArrowRight className="h-4 w-4 rtl:rotate-180" strokeWidth={2} />
        </Link>
      </div>
    </section>
  );
}
