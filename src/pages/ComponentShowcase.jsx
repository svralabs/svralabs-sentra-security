import { useState } from 'react';

export default function ComponentShowcase() {
  const [count, setCount] = useState(0);

  const buttons = [
    {
      title: 'Gradient Button',
      description: 'Inner glow + Rotating Conic Wrapper',
      version: 'V1.0',
      implementation: 'Uses a <code class="text-primary-fixed">conic-gradient</code> within an overflow-hidden wrapper to create a "scanning" light effect. The button itself sits on top with a solid background, creating a high-contrast rim light.'
    },
    {
      title: 'Animated Border',
      description: 'Mask-image dot-and-line frame',
      version: 'V1.2',
      implementation: 'Creates a dynamic border using CSS mask-image with a repeating dot pattern and animated line segments. The effect is achieved through SVG filters and CSS animations.'
    },
    {
      title: 'Click Counter',
      description: 'Interactive demo button',
      version: 'V1.0',
      implementation: 'Simple counter that increments with each button click. Demonstrates basic React state management.'
    }
  ];

  return (
    <div className="flex min-h-screen bg-surface">
      {/* SideNavBar */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-surface-dim border-r border-outline-variant/10 flex flex-col py-8 z-[100]">
        <div className="px-6 mb-12">
          <h1 className="font-headline-sm text-2xl font-bold tracking-tighter text-primary">Core OS</h1>
          <p className="text-on-surface-variant text-xs opacity-60">v2.4.0-stable</p>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-medium hover:bg-white/5 hover:text-primary transition-colors duration-200 rounded-lg" href="#">
            <span className="material-symbols-outlined text-[20px]">dashboard</span>
            <span className="font-body-md">Overview</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-medium hover:bg-white/5 hover:text-primary transition-colors duration-200 rounded-lg" href="#">
            <span className="material-symbols-outlined text-[20px]">architecture</span>
            <span className="font-body-md">Foundations</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-medium hover:bg-white/5 hover:text-primary transition-colors duration-200 rounded-lg" href="#">
            <span className="material-symbols-outlined text-[20px]">format_size</span>
            <span className="font-body-md">Typography</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-medium hover:bg-white/5 hover:text-primary transition-colors duration-200 rounded-lg" href="#">
            <span className="material-symbols-outlined text-[20px]">palette</span>
            <span className="font-body-md">Colors</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-primary font-bold border-r-2 border-primary bg-white/5 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined text-[20px]">extension</span>
            <span className="font-body-md">Components</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-medium hover:bg-white/5 hover:text-primary transition-colors duration-200 rounded-lg" href="#">
            <span className="material-symbols-outlined text-[20px]">code</span>
            <span className="font-body-md">API Reference</span>
          </a>
        </nav>
        <div className="px-4 mt-auto pt-8 space-y-1">
          <button className="w-full bg-primary text-on-primary py-3 rounded-lg font-bold text-sm mb-4">View GitHub</button>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-medium hover:bg-white/5 hover:text-primary transition-colors duration-200 rounded-lg" href="#">
            <span className="material-symbols-outlined text-[20px]">settings</span>
            <span className="font-body-md">Settings</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-medium hover:bg-white/5 hover:text-primary transition-colors duration-200 rounded-lg" href="#">
            <span className="material-symbols-outlined text-[20px]">menu_book</span>
            <span className="font-body-md">Documentation</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen relative pb-32">
        {/* TopAppBar */}
        <header className="h-16 fixed top-0 right-0 w-[calc(100%-16rem)] z-50 bg-surface-dim/80 backdrop-blur-lg border-b border-outline-variant/10 flex justify-between items-center px-10">
          <div className="font-label-mono text-sm tracking-widest text-on-surface-variant">DESIGN SYSTEM / COMPONENTS / BUTTONS</div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-on-surface-variant">
              <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-all">dark_mode</span>
              <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-all">notifications</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-surface-container-high border border-white/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-xs">person</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-[1280px] mx-auto pt-32 px-10">
          {/* Header Section */}
          <section className="mb-24">
            <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="font-label-mono text-[12px] text-on-surface-variant uppercase tracking-tighter">Sentra UI Component Lab</span>
            </div>
            <h2 className="font-display-lg text-7xl text-primary mb-8 tracking-tighter max-w-4xl">Technical Precision Components.</h2>
            <p className="font-body-lg text-on-surface-variant max-w-2xl">A showcase of specialized interactive elements designed for high-end security interfaces. These components utilize advanced CSS masking, conic gradients, and backdrop-filter layering.</p>
          </section>

          {/* Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {buttons.map((button, index) => (
              <div key={index} className="glass-card rounded-[32px] p-10 flex flex-col gap-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-headline-md text-primary mb-2">{button.title}</h3>
                    <p className="font-body-md text-on-surface-variant text-sm">{button.description}</p>
                  </div>
                  <div className="px-2 py-1 rounded bg-white/5 border border-white/10 font-label-mono text-[10px]">{button.version}</div>
                </div>
                <div className="flex-1 flex items-center justify-center bg-black/40 rounded-2xl py-20 border border-white/5 relative group overflow-hidden">
                  {index === 0 && (
                    <div className="gradient-btn-wrapper p-[1.5px] rounded-full">
                      <div className="gradient-btn-glow"></div>
                      <button className="relative bg-black rounded-full px-8 py-3 font-bold text-white flex items-center gap-2 group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                        Start Free
                      </button>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="animated-border-btn w-48 group">
                      <div className="border-line"></div>
                      <div className="relative z-10 bg-[#0d0d0d] px-6 py-3 text-center flex items-center justify-center gap-3 cursor-pointer">
                        <span className="material-symbols-outlined text-sm">play_arrow</span>
                        Run the Demo
                      </div>
                    </div>
                  )}
                  {index === 2 && (
                    <button
                      onClick={() => setCount(count + 1)}
                      className="bg-primary text-on-primary px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-primary/90 transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">add</span>
                      Click Me
                    </button>
                  )}
                </div>
                <div className="space-y-4">
                  <div className="text-xs font-label-mono text-on-surface-variant flex items-center gap-2 uppercase">
                    <span className="material-symbols-outlined text-sm">code</span>
                    Implementation Logic
                  </div>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed" dangerouslySetInnerHTML={{ __html: button.implementation }}></p>
                </div>
              </div>
            ))}
          </div>

          {/* Counter Display */}
          <div className="mt-12 p-6 bg-surface-container rounded-lg">
            <h3 className="font-headline-sm text-primary mb-2">Click Counter</h3>
            <p className="font-body-md text-on-surface-variant">Button clicks: <span className="font-bold text-primary">{count}</span></p>
          </div>
        </div>
      </main>
    </div>
  );
}
