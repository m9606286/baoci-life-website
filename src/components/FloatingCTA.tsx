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
      {expanded && (
        <div className="animate-fade-up bg-white rounded-2xl shadow-2xl p-5 w-72">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="font-serif-tc text-lg font-bold text-ink-800">24小時服務專線</p>
              <p className="text-xs text-ink-400 mt-0.5">全年無休 · 隨時為您服務</p>
            </div>
            <button onClick={() => setExpanded(false)} className="text-ink-300 hover:text-ink-600">
              <X className="w-4 h-4" />
            </button>
          </div>
          <a
            href="tel:0800-600-603"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-ink-900 text-ivory-50 font-medium hover:bg-ink-800 transition-colors"
          >
            <Phone className="w-4 h-4 text-gold-400" />
            <span>0800-600-603</span>
          </a>
        </div>
      )}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-14 h-14 rounded-full bg-gold-400 text-ink-900 shadow-2xl flex items-center justify-center hover:bg-gold-300 transition-all hover:scale-105 animate-fade-in"
        aria-label="聯絡電話"
      >
        {expanded ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
      </button>
    </div>
  );
}
