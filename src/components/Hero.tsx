import { ArrowUpRight, Download, FolderGit2, Mail, Github, Linkedin, Terminal } from 'lucide-react';
import NetworkBackground from './NetworkBackground';
import { PROFILE } from '@/content';
import { useWordReveal } from '@/hooks';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const HEADLINE_WORDS = ['Ranjith', 'Subramanian'];

export default function Hero() {
  const headlineRef = useWordReveal<HTMLHeadingElement>(120);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      {/* aurora blobs */}
      <div className="aurora left-[55%] top-[5%] h-[420px] w-[420px] bg-brand-500/20" aria-hidden="true" />
      <div className="aurora left-[5%] top-[60%] h-[360px] w-[360px] bg-accent-500/15" aria-hidden="true" />
      <div className="absolute inset-0" aria-hidden="true">
        <NetworkBackground />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink-950 via-ink-950/80 to-transparent"
        aria-hidden="true"
      />

      <div className="section-pad relative z-10 w-full">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.9fr]">
          {/* Left: text */}
          <div className="flex flex-col items-start gap-6">
            <span className="animate-fade-in glass inline-flex items-center gap-2.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
              </span>
              Available for backend engineering roles
            </span>

            <h1
              ref={headlineRef}
              className="overflow-hidden text-5xl font-bold leading-[1.02] sm:text-7xl lg:text-[5.5rem]"
            >
              <span className="block overflow-hidden py-1">
                {HEADLINE_WORDS.map((w) => (
                  <span key={w} className="word-reveal mr-4 text-white">
                    {w}
                  </span>
                ))}
              </span>
              <span className="mt-1 block overflow-hidden py-1">
                <span className="word-reveal text-gradient">Subramanian</span>
              </span>
            </h1>

            <p className="animate-fade-up text-lg font-medium text-slate-300 sm:text-2xl" style={{ animationDelay: '0.5s' }}>
              Software Engineer <span className="text-slate-600">|</span>{' '}
              <span className="text-brand-300">Java Backend Developer</span>
            </p>

            <p
              className="animate-fade-up max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
              style={{ animationDelay: '0.62s' }}
            >
              {PROFILE.tagline}
            </p>

            <div className="animate-fade-up flex flex-wrap items-center gap-3 pt-2" style={{ animationDelay: '0.74s' }}>
              <button onClick={() => scrollTo('projects')} className="btn-primary">
                <FolderGit2 size={17} /> View My Work
              </button>
              <a href={PROFILE.resumePath} download className="btn-ghost">
                <Download size={17} /> Download Resume
              </a>
              <button onClick={() => scrollTo('contact')} className="btn-ghost">
                <Mail size={17} /> Contact Me
              </button>
            </div>

            <div className="animate-fade-up flex items-center gap-4 pt-4" style={{ animationDelay: '0.86s' }}>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="group flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
              >
                <Github size={18} className="transition-transform group-hover:-translate-y-0.5" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <span className="h-4 w-px bg-white/10" />
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="group flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
              >
                <Linkedin size={18} className="transition-transform group-hover:-translate-y-0.5" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <span className="h-4 w-px bg-white/10" />
              <a
                href={PROFILE.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-white"
              >
                Portfolio
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right: floating code terminal card */}
          <div className="animate-fade-up hidden lg:block" style={{ animationDelay: '0.6s' }}>
            <div className="animate-float grad-border relative overflow-hidden p-1 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
              <div className="rounded-[0.85rem] bg-ink-900/90 p-5 font-mono text-sm">
                <div className="flex items-center gap-2 border-b border-white/8 pb-3">
                  <span className="h-3 w-3 rounded-full bg-red-400/70" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/70" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
                  <span className="ml-2 flex items-center gap-1.5 text-xs text-slate-500">
                    <Terminal size={12} /> Engineer.java
                  </span>
                </div>
                <pre className="mt-4 leading-relaxed text-slate-400">
<span className="text-accent-400">public class</span> <span className="text-brand-300">Engineer</span> {'{'}
{'\n'}  <span className="text-accent-400">private final</span> String role = <span className="text-emerald-300">"Backend"</span>;
{'\n'}  <span className="text-accent-400">private final</span> List{'<'}String{'>'} stack;
{'\n'}
{'\n'}  <span className="text-accent-400">public</span> Engineer() {'{'}
{'\n'}    stack = List.of(
{'\n'}      <span className="text-emerald-300">"Java 17"</span>, <span className="text-emerald-300">"Spring Boot"</span>,
{'\n'}      <span className="text-emerald-300">"Microservices"</span>, <span className="text-emerald-300">"AWS"</span>
{'\n'}    );
{'\n'}  {'}'}
{'\n'}
{'\n'}  <span className="text-accent-400">void</span> ship() {'{'} deploy(); monitor(); {'}'}
{'\n'}{'}'}
                </pre>
                <div className="mt-4 flex items-center gap-2 border-t border-white/8 pt-3 text-xs text-slate-600">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-400" />
                  Building scalable backend systems
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo('about')}
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition-colors hover:text-slate-200 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 p-1">
          <span className="h-2 w-1 animate-float rounded-full bg-brand-400" />
        </span>
      </button>
    </section>
  );
}
