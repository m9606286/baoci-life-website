import React from 'react';
import { useReveal } from '@/hooks/useReveal';
import { ExternalLink, ShieldCheck, Download, FileText } from 'lucide-react';

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
      title: '112 年度結算報告',
      url: '/112年度信託財產結算報告.pdf',
    },
    {
      title: '113 年度結算報告',
      url: '/113年度信託財產結算報告.pdf',
    },
    {
      title: '114 年度結算報告',
      url: '/114年度信託財產結算報告.pdf',
    },
  ];

  return (
    <section id="trust" className="pt-2 pb-24 lg:pt-4 lg:pb-32 bg-ivory-100 relative overflow-hidden -mt-6 lg:-mt-10">
      <div ref={ref} className="max-w-4xl mx-auto px-6 relative text-center">
        {/* Header 標題區 */}
        <div className="mb-12">
          <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-bold reveal">
            TRUST
          </p>
          <h2 className="font-serif-tc text-3xl md:text-4xl lg:text-5xl font-bold text-ink-950 mt-2 reveal reveal-delay-1">
            信託公開
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4 reveal reveal-delay-2" />
        </div>

        {/* 信託說明卡片區塊 */}
        <div className="group bg-white/80 backdrop-blur-sm border border-gold-400/30 rounded-3xl p-8 sm:p-12 shadow-lg reveal reveal-delay-3 transition-all duration-300 text-center">
          
          {/* 圖示與標題置中並排 */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gold-400/15 border border-gold-400/35 group-hover:bg-gold-600 transition-colors duration-300 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-gold-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-serif-tc text-2xl sm:text-3xl font-bold text-ink-950">
              保證 75% 信託
            </h3>
          </div>

          {/* 說明文字 */}
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            依殯葬管理條例第51條，預收之生前契約款項，依法75%交由「京城銀行」信託管理。
          </p>

          {/* 上方主要按鈕區 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="/生前契約履約保障信託契約書.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-ivory-50/70 hover:bg-gold-600 text-ink-800 hover:text-white border border-ivory-300 hover:border-gold-500 font-medium text-sm sm:text-base transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group/btn w-full sm:w-auto"
            >
              <span>履約保障信託契約書</span>
              <Download className="w-4 h-4 text-gold-600 group-hover/btn:text-white shrink-0 transition-colors" />
            </a>

            <a
              href="https://www.ktb.com.tw/funeral/query"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-ivory-50/70 hover:bg-gold-600 text-ink-800 hover:text-white border border-ivory-300 hover:border-gold-500 font-medium text-sm sm:text-base transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group/btn w-full sm:w-auto"
            >
              <span>前往信託查詢系統</span>
              <ExternalLink className="w-4 h-4 text-gold-600 group-hover/btn:text-white shrink-0 transition-colors" />
            </a>
          </div>

          {/* 分隔線 */}
          <div className="w-full h-px bg-ivory-200 mb-10" />

          {/* 下方四個報告按鈕（限制最大寬度 max-w-xl 讓按鈕變短，內容 justify-center 置中） */}
          <div>
            <h4 className="font-serif-tc text-lg sm:text-xl font-bold text-ink-900 mb-6 flex items-center justify-center gap-2">
              <FileText className="w-5 h-5 text-gold-600" />
              <span>信託財產目錄與收支計算表與信託財產結算報告</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl mx-auto">
              {trustReports.map((report, idx) => (
                <a
                  key={idx}
                  href={report.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-ivory-50/70 hover:bg-gold-600 text-ink-800 hover:text-white border border-ivory-300 hover:border-gold-500 font-medium text-sm sm:text-base transition-all duration-300 shadow-sm hover:shadow-md group/report cursor-pointer text-center"
                >
                  <span>{report.title}</span>
                  <Download className="w-4 h-4 text-gold-600 group-hover/report:text-white shrink-0 transition-colors" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
