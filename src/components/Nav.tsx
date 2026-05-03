import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? 'bg-brand-navy shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-2 shrink-0"
          >
            <img
              src="/Logo.png"
              alt="Summit HVACR Logo"
              className="h-10 md:h-12 w-auto object-contain"
              onError={(e) => {
                const img = e.currentTarget;
                img.style.display = 'none';
                const span = document.createElement('span');
                span.className = 'font-display text-2xl font-black text-white tracking-wider';
                span.textContent = 'SUMMIT HVACR';
                img.parentElement?.appendChild(span);
              }}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(l.href); }}
                className="font-body font-500 text-white/80 hover:text-white transition-colors duration-150 text-sm tracking-wide uppercase"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:0481156643"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              <Phone size={15} className="text-brand-blue-light" />
              <span>0481 156 643</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="btn-red !py-2.5 !px-5 !text-sm"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-navy border-t border-white/10 px-4 pb-6 pt-2">
          <nav className="flex flex-col gap-1 mb-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(l.href); }}
                className="text-white/80 hover:text-white py-3 border-b border-white/10 font-display text-lg uppercase tracking-wider"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a href="tel:0481156643" className="flex items-center gap-2 text-white mb-3">
            <Phone size={15} className="text-brand-blue-light" />
            <span className="font-medium">0481 156 643</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="btn-red w-full justify-center"
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}
