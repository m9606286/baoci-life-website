import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { services } from '@/data/content';
import { ClipboardList, HeartHandshake, ArrowRight, X, UserCheck } from 'lucide-react';

const iconMap: Record<string, typeof ClipboardList> = {
  clipboard: ClipboardList,
  hands: HeartHandshake,
};

// 禮儀師團隊資料
const teamMembers = [
  {
    name: '王室惇',
    title: '服務總監',
    image: '/王室悰.png',
    desc: '擁有 15 年的客戶服務經驗，確保每位客戶都能獲得最溫暖和專業的照顧。',
  },
  {
    name: '林柏宏',
    title: '禮儀師',
    image: '/林柏宏.png',
    certId: '1050079874',
    desc: '持有國家級喪禮服務技術士證照，以專業與細心全程陪伴家屬度過告別時刻。',
  },
];

export default function Services() {
  const ref = useReveal<HTMLDivElement>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="services" className="py-24 lg:py-32 bg-ivory-100 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-gold-100/30 blur-3xl pointer-events-none" />

      <div ref={ref} className="mx-auto max-w-8xl px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-600 text-sm tracking-[0.3em] uppercase reveal">Services</p>
          <h2 className="font-serif-tc text-3xl md:text-4xl lg:text-5xl text-ink-800 font-bold mt-3 reveal reveal-delay-1">
            我們的服務
          </h2>
          <div className="gold-divider w-32 mx-auto mt-6 reveal reveal-delay-2" />
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] || ClipboardList;
            const isFuneralService = service.title.includes('禮儀');

            return (
              <div
                key={service.title}
                className={`reveal reveal-delay-${idx + 1} group relative bg-white rounded-3xl p-10 shadow-md hover:shadow-2xl hover:shadow-ink-900/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
              >
                {/* Large watermark icon */}
                <div className="absolute -top-6 -right-6 opacity-5 pointer-events-none">
                  <Icon className="w-48 h-48 text-ink-800" />
                </div>

                {/* Icon */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-ink-800 to-ink-950 flex items-center justify-center group-hover:from-gold-500 group-hover:to-gold-600 transition-all duration-500 shadow-lg">
                    <Icon className="w-10 h-10 text-gold-400 group-hover:text-ivory-50 transition-colors" />
                  </div>
                </div>

                <h3 className="font-serif-tc text-2xl lg:text-3xl text-ink-800 font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-ink-500 text-base leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* 按鈕判斷：禮儀服務開啟 Modal，其餘跳轉連結 */}
                {isFuneralService ? (
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-2 text-gold-600 font-medium text-sm hover:text-gold-500 transition-colors group/btn cursor-pointer"
                  >
                    <span>了解更多</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-gold-600 font-medium text-sm hover:text-gold-500 transition-colors group/btn"
                  >
                    <span>了解更多</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                )}

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-300 to-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            );
          })}
        </div>
      </div>

      {/* 禮儀師團隊 Modal 彈窗 */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white border border-ivory-200 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 lg:p-12 shadow-2xl relative">
            
            {/* 關閉按鈕 */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full text-ink-400 hover:text-ink-800 hover:bg-ivory-100 transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Header */}
            <div className="text-center mb-10">
              <p className="text-gold-600 text-sm tracking-[0.2em] uppercase font-medium">Professional Team</p>
              <h3 className="font-serif-tc text-2xl lg:text-3xl font-bold text-ink-800 mt-2">
                禮儀服務團隊
              </h3>
              <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4" />
            </div>

            {/* 禮儀師卡片列表 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-ivory-50 rounded-2xl p-8 border border-ivory-200 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* 大頭照 */}
                  <div className="w-36 h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
                    <img
                      src={member.image}
                      alt={`${member.name} ${member.title}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* 名字與職稱 */}
                  <h4 className="font-serif-tc text-xl font-bold text-ink-800 mb-2">
                    {member.name} <span className="text-gold-600 text-base font-normal"> - {member.title}</span>
                  </h4>

                  {/* 技術證號 */}
                  {member.certId && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100/60 border border-gold-200 text-gold-800 text-xs font-medium mb-3">
                      <UserCheck className="w-3.5 h-3.5" />
                      <span>技術證號：{member.certId}</span>
                    </div>
                  )}

                  {/* 簡介 */}
                  <p className="text-ink-600 text-sm leading-relaxed mt-2">
                    {member.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom button */}
            <div className="mt-10 text-center">
              <a
                href="#contact"
                onClick={() => setIsModalOpen(false)}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-ink-800 hover:bg-gold-600 text-white font-medium text-sm transition-all shadow-md"
              >
                立即預約諮詢
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
