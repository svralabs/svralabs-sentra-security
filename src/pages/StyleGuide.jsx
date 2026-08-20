import React from 'react';

const navItems = [
  { icon: 'dashboard', label: 'Overview', href: '#overview' },
  { icon: 'architecture', label: 'Foundations', href: '#foundations' },
  { icon: 'format_size', label: 'Typography', href: '#typography' },
  { icon: 'palette', label: 'Colors', href: '#colors' },
  { icon: 'extension', label: 'Components', href: '#components' },
  { icon: 'code', label: 'API Reference', href: '#api' },
];

const topNavItems = ['Guides', 'Resources', 'Changelog'];

const foundationCards = [
  {
    icon: 'security',
    title: 'Stealth Aesthetic',
    description: 'Deep blacks and technical neutrals create a non-distractive environment optimized for long-duration monitoring.'
  },
  {
    icon: 'precision_manufacturing',
    title: 'Industrial Precision',
    description: 'Strict alignment and rhythmic spacing units ensure data density without compromising structural clarity.'
  },
  {
    icon: 'layers',
    title: 'Tonal Layering',
    description: 'Depth is established through backdrop filters and semi-transparent layers rather than heavy shadows.'
  }
];

export default function StyleGuide() {
  return (
    <div className="flex h-screen bg-surface">
      {/* SideNavBar */}
      <nav className="bg-surface-dim dark:bg-surface-dim h-screen w-64 fixed left-0 top-0 border-r border-outline-variant/10 flex flex-col h-full py-6 z-50">
        <div className="px-6 mb-10">
          <h1 className="font-headline-sm text-headline-sm font-bold tracking-tighter text-primary">Core OS</h1>
          <p className="text-xs text-on-surface-variant/60 font-mono">v2.4.0-stable</p>
        </div>
        <div className="flex-1 space-y-1 px-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              className="flex items-center gap-3 px-3 py-2 text-on-surface-variant font-medium hover:bg-white/5 hover:text-primary transition-colors rounded duration-200 ease-in-out group"
              href={item.href}
            >
              <span className="material-symbols-outlined text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
        <div className="px-4 mt-auto pt-6 border-t border-outline-variant/10">
          <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant font-medium hover:bg-white/5 hover:text-primary transition-colors rounded" href="#">
            <span className="material-symbols-outlined text-lg">settings</span>
            <span>Settings</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant font-medium hover:bg-white/5 hover:text-primary transition-colors rounded" href="#">
            <span className="material-symbols-outlined text-lg">menu_book</span>
            <span>Documentation</span>
          </a>
          <button className="mt-4 w-full bg-primary text-on-primary py-2 px-4 rounded font-bold text-sm tracking-tight hover:opacity-90 transition-opacity">
            View GitHub
          </button>
        </div>
      </nav>

      {/* TopAppBar */}
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] z-40 bg-surface-dim/80 backdrop-blur-lg border-b border-outline-variant/10 flex justify-between items-center px-gutter h-16">
        <div className="flex items-center gap-8">
          <span className="font-headline-sm text-headline-sm font-bold text-primary">Design System</span>
          <nav className="hidden md:flex gap-6">
            {topNavItems.map((item) => (
              <a
                key={item}
                className="text-on-surface-variant hover:text-primary transition-all font-label-mono text-label-mono"
                href="#"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative hidden sm:block">
            <input
              className="bg-surface-container-lowest border-outline-variant/20 rounded-lg pl-10 pr-4 py-1.5 text-sm w-64 focus:ring-1 focus:ring-primary focus:border-primary transition-all"
              placeholder="Search Docs..."
              type="text"
            />
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined cursor-pointer text-on-surface-variant hover:text-primary transition-all active:opacity-80">dark_mode</span>
            <span className="material-symbols-outlined cursor-pointer text-on-surface-variant hover:text-primary transition-all active:opacity-80">notifications</span>
            <img
              className="w-8 h-8 rounded-full border border-white/10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhYfDRJXhlfBjB5Z5-RVWVzYF6FUAcx041SFLIUpSlcvDXfnUEVMVhOanIwjae_VacAWRm1SQXXYkX86eFxCl53t86eUMLjwenHDg9MaA1QGuRF2BSdYV_s5CUPexqeeTAfnrm8pEKgS1217ToPevFUtbqcQLZlyWbGY6xSvK3BXppSnBUWZcRdhL8h-XJrSvQdAIBLmHUjQE90RxzyqtbMV4lZ1lSx-31Ucme1SCG4F2NTk6Q2YFS"
              alt="User avatar"
            />
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-64 pt-16 min-h-screen">
        <div className="max-w-[container-max] mx-auto px-margin-desktop py-20">
          {/* Hero Section */}
          <section className="fade-in-section mb-section-gap" id="overview"></section>

          {/* Foundations */}
          <section className="fade-in-section mb-section-gap" id="foundations">
            <div className="flex items-baseline gap-4 mb-12">
              <span className="font-label-mono text-primary/30">01</span>
              <h3 className="font-headline-md text-headline-md">Foundations</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {foundationCards.map((card) => (
                <div
                  key={card.title}
                  className="p-8 rounded-[32px] bg-surface-container border border-white/10 rim-light hover:border-white/20 transition-all group"
                >
                  <span className="material-symbols-outlined text-4xl mb-6 text-primary group-hover:scale-110 transition-transform duration-300">{card.icon}</span>
                  <h4 className="font-headline-sm text-headline-sm mb-4">{card.title}</h4>
                  <p className="text-on-surface-variant">{card.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
