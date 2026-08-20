import { useEffect, useRef } from 'react';

export default function Testimonials({ testimonials }) {
  const testimonialsRef = useRef(null);

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

    if (testimonialsRef.current) {
      const cards = testimonialsRef.current.querySelectorAll('.testimonial-card');
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mt-section-gap">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="testimonial-card glass-card p-8 rounded-card border-white/5 opacity-0"
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-primary">{testimonial.name}</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{testimonial.position}</p>
            </div>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant italic mb-6">"{testimonial.quote}"</p>
          <div className="flex items-center gap-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <span key={i} className="material-symbols-outlined text-yellow-500">star</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
