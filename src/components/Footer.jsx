import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-surface-container py-12 px-gutter border-t border-outline-variant/10">
      <div className="max-w-[container-max] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-headline-sm text-headline-sm mb-6 text-primary">Core OS</h3>
          <p className="text-on-surface-variant mb-4">The foundational design system for SVRALABS security applications.</p>
          <p className="text-xs text-on-surface-variant/60 font-mono">v2.4.0-stable</p>
        </div>
        <div>
          <h4 className="font-headline-xs text-headline-xs mb-6 text-on-surface">Resources</h4>
          <ul className="space-y-3">
            <li><a className="text-on-surface-variant hover:text-primary transition-all" href="#">Documentation</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-all" href="#">API Reference</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-all" href="#">Changelog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline-xs text-headline-xs mb-6 text-on-surface">Community</h4>
          <ul className="space-y-3">
            <li><a className="text-on-surface-variant hover:text-primary transition-all" href="#">GitHub</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-all" href="#">Globe</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-all" href="#">Globe</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline-xs text-headline-xs mb-6 text-on-surface">Legal</h4>
          <ul className="space-y-3">
            <li><a className="text-on-surface-variant hover:text-primary transition-all" href="#">Privacy</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-all" href="#">Terms</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-all" href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center">
        <p className="text-xs text-on-surface-variant/60 mb-4 md:mb-0">© 2023 SVRALABS. All rights reserved.</p>
        <div className="flex gap-6">
          <a className="text-on-surface-variant hover:text-primary transition-all" href="#">Status</a>
          <a className="text-on-surface-variant hover:text-primary transition-all" href="#">Security</a>
          <a className="text-on-surface-variant hover:text-primary transition-all" href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
