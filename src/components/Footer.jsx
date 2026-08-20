import { Link } from 'react-router-dom';
import { Globe, Globe, Globe, Globe } from 'lucide-react';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { name: 'Features', path: '/features' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'Documentation', path: '/documentation' },
      { name: 'Changelog', path: '/changelog' }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About', path: '/about' },
      { name: 'Blog', path: '/blog' },
      { name: 'Careers', path: '/careers' },
      { name: 'Press', path: '/press' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy', path: '/privacy' },
      { name: 'Terms', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookie-policy' }
    ]
  }
];

const socialLinks = [
  { icon: Globe, url: 'https://facebook.com' },
  { icon: Globe, url: 'https://twitter.com' },
  { icon: Globe, url: 'https://instagram.com' },
  { icon: Globe, url: 'https://linkedin.com' }
];

export default function Footer() {
  return (
    <footer className="bg-background/70 backdrop-blur-lg border-t border-white/10 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="font-headline-sm text-headline-sm tracking-tighter font-bold text-primary mb-4">SENTRA</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">Deploy the world's most advanced identity-aware perimeter in seconds.</p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          {footerLinks.map((section, index) => (
            <div key={index} className="md:col-span-1">
              <h4 className="font-headline-sm text-headline-sm font-bold text-primary mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="font-body-md text-body-md text-on-surface-variant">© {new Date().getFullYear()} SENTRA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
