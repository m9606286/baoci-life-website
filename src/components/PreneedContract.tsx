import React, { useState } from 'react';
import { Sparkles, Lock, UserCheck } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import familyImage from '/core.jpg';

// 右側 3 大核心保障
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

// 三張核心好處卡片
const benefitBubbles = [
  {
    id: 0,
    title: '省錢 省事 省麻煩',
    icon: Sparkles,
  },
  {
    id: 1,
    title: '鎖定價格 抗通膨',
    icon: Lock,
  },
  {
    id: 2,
    title: '自己選擇想要的方式',
    icon: UserCheck,
  },
];

export default function PreneedConcept() {
  const revealResult = useReveal<HTMLDivElement>();
  const ref = Array.isArray(revealResult) ? revealResult[0] : revealResult;

  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [years, setYears] = useState<number>(29); // 預設 29 年，最多 80 年

  // 以近三年平均 2% 複利計算成長百分比
  const growthPercent = Math.round((Math.pow(1 + 0.02, years) - 1) * 100);
  const currentSvgX = Math.min(135 + (years / 80) * 640, 775);

  // 點擊或拖曳橫軸互動
  const handleSvgClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const svgX = (clickX / rect.width) * 820;
    if (svgX >= 135 && svgX <= 775) {
      const calculatedYears = Math.round(((svgX - 135) / 640) * 80);
      setYears(Math.max(1, Math.min(80, calculatedYears)));
    }
  };

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

        {/* 2. 左圖右文：左側照片 + 右側 3 個核心方格 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14 reveal reveal-delay-3">
          
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
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div>
                    <h3 className="relative z-10 font-serif-tc text-lg sm:text-xl font-bold text-ink-950 group-hover:text-gold-500 transition-colors duration-300 mb-2 flex items-start gap-1.5">
                      <img 
                        src="/v.jpg" 
                        alt="勾勾" 
                        className="h-5 sm:h-6 w-auto object-contain shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_4px_8px_rgba(212,175,55,0.45)]" 
                      />
                      <span>{item.title}</span>
                    </h3>

                    <p className="relative z-10 text-sm sm:text-base text-slate-600 leading-relaxed pl-6 sm:pl-7">
                      {item.desc}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />
                </div>
              );
            })}
          </div>

        </div>

        {/* 3. 下方獨立區塊：享受預約優惠價，鎖定價格抗通膨 */}
        <div className="max-w-5xl mx-auto py-4 relative overflow-hidden transition-all duration-300">
          
          {/* 區塊標題：上方英文、下方質感線(放大1.5倍)、置中、無勾勾 */}
          <div className="text-center mb-8 space-y-2.5">
            <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-bold">
              PRENEED BENEFIT
            </p>
            <h3 className="font-serif-tc text-2xl sm:text-3xl font-bold text-ink-950">
              享受預約優惠價，鎖定價格抗通膨
            </h3>
            {/* 質感線放大 1.5 倍 */}
            <div className="w-72 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-3" />
            
            <p className="text-slate-600 font-sans text-xs sm:text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-normal pt-2">
              喪葬費用隨通膨逐年增加，生前契約用現在的價格鎖定未來必定發生的支出，理性省下龐大開銷。
            </p>
          </div>

          {/* 資訊圖表主體 */}
          <div className="p-2 sm:p-4">
            
            {/* 圖表左上小標題與還原的「現在規劃的好處」 */}
            <div className="mb-6">
              <h4 className="font-serif-tc text-xl sm:text-2xl font-bold text-ink-900 inline-block">
                現在規劃的好處
              </h4>
              <div className="w-40 h-[2.5px] bg-gradient-to-r from-[#A6721C] via-gold-400 to-transparent rounded-full mt-1.5" />
            </div>

            {/* 上排：三個對話框式核心卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {benefitBubbles.map((item, idx) => {
                const IconComp = item.icon;
                const isSelected = activeIndex === idx;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className={`relative rounded-xl p-4 cursor-pointer transition-all duration-300 select-none border ${
                      isSelected
                        ? 'shadow-md ring-2 ring-gold-400/60 -translate-y-1 bg-gradient-to-br from-white via-[#fcf8f0] to-[#f4ebd9]'
                        : 'shadow-sm opacity-90 hover:opacity-100 bg-gradient-to-br from-white via-[#faf6ed] to-[#f0e4d0]'
                    }`}
                    style={{
                      borderColor: 'rgba(212, 175, 55, 0.4)',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-gold-100/80 flex items-center justify-center shrink-0 border border-gold-400/40">
                        <IconComp className="w-5 h-5 text-gold-700" />
                      </div>
                      <div className="font-serif-tc font-bold text-base sm:text-lg leading-snug text-ink-950">
                        {item.title}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 下排：SVG 雙線抗通膨趨勢座標圖 */}
            <div className="w-full overflow-x-auto pt-2 bg-white/60 rounded-2xl p-4 border border-gold-400/20 shadow-sm relative">
              <div className="min-w-[620px]">
                <svg
                  viewBox="0 0 820 280"
                  className="w-full h-auto overflow-visible cursor-pointer"
                  onClick={handleSvgClick}
                >
                  <defs>
                    <linearGradient id="savedAreaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#A6721C" stopOpacity="0.05" />
                      <stop offset="100%" stopColor="#A6721C" stopOpacity="0.18" />
                    </linearGradient>
                  </defs>

                  {/* 動態差額填充區 */}
                  <polygon
                    points={`135,155 ${currentSvgX},${155 - (currentSvgX - 135) * 0.094} 775,95 775,195 135,195`}
                    fill="url(#savedAreaGrad)"
                  />

                  {/* 縱軸 (Y軸) - 黑色 */}
                  <line
                    x1="135"
                    y1="230"
                    x2="135"
                    y2="20"
                    stroke="#000000"
                    strokeWidth="2.5"
                  />

                  {/* 橫軸 (X軸) - 黑色 */}
                  <line
                    x1="135"
                    y1="230"
                    x2="795"
                    y2="230"
                    stroke="#000000"
                    strokeWidth="2.5"
                  />

                  {/* 軸標籤 */}
                  <text x="122" y="155" textAnchor="end" className="font-serif-tc font-bold fill-[#A6721C] text-[14px]">
                    殯葬費用
                  </text>
                  <text x="122" y="200" textAnchor="end" className="font-serif-tc font-bold fill-[#585c63] text-[14px]">
                    預購生前契約
                  </text>

                  {/* 上方斜線：通貨膨脹費用趨勢 (無括號) */}
                  <line
                    x1="135"
                    y1="155"
                    x2="775"
                    y2="95"
                    stroke="#A6721C"
                    strokeWidth="3"
                  />
                  <text
                    x="455"
                    y="112"
                    textAnchor="middle"
                    transform="rotate(-5.2, 455, 112)"
                    className="font-serif-tc font-semibold fill-[#A6721C] text-[13px] tracking-wide"
                  >
                    因物價與服務成本上漲，殯葬費用將隨時間增加
                  </text>

                  {/* 下方水平線：預購生前契約鎖定價格 */}
                  <line
                    x1="135"
                    y1="195"
                    x2="775"
                    y2="195"
                    stroke="#585c63"
                    strokeWidth="2.5"
                  />
                  <text
                    x="455"
                    y="185"
                    textAnchor="middle"
                    className="font-serif-tc font-bold fill-[#585c63] text-[14px] tracking-widest"
                  >
                    鎖定價格
                  </text>

                  {/* 動態點擊連動節點（圈圈與幾年後改為黑色，圈圈大小同鎖定價格的圈圈） */}
                  <g>
                    <line
                      x1={currentSvgX}
                      y1={155 - (currentSvgX - 135) * 0.094}
                      x2={currentSvgX}
                      y2={195}
                      stroke="#A6721C"
                      strokeWidth="2"
                    />
                    <circle
                      cx={currentSvgX}
                      cy={155 - (currentSvgX - 135) * 0.094}
                      r={7}
                      fill="#ffffff"
                      stroke="#A6721C"
                      strokeWidth="3"
                    />
                    <circle
                      cx={currentSvgX}
                      cy={195}
                      r={7}
                      fill="#ffffff"
                      stroke="#585c63"
                      strokeWidth="3"
                    />
                    <circle
                      cx={currentSvgX}
                      cy={230}
                      r={7}
                      fill="#ffffff"
                      stroke="#000000"
                      strokeWidth="3"
                    />
                    <text
                      x={currentSvgX}
                      y={258}
                      textAnchor="middle"
                      className="font-serif-tc font-bold fill-[#000000] text-[15px]"
                    >
                      {years} 年後
                    </text>
                  </g>
                </svg>

                {/* 提示：可直接點擊橫軸來調整預估年數（最高 80 年）移至圖表右上方 */}
                <div className="absolute top-3 right-4 pointer-events-none">
                  <span className="text-[11px] sm:text-xs text-slate-500 bg-white/90 px-3 py-1.5 rounded-lg border border-gold-400/30 shadow-sm">
                    💡 可直接點擊橫軸來調整預估年數（最高 80 年）
                  </span>
                </div>

                {/* 數據說明移至圖表右下方 */}
                <div className="absolute bottom-3 right-4 pointer-events-none bg-white/95 px-3 py-1.5 rounded-lg border border-gold-400/30 shadow-sm">
                  <p className="font-serif-tc text-xs sm:text-sm font-bold text-ink-950">
                    {years} 年後通膨成長約 <span className="text-gold-700">{growthPercent}%</span> (依近3年平均約2%預估)
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
