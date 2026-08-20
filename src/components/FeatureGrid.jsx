import { useEffect, useRef } from 'react';

export default function FeatureGrid({ features }) {
  const gridRef = useRef(null);

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

    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.feature-card');
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-gutter mt-section-gap">
      {features.map((feature, index) => (
        <div
          key={index}
          className="feature-card group relative aspect-[16/9] md:aspect-auto md:h-[400px] rounded-card overflow-hidden border-gradient opacity-0"
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${feature.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
          <div className="absolute bottom-0 left-0 p-10">
            <h3 className="font-headline-md text-headline-md text-primary mb-4">{feature.title}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
