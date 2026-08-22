import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PROFILE, NAV_ITEMS } from '@/content';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/10 section-pad py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2.5 md:justify-start">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-accent-500 font-display text-sm font-bold text-ink-950">
                RS
              </span>
              <span className="font-display text-base font-semibold text-white">
                Ranjith Subramanian
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-slate-500">
              Software Engineer specializing in Java backend development, microservices and
              cloud-ready systems.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2" aria-label="Footer">
            {NAV_ITEMS.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="text-sm text-slate-400 transition-colors hover:text-brand-300"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-brand-400/40 hover:text-brand-300"
            >
              <Github size={17} />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-brand-400/40 hover:text-brand-300"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-brand-400/40 hover:text-brand-300"
            >
              <Mail size={17} />
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-brand-400/40 hover:text-brand-300"
            >
              <ArrowUp size={17} />
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-slate-600 sm:flex-row">
          <p>© {year} Ranjith Subramanian. All rights reserved.</p>
          <p>Designed & built with a production-first mindset.</p>
        </div>
      </div>
    </footer>
  );
}
