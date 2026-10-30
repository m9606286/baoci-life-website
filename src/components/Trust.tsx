import React from 'react';
import { useReveal } from '@/hooks/useReveal';
import { ExternalLink, ShieldCheck, Download } from 'lucide-react';

export default function Trust() {
  const revealResult = useReveal<HTMLDivElement>();
  const ref = Array.isArray(revealResult) ? revealResult[0] : revealResult;

  return (
    <section id="trust" className="pt-2 pb-24 lg:pt-4 lg:pb-32 bg-ivory-100 relative overflow-hidden -mt-6 lg:-mt-10">
      <div ref={ref} className="max-w-4xl mx-auto px-6 relative text-center">
        {/* Header 標題區 */}
        <div className="mb-12">
          <p className="text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-mono font-medium reveal">
            TRUST
          </p>
          <h2 className="font-serif-tc text-3xl md:text-4xl lg:text-5xl font-bold text-ink-950 mt-2 reveal reveal-delay-1">
            信託公開
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4 reveal reveal-delay-2" />
        </div>

        {/* 信託說明卡片區塊 */}
        <div className="bg-white/80 backdrop-blur-sm border border-gold-400/30 rounded-3xl p-8 sm:p-12 shadow-lg reveal reveal-delay-3">
          <div className="w-16 h-16 rounded-2xl bg-gold-400/15 border border-gold-400/30 flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-8 h-8 text-gold-600" />
          </div>

          <h3 className="font-serif-tc text-2xl sm:text-3xl font-bold text-ink-950 mb-4">
            保證 75% 信託
          </h3>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            依殯葬管理條例第51條，預收之生前契約款項，依法75%交由「京城銀行」信託管理。
          </p>

          {/* 按鈕組合區：左邊為契約書下載（帶有 Download 圖示，無「下載」二字），右邊為前往信託查詢系統 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {/* 左側：生前契約履約保障信託契約書（帶圖示，無「下載」文字） */}
            <a
              href="/生前契約履約保障信託契約書.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-ivory-100 hover:bg-gold-600 text-ink-900 hover:text-white border border-gold-400/50 font-medium text-sm transition-all shadow-sm hover:shadow-md cursor-pointer group"
            >
              <span>生前契約履約保障信託契約書</span>
              <Download className="w-4 h-4 shrink-0" />
            </a>

            {/* 右側：前往信託查詢系統 */}
            <a
              href="https://www.ktb.com.tw/funeral/query"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-ink-950 hover:bg-gold-600 text-white font-medium text-sm transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>前往信託查詢系統</span>
              <ExternalLink className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
