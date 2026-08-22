type Item = { name: string; featured?: boolean };

export default function Marquee({ items }: { items: Item[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask relative overflow-hidden py-2" aria-hidden="true">
      <div className="marquee-track gap-3">
        {doubled.map((item, i) => (
          <span
            key={`${item.name}-${i}`}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm whitespace-nowrap ${
              item.featured
                ? 'border-brand-400/30 bg-brand-500/10 text-brand-200'
                : 'border-white/10 bg-white/[0.03] text-slate-400'
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                item.featured ? 'bg-brand-400' : 'bg-slate-600'
              }`}
            />
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}
