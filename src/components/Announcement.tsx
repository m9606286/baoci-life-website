import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    dateTag: '2026/4/1 公司動態',
    title: '寶慈生命事業正式加入寶碩集團(股票代號5210)，攜手打造尊榮生命服務',
    summary: '寶慈生命事業正式成為寶碩集團子公司。透過導入公開發行公司嚴謹的法人治理規範與龐大資源支持，進一步提升客戶權益保障，並以兼具人文溫度與財務誠信的防護網提供安心生命服務。',
    to: '/news/news-2026-04',
  },
];

export default function Announcement() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -containerWidth : containerWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full relative group/announcement px-2 sm:px-6">
      {/* 標題區塊：保留手機版可左右滑動提示，移除桌機版提示 */}
      <div className="text-center mb-6 relative">
        <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-bold">
          LATEST NEWS
        </p>
        <div className="relative mt-2 inline-block">
          <h2 className="font-serif-tc text-3xl md:text-4xl font-bold text-ink-900">
            最新消息
          </h2>
        </div>
        
        {/* 手機版專用的小字提示（置於下方） */}
        <p className="sm:hidden text-xs text-stone-400 mt-1 tracking-wider font-serif-tc">
          ( 可左右滑動 )
        </p>

        <div className="gold-divider w-32 mx-auto mt-4" />
      </div>

      {/* 左右切換按鈕：桌機版顯示 */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-1 sm:left-[-10px] top-[60%] -translate-y-1/2 z-20 p-2 text-slate-400 hover:text-amber-600 transition-all duration-300 opacity-0 group-hover/announcement:opacity-100 hover:scale-125 hidden md:block"
        aria-label="上一則消息"
      >
        <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 drop-shadow-md" />
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute right-1 sm:right-[-10px] top-[60%] -translate-y-1/2 z-20 p-2 text-slate-400 hover:text-amber-600 transition-all duration-300 opacity-0 group-hover/announcement:opacity-100 hover:scale-125 hidden md:block"
        aria-label="下一則消息"
      >
        <ChevronRight className="w-8 h-8 md:w-10 md:h-10 drop-shadow-md" />
      </button>

      {/* 橫向滑動卡片容器 */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-4 sm:px-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {announcements.map((item) => (
          <article
            key={item.id}
            className="snap-center shrink-0 w-[80vw] sm:w-[450px] md:w-[500px] min-h-[320px] sm:min-h-[350px] group relative bg-white rounded-3xl p-6 sm:p-9 border border-gold-400/30 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer mx-auto"
          >
            <div>
              {/* 日期標籤 */}
              <div className="mb-4">
                <span className="inline-flex items-center font-serif-tc px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-500 shadow-sm bg-gradient-to-r from-amber-50/90 via-stone-50 to-yellow-50/80 text-ink-900 border border-amber-200/60 group-hover:bg-none group-hover:bg-[#C69233] group-hover:text-white group-hover:border-[#C69233] group-hover:shadow-md">
                  {item.dateTag}
                </span>
              </div>

              {/* 卡片標題 */}
              <h3 className="font-serif-tc text-base sm:text-lg md:text-xl font-bold text-ink-900 group-hover:text-[#C69233] transition-colors duration-300 leading-snug mb-3">
                {item.title}
              </h3>

              {/* 卡片內文 */}
              <p className="text-ink-700 text-sm sm:text-base md:text-lg leading-relaxed">
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
