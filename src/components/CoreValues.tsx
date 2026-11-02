import React from 'react';
import { useReveal } from '@/hooks/useReveal';
import { Heart, ShieldCheck, Gem, Sparkles } from 'lucide-react';

// 核心價值內容
const coreValues = [
  {
    icon: Heart,
    title: '人文關懷',
    description: '以同理心對待每一位客戶，尊重個人信念和家庭需求，提供溫暖而專業的服務。',
  },
  {
    icon: ShieldCheck,
    title: '專業保障',
    description: '擁有豐富與專業的行業經驗，確保應有之服務品質。',
  },
  {
    icon: Gem,
    title: '透明服務',
    description: '所有費用和流程皆清楚明列，並有專人清楚說明，讓您安心選擇。',
  },
  {
    icon: Sparkles,
    title: '永恆尊嚴',
    description: '我們尊重逝者、陪伴家屬，為每一個生命留下永恆的紀念。每一處細節皆經細心規劃，只為呈現最高的尊嚴與敬意。',
  },
];

export default function CoreValues() {
  const revealResult = useReveal<HTMLDivElement>();
  const ref = Array.isArray(revealResult) ? revealResult[0] : revealResult;

  return (
    <section id="values" className="py-24 lg:py-32 bg-ivory-100">
      <div ref={ref} className="mx-auto max-w-8xl px-6">
        {/* Header (英文字型、字距與大小已調整與 PROCEDURE GUIDE 完全一致) */}
        <div className="text-center mb-16">
          <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-bold reveal">
            CORE VALUES
          </p>
          <h2 className="font-serif-tc text-3xl md:text-4xl text-ink-900 font-bold mt-3 reveal reveal-delay-1">
            我們的核心價值
          </h2>
          <div className="gold-divider w-32 mx-auto mt-6 reveal reveal-delay-2" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {coreValues.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className={`reveal reveal-delay-${idx + 1} group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:shadow-ink-900/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer`}
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-ivory-100 text-gold-600 group-hover:bg-gold-500 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-sm">
                    <Icon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>

                <h3 className="font-serif-tc text-xl text-ink-800 font-bold mb-3">{value.title}</h3>
                <p className="text-ink-500 text-sm leading-relaxed">{value.description}</p>

                {/* Bottom accent (底部金色指示線) */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
