import React, { useState } from 'react';
import { PiggyBank, Lock, UserCheck } from 'lucide-react';
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

// 互動式「現在規劃的好處」三張對話框卡片資料
const benefitBubbles = [
  {
    id: 0,
    year: '115年',
    yearLabel: '現在即刻規劃',
    icon: PiggyBank,
    lines: ['省錢', '省事', '省麻煩'],
    bgGradient: 'from-[#d96b38] to-[#c45827]', // 暖橘棕（呼應原圖左側）
    accentColor: '#d96b38',
    detailTitle: '115年｜趁早預約享優惠，一次解決身後煩憂',
    detailDesc: '現在用最實惠的預約價格完成規劃，免去日後家人臨時奔波比價與籌措資金的慌亂。',
    inflationNote: '基準期費用：價格最親民',
  },
  {
    id: 1,
    year: '135年',
    yearLabel: '20年後趨勢',
    icon: Lock,
    lines: ['鎖定價格', '抗通膨'],
    bgGradient: 'from-[#9e7b56] to-[#856442]', // 典雅金棕（呼應原圖中間）
    accentColor: '#9e7b56',
    detailTitle: '135年｜20年後物價翻倍，寶慈契約依然不加價',
    detailDesc: '若以平均每年 5% 通膨計算，20 年後市場殯葬費用已大幅攀升，生前契約為您穩穩鎖住當初的價格。',
    inflationNote: '市場費用預估成長約 2.65 倍',
  },
  {
    id: 2,
    year: '155年',
    yearLabel: '40年後趨勢',
    icon: UserCheck,
    lines: ['自己選擇想要', '的方式'],
    bgGradient: 'from-[#c7645e] to-[#b04f49]', // 溫潤磚紅（呼應原圖右側）
    accentColor: '#c7645e',
    detailTitle: '155年｜自主決定人生謝幕儀式，尊嚴且安心',
    detailDesc: '不受未來高昂物價限制，依然能依照自己生前選定的禮儀規格與宗教儀式執行，圓滿無遺憾。',
    inflationNote: '長期抗通膨效益顯著擴大',
  },
];

export default function PreneedConcept() {
  const revealResult = useReveal<HTMLDivElement>();
  const ref = Array.isArray(revealResult) ? revealResult[0] : revealResult;

  // 目前選中的階段 (0: 115年, 1: 135年, 2: 155年)
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

        {/* 2. 左圖右文：左側「預先安排，圓滿無遺憾」 + 右側 3 個核心方格 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14 reveal reveal-delay-3">
          
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

          {/* 右側：3 大核心保障卡片 */}
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

        {/* 3. 下方獨立區塊：享受預約優惠價，鎖定價格抗通膨（仿原圖結構互動資訊圖表） */}
        <div 
          className="rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden transition-all duration-300 reveal reveal-delay-4"
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #fdfcfb 70%, #faf6f0 100%)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            boxShadow: '0 8px 25px -5px rgba(212, 175, 55, 0.12), 0 3px 10px rgba(0, 0, 0, 0.03)',
          }}
        >
          {/* 區塊標題與副標 */}
          <div className="mb-8 sm:mb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gold-400/25 pb-5">
              <div>
                <h3 className="font-serif-tc text-2xl sm:text-3xl font-bold text-ink-950 flex items-center gap-2">
                  <img 
                    src="/v.jpg" 
                    alt="勾勾" 
                    className="h-6 w-auto object-contain shrink-0" 
                  />
                  <span>享受預約優惠價，鎖定價格抗通膨</span>
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                  喪葬費用隨通膨逐年增加，生前契約用現在的價格鎖定未來必定發生的支出，理性省下龐大開銷。
                </p>
              </div>
              <span className="text-xs font-medium text-gold-700 bg-gold-100/60 px-3.5 py-1.5 rounded-full self-start md:self-auto shrink-0">
                點擊下方卡片或年份查看抗通膨效益
              </span>
            </div>
          </div>

          {/* 資訊圖表主體：對齊「現在規劃的好處」排版 */}
          <div className="bg-ivory-100/70 rounded-2xl p-5 sm:p-8 border border-gold-400/20">
            
            {/* 圖表左上標題（呼應原圖「現在規劃的好處」與底線） */}
            <div className="mb-8">
              <h4 className="font-serif-tc text-2xl sm:text-3xl font-bold text-[#4a3625] inline-block">
                現在規劃的好處
              </h4>
              <div className="w-56 sm:w-64 h-[3px] bg-gradient-to-r from-[#d96b38] via-gold-500 to-transparent rounded-full mt-2" />
            </div>

            {/* 上排：三個對話框式核心卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:px-10 mb-6">
              {benefitBubbles.map((item, idx) => {
                const IconComp = item.icon;
                const isSelected = activeIndex === idx;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className={`relative rounded-2xl p-5 sm:p-6 text-white bg-gradient-to-br ${item.bgGradient} cursor-pointer transition-all duration-300 select-none ${
                      isSelected
                        ? 'scale-[1.03] shadow-xl ring-4 ring-gold-400/40 -translate-y-1'
                        : 'opacity-90 hover:opacity-100 hover:-translate-y-0.5 shadow-md'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* 左側白色圓形圖示 */}
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center shrink-0 shadow-inner">
                        <IconComp className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: item.accentColor }} />
                      </div>
                      {/* 右側大字標題 */}
                      <div className="font-serif-tc font-bold text-lg sm:text-xl leading-snug tracking-wide">
                        {item.lines.map((line, lIdx) => (
                          <div key={lIdx}>{line}</div>
                        ))}
                      </div>
                    </div>

                    {/* 對話框下方尖角三角形（呼應原圖造型） */}
                    <div
                      className="hidden md:block absolute -bottom-2.5 left-10 w-5 h-5 rotate-45"
                      style={{ backgroundColor: item.accentColor }}
                    />
                  </div>
                );
              })}
            </div>

            {/* 下排：SVG 雙線抗通膨趨勢座標圖（完整重現原圖視覺並加入互動節點） */}
            <div className="w-full overflow-x-auto pt-2">
              <div className="min-w-[640px]">
                <svg viewBox="0 0 860 310" className="w-full h-auto overflow-visible">
                  <defs>
                    {/* 紅色虛線箭頭 */}
                    <marker id="arrowOrange" markerWidth="10" markerHeight="10" refX="7" refY="3.5" orient="auto">
                      <polygon points="0 0, 9 3.5, 0 7" fill="#d96b38" />
                    </marker>
                    {/* 深棕實線箭頭 */}
                    <marker id="arrowBrown" markerWidth="10" markerHeight="10" refX="7" refY="3.5" orient="auto">
                      <polygon points="0 0, 9 3.5, 0 7" fill="#5c4228" />
                    </marker>
                    {/* 省下差額漸層填充 */}
                    <linearGradient id="savedAreaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#d96b38" stopOpacity="0.04" />
                      <stop offset="50%" stopColor="#d96b38" stopOpacity="0.11" />
                      <stop offset="100%" stopColor="#d96b38" stopOpacity="0.20" />
                    </linearGradient>
                  </defs>

                  {/* 垂直輔助虛線：對應 115年、135年、155年 */}
                  {[
                    { x: 145, idx: 0 },
                    { x: 385, idx: 1 },
                    { x: 645, idx: 2 },
                  ].map((col) => (
                    <line
                      key={col.idx}
                      x1={col.x}
                      y1={10}
                      x2={col.x}
                      y2={255}
                      stroke={activeIndex === col.idx ? '#c69233' : '#d6c3ad'}
                      strokeWidth={activeIndex === col.idx ? '2' : '1.5'}
                      strokeDasharray="4 4"
                    />
                  ))}

                  {/* 兩條線之間的「通膨差額」高亮區域 */}
                  <polygon
                    points="145,168 815,82 815,212 145,212"
                    fill="url(#savedAreaGrad)"
                  />

                  {/* Y 軸垂直主軸線 */}
                  <line
                    x1="145"
                    y1="255"
                    x2="145"
                    y2="25"
                    stroke="#5c4228"
                    strokeWidth="2.5"
                    markerEnd="url(#arrowBrown)"
                  />

                  {/* X 軸水平時間軸線 */}
                  <line
                    x1="145"
                    y1="255"
                    x2="835"
                    y2="255"
                    stroke="#5c4228"
                    strokeWidth="2.5"
                    markerEnd="url(#arrowBrown)"
                  />

                  {/* 左側標籤文字：殯葬費用 & 寶慈商品 */}
                  <text x="128" y="172" textAnchor="end" className="font-serif-tc font-bold fill-[#d96b38] text-[16px]">
                    殯葬費用
                  </text>
                  <text x="128" y="217" textAnchor="end" className="font-serif-tc font-bold fill-[#5c4228] text-[16px]">
                    寶慈商品
                  </text>

                  {/* 上方斜線：通貨膨脹費用趨勢（虛線） */}
                  <line
                    x1="145"
                    y1="168"
                    x2="815"
                    y2="82"
                    stroke="#d96b38"
                    strokeWidth="3.5"
                    strokeDasharray="10 7"
                    markerEnd="url(#arrowOrange)"
                  />

                  {/* 斜線上方的說明文字（沿著斜線角度微傾） */}
                  <text
                    x="485"
                    y="112"
                    textAnchor="middle"
                    transform="rotate(-7.3, 485, 112)"
                    className="font-serif-tc font-bold fill-[#d96b38] text-[15px] tracking-wide"
                  >
                    因為通貨膨脹（平均每年5%），殯葬費用將隨時間而增加
                  </text>

                  {/* 下方水平線：寶慈商品鎖定價格（實線） */}
                  <line
                    x1="145"
                    y1="212"
                    x2="815"
                    y2="212"
                    stroke="#5c4228"
                    strokeWidth="3"
                    markerEnd="url(#arrowBrown)"
                  />
                  <text
                    x="485"
                    y="198"
                    textAnchor="middle"
                    className="font-serif-tc font-bold fill-[#4a3625] text-[16px] tracking-widest"
                  >
                    鎖定價格
                  </text>

                  {/* 互動式時間節點（115年、135年、155年） */}
                  {[
                    { x: 145, topY: 168, year: '115年', idx: 0 },
                    { x: 385, topY: 137, year: '135年', idx: 1 },
                    { x: 645, topY: 104, year: '155年', idx: 2 },
                  ].map((node) => {
                    const isSelected = activeIndex === node.idx;
                    return (
                      <g
                        key={node.idx}
                        onClick={() => setActiveIndex(node.idx)}
                        className="cursor-pointer"
                      >
                        {/* 差額垂直連接線（選中時顯示） */}
                        {isSelected && (
                          <line
                            x1={node.x}
                            y1={node.topY}
                            x2={node.x}
                            y2={212}
                            stroke="#d96b38"
                            strokeWidth="2.5"
                          />
                        )}

                        {/* 通膨曲線上的圓點 */}
                        <circle
                          cx={node.x}
                          cy={node.topY}
                          r={isSelected ? 7 : 5}
                          fill="#ffffff"
                          stroke="#d96b38"
                          strokeWidth="3"
                        />

                        {/* 鎖定價格線上的圓點 */}
                        <circle
                          cx={node.x}
                          cy={212}
                          r={isSelected ? 7 : 5}
                          fill="#ffffff"
                          stroke="#5c4228"
                          strokeWidth="3"
                        />

                        {/* X 軸上的圓圈節點 */}
                        <circle
                          cx={node.x}
                          cy={255}
                          r={isSelected ? 9 : 7}
                          fill="#ffffff"
                          stroke={isSelected ? '#d96b38' : '#856442'}
                          strokeWidth="3.5"
                        />

                        {/* 年份文字 */}
                        <text
                          x={node.x}
                          y={288}
                          textAnchor="middle"
                          className={`font-serif-tc font-bold text-[18px] transition-colors ${
                            isSelected ? 'fill-[#d96b38]' : 'fill-[#4a3625]'
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

            {/* 底部動態解說卡片：隨目前選中的年份即時更新說明 */}
            <div className="mt-4 bg-white rounded-xl p-4 sm:p-5 border border-gold-400/30 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all duration-300">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span
                    className="inline-block w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: benefitBubbles[activeIndex].accentColor }}
                  />
                  <h5 className="font-serif-tc font-bold text-base sm:text-lg text-ink-950">
                    {benefitBubbles[activeIndex].detailTitle}
                  </h5>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 pl-4.5">
                  {benefitBubbles[activeIndex].detailDesc}
                </p>
              </div>
              <div className="shrink-0 sm:text-right pl-4.5 sm:pl-0">
                <span className="inline-block px-3.5 py-1.5 rounded-lg bg-ivory-100 border border-gold-400/30 font-serif-tc text-xs sm:text-sm font-bold text-[#856442]">
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
