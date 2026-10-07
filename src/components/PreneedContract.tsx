import { useReveal } from '@/hooks/useReveal';
import { CheckCircle2 } from 'lucide-react';
import { advantages } from '@/data/content';

const advantageImage =
  'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80';

export default function PreNeed() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="preneed" className="py-24 lg:py-32 bg-ink-950 text-white relative overflow-hidden">
      <div ref={ref} className="mx-auto max-w-8xl px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* 左側：圖片區塊（懸停微幅放大） */}
          <div className="lg:col-span-5 relative reveal">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer border border-white/10">
              <img
                src={advantageImage}
                alt="生前契約主要優勢"
                className="w-full h-[450px] lg:h-[550px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* 右側：主要優勢列表（深色主題 Hover 互動） */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="font-serif-tc text-3xl lg:text-4xl font-bold text-white tracking-wide mb-4">
                主要優勢
              </h2>
              <div className="w-16 h-1 bg-gold-400 rounded-full mb-8" />
            </div>

            <div className="space-y-3.5">
              {advantages.map((advantage, idx) => (
                <div
                  key={idx}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-gold-400/40 hover:translate-x-1.5 hover:shadow-lg hover:shadow-gold-500/5"
                >
                  {/* 金色勾勾圖示：Hover 時圈圈變滿版金黃、勾勾變深黑 */}
                  <div className="p-1 rounded-full bg-gold-400/10 text-gold-400 group-hover:bg-gold-400 group-hover:text-ink-950 transition-all duration-300 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* 優勢文字：Hover 時從灰白（text-white/80）轉為純高亮白（text-white），帶淡金色光澤感 */}
                  <p className="text-white/80 group-hover:text-white text-base leading-relaxed font-medium transition-colors duration-300 pt-0.5">
                    {advantage}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
