import React from 'react';

export default function CTA() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">
      <div className="glass-card rounded-card p-12 text-center animate-on-scroll" style={{ transitionDelay: '600ms' }}>
        <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Secure Your Space</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
          Advanced security solutions tailored for your home and business. Stay protected 24/7 with Sentra.
        </p>
        <button className="gradient-button px-8 py-4 rounded-full font-bold text-body-md">
          Get Started
        </button>
      </div>
    </section>
  );
}
