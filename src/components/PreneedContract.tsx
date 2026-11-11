import React, { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { ShieldCheck, TrendingUp, PiggyBank, Maximize2, X, Check, HeartHandshake } from 'lucide-react';
import familyImage from '/core.jpg';
import funeralCostImg from '/台灣平均喪葬費用.jpg';
import planningBenefitsImg from '/規劃的好處.jpg';
import preneedVsInsuranceImg from '/生前契約.jpg';

// 4 點實用優勢列表
const additionalFeatures = [
  '獲得透明公開的服務規格與價格保障',
  '提供彈性優惠的付款方案，減輕分期壓力',
  '契約可自由轉讓，持有人可指定使用對象（不限本人或家人）',
  '專人全程協助導引，為親友留下清晰明瞭的後事指引',
];

export default function PreneedConcept() {
  const revealResult = useReveal<HTMLDivElement>();
  const ref = Array.isArray(revealResult) ? revealResult[0] : revealResult;
  const [activeModalImage, setActiveModalImage] = useState<{ src: string; title: string } | null>(null);

  return (
    <section className="pt-2 pb-16 lg:pt-4 lg:pb-24 bg-ivory-100 relative overflow-hidden -mt-6 lg:-mt-10">
      <div ref={ref} className="max-w-6xl mx-auto px-6 relative">
        
        {/* 1. 頁頭標題 */}
        <div className="text-center mb-12">
          <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-bold reveal">
            PRENEED CONTRACT
          </p>
          <h2 className="font-serif-tc text-3xl md:text-4xl lg:text-5xl font-bold text-ink-950 mt-2 reveal reveal-delay-1">
            什麼是生前契約？
          </h2>
          <div className="w-60 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4 reveal reveal-delay-2" />
          <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto reveal reveal-delay-3">
            給家人最後的一道保障，也是為自己預先記錄並落實身後事安排的尊榮選擇。
          </p>
        </div>

        {/* 2. 主視覺：溫馨陪伴 + 核心價值 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 reveal reveal-delay-3">
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl border border-gold-400/30 h-[320px] lg:h-[380px] group">
            <img
              src={familyImage}
              alt="溫暖陪伴"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-serif-tc text-xl font-bold drop-shadow">預先安排，圓滿無遺憾</p>
              <p className="text-sm text-ivory-100/90 mt-1 drop-shadow">以愛為出發，讓家人多一份安心與陪伴。</p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gold-400/30 shadow-lg space-y-4">
            <h3 className="font-serif-tc text-2xl font-bold text-ink-950 border-b border-gold-200 pb-3 flex items-center gap-2">
              <HeartHandshake className="w-6 h-6 text-gold-600" />
              <span>給家人最堅實的承諾</span>
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              生前契約是一種提早規劃身後事的尊榮服務方案。透由公開透明的契約內容與費用，將愛與關懷提早安排好，避免將未來的財務負擔與精神壓力留給最愛的家人。
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-ivory-50 rounded-xl border border-gold-200/60">
                <span className="block font-bold text-gold-700 text-sm">75% 依法信託</span>
                <span className="text-xs text-slate-500">京城銀行專戶履約保證</span>
              </div>
              <div className="p-3 bg-ivory-50 rounded-xl border border-gold-200/60">
                <span className="block font-bold text-gold-700 text-sm">上市櫃集團背景</span>
                <span className="text-xs text-slate-500">寶碩集團 (5210) 永續經營</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. 三大核心訴求 (美化網頁原生卡片 + 圖表檢視功能) */}
        <div className="space-y-12 mb-16 reveal reveal-delay-4">
          
          {/* 第一單元：生前契約 VS 保險 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gold-400/30 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gold-100 pb-4 mb-6">
              <div>
                <span className="text-xs font-bold text-gold-600 uppercase tracking-widest">CHAPTER 01</span>
                <h3 className="font-serif-tc text-2xl font-bold text-ink-950 mt-1">一定會發生的事情，先做好準備</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">生前契約 VS 保險，保障滿額理賠真正留給所愛的家人</p>
              </div>
              <button
                onClick={() => setActiveModalImage({ src: preneedVsInsuranceImg, title: '生前契約 VS 保險' })}
                className="self-start md:self-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ivory-100 border border-gold-400/40 text-gold-700 hover:bg-[#C69233] hover:text-white transition-all text-xs font-bold shrink-0 shadow-sm"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>對比圖表</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gold-50/60 to-white p-5 rounded-2xl border border-gold-300/60 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="w-5 h-5 text-gold-600" />
                  <h4 className="font-serif-tc font-bold text-ink-950 text-lg">生前契約（為確定做準備）</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gold-600" /> <strong>不分老少</strong>：不受年齡與健康狀況限制</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gold-600" /> <strong>自由轉讓</strong>：持有人可指定家人使用</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gold-600" /> <strong>確定服務</strong>：提供具體金額之完整喪葬服務</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-slate-400" />
                  <h4 className="font-serif-tc font-bold text-slate-800 text-lg">人壽保險（為不確定做準備）</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• <strong>投保限制</strong>：需視身體狀況與年齡核保</li>
                  <li>• <strong>不可轉讓</strong>：僅限被保險人本人使用</li>
                  <li>• <strong>金錢理賠</strong>：僅給付現金理賠金，留待遺屬處理</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 第二單元：台灣平均喪葬費用 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gold-400/30 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gold-100 pb-4 mb-6">
              <div>
                <span className="text-xs font-bold text-gold-600 uppercase tracking-widest">CHAPTER 02</span>
                <h3 className="font-serif-tc text-2xl font-bold text-ink-950 mt-1">享受預約優惠價，鎖定價格抗通膨</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">台灣平均一場喪葬費用約 35 萬元，隨通膨逐年增加</p>
              </div>
              <button
                onClick={() => setActiveModalImage({ src: funeralCostImg, title: '台灣平均喪葬費用數據' })}
                className="self-start md:self-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ivory-100 border border-gold-400/40 text-gold-700 hover:bg-[#C69233] hover:text-white transition-all text-xs font-bold shrink-0 shadow-sm"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>全台數據圖</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-ivory-50 rounded-2xl border border-gold-200/50">
                <span className="text-xs text-slate-500 block">北部地區</span>
                <span className="font-serif-tc font-bold text-ink-950 text-xl block mt-1">$399,580</span>
              </div>
              <div className="p-4 bg-ivory-50 rounded-2xl border border-gold-200/50">
                <span className="text-xs text-slate-500 block">中部地區</span>
                <span className="font-serif-tc font-bold text-ink-950 text-xl block mt-1">$371,526</span>
              </div>
              <div className="p-4 bg-ivory-50 rounded-2xl border border-gold-200/50">
                <span className="text-xs text-slate-500 block">南部地區</span>
                <span className="font-serif-tc font-bold text-ink-950 text-xl block mt-1">$359,169</span>
              </div>
              <div className="p-4 bg-ivory-50 rounded-2xl border border-gold-200/50">
                <span className="text-xs text-slate-500 block">東部地區</span>
                <span className="font-serif-tc font-bold text-ink-950 text-xl block mt-1">$225,192</span>
              </div>
            </div>
            <p className="text-right text-[11px] text-slate-400 mt-3">* 數據來源：內政部主計處 (費用未包含塔位與土葬支出)</p>
          </div>

          {/* 第三單元：給家人留愛不留債 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gold-400/30 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gold-100 pb-4 mb-6">
              <div>
                <span className="text-xs font-bold text-gold-600 uppercase tracking-widest">CHAPTER 03</span>
                <h3 className="font-serif-tc text-2xl font-bold text-ink-950 mt-1">給親愛的家人留愛不留債</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">提早做好資產配置與規劃，避免留給家人財務負擔</p>
              </div>
              <button
                onClick={() => setActiveModalImage({ src: planningBenefitsImg, title: '現在規劃的好處與通膨曲線' })}
                className="self-start md:self-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ivory-100 border border-gold-400/40 text-gold-700 hover:bg-[#C69233] hover:text-white transition-all text-xs font-bold shrink-0 shadow-sm"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>通膨曲線圖</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-2xl text-center shadow-md">
                <PiggyBank className="w-6 h-6 mx-auto mb-2 opacity-90" />
                <h4 className="font-bold text-base">省錢 ‧ 省事 ‧ 省麻煩</h4>
                <p className="text-xs opacity-80 mt-1">現在預約價格最理想</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-amber-600 to-amber-700 text-white rounded-2xl text-center shadow-md">
                <TrendingUp className="w-6 h-6 mx-auto mb-2 opacity-90" />
                <h4 className="font-bold text-base">鎖定價格 ‧ 抗通膨</h4>
                <p className="text-xs opacity-80 mt-1">不受每年 5% 通膨影響</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-amber-700 to-amber-800 text-white rounded-2xl text-center shadow-md">
                <ShieldCheck className="w-6 h-6 mx-auto mb-2 opacity-90" />
                <h4 className="font-bold text-base">自主選擇理想方式</h4>
                <p className="text-xs opacity-80 mt-1">依自己心意尊榮安排</p>
              </div>
            </div>
          </div>

        </div>

        {/* 4. 底部 4 點實用優勢 */}
        <div 
          className="rounded-3xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300 reveal reveal-delay-4"
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #fdfcfb 70%, #faf6f0 100%)',
            border: '1px solid rgba(212, 175, 55, 0.22)',
            boxShadow: '0 8px 25px -5px rgba(212, 175, 55, 0.1), 0 3px 8px rgba(0, 0, 0, 0.03)',
          }}
        >
          <h4 className="font-serif-tc text-xl font-bold text-ink-950 mb-6 text-center">
            生前契約更多權益與特點
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {additionalFeatures.map((feat, idx) => (
              <div 
                key={idx} 
                className="group/item flex items-center gap-2 p-3.5 rounded-xl transition-all duration-300 -translate-y-0 hover:-translate-y-1 hover:bg-gold-50/50 cursor-pointer border border-transparent hover:border-gold-400/30"
              >
                <div className="shrink-0 flex items-center justify-center">
                  <img 
                    src="/v.jpg" 
                    alt="勾勾" 
                    className="h-5 sm:h-6 w-auto object-contain transition-all duration-300 group-hover/item:scale-110 group-hover/item:drop-shadow-[0_4px_8px_rgba(212,175,55,0.45)]"
                  />
                </div>
                <span className="text-sm sm:text-base text-slate-700 font-medium group-hover/item:text-ink-950 transition-colors">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 點擊放大查看圖片 Modal */}
      {activeModalImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveModalImage(null)}
        >
          <div 
            className="bg-white rounded-3xl p-4 sm:p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4 border-b pb-3">
              <h3 className="font-serif-tc text-lg sm:text-xl font-bold text-ink-950">
                {activeModalImage.title}
              </h3>
              <button 
                onClick={() => setActiveModalImage(null)}
                className="p-1 rounded-full hover:bg-slate-100 transition-colors text-slate-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200">
              <img 
                src={activeModalImage.src} 
                alt={activeModalImage.title} 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
