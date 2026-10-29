import React from 'react';
import { useReveal } from '@/hooks/useReveal';
import { companyInfo } from '@/data/content';
import { Landmark, FileCheck, Scale, ShieldCheck, ExternalLink } from 'lucide-react';

const trustItems = [
  { 
    icon: FileCheck, 
    title: '京城銀行信託契約', 
    text: '依殯葬管理條例第51條，預收之生前契約款項，依法75%交由「京城銀行」信託管理。' 
  },
  { 
    icon: Scale, 
    title: '信託財產結算報告公開', 
    text: '定期公開信託財產結算報告(如下)，確保資金透明、安全、可查詢。' 
  },
  { 
    icon: ShieldCheck, 
    title: '永續經營保障', 
    text: (
      <>
        寶慈生命事業為
        <a
          href="https://www.apex.com.tw/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold-700 hover:text-gold-500 font-semibold underline underline-offset-4 transition-colors mx-1"
        >
          寶碩（股票代號5210）
        </a>
        全資子公司，依循公司治理原則運作，強化營運穩定性與長期服務承諾。
      </>
    ) 
  },
];

const annualReports = [
  { title: '112年度信託財產結算報告', url: '/112年度信託財產結算報告.pdf' },
  { title: '113年度信託財產結算報告', url: '/113年度信託財產結算報告.pdf' },
  { title: '114年度信託財產結算報告', url: '/114年度信託財產結算報告.pdf' },
];

export default function Trust() {
  const revealResult = useReveal<HTMLDivElement>();
  const ref = Array.isArray(revealResult) ? revealResult[0] : revealResult;

  return (
    <section id="trust" className="pt-2 pb-24 lg:pt-4 lg:pb-32 bg-ivory-100 text-slate-800 relative overflow-hidden -mt-6 lg:-mt-10">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-400/5 to-transparent pointer-events-none" />

      <div ref={ref} className="mx-auto max-w-8xl px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-600 text-sm tracking-[0.3em] uppercase font-semibold reveal">Trust</p>
          <h2 className="font-serif-tc text-3xl md:text-4xl lg:text-5xl text-ink-950 font-bold mt-3 reveal reveal-delay-1">
            信託公開
          </h2>
          <div className="gold-divider w-32 mx-auto mt-6 reveal reveal-delay-2" />
        </div>

        {/* Highlight banner */}
        <div className="reveal reveal-delay-2 mb-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-white/90 via-ivory-50 to-amber-50/40 border border-gold-400/30 rounded-2xl p-8 lg:p-10 text-center shadow-md">
            {/* 上方大圖示：加上 group 與 hover 效果，移到時顯示深金底白線條 */}
            <div className="group w-16 h-16 rounded-full bg-gold-400/15 border border-gold-400/30 flex items-center justify-center mx-auto mb-6 shadow-sm transition-colors duration-300 hover:bg-gold-600 hover:border-gold-600 cursor-pointer">
              <Landmark className="w-8 h-8 text-gold-600 transition-colors duration-300 group-hover:text-white" />
            </div>

            <p className="font-serif-tc text-2xl lg:text-3xl text-ink-950 font-bold mb-3">
              保證 {companyInfo.trustRatio} 信託
            </p>
            <p className="text-slate-600 text-sm lg:text-base leading-relaxed max-w-2xl mx-auto">
              依殯葬管理條例第51條，預收之生前契約款項，依法{companyInfo.trustRatio}交由「{companyInfo.trustBank}」信託管理。
            </p>

            {/* 前往信託查詢系統按鈕：淺色系，移到時出現深金背景與白字 */}
            <div className="mt-6">
              <a
                href="https://customer.ktb.com.tw/new/personal/agreement"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gold-400 text-gold-700 font-bold text-sm transition-all duration-300 shadow-sm hover:bg-gold-600 hover:text-white hover:border-gold-600 hover:shadow-md"
              >
                <span>前往信託查詢系統</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Trust items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {trustItems.map((item, idx) => (
            <div
              key={idx}
              className={`reveal reveal-delay-${idx + 1} group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gold-400/20 hover:border-gold-400/60 transition-all duration-500 shadow-sm hover:shadow-md`}
            >
              {/* 圖示：移到時顯示深金底白線條 */}
              <div className="w-14 h-14 rounded-xl bg-gold-400/15 border border-gold-400/30 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-gold-600 group-hover:border-gold-600">
                <item.icon className="w-7 h-7 text-gold-600 transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="font-serif-tc text-lg text-ink-950 font-bold mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Annual reports */}
        <div className="reveal reveal-delay-3 max-w-4xl mx-auto">
          <div className="bg-white/60 rounded-2xl p-6 lg:p-8 border border-gold-400/25 shadow-sm">
            <h3 className="font-serif-tc text-lg text-ink-950 font-bold mb-5 text-center">信託財產結算報告</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {annualReports.map((report, idx) => (
                <a
                  key={idx}
                  href={report.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/90 border border-gold-400/20 hover:border-gold-400/60 hover:bg-white transition-all shadow-sm group"
                >
                  <FileCheck className="w-5 h-5 text-gold-600 flex-shrink-0" />
                  <span className="text-slate-700 text-sm group-hover:text-gold-600 font-medium transition-colors">
                    {report.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
