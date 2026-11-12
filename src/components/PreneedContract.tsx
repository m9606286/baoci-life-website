import React, { useState } from 'react';
import { PiggyBank, Lock, UserCheck } from 'lucide-react';
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

// 「現在規劃的好處」三張卡片資料（改為單一沉穩立體金棕色調，符合網站風格）
const benefitBubbles = [
  {
    id: 0,
    year: '115年',
    yearLabel: '現在即刻規劃',
    icon: PiggyBank,
    lines: ['省錢', '省事', '省麻煩'],
    detailTitle: '115年｜趁早預約享優惠，一次解決身後煩憂',
    detailDesc: '現在用最實惠的預約價格完成規劃，免去日後家人臨時奔波比價與籌措資金的慌亂。',
    inflationNote: '基準期費用：價格最親民',
    factor: '1.00 倍',
  },
  {
    id: 1,
    year: '135年',
    yearLabel: '20年後趨勢',
    icon: Lock,
    lines: ['鎖定價格', '抗通膨'],
    detailTitle: '135年｜20年後物價增長，寶慈契約依然不加價',
    detailDesc: '以近三年平均約 2% 通膨計算，20 年後市場殯葬費用約成長至 1.49 倍，生前契約為您穩穩鎖住現價。',
    inflationNote: '市場費用預估成長約 1.49 倍',
    factor: '1.49 倍',
  },
  {
    id: 2,
    year: '155年',
    yearLabel: '40年後趨勢',
    icon: UserCheck,
    lines: ['自己選擇想要', '的方式'],
    detailTitle: '155年｜40年後長遠保障，自主決定謝幕儀式',
    detailDesc: '以近三年平均約 2% 通膨計算，40 年後市場費用約成長至 2.21 倍，長遠抗通膨效益更為顯著。',
    inflationNote: '市場費用預估成長約 2.21 倍',
    factor: '2.21 倍',
  },
];

export default function PreneedConcept() {
  const revealResult = useReveal<HTMLDivElement>();
  const ref = Array.isArray(revealResult) ? revealResult[0] : revealResult;

  const [activeIndex, setActiveIndex] = useState<number>(1);

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

        {/* 3. 下方獨立區塊：享受預約優惠價，鎖定價格抗通膨（精簡化、單一立體色調、尺寸放小） */}
        <div 
          className="max-w-5xl mx-auto rounded-3xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300 reveal reveal-delay-4"
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #fdfcfb 70%, #faf6f0 100%)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            boxShadow: '0 8px 25px -5px rgba(212, 175, 55, 0.12), 0 3px 10px rgba(0, 0, 0, 0.03)',
          }}
        >
          {/* 區塊標題：上方英文、下方質感線、完全置中、無勾勾 */}
          <div className="text-center mb-8 space-y-2">
            <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-bold">
              PRENEED BENEFIT
            </p>
            <h3 className="font-serif-tc text-2xl sm:text-3xl font-bold text-ink-950">
              享受預約優惠價，鎖定價格抗通膨
            </h3>
            <div className="w-48 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-3" />
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto pt-1 leading-relaxed">
              喪葬費用隨通膨逐年增加，生前契約用現在的價格鎖定未來必定發生的支出，理性省下龐大開銷。
            </p>
          </div>

          {/* 資訊圖表主體：符合網站方格的精緻尺寸 */}
          <div className="bg-ivory-100/70 rounded-2xl p-4 sm:p-6 border border-gold-400/20">
            
            {/* 圖表左上小標題 */}
            <div className="mb-6">
              <h4 className="font-serif-tc text-xl sm:text-2xl font-bold text-ink-900 inline-block">
                現在規劃的好處
              </h4>
              <div className="w-40 h-[2.5px] bg-gradient-to-r from-[#A6721C] via-gold-400 to-transparent rounded-full mt-1.5" />
            </div>

            {/* 上排：三個對話框式核心卡片（改用網站一致的沉穩金棕單一立體色調） */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {benefitBubbles.map((item, idx) => {
                const IconComp = item.icon;
                const isSelected = activeIndex === idx;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className={`relative rounded-xl p-4 text-white cursor-pointer transition-all duration-300 select-none ${
                      isSelected
                        ? 'shadow-lg ring-2 ring-gold-500 -translate-y-1'
                        : 'opacity-90 hover:opacity-100 shadow-sm'
                    }`}
                    style={{
                      background: 'linear-gradient(135deg, #A6721C 0%, #7A5212 100%)',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0 border border-white/20">
                        <IconComp className="w-5 h-5 text-ivory-100" />
                      </div>
                      <div className="font-serif-tc font-bold text-base sm:text-lg leading-snug text-ivory-50">
                        {item.lines.map((line, lIdx) => (
                          <div key={lIdx}>{line}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 下排：SVG 雙線抗通膨趨勢座標圖（近三年平均 2% 複利計算） */}
            <div className="w-full overflow-x-auto pt-2">
              <div className="min-w-[600px]">
                <svg viewBox="0 0 820 280" className="w-full h-auto overflow-visible">
                  <defs>
                    <marker id="arrowGold" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
                      <polygon points="0 0, 8 3, 0 6" fill="#A6721C" />
                    </marker>
                    <marker id="arrowDark" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
                      <polygon points="0 0, 8 3, 0 6" fill="#43474d" />
                    </marker>
                    <linearGradient id="savedAreaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#A6721C" stopOpacity="0.05" />
                      <stop offset="100%" stopColor="#A6721C" stopOpacity="0.18" />
                    </linearGradient>
                  </defs>

                  {/* 垂直輔助虛線 */}
                  {[
                    { x: 135, idx: 0 },
                    { x: 375, idx: 1 },
                    { x: 625, idx: 2 },
                  ].map((col) => (
                    <line
                      key={col.idx}
                      x1={col.x}
                      y1={10}
                      x2={col.x}
                      y2={230}
                      stroke={activeIndex === col.idx ? '#C69233' : '#d8cbbe'}
                      strokeWidth={activeIndex === col.idx ? '2' : '1'}
                      strokeDasharray="3 3"
                    />
                  ))}

                  {/* 差額填充區 */}
                  <polygon
                    points="135,155 775,95 775,195 135,195"
                    fill="url(#savedAreaGrad)"
                  />

                  {/* 縱軸 (Y軸) */}
                  <line
                    x1="135"
                    y1="230"
                    x2="135"
                    y2="20"
                    stroke="#43474d"
                    strokeWidth="2"
                    markerEnd="url(#arrowDark)"
                  />

                  {/* 橫軸 (X軸) */}
                  <line
                    x1="135"
                    y1="230"
                    x2="795"
                    y2="230"
                    stroke="#43474d"
                    strokeWidth="2"
                    markerEnd="url(#arrowDark)"
                  />

                  {/* 軸標籤 */}
                  <text x="122" y="155" textAnchor="end" className="font-serif-tc font-bold fill-[#A6721C] text-[14px]">
                    殯葬費用
                  </text>
                  <text x="122" y="200" textAnchor="end" className="font-serif-tc font-bold fill-[#43474d] text-[14px]">
                    預購生前契約
                  </text>

                  {/* 上方斜線：通貨膨脹費用趨勢 (約2%) */}
                  <line
                    x1="135"
                    y1="155"
                    x2="775"
                    y2="95"
                    stroke="#A6721C"
                    strokeWidth="3"
                    strokeDasharray="8 6"
                    markerEnd="url(#arrowGold)"
                  />
                  <text
                    x="455"
                    y="112"
                    textAnchor="middle"
                    transform="rotate(-5.2, 455, 112)"
                    className="font-serif-tc font-semibold fill-[#A6721C] text-[13px] tracking-wide"
                  >
                    因物價與服務成本上漲（近三年平均約2%），殯葬費用將隨時間增加
                  </text>

                  {/* 下方水平線：預購生前契約鎖定價格 */}
                  <line
                    x1="135"
                    y1="195"
                    x2="775"
                    y2="195"
                    stroke="#43474d"
                    strokeWidth="2.5"
                    markerEnd="url(#arrowDark)"
                  />
                  <text
                    x="455"
                    y="185"
                    textAnchor="middle"
                    className="font-serif-tc font-bold fill-[#43474d] text-[14px] tracking-widest"
                  >
                    鎖定價格
                  </text>

                  {/* 互動節點 */}
                  {[
                    { x: 135, topY: 155, year: '115年', idx: 0 },
                    { x: 375, topY: 134, year: '135年', idx: 1 },
                    { x: 625, topY: 111, year: '155年', idx: 2 },
                  ].map((node) => {
                    const isSelected = activeIndex === node.idx;
                    return (
                      <g
                        key={node.idx}
                        onClick={() => setActiveIndex(node.idx)}
                        className="cursor-pointer"
                      >
                        {isSelected && (
                          <line
                            x1={node.x}
                            y1={node.topY}
                            x2={node.x}
                            y2={195}
                            stroke="#A6721C"
                            strokeWidth="2"
                          />
                        )}
                        <circle
                          cx={node.x}
                          cy={node.topY}
                          r={isSelected ? 6 : 4.5}
                          fill="#ffffff"
                          stroke="#A6721C"
                          strokeWidth="2.5"
                        />
                        <circle
                          cx={node.x}
                          cy={195}
                          r={isSelected ? 6 : 4.5}
                          fill="#ffffff"
                          stroke="#43474d"
                          strokeWidth="2.5"
                        />
                        <circle
                          cx={node.x}
                          cy={230}
                          r={isSelected ? 8 : 6}
                          fill="#ffffff"
                          stroke={isSelected ? '#A6721C' : '#856442'}
                          strokeWidth="3"
                        />
                        <text
                          x={node.x}
                          y={258}
                          textAnchor="middle"
                          className={`font-serif-tc font-bold text-[15px] transition-colors ${
                            isSelected ? 'fill-[#A6721C]' : 'fill-[#43474d]'
                          }`}
                        >
                          {node.year}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* 底部動態解說卡片 */}
            <div className="mt-4 bg-white rounded-xl p-3.5 sm:p-4 border border-gold-400/30 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#A6721C]" />
                  <h5 className="font-serif-tc font-bold text-sm sm:text-base text-ink-950">
                    {benefitBubbles[activeIndex].detailTitle}
                  </h5>
                </div>
                <p className="text-xs text-slate-600 pl-4">
                  {benefitBubbles[activeIndex].detailDesc}
                </p>
              </div>
              <div className="shrink-0 sm:text-right pl-4 sm:pl-0">
                <span className="inline-block px-3 py-1 rounded-lg bg-ivory-100 border border-gold-400/30 font-serif-tc text-xs font-bold text-[#7A5212]">
                  {benefitBubbles[activeIndex].inflationNote}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
