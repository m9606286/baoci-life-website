import React from 'react';
import { useReveal } from '@/hooks/useReveal';
import { ExternalLink, ShieldCheck, Download, FileText, Landmark, Scale, HeartHandshake } from 'lucide-react';

export default function Trust() {
  const revealResult = useReveal<HTMLDivElement>();
  const ref = Array.isArray(revealResult) ? revealResult[0] : revealResult;

  // 信託報告與目錄檔案清單
  const trustReports = [
    {
      title: '信託財產目錄與收支計算表',
      url: '/信託財產目錄與收支計算表.pdf',
    },
    {
      title: '112年度信託財產結算報告',
      url: '/112年度信託財產結算報告.pdf',
    },
    {
      title: '113年度信託財產結算報告',
      url: '/113年度信託財產結算報告.pdf',
    },
    {
      title: '114年度信託財產結算報告',
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
          <div className="lg:col-span-5 rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col justify-between relative overflow-hidden group border border-gold-400/40 bg-white min-h-[420px]">
            
            {/* 握手圖片下移至底部 */}
            <div className="absolute -bottom-10 -left-6 right-0 z-0 pointer-events-none opacity-85 transition-transform duration-700 group-hover:scale-105">
              <img 
                src="/hand.png" 
                alt="嚴謹信託" 
                className="w-full h-auto object-cover translate-y-4"
              />
            </div>

            {/* 柔和的亮色漸層遮罩 */}
            <div className="absolute inset-0 bg-gradient-to-t from-ivory-100/90 via-ivory-100/50 to-transparent z-0" />

            {/* 內容區塊 */}
            <div className="relative z-10 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4 group/lefttitle">
                  <div className="w-10 h-10 rounded-xl bg-gold-400/15 border border-gold-400/35 group-hover/lefttitle:bg-gold-600 group-hover/lefttitle:border-gold-600 transition-colors duration-300 flex items-center justify-center shrink-0">
                    <Landmark className="w-5 h-5 text-gold-600 group-hover/lefttitle:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-serif-tc text-2xl sm:text-3xl font-bold text-ink-900">
                    嚴謹信託 專款專用
                  </h3>
                </div>

                <p className="text-ink-700 text-sm sm:text-base leading-relaxed font-['Microsoft_JhengHei']">
                  寶慈生命事業秉持最高誠信原則與法規遵循，將每位客戶的託付妥善交付京城銀行信託管理，確保資產安全與履約承諾。
                </p>
              </div>

              {/* 新增的兩項專業承諾項目（字體放大、圖示質感升級） */}
              <div className="space-y-4 pt-4 border-t border-gold-300/40">
                
                {/* 項目一：法規遵循保障 */}
                <div className="flex items-center gap-3 text-ink-900 group/item1 cursor-pointer">
                  <div className="w-9 h-9 rounded-xl bg-gold-400/15 border border-gold-400/35 group-hover/item1:bg-gold-600 group-hover/item1:border-gold-600 transition-colors duration-300 flex items-center justify-center shrink-0">
                    <Scale className="w-5 h-5 text-gold-600 group-hover/item1:text-white transition-colors duration-300" />
                  </div>
                  <span className="font-serif-tc text-lg sm:text-xl font-bold text-ink-900">
                    法規遵循保障
                  </span>
                </div>

                {/* 項目二：履約完全保障 */}
                <div className="flex items-center gap-3 text-ink-900 group/item2 cursor-pointer">
                  <div className="w-9 h-9 rounded-xl bg-gold-400/15 border border-gold-400/35 group-hover/item2:bg-gold-600 group-hover/item2:border-gold-600 transition-colors duration-300 flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-5 h-5 text-gold-600 group-hover/item2:text-white transition-colors duration-300" />
                  </div>
                  <span className="font-serif-tc text-lg sm:text-xl font-bold text-ink-900">
                    履約完全保障
                  </span>
                </div>

              </div>

            </div>
          </div>

          {/* 右側：信託相關文件與查詢按鈕區塊 (7欄) */}
          <div className="lg:col-span-7 rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col justify-between border border-gold-400/40 bg-gradient-to-br from-white/95 via-ivory-50/90 to-gold-100/40 relative overflow-hidden">
            
            {/* 內容主體 */}
            <div className="relative z-10">
              {/* 保證 75% 信託標題與小圖示 */}
              <div className="flex items-center gap-3 mb-6 group/icon">
                <div className="w-9 h-9 rounded-xl bg-gold-400/15 border border-gold-400/35 group-hover/icon:bg-gold-600 group-hover/icon:border-gold-600 transition-colors duration-300 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-gold-600 group-hover/icon:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-serif-tc text-xl sm:text-2xl font-bold text-ink-950">
                  保證 75% 信託
                </h3>
              </div>

              {/* 上方主要按鈕區 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <a
                  href="/生前契約履約保障信託契約書.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white/90 hover:bg-gold-600 text-ink-800 hover:text-white border border-ivory-300 hover:border-gold-500 font-medium text-sm sm:text-base transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group/btn"
                >
                  <span>履約保障信託契約書</span>
                  <Download className="w-4 h-4 text-gold-600 group-hover/btn:text-white shrink-0 transition-colors" />
                </a>

                <a
                  href="https://www.ktb.com.tw/funeral/query"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white/90 hover:bg-gold-600 text-ink-800 hover:text-white border border-ivory-300 hover:border-gold-500 font-medium text-sm sm:text-base transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group/btn"
                >
                  <span>前往信託查詢系統</span>
                  <ExternalLink className="w-4 h-4 text-gold-600 group-hover/btn:text-white shrink-0 transition-colors" />
                </a>
              </div>
            </div>

            {/* 分隔線 */}
            <div className="w-full h-px bg-gold-300/40 my-6 relative z-10" />

            {/* 下方四個報告按鈕 */}
            <div className="relative z-10">
              <h4 className="font-serif-tc text-base sm:text-lg font-bold text-ink-900 mb-4 flex items-center gap-2 group/reporttitle">
                <div className="w-8 h-8 rounded-xl bg-gold-400/15 border border-gold-400/35 group-hover/reporttitle:bg-gold-600 group-hover/reporttitle:border-gold-600 transition-colors duration-300 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4 text-gold-600 group-hover/reporttitle:text-white transition-colors duration-300" />
                </div>
                <span>信託財產目錄與收支計算表、結算報告</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {trustReports.map((report, idx) => (
                  <a
                    key={idx}
                    href={report.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white/90 hover:bg-gold-600 text-ink-800 hover:text-white border border-ivory-300 hover:border-gold-500 font-medium text-sm sm:text-base transition-all duration-300 shadow-sm hover:shadow-md group/report cursor-pointer"
                  >
                    <span className="truncate">{report.title}</span>
                    <Download className="w-4 h-4 text-gold-600 group-hover/report:text-white shrink-0 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
