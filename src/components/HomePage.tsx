import React from 'react';
import Link from 'next/link'; // 若使用 React Router，請替換為 import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import CoreValues from '@/components/CoreValues'; // 引用已寫好的 CoreValues.tsx
import { 
  ShieldCheck, 
  FileText, 
  Award, 
  ChevronRight, 
  PhoneCall, 
  Lock 
} from 'lucide-react';

// 最新消息範例資料（修正為兩則企業集團重大動態）
const latestNews = [
  {
    id: 1,
    date: '2026.07.15',
    category: '資本增資',
    title: '寶慈生命事業資本額順利完成增資至新臺幣 6,000 萬元',
    summary: '為持續深化服務品質並強化履約保障能力，寶慈生命事業正式完成資本額變更登記，增資至新臺幣 6,000 萬元，展現穩健營運實力。',
    href: '/news/1',
  },
  {
    id: 2,
    date: '2026.04.01',
    category: '集團動態',
    title: '寶慈生命事業正式加入寶碩財務科技集團，攜手打造尊榮生命服務',
    summary: '寶慈生命事業正式成為寶碩財務科技集團旗下子公司，導入上市集團資源與嚴謹治理規範，全面提升客戶權益保障。',
    href: '/news/2',
  },
];

export default function HomePage() {
  const revealResult = useReveal<HTMLDivElement>();
  const ref = Array.isArray(revealResult) ? revealResult[0] : revealResult;

  return (
    <div className="bg-ivory-100 min-h-screen text-ink-900 font-sans">
      
      {/* 1. Hero 品牌主視覺區 */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-ink-900 text-white overflow-hidden">
        {/* 背景大圖與漸層遮罩 */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.jpg" 
            alt="寶慈生命事業" 
            className="w-full h-full object-cover object-center opacity-40 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
          <p className="font-serif-tc text-gold-400 text-sm md:text-base tracking-[0.4em] uppercase font-bold mb-4">
            BAOCI LIFE ENTERPRISE
          </p>
          <h1 className="font-serif-tc text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-wide">
            秉持人本關懷使命<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200">
              守護生命永恆尊嚴
            </span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-['Microsoft_JhengHei']">
            持續深化客戶權益保障，落實誠信經營與服務品質，致力於提供安心、完善的生命服務，確保企業永續發展。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/products" 
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-ink-900 font-bold rounded-full shadow-lg hover:shadow-gold-500/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              探索生前契約方案 <ChevronRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/trust" 
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-gold-400/40 text-white font-medium rounded-full backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2"
            >
              75% 信託公開專區 <ShieldCheck className="w-5 h-5 text-gold-400" />
            </Link>
          </div>
        </div>
      </section>

      <div ref={ref} className="space-y-24 py-20">

        {/* 2. 最新消息 (兩則集團重點動態) */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gold-400/30 pb-6">
            <div>
              <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.3em] uppercase font-bold reveal">
                NEWS & ANNOUNCEMENTS
              </p>
              <h2 className="font-serif-tc text-3xl md:text-4xl font-bold text-ink-900 mt-2 reveal reveal-delay-1">
                最新消息與公告
              </h2>
            </div>
            <Link href="/news" className="mt-4 md:mt-0 text-gold-600 hover:text-gold-700 font-medium flex items-center gap-1 transition-colors">
              查看全部消息 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestNews.map((news, idx) => (
              <Link 
                key={news.id} 
                href={news.href}
                className={`reveal reveal-delay-${idx + 1} bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gold-400/20 hover:border-gold-400/60 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                    <span className="px-3 py-1 rounded-full bg-gold-400/15 text-gold-700 font-bold">
                      {news.category}
                    </span>
                    <span className="font-mono text-slate-400">{news.date}</span>
                  </div>
                  <h3 className="font-serif-tc text-xl font-bold text-ink-900 group-hover:text-gold-600 transition-colors line-clamp-2 mb-3">
                    {news.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed font-['Microsoft_JhengHei']">
                    {news.summary}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-gold-600 text-sm font-bold flex items-center justify-end gap-1 group-hover:translate-x-1 transition-transform">
                  閱讀詳情 <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 3. 關於寶慈精華 (About Summary) */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-white via-ivory-50 to-gold-100/30 rounded-3xl p-8 md:p-12 border border-gold-400/40 shadow-xl flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 space-y-6">
              <span className="px-4 py-1.5 rounded-full bg-gold-400/15 border border-gold-400/30 text-gold-700 text-xs font-bold tracking-wider uppercase">
                ABOUT BAOCI / 關於寶慈
              </span>
              <h2 className="font-serif-tc text-3xl md:text-4xl font-bold text-ink-900 leading-snug">
                合規經營、誠信至上<br />給家屬最堅實的安心依託
              </h2>
              <p className="text-slate-700 text-base leading-relaxed font-['Microsoft_JhengHei']">
                寶慈生命事業具備主管機關合法立案證明與代銷許可。我們以圓滿生命為使命，透過透明的收費與嚴格的服務品質控管，讓每位家屬在面臨重大時刻時，都能擁有最貼心、專業的依靠。
              </p>
              <div className="pt-2">
                <Link href="/about" className="inline-flex items-center gap-2 text-ink-900 font-bold hover:text-gold-600 transition-colors">
                  了解更多關於寶慈經營理念 <ChevronRight className="w-5 h-5 text-gold-500" />
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gold-400/20 text-center">
                <Award className="w-10 h-10 text-gold-600 mx-auto mb-3" />
                <h4 className="font-bold text-ink-900 mb-1">政府立案核准</h4>
                <p className="text-xs text-slate-500">民政局核准銷售文號</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gold-400/20 text-center">
                <Lock className="w-10 h-10 text-gold-600 mx-auto mb-3" />
                <h4 className="font-bold text-ink-900 mb-1">75% 依法信託</h4>
                <p className="text-xs text-slate-500">京城銀行履約專戶</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. 生前契約商品快速導覽 (Products Summary) */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-bold">
              CONTRACT PRODUCTS
            </p>
            <h2 className="font-serif-tc text-3xl md:text-4xl font-bold text-ink-900 mt-2">
              生前契約商品簡介
            </h2>
            <div className="gold-divider w-32 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-gold-400/30 shadow-md hover:shadow-xl transition-all relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-gold-500 text-white text-xs font-bold mb-4 inline-block">
                  尊榮規格
                </span>
                <h3 className="font-serif-tc text-2xl font-bold text-ink-900 mb-3">寶富生前契約</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  包含完整禮儀流程、大型花藝佈置與專屬禮儀顧問。專為追求完整尊榮奠禮規格之家庭規劃。
                </p>
              </div>
              <Link href="/products" className="w-full py-3 bg-ivory-100 hover:bg-gold-500 hover:text-white text-gold-700 font-bold rounded-xl transition-colors text-center block">
                查看完整商品細節與規格表
              </Link>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gold-400/30 shadow-md hover:shadow-xl transition-all relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-slate-700 text-white text-xs font-bold mb-4 inline-block">
                  精緻簡約
                </span>
                <h3 className="font-serif-tc text-2xl font-bold text-ink-900 mb-3">寶暉生前契約</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  精緻實用的簡約禮儀方案，提供透明清晰的基礎儀式項目，滿足極簡莊嚴的圓滿需求。
                </p>
              </div>
              <Link href="/products" className="w-full py-3 bg-ivory-100 hover:bg-gold-500 hover:text-white text-gold-700 font-bold rounded-xl transition-colors text-center block">
                查看完整商品細節與規格表
              </Link>
            </div>
          </div>
        </section>

        {/* 5. 信託公開與手續指南入口 */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-ink-900 to-slate-800 text-white rounded-3xl p-8 md:p-10 shadow-xl flex flex-col justify-between">
              <div>
                <ShieldCheck className="w-12 h-12 text-gold-400 mb-6" />
                <h3 className="font-serif-tc text-2xl font-bold mb-4">75% 預付款信託公開專區</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-['Microsoft_JhengHei']">
                  依殯葬管理條例第51條，預收費用之 75% 已交付京城銀行信託管理。點擊查閱歷年財產報告與會計師簽證。
                </p>
              </div>
              <Link href="/trust" className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-bold">
                進入信託公開與財報下載頁面 <ChevronRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 border border-gold-400/40 shadow-xl flex flex-col justify-between">
              <div>
                <FileText className="w-12 h-12 text-gold-600 mb-6" />
                <h3 className="font-serif-tc text-2xl font-bold text-ink-900 mb-4">申辦手續與表單下載</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-['Microsoft_JhengHei']">
                  包含新購、轉讓、繼承、履約、解約等 7 大手續說明，提供完整表單下載與文件清單。
                </p>
              </div>
              <Link href="/procedures" className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-bold">
                查看 7 大申辦手續指南 <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 6. 直接引入已完成的 CoreValues 組件 */}
        <CoreValues />

        {/* 7. 24小時諮詢專線橫幅 */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-ink-900 rounded-3xl p-8 md:p-12 text-center shadow-xl">
            <h3 className="font-serif-tc text-2xl md:text-3xl font-bold mb-3">
              需要即時禮儀諮詢或契約解答？
            </h3>
            <p className="text-ink-900/80 text-sm md:text-base font-medium mb-6">
              寶慈生命事業提供 24 小時專人服務，隨時為您解答疑問與提供協助。
            </p>
            <a 
              href="tel:0800600603" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-ink-900 text-gold-400 hover:bg-ink-800 font-bold rounded-full text-xl shadow-lg transition-transform hover:scale-105"
            >
              <PhoneCall className="w-6 h-6 text-gold-400 animate-pulse" />
              24H 免費服務專線：0800-600-603
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
