import React, { useState } from 'react';
import { Sparkles, Lock, UserCheck, ShieldCheck, RefreshCw, Award, FileText, FileCheck, DollarSign, Users } from 'lucide-react';
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
    title: '選擇自己想要的方式',
    icon: UserCheck,
  },
];

// 生前契約 4 大互動項目
const preneedItems = [
  { title: '不分老少', desc: '全齡皆可預先規劃，不受年齡與體況限制', icon: Users },
  { title: '可指定使用', desc: '契約可指定使用對象（不限本人或家人），彈性便利', icon: RefreshCw },
  { title: '專業服務', desc: '由政府立案合法禮儀團隊全程執行', icon: Award },
  { title: '確定金額的喪葬服務', desc: '預約現價鎖定，免受未來通膨影響', icon: FileCheck },
];

// 保險 4 大互動項目
const insuranceItems = [
  { title: '投保限制', desc: '受年齡、健康狀況與體況核保規定限制', icon: Lock },
  { title: '不可指定使用', desc: '被保險人於投保時即固定，無法隨意變更使用對象', icon: Lock },
  { title: '金錢理賠', desc: '以保險金給付為主，非直接提供實物服務', icon: DollarSign },
  { title: '遺屬的生活費用', desc: '提供家庭經濟支柱身故後的資金補貼', icon: Users },
];

export default function PreneedConcept() {
  const revealResult = useReveal<HTMLDivElement>();
  const ref = Array.isArray(revealResult) ? revealResult[0] : revealResult;

  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [years, setYears] = useState<number>(5); // 預設為 5 年後，最多 80 年

  // 生前契約與保險同步展開狀態
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  // SVG 座標基準常數
  const startX = 135;
  const endX = 805;
  const chartWidth = endX - startX; // 670
  const baseLineY = 190; 
  const maxGrowthHeight = 155; 
  const maxMultiplier = Math.pow(1.02, 80) - 1; 

  const getInflationY = (t: number) => {
    const multiplier = Math.pow(1.02, t) - 1;
    return baseLineY - (multiplier / maxMultiplier) * maxGrowthHeight;
  };

  const generateCurvePoints = (maxYear: number) => {
    const points: string[] = [];
    for (let t = 0; t <= maxYear; t++) {
      const x = startX + (t / 80) * chartWidth;
      const y = getInflationY(t);
      points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return points;
  };

  const fullCurvePoints = generateCurvePoints(80);
  const fullCurvePath = `M ${fullCurvePoints.join(' L ')}`;

  const growthPercent = Math.round((Math.pow(1.02, years) - 1) * 100);
  const currentSvgX = startX + (years / 80) * chartWidth;
  const currentCurveY = getInflationY(years);

  const activeCurvePoints = generateCurvePoints(years);
  const savedAreaPolygon = `${startX},${baseLineY} ${activeCurvePoints.join(' ')} ${currentSvgX.toFixed(1)},${baseLineY}`;

  const handleSvgClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const svgX = (clickX / rect.width) * 880;
    if (svgX >= startX && svgX <= endX) {
      const calculatedYears = Math.round(((svgX - startX) / chartWidth) * 80);
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
        <div className="max-w-6xl mx-auto py-4 relative overflow-hidden transition-all duration-300 mb-20">
          
          {/* 區塊標題 */}
          <div className="text-center mb-8 space-y-2.5">
            <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-bold">
              PRENEED BENEFIT
            </p>
            <h3 className="font-serif-tc text-2xl sm:text-3xl font-bold text-ink-950">
              享受預約優惠價，鎖定價格抗通膨
            </h3>
            <div className="w-72 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-3" />
            
            <p className="text-slate-600 font-sans text-xs sm:text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-normal pt-2">
              喪葬費用隨通膨逐年增加，生前契約用現在的價格鎖定未來必定發生的支出，理性省下龐大開銷。
            </p>
          </div>

          {/* 資訊圖表大卡片 */}
          <div className="w-full overflow-x-auto bg-white/70 rounded-2xl p-5 sm:p-8 border border-gold-400/25 shadow-sm">
            
            <div className="mb-8 flex flex-col lg:flex-row lg:items-center gap-5">
              <div className="shrink-0">
                <h4 className="font-serif-tc text-xl sm:text-2xl font-bold text-ink-900 whitespace-nowrap">
                  現在規劃的好處
                </h4>
                <div className="w-full h-[2.5px] bg-gradient-to-r from-[#A6721C] via-gold-400 to-transparent rounded-full mt-1.5" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 flex-1">
                {benefitBubbles.map((item, idx) => {
                  const IconComp = item.icon;
                  const isSelected = activeIndex === idx;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveIndex(idx)}
                      onMouseEnter={() => setActiveIndex(idx)}
                      className={`relative rounded-xl px-4 py-3.5 cursor-pointer transition-all duration-300 select-none border flex items-center gap-3 ${
                        isSelected
                          ? 'shadow-md ring-2 ring-gold-400/60 -translate-y-0.5 bg-gradient-to-br from-white via-[#fcf8f0] to-[#f4ebd9]'
                          : 'shadow-sm opacity-90 hover:opacity-100 bg-gradient-to-br from-white via-[#faf6ed] to-[#f0e4d0]'
                      }`}
                      style={{
                        borderColor: 'rgba(212, 175, 55, 0.4)',
                      }}
                    >
                      <div className="w-10 h-10 rounded-full bg-gold-100/80 flex items-center justify-center shrink-0 border border-gold-400/40">
                        <IconComp className="w-5 h-5 text-gold-700" />
                      </div>
                      <div className="font-serif-tc font-bold text-sm sm:text-base leading-snug text-ink-950">
                        {item.title}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 下方 SVG 圖表 */}
            <div className="min-w-[660px]">
              <svg
                viewBox="0 0 880 305"
                className="w-full h-auto overflow-visible cursor-pointer"
                onClick={handleSvgClick}
              >
                <defs>
                  <linearGradient id="savedAreaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#A6721C" stopOpacity="0.06" />
                    <stop offset="100%" stopColor="#A6721C" stopOpacity="0.22" />
                  </linearGradient>
                </defs>

                <polygon
                  points={savedAreaPolygon}
                  fill="url(#savedAreaGrad)"
                />

                <line
                  x1={startX}
                  y1="225"
                  x2={startX}
                  y2="15"
                  stroke="#000000"
                  strokeWidth="2.5"
                />

                <line
                  x1={startX}
                  y1="225"
                  x2="845"
                  y2="225"
                  stroke="#000000"
                  strokeWidth="2.5"
                />

                <text x="122" y="178" textAnchor="end" className="font-serif-tc font-bold fill-[#A6721C] text-[14px]">
                  殯葬費用
                </text>
                <text x="122" y="198" textAnchor="end" className="font-serif-tc font-bold fill-[#585c63] text-[14px]">
                  預購生前契約
                </text>

                <path
                  d={fullCurvePath}
                  fill="none"
                  stroke="#A6721C"
                  strokeWidth="3"
                />
                <text
                  x="485"
                  y="116"
                  textAnchor="middle"
                  transform="rotate(-11.5, 485, 116)"
                  className="font-serif-tc font-semibold fill-[#A6721C] text-[13px] tracking-wide"
                >
                  因物價與服務成本上漲，殯葬費用將隨時間增加
                </text>

                <line
                  x1={startX}
                  y1={baseLineY}
                  x2={endX}
                  y2={baseLineY}
                  stroke="#585c63"
                  strokeWidth="2.5"
                />
                <text
                  x="470"
                  y="212"
                  textAnchor="middle"
                  className="font-serif-tc font-bold fill-[#585c63] text-[14px] tracking-widest"
                >
                  鎖定價格
                </text>

                <circle
                  cx={startX}
                  cy={baseLineY}
                  r={5}
                  fill="#A6721C"
                />

                <g>
                  <line
                    x1={currentSvgX}
                    y1={currentCurveY}
                    x2={currentSvgX}
                    y2={baseLineY}
                    stroke="#A6721C"
                    strokeWidth="2"
                  />
                  <circle
                    cx={currentSvgX}
                    cy={currentCurveY}
                    r={7}
                    fill="#ffffff"
                    stroke="#A6721C"
                    strokeWidth="3"
                  />
                  <circle
                    cx={currentSvgX}
                    cy={baseLineY}
                    r={7}
                    fill="#ffffff"
                    stroke="#585c63"
                    strokeWidth="3"
                  />
                  <circle
                    cx={currentSvgX}
                    cy="225"
                    r={7}
                    fill="#ffffff"
                    stroke="#000000"
                    strokeWidth="3"
                  />
                  <text
                    x={currentSvgX}
                    y={254}
                    textAnchor="middle"
                    className="font-serif-tc font-bold fill-[#000000] text-[15px]"
                  >
                    {years} 年後
                  </text>
                </g>

                <text
                  x={startX}
                  y="286"
                  textAnchor="start"
                  className="font-sans text-[13px] fill-slate-600 font-medium"
                >
                  💡 可直接點擊橫軸來調整預估年數
                </text>

                <text
                  x="845"
                  y="286"
                  textAnchor="end"
                  className="font-serif-tc text-[14px] font-bold fill-ink-950"
                >
                  {years} 年後通膨成長約{' '}
                  <tspan className="fill-[#A6721C]">{growthPercent}%</tspan>{' '}
                  (依近3年平均約2%預估)
                </text>
              </svg>
            </div>

          </div>
        </div>

        {/* 4. 生前契約與保險差異 */}
        <div className="max-w-5xl mx-auto py-6 relative overflow-hidden">
          
          {/* 區塊標題 */}
          <div className="text-center mb-12 space-y-2.5">
            <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-bold">
              PRENEED VS INSURANCE
            </p>
            <h3 className="font-serif-tc text-2xl sm:text-3xl font-bold text-ink-950">
              生前契約與保險差異
            </h3>
            <div className="w-72 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-3" />
            <p className="text-slate-600 font-sans text-xs sm:text-sm md:text-base max-w-3xl mx-auto leading-relaxed pt-2">
              生前契約預先安排身後事與相關費用，避免臨時規劃造成額外支出，相較於壽險，更能確保服務妥善執行，減輕家人負擔。
            </p>
          </div>

          {/* 左右對比雙大卡片容器 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* 左側：生前契約卡片 */}
            <div className="lg:col-span-6 bg-gradient-to-b from-white via-[#fcfbfa] to-[#f5efe6] rounded-3xl p-6 sm:p-8 border border-gold-400/35 shadow-lg relative group transition-all duration-300">
              
              <div className="mb-6 pb-4 border-b border-gold-400/20">
                <div className="flex items-baseline gap-3">
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-11 h-11 rounded-full bg-gold-100/80 border border-gold-400/40 flex items-center justify-center shadow-inner">
                      <ShieldCheck className="w-6 h-6 text-[#C69233]" />
                    </div>
                    <h4 className="font-serif-tc text-2xl sm:text-3xl font-bold text-ink-950">生前契約</h4>
                  </div>
                  <p className="font-serif-tc text-sm sm:text-base text-gold-700 font-semibold">
                    為了 確定 的事情做準備
                  </p>
                </div>
                {/* 質感線：左深右淺 */}
                <div className="w-full h-1 bg-gradient-to-r from-[#A6721C] via-gold-300 to-transparent mt-3.5 rounded-full" />
              </div>

              {/* 四個同步互動式條列項目 */}
              <div className="space-y-3.5">
                {preneedItems.map((item, idx) => {
                  const ItemIcon = item.icon;
                  const isSelected = activeIdx === idx;
                  return (
                    <div 
                      key={idx} 
                      onClick={() => setActiveIdx(idx)}
                      onMouseEnter={() => setActiveIdx(idx)}
                      className={`rounded-xl p-4 text-ink-950 flex items-center gap-3.5 shadow-sm transition-all duration-300 cursor-pointer select-none border ${
                        isSelected 
                          ? 'scale-[1.02] ring-2 ring-gold-500 shadow-md bg-gradient-to-r from-[#fff9ef] to-[#f4ebd9]' 
                          : 'opacity-95 hover:opacity-100 bg-gradient-to-r from-[#fdfbf7] to-[#f2e7d5]'
                      }`}
                      style={{
                        borderColor: 'rgba(212, 175, 55, 0.45)',
                      }}
                    >
                      <div className="w-9 h-9 rounded-lg bg-gold-200/60 border border-gold-400/40 flex items-center justify-center shrink-0">
                        <ItemIcon className="w-5 h-5 text-gold-700" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-serif-tc font-bold text-base sm:text-lg text-ink-950">{item.title}</h5>
                        {isSelected && (
                          <p className="text-sm sm:text-base text-slate-700 mt-1.5 animate-fadeIn leading-relaxed font-normal">{item.desc}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* 右側：保險卡片 */}
            <div className="lg:col-span-6 bg-gradient-to-b from-white via-[#fcfbfa] to-[#f5efe6] rounded-3xl p-6 sm:p-8 border border-gold-400/35 shadow-lg relative group transition-all duration-300">
              
              <div className="mb-6 pb-4 border-b border-gold-400/20">
                <div className="flex items-baseline gap-3">
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-11 h-11 rounded-full bg-gold-100/80 border border-gold-400/40 flex items-center justify-center shadow-inner">
                      <FileText className="w-6 h-6 text-[#A6721C]" />
                    </div>
                    <h4 className="font-serif-tc text-2xl sm:text-3xl font-bold text-ink-950">保險</h4>
                  </div>
                  <p className="font-serif-tc text-sm sm:text-base text-gold-700 font-semibold">
                    為了 不確定 的風險做準備
                  </p>
                </div>
                {/* 質感線：左深右淺 */}
                <div className="w-full h-1 bg-gradient-to-r from-[#A6721C] via-gold-300 to-transparent mt-3.5 rounded-full" />
              </div>

              {/* 四個同步互動式條列項目 */}
              <div className="space-y-3.5">
                {insuranceItems.map((item, idx) => {
                  const ItemIcon = item.icon;
                  const isSelected = activeIdx === idx;
                  return (
                    <div 
                      key={idx} 
                      onClick={() => setActiveIdx(idx)}
                      onMouseEnter={() => setActiveIdx(idx)}
                      className={`rounded-xl p-4 text-ink-950 flex items-center gap-3.5 shadow-sm transition-all duration-300 cursor-pointer select-none border ${
                        isSelected 
                          ? 'scale-[1.02] ring-2 ring-gold-500 shadow-md bg-gradient-to-r from-[#fff9ef] to-[#f4ebd9]' 
                          : 'opacity-95 hover:opacity-100 bg-gradient-to-r from-[#fdfbf7] to-[#f2e7d5]'
                      }`}
                      style={{
                        borderColor: 'rgba(212, 175, 55, 0.45)',
                      }}
                    >
                      <div className="w-9 h-9 rounded-lg bg-gold-200/60 border border-gold-400/40 flex items-center justify-center shrink-0">
                        <ItemIcon className="w-5 h-5 text-gold-700" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-serif-tc font-bold text-base sm:text-lg text-ink-950">{item.title}</h5>
                        {isSelected && (
                          <p className="text-sm sm:text-base text-slate-700 mt-1.5 animate-fadeIn leading-relaxed font-normal">{item.desc}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
