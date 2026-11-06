import React from 'react';
import { useReveal } from '@/hooks/useReveal';
import { Heart, ShieldCheck, Gem, Sparkles } from 'lucide-react';

export default function CoreValues() {
  const revealResult = useReveal<HTMLDivElement>();
  const ref = Array.isArray(revealResult) ? revealResult[0] : revealResult;

  return (
    <section id="values" className="py-20 lg:py-28 bg-ivory-100 relative overflow-hidden">
      <div ref={ref} className="mx-auto max-w-6xl px-6 relative z-10">
        
        {/* Header 標題區 */}
        <div className="text-center mb-14">
          <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-bold reveal">
            CORE VALUES
          </p>
          <h2 className="font-serif-tc text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 mt-2 reveal reveal-delay-1">
            我們的核心價值
          </h2>
          <div className="gold-divider w-32 mx-auto mt-4 reveal reveal-delay-2" />
        </div>

        {/* 2x2 對稱佈局與中央核心意象圖案 */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-24 lg:gap-y-8 items-center reveal reveal-delay-3">
          
          {/* 中央純圓形精緻圖案 (移除外框，僅保留圓形裁切) */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none items-center justify-center">
            <div className="w-44 h-44 rounded-full overflow-hidden shadow-2xl border-2 border-gold-400/50 bg-ivory-50 flex items-center justify-center">
              <img 
                src="/core.png" 
                alt="核心價值意象" 
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* 1. 左上：人文關懷 (Icon 在左) */}
          <div className="group bg-gradient-to-br from-white/95 via-ivory-50/90 to-gold-100/40 border border-gold-400/40 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-6 relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-gold-400/15 border border-gold-400/35 group-hover:bg-gold-500 group-hover:border-gold-500 transition-colors duration-300 flex items-center justify-center shrink-0 shadow-xs">
              <Heart className="w-7 h-7 text-gold-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="h-16 w-px bg-gold-300/40 shrink-0 hidden sm:block" />
            <div className="text-left">
              <h3 className="font-serif-tc text-xl sm:text-2xl font-bold text-ink-900 mb-2 group-hover:text-gold-600 transition-colors">
                人文關懷
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-['Microsoft_JhengHei']">
                以同理心對待每一位客戶，尊重個人信念和家庭需求，提供溫暖而專業的服務。
              </p>
            </div>
          </div>

          {/* 2. 右上：專業保障 (Icon 在右) */}
          <div className="group bg-gradient-to-br from-white/95 via-ivory-50/90 to-gold-100/40 border border-gold-400/40 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-6 relative overflow-hidden">
            <div className="text-right flex-1 order-2 sm:order-1">
              <h3 className="font-serif-tc text-xl sm:text-2xl font-bold text-ink-900 mb-2 group-hover:text-gold-600 transition-colors">
                專業保障
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-['Microsoft_JhengHei']">
                擁有豐富與專業的行業經驗，確保應有之服務品質。
              </p>
            </div>
            <div className="h-16 w-px bg-gold-300/40 shrink-0 hidden sm:block order-2" />
            <div className="w-14 h-14 rounded-2xl bg-gold-400/15 border border-gold-400/35 group-hover:bg-gold-500 group-hover:border-gold-500 transition-colors duration-300 flex items-center justify-center shrink-0 shadow-xs order-1 sm:order-3">
              <ShieldCheck className="w-7 h-7 text-gold-600 group-hover:text-white transition-colors duration-300" />
            </div>
          </div>

          {/* 3. 左下：透明服務 (Icon 在左) */}
          <div className="group bg-gradient-to-br from-white/95 via-ivory-50/90 to-gold-100/40 border border-gold-400/40 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-6 relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-gold-400/15 border border-gold-400/35 group-hover:bg-gold-500 group-hover:border-gold-500 transition-colors duration-300 flex items-center justify-center shrink-0 shadow-xs">
              <Gem className="w-7 h-7 text-gold-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="h-16 w-px bg-gold-300/40 shrink-0 hidden sm:block" />
            <div className="text-left">
              <h3 className="font-serif-tc text-xl sm:text-2xl font-bold text-ink-900 mb-2 group-hover:text-gold-600 transition-colors">
                透明服務
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-['Microsoft_JhengHei']">
                所有費用和流程皆清楚明列，並有專人清楚說明，讓您安心選擇。
              </p>
            </div>
          </div>

          {/* 4. 右下：永恆尊嚴 (Icon 在右) */}
          <div className="group bg-gradient-to-br from-white/95 via-ivory-50/90 to-gold-100/40 border border-gold-400/40 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-6 relative overflow-hidden">
            <div className="text-right flex-1 order-2 sm:order-1">
              <h3 className="font-serif-tc text-xl sm:text-2xl font-bold text-ink-900 mb-2 group-hover:text-gold-600 transition-colors">
                永恆尊嚴
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-['Microsoft_JhengHei']">
                我們尊重逝者、陪伴家屬，為每一個生命留下永恆的紀念。每一處細節皆經細心規劃，只為呈現最高的尊嚴與敬意。
              </p>
            </div>
            <div className="h-16 w-px bg-gold-300/40 shrink-0 hidden sm:block order-2" />
            <div className="w-14 h-14 rounded-2xl bg-gold-400/15 border border-gold-400/35 group-hover:bg-gold-500 group-hover:border-gold-500 transition-colors duration-300 flex items-center justify-center shrink-0 shadow-xs order-1 sm:order-3">
              <Sparkles className="w-7 h-7 text-gold-600 group-hover:text-white transition-colors duration-300" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
