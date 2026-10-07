import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { Megaphone, ChevronRight, X } from 'lucide-react';
import { announcement } from '@/data/content';

export default function Announcement() {
  const ref = useReveal<HTMLDivElement>();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="py-12 lg:py-16 bg-ivory-100">
        <div ref={ref} className="mx-auto max-w-8xl px-6">
          <div
            onClick={() => setIsOpen(true)}
            className="reveal relative bg-gradient-to-r from-ink-900 to-ink-800 rounded-2xl p-6 lg:p-8 overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-300 border border-gold-400/20 group"
          >
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-64 h-full opacity-10 pointer-events-none">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 70% 50%, rgba(212,167,73,0.4) 0%, transparent 60%)',
                }}
              />
            </div>

            <div className="relative flex items-center justify-between gap-4 lg:gap-6">
              <div className="flex items-center gap-4 lg:gap-6">
                <div className="flex-shrink-0 w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gold-400/15 border border-gold-400/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Megaphone className="w-7 h-7 lg:w-8 lg:h-8 text-gold-400" />
                </div>
                <div>
                  <p className="text-gold-400 text-xs tracking-[0.25em] uppercase mb-2">重要公告</p>
                  <p className="font-serif-tc text-base lg:text-xl text-ivory-50 leading-relaxed font-medium">
                    {announcement}
                  </p>
                </div>
              </div>

              {/* 右側詳細內容提示按鈕 */}
              <div className="hidden sm:flex items-center gap-1 text-sm font-medium text-gold-400 group-hover:translate-x-1.5 transition-transform duration-300 shrink-0">
                <span>詳細內容</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 詳細公告彈窗 Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] sm:max-h-[90vh] flex flex-col my-auto border border-gold-400/20">
            
            {/* 彈窗頂部 */}
            <div className="sticky top-0 z-10 flex justify-between items-center px-5 py-3.5 sm:px-6 sm:py-4 border-b border-ivory-200 bg-white/95 backdrop-blur-md">
              <span className="text-xs font-semibold text-gold-600 tracking-wider">寶慈生命事業 公告</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="關閉公告"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 彈窗內文（優化手機版滾動體驗） */}
            <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-5 sm:space-y-6 text-slate-700 scrollbar-thin scrollbar-thumb-gold-400/30">
              <div className="text-center pb-3 border-b border-gold-300/60">
                <h2 className="font-serif-tc text-xl sm:text-2xl md:text-3xl font-bold text-gold-600 tracking-wide">
                  更名暨權益保障公告
                </h2>
              </div>

              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base leading-relaxed">
                <p>感謝各位會員長期以來對本公司的支持與愛護。</p>
                <p>
                  為整合集團資源並提升核心服務品質，本公司經主管機關核準，已正式更名為
                  <strong className="text-slate-900 font-bold block sm:inline mt-1 sm:mt-0">「寶慈生命事業股份有限公司」</strong>
                  （原名：永慈事業股份有限公司）。
                </p>
                <p>
                  本公司現為寶碩集團旗下之全資子公司。在強大集團資源與專業團隊的挹注下，我們將秉持更嚴謹、溫暖的態度，為您提供最優質的生命禮儀規劃與服務。
                </p>
              </div>

              {/* 會員權益承諾 */}
              <div className="bg-amber-50/80 p-4 sm:p-5 rounded-xl border border-amber-200/80 space-y-3">
                <h3 className="font-serif-tc text-sm sm:text-base md:text-lg font-bold text-slate-900">
                  針對所有原「永慈事業」之既有會員，本公司在此鄭重承諾：
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
                  <li className="flex items-start gap-2">
                    <span className="text-gold-600 font-bold mt-0.5">✓</span>
                    <div>
                      <strong>會員權益完全承接：</strong>
                      <p className="text-[11px] sm:text-xs md:text-sm text-slate-600">您的會員身分及所有權益不受任何影響。</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-600 font-bold mt-0.5">✓</span>
                    <div>
                      <strong>契約效力持續維持：</strong>
                      <p className="text-[11px] sm:text-xs md:text-sm text-slate-600">雙方原簽署之契約內容、服務項目與保障條款均全數維持不變，本公司將依法持續履行後續所有履約責任。</p>
                    </div>
                  </li>
                </ul>
              </div>

              <p className="text-center text-gold-600 font-medium text-xs
