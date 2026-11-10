import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChevronDown, Heart, ChevronRight, Award, Lock, Download } from 'lucide-react';
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
      <div ref={ref} className="space-y-12 py-12">

        {/* 公司簡介區塊 */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
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
              
              <div className="group/profile-header cursor-pointer space-y-4">
                <span className="inline-block px-5 py-2 rounded-full bg-gold-400/15 border border-gold-400/30 text-gold-700 text-base font-bold tracking-wider uppercase transition-all duration-300 group-hover/profile-header:bg-gold-500 group-hover/profile-header:text-white group-hover/profile-header:border-gold-500">
                  合規經營．誠信至上
                </span>
                
                <h3 className="font-serif-tc text-2xl md:text-3xl font-bold text-ink-900 leading-snug transition-colors duration-300 group-hover/profile-header:text-gold-600">
                  專業與合規保障<br />給家人最堅實的安心依託
                </h3>
              </div>

              <p className="font-sans text-slate-700 text-sm md:text-base leading-relaxed">
                寶慈生命事業為政府合法立案之殯葬禮儀服務業者，並正式納入寶碩集團旗下經營。我們秉持人本關懷理念，結合上櫃集團嚴謹的財務與法人治理機制，提供透明收費與合規保障，守護每個家庭重要時刻的承諾。
              </p>

              <div className="pt-2">
                <Link to="/about" className="inline-flex items-center gap-2 text-ink-900 font-bold hover:text-gold-600 transition-colors">
                  了解更多關於寶慈經營理念與故事 <ChevronRight className="w-5 h-5 text-gold-500" />
                </Link>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* 政府立案核准卡片：優化白底 + 金邊浮起質感 */}
              <div className="group bg-white hover:border-gold-400 p-6 rounded-2xl shadow-sm hover:shadow-md border border-gold-400/20 text-center flex flex-col justify-between transition-all duration-300 hover:-translate-y-0.5">
                <div>
                  <Award className="w-10 h-10 text-gold-600 group-hover:scale-105 mx-auto mb-3 transition-transform duration-300" />
                  <h4 className="font-bold text-ink-900 mb-1">政府立案核准</h4>
                  <p className="text-xs text-slate-500 mb-4">民政局核准銷售文號</p>
                </div>
                <a 
                  href="/documents/台南市民政局生前契約銷售及代銷商最新核准函.pdf" 
                  download 
                  className="inline-flex items-center justify-center gap-1.5 text-sm md:text-base font-bold text-gold-700 bg-gold-50 border border-gold-400/40 hover:bg-gold-600 hover:text-white hover:border-gold-600 py-2.5 px-4 rounded-xl transition-all duration-300 mt-2 shadow-sm"
                >
                  <span>核准函</span>
                  <Download className="w-4 h-4" />
                </a>
              </div>

              {/* 75% 依法信託卡片：優化白底 + 金邊浮起質感 */}
              <div className="group bg-white hover:border-gold-400 p-6 rounded-2xl shadow-sm hover:shadow-md border border-gold-400/20 text-center flex flex-col justify-between transition-all duration-300 hover:-translate-y-0.5">
                <div>
                  <Lock className="w-10 h-10 text-gold-600 group-hover:scale-105 mx-auto mb-3 transition-transform duration-300" />
                  <h4 className="font-bold text-ink-900 mb-1">75% 依法信託</h4>
                  <p className="text-xs text-slate-500 mb-4">京城銀行履約專戶</p>
                </div>
                <Link 
                  to="/trust" 
                  className="inline-flex items-center justify-center gap-1.5 text-sm md:text-base font-bold text-gold-700 bg-gold-50 border border-gold-400/40 hover:bg-gold-600 hover:text-white hover:border-gold-600 py-2.5 px-4 rounded-xl transition-all duration-300 mt-2 shadow-sm"
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
          <div className="text-center mb-10">
            <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-bold">
              OUR SERVICES
            </p>
            <h2 className="font-serif-tc text-3xl md:text-4xl font-bold text-ink-900 mt-2">
              我們的服務
            </h2>
            <div className="gold-divider w-32 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  提供完善的生前契約規劃服務，讓您提前安排人生重要事宜，減輕家人未來的負擔，將愛與關懷化為長久的安心。
                </p>
              </div>
              
              <Link to="/preneed" className="w-full py-3 bg-ivory-100 hover:bg-gold-500 hover:text-white text-gold-700 font-bold rounded-xl transition-colors text-center inline-flex items-center justify-center gap-1">
                <span>了解更多</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

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
                  秉持專業、尊嚴與人本關懷，提供全方位的精緻禮儀流程規劃與溫馨陪伴服務。
                </p>
              </div>

              <Link to="/services" className="w-full py-3 bg-ivory-100 hover:bg-gold-500 hover:text-white text-gold-700 font-bold rounded-xl transition-colors text-center inline-flex items-center justify-center gap-1">
                <span>了解更多</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

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
                  提供完善的申辦流程指引，讓各項服務辦理更加清楚、便利。
                </p>
              </div>

              <Link to="/procedures" className="w-full py-3 bg-ivory-100 hover:bg-gold-500 hover:text-white text-gold-700 font-bold rounded-xl transition-colors text-center inline-flex items-center justify-center gap-1">
                <span>了解更多</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 我們的核心價值 */}
        <section className="max-w-7xl mx-auto px-6">
          <CoreValues />
        </section>

        {/* 最新消息 */}
        <section className="max-w-7xl mx-auto px-6">
          <Announcement />
        </section>

        {/* 聯絡寶慈 */}
        <section className="max-w-4xl mx-auto px-6 text-center py-2">
          <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-bold">
            CONTACT US
          </p>
          <h2 className="font-serif-tc text-3xl md:text-4xl font-bold text-ink-900 mt-2">
            聯絡寶慈
          </h2>
          <div className="gold-divider w-32 mx-auto mt-4 mb-6" />

          <p className="font-sans text-slate-700 text-base md:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            寶慈秉持尊重生命、關懷家人的初心，以真誠、溫暖與專業的服務，陪伴家人走過人生重要的告別時刻，讓逝者獲得尊嚴與安息，讓愛與思念得以延續，實踐讓逝者安息，讓生者安心的承諾。
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 bg-gold-600 hover:bg-gold-700 text-white font-bold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>聯絡我們</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </section>

      </div>
    </div>
  );
}
