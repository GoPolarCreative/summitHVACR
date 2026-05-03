import { useEffect, useRef } from 'react';
import { Wind, Zap, Thermometer, Wrench, LayoutGrid, AlertCircle } from 'lucide-react';

const services = [
  {
    icon: Wind,
    title: 'Ducted Air Conditioning',
    desc: 'Full home comfort with a custom-designed ducted system. We handle sizing, zoning, and airflow for every room.',
    color: 'text-brand-blue',
  },
  {
    icon: Zap,
    title: 'Split System Installation',
    desc: 'Fast, clean, and efficient. Perfect for single rooms or targeted zones throughout your home.',
    color: 'text-brand-red',
  },
  {
    icon: Thermometer,
    title: 'Refrigeration Systems',
    desc: 'Commercial and residential refrigeration installed to the highest standard.',
    color: 'text-brand-blue-light',
  },
  {
    icon: Wrench,
    title: 'Mechanical Services',
    desc: 'Maintenance, servicing, and fault diagnosis to keep your system running at peak performance.',
    color: 'text-brand-blue',
  },
  {
    icon: LayoutGrid,
    title: 'System Design & Sizing',
    desc: 'No guesswork. Every system is correctly sized for your space — maximising efficiency and minimising running costs.',
    color: 'text-brand-red',
  },
  {
    icon: AlertCircle,
    title: 'Emergency Call-Outs',
    desc: "When your system fails, we're available for same-day emergency response across Melbourne.",
    color: 'text-brand-blue-light',
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const items = ref.current?.querySelectorAll('.fade-up');
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 fade-up">
          <span className="inline-block text-brand-red font-body font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-brand-navy mb-4">
            What We Install &amp; Service
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`service-card fade-up delay-${Math.min((i + 1) * 100, 600)} bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:border-brand-blue/20`}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gray-50 mb-5 ${s.color}`}>
                <s.icon size={26} strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-2xl text-brand-navy mb-3 tracking-wide">{s.title}</h3>
              <p className="font-body text-gray-600 leading-relaxed text-[15px]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
