import { useState } from 'react';
import { Mail, Linkedin, Github, Globe, Send, CheckCircle2, MapPin } from 'lucide-react';
import { useReveal } from '@/hooks';
import { PROFILE } from '@/content';
import SpotlightCard from './SpotlightCard';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const ref = useReveal<HTMLDivElement>('reveal-scale');
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    const href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    window.location.href = href;
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 600);
  };

  const links = [
    { icon: Mail, label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'ranjith-subramanian', href: PROFILE.linkedin },
    { icon: Github, label: 'GitHub', value: 'ranjith-subramanian', href: PROFILE.github },
    { icon: Globe, label: 'Portfolio', value: 'ranjith-subramanian.dev', href: PROFILE.portfolio },
  ];

  return (
    <section id="contact" className="relative section-pad py-24 sm:py-28 lg:py-32">
      <div className="aurora left-[50%] top-[80%] h-[500px] w-[500px] bg-brand-500/12" aria-hidden="true" />
      <div ref={ref} className="reveal-scale relative mx-auto max-w-6xl">
        <SpotlightCard>
          <div className="glass-strong overflow-hidden rounded-3xl">
            <div className="grid lg:grid-cols-[1fr_1.1fr]">
              {/* Left: info */}
              <div className="relative border-b border-white/10 p-8 sm:p-10 lg:border-b-0 lg:border-r">
                <div
                  className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-brand-500/10 blur-3xl"
                  aria-hidden="true"
                />
                <p className="eyebrow relative">Contact</p>
                <h2 className="relative mt-4 text-3xl font-bold text-white sm:text-4xl">
                  Let's build <span className="text-gradient">something great.</span>
                </h2>
                <p className="relative mt-4 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
                  Open to backend engineering opportunities, collaboration on Java/Spring Boot
                  systems, and interesting production challenges. Drop a message — I respond
                  promptly.
                </p>

                <div className="relative mt-8 space-y-3">
                  {links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target={l.href.startsWith('http') ? '_blank' : undefined}
                      rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-3.5 transition-all duration-300 hover:border-brand-400/30 hover:bg-white/[0.05]"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-300 transition-colors group-hover:bg-brand-500/20">
                        <l.icon size={18} />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-xs uppercase tracking-wider text-slate-500">
                          {l.label}
                        </span>
                        <span className="text-sm font-medium text-slate-200">{l.value}</span>
                      </span>
                    </a>
                  ))}
                </div>

                <div className="relative mt-6 flex items-center gap-2 text-xs text-slate-500">
                  <MapPin size={14} /> India · Available remotely
                </div>
              </div>

              {/* Right: form */}
              <div className="p-8 sm:p-10">
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-300">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 transition-colors focus:border-brand-400/50 focus:bg-white/[0.05] focus:outline-none focus:ring-1 focus:ring-brand-400/40"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-300">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 transition-colors focus:border-brand-400/50 focus:bg-white/[0.05] focus:outline-none focus:ring-1 focus:ring-brand-400/40"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      placeholder="Tell me about the role or project…"
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 transition-colors focus:border-brand-400/50 focus:bg-white/[0.05] focus:outline-none focus:ring-1 focus:ring-brand-400/40"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full disabled:opacity-70"
                  >
                    {status === 'sending' ? 'Opening mail…' : 'Send message'}
                    <Send size={16} />
                  </button>

                  {status === 'success' && (
                    <p className="flex items-center gap-2 rounded-xl border border-brand-400/30 bg-brand-500/10 px-4 py-3 text-sm text-brand-200">
                      <CheckCircle2 size={16} /> Your mail client should now be open. Thanks for
                      reaching out!
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
