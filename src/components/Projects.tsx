import { Github, ArrowUpRight, ExternalLink, FolderGit2 } from 'lucide-react';
import { useReveal } from '@/hooks';
import { PROJECTS } from '@/content';
import TiltCard from './TiltCard';

export default function Projects() {
  const ref = useReveal<HTMLDivElement>('reveal-scale');
  return (
    <section id="projects" className="relative section-pad py-24 sm:py-28 lg:py-32">
      <div className="aurora left-[15%] top-[10%] h-[420px] w-[420px] bg-brand-500/10" aria-hidden="true" />
      <div ref={ref} className="reveal-scale relative mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Projects</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Selected <span className="text-gradient">engineering work</span>
            </h2>
            <p className="mt-4 text-base text-slate-400 sm:text-lg">
              Backend systems, templates and tooling — built with Java, Spring Boot and a
              production-first mindset.
            </p>
          </div>
          <a
            href="https://github.com/ranjith-subramanian"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost shrink-0"
          >
            <FolderGit2 size={16} /> All repositories
            <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <div key={p.name} className={`reveal-scale reveal-delay-${(i % 4) + 1}`}>
              <TiltCard max={6} className="h-full">
                <div className="grad-border h-full overflow-hidden p-1">
                  <article className="group flex h-full flex-col rounded-[0.85rem] bg-ink-900/80 p-6 transition-colors duration-300 hover:bg-ink-850/90 sm:p-7">
                    <div
                      className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-brand-300 ring-1 ring-inset ring-white/10">
                        <FolderGit2 size={20} />
                      </div>
                      <div className="flex items-center gap-2">
                        {p.demo && (
                          <a
                            href={p.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Live demo for ${p.name}`}
                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-all hover:border-brand-400/40 hover:text-brand-300"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub repository for ${p.name}`}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-all hover:border-brand-400/40 hover:text-brand-300"
                        >
                          <Github size={16} />
                        </a>
                      </div>
                    </div>

                    <h3 className="relative mt-5 text-xl font-bold text-white transition-colors group-hover:text-brand-200">
                      {p.name}
                    </h3>
                    <p className="relative mt-2.5 flex-1 text-sm leading-relaxed text-slate-400">
                      {p.description}
                    </p>

                    <div className="relative mt-5 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="chip text-[11px]">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="relative mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                      {p.demo ? (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 transition-colors hover:text-brand-200"
                        >
                          Live Demo <ArrowUpRight size={14} />
                        </a>
                      ) : (
                        <span className="text-xs font-medium text-slate-600">No live demo</span>
                      )}
                      <span className="h-3.5 w-px bg-white/10" />
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-300 transition-colors hover:text-white"
                      >
                        <Github size={14} /> GitHub
                      </a>
                    </div>
                  </article>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
