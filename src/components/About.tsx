import { useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const points = [
  'Every system correctly sized for your space',
  'Proper zoning, airflow & diffuser placement',
  'Clean, professional installations every time',
  'Direct communication with Jesse — start to finish',
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );
    const items = ref.current?.querySelectorAll('.fade-up');
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <div className="fade-up">
              <span className="inline-block text-brand-red font-body font-semibold text-sm uppercase tracking-widest mb-3">
                Our Story
              </span>
              <h2 className="font-display text-5xl md:text-6xl text-brand-navy mb-6 leading-none">
                About Summit HVACR
              </h2>
              <div className="w-16 h-1 bg-brand-red mb-8" />
            </div>

            <div className="fade-up delay-100 space-y-4 font-body text-gray-600 leading-relaxed text-[16px]">
              <p>
                Summit HVACR was founded on a simple belief — air conditioning should be installed properly, the first time.
              </p>
              <p>
                Based in Melbourne, we specialise in ducted and split system installations for residential homes across the city. Every job is owner-operated by Jesse, meaning you get direct communication, honest advice, and a finished result you can be proud of.
              </p>
              <p>
                We don't cut corners on system design or installation. From the correct unit sizing to airflow, zoning, and diffuser placement — every detail is considered so your system performs the way it should for years to come.
              </p>
            </div>

            <ul className="mt-8 space-y-3 fade-up delay-200">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <ShieldCheck size={18} className="text-brand-blue-light mt-0.5 shrink-0" />
                  <span className="font-body text-gray-700 text-[15px]">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 fade-up delay-300">
              <p className="font-body text-gray-500 mb-4 text-sm">
                Get in touch for a free, no-obligation quote.
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-red group"
              >
                Book a Quote
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Image side */}
          <div className="fade-up delay-200">
            <div className="relative">
              {/* Accent shape */}
              <div
                className="absolute -top-4 -right-4 w-full h-full rounded-2xl border-2 border-brand-blue/30"
              />
              <div className="relative rounded-2xl overflow-hidden bg-brand-navy shadow-2xl aspect-[4/3] flex items-center justify-center">
                <img
                  src="/Logo.png"
                  alt="Summit HVACR logo — Melbourne Air Conditioning Specialists"
                  loading="lazy"
                  className="w-3/4 max-w-xs object-contain p-8"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Fallback gradient */}
                <div
                  className="absolute inset-0 -z-10"
                  style={{
                    background: 'linear-gradient(135deg, #0D1B3E 0%, #1A3D8F 100%)',
                  }}
                />
              </div>

              {/* Stat badge */}
              <div className="absolute -bottom-6 -left-6 bg-brand-red text-white rounded-2xl px-6 py-4 shadow-xl">
                <div className="font-display text-3xl font-black">100%</div>
                <div className="font-body text-xs text-white/80 leading-tight">Owner-operated<br />every job</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
