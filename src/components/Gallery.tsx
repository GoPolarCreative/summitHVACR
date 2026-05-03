import { useEffect, useRef } from 'react';

const photos = [
  { src: '/2.png', alt: 'Ducted AC installation Melbourne' },
  { src: '/3.png', alt: 'Split system installation Melbourne home' },
  { src: '/4.png', alt: 'Air conditioning unit installation Melbourne' },
  { src: '/5.png', alt: 'HVAC system ducted installation Melbourne' },
  { src: '/6.png', alt: 'Professional AC install Melbourne suburban home' },
  { src: '/7.png', alt: 'Outdoor condenser unit installation Melbourne' },
];

export default function Gallery() {
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
    <section id="gallery" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 fade-up">
          <span className="inline-block text-brand-red font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Our Work
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-brand-navy mb-3">
            Recent Installations
          </h2>
          <p className="font-body text-gray-500 text-lg">
            Real jobs. Real results. No stock photos.
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-4" />
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className={`fade-up delay-${Math.min((i + 1) * 100, 600)} gallery-item rounded-xl overflow-hidden bg-gray-200`}
              style={{ aspectRatio: '3 / 4' }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full block object-cover"
                onError={(e) => {
                  const el = e.currentTarget;
                  el.style.display = 'none';
                  const parent = el.parentElement;
                  if (parent) {
                    parent.style.background = 'linear-gradient(135deg, #1A3D8F22, #0D1B3E44)';
                    parent.style.display = 'flex';
                    parent.style.alignItems = 'center';
                    parent.style.justifyContent = 'center';
                    const div = document.createElement('div');
                    div.style.color = '#1A3D8F';
                    div.style.fontFamily = "'Barlow Condensed', sans-serif";
                    div.style.fontWeight = '700';
                    div.style.fontSize = '14px';
                    div.style.textTransform = 'uppercase';
                    div.style.letterSpacing = '0.1em';
                    div.style.opacity = '0.5';
                    div.textContent = `Installation Photo ${i + 1}`;
                    parent.appendChild(div);
                  }
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
