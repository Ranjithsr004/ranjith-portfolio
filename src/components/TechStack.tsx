import { useState } from 'react';
import { Server, Cloud, Database, Wrench, Layout, Sparkles } from 'lucide-react';
import { useReveal } from '@/hooks';
import { TECH_GROUPS } from '@/content';
import SpotlightCard from './SpotlightCard';
import Marquee from './Marquee';

const ICONS = { Server, Cloud, Database, Wrench, Layout } as const;

const ALL_TECH: { name: string; featured?: boolean }[] = [
  { name: 'Java 17 / 21', featured: true },
  { name: 'Spring Boot', featured: true },
  { name: 'Microservices', featured: true },
  { name: 'REST APIs' },
  { name: 'PostgreSQL' },
  { name: 'Oracle' },
  { name: 'AWS ECS' },
  { name: 'AWS EC2' },
  { name: 'CI/CD' },
  { name: 'Liquibase' },
  { name: 'Grafana' },
  { name: 'OpenSearch' },
  { name: 'Docker' },
  { name: 'Hibernate / JPA' },
  { name: 'Maven / Gradle' },
  { name: 'Git' },
];

export default function TechStack() {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState(0);

  return (
    <section id="stack" className="relative section-pad py-24 sm:py-28 lg:py-32">
      <div className="aurora left-[5%] top-[20%] h-[400px] w-[400px] bg-brand-500/10" aria-hidden="true" />
      <div ref={ref} className="reveal relative mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="eyebrow">Tech Stack</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            The tools behind <span className="text-gradient">production-grade backends</span>
          </h2>
          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            A focused, battle-tested stack — with Java and Spring Boot at the core.
          </p>
        </div>

        {/* Infinite marquee ticker */}
        <div className="mt-8">
          <Marquee items={ALL_TECH} />
        </div>

        {/* Bento: category rail + featured grid */}
        <div className="mt-8 grid gap-4 lg:grid-cols-[260px_1fr]">
          {/* Category rail */}
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {TECH_GROUPS.map((group, i) => {
              const Icon = ICONS[group.icon as keyof typeof ICONS];
              const isActive = active === i;
              return (
                <button
                  key={group.label}
                  onClick={() => setActive(i)}
                  className={`group flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300 lg:w-full ${
                    isActive
                      ? 'border-brand-400/40 bg-brand-500/10 text-white'
                      : 'border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/20 hover:text-slate-200'
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
                      isActive ? 'bg-brand-500/20 text-brand-300' : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    <Icon size={18} />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold">{group.label}</span>
                    {group.primary && (
                      <span className="text-[10px] font-medium uppercase tracking-wider text-brand-300">
                        Core
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active panel as bento grid */}
          <SpotlightCard>
            <div className="glass relative min-h-[280px] overflow-hidden rounded-2xl p-6 sm:p-8">
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-500/10 blur-3xl"
                aria-hidden="true"
              />
              <div key={active} className="relative animate-fade-in">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    {TECH_GROUPS[active].label}
                  </h3>
                  {TECH_GROUPS[active].primary && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand-500/15 px-2.5 py-0.5 text-[11px] font-semibold text-brand-300">
                      <Sparkles size={11} /> Primary
                    </span>
                  )}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {TECH_GROUPS[active].items.map((item) => (
                    <div
                      key={item.name}
                      className={`group/item flex items-center justify-between rounded-xl border px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 ${
                        item.featured
                          ? 'border-brand-400/30 bg-brand-500/[0.08] hover:border-brand-400/50'
                          : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]'
                      }`}
                    >
                      <span className={`text-sm font-medium ${item.featured ? 'text-white' : 'text-slate-200'}`}>
                        {item.name}
                      </span>
                      {item.note && (
                        <span className="text-[11px] font-medium text-slate-500">{item.note}</span>
                      )}
                      {item.featured && (
                        <span className="h-2 w-2 rounded-full bg-brand-400 shadow-[0_0_10px_rgba(43,203,191,0.7)]" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
