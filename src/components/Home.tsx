import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChevronDown, Heart, ChevronRight, ShieldCheck, FileText, Award, Lock, PhoneCall } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import CoreValues from '@/components/CoreValues';
import Announcement from '@/components/Announcement';
import heroImage from '/hero.png';

export default function Home() {
  const revealResult = useReveal<HTMLDivElement>();
  const ref = Array.isArray(revealResult) ? revealResult[0] : revealResult;

  return (
    <div className="bg-ivory-100 min-h-screen text-ink-900 font-sans">
      
      {/* 1. Hero 品牌主視覺區：使用 mt-20 完美壓在 Header 與金色質感線下方 */}
      <section id="top" className="group/hero relative h-[calc(100vh-5rem)] min-h-[550px] max-h-[850px] overflow-hidden mt-20">
        {/* Background image with bright overlay and hover zoom */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroImage}
            alt="家人彼此陪伴"
            className="w-full h-full object-cover animate-slow-zoom group-hover/hero:scale-105 transition-transform duration-1000 ease-out"
          />
          {/* 降低遮罩深度，使圖片更明亮清晰 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-full mx-auto max-w-8xl px-6 flex flex-col justify-center">
          <div className="max-w-3xl">
            {/* 愛心圖示與 Apex BaoCi-Life */}
            <div className="flex items-center gap-3 mb-6 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <Heart className="w-5 h-5 text-white drop-shadow" />
              <span className="text-white text-sm tracking-[0.3em] uppercase font-medium drop-shadow">Apex BaoCi-Life</span>
            </div>

            {/* 主標題 */}
            <h1
              className="font-serif-tc text-4xl md:text-5xl lg:text-6xl text-white leading-[1.2] font-bold animate-fade-up drop-shadow-md"
              style={{ animationDelay: '0.4s', opacity: 0 }}
            >
              用愛心規劃
              <span className="block text-white mt-2 drop-shadow">讓家人安心</span>
            </h1>

            <p
              className="mt-8 text-lg md:text-xl text-ivory-100/95 leading-relaxed max-w-2xl animate-fade-up font-medium drop-shadow"
              style={{ animationDelay: '0.7s', opacity: 0 }}
            >
              幫助您提早規劃，讓生命的每一刻
              <br />
              都充滿尊嚴與意義。
            </p>

            <div
              className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up"
              style={{ animationDelay: '1s', opacity: 0 }}
            >
              <Link
                to="/preneed"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/60 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm group shadow-sm"
              >
                <span>瞭解生前契約</span>
                <ChevronDown className="w-4 h-4 ml-2 text-white group-hover:translate-y-0.5 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/60 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm group shadow-sm"
              >
                <Phone className="w-4 h-4 mr-2 text-white group-hover:scale-110 transition-transform" />
                <span>聯絡我們</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1.5s', opacity: 0 }}>
          <span className="text-white/80 text-xs tracking-widest font-medium">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/80 to-transparent" />
        </div>

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ivory-100 to-transparent" />
      </section>

      {/* 2. 下方內容區塊 */}
      <div ref={ref} className="space-y-24 py-20">

        {/* 最新消息 */}
        <section className="max-w-7xl mx-auto px-6">
          <Announcement />
        </section>

        {/* 關於寶慈精華 */}
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
                <Link to="/about" className="inline-flex items-center gap-2 text-ink-900 font-bold hover:text-gold-600 transition-colors">
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

        {/* 生前契約商品快速導覽 */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-bold">
              PRENEED CONTRACT
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
              <Link to="/preneed" className="w-full py-3 bg-ivory-100 hover:bg-gold-500 hover:text-white text-gold-700 font-bold rounded-xl transition-colors text-center block">
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
              <Link to="/preneed" className="w-full py-3 bg-ivory-100 hover:bg-gold-500 hover:text-white text-gold-700 font-bold rounded-xl transition-colors text-center block">
                查看完整商品細節與規格表
              </Link>
            </div>
          </div>
        </section>

        {/* 信託公開與手續指南入口 */}
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
              <Link to="/trust" className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-bold">
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
              <Link to="/procedures" className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-bold">
                查看 7 大申辦手續指南 <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 核心價值區塊 */}
        <CoreValues />

        {/* 24小時諮詢專線橫幅 */}
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
