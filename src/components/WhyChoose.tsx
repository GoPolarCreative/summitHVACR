import { useEffect, useRef } from 'react';
import { User, Home, Star, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: User,
    title: 'Owner-Operated',
    desc: 'Jesse handles every job personally. No subcontractors. No handoffs. The person quoting is the person installing.',
  },
  {
    icon: Home,
    title: 'Built for Your Home',
    desc: 'Every system is designed specifically for your space — sizing, zoning, airflow. Not a copy-paste solution.',
  },
  {
    icon: Star,
    title: 'Clean, Professional Installs',
    desc: 'Summit is known for neat, unobtrusive installations that look as good as they perform.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    desc: "You'll always know what's happening, what it costs, and when it's done. No surprises.",
  },
];

export default function WhyChoose() {
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
    const items = ref.current?.querySelectorAll('.fade-up, .fade-in');
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative py-28"
      style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #132254 60%, #1A3D8F 100%)' }}
      ref={ref}
    >
      {/* Top diagonal */}
      <div
        className="absolute top-0 left-0 right-0 h-20 bg-white"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 fade-up">
          <span className="inline-block text-brand-blue-light font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Why Summit
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-4 leading-none">
            Why Homeowners Across
            <span className="block text-brand-red">Melbourne Choose Summit</span>
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto" />
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`fade-up delay-${(i + 1) * 100} flex gap-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300`}
            >
              <div className="shrink-0 w-14 h-14 rounded-xl bg-brand-red/20 flex items-center justify-center">
                <f.icon size={24} className="text-brand-red" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-display text-2xl text-white mb-2 tracking-wide">{f.title}</h3>
                <p className="font-body text-white/65 leading-relaxed text-[15px]">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom diagonal */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-white"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}
      />
    </section>
  );
}
