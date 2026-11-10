import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

export interface NewsItem {
  id: string | number;
  dateTag: string;
  title: string;
  summary: string;
  image?: string;
  to?: string;
  isSpecial?: boolean;
}

const announcements: NewsItem[] = [
  {
    id: 'news-2026-08',
    dateTag: '2026/8/13 資本增資',
    title: '寶慈生命事業資本額順利完成增資至新臺幣 6,000 萬元',
    summary: '為持續深化服務品質、擴大營運規模並強化預付款履約保障能力，實收資本額由原新臺幣 3,000 萬元順利增資至新臺幣 6,000 萬元，展現企業穩健營運實力與長期承諾。',
    to: '/news/news-2026-07',
    isSpecial: true,
  },
  {
    id: 'news-2026-04',
    dateTag: '2026/4/1 集團動態',
    title: '寶慈生命事業正式加入寶碩集團(股票代號5210)，攜手打造尊榮生命服務',
    summary: '寶慈生命事業正式成為寶碩集團子公司。透過導入上市集團嚴謹的法人治理規範與龐大資源支持，進一步提升客戶權益保障，並以兼具人文溫度與財務誠信的防護網提供安心生命服務。',
    to: '/news/news-2026-04',
    isSpecial: true, // 同步改為 true，兩張卡片皆套用一致的淺深金色設計
  },
];

export default function Announcement() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
        <div className="gold-divider w-32 mx-auto mt-4" />
      </div>

      {/* 左右切換按鈕 */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-[-20px] top-[60%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-800 text-gold-400 hover:bg-gold-500 hover:text-ink-900 border border-gold-400/40 backdrop-blur-md flex items-center justify-center transition-all opacity-0 group-hover/announcement:opacity-100 shadow-xl"
        aria-label="上一則消息"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute right-[-20px] top-[60%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-800 text-gold-400 hover:bg-gold-500 hover:text-ink-900 border border-gold-400/40 backdrop-blur-md flex items-center justify-center transition-all opacity-0 group-hover/announcement:opacity-100 shadow-xl"
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
            className={`snap-start shrink-0 w-[85vw] sm:w-[450px] md:w-[500px] group relative rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer border ${
              item.isSpecial
                ? 'bg-gradient-to-br from-amber-50/80 via-yellow-50/40 to-amber-100/60 border-gold-500/40'
                : 'bg-white border-gold-400/25'
            }`}
          >
            <div>
              {/* 日期標籤 */}
              <div className="mb-4">
                <span className={`inline-flex items-center gap-1.5 font-serif-tc px-4 py-1.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 shadow-sm ${
                  item.isSpecial
                    ? 'bg-gold-100 text-gold-800 border border-gold-300 group-hover:bg-gold-600 group-hover:text-white'
                    : 'bg-slate-100 text-slate-800 border border-slate-200 group-hover:bg-gold-600 group-hover:text-white group-hover:border-gold-600'
                }`}>
                  <Calendar className={`w-3.5 h-3.5 transition-colors ${item.isSpecial ? 'text-gold-700 group-hover:text-white' : 'text-gold-600 group-hover:text-white'}`} />
                  {item.dateTag}
                </span>
              </div>

              {/* 卡片標題 */}
              <h3 className={`font-serif-tc text-lg md:text-xl font-bold transition-colors duration-300 leading-snug mb-4 ${
                item.isSpecial ? 'text-gold-900 group-hover:text-gold-700' : 'text-ink-900 group-hover:text-gold-600'
              }`}>
                {item.title}
              </h3>

              {/* 卡片內文 */}
              <p className="text-ink-700 text-sm md:text-base leading-relaxed line-clamp-4">
                {item.summary}
              </p>
            </div>

            {/* 底部線條：常駐淺深金色線條 */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300 transition-transform duration-500 origin-left ${
              item.isSpecial ? 'scale-x-100 opacity-90 group-hover:scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
            }`} />
          </article>
        ))}
      </div>
    </div>
  );
}
