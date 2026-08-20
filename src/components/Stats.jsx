import { useEffect, useRef } from 'react';

export default function Stats({ stats }) {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={statsRef} className="flex items-center gap-8 border-t border-white/10 pt-8 opacity-0">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center gap-8">
          <div>
            <div className="font-headline-md text-headline-md text-primary font-bold">{stat.value}</div>
            <div className="font-label-mono text-caption text-neutral-500 uppercase tracking-widest">{stat.label}</div>
          </div>
          {index < stats.length - 1 && <div className="h-10 w-px bg-white/10" />}
        </div>
      ))}
    </div>
  );
}
