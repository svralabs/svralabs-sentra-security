import React from 'react';

const LandingPage = () => {
  const features = [
    { icon: 'speed', text: 'Setup in minutes' },
    { icon: 'monitoring', text: 'Track anomalies' },
    { icon: 'security', text: 'Zero Trust Access' },
    { icon: 'hub', text: 'Global Mesh' }
  ];

  const stats = [
    { value: '46k+', label: 'Developers' },
    { value: '99.99%', label: 'Uptime' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* TopNavBar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 bg-background/70 backdrop-blur-lg border-b border-white/10 max-w-container-max mx-auto left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-8">
          <span className="font-headline-sm text-headline-sm tracking-tighter font-bold text-primary">SENTRA</span>
          <div className="hidden md:flex items-center gap-6">
            <a className="font-body-md text-body-md text-primary font-bold border-b-2 border-primary pb-1" href="#">Platform</a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Solutions</a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Network</a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Documentation</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-on-surface-variant hover:text-primary font-body-md text-body-md transition-colors px-4 py-2">Sign In</button>
          <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-body-md text-body-md font-bold hover:bg-opacity-90 transition-all active:scale-95 duration-200">Deploy Now</button>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        {/* Sentra Section Hero Area */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          {/* 1. Top Chips Row */}
          <div className="flex flex-wrap gap-3 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/5">
                <span className="material-symbols-outlined text-[18px] text-neutral-400">{feature.icon}</span>
                <span className="font-label-mono text-caption uppercase tracking-wider text-neutral-300">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* 2. Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-8 text-primary max-w-xl">
                Security, Reinvented.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg">
                Deploy the world's most advanced identity-aware perimeter in seconds. Secure your cloud infrastructure with industrial-grade precision and a stealth-mode aesthetic.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <div className="btn-wrapper">
                  <button className="gradient-button px-8 py-4 rounded-full font-bold text-body-md">
                    Start free
                  </button>
                </div>
                <button className="px-8 py-4 rounded-full border border-white/10 font-bold text-body-md hover:bg-white/5 transition-all">
                  Run the demo
                </button>
              </div>

              {/* Stats Row */}
              <div className="flex items-center gap-8 border-t border-white/10 pt-8">
                {stats.map((stat, index) => (
                  <React.Fragment key={index}>
                    <div>
                      <div className="font-headline-md text-headline-md text-primary font-bold">{stat.value}</div>
                      <div className="font-label-mono text-caption text-neutral-500 uppercase tracking-widest">{stat.label}</div>
                    </div>
                    {index < stats.length - 1 && <div className="h-10 w-px bg-white/10"></div>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-card overflow-hidden border-gradient relative">
                <img className="w-full h-full object-cover grayscale brightness-110" alt="A futuristic, high-end abstract 3D render of a crystalline security node glowing with white inner light against a deep obsidian void background." src="/images/security-node.jpg" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                {/* Floating Tech Label */}
                <div className="absolute bottom-6 left-6 glass-card px-4 py-2 rounded-lg border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="technical-dot animate-pulse"></div>
                    <span className="font-label-mono text-caption text-primary tracking-widest">SYSTEM_ACTIVE: NODE_01</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
