import { useReveal } from '@/hooks/useReveal';
import { coreValues } from '@/data/content';
import { Heart, ShieldCheck, Gem, Sparkles } from 'lucide-react';

const iconMap: Record<string, typeof Heart> = {
  heart: Heart,
  shield: ShieldCheck,
  gem: Gem,
  sparkles: Sparkles,
};

export default function CoreValues() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="values" className="py-24 lg:py-32 bg-ivory-100">
      <div ref={ref} className="mx-auto max-w-8xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-600 text-sm tracking-[0.3em] uppercase reveal">Core Values</p>
          <h2 className="font-serif-tc text-3xl md:text-4xl lg:text-5xl text-ink-800 font-bold mt-3 reveal reveal-delay-1">
            我們的核心價值
          </h2>
          <div className="gold-divider w-32 mx-auto mt-6 reveal reveal-delay-2" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {coreValues.map((value, idx) => {
            const Icon = iconMap[value.icon] || Heart;
            return (
              <div
                key={value.title}
                className={`reveal reveal-delay-${idx + 1} group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:shadow-ink-900/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-100 to-gold-200 flex items-center justify-center group-hover:from-gold-200 group-hover:to-gold-300 transition-all duration-500">
                    <Icon className="w-8 h-8 text-gold-600" />
                  </div>
                  <div className="absolute inset-0 w-16 h-16 rounded-2xl border-2 border-gold-300/0 group-hover:border-gold-300/40 group-hover:scale-125 transition-all duration-500" />
                </div>

                <h3 className="font-serif-tc text-xl text-ink-800 font-bold mb-3">{value.title}</h3>
                <p className="text-ink-500 text-sm leading-relaxed">{value.description}</p>

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
