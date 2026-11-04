import React from 'react';
import { useReveal } from '@/hooks/useReveal';
import { Shield, Clock, TrendingUp, HeartHandshake, CheckCircle2 } from 'lucide-react';
import familyImage from '/core.jpg';

// 上方 4 大核心保障
const coreHighlights = [
  {
    icon: Clock,
    title: '提前規劃，讓愛更周全',
    desc: '預先規劃禮儀服務與相關事宜，為未來多一份從容，讓家人在面對離別時能安心陪伴、從容道別。',
  },
  {
    icon: TrendingUp,
    title: '享受預約優惠價，鎖定價格抗通膨',
    desc: '喪葬費用隨通膨逐年增加，生前契約用現在的價格鎖定未來必定發生的支出，理性省下龐大開銷。',
  },
  {
    icon: HeartHandshake,
    title: '給親愛的家人留愛不留負擔',
    desc: '如同儲蓄與保險般的資產配置，提早準備好自己想要的安排，避免將未來的財務與精神壓力留給家人。',
  },
  {
    icon: Shield,
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
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-300/60 min-h-[350px] lg:min-h-full group">
            <img
              src={familyImage}
              alt="溫暖陪伴"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-serif-tc text-xl font-bold drop-shadow-md">預先安排，圓滿無遺憾</p>
              <p className="text-xs text-ivory-100/90 mt-1 drop-shadow">給家人最深沉的愛與體貼</p>
            </div>
          </div>

          {/* 右側：4 大核心保障卡片 */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {coreHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl p-6 bg-gradient-to-br from-white via-ivory-50/80 to-gold-50/30 backdrop-blur-md border-t border-l border-white/80 border-b border-r border-gold-400/40 shadow-[0_10px_25px_-5px_rgba(212,175,55,0.15),0_8px_10px_-6px_rgba(0,0,0,0.05)] overflow-hidden hover:shadow-[0_20px_35px_-5px_rgba(212,175,55,0.25)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* 立體圖示徽章：未移入時即帶有金屬光澤與立體浮雕感 */}
                    <div className="inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br from-gold-100 via-gold-50 to-white text-gold-600 border border-gold-400/40 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_4px_8px_rgba(212,175,55,0.2)] group-hover:bg-gold-600 group-hover:text-white group-hover:shadow-[0_6px_15px_rgba(212,175,55,0.4)] transition-all duration-300 mb-3">
                      <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    {/* 標題字體 */}
                    <h3 className="font-serif-tc text-lg sm:text-xl font-bold text-ink-950 mb-2">
                      {item.title}
                    </h3>
                    {/* 內文字體 */}
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* 卡片底部的金色指示線 */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300 group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              );
            })}
          </div>

        </div>

        {/* 3. 底部優勢條列 */}
        <div className="bg-gradient-to-br from-white/90 via-ivory-50/80 to-gold-50/20 backdrop-blur-md border-t border-l border-white/80 border-b border-r border-gold-400/40 rounded-3xl p-6 sm:p-8 shadow-[0_12px_30px_-8px_rgba(212,175,55,0.15)] reveal reveal-delay-4">
          <h4 className="font-serif-tc text-xl font-bold text-ink-950 mb-6 text-center">
            生前契約更多權益與特點
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {additionalFeatures.map((feat, idx) => (
              <div 
                key={idx} 
                className="group/item flex items-center gap-3 p-3.5 rounded-xl bg-white/60 border border-gold-300/30 transition-all duration-300 -translate-y-0 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-gold-50/80 hover:to-white hover:border-gold-400/60 cursor-pointer shadow-sm hover:shadow-md"
              >
                {/* 立體勾勾圖示 */}
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-gold-100 to-gold-200/80 text-gold-700 border border-gold-400/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_2px_4px_rgba(212,175,55,0.2)] group-hover/item:bg-gold-600 group-hover/item:text-white flex items-center justify-center shrink-0 transition-all duration-300">
                  <CheckCircle2 className="w-4 h-4" />
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
