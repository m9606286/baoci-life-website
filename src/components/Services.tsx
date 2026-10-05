import { useReveal } from '@/hooks/useReveal';
import { services } from '@/data/content';
import { ClipboardList, HeartHandshake, ArrowRight } from 'lucide-react';

const iconMap: Record<string, typeof ClipboardList> = {
  clipboard: ClipboardList,
  hands: HeartHandshake,
};

export default function Services() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="py-24 lg:py-32 bg-ivory-100 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-gold-100/30 blur-3xl pointer-events-none" />

      <div ref={ref} className="mx-auto max-w-8xl px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-600 text-sm tracking-[0.3em] uppercase reveal">Services</p>
          <h2 className="font-serif-tc text-3xl md:text-4xl lg:text-5xl text-ink-800 font-bold mt-3 reveal reveal-delay-1">
            我們的服務
          </h2>
          <div className="gold-divider w-32 mx-auto mt-6 reveal reveal-delay-2" />
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] || ClipboardList;
            return (
              <div
                key={service.title}
                className={`reveal reveal-delay-${idx + 1} group relative bg-white rounded-3xl p-10 shadow-md hover:shadow-2xl hover:shadow-ink-900/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
              >
                {/* Large watermark icon */}
                <div className="absolute -top-6 -right-6 opacity-5 pointer-events-none">
                  <Icon className="w-48 h-48 text-ink-800" />
                </div>

                {/* Icon */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-ink-800 to-ink-950 flex items-center justify-center group-hover:from-gold-500 group-hover:to-gold-600 transition-all duration-500 shadow-lg">
                    <Icon className="w-10 h-10 text-gold-400 group-hover:text-ivory-50 transition-colors" />
                  </div>
                </div>

                <h3 className="font-serif-tc text-2xl lg:text-3xl text-ink-800 font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-ink-500 text-base leading-relaxed mb-8">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-gold-600 font-medium text-sm hover:text-gold-500 transition-colors group/btn"
                >
                  <span>了解更多</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-300 to-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
