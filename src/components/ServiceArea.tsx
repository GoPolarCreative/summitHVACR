import { useEffect, useRef } from 'react';
import { MapPin, Phone } from 'lucide-react';

const suburbs = [
  'Inner Melbourne', 'Northside', 'Southside', 'Eastern Suburbs', 'Western Suburbs',
  'Northern Suburbs', 'South-East Melbourne', 'Bayside', 'Frankston', 'Dandenong',
  'Cranbourne', 'Reservoir', 'Preston', 'Brunswick', 'Fitzroy', 'Richmond', 'St Kilda',
  'Footscray', 'Sunshine', 'Box Hill', 'Glen Waverley', 'Knox', 'Ringwood', 'Doncaster',
  'Essendon', 'Moonee Ponds', 'Coburg', 'Werribee', 'Point Cook', 'Williamstown', 'Altona',
];

export default function ServiceArea() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const items = ref.current?.querySelectorAll('.fade-up');
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #132254 100%)' }}
      ref={ref}
    >
      {/* Top diagonal */}
      <div
        className="absolute top-0 left-0 right-0 h-20 bg-gray-50"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 fade-up">
          <span className="inline-block text-brand-blue-light font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Coverage
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-4 leading-none">
            Servicing All of <span className="text-brand-red">Melbourne</span>
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mb-6" />
          <div className="inline-flex items-center gap-2 text-white/60">
            <MapPin size={16} className="text-brand-blue-light" />
            <span className="font-body text-sm">Mobile service — we come to you</span>
          </div>
        </div>

        {/* Suburb badges */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12 fade-up delay-100">
          {suburbs.map((suburb) => (
            <span
              key={suburb}
              className="font-body text-sm font-medium text-white bg-white/10 border border-white/15 px-4 py-2 rounded-full hover:bg-white/20 hover:border-brand-blue-light/50 transition-colors duration-200 cursor-default"
            >
              {suburb}
            </span>
          ))}
        </div>

        {/* Subtext */}
        <div className="text-center fade-up delay-200">
          <p className="font-body text-white/50 text-sm mb-4">
            Not sure if we cover your area? Just call — if we can get there, we will.
          </p>
          <a
            href="tel:0481156643"
            className="inline-flex items-center gap-2 text-brand-blue-light font-medium hover:text-white transition-colors text-sm"
          >
            <Phone size={15} />
            <span>0481 156 643</span>
          </a>
        </div>
      </div>

      {/* Bottom diagonal */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-brand-navy"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}
      />
    </section>
  );
}
