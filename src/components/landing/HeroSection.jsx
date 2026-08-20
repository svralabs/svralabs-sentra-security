import React from 'react';

export default function HeroSection() {
  const t = (key) => {
    const translations = {
      'landing.hero.feature1': 'Real-time Threat Detection',
      'landing.hero.feature2': '24/7 Monitoring',
      'landing.hero.feature3': 'Enterprise Security',
      'landing.hero.feature4': 'Centralized Hub',
      'landing.hero.stat1': 'Active Users',
      'landing.hero.stat2': 'Uptime',
      'landing.hero.title': 'Next-Gen Security Platform',
      'landing.hero.description': 'Protect your digital assets with AI-powered threat intelligence and automated response.',
      'landing.hero.ctaPrimary': 'Get Started',
      'landing.hero.ctaSecondary': 'Learn More'
    };
    return translations[key] || key;
  };

  const features = [
    { icon: 'speed', text: t('landing.hero.feature1') },
    { icon: 'monitoring', text: t('landing.hero.feature2') },
    { icon: 'security', text: t('landing.hero.feature3') },
    { icon: 'hub', text: t('landing.hero.feature4') },
  ];

  const stats = [
    { value: '46k+', label: t('landing.hero.stat1') },
    { value: '99.99%', label: t('landing.hero.stat2') },
  ];

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-32 pb-20">
      <div className="flex flex-wrap gap-3 mb-16 animate-on-scroll" style={{ transitionDelay: '100ms' }}>
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/5">
            <span className="material-symbols-outlined text-[18px] text-neutral-400">{feature.icon}</span>
            <span className="font-label-mono text-caption uppercase tracking-wider text-neutral-300">{feature.text}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-8 text-primary max-w-xl">
            {t('landing.hero.title')}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg">
            {t('landing.hero.description')}
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <div className="btn-wrapper">
              <button className="gradient-button px-8 py-4 rounded-full font-bold text-body-md">
                {t('landing.hero.ctaPrimary')}
              </button>
            </div>
            <button className="px-8 py-4 rounded-full border border-white/10 font-bold text-body-md hover:bg-white/5 transition-all">
              {t('landing.hero.ctaSecondary')}
            </button>
          </div>
          <div className="flex items-center gap-8 border-t border-white/10 pt-8">
            {stats.map((stat, index) => (
              <React.Fragment key={index}>
                <div>
                  <div className="font-headline-md text-headline-md text-primary font-bold">{stat.value}</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">{stat.label}</div>
                </div>
                {index < stats.length - 1 && <div className="w-px h-10 bg-white/10" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
