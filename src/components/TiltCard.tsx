import { useRef, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  max?: number;
};

export default function TiltCard({ children, className = '', max = 8 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const raf = useRef<number>(0);

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `rotateY(${px * max}deg) rotateX(${-py * max}deg) translateZ(0)`;
      el.style.setProperty('--mx', String((e.clientX - r.left) / r.width));
      el.style.setProperty('--my', String((e.clientY - r.top) / r.height));
    });
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    if (raf.current) cancelAnimationFrame(raf.current);
    el.style.transform = 'rotateY(0) rotateX(0) translateZ(0)';
  };

  return (
    <div className="perspective">
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className={`spotlight relative transition-transform duration-200 ease-out [transform-style:preserve-3d] ${className}`}
        style={{ willChange: 'transform' }}
      >
        {children}
      </div>
    </div>
  );
}
