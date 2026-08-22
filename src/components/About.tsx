import { Cpu, GitBranch, Activity, Layers } from 'lucide-react';
import { useReveal } from '@/hooks';
import { ABOUT_SKILLS, STATS } from '@/content';
import SpotlightCard from './SpotlightCard';
import AnimatedCounter from './AnimatedCounter';

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  const stats = [
    { ...STATS[0], num: 2, suffix: '+' },
    { ...STATS[1], num: 11, suffix: '+' },
    { ...STATS[2], num: 0, raw: 'E2E' },
  ];

  return (
    <section id="about" className="relative section-pad py-24 sm:py-28 lg:py-32">
      <div className="aurora left-[70%] top-[10%] h-[400px] w-[400px] bg-accent-500/10" aria-hidden="true" />
      <div ref={ref} className="reveal relative mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="eyebrow">About</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Backend engineer who ships, deploys <br className="hidden lg:block" />
            and <span className="text-gradient">supports</span> in production.
          </h2>
        </div>

        {/* Bento grid */}
        <div className="mt-10 grid gap-4 md:grid-cols-6 md:grid-rows-[auto_auto]">
          {/* Bio — spans 4 cols / 2 rows */}
          <SpotlightCard className="md:col-span-4 md:row-span-2">
            <div className="glass h-full rounded-2xl p-6 sm:p-8">
              <div className="space-y-5 text-base leading-relaxed text-slate-400 sm:text-lg">
                <p>
                  I'm a Software Engineer with{' '}
                  <span className="font-semibold text-slate-200">2+ years of professional experience</span>{' '}
                  building and operating backend systems in production. My work centers on{' '}
                  <span className="text-brand-300">Java</span> and{' '}
                  <span className="text-brand-300">Spring Boot</span> microservices, REST APIs, and
                  cloud-ready applications on AWS.
                </p>
                <p>
                  Beyond writing clean services, I own the full lifecycle — database changes with
                  Liquibase, CI/CD releases, AWS ECS deployments, and production monitoring with
                  Grafana and OpenSearch. I've also led{' '}
                  <span className="text-slate-200">Perl-to-Java migration</span> work, bringing
                  legacy services into a modern, maintainable stack.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                {ABOUT_SKILLS.map((s) => (
                  <span key={s} className="chip transition-colors hover:border-brand-400/40 hover:text-brand-200">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>

          {/* Stat cards */}
          {stats.map((s) => (
            <SpotlightCard key={s.label} className="md:col-span-2">
              <div className="glass h-full rounded-2xl p-6">
                <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">
                  {'raw' in s && s.raw ? (
                    s.raw
                  ) : (
                    <AnimatedCounter value={(s as { num: number }).num} suffix={(s as { suffix: string }).suffix} />
                  )}
                </div>
                <div className="mt-2 text-sm text-slate-400">{s.label}</div>
              </div>
            </SpotlightCard>
          ))}

          {/* Focus tiles */}
          <SpotlightCard className="md:col-span-2">
            <div className="glass flex h-full items-center gap-4 rounded-2xl p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300 ring-1 ring-inset ring-white/10">
                <Cpu size={20} />
              </span>
              <div>
                <div className="text-sm font-semibold text-white">Current focus</div>
                <div className="text-xs text-slate-500">Java 17/21 · Spring Boot</div>
              </div>
            </div>
          </SpotlightCard>
          <SpotlightCard className="md:col-span-2">
            <div className="glass flex h-full items-center gap-4 rounded-2xl p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400 ring-1 ring-inset ring-white/10">
                <Layers size={20} />
              </span>
              <div>
                <div className="text-sm font-semibold text-white">Architecture</div>
                <div className="text-xs text-slate-500">Microservices · REST</div>
              </div>
            </div>
          </SpotlightCard>
          <SpotlightCard className="md:col-span-2">
            <div className="glass flex h-full items-center gap-4 rounded-2xl p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300 ring-1 ring-inset ring-white/10">
                <Activity size={20} />
              </span>
              <div>
                <div className="text-sm font-semibold text-white">Observability</div>
                <div className="text-xs text-slate-500">Grafana · OpenSearch</div>
              </div>
            </div>
          </SpotlightCard>
          <SpotlightCard className="md:col-span-2">
            <div className="glass flex h-full items-center gap-4 rounded-2xl p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-300 ring-1 ring-inset ring-white/10">
                <GitBranch size={20} />
              </span>
              <div>
                <div className="text-sm font-semibold text-white">Delivery</div>
                <div className="text-xs text-slate-500">CI/CD · Liquibase · ECS</div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
