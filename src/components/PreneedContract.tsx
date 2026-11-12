import React, { useState } from 'react';
import { TrendingUp, Lock, Calculator } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import familyImage from '/core.jpg';

// 右側 3 大核心保障（接在「預先安排，圓滿無遺憾」照片右側）
const coreHighlights = [
  {
    title: '提前規劃，讓愛更周全',
    desc: '預先規劃禮儀服務與相關事宜，為未來多一份從容，讓家人在面對離別時能安心陪伴、從容道別。',
  },
  {
    title: '給親愛的家人留愛不留負擔',
    desc: '如同儲蓄與保險般的資產配置，提早準備好自己想要的安排，避免將未來的財務與精神壓力留給家人。',
  },
  {
    title: '保證 75% 信託，永續經營有保障',
    desc: '依法將 75% 款項交付京城銀行信託專戶管理；身為寶碩集團 (股票代號5210) 子公司，落實永續服務承諾。',
  },
];

export default function PreneedConcept() {
  const revealResult = useReveal<HTMLDivElement>();
  const ref = Array.isArray(revealResult) ? revealResult[0] : revealResult;

  // 互動式抗通膨圖表狀態
  const [years, setYears] = useState<number>(20);
  const [inflationRate, setInflationRate] = useState<number>(2.5);

  const basePrice = 22; // 基準契約價格 (萬元)
  const futurePrice = Math.round(basePrice * Math.pow(1 + inflationRate / 100, years) * 10) / 10;
  const savedAmount = Math.round((futurePrice - basePrice) * 10) / 10;
  const maxChartValue = 55; // 圖表最大刻度 (萬元)

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
            生前契約是給家人最後的一道保障，也是為自己預先記錄並落實身後事安排的尊榮選擇。
          </p>
        </div>

        {/* 2. 左圖右文：左側「預先安排，圓滿無遺憾」 + 右側 3 個核心方格 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12 reveal reveal-delay-3">
          
          {/* 左側照片 */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl border border-gold-400/30 min-h-[380px] lg:min-h-full group">
            <img
              src={familyImage}
              alt="溫暖陪伴"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-serif-tc text-xl font-bold drop-shadow">預先安排，圓滿無遺憾</p>
              <p className="text-sm text-ivory-100/90 mt-1 drop-shadow">以愛為出發，讓家人多一份安心。</p>
            </div>
          </div>

          {/* 右側：3 大核心保障卡片（直向三列對齊左側照片高度） */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-5">
            {coreHighlights.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl p-5 sm:p-6 overflow-hidden hover:-translate-y-1 transition-all duration-300 flex-1 flex flex-col justify-center cursor-pointer"
                  style={{
                    background: 'linear-gradient(180deg, #ffffff 0%, #fdfcfb 70%, #faf6f0 100%)',
                    border: '1px solid rgba(212, 175, 55, 0.22)',
                    boxShadow: '0 8px 25px -5px rgba(212, 175, 55, 0.1), 0 3px 8px rgba(0, 0, 0, 0.03)',
                  }}
                >
                  {/* Hover 時的清亮補光 */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div>
                    {/* 標題與勾勾 */}
                    <h3 className="relative z-10 font-serif-tc text-lg sm:text-xl font-bold text-ink-950 group-hover:text-gold-500 transition-colors duration-300 mb-2 flex items-start gap-1.5">
                      <img 
                        src="/v.jpg" 
                        alt="勾勾" 
                        className="h-5 sm:h-6 w-auto object-contain shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_4px_8px_rgba(212,175,55,0.45)]" 
                      />
                      <span>{item.title}</span>
                    </h3>

                    {/* 內文說明 */}
                    <p className="relative z-10 text-sm sm:text-base text-slate-600 leading-relaxed pl-6 sm:pl-7">
                      {item.desc}
                    </p>
                  </div>

                  {/* 底部 4px 質感金色指示線 */}
                  <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />
                </div>
              );
            })}
          </div>

        </div>

        {/* 3. 下方獨立區塊：享受預約優惠價，鎖定價格抗通膨（互動式圖文） */}
        <div 
          className="rounded-3xl p-6 sm:p-10 relative overflow-hidden transition-all duration-300 reveal reveal-delay-4"
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #fdfcfb 70%, #faf6f0 100%)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            boxShadow: '0 8px 25px -5px rgba(212, 175, 55, 0.12), 0 3px 10px rgba(0, 0, 0, 0.03)',
          }}
        >
          {/* 區塊標題與副標 */}
          <div className="text-center max-w-3xl mx-auto mb-8 space-y-2.5">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-400/15 border border-gold-400/30 text-gold-700 text-xs font-bold tracking-wider">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>抗通膨財務規劃</span>
            </div>
            <h3 className="font-serif-tc text-2xl sm:text-3xl font-bold text-ink-950 flex items-center justify-center gap-2">
              <img 
                src="/v.jpg" 
                alt="勾勾" 
                className="h-6 w-auto object-contain shrink-0" 
              />
              <span>享受預約優惠價，鎖定價格抗通膨</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              喪葬費用隨通膨逐年增加，生前契約用現在的價格鎖定未來必定發生的支出，理性省下龐大開銷。
            </p>
          </div>

          {/* 互動式試算與動態長條對比圖 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-ivory-100/80 rounded-2xl p-5 sm:p-7 border border-gold-400/20">
            
            {/* 左側：互動控制滑桿與情境選擇 */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2 text-ink-900 font-serif-tc font-bold text-base sm:text-lg">
                <Calculator className="w-5 h-5 text-gold-600" />
                <span>抗通膨試算模擬</span>
              </div>

              {/* 年限滑桿 */}
              <div className="bg-white p-4 rounded-xl border border-gold-400/20 shadow-sm space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm font-medium text-slate-600">預估規劃年數</span>
                  <span className="font-serif-tc text-lg sm:text-xl font-bold text-gold-700">{years} 年後</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={35}
                  step={5}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full accent-[#C69233] cursor-pointer h-2 bg-ivory-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>5年</span>
                  <span>15年</span>
                  <span>25年</span>
                  <span>35年</span>
                </div>
              </div>

              {/* 通膨率情境按鈕 */}
              <div className="bg-white p-4 rounded-xl border border-gold-400/20 shadow-sm space-y-2">
                <span className="text-xs sm:text-sm font-medium text-slate-600 block">禮儀與物價年通膨率</span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setInflationRate(2.0)}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                      inflationRate === 2.0
                        ? 'bg-[#585c63] text-white border-gold-400 shadow-sm'
                        : 'bg-ivory-50 text-slate-600 border-slate-200 hover:border-gold-400/50'
                    }`}
                  >
                    溫和通膨 (2.0%)
                  </button>
                  <button
                    type="button"
                    onClick={() => setInflationRate(2.5)}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                      inflationRate === 2.5
                        ? 'bg-[#585c63] text-white border-gold-400 shadow-sm'
                        : 'bg-ivory-50 text-slate-600 border-slate-200 hover:border-gold-400/50'
                    }`}
                  >
                    一般趨勢 (2.5%)
                  </button>
                </div>
              </div>

              {/* 省下金額重點框 */}
              <div className="bg-[#585c63] text-white p-4 rounded-xl border border-gold-400/60 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs text-ivory-200">預估為家人省下通膨差額</p>
                  <p className="text-[11px] text-gold-300 mt-0.5">現在預約即享價格凍結保障</p>
                </div>
                <div className="text-right">
                  <span className="font-serif-tc text-2xl font-bold text-gold-300">
                    約 {savedAmount}
                  </span>
                  <span className="text-xs text-ivory-100 ml-1">萬元</span>
                </div>
              </div>
            </div>

            {/* 右側：動態視覺對比圖表 */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-7 border border-gold-400/25 shadow-sm flex flex-col justify-between h-full">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-3 border-b border-ivory-200">
                <div>
                  <h4 className="font-serif-tc text-base sm:text-lg font-bold text-ink-950">
                    未來喪葬費用支出對比
                  </h4>
                  <p className="text-xs text-slate-500">拖曳左側滑桿，即時查看不同年份的通膨差距</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold-700 bg-gold-100/60 px-3 py-1 rounded-full">
                  <Lock className="w-3.5 h-3.5" /> 鎖定現價保護
                </span>
              </div>

              {/* 動態長條視覺 */}
              <div className="space-y-7 my-auto py-2">
                
                {/* Bar 1: 生前契約鎖定價格 */}
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-gold-500" />
                      <span className="font-bold text-sm sm:text-base text-ink-950">現在預約生前契約（鎖定價格）</span>
                    </div>
                    <span className="font-serif-tc text-lg sm:text-xl font-bold text-gold-600">
                      {basePrice} 萬元
                    </span>
                  </div>
                  <div className="w-full h-9 bg-ivory-100 rounded-xl overflow-hidden p-1 border border-gold-400/25">
                    <div
                      className="h-full rounded-lg bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 flex items-center justify-end pr-3 transition-all duration-500 ease-out shadow-sm"
                      style={{ width: `${Math.min((basePrice / maxChartValue) * 100, 100)}%` }}
                    >
                      <span className="text-[11px] font-bold text-white tracking-wider">價格凍結</span>
                    </div>
                  </div>
                </div>

                {/* Bar 2: 未來無規劃臨時辦理預估費用 */}
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#585c63]" />
                      <span className="font-bold text-sm sm:text-base text-slate-700">{years} 年後無規劃臨時辦理（含通膨）</span>
                    </div>
                    <span className="font-serif-tc text-lg sm:text-xl font-bold text-slate-700">
                      約 {futurePrice} 萬元
                    </span>
                  </div>
                  <div className="w-full h-9 bg-ivory-100 rounded-xl overflow-hidden p-1 border border-slate-200">
                    <div
                      className="h-full rounded-lg bg-gradient-to-r from-slate-500 to-[#585c63] flex items-center justify-end pr-3 transition-all duration-500 ease-out"
                      style={{ width: `${Math.min((futurePrice / maxChartValue) * 100, 100)}%` }}
                    >
                      <span className="text-[11px] font-medium text-ivory-100">+{savedAmount}萬 通膨增加</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* 圖表底部說明註記 */}
              <div className="mt-6 pt-3 border-t border-ivory-200 text-[11px] sm:text-xs text-slate-400">
                ※ 圖表數值僅供通膨趨勢參考，實際契約方案與費用依個人選擇之禮儀規格為準。
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
