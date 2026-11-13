import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { ArrowRight } from 'lucide-react';

// 團隊成員資料：包含 6 位禮儀師 + 1 位禮儀顧問
const teamMembers = [
  // --- 禮儀師 ---
  {
    name: '王室悰',
    title: '禮儀總監',
    image: '/王室悰.png',
    fallbackImage: '/王室悰.png',
    description: '擁有十多年禮儀服務經驗，具備專業服務規劃與管理能力，以細心、同理心與專業態度，確保每場禮儀服務皆能圓滿周全。',
  },
  {
    name: '王立中',
    title: '禮儀師',
    image: '/王立中.png',
    fallbackImage: '/王立中.jpg',
    certId: '1050068290',
  },
  {
    name: '林柏宏',
    title: '禮儀師',
    image: '/林柏宏.png',
    fallbackImage: '/林柏宏.png',
    certId: '1050079874',
  },
  {
    name: '張晉旗',
    title: '禮儀師',
    image: '/張晉旗.png',
    fallbackImage: '/張晉旗.jpg',
    certId: '1040071129',
  },
  {
    name: '杜美慧',
    title: '禮儀師',
    image: '/杜美慧.png',
    fallbackImage: '/杜美慧.jpg',
    certId: '1090053809',
  },
  {
    name: '曾志忠',
    title: '禮儀師',
    image: '/曾志忠.png',
    fallbackImage: '/曾志忠.jpg',
    certId: '1040073107',
  },
  {
    name: '謝淑娟',
    title: '禮儀師',
    image: '/謝淑娟.png',
    fallbackImage: '/謝淑娟.jpg',
    certId: '1040033800',
  },
];

// 12 道禮儀服務流程資料
const processSteps = [
  {
    number: '01',
    title: '臨終關懷',
    desc: '提供 24 小時即時諮詢與臨終指引，第一時間給予家屬溫暖支持與安心陪伴。',
    image: '/臨終關懷.jpg',
    fallbackImage: '/臨終關懷.png',
  },
  {
    number: '02',
    title: '尊體接運',
    desc: '專車及專業接體人員協助接運逝者至指定殯儀館或接體地點，並完善冰存安置。',
    image: '/遺體接運.jpg',
    fallbackImage: '/遺體接運.png',
  },
  {
    number: '03',
    title: '設立靈堂',
    desc: '協助設置安靈拜祭空間、豎靈儀式與牌位安排，提供家屬靜心追思與守靈場合。',
    image: '/設立靈堂.jpg',
    fallbackImage: '/設立靈堂.png',
  },
  {
    number: '04',
    title: '入殮',
    desc: '由專業禮儀師引導進行尊榮入殮儀式，為逝者整理容顏、更衣並恭安至壽木中。',
    image: '/入殮.jpg',
    fallbackImage: '/入殮.png',
  },
  {
    number: '05',
    title: '治喪協調',
    desc: '與家屬溝通宗教信仰、奠禮流程、擇定吉日吉時及會場風格規劃。',
    image: '/治喪協調.jpg',
    fallbackImage: '/治喪協調.png',
  },
  {
    number: '06',
    title: '奠禮準備',
    desc: '印製訃聞通知親友、佈置典雅告別式會場、協調花藝、燈光音響與各項用品。',
    image: '/奠禮準備.jpg',
    fallbackImage: '/奠禮準備.png',
  },
  {
    number: '07',
    title: '家公奠禮',
    desc: '專業司儀與禮生引導進行家奠與公奠追思儀式，陪伴親友圓滿表達最後懷念。',
    image: '/家公奠禮.jpg',
    fallbackImage: '/家公奠禮.png',
  },
  {
    number: '08',
    title: '發引',
    desc: '奠禮結束後引導發引辭靈，由靈車護送靈柩前往火化場或安葬地點。',
    image: '/發引.jpg',
    fallbackImage: '/發引.png',
  },
  {
    number: '09',
    title: '火化封罐',
    desc: '陪同家屬至火化場進行火化儀式，並由禮儀師協助撿骨、迎靈與骨灰罐封罐。',
    image: '/火化封罐.jpg',
    fallbackImage: '/火化封罐.png',
  },
  {
    number: '10',
    title: '返主除靈',
    desc: '引導家屬迎請香火牌位返家安靈，並進行除靈與拜祭注意事項說明。',
    image: '/返主除靈.jpg',
    fallbackImage: '/返主除靈.png',
  },
  {
    number: '11',
    title: '擇吉安奉',
    desc: '擇吉日良辰，舉行莊嚴安葬儀式，圓滿人生最後一程。',
    image: '/擇吉安奉.jpg',
    fallbackImage: '/擇吉安奉.png',
  },
  {
    number: '12',
    title: '後續關懷',
    desc: '提供百日、對年、合爐及各項祭祀節日之提醒與諮詢，關懷陪伴永不間斷。',
    image: '/後續關懷.jpg',
    fallbackImage: '/後續關懷.png',
  },
];

export default function Services() {
  const ref = useReveal<HTMLDivElement>();
  const navigate = useNavigate();

  // 頁面載入或 Hash 改變時，瞬間跳轉對應區塊
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

  // 點擊後直接跳轉至「聯絡我們」頁面並滾動至頂部
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <section className="pt-2 pb-16 lg:pt-0 lg:pb-24 bg-ivory-100 relative overflow-hidden -mt-6 lg:-mt-10">
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-gold-100/30 blur-3xl pointer-events-none" />

      <div ref={ref} className="mx-auto max-w-8xl px-6 relative">
        
        {/* 區塊一：禮儀服務團隊 (對應 id="services-team") */}
        <div id="services-team" className="text-center mb-16 pt-4 scroll-mt-28">
          <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-bold reveal">
            PROFESSIONAL TEAM
          </p>
          <h2 className="font-serif-tc text-3xl md:text-4xl lg:text-5xl font-bold text-ink-800 mt-2 reveal reveal-delay-1">
            禮儀服務團隊
          </h2>
          <div className="gold-divider w-60 mx-auto mt-4 reveal reveal-delay-2" />
          <p className="text-ink-500 text-sm sm:text-base mt-4 mx-auto reveal reveal-delay-3">
            專業團隊全程守護與陪伴，讓您與家人在人生最重要的告別時刻，完成一場充滿愛與祝福的人生畢業典禮。
          </p>
        </div>

        {/* 禮儀團隊卡片網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className={`reveal reveal-delay-${(idx % 3) + 1} group bg-white/60 rounded-2xl p-6 border border-ivory-200/80 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300`}
            >
              {/* 大頭照外框 */}
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg bg-white flex items-center justify-center relative">
                <img
                  src={member.image}
                  alt={`${member.name} ${member.title}`}
                  className="w-full h-full object-cover object-top mix-blend-multiply bg-white transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.endsWith('.png')) {
                      target.src = member.fallbackImage;
                    } else {
                      target.style.display = 'none';
                    }
                  }}
                />
              </div>

              {/* 姓名與職稱 */}
              <h4 className="font-serif-tc text-lg font-bold text-ink-900 group-hover:text-gold-600 transition-colors duration-300 mb-2">
                {member.name} <span className="text-ink-900 group-hover:text-gold-600 font-semibold text-sm transition-colors duration-300"> {member.title}</span>
              </h4>

              {/* 描述文字（若該成員有填寫 description 則顯示） */}
              {member.description && (
                <p className="text-ink-600 text-xs sm:text-sm leading-relaxed mb-3">
                  {member.description}
                </p>
              )}

              {/* 禮儀師證號標籤 */}
              {member.certId && (
                <div className="px-3.5 py-1.5 rounded-full bg-ivory-100 border border-gold-300/60 text-ink-900 text-sm font-medium transition-colors duration-300">
                  <span className="group-hover:text-gold-600 transition-colors duration-300">
                    內政部禮儀師證書 {member.certId}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 分隔線 */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent my-16 reveal" />

        {/* 區塊二：12 大禮儀服務流程 (對應 id="services-process") */}
        <div id="services-process" className="text-center mb-16 scroll-mt-28">
          <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-bold reveal">
            SERVICE PROCESS
          </p>
          <h2 className="font-serif-tc text-3xl md:text-4xl lg:text-5xl font-bold text-ink-800 mt-2 reveal reveal-delay-1">
            12 大禮儀服務流程
          </h2>
          <div className="gold-divider w-80 mx-auto mt-4 reveal reveal-delay-2" />
          <p className="text-ink-500 text-sm sm:text-base mt-4 mx-auto reveal reveal-delay-3">
            從臨終關懷到擇吉安奉與後續關懷，寶慈專業團隊全程陪伴，圓滿每一份託付。
          </p>
        </div>

        {/* 12 大禮儀流程卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {processSteps.map((step, idx) => {
            return (
              <div
                key={step.number}
                className={`reveal reveal-delay-${(idx % 2) + 1} group relative bg-white/80 rounded-2xl p-5 border border-ivory-200 shadow-sm hover:shadow-md hover:border-gold-400/60 transition-all duration-300 flex items-center gap-5 overflow-hidden`}
              >
                {/* 左側：流程示意圖容器 */}
                <div className="w-28 sm:w-32 h-28 sm:h-32 rounded-xl overflow-hidden shrink-0 border border-ivory-300 shadow-sm bg-white relative">
                  <img
                    src={step.image}
                    alt={`${step.title}示意圖`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (step.fallbackImage && !target.src.endsWith(step.fallbackImage)) {
                        target.src = step.fallbackImage;
                      } else {
                        target.style.display = 'none';
                      }
                    }}
                  />
                </div>

                {/* 右側：文字內容資訊 */}
                <div className="flex-1 flex flex-col justify-between h-full py-1">
                  <div>
                    <div className="mb-2">
                      <h4 className="font-serif-tc text-base sm:text-lg font-bold text-ink-900 group-hover:text-gold-600 transition-colors duration-300">
                        <span className="tracking-[0.15em] mr-2">STEP {step.number}</span>
                        <span>{step.title}</span>
                      </h4>
                    </div>

                    <p className="text-ink-600 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-3 w-full h-0.5 bg-ivory-200 group-hover:bg-gold-400 transition-colors duration-300 rounded-full" />
                </div>
              </div>
            );
          })}
        </div>

        {/* 底部按鈕 */}
        <div className="text-center pt-4 reveal">
          <a
            href="/contact"
            onClick={handleContactClick}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-ivory-50/80 hover:bg-gold-600 text-ink-900 hover:text-white border border-gold-400/50 font-medium text-sm sm:text-base transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group/btn"
          >
            <span>立即預約諮詢</span>
            <ArrowRight className="w-4 h-4 text-gold-600 group-hover/btn:text-white transition-colors shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
