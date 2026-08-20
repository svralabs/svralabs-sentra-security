import { motion } from 'framer-motion';

const HeroSection = ({ tagline, description, stats }) => {
  const handleClick = (buttonName) => {
    console.log(`Button clicked: ${buttonName}`);
  };

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="flex flex-wrap gap-3 mb-16 animate-on-scroll" style={{ transitionDelay: '100ms' }}>
        {[
          { icon: 'speed', text: 'Setup in minutes' },
          { icon: 'monitoring', text: 'Track anomalies' },
          { icon: 'security', text: 'Zero Trust Access' },
          { icon: 'hub', text: 'Global Mesh' }
        ].map((chip, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/5"
          >
            <span className="material-symbols-outlined text-[18px] text-neutral-400">{chip.icon}</span>
            <span className="font-label-mono text-caption uppercase tracking-wider text-neutral-300">{chip.text}</span>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="animate-on-scroll"
          style={{ transitionDelay: '200ms' }}
        >
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-8 text-primary max-w-xl">
            {tagline}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg">
            {description}
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <div className="btn-wrapper">
              <button
                onClick={() => handleClick('Start free')}
                className="gradient-button px-8 py-4 rounded-full font-bold text-body-md"
              >
                Start free
              </button>
            </div>
            <button
              onClick={() => handleClick('Run the demo')}
              className="px-8 py-4 rounded-full border border-white/10 font-bold text-body-md hover:bg-white/5 transition-all"
            >
              Run the demo
            </button>
          </div>

          <div className="flex items-center gap-8 border-t border-white/10 pt-8">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="font-headline-md text-headline-md text-primary font-bold">{stat.value}</div>
                <div className="font-label-mono text-caption text-neutral-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
            <div className="h-10 w-px bg-white/10"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative animate-on-scroll"
          style={{ transitionDelay: '400ms' }}
        >
          <div className="aspect-square rounded-card overflow-hidden border-gradient relative">
            <img
              className="w-full h-full object-cover grayscale brightness-110"
              alt="Futuristic security node"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9SS-TzdVR8Va77IQ_VNetHvdyEukA1dn5j9oBonSnjbGYp6P35JuNJyTyY7TKLFt9uLgwpv17Jehp_u8qtign3J1WJIXI_nCcn0ApXjEzdzxYHiEtKIim8bxozlNMuAiJl8oyLD7NeepsMqY7uJVHoetemjb7-fqENehv3ZEYc6poCPUuuScbWTxo08VqYaU9yGebFyqI2blHNplo3si9IwWlmqytVt8-eNW1Q06EfXlfgcB5JXOp"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-6 left-6 glass-card px-4 py-2 rounded-lg border-white/20">
              <div className="flex items-center gap-3">
                <div className="technical-dot animate-pulse"></div>
                <span className="font-label-mono text-caption text-primary tracking-widest">SYSTEM_ACTIVE: NODE_01</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
