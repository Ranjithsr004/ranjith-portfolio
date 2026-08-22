import { Code2, Boxes, Cloud, GraduationCap, ArrowUpRight } from 'lucide-react';
import { useReveal } from '@/hooks';
import { ENGINEERING_ITEMS, PROFILE } from '@/content';
import SpotlightCard from './SpotlightCard';

const ICONS = [Code2, Boxes, Cloud, GraduationCap];

export default function Engineering() {
  const ref = useReveal<HTMLDivElement>('reveal-scale');
  return (
    <section id="engineering" className="relative section-pad py-24 sm:py-28 lg:py-32">
      <div className="aurora left-[50%] top-[0%] h-[460px] w-[460px] bg-brand-500/12" aria-hidden="true" />
      <div ref={ref} className="reveal-scale relative mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="eyebrow">Beyond the Resume</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Engineering <span className="text-gradient">Beyond the Resume</span>
          </h2>
          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            How I sharpen my craft outside the day job — open-source tooling, deep dives, cloud
            practice and continuous learning. Explore the work on GitHub.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {ENGINEERING_ITEMS.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div key={item.title} className={`reveal-scale reveal-delay-${(i % 4) + 1}`}>
                <SpotlightCard className="h-full">
                  <article className="group glass relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.05] sm:p-7">
                    <div
                      className="pointer-events-none absolute -right-12 -bottom-12 h-36 w-36 rounded-full bg-accent-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                    <div className="relative flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300 ring-1 ring-inset ring-white/10">
                        <Icon size={18} />
                      </span>
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="relative mt-4 text-sm leading-relaxed text-slate-400">
                      {item.body}
                    </p>
                    <div className="relative mt-5 flex flex-wrap gap-2">
                      {item.tags.map((t) => (
                        <span key={t} className="chip text-[11px]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </article>
                </SpotlightCard>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Explore on GitHub <ArrowUpRight size={16} />
          </a>
          <a
            href={PROFILE.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Visit portfolio <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
