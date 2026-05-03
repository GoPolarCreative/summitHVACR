import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // silently handle
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-brand-navy"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 fade-up">
          <span className="inline-block text-brand-blue-light font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Contact
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-3 leading-none">
            Get Your Quote <span className="text-brand-red">Today</span>
          </h2>
          <p className="font-body text-white/50 text-lg">
            No obligation. Just an honest assessment and a fair price.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left — contact details */}
          <div className="lg:col-span-2 space-y-6 fade-up">
            <div>
              <h3 className="font-display text-2xl text-white mb-6 tracking-wide">
                Get In Touch
              </h3>
              <div className="space-y-5">
                <a
                  href="tel:0481156643"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-red/20 flex items-center justify-center shrink-0 group-hover:bg-brand-red/40 transition-colors">
                    <Phone size={20} className="text-brand-red" />
                  </div>
                  <div>
                    <div className="font-body text-white/40 text-xs uppercase tracking-wider mb-0.5">Phone</div>
                    <div className="font-body text-white font-medium group-hover:text-brand-blue-light transition-colors">
                      0481 156 643
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:enquire@summithvacr.com.au"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/30 flex items-center justify-center shrink-0 group-hover:bg-brand-blue/50 transition-colors">
                    <Mail size={20} className="text-brand-blue-light" />
                  </div>
                  <div>
                    <div className="font-body text-white/40 text-xs uppercase tracking-wider mb-0.5">Email</div>
                    <div className="font-body text-white font-medium group-hover:text-brand-blue-light transition-colors break-all">
                      enquire@summithvacr.com.au
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-white/60" />
                  </div>
                  <div>
                    <div className="font-body text-white/40 text-xs uppercase tracking-wider mb-0.5">Location</div>
                    <div className="font-body text-white font-medium">
                      Melbourne, VIC<br />
                      <span className="text-white/50 text-sm font-normal">Mobile service — we come to you</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-white/60" />
                  </div>
                  <div>
                    <div className="font-body text-white/40 text-xs uppercase tracking-wider mb-0.5">Availability</div>
                    <div className="font-body text-white font-medium">
                      Available for same-day emergency call-outs
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Red accent card */}
            <div className="bg-brand-red/15 border border-brand-red/30 rounded-2xl p-6">
              <h4 className="font-display text-xl text-white mb-2 tracking-wide">
                Emergency Call-Out?
              </h4>
              <p className="font-body text-white/60 text-sm mb-4">
                System down? Call us directly for same-day response across all of Melbourne.
              </p>
              <a href="tel:0481156643" className="btn-red !text-base !py-3 !px-5 w-full justify-center">
                <Phone size={16} />
                Call Now — 0481 156 643
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3 fade-up delay-200">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-3xl text-white mb-2 tracking-wide">Message Sent!</h3>
                  <p className="font-body text-white/60">
                    Thanks! Jesse will be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <input type="hidden" name="access_key" value="081881bb-4453-4494-9fe7-49d83953992c" />
                  <input type="hidden" name="subject" value="New Enquiry - Summit HVACR Website" />
                  <input type="hidden" name="redirect" value="false" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="font-body text-white/50 text-xs uppercase tracking-wider mb-1.5 block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Smith"
                        required
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="font-body text-white/50 text-xs uppercase tracking-wider mb-1.5 block">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="04XX XXX XXX"
                        required
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="font-body text-white/50 text-xs uppercase tracking-wider mb-1.5 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com.au"
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="font-body text-white/50 text-xs uppercase tracking-wider mb-1.5 block">
                      What are you after?
                    </label>
                    <select name="service" className="form-input">
                      <option value="" className="bg-brand-navy">Select a service...</option>
                      <option value="Ducted AC Installation" className="bg-brand-navy">Ducted AC Installation</option>
                      <option value="Split System Installation" className="bg-brand-navy">Split System Installation</option>
                      <option value="Refrigeration" className="bg-brand-navy">Refrigeration</option>
                      <option value="Mechanical Service" className="bg-brand-navy">Mechanical Service</option>
                      <option value="Not sure — need advice" className="bg-brand-navy">Not sure — need advice</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="font-body text-white/50 text-xs uppercase tracking-wider mb-1.5 block">
                      Tell us about your job (optional)
                    </label>
                    <textarea
                      name="message"
                      placeholder="Briefly describe what you need — house size, number of rooms, any existing system..."
                      rows={4}
                      className="form-input resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-red w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Sending...' : (
                      <>
                        Send Enquiry
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>

                  <p className="font-body text-white/30 text-xs text-center mt-4">
                    We typically respond within a few hours during business hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
