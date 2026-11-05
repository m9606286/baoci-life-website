import React from 'react';
import { useReveal } from '@/hooks/useReveal';
import { ExternalLink, Download, Landmark, Shield, Eye, Scale, HeartHandshake } from 'lucide-react';

export default function Trust() {
  const revealResult = useReveal<HTMLDivElement>();
  const ref = Array.isArray(revealResult) ? revealResult[0] : revealResult;

  // 112, 113, 114 年結算報告清單
  const settlementReports = [
    {
      year: '112年',
      url: '/112年度信託財產結算報告.pdf',
    },
    {
      year: '113年',
      url: '/113年度信託財產結算報告.pdf',
    },
    {
      year: '114年',
      url: '/114年度信託財產結算報告.pdf',
    },
  ];

  return (
    <section id="trust" className="pt-2 pb-24 lg:pt-4 lg:pb-32 bg-ivory-100 relative overflow-hidden -mt-6 lg:-mt-10">
      <div ref={ref} className="max-w-7xl mx-auto px-6 relative">
        
        {/* Header 標題區 */}
        <div className="text-center mb-16">
          <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-bold reveal">
            TRUST
          </p>
          <h2 className="font-serif-tc text-3xl md:text-4xl lg:text-5xl font-bold text-ink-800 mt-2 reveal reveal-delay-1">
            信託公開
          </h2>
          <div className="gold-divider w-32 mx-auto mt-4 reveal reveal-delay-2" />
          
          <p className="text-ink-500 text-sm sm:text-base mt-4 mx-auto reveal reveal-delay-3 max-w-2xl leading-relaxed">
            依殯葬管理條例第51條，預收之生前契約款項，依法75%交由「京城銀行」信託管理。
          </p>
        </div>

        {/* 左右分欄主體區塊 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch reveal reveal-delay-3">
          
          {/* 左側：精緻信賴氛圍與企業承諾欄位 (5欄) */}
          <div className="lg:col-span-5 rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col justify-between relative overflow-hidden group border border-gold-400/40 bg-white">
            
            {/* 背景圖片層 */}
            <div 
              className="absolute inset-0 bg-[url('/hand.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 z-0" 
            />
            {/* 柔和的亮色漸層遮罩 */}
            <div className="absolute inset-0 bg-gradient-to-t from-ivory-100/95 via-ivory-100/70 to-ivory-50/40 z-0" />

            {/* 內容區塊 */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4 group/lefttitle">
                <div className="w-10 h-10 rounded-xl bg-gold-400/15 border border-gold-400/35 group-hover/lefttitle:bg-gold-500 group-hover/lefttitle:border-gold-500 transition-colors duration-300 flex items-center justify-center shrink-0">
                  <Landmark className="w-5 h-5 text-gold-600 group-hover/lefttitle:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-serif-tc text-2xl sm:text-3xl font-bold text-ink-900">
                  嚴謹信託 專款專用
                </h3>
              </div>

              <p className="text-ink-700 text-sm sm:text-base leading-relaxed mb-6 font-['Microsoft_JhengHei']">
                寶慈生命事業秉持最高誠信原則與法規遵循，將每位客戶的託付妥善交付京城銀行信託管理，確保資產安全與履約承諾。
              </p>
            </div>

            {/* 下方共 4 項專業承諾點 */}
            <div className="relative z-10 space-y-4 pt-6 border-t border-gold-300/40">
              
              {/* 1. 保障信託管理 */}
              <div className="flex items-center gap-3 text-ink-900 group/item1 cursor-pointer">
                <div className="w-9 h-9 rounded-xl bg-gold-400/15 border border-gold-400/35 group-hover/item1:bg-gold-500 group-hover/item1:border-gold-500 transition-colors duration-300 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-gold-600 group-hover/item1:text-white transition-colors duration-300" />
                </div>
                <span className="font-serif-tc text-lg sm:text-xl font-bold text-ink-900 group-hover/item1:text-gold-600 transition-colors duration-300">
                  保障信託管理
                </span>
              </div>

              {/* 2. 信託透明公開 */}
              <div className="flex items-center gap-3 text-ink-900 group/item2 cursor-pointer">
                <div className="w-9 h-9 rounded-xl bg-gold-400/15 border border-gold-400/35 group-hover/item2:bg-gold-500 group-hover/item2:border-gold-500 transition-colors duration-300 flex items-center justify-center shrink-0">
                  <Eye className="w-5 h-5 text-gold-600 group-hover/item2:text-white transition-colors duration-300" />
                </div>
                <span className="font-serif-tc text-lg sm:text-xl font-bold text-ink-900 group-hover/item2:text-gold-600 transition-colors duration-300">
                  信託透明公開
                </span>
              </div>

              {/* 3. 法規遵循保障 */}
              <div className="flex items-center gap-3 text-ink-900 group/item3 cursor-pointer">
                <div className="w-9 h-9 rounded-xl bg-gold-400/15 border border-gold-400/30 group-hover/item3:bg-gold-500 group-hover/item3:border-gold-500 transition-colors duration-300 flex items-center justify-center shrink-0">
                  <Scale className="w-5 h-5 text-gold-600 group-hover/item3:text-white transition-colors duration-300" />
                </div>
                <span className="font-serif-tc text-lg sm:text-xl font-bold text-ink-900 group-hover/item3:text-gold-600 transition-colors duration-300">
                  法規遵循保障
                </span>
              </div>

              {/* 4. 履約完全保障 */}
              <div className="flex items-center gap-3 text-ink-900 group/item4 cursor-pointer">
                <div className="w-9 h-9 rounded-xl bg-gold-400/15 border border-gold-400/30 group-hover/item4:bg-gold-500 group-hover/item4:border-gold-500 transition-colors duration-300 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5 text-gold-600 group-hover/item4:text-white transition-colors duration-300" />
                </div>
                <span className="font-serif-tc text-lg sm:text-xl font-bold text-ink-900 group-hover/item4:text-gold-600 transition-colors duration-300">
                  履約完全保障
                </span>
              </div>

            </div>
          </div>

          {/* 右側：信託相關文件與查詢按鈕區塊 (7欄) */}
          <div className="lg:col-span-7 rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col justify-between border border-gold-400/40 bg-gradient-to-br from-white/95 via-ivory-50/90 to-gold-100/40 relative overflow-hidden">
            
            {/* 內容主體 */}
            <div className="relative z-10">
              
              {/* 上半部：依圖片配置（左側「保證 信託」、中間圓形比例圖、右側兩個按鈕） */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-8">
                
                {/* 左側：「保證 信託」文字 */}
                <div className="sm:col-span-3">
                  <h3 className="font-serif-tc text-2xl sm:text-3xl font-bold text-ink-950 leading-tight">
                    保證<br />信託
                  </h3>
                </div>

                {/* 中間：精緻圓形比例圖（已修正 75% 比例與圓潤線條動畫） */}
                <div className="sm:col-span-3 flex justify-center">
                  <div className="relative w-24 h-24 shrink-0 flex items-center justify-center filter drop-shadow-[0_4px_6px_rgba(212,175,55,0.3)]">
                    <style>{`
                      @keyframes ringProgress {
                        0% { stroke-dasharray: 0, 264; }
                        100% { stroke-dasharray: 198, 264; }
                      }
                      .animated-ring {
                        animation: ringProgress 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                      }
                    `}</style>
                    <svg className="w-full h-full transform -rotate-90 overflow-visible" viewBox="0 0 100 100">
                      {/* 背景底圈：完美正圓 (r=42, 周長約 264) */}
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        className="text-gold-200/60"
                        strokeWidth="10"
                        stroke="currentColor"
                        fill="none"
                      />
                      {/* 75% 正確比例環形動畫 (198 / 264 = 75%) */}
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        className="text-gold-600 animated-ring"
                        strokeWidth="10"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        strokeDasharray="264"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="font-serif-tc font-bold text-ink-950 text-lg drop-shadow-xs">75%</span>
                    </div>
                  </div>
                </div>

                {/* 右側：兩個縮短並置中的按鈕 */}
                <div className="sm:col-span-6 flex flex-col gap-3">
                  <a
                    href="/生前契約履約保障信託契約書.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-2xl bg-white/90 hover:bg-gold-500 text-ink-800 hover:text-white border border-ivory-300 hover:border-gold-400 font-medium text-sm transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group/btn"
                  >
                    <span className="font-serif-tc font-semibold text-center">履約保障信託契約書</span>
                    <Download className="w-4 h-4 text-gold-600 group-hover/btn:text-white shrink-0 transition-colors" />
                  </a>

                  <a
                    href="https://www.ktb.com.tw/funeral/query"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-2xl bg-white/90 hover:bg-gold-500 text-ink-800 hover:text-white border border-ivory-300 hover:border-gold-400 font-medium text-sm transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group/btn"
                  >
                    <span className="font-serif-tc font-semibold text-center">前往信託查詢系統</span>
                    <ExternalLink className="w-4 h-4 text-gold-600 group-hover/btn:text-white shrink-0 transition-colors" />
                  </a>
                </div>

              </div>
            </div>

            {/* 分隔線 */}
            <div className="w-full h-px bg-gold-300/40 my-4 relative z-10" />

            {/* 下方區塊：照圖片配置（左側標題與 112年、113年、114年方塊並排，下方為財產與收支計算表下載按鈕） */}
            <div className="relative z-10 flex flex-col gap-5">
              
              {/* 第一行：左側「信託財產結算報告」，右側並排 112年、113年、114年 */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                <div className="sm:col-span-5">
                  <h4 className="font-serif-tc text-base sm:text-lg font-bold text-ink-900">
                    信託財產結算報告
                  </h4>
                </div>

                <div className="sm:col-span-7 grid grid-cols-3 gap-2.5">
                  {settlementReports.map((report, idx) => (
                    <a
                      key={idx}
                      href={report.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/card relative rounded-xl py-3 px-2 bg-gradient-to-br from-ivory-50 via-white to-gold-50/60 border border-gold-400/40 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center cursor-pointer overflow-hidden text-center"
                    >
                      <span className="font-serif-tc text-sm sm:text-base font-bold text-gold-600 group-hover/card:text-gold-700 transition-colors">
                        {report.year}
                      </span>
                      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold-500 group-hover/card:w-full transition-all duration-500 ease-out" />
                    </a>
                  ))}
                </div>
              </div>

              {/* 第二行：「信託財產與收支計算表下載按鈕」 */}
              <div>
                <a
                  href="/信託財產目錄與收支計算表.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/card relative rounded-2xl py-3.5 px-6 bg-gradient-to-br from-ivory-50 via-white to-gold-50/60 border border-gold-400/40 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-between cursor-pointer overflow-hidden"
                >
                  <span className="font-serif-tc text-sm sm:text-base font-bold text-ink-900 group-hover/card:text-gold-700 transition-colors">
                    信託財產與收支計算表下載按鈕
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-gold-400/15 text-gold-600 group-hover/card:bg-gold-500 group-hover/card:text-white flex items-center justify-center transition-all shrink-0">
                    <Download className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold-500 group-hover/card:w-full transition-all duration-500 ease-out" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
