import { useEffect, useState } from 'react';
import { Phone, X } from 'lucide-react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* 展開後的電話資訊卡片：採用質感黑 bg-ink-950 + 金色質感邊框 */}
      {expanded && (
        <div className="animate-fade-up bg-ink-950 border-2 border-gold-400/80 ring-2 ring-gold-400/40 rounded-2xl shadow-2xl p-5 w-72 text-ivory-50">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="font-serif-tc text-lg font-bold text-gold-400">24小時服務專線</p>
              <p className="text-xs text-ivory-300 mt-0.5">全年無休 · 隨時為您服務</p>
            </div>
            <button
              onClick={() => setExpanded(false)}
              className="text-ivory-400 hover:text-gold-400 transition-colors p-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <a
            href="tel:0800-600-603"
            className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-gold-600 hover:bg-gold-500 text-white font-bold transition-all shadow-md group cursor-pointer"
          >
            <Phone className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            <span className="font-['Microsoft_JhengHei'] tracking-wide">0800-600-603</span>
          </a>
        </div>
      )}

      {/* 懸浮圓形按鈕：維持原本金色背景 (bg-gold-400)，外圈加入雙層金色質感線條 */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-14 h-14 rounded-full bg-gold-400 text-ink-900 border-2 border-gold-300/80 ring-2 ring-gold-400/50 shadow-2xl flex items-center justify-center hover:bg-gold-300 transition-all hover:scale-105 animate-fade-in cursor-pointer group"
        aria-label="聯絡電話"
      >
        {expanded ? (
          <X className="w-6 h-6 transition-transform group-hover:rotate-90" />
        ) : (
          <Phone className="w-6 h-6 transition-transform group-hover:scale-110" />
        )}
      </button>
    </div>
  );
}
