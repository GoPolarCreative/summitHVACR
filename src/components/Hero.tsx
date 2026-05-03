import { Phone, ArrowRight, CheckCircle } from 'lucide-react';

const badges = [
  'All of Melbourne',
  'Same-Day Available',
  'Owner-Operated',
  'Quotes',
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-brand-navy" />
      <div className="absolute inset-0 hero-pattern opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/90 to-brand-blue/50" />

      {/* Diagonal accent line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -right-32 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #4FA8E8 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-20 -left-32 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #D42B2B 0%, transparent 70%)' }}
        />
        {/* Diagonal accent bar */}
        <div
          className="absolute top-0 right-0 w-1 h-full opacity-40"
          style={{ background: 'linear-gradient(180deg, #D42B2B 0%, #1A3D8F 50%, transparent 100%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/40 text-brand-blue-light text-sm font-medium px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-brand-blue-light animate-pulse" />
          Melbourne's HVACR Specialists
        </div>

        {/* Main headline */}
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-none mb-4 text-shadow">
          Melbourne's Air
          <span className="block text-brand-red">Conditioning</span>
          <span className="block text-white">Specialists</span>
        </h1>

        {/* Subheading */}
        <p className="font-body text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Ducted &amp; split system installations done right — clean, efficient, built to last.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() => scrollTo('#contact')}
            className="btn-red group w-full sm:w-auto"
          >
            Book a Quote
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="tel:0481156643" className="btn-outline-white w-full sm:w-auto">
            <Phone size={18} />
            Call 0481 156 643
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {badges.map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-white/80">
              <CheckCircle size={16} className="text-brand-blue-light shrink-0" />
              <span className="font-body text-sm font-medium">{badge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom diagonal */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-white"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
      />
      <div
        className="absolute -bottom-1 left-0 right-0 h-20"
        style={{
          background: 'white',
          clipPath: 'polygon(0 60%, 100% 0, 100% 100%, 0 100%)',
        }}
      />
    </section>
  );
}
