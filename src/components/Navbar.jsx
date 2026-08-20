import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Platform', path: '/platform' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Network', path: '/network' },
  { name: 'Documentation', path: '/documentation' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-8 py-4 bg-background/70 backdrop-blur-lg border-b border-white/10 max-w-7xl mx-auto left-1/2 -translate-x-1/2 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="flex items-center gap-8">
        <Link to="/" className="font-headline-sm text-headline-sm tracking-tighter font-bold text-primary">SENTRA</Link>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-body-md text-body-md ${location.pathname === item.path ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'} transition-colors`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="hidden sm:block text-on-surface-variant hover:text-primary font-body-md text-body-md transition-colors px-4 py-2">Sign In</button>
        <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-body-md text-body-md font-bold hover:bg-opacity-90 transition-all active:scale-95 duration-200">Deploy Now</button>
        <button
          className="md:hidden text-on-surface-variant"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg border-b border-white/10 md:hidden">
          <div className="flex flex-col items-center gap-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-body-md text-body-md ${location.pathname === item.path ? 'text-primary' : 'text-on-surface-variant'} transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="text-on-surface-variant hover:text-primary font-body-md text-body-md transition-colors px-4 py-2">Sign In</button>
          </div>
        </div>
      )}
    </nav>
  );
}
