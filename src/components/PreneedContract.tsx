import React from 'react';
import { useReveal } from '@/hooks/useReveal';
import familyImage from '/core.jpg';

// 上方 4 大核心保障
const coreHighlights = [
  {
    title: '提前規劃，讓愛更周全',
    desc: '預先規劃禮儀服務與相關事宜，為未來多一份從容，讓家人在面對離別時能安心陪伴、從容道別。',
  },
  {
    title: '享受預約優惠價，鎖定價格抗通膨',
    desc: '喪葬費用隨通膨逐年增加，生前契約用現在的價格鎖定未來必定發生的支出，理性省下龐大開銷。',
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

// 下方 4 點實用優勢列表
const additionalFeatures = [
  '獲得透明公開的服務規格與價格保障',
  '提供彈性優惠的付款方案，減輕分期壓力',
  '契約可自由轉讓，持有人可指定使用對象（不限本人或家人）',
  '專人全程協助導引，為親友留下清晰明瞭的後事指引',
];

export default function PreneedConcept() {
  const revealResult = useReveal<HTMLDivElement>();
  const ref = Array.isArray(revealResult) ? revealResult[0] : revealResult;

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

        {/* 2. 左圖右文：4 大核心保障 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12 reveal reveal-delay-3">
          
          {/* 左側照片 */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl border border-gold-400/30 min-h-[350px] lg:min-h-full group">
            <img
              src={familyImage}
              alt="溫暖陪伴"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-serif-tc text-xl font-bold drop-shadow">預先安排，圓滿無遺憾</p>
              <p className="text-xs text-ivory-100/90 mt-1 drop-shadow">以愛為出發，讓家人多一份安心。</p>
            </div>
          </div>

          {/* 右側：4 大核心保障卡片 */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {coreHighlights.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl p-5 sm:p-6 overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #fcfbfa 50%, #f4ede1 100%)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    boxShadow: '0 10px 30px -5px rgba(212, 175, 55, 0.15), 0 4px 12px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  {/* Hover 微光 */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/60 to-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

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

                    {/* 內文字體 */}
                    <p className="relative z-10 text-sm sm:text-base text-slate-600 leading-relaxed pl-6 sm:pl-7">
                      {item.desc}
                    </p>
                  </div>

                  {/* 卡片底部的金色指示線 (改為 h-[4px]) */}
                  <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />
                </div>
              );
            })}
          </div>

        </div>

        {/* 3. 底部優勢條列 */}
        <div 
          className="rounded-3xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300 reveal reveal-delay-4"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #fcfbfa 50%, #f4ede1 100%)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            boxShadow: '0 10px 30px -5px rgba(212, 175, 55, 0.15), 0 4px 12px rgba(0, 0, 0, 0.04)',
          }}
        >
          <h4 className="font-serif-tc text-xl font-bold text-ink-950 mb-6 text-center">
            生前契約更多權益與特點
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {additionalFeatures.map((feat, idx) => (
              <div 
                key={idx} 
                className="group/item flex items-center gap-2 p-3.5 rounded-xl transition-all duration-300 -translate-y-0 hover:-translate-y-1 hover:bg-gold-50/60 cursor-pointer shadow-xs border border-transparent hover:border-gold-400/30"
              >
                {/* 勾勾圖示 */}
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
    </section>
  );
}
