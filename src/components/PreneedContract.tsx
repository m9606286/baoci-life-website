import React, { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { PiggyBank, Lock, UserCheck, ShieldCheck, ShieldAlert, Users, RefreshCw, Award, FileCheck, X, Maximize2, TrendingUp, MapPin } from 'lucide-react';
import familyImage from '/core.jpg';
import funeralCostImg from '/台灣平均喪葬費用.jpg';
import planningBenefitsImg from '/規劃的好處.jpg';
import preneedVsInsuranceImg from '/生前契約.jpg';

// 4 大核心保障
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

// 4 點實用優勢列表
const additionalFeatures = [
  '獲得透明公開的服務規格與價格保障',
  '提供彈性優惠的付款方案，減輕分期壓力',
  '契約可自由轉讓，持有人可指定使用對象（不限本人或家人）',
  '專人全程協助導引，為親友留下清晰明瞭的後事指引',
];

// 區域費用數據
const regionalCosts = [
  { region: '北部', cost: '399,580', tagColor: 'bg-[#C69233] text-white' },
  { region: '中部', cost: '371,526', tagColor: 'bg-[#D4A348] text-white' },
  { region: '南部', cost: '359,169', tagColor: 'bg-[#B58128] text-white' },
  { region: '東部', cost: '225,192', tagColor: 'bg-[#8F6317] text-white' },
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
            生前契約是給家人最後的一道保障，也是為自己預先記錄並落實身後事安排的尊榮選擇。
          </p>
        </div>

        {/* 2. 左圖右文：4 大核心保障 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16 reveal reveal-delay-3">
          
          {/* 左側照片 */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl border border-gold-400/30 min-h-[350px] lg:min-h-full group">
            <img
              src={familyImage}
              alt="溫暖陪伴"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-serif-tc text-xl font-bold drop-shadow">預先安排，圓滿無遺憾</p>
              <p className="text-sm text-ivory-100/90 mt-1 drop-shadow">以愛為出發，讓家人多一份安心。</p>
            </div>
          </div>

          {/* 右側：4 大核心保障卡片 */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {coreHighlights.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl p-5 sm:p-6 overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                style={{
                  background: 'linear-gradient(180deg, #ffffff 0%, #fdfcfb 70%, #faf6f0 100%)',
                  border: '1px solid rgba(212, 175, 55, 0.22)',
                  boxShadow: '0 8px 25px -5px rgba(212, 175, 55, 0.1), 0 3px 8px rgba(0, 0, 0, 0.03)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  <h3 className="relative z-10 font-serif-tc text-lg sm:text-xl font-bold text-ink-950 group-hover:text-gold-600 transition-colors duration-300 mb-2 flex items-start gap-1.5">
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
            ))}
          </div>

        </div>

        {/* 3. 新增亮點：生前契約 VS 保險 視覺對比卡片 */}
        <div className="mb-16 reveal reveal-delay-3">
          <div className="text-center mb-8">
            <span className="px-4 py-1.5 rounded-full bg-gold-400/15 border border-gold-400/30 text-gold-700 text-xs sm:text-sm font-bold tracking-widest uppercase">
              STRATEGIC COMPARISON
            </span>
            <h3 className="font-serif-tc text-2xl sm:text-3xl font-bold text-ink-950 mt-2">
              生前契約 VS 保險
            </h3>
            <p className="text-slate-600 text-sm mt-1">為確定發生的身後事做準備，給家人最即時的貼心照料</p>
          </div>

          {/* 互動對比面板 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            
            {/* 中間 VS 徽章 */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-600 text-white font-serif-tc font-bold text-lg items-center justify-center shadow-lg border-2 border-white">
              VS
            </div>

            {/* 左側：生前契約 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-gold-400/40 shadow-xl relative overflow-hidden group hover:border-gold-500 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-100/40 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gold-500/15 text-gold-600 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif-tc text-2xl font-bold text-ink-950">生前契約</h4>
                  <p className="text-xs text-gold-700 font-medium">為了 <span className="font-bold underline decoration-gold-400">確定</span> 的事情做準備</p>
                </div>
              </div>

              <ul className="space-y-3.5 mt-6">
                <li className="flex items-center gap-3 bg-ivory-50 p-3 rounded-xl border border-gold-200/50">
                  <Users className="w-5 h-5 text-gold-600 shrink-0" />
                  <span className="font-bold text-ink-900 text-sm sm:text-base">不分老少</span>
                  <span className="text-xs text-slate-500 ml-auto">不受年齡健康影響</span>
                </li>
                <li className="flex items-center gap-3 bg-ivory-50 p-3 rounded-xl border border-gold-200/50">
                  <RefreshCw className="w-5 h-5 text-gold-600 shrink-0" />
                  <span className="font-bold text-ink-900 text-sm sm:text-base">自由轉讓</span>
                  <span className="text-xs text-slate-500 ml-auto">可指定家人使用</span>
                </li>
                <li className="flex items-center gap-3 bg-ivory-50 p-3 rounded-xl border border-gold-200/50">
                  <Award className="w-5 h-5 text-gold-600 shrink-0" />
                  <span className="font-bold text-ink-900 text-sm sm:text-base">專業服務</span>
                  <span className="text-xs text-slate-500 ml-auto">全程專人陪伴與導引</span>
                </li>
                <li className="flex items-center gap-3 bg-gold-500 text-white p-3.5 rounded-xl shadow-md">
                  <FileCheck className="w-5 h-5 shrink-0" />
                  <span className="font-bold text-sm sm:text-base">確定金額的喪葬服務</span>
                </li>
              </ul>

              <button 
                onClick={() => setActiveModalImage({ src: preneedVsInsuranceImg, title: '生前契約 VS 保險比較圖表' })}
                className="mt-6 w-full py-2.5 rounded-xl bg-ivory-100 hover:bg-gold-50 border border-gold-300 text-xs text-gold-700 font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>點擊放大檢視原廠圖表</span>
              </button>
            </div>

            {/* 右側：保險 */}
            <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-200 text-slate-600 flex items-center justify-center">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif-tc text-2xl font-bold text-slate-800">保險</h4>
                  <p className="text-xs text-slate-500 font-medium">為了 <span className="font-bold underline">不確定</span> 的風險做準備</p>
                </div>
              </div>

              <ul className="space-y-3.5 mt-6">
                <li className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200">
                  <span className="w-2 h-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-slate-700 text-sm sm:text-base">投保限制</span>
                  <span className="text-xs text-slate-400 ml-auto">視體調與年齡核保</span>
                </li>
                <li className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200">
                  <span className="w-2 h-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-slate-700 text-sm sm:text-base">不可轉讓</span>
                  <span className="text-xs text-slate-400 ml-auto">限被保險人本人</span>
                </li>
                <li className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200">
                  <span className="w-2 h-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-slate-700 text-sm sm:text-base">金錢理賠</span>
                  <span className="text-xs text-slate-400 ml-auto">僅提供現金理賠金</span>
                </li>
                <li className="flex items-center gap-3 bg-slate-200 text-slate-700 p-3.5 rounded-xl">
                  <span className="font-medium text-sm sm:text-base">遺屬的生活費用保障</span>
                </li>
              </ul>

              <div className="mt-6 pt-3 text-center text-xs text-slate-400">
                兩者互相搭配，能達到最完善的終極防護網
              </div>
            </div>

          </div>
        </div>

        {/* 4. 新增亮點：抗通膨與喪葬費用分析卡片 */}
        <div className="mb-16 reveal reveal-delay-4">
          <div className="bg-gradient-to-br from-white via-ivory-50 to-gold-50/40 rounded-3xl p-6 sm:p-10 border border-gold-400/30 shadow-xl">
            
            <div className="text-center mb-8">
              <span className="px-4 py-1.5 rounded-full bg-gold-400/15 border border-gold-400/30 text-gold-700 text-xs sm:text-sm font-bold tracking-widest uppercase">
                INFLATION & COST ANALYSIS
              </span>
              <h3 className="font-serif-tc text-2xl sm:text-3xl font-bold text-ink-950 mt-2">
                為什麼現在規劃最划算？
              </h3>
              <p className="text-slate-600 text-sm mt-1">抗通膨與全台喪葬費用數據大解密</p>
            </div>

            {/* 數據切片：兩大重點視覺 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* 亮點 1：全台喪葬費用 */}
              <div className="bg-white rounded-2xl p-6 border border-gold-300/40 shadow-sm relative overflow-hidden group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gold-600" />
                    <h4 className="font-serif-tc text-lg font-bold text-ink-950">全台平均喪葬費用</h4>
                  </div>
                  <span className="text-[11px] text-slate-400">資料來源：內政部主計處</span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {regionalCosts.map((item, i) => (
                    <div key={i} className="p-3 rounded-xl bg-ivory-50 border border-gold-200/50 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-600">{item.region}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${item.tagColor}`}>平均</span>
                      </div>
                      <p className="font-serif-tc text-lg font-bold text-ink-950 mt-1">
                        ${item.cost} <span className="text-xs font-normal text-slate-500">元</span>
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-slate-500 leading-relaxed bg-amber-50/60 p-2.5 rounded-lg border border-amber-200/40">
                  註：上述金額為一般喪葬平均開銷，且未包含塔位與土葬費用。
                </p>

                <button 
                  onClick={() => setActiveModalImage({ src: funeralCostImg, title: '台灣平均喪葬費用圖表' })}
                  className="mt-4 w-full py-2 rounded-xl bg-ivory-100 hover:bg-gold-50 border border-gold-300 text-xs text-gold-700 font-bold flex items-center justify-center gap-1 transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>檢視完整全台費用圖表</span>
                </button>
              </div>

              {/* 亮點 2：現在規劃的好處與抗通膨趨勢 */}
              <div className="bg-white rounded-2xl p-6 border border-gold-300/40 shadow-sm relative overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-gold-600" />
                  <h4 className="font-serif-tc text-lg font-bold text-ink-950">鎖定價格 ‧ 完美抗通膨</h4>
                </div>

                <p className="text-xs text-slate-600 mb-4">
                  殯葬費用平均每年以約 <span className="font-bold text-red-600">5%</span> 隨通貨膨脹持續遞增。透過生前契約，用現在的價格鎖定未來的服務開銷：
                </p>

                {/* 3 大訴求標籤 */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-3 rounded-xl text-center shadow-sm">
                    <PiggyBank className="w-5 h-5 mx-auto mb-1 opacity-90" />
                    <p className="font-bold text-xs">省錢 省事</p>
                    <p className="text-[10px] opacity-80">省麻煩</p>
                  </div>
                  <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white p-3 rounded-xl text-center shadow-sm">
                    <Lock className="w-5 h-5 mx-auto mb-1 opacity-90" />
                    <p className="font-bold text-xs">鎖定價格</p>
                    <p className="text-[10px] opacity-80">抗通膨</p>
                  </div>
                  <div className="bg-gradient-to-br from-amber-700 to-amber-800 text-white p-3 rounded-xl text-center shadow-sm">
                    <UserCheck className="w-5 h-5 mx-auto mb-1 opacity-90" />
                    <p className="font-bold text-xs">自主選擇</p>
                    <p className="text-[10px] opacity-80">理想方式</p>
                  </div>
                </div>

                <div className="p-3 bg-ivory-100 rounded-xl border border-gold-200 text-xs text-slate-700 leading-relaxed">
                  <span className="font-bold text-gold-700">專家建議：</span>提早做資產與身後事規劃，不僅能減輕子女經濟重擔，更是尊重自己意願的最佳體現。
                </div>

                <button 
                  onClick={() => setActiveModalImage({ src: planningBenefitsImg, title: '現在規劃的好處與通膨趨勢圖' })}
                  className="mt-4 w-full py-2 rounded-xl bg-ivory-100 hover:bg-gold-50 border border-gold-300 text-xs text-gold-700 font-bold flex items-center justify-center gap-1 transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>檢視通膨趨勢曲線圖表</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* 5. 底部優勢條列大卡片 */}
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

      {/* 圖表彈出放大 Modal */}
      {activeModalImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
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
