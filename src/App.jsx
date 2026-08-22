import React, { useEffect, useRef } from 'react'

const HERO_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB9SS-TzdVR8Va77IQ_VNetHvdyEukA1dn5j9oBonSnjbGYp6P35JuNJyTyY7TKLFt9uLgwpv17Jehp_u8qtign3J1WJIXI_nCcn0ApXjEzdzxYHiEtKIim8bxozlNMuAiJl8oyLD7NeepsMqY7uJVHoetemjb7-fqENehv3ZEYc6poCPUuuScbWTxo08VqYaU9yGebFyqI2blHNplo3si9IwWlmqytVt8-eNW1Q06EfXlfgcB5JXOp'

const MESH_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAfr7Q67yoZ9q2H73YODpHwbTh0i_plTR9dQLu_LIIe7psiPMF0Uf2Du1gIckgn6DeLBMQ6zDT_jwRSfcoPtwMutDNi-_h_dpvuE9V5ntepDIzz_zzFo9MCNP__lDt0CPWEYpHOfStAGl0wqFv4SynvwFBSj1lXguFrdiQPcPNgwJKheqJRCO606O4Y5cX2JytixjeScvKnRV1DLBCPaWFted_nS8JXEFBphT9-q_OgG_DxHrvaAAgd'

const FORENSICS_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD8BXy-IziKDjXA_AjcHEA__vCpAPnB-uP8_Ul9N_feRi0hzu0og5E6aNYqFr3F_UBAbwhHpoD9DWs9mRu6EGDoVRC1zZnnxkTlAkqiz04OBuLotbjRK2CZ_u-yjuj003cdF8tnqJypWmSIoIjULMC8DlLXRyCUV5SXjVfTMWPhTDGime1VOBHdD6CFc3htA_dYaV0AR81zoSyJV1zx91wZkrxdA_IeSmz_o9ZxHXyYUtsUGG9oL0rH'

const CHIPS = [
  { icon: 'speed', label: 'Setup in minutes' },
  { icon: 'monitoring', label: 'Track anomalies' },
  { icon: 'security', label: 'Zero Trust Access' },
  { icon: 'hub', label: 'Global Mesh' },
]

const NAV_LINKS = ['Platform', 'Solutions', 'Network', 'Documentation']
const FOOTER_LINKS = ['Privacy Policy', 'Terms of Service', 'Security Architecture', 'Status']

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    const root = ref.current
    if (root) root.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return ref
}

export default function App() {
  const rootRef = useReveal()

  return (
    <div ref={rootRef} className="bg-background selection:bg-primary/20 min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 bg-background/70 backdrop-blur-lg border-b border-white/10">
        <div className="flex items-center gap-8">
          <span className="font-headline-sm text-headline-sm tracking-tighter font-bold text-primary">
            SENTRA
          </span>
          <div className="hidden md:flex items-center gap-6">
            <a className="font-body-md text-body-md text-primary font-bold border-b-2 border-primary pb-1" href="#">
              Platform
            </a>
            {NAV_LINKS.slice(1).map((link) => (
              <a
                key={link}
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                href="#"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-on-surface-variant hover:text-primary font-body-md text-body-md transition-colors px-4 py-2">
            Sign In
          </button>
          <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-body-md text-body-md font-bold hover:bg-opacity-90 transition-all active:scale-95 duration-200">
            Deploy Now
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          {/* 1. Top Chips Row */}
          <div className="flex flex-wrap gap-3 mb-16 animate-on-scroll" style={{ transitionDelay: '100ms' }}>
            {CHIPS.map((chip) => (
              <div key={chip.label} className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/5">
                <span className="material-symbols-outlined text-[18px] text-neutral-400">{chip.icon}</span>
                <span className="font-label-mono text-caption uppercase tracking-wider text-neutral-300">
                  {chip.label}
                </span>
              </div>
            ))}
          </div>

          {/* 2. Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-8 text-primary max-w-xl">
                Security, Reinvented.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg">
                Deploy the world's most advanced identity-aware perimeter in seconds. Secure your cloud
                infrastructure with industrial-grade precision and a stealth-mode aesthetic.
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
                <div>
                  <div className="font-headline-md text-headline-md text-primary font-bold">46k+</div>
                  <div className="font-label-mono text-caption text-neutral-500 uppercase tracking-widest">
                    Developers
                  </div>
                </div>
                <div className="h-10 w-px bg-white/10" />
                <div>
                  <div className="font-headline-md text-headline-md text-primary font-bold">99.99%</div>
                  <div className="font-label-mono text-caption text-neutral-500 uppercase tracking-widest">
                    Uptime
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-on-scroll" style={{ transitionDelay: '400ms' }}>
              <div className="aspect-square rounded-card overflow-hidden border-gradient relative">
                <img
                  className="w-full h-full object-cover grayscale brightness-110"
                  src={HERO_IMG}
                  alt="A futuristic, high-end abstract 3D render of a crystalline security node glowing with white inner light against a deep obsidian void background."
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                {/* Floating Tech Label */}
                <div className="absolute bottom-6 left-6 glass-card px-4 py-2 rounded-lg border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="technical-dot animate-pulse" />
                    <span className="font-label-mono text-caption text-primary tracking-widest">
                      SYSTEM_ACTIVE: NODE_01
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Lower Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mt-section-gap">
            <div
              className="group relative aspect-[16/9] md:aspect-auto md:h-[400px] rounded-card overflow-hidden border-gradient animate-on-scroll"
              style={{ transitionDelay: '500ms' }}
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${MESH_IMG}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-10">
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Unified Mesh Network</h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
                  Connect any device, anywhere, to your secure backbone with zero latency and absolute
                  encryption.
                </p>
              </div>
            </div>
            <div
              className="group relative aspect-[16/9] md:aspect-auto md:h-[400px] rounded-card overflow-hidden border-gradient animate-on-scroll"
              style={{ transitionDelay: '600ms' }}
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${FORENSICS_IMG}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-10">
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Real-time Forensics</h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
                  Instant visibility into every packet and permission. Resolve threats before they become
                  incidents.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-gutter px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center mt-section-gap border-t border-white/10 bg-surface">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-6 md:mb-0">
          <span className="font-headline-sm text-headline-sm text-primary font-bold">SENTRA</span>
          <span className="font-caption text-caption text-on-surface-variant">
            © 2024 Sentra Security. All rights reserved.
          </span>
        </div>
        <div className="flex gap-6">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link}
              className="font-caption text-caption text-on-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              {link}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}
