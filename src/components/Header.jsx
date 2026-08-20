import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-16rem)] z-40 bg-surface-dim/80 backdrop-blur-lg border-b border-outline-variant/10 flex justify-between items-center px-gutter h-16">
      <div className="flex items-center gap-8">
        <span className="font-headline-sm text-headline-sm font-bold text-primary">Design System</span>
        <nav className="hidden md:flex gap-6">
          <a className="text-on-surface-variant hover:text-primary transition-all font-label-mono text-label-mono">Guides</a>
          <a className="text-on-surface-variant hover:text-primary transition-all font-label-mono text-label-mono">Resources</a>
          <a className="text-on-surface-variant hover:text-primary transition-all font-label-mono text-label-mono">Changelog</a>
        </nav>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative hidden sm:block">
          <input className="bg-surface-container-lowest border-outline-variant/20 rounded-lg pl-10 pr-4 py-1.5 text-sm w-64 focus:ring-1 focus:ring-primary focus:border-primary transition-all" placeholder="Search Docs..." type="text" />
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined cursor-pointer text-on-surface-variant hover:text-primary transition-all active:opacity-80">dark_mode</span>
          <span className="material-symbols-outlined cursor-pointer text-on-surface-variant hover:text-primary transition-all active:opacity-80">notifications</span>
          <img className="w-8 h-8 rounded-full border border-white/10" data-alt="A professional headshot of a software architect in a dark studio setting, dramatic high-contrast lighting, technical modern aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhYfDRJXhlfBjB5Z5-RVWVzYF6FUAcx041SFLIUpSlcvDXfnUEVMVhOanIwjae_VacAWRm1SQXXYkX86eFxCl53t86eUMLjwenHDg9MaA1QGuRF2BSdYV_s5CUPexqeeTAfnrm8pEKgS1217ToPevFUtbqcQLZlyWbGY6xSvK3BXppSnBUWZcRdhL8h-XJrSvQdAIBLmHUjQE90RxzyqtbMV4lZ1lSx-31Ucme1SCG4F2NTk6Q2YFS" alt="Profile" />
        </div>
      </div>
    </header>
  );
}
