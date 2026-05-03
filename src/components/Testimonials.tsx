import { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

const reviews = [
  {
    text: 'Jesse did an amazing job installing our ducted system. Everything was explained clearly upfront, the install was super clean, and the house has never been more comfortable. Highly recommend.',
    name: 'Liam T.',
    suburb: 'Reservoir',
  },
  {
    text: 'Had a split system put in the bedroom and lounge — both done in a day. No mess left behind, very tidy work. Will definitely be using Summit again for the rest of the house.',
    name: 'Sarah K.',
    suburb: 'Cranbourne',
  },
  {
    text: 'Really happy with the whole experience. Jesse took the time to properly size the system rather than just slapping in whatever was cheapest. Big difference in how efficiently it runs.',
    name: 'Marcus D.',
    suburb: 'Frankston',
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
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
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 fade-up">
          <span className="inline-block text-brand-red font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Reviews
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-brand-navy mb-4">
            What Our Customers Say
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`fade-up delay-${(i + 1) * 100} relative bg-gray-50 rounded-2xl p-8 border border-gray-100`}
            >
              <Quote
                size={36}
                className="text-brand-blue/10 absolute top-6 right-6"
                fill="currentColor"
              />
              <Stars />
              <p className="font-body text-gray-700 leading-relaxed mb-6 text-[15px] relative z-10">
                "{r.text}"
              </p>
              <div className="flex items-center gap-3 border-t border-gray-200 pt-5">
                <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center shrink-0">
                  <span className="font-display text-white text-base font-bold">
                    {r.name[0]}
                  </span>
                </div>
                <div>
                  <div className="font-body font-semibold text-brand-navy text-sm">{r.name}</div>
                  <div className="font-body text-gray-400 text-xs">{r.suburb}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
