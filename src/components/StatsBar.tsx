export function StatsBar({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="bg-white border-y border-line">
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center sm:text-start border-s-2 border-red ps-4">
            <div className="font-display text-4xl font-bold text-blue-deep">{s.value}</div>
            <div className="mt-1 text-xs sm:text-sm text-slate tracking-wide">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
