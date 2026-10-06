import { useReveal } from '@/hooks/useReveal';
import { companyInfo } from '@/data/content';
import { Landmark, FileCheck, Scale, ShieldCheck, ExternalLink } from 'lucide-react';

const trustItems = [
  { icon: FileCheck, title: '京城銀行信託契約', text: '依殯葬管理條例第51條規定，本公司預收之生前契約款項，已將75%交由京城銀行信託管理，專款專用。' },
  { icon: Scale, title: '信託財產目錄與收支計算表', text: '定期公開信託財產結算報告，確保資金透明、安全、可查詢。' },
  { icon: ShieldCheck, title: '永續經營保障', text: '寶慈生命事業為寶碩（股票代號5210）轉投資之關係企業，依循公司治理原則運作，強化營運穩定性與長期服務承諾。' },
];

const annualReports = [
  { title: '112年度信託財產結算報告', url: '/112年度信託財產結算報告.pdf' },
  { title: '113年度信託財產結算報告', url: '/113年度信託財產結算報告.pdf' },
  { title: '114年度信託財產結算報告', url: '/114年度信託財產結算報告.pdf' },
];

export default function Trust() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="trust" className="py-24 lg:py-32 bg-ink-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-ink-800/40 to-transparent pointer-events-none" />

      <div ref={ref} className="mx-auto max-w-8xl px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-400 text-sm tracking-[0.3em] uppercase reveal">Trust & Compliance</p>
          <h2 className="font-serif-tc text-3xl md:text-4xl lg:text-5xl text-ivory-50 font-bold mt-3 reveal reveal-delay-1">
            法規與信託公開專區
          </h2>
          <div className="gold-divider w-32 mx-auto mt-6 reveal reveal-delay-2" />
        </div>

        {/* Highlight banner */}
        <div className="reveal reveal-delay-2 mb-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gold-400/10 to-gold-500/5 border border-gold-400/20 rounded-2xl p-8 lg:p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-gold-400/15 border border-gold-400/30 flex items-center justify-center mx-auto mb-6">
              <Landmark className="w-8 h-8 text-gold-400" />
            </div>
            <p className="font-serif-tc text-2xl lg:text-3xl text-ivory-50 font-bold mb-3">
              保證 {companyInfo.trustRatio} 信託
            </p>
            <p className="text-ivory-200/70 text-sm lg:text-base leading-relaxed max-w-2xl mx-auto mb-6">
              依殯葬管理條例第51條規定，本公司預收之生前契約款項，已將{companyInfo.trustRatio}交由「{companyInfo.trustBank}」信託管理，專款專用。
            </p>

            {/* 前往信託查詢系統按鈕 */}
            <div className="mb-6">
              <a
                href="https://customer.ktb.com.tw/new/personal/agreement"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-400/20 hover:bg-gold-400/30 border border-gold-400/40 text-gold-300 hover:text-gold-200 font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-gold-400/10"
              >
                <span>前往信託查詢系統</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink-800/50 border border-ink-700/50">
              <ShieldCheck className="w-4 h-4 text-sage-400" />
              <span className="text-ivory-200/80 text-sm">{companyInfo.parentCompany}</span>
            </div>
          </div>
        </div>

        {/* Trust items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {trustItems.map((item, idx) => (
            <div
              key={idx}
              className={`reveal reveal-delay-${idx + 1} group bg-ink-800/50 backdrop-blur-sm rounded-2xl p-8 border border-ink-700/50 hover:border-gold-400/30 transition-all duration-500`}
            >
              <div className="w-14 h-14 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mb-5 group-hover:bg-gold-400/20 transition-colors">
                <item.icon className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="font-serif-tc text-lg text-ivory-50 font-bold mb-3">{item.title}</h3>
              <p className="text-ivory-200/60 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Annual reports */}
        <div className="reveal reveal-delay-3 max-w-4xl mx-auto">
          <div className="bg-ink-800/30 rounded-2xl p-6 lg:p-8 border border-ink-700/30">
            <h3 className="font-serif-tc text-lg text-ivory-50 font-bold mb-5 text-center">信託財產結算報告</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {annualReports.map((report, idx) => (
                <a
                  key={idx}
                  href={report.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-ink-900/50 border border-ink-700/50 hover:border-gold-400/30 hover:bg-ink-900/80 transition-all group"
                >
                  <FileCheck className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <span className="text-ivory-200/70 text-sm group-hover:text-gold-300 transition-colors">
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
