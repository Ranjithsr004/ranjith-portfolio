import { useEffect, useRef, useState } from 'react';
import { Briefcase, Building2, User, Circle } from 'lucide-react';
import { useReveal } from '@/hooks';
import { EXPERIENCE } from '@/content';
import SpotlightCard from './SpotlightCard';

export default function Experience() {
  const ref = useReveal<HTMLDivElement>();
  const lineRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = lineRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.75;
      const end = vh * 0.25;
      const p = (start - r.top) / (start - end + r.height);
      setProgress(Math.max(0, Math.min(1, p)));
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="experience" className="relative section-pad py-24 sm:py-28 lg:py-32">
      <div className="aurora left-[85%] top-[20%] h-[400px] w-[400px] bg-accent-500/10" aria-hidden="true" />
      <div ref={ref} className="reveal relative mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="eyebrow">Experience</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            A track record in <span className="text-gradient">production</span>
          </h2>
        </div>

        <div className="relative mt-12 pl-8 sm:pl-0">
          {/* Track */}
          <div
            className="absolute left-2.5 top-2 h-full w-px bg-white/8 sm:left-1/2 sm:-translate-x-1/2"
            aria-hidden="true"
          />
          {/* Animated progress fill */}
          <div
            ref={lineRef}
            className="absolute left-2.5 top-2 w-px bg-gradient-to-b from-brand-400 via-brand-400 to-accent-400 sm:left-1/2 sm:-translate-x-1/2"
            style={{ height: `${progress * 100}%`, boxShadow: '0 0 16px rgba(43,203,191,0.5)' }}
            aria-hidden="true"
          />

          {EXPERIENCE.map((job, idx) => (
            <article
              key={idx}
              className="relative mb-10 last:mb-0 sm:grid sm:grid-cols-2 sm:gap-10"
            >
              {/* node */}
              <div className="absolute left-0 top-1.5 sm:left-1/2 sm:-translate-x-1/2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-brand-400/40 bg-ink-950">
                  <span className="h-2 w-2 rounded-full bg-brand-400 shadow-[0_0_12px_rgba(43,203,191,0.8)]" />
                </span>
              </div>

              <div className="hidden sm:block" />

              <div className="sm:pl-2">
                <SpotlightCard>
                  <div className="glass group h-full rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.05] sm:p-7">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-500/15 px-3 py-1 text-xs font-semibold text-brand-300">
                        <Circle size={7} className="fill-brand-300" /> {job.period}
                      </span>
                      {job.current && (
                        <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-slate-300">
                          Current role
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">{job.role}</h3>

                    <div className="mt-2 flex flex-col gap-1.5 text-sm text-slate-400">
                      <span className="inline-flex items-center gap-2">
                        <Building2 size={15} className="text-brand-300" />
                        <span className="text-slate-200">{job.company}</span>
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <User size={15} className="text-accent-400" />
                        {job.client}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-slate-400">{job.summary}</p>

                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {job.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2.5 text-sm text-slate-300"
                        >
                          <Briefcase size={14} className="mt-0.5 shrink-0 text-brand-400/80" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
