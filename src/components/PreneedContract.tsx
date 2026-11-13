import React, { useState, useEffect } from 'react';
import { Sparkles, Lock, UserCheck, ShieldCheck, RefreshCw, Award, FileCheck, DollarSign, Users, UserX, HeartHandshake } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import familyImage from '/core.jpg';

const coreHighlights = [
  {
    title: '提前規劃，讓愛更周全',
    desc: '預先規劃禮儀服務與相關事宜，為未來多一份從容，讓家人在面對離別時能安心陪伴、從容道別。',
  },
  {
    title: '給親愛的家人留愛不留負擔',
    desc: '如同儲蓄與保險般的資產配置，提早準備好自己想要的安排，避免將未來的財務與精神壓力留給家人。',
  },
  {
    title: '保證 75% 信託，永續經營有保障',
    desc: '依法將 75% 款項交付京城銀行信託專戶管理；身為寶碩集團 (股票代號5210) 子公司，落實永續服務承諾。',
  },
];

const benefitBubbles = [
  { id: 0, title: '省錢 省事 省麻煩', icon: Sparkles },
  { id: 1, title: '鎖定價格 抗通膨', icon: Lock },
  { id: 2, title: '選擇自己想要的方式', icon: UserCheck },
];

const preneedItems = [
  { title: '不分老少', desc: '不受年齡與體況限制，皆可預先規劃', icon: Users },
  { title: '可指定使用', desc: '可指定使用對象（不限本人或家人），彈性便利', icon: RefreshCw },
  { title: '專業服務', desc: '由專業禮儀團隊全程執行', icon: Award },
  { title: '確定金額的喪葬服務', desc: '預約價格鎖定，免受未來通膨影響', icon: FileCheck },
];

const insuranceItems = [
  { title: '投保限制', desc: '受年齡、健康狀況與體況核保規定限制', icon: Lock },
  { title: '不可指定使用', desc: '被保險人於投保時即固定，無法隨意變更', icon: UserX },
  { title: '金錢理賠', desc: '以保險金給付為主，非直接提供實質服務', icon: DollarSign },
  { title: '遺屬的生活費用', desc: '提供身故後家庭經濟的資金補貼', icon: Users },
];

export default function PreneedConcept() {
  const revealResult = useReveal<HTMLDivElement>();
  const ref = Array.isArray(revealResult) ? revealResult[0] : revealResult;

  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [years, setYears] = useState<number>(20);
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const headerOffset = 100;
          const elementPosition = el.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - headerOffset,
            behavior: 'instant' as ScrollBehavior,
          });
        }, 50);
      }
    }
  }, []);

  const startX = 135;
  const endX = 805;
  const chartWidth = endX - startX;
  const baseLineY = 190; 
  const maxGrowthHeight = 155; 
  const maxMultiplier = Math.pow(1.02, 80) - 1; 

  const getInflationY = (t: number) => {
    const multiplier = Math.pow(1.02, t) - 1;
    return baseLineY - (multiplier / maxMultiplier) * maxGrowthHeight;
  };

  const generateCurvePoints = (maxYear: number) => {
    const points: string[] = [];
    for (let t = 0; t <= maxYear; t++) {
      const x = startX + (t / 80) * chartWidth;
      const y = getInflationY(t);
      points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return points;
  };

  const fullCurvePoints = generateCurvePoints(80);
  const fullCurvePath = `M ${fullCurvePoints.join(' L ')}`;
  const growthPercent = Math.round((Math.pow(1.02, years) - 1) * 100);
  const currentSvgX = startX + (years / 80) * chartWidth;
  const currentCurveY = getInflationY(years);
  const activeCurvePoints = generateCurvePoints(years);
  const savedAreaPolygon = `${startX},${baseLineY} ${activeCurvePoints.join(' ')} ${currentSvgX.toFixed(1)},${baseLineY}`;

  const handleSvgClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const svgX = (clickX / rect.width) * 880;
    if (svgX >= startX && svgX <= endX) {
      const calculatedYears = Math.round(((svgX - startX) / chartWidth) * 80);
      setYears(Math.max(1, Math.min(80, calculatedYears)));
    }
  };

  return (
    <section className="pt-2 pb-16 lg:pt-4 lg:pb-24 bg-ivory-100 relative overflow-hidden -mt-6 lg:-mt-10">
      <div ref={ref} className="max-w-6xl mx-auto px-6 relative">
        
        {/* 什麼是生前契約 (對應 id="contract-intro") */}
        <div id="contract-intro" className="scroll-mt-28">
          <div className="text-center mb-12">
            <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-bold reveal">
              PRENEED CONTRACT
            </p>
            <h2 className="font-serif-tc text-3xl md:text-4xl lg:text-5xl font-bold text-ink-950 mt-2 reveal reveal-delay-1">
              什麼是生前契約？
            </h2>
            <div className="w-60 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4 reveal reveal-delay-2" />
            <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto reveal reveal-delay-3">
              生前契約是給家人最後的一道保障，也是為自己預先記錄並落實身後事安排的尊榮選擇。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14 reveal reveal-delay-3">
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl border border-gold-400/30 min-h-[380px] lg:min-h-full group">
              <img
                src={familyImage}
                alt="溫暖陪伴"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-serif-tc text-xl font-bold drop-shadow">預先安排，圓滿無遺憾</p>
                <p className="text-sm text-ivory-100/90 mt-1 drop-shadow">以愛為出發，讓家人多一份安心。</p>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between gap-5">
              {coreHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl p-5 sm:p-6 overflow-hidden hover:-translate-y-1 transition-all duration-300 flex-1 flex flex-col justify-center cursor-pointer"
                  style={{
                    background: 'linear-gradient(180deg, #ffffff 0%, #fdfcfb 70%, #faf6f0 100%)',
                    border: '1px solid rgba(212, 175, 55, 0.22)',
                    boxShadow: '0 8px 25px -5px rgba(212, 175, 55, 0.1), 0 3px 8px rgba(0, 0, 0, 0.03)',
                  }}
                >
                  <div>
                    <h3 className="relative z-10 font-serif-tc text-lg sm:text-xl font-bold text-ink-950 group-hover:text-gold-500 transition-colors duration-300 mb-2 flex items-start gap-1.5">
                      <img src="/v.jpg" alt="勾勾" className="h-5 sm:h-6 w-auto object-contain shrink-0 mt-0.5" />
                      <span>{item.title}</span>
                    </h3>
                    <p className="relative z-10 text-sm sm:text-base text-slate-600 leading-relaxed pl-6 sm:pl-7">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
