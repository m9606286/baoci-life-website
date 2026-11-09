import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

export interface NewsItem {
  id: string | number;
  date: string;
  category: string;
  title: string;
  summary: string;
  to?: string;
}

const announcements: NewsItem[] = [
  {
    id: 'news-2026-08',
    date: '2026年8月',
    category: '資本增資',
    title: '寶慈生命事業資本額順利完成增資至新臺幣 6,000 萬元',
    summary: '為持續深化服務品質、擴大營運規模並強化預付款履約保障能力，寶慈生命事業已正式完成資本額變更登記，實收資本額增資至新臺幣 6,000 萬元，展現企業穩健營運實力與長期承諾。',
    to: '/news/news-2026-08',
  },
  {
    id: 'news-2026-04',
    date: '2026年4月',
    category: '集團動態',
    title: '寶慈生命事業正式加入寶碩集團(股票代號5210)，攜手打造尊榮生命服務',
    summary: '寶慈生命事業正式成為寶碩集團子公司。透過導入上市公司集團嚴謹的法人治理規範與龐大資源支持，進一步提升客戶權益保障，並以兼具人文溫度與財務誠信的防護網提供安心生命服務。',
    to: '/news/news-2026-04',
  },
  {
    id: 'news-2026-01',
    date: '2026年1月',
    category: '合規公告',
    title: '依法落實 75% 預付款交付京城銀行信託專戶管理',
    summary: '寶慈生命事業全體生前契約商品皆嚴格遵守殯葬管理條例第 51 條規定，將預收費用之 75% 依法按月交付京城銀行信託專戶專款專用，會計師定期查核會計簽證，確保消費者權益。',
    to: '/news/news-2026-01',
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
      {/* 1. 置中標題 + LATEST NEWS + 質感線 */}
      <div className="text-center mb-12">
        <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-bold">
          LATEST NEWS
        </p>
        <h2 className="font-serif-tc text-3xl md:text-4xl font-bold text-ink-900 mt-2">
          最新消息
        </h2>
        {/* 與「什麼是生前契約」相同的質感線 */}
        <div className="gold-divider w-32 mx-auto mt-4" />
      </div>

      {/* 2. 左右切換按鈕：採用深質感灰背景 bg-slate-800 */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-[-20px] top-[55%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-800 text-gold-400 hover:bg-gold-500 hover:text-ink-900 border border-gold-400/40 backdrop-blur-md flex items-center justify-center transition-all opacity-90 hover:opacity-100 shadow-2xl"
        aria-label="上一則消息"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute right-[-20px] top-[55%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-800 text-gold-400 hover:bg-gold-500 hover:text-ink-900 border border-gold-400/40 backdrop-blur-md flex items-center justify-center transition-all opacity-90 hover:opacity-100 shadow-2xl"
        aria-label="下一則消息"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* 3. 橫向滾動容器 */}
      <div
        ref={scrollContainerRef}
        className="flex gap-8 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {announcements.map((item) => (
          <article
            key={item.id}
            className="snap-start shrink-0 w-[85vw] sm:w-[480px] md:w-[540px] group relative bg-white rounded-3xl p-8 border border-gold-400/25 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
          >
            <div>
              {/* 日期與類別標籤：字體加大至 text-sm，Hover 時分類名轉為白字 */}
              <div className="mb-6 flex items-center gap-2">
                <span className="inline-flex items-center gap-2 font-serif-tc px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 bg-gold-400/20 text-gold-800 border border-gold-400/40 group-hover:bg-gold-500 group-hover:border-gold-500 shadow-sm">
                  <Calendar className="w-4 h-4 text-gold-600 group-hover:text-white" />
                  <span className="text-ink-900">{item.date}</span>
                  {/* 移到卡片上時轉為白字 */}
                  <span className="text-gold-900 group-hover:text-white transition-colors duration-300">
                    {item.category}
                  </span>
                </span>
              </div>

              {/* 標題 */}
              <h3 className="font-serif-tc text-2xl md:text-3xl font-bold text-ink-900 group-hover:text-gold-600 transition-colors duration-300 leading-snug mb-4">
                {item.title}
              </h3>

              {/* 內文：完全對齊「我們的故事」內文字型 font-serif-tc */}
              <p className="font-serif-tc text-slate-700 text-base md:text-lg leading-relaxed line-clamp-4">
                {item.summary}
              </p>
            </div>

            {/* 移到卡片上時在底部出現金色線條 */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </article>
        ))}
      </div>
    </div>
  );
}
