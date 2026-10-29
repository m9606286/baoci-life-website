import React from 'react';
import { useReveal } from '@/hooks/useReveal';
import { FileText, TrendingUp, ShieldCheck, Heart, CheckCircle2 } from 'lucide-react';

// 主要圖片圖源
const advantageImage =
  'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1200&q=80';

// 核心保障清單
const preneedAdvantages = [
  { text: '提前規劃人生重要的安排，讓家人少一分壓力，多一分安心。' },
  { text: '確保按照自己的意願進行禮儀安排。' },
  { text: '獲得透明的價格和完整的服務保障。' },
  { text: '享受優惠的付款方案，鎖定價格抗通膨。' },
  { text: '為親愛的家人留下清晰的指引，留愛不留負擔。' },
  { text: '依法提撥75%信託，選擇永續經營公司，更有保障。' },
  { text: '可自由轉讓，契約持有者可指定使用人，不受限於自己或家人使用。' },
];

// 核心特色卡片
const features = [
  {
    icon: FileText,
    title: '提前規劃，讓愛更周全',
    text: '人生的重要時刻，值得提前做好安排。透過生前契約妥善規劃禮儀服務與相關事宜，讓未來多一份從容，讓家人在面對離別時，能安心陪伴、從容道別，將愛與心意延續。',
  },
  {
    icon: TrendingUp,
    title: '享受預約優惠價，鎖定價格抗通膨',
    text: '台灣平均一場喪葬費用為35萬，並隨著通膨逐年增加，生前契約是用現在的價格，幫您鎖住未來一定會發生的支出。',
  },
  {
    icon: Heart,
    title: '給親愛的家人留愛不留負擔',
    text: '生前契約也是資產配置的一環，可以利用儲蓄的方式，如同保險一樣，提早準備規劃好自己想要的安排，避免未來留給家人負擔。',
  },
  {
    icon: ShieldCheck,
    title: '保證75%信託，永續經營有保障',
    text: '寶慈生命事業所發行之合法生前契約，契約款項依規定提撥75%交付京城銀行辦理信託保管，以確保資金安全與專款專用。寶慈生命事業為寶碩（股票代號5210）集團旗下之全資子公司，依循公司治理原則運作，強化營運穩定性與長期服務承諾。',
  },
];

export default function PreneedContract() {
  const revealResult = useReveal<HTMLDivElement>();
  const ref = Array.isArray(revealResult) ? revealResult[0] : revealResult;

  return (
    /* 移除多餘頂部間距，讓標題緊貼導覽列下方 */
    <section id="preneed" className="pt-2 pb-20 lg:pt-4 lg:pb-28 bg-ivory-100 text-slate-800 relative overflow-hidden">
      <div ref={ref} className="mx-auto max-w-8xl px-6 relative">
        {/* Header 標題區 */}
        <div className="text-center mb-10 lg:mb-12">
          <p className="text-gold-600 text-xs tracking-[0.35em] uppercase font-semibold reveal">Preneed Contract</p>
          <h2 className="font-serif-tc text-3xl md:text-4xl lg:text-5xl text-ink-950 font-bold mt-2 reveal reveal-delay-1">
            什麼是生前契約？
          </h2>

          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4 reveal reveal-delay-2" />

          <p className="mt-4 text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed reveal reveal-delay-3">
            生前契約是給家人的最後一道保障，也可明確記錄您對於身後事的安排和意願。
          </p>
        </div>

        {/* 圖片 + 核心保障清單 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch mb-20">
          {/* 左側：圖片區塊 */}
          <div className="lg:col-span-5 relative reveal flex flex-col">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer border border-gold-400/30 w-full flex-1 min-h-[400px] lg:min-h-full">
              <img
                src={advantageImage}
                alt="生前契約核心保障"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* 右側：核心保障列表 */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="w-fit text-center lg:text-left">
              <p className="text-gold-600 text-xs tracking-[0.35em] uppercase mb-1.5 font-bold">
                Core Guarantees
              </p>
              <h3 className="font-serif-tc text-2xl lg:text-3xl font-bold text-ink-950 tracking-wide mb-3">
                契約核心保障
              </h3>
              <div className="w-32 h-px bg-gradient-to-r from-gold-400/60 to-transparent mb-6" />
            </div>

            <div className="space-y-3.5 flex-1 flex flex-col justify-between">
              {preneedAdvantages.map((adv, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white/80 border border-gold-400/20 cursor-pointer transition-all duration-300 hover:bg-white hover:border-gold-400/60 hover:translate-x-1.5 hover:shadow-md hover:shadow-gold-500/5"
                >
                  <div className="p-1 rounded-full bg-gold-400/15 text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300 shrink-0">
                    <CheckCircle2 className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <p className="text-slate-700 group-hover:text-slate-900 text-base leading-relaxed font-medium transition-colors duration-300">
                    {adv.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 特色卡片區塊 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className={`reveal reveal-delay-${(idx % 2) + 1} group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gold-400/20 hover:border-gold-400/60 transition-all duration-500 hover:shadow-lg hover:bg-white`}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-gold-400/15 border border-gold-400/30 flex items-center justify-center shrink-0 group-hover:bg-gold-400/25 transition-colors">
                    <Icon className="w-7 h-7 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-serif-tc text-lg lg:text-xl text-ink-950 font-bold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
