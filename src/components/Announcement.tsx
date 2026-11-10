import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

export interface NewsItem {
  id: string | number;
  dateTag: string;
  title: string;
  summary: string;
  image?: string;
  to?: string;
}

const announcements: NewsItem[] = [
  {
    id: 'news-2026-08',
    dateTag: '2026/8/13 資本增資',
    title: '寶慈生命事業資本額順利完成增資至新臺幣 6,000 萬元',
    summary: '為持續深化服務品質、擴大營運規模並強化預付款履約保障能力，實收資本額由原新臺幣 3,000 萬元順利增資至新臺幣 6,000 萬元，展現企業穩健營運實力與長期承諾。',
    to: '/news/news-2026-07',
  },
  {
    id: 'news-2026-04',
    dateTag: '2026/4/1 集團動態',
    title: '寶慈生命事業正式加入寶碩集團(股票代號5210)，攜手打造尊榮生命服務',
    summary: '寶慈生命事業正式成為寶碩集團子公司。透過導入上市集團嚴謹的法人治理規範與龐大資源支持，進一步提升客戶權益保障，並以兼具人文溫度與財務誠信的防護網提供安心生命服務。',
    to: '/news/news-2026-04',
  },
];

export default function Announcement() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // 取得容器寬度，精準捲動一整張卡片的距離（含 gap）
      const containerWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -containerWidth : containerWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full relative group/announcement px-2 sm:px-6">
      {/* 標題區塊：置中 + 質感線 */}
      <div className="text-center mb-12">
        <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-bold">
          LATEST NEWS
        </p>
        <h2 className="font-serif-tc text-3xl md:text-4xl font-bold text-ink-900 mt-2">
          最新消息
        </h2>
        <div className="gold-divider w-32 mx-auto mt-4" />
      </div>

      {/* 左右切換按鈕：已移除黑圈圈背景，保留純箭頭與優雅 Hover 效果 */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-[-10px] sm:left-[-15px] top-[60%] -translate-y-1/2 z-20 p-2 text-slate-400 hover:text-amber-600 transition-all duration-300 opacity-0 group-hover/announcement:opacity-100 hover:scale-125"
        aria-label="上一則消息"
      >
        <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 drop-shadow-md" />
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute right-[-10px] sm:right-[-15px] top-[60%] -translate-y-1/2 z-20 p-2 text-slate-400 hover:text-amber-600 transition-all duration-300 opacity-0 group-hover/announcement:opacity-100 hover:scale-125"
        aria-label="下一則消息"
      >
        <ChevronRight className="w-6 h-6 md:w-10 md:h-10 drop-shadow-md" />
      </button>

      {/* 橫向滑動卡片容器：支援手機單張自動對齊 */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {announcements.map((item) => (
          <article
            key={item.id}
            className="snap-center shrink-0 w-[88vw] sm:w-[450px] md:w-[500px] group relative bg-white rounded-3xl p-8 border border-gold-400/25 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
          >
            <div>
              {/* 日期標籤：滑鼠移入卡片時(group-hover)，背景改為圖中的單色金色 (#C69233)，文字變白 */}
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 font-serif-tc px-4 py-1.5 rounded-full text-xs md:text-sm font-bold transition-all duration-500 shadow-sm bg-gradient-to-r from-amber-50/90 via-stone-50 to-yellow-50/80 text-amber-900 border border-amber-200/60 group-hover:bg-[#C69233] group-hover:text-white group-hover:border-[#C69233] group-hover:shadow-md">
                  <Calendar className="w-3.5 h-3.5 text-amber-700 group-hover:text-white/90 transition-colors duration-300" />
                  {item.dateTag}
                </span>
              </div>

              {/* 卡片標題：維持原本的 Hover 變色設定 */}
              <h3 className="font-serif-tc text-lg md:text-xl font-bold text-ink-900 group-hover:text-amber-700 transition-colors duration-300 leading-snug mb-4">
                {item.title}
              </h3>

              {/* 卡片內文 */}
              <p className="text-ink-700 text-sm md:text-base leading-relaxed line-clamp-4">
                {item.summary}
              </p>
            </div>

            {/* 底部 hover 細金線 */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </article>
        ))}
      </div>
    </div>
  );
}
