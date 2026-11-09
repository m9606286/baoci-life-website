import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar } from 'lucide-react';

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
    id: 'news-2026-07',
    date: '2026年7月',
    category: '資本增資',
    title: '寶慈生命事業資本額順利完成增資至新臺幣 6,000 萬元',
    summary: '為持續深化服務品質、擴大營運規模並強化預付款履約保障能力，寶慈生命事業已正式完成資本額變更登記，實收資本額增資至新臺幣 6,000 萬元，展現企業穩健營運實力與長期承諾。',
    to: '/news/news-2026-07',
  },
  {
    id: 'news-2026-04',
    date: '2026年4月',
    category: '集團動態',
    title: '寶慈生命事業正式加入寶碩財務科技集團，攜手打造尊榮生命服務',
    summary: '寶慈生命事業正式成為寶碩財務科技集團旗下子公司。透過導入上市集團嚴謹的法人治理規範與龐大資源支持，進一步提升客戶權益保障，並以兼具人文溫度與財務誠信的防護網提供安心生命服務。',
    to: '/news/news-2026-04',
  },
];

export default function Announcement() {
  return (
    <div className="w-full">
      {/* 區塊標題與「查看全部」 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-gold-400/30 pb-6">
        <div>
          {/* 英文字型樣式改為與 PRENEED CONTRACT 完全一致 */}
          <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-bold">
            NEWS & ANNOUNCEMENTS
          </p>
          {/* 中文標題改為「最新消息」 */}
          <h2 className="font-serif-tc text-3xl md:text-4xl font-bold text-ink-900 mt-2">
            最新消息
          </h2>
        </div>
        <Link 
          to="/news" 
          className="mt-4 md:mt-0 inline-flex items-center gap-1 text-gold-600 hover:text-gold-700 font-bold transition-colors group text-sm"
        >
          查看全部消息 
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* 消息卡片網格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {announcements.map((item) => (
          <article
            key={item.id}
            className="group relative bg-white rounded-3xl p-8 border border-gold-400/25 shadow-md hover:shadow-2xl hover:border-gold-400/60 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
          >
            {/* 裝飾頂條 */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            <div>
              {/* 分類標籤與日期：與標題字體統一，具備 hover 變色效果 */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif-tc px-3.5 py-1 rounded-full text-xs font-bold transition-colors duration-300 bg-slate-100 text-slate-800 group-hover:bg-ink-900 group-hover:text-white border border-slate-200 group-hover:border-ink-900">
                  {item.category}
                </span>
                <span className="font-serif-tc flex items-center gap-1.5 text-xs font-bold transition-colors duration-300 text-slate-800 group-hover:text-white group-hover:bg-ink-900 px-3 py-1 rounded-full bg-slate-100 group-hover:border-ink-900">
                  <Calendar className="w-3.5 h-3.5 text-gold-500" />
                  {item.date}
                </span>
              </div>

              {/* 標題 */}
              <h3 className="font-serif-tc text-xl md:text-2xl font-bold text-ink-900 group-hover:text-gold-600 transition-colors duration-300 leading-snug mb-3">
                {item.title}
              </h3>

              {/* 摘要 */}
              <p className="text-slate-600 text-sm leading-relaxed font-['Microsoft_JhengHei'] line-clamp-3">
                {item.summary}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
