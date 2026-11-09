import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChevronDown, Heart, ChevronRight, Award, Lock, PhoneCall, Download } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import CoreValues from '@/components/CoreValues';
import Announcement from '@/components/Announcement';
import heroImage from '/hero.png';
import serve1Image from '/Serve1.png';
import serve2Image from '/Serve2.png';
import serve3Image from '/Serve3.png';

export default function Home() {
  const revealResult = useReveal<HTMLDivElement>();
  const ref = Array.isArray(revealResult) ? revealResult[0] : revealResult;

  return (
    <div className="bg-ivory-100 min-h-screen text-ink-900 font-sans">
      
      {/* 1. Hero 品牌主視覺區 */}
      <section id="top" className="group/hero relative h-[85vh] min-h-[550px] max-h-[850px] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroImage}
            alt="家人彼此陪伴"
            className="w-full h-full object-cover animate-slow-zoom group-hover/hero:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        </div>

        <div className="relative h-full mx-auto max-w-8xl px-6 flex flex-col justify-center">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <Heart className="w-5 h-5 text-white drop-shadow" />
              <span className="text-white text-sm tracking-[0.3em] uppercase font-medium drop-shadow">Apex BaoCi-Life</span>
            </div>

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

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1.5s', opacity: 0 }}>
          <span className="text-white/80 text-xs tracking-widest font-medium">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/80 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ivory-100 to-transparent" />
      </section>

      {/* 2. 下方內容區塊 */}
      <div ref={ref} className="space-y-24 py-20">

        {/* 公司簡介區塊（COMPANY PROFILE） */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-bold">
              COMPANY PROFILE
            </p>
            <h2 className="font-serif-tc text-3xl md:text-4xl font-bold text-ink-900 mt-2">
              公司簡介
            </h2>
            <div className="gold-divider w-32 mx-auto mt-4" />
          </div>

          <div className="bg-gradient-to-br from-white via-ivory-50 to-gold-100/30 rounded-3xl p-8 md:p-12 border border-gold-400/40 shadow-xl flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 space-y-6">
              
              {/* 標籤與主標題組合為同一個 Hover 群組 */}
              <div className="group/profile-header cursor-pointer space-y-4">
                {/* 字體放大 1.5 倍（text-base） */}
                <span className="inline-block px-5 py-2 rounded-full bg-gold-400/15 border border-gold-400/30 text-gold-700 text-base font-bold tracking-wider uppercase transition-all duration-300 group-hover/profile-header:bg-gold-500 group-hover/profile-header:text-white group-hover/profile-header:border-gold-500">
                  合規經營．誠信至上
                </span>
                
                <h3 className="font-serif-tc text-2xl md:text-3xl font-bold text-ink-900 leading-snug transition-colors duration-300 group-hover/profile-header:text-gold-600">
                  專業與合規保障<br />給家人最堅實的安心依託
                </h3>
              </div>

              <p className="font-sans text-slate-700 text-sm md:text-base leading-relaxed">
                寶慈生命事業為政府合法立案之殯葬禮儀服務業者，並正式納入寶碩財務科技集團旗下經營。我們秉持人本關懷理念，結合上市集團嚴謹的財務與法人治理機制，提供透明收費與合規保障，守護每個家庭重要時刻的承諾。
              </p>

              <div className="pt-2">
                <Link to="/about" className="inline-flex items-center gap-2 text-ink-900 font-bold hover:text-gold-600 transition-colors">
                  了解更多關於寶慈經營理念與故事 <ChevronRight className="w-5 h-5 text-gold-500" />
                </Link>
              </div>
            </div>
            
            {/* 卡片區域 */}
            <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* 政府立案核准卡片 */}
              <div className="group bg-white hover:bg-gold-500 p-6 rounded-2xl shadow-sm border border-gold-400/20 text-center flex flex-col justify-between transition-all duration-300">
                <div>
                  <Award className="w-10 h-10 text-gold-600 group-hover:text-white mx-auto mb-3 transition-colors duration-300" />
                  <h4 className="font-bold text-ink-900 group-hover:text-white mb-1 transition-colors duration-300">政府立案核准</h4>
                  <p className="text-xs text-slate-500 group-hover:text-white/80 mb-4 transition-colors duration-300">民政局核准銷售文號</p>
                </div>
                {/* 字體大小同標題(text-sm md:text-base)，加上質感線，hover時字體反白與淺深金色背景 */}
                <a 
                  href="/documents/台南市民政局生前契約銷售及代銷商最新核准函.pdf" 
                  download 
                  className="inline-flex items-center justify-center gap-1.5 text-sm md:text-base font-bold text-gold-700 bg-gold-50 border border-gold-400/40 group-hover:bg-gold-600 group-hover:text-white group-hover:border-gold-600 py-2.5 px-4 rounded-xl transition-all duration-300 mt-2 shadow-sm"
                >
                  <span>核准函</span>
                  <Download className="w-4 h-4" />
                </a>
              </div>

              {/* 75% 依法信託卡片 */}
              <div className="group bg-white hover:bg-gold-500 p-6 rounded-2xl shadow-sm border border-gold-400/20 text-center flex flex-col justify-between transition-all duration-300">
                <div>
                  <Lock className="w-10 h-10 text-gold-600 group-hover:text-white mx-auto mb-3 transition-colors duration-300" />
                  <h4 className="font-bold text-ink-900 group-hover:text-white mb-1 transition-colors duration-300">75% 依法信託</h4>
                  <p className="text-xs text-slate-500 group-hover:text-white/80 mb-4 transition-colors duration-300">京城銀行履約專戶</p>
                </div>
                {/* 字體大小同標題(text-sm md:text-base)，加上質感線，hover時字體反白與淺深金色背景 */}
                <Link 
                  to="/trust" 
                  className="inline-flex items-center justify-center gap-1.5 text-sm md:text-base font-bold text-gold-700 bg-gold-50 border border-gold-400/40 group-hover:bg-gold-600 group-hover:text-white group-hover:border-gold-600 py-2.5 px-4 rounded-xl transition-all duration-300 mt-2 shadow-sm"
                >
                  <span>了解更多</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* 我們的服務 */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-bold">
              OUR SERVICES
            </p>
            <h2 className="font-serif-tc text-3xl md:text-4xl font-bold text-ink-900 mt-2">
              我們的服務
            </h2>
            <div className="gold-divider w-32 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 生前契約規劃：去除 PRE-NEED，放入 Serve1.png，了解更多加 > */}
            <div className="group bg-white rounded-3xl p-8 border border-gold-400/30 shadow-md hover:shadow-xl transition-all relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="w-full h-[70px] rounded-xl overflow-hidden mb-3 flex items-center justify-center bg-transparent">
                  <img 
                    src={serve1Image} 
                    alt="生前契約規劃" 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="font-serif-tc text-2xl font-bold text-ink-900 group-hover:text-gold-500 transition-colors duration-300 text-center mb-3">
                  生前契約規劃
                </h3>

                <p className="font-sans text-slate-700 text-sm md:text-base leading-relaxed mb-6">
                  提供寶富、寶暉等專業生前契約方案，讓您提前為未來妥善安排，減輕家屬負擔，讓愛與安心延續。
                </p>
              </div>
              
              <Link to="/preneed" className="w-full py-3 bg-ivory-100 hover:bg-gold-500 hover:text-white text-gold-700 font-bold rounded-xl transition-colors text-center inline-flex items-center justify-center gap-1">
                <span>了解更多</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 禮儀服務：Serve2.png，了解更多加 > */}
            <div className="group bg-white rounded-3xl p-8 border border-gold-400/30 shadow-md hover:shadow-xl transition-all relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="w-full h-[70px] rounded-xl overflow-hidden mb-3 flex items-center justify-center bg-transparent">
                  <img 
                    src={serve2Image} 
                    alt="禮儀服務" 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="font-serif-tc text-2xl font-bold text-ink-900 group-hover:text-gold-500 transition-colors duration-300 text-center mb-3">
                  禮儀服務
                </h3>

                <p className="font-sans text-slate-700 text-sm md:text-base leading-relaxed mb-6">
                  秉持專業、尊嚴與人本關懷，提供全方位的精緻奠禮流程規劃與溫馨陪伴服務。
                </p>
              </div>

              <Link to="/services" className="w-full py-3 bg-ivory-100 hover:bg-gold-500 hover:text-white text-gold-700 font-bold rounded-xl transition-colors text-center inline-flex items-center justify-center gap-1">
                <span>了解更多</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 手續服務：去除 PROCEDURES，放入 Serve3.png，了解更多加 > */}
            <div className="group bg-white rounded-3xl p-8 border border-gold-400/30 shadow-md hover:shadow-xl transition-all relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="w-full h-[70px] rounded-xl overflow-hidden mb-3 flex items-center justify-center bg-transparent">
                  <img 
                    src={serve3Image} 
                    alt="手續服務" 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="font-serif-tc text-2xl font-bold text-ink-900 group-hover:text-gold-500 transition-colors duration-300 text-center mb-3">
                  手續服務
                </h3>

                <p className="font-sans text-slate-700 text-sm md:text-base leading-relaxed mb-6">
                  包含新購、轉讓、繼承、履約、解約等各項申辦手續指引與專屬表單文件下載。
                </p>
              </div>

              <Link to="/procedures" className="w-full py-3 bg-ivory-100 hover:bg-gold-500 hover:text-white text-gold-700 font-bold rounded-xl transition-colors text-center inline-flex items-center justify-center gap-1">
                <span>了解更多</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>

        {/* 核心價值區塊 */}
        <CoreValues />

        {/* 最新消息：放置於核心價值之後 */}
        <section className="max-w-7xl mx-auto px-6">
          <Announcement />
        </section>

        {/* 24小時諮詢專線橫幅 */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="group relative bg-gradient-to-br from-white via-ivory-50 to-gold-100/40 rounded-3xl p-8 md:p-12 text-center border border-gold-400/40 shadow-xl overflow-hidden transition-all duration-500 hover:bg-gold-600">
            <h3 className="font-serif-tc text-2xl md:text-3xl font-bold mb-3 text-ink-900 group-hover:text-white transition-colors duration-300">
              需要即時禮儀諮詢或契約解答？
            </h3>
            <p className="font-sans text-slate-600 text-sm md:text-base font-medium mb-8 group-hover:text-white/90 transition-colors duration-300">
              寶慈生命事業提供 24 小時專人服務，隨時為您解答疑問與提供協助。
            </p>
            <a 
              href="tel:0800600603" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-ink-900 text-gold-400 group-hover:bg-white group-hover:text-gold-700 font-bold rounded-full text-xl shadow-lg transition-transform hover:scale-105"
            >
              <PhoneCall className="w-6 h-6 animate-pulse" />
              24H 免費服務專線：0800-600-603
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
