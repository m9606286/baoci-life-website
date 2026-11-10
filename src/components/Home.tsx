import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Newspaper } from 'lucide-react';

interface NewsItem {
  id: number;
  date: string;
  category: string;
  title: string;
  content: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    date: '2026/8/13',
    category: '公司公告',
    title: '資本增資',
    content: '寶慈生命事業資本額順利完成增資至新臺幣 6,000 萬元，持續深化服務品質與履約保障能力。',
  },
  {
    id: 2,
    date: '2026/05/20',
    category: '品牌動態',
    title: '集團資源深化合作',
    content: '正式納入寶碩財務科技集團旗下，結合上市集團嚴謹之財務與法人治理機制，全面提升服務品質與信託保障。',
  },
];

export default function Announcement() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextNews = () => {
    setCurrentIndex((prev) => (prev + 1) % newsData.length);
  };

  const prevNews = () => {
    setCurrentIndex((prev) => (prev - 1 + newsData.length) % newsData.length);
  };

  const current = newsData[currentIndex];

  return (
    <div className="w-full">
      <div className="text-center mb-10">
        <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-bold">
          LATEST NEWS
        </p>
        <h2 className="font-serif-tc text-3xl md:text-4xl font-bold text-ink-900 mt-2">
          最新消息
        </h2>
        <div className="gold-divider w-32 mx-auto mt-4" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* 卡片移到時切換為淺深金色 bg-gold-500/10 或 hover:bg-gold-100/60 */}
        <div className="group bg-gold-400/15 border border-gold-400/30 hover:bg-gold-500/10 hover:border-gold-500 rounded-3xl p-8 md:p-10 shadow-md relative transition-all duration-300">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gold-400/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-700">
                <Newspaper className="w-5 h-5" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-800 text-xs font-bold uppercase tracking-wider mb-1">
                  {current.category}
                </span>
                <span className="text-sm text-slate-600 font-medium block">
                  {current.date}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevNews}
                className="p-2 rounded-full border border-gold-400/40 text-gold-800 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-colors"
                aria-label="Previous news"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextNews}
                className="p-2 rounded-full border border-gold-400/40 text-gold-800 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-colors"
                aria-label="Next news"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="pt-6">
            <h3 className="font-serif-tc text-xl md:text-2xl font-bold text-ink-900 mb-4 group-hover:text-gold-600 transition-colors">
              {current.title}
            </h3>
            <p className="font-sans text-slate-700 text-sm md:text-base leading-relaxed">
              {current.content}
            </p>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {newsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-gold-600' : 'w-2 bg-gold-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
