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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* 彈窗頂部 */}
            <div className="sticky top-0 z-10 flex justify-between items-center px-6 py-4 border-b border-ivory-200 bg-white">
              <span className="text-xs font-semibold text-gold-600 tracking-wider">寶慈生命事業 公告</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="關閉公告"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 彈窗內文 */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-slate-700">
              <div className="text-center pb-4 border-b border-gold-300/60">
                <h2 className="font-serif-tc text-2xl md:text-3xl font-bold text-gold-600 tracking-wide">
                  更名暨權益保障公告
                </h2>
              </div>

              <div className="space-y-4 text-sm md:text-base leading-relaxed">
                <p>感謝各位會員長期以來對本公司的支持與愛護。</p>
                <p>
                  為整合集團資源並提升核心服務品質，本公司經主管機關核准，已正式更名為
                  <strong className="text-slate-900 font-bold">「寶慈生命事業股份有限公司」</strong>
                  （原名：永慈事業股份有限公司）。
                </p>
                <p>
                  本公司現為寶碩集團旗下之全資子公司。在強大集團資源與專業團隊的挹注下，我們將秉持更嚴謹、溫暖的態度，為您提供最優質的生命禮儀規劃與服務。
                </p>
              </div>

              {/* 會員權益承諾 */}
              <div className="bg-amber-50/70 p-5 rounded-xl border border-amber-200/80 space-y-3">
                <h3 className="font-serif-tc text-base md:text-lg font-bold text-slate-900">
                  針對所有原「永慈事業」之既有會員，本公司在此鄭重承諾：
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-800">
                  <li className="flex items-start gap-2">
                    <span className="text-gold-600 font-bold mt-0.5">✓</span>
                    <div>
                      <strong>會員權益完全承接：</strong>
                      <p className="text-xs md:text-sm text-slate-600">您的會員身分及所有權益不受任何影響。</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-600 font-bold mt-0.5">✓</span>
                    <div>
                      <strong>契約效力持續維持：</strong>
                      <p className="text-xs md:text-sm text-slate-600">雙方原簽署之契約內容、服務項目與保障條款均全數維持不變，本公司將依法持續履行後續所有履約責任。</p>
                    </div>
                  </li>
                </ul>
              </div>

              <p className="text-center text-gold-600 font-medium text-sm md:text-base py-2">
                寶慈生命事業將持續守護您的託付，讓每一份對家人的愛與安心都能圓滿延續。
              </p>

              {/* 聯絡方式卡片 */}
              <div className="bg-stone-100 p-5 rounded-xl space-y-3">
                <h4 className="font-serif-tc text-base font-bold text-slate-900">聯絡方式</h4>
                <p className="text-xs md:text-sm text-slate-600">
                  若您對本次更名或契約權益有任何疑問，歡迎致電本公司，我們將有專人為您詳細說明。
                </p>
                
                <div className="text-xs md:text-sm space-y-1.5 pt-3 border-t border-stone-200">
                  <p><strong>客服專線：</strong></p>
                  <ul className="pl-4 list-disc text-slate-700 space-y-0.5">
                    <li>寶慈總部：06-267 8859</li>
                    <li>天勤（台中）：04-2322 0208</li>
                    <li>晨暉（台北）：02-2514 7755</li>
                  </ul>
                  <div className="pt-2">
                    <p><strong>24小時服務電話：</strong></p>
                    <p className="text-base font-bold text-gold-600">0800-600-603</p>
                    <p className="text-[11px] text-slate-500">（與之前相同，沒有變更）</p>
                  </div>
                </div>
              </div>

              {/* 署名與核准字號 */}
              <div className="text-center pt-4 space-y-1">
                <p className="text-xs font-semibold text-slate-500">特此公告</p>
                <p className="font-serif-tc text-lg font-bold text-slate-900">寶慈生命事業股份有限公司</p>
                <p className="text-xs text-slate-500">（原永慈事業股份有限公司）</p>
                <p className="text-xs font-serif-tc italic text-slate-400 pt-2">敬啟</p>
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-[11px] text-slate-400">台南市政府民政局-核准變更名稱及負責人(受文者寶慈)</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
