import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

export interface NewsItem {
  id: string | number;
  dateTag: string; // 合併為「2026年7月 資本增資」
  title: string;
  summary: string;
  image?: string;
  to?: string;
}

const announcements: NewsItem[] = [
  {
    id: 'news-2026-07',
    dateTag: '2026年7月 資本增資',
    title: '寶慈生命事業資本額順利完成增資至新臺幣 6,000 萬元',
    summary: '為持續深化服務品質、擴大營運規模並強化預付款履約保障能力，寶慈生命事業已正式完成資本額變更登記，實收資本額增資至新臺幣 6,000 萬元，展現企業穩健營運實力與長期承諾。',
    to: '/news/news-2026-07',
  },
  {
    id: 'news-2026-04',
    dateTag: '2026年4月 集團動態',
    title: '寶慈生命事業正式加入寶碩財務科技集團，攜手打造尊榮生命服務',
    summary: '寶慈生命事業正式成為寶碩財務科技集團旗下子公司。透過導入上市集團嚴謹的法人治理規範與龐大資源支持，進一步提升客戶權益保障，並以兼具人文溫度與財務誠信的防護網提供安心生命服務。',
    to: '/news/news-2026-04',
  },
  {
    id: 'news-2026-01',
    dateTag: '2026年1月 合規公告',
    title: '依法落實 75% 預付款交付京城銀行信託專戶管理',
    summary: '寶慈生命事業全體生前契約商品皆嚴格遵守殯葬管理條例第 51 條規定，將預收費用之 75% 依法按月交付京城銀行信託專戶專款專用，會計師定期查核會計簽證，確保消費者權益。',
    to: '/news/news-2026-01',
  },
];

export default function Announcement() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 左右滾動邏輯
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full relative group/announcement">
      {/* 標題區塊：置中 + 質感線 */}
      <div className="text-center mb-12">
        <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-bold">
          LATEST NEWS
        </p>
        <h2 className="font-serif-tc text-3xl md:text-4xl font-bold text-ink-900 mt-2">
          最新消息
        </h2>
        {/* 同「什麼是生前契約」的質感線 */}
        <div className="gold-divider w-32 mx-auto mt-4" />
      </div>

      {/* 左右切換按鈕（點擊平滑滾動） */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-[-20px] top-[60%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-ink-900/80 text-gold-400 hover:bg-gold-500 hover:text-ink-900 border border-gold-400/40 backdrop-blur-md flex items-center justify-center transition-all opacity-0 group-hover/announcement:opacity-100 shadow-xl"
        aria-label="上一則消息"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute right-[-20px] top-[60%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-ink-900/80 text-gold-400 hover:bg-gold-500 hover:text-ink-900 border border-gold-400/40 backdrop-blur-md flex items-center justify-center transition-all opacity-0 group-hover/announcement:opacity-100 shadow-xl"
        aria-label="下一則消息"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* 橫向滑動卡片容器 */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {announcements.map((item) => (
          <article
            key={item.id}
            className="snap-start shrink-0 w-[85vw] sm:w-[450px] md:w-[500px] group relative bg-white rounded-3xl p-8 border border-gold-400/25 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
          >
            <div>
              {/* 日期標籤：移到上面顯示「淺深金背景」 */}
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 font-serif-tc px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 bg-slate-100 text-slate-800 border border-slate-200 group-hover:bg-gold-500 group-hover:text-ink-900 group-hover:border-gold-400 shadow-sm">
                  <Calendar className="w-3.5 h-3.5 text-gold-600 group-hover:text-ink-900" />
                  {item.dateTag}
                </span>
              </div>

              {/* 標題 */}
              <h3 className="font-serif-tc text-xl md:text-2xl font-bold text-ink-900 group-hover:text-gold-600 transition-colors duration-300 leading-snug mb-4">
                {item.title}
              </h3>

              {/* 內文：跟「我們的故事」相同字型 */}
              <p className="text-slate-700 text-base leading-relaxed font-['Microsoft_JhengHei'] line-clamp-4">
                {item.summary}
              </p>
            </div>

            {/* 移到卡片上時，出現在方格「下面」的金色線條 */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </article>
        ))}
      </div>
    </div>
  );
}
