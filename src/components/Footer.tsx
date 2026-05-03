import { Phone, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Logo + tagline */}
          <div>
            <img
              src="/Logo.png"
              alt="Summit HVACR"
              className="h-10 w-auto object-contain mb-3"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const span = document.createElement('span');
                span.className = 'font-display text-xl font-black text-white tracking-wider block mb-3';
                span.textContent = 'SUMMIT HVACR';
                e.currentTarget.parentElement?.prepend(span);
              }}
            />
            <p className="font-body text-white/40 text-sm leading-relaxed max-w-xs">
              Melbourne's Air Conditioning Specialists. Ducted & split system installations done right.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-1 md:items-center">
            <h4 className="font-display text-white/30 text-xs uppercase tracking-widest mb-3">Navigation</h4>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
                className="font-body text-white/60 hover:text-white text-sm transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="md:text-right">
            <h4 className="font-display text-white/30 text-xs uppercase tracking-widest mb-3">Contact</h4>
            <div className="space-y-2">
              <a
                href="tel:0481156643"
                className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors md:justify-end"
              >
                <Phone size={13} className="text-brand-blue-light" />
                0481 156 643
              </a>
              <a
                href="mailto:enquire@summit-hvacr.com.au"
                className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors md:justify-end break-all"
              >
                <Mail size={13} className="text-brand-blue-light" />
                enquire@summit-hvacr.com.au
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-white/30 text-xs">
            © 2025 Summit HVACR. All rights reserved.
          </p>
          <p className="font-body text-white/20 text-xs">
            Website Designed By{' '}
            <a
              href="https://itscold.com.au/products/websites-for-tradies"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/50 transition-colors underline underline-offset-2"
            >
              Go Polar Creative
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
