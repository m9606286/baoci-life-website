import React from 'react';
import { useReveal } from '@/hooks/useReveal';
import { ExternalLink, ShieldCheck, Download, FileText, Landmark, Lock } from 'lucide-react';

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
          
          {/* 左側：精緻信賴氛圍與企業承諾欄位 (5欄) - 加入同色調握手線條插圖背景 */}
          <div className="lg:col-span-5 bg-gradient-to-br from-white/95 via-ivory-50/90 to-gold-100/40 border border-gold-400/30 rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col justify-between relative overflow-hidden group">
            
            {/* 背景 SVG 握手線條插圖（採用網站同色調：金/墨色低透明度，呈現優雅浮水印效果） */}
            <div className="absolute right-[-20px] bottom-[-20px] w-72 h-72 opacity-[0.12] pointer-events-none group-hover:scale-105 transition-transform duration-700 z-0">
              <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold-700 w-full h-full">
                {/* 雙手握手意象精緻向量線條 */}
                <path d="M40 120 C 60 100, 80 110, 95 90 C 105 75, 115 60, 130 75 C 145 90, 130 110, 115 125 C 100 140, 80 135, 65 140 Z" fill="currentColor" fillOpacity="0.05" />
                <path d="M20 140 L 95 90" />
                <path d="M180 140 L 105 90" />
                <path d="M60 160 L 95 125" />
                <path d="M140 160 L 105 125" />
                <path d="M75 80 Q 90 60 110 75" />
                <path d="M90 50 Q 110 35 130 55" />
              </svg>
            </div>

            {/* 背景裝飾微光 */}
            <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-gold-200/20 blur-3xl pointer-events-none z-0" />

            <div className="relative z-10">
              {/* 小圖移至標題左側，加入 hover 深金底白線條互動 */}
              <div className="flex items-center gap-3 mb-4 group/lefttitle">
                <div className="w-10 h-10 rounded-xl bg-gold-400/15 border border-gold-400/35 group-hover/lefttitle:bg-gold-600 group-hover/lefttitle:border-gold-600 transition-colors duration-300 flex items-center justify-center shrink-0">
                  <Landmark className="w-5 h-5 text-gold-600 group-hover/lefttitle:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-serif-tc text-2xl sm:text-3xl font-bold text-ink-900">
                  嚴謹信託 專款專用
                </h3>
              </div>

              <p className="text-ink-600 text-sm sm:text-base leading-relaxed mb-6 font-['Microsoft_JhengHei']">
                寶慈生命事業秉持最高誠信原則與法規遵循，將每位客戶的託付妥善交付銀行信託管理，確保資產安全與履約承諾。
              </p>
            </div>

            <div className="relative z-10 space-y-4 pt-6 border-t border-ivory-200/80">
              <div className="flex items-center gap-3 text-ink-800 text-sm font-medium">
                <div className="w-6 h-6 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center shrink-0">
                  <Lock className="w-3.5 h-3.5" />
                </div>
                <span>京城銀行安全信託管理</span>
              </div>
              <div className="flex items-center gap-3 text-ink-800 text-sm font-medium">
                <div className="w-6 h-6 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>歷年信託透明公開可稽</span>
              </div>
            </div>
          </div>

          {/* 右側：信託相關文件與查詢按鈕區塊 (7欄) */}
          <div className="lg:col-span-7 bg-white/80 backdrop-blur-sm border border-gold-400/30 rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col justify-between">
            
            <div>
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
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-ivory-50/70 hover:bg-gold-600 text-ink-800 hover:text-white border border-ivory-300 hover:border-gold-500 font-medium text-sm sm:text-base transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group/btn"
                >
                  <span>履約保障信託契約書</span>
                  <Download className="w-4 h-4 text-gold-600 group-hover/btn:text-white shrink-0 transition-colors" />
                </a>

                <a
                  href="https://www.ktb.com.tw/funeral/query"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-ivory-50/70 hover:bg-gold-600 text-ink-800 hover:text-white border border-ivory-300 hover:border-gold-500 font-medium text-sm sm:text-base transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group/btn"
                >
                  <span>前往信託查詢系統</span>
                  <ExternalLink className="w-4 h-4 text-gold-600 group-hover/btn:text-white shrink-0 transition-colors" />
                </a>
              </div>
            </div>

            {/* 分隔線 */}
            <div className="w-full h-px bg-ivory-200 my-6" />

            {/* 下方四個報告按鈕 */}
            <div>
              <h4 className="font-serif-tc text-base sm:text-lg font-bold text-ink-900 mb-4 flex items-center gap-2 group/reporttitle">
                <div className="w-8 h-8 rounded-xl bg-gold-400/15 border border-gold-400/35 group-hover/reporttitle:bg-gold-600 group-hover/reporttitle:border-gold-600 transition-colors duration-300 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4 text-gold-600 group-hover/reporttitle:text-white transition-colors duration-300" />
                </div>
                <span>信託財產目錄與收支計算表、結算報告</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {trustReports.map((report, idx) => (
                  <a
                    key={idx}
                    href={report.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between px-4 py-3 rounded-xl bg-ivory-50/70 hover:bg-gold-600 text-ink-800 hover:text-white border border-ivory-300 hover:border-gold-500 font-medium text-xs sm:text-sm transition-all duration-300 shadow-sm hover:shadow-md group/report cursor-pointer"
                  >
                    <span className="truncate pr-2">{report.title}</span>
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
