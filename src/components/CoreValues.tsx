import React from 'react';
import { useReveal } from '@/hooks/useReveal';

// 核心價值內容
const coreValues = [
  {
    image: '/love.png', // 人文關懷圖片
    title: '人文關懷',
    description: '以同理心對待每一位客戶，尊重個人信念和家庭需求，提供溫暖而專業的服務。',
  },
  {
    image: '/safe.png', // 專業保障圖片
    title: '專業保障',
    description: '擁有豐富與專業的行業經驗，確保應有之服務品質。',
  },
  {
    image: '/stone.png', // 透明服務圖片
    title: '透明服務',
    description: '所有費用和流程皆清楚明列，並有專人清楚說明，讓您安心選擇。',
  },
  {
    image: '/star.png', // 永恆尊嚴圖片
    title: '永恆尊嚴',
    description: '我們尊重逝者、陪伴家屬，為每一個生命留下永恆的紀念。每一處細節皆經細心規劃，只為呈現最高的尊嚴與敬意。',
  },
];

export default function CoreValues() {
  const revealResult = useReveal<HTMLDivElement>();
  const ref = Array.isArray(revealResult) ? revealResult[0] : revealResult;

  return (
    <section id="values" className="py-24 lg:py-32 bg-ivory-100">
      <div ref= {ref} className="mx-auto max-w-8xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-bold reveal">
            CORE VALUES
          </p>
          <h2 className="font-serif-tc text-3xl md:text-4xl text-ink-900 font-bold mt-3 reveal reveal-delay-1">
            我們的核心價值
          </h2>
          <div className="gold-divider w-60 mx-auto mt-6 reveal reveal-delay-2" />
        </div>

        {/* Cards：維持原本一排 4 列（grid-cols-4）與大小比例 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {coreValues.map((value, idx) => {
            return (
              <div
                key={value.title}
                className={`reveal reveal-delay-${
                  idx + 1
                } group relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer
                /* 符合圖中的高質感米金漸層背景（上方微亮、下方溫潤米金） */
                bg-gradient-to-b from-white via-[#fcfbfa] to-[#f7f3ee]
                /* 細緻的高級金色外框 */
                border border-[#e6dcce] hover:border-gold-400/80
                /* 參考圖片的柔和立體陰影效果 */
                shadow-[0_10px_30px_-5px_rgba(212,175,55,0.12),0_4px_12px_rgba(0,0,0,0.03)]
                hover:shadow-[0_20px_40px_-10px_rgba(212,175,55,0.22),0_8px_20px_rgba(0,0,0,0.06)]`}
              >
                {/* Hover 時增添的光澤高光層 */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Image Container (維持原本大小與位移) */}
                <div className="relative mb-3 flex items-center justify-start h-16 z-10">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="h-14 sm:h-16 w-auto object-contain -ml-9 filter drop-shadow-md group-hover:drop-shadow-xl group-hover:scale-105 transition-all duration-300 origin-left"
                  />
                </div>

                {/* 標題 */}
                <h3 className="relative z-10 font-serif-tc text-xl text-ink-800 group-hover:text-gold-600 font-bold mb-3 transition-colors duration-300">
                  {value.title}
                </h3>

                {/* 描述 */}
                <p className="relative z-10 text-ink-500 text-sm leading-relaxed">
                  {value.description}
                </p>

                {/* Bottom accent (底部質感金色漸層指示線) */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
