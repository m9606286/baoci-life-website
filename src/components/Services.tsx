import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { services } from '@/data/content';
import { ClipboardList, HeartHandshake, ArrowRight, X, UserCheck, CheckCircle2, MinusCircle } from 'lucide-react';

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

// 生前契約商品差異對照表資料
const contractComparison = [
  {
    feature: '訃聞形式',
    baofu: '紙本雙折訃聞 100 份 (西式加贈程序表 100 份)',
    baohui: '電子訃聞 (圖檔)',
    baofuHighlight: true,
  },
  {
    feature: '家公奠禮與儀式',
    baofu: '包含家公奠禮 (中式含司儀1人、禮生2人、俗家法事3人及5人國樂現場伴奏)',
    baohui: '無家公奠禮規格 (僅配置基本服務人員與誦經居士/神職人員，無司儀、禮生及國樂)',
    baofuHighlight: true,
  },
  {
    feature: '追思光碟 (西式)',
    baofu: '包含追思光碟製作與現場播放設備',
    baohui: '無此項目',
    baofuHighlight: true,
  },
  {
    feature: '場地與花藝佈置',
    baofu: '大型鮮花主花台、外牌、燈光音響、走道花及羅馬柱等完整會場佈置',
    baohui: '僅提供基本拜祭供品、桌花與收賻處擺設',
    baofuHighlight: true,
  },
  {
    feature: '答禮毛巾',
    baofu: '50 條',
    baohui: '未提供',
    baofuHighlight: true,
  },
  {
    feature: '孝服借用數量',
    baofu: '20 件以內',
    baohui: '10 件以內 (黑袍)',
    baofuHighlight: true,
  },
];

export default function Services() {
  const ref = useReveal<HTMLDivElement>();
  // 使用 string 或 null 來控制開啟哪一個 Modal：'funeral' | 'contract' | null
  const [activeModal, setActiveModal] = useState<'funeral' | 'contract' | null>(null);

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

                {/* 按鈕點擊：依據卡片類型開啟對應 Modal */}
                <button
                  type="button"
                  onClick={() => setActiveModal(isFuneralService ? 'funeral' : 'contract')}
                  className="inline-flex items-center gap-2 text-gold-600 font-medium text-sm hover:text-gold-500 transition-colors group/btn cursor-pointer"
                >
                  <span>了解更多</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-300 to-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            );
          })}
        </div>
      </div>

      {/* 1. 生前契約商品差異對照 Modal */}
      {activeModal === 'contract' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white border border-ivory-200 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 lg:p-12 shadow-2xl relative">
            
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-ink-400 hover:text-ink-800 hover:bg-ivory-100 transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <p className="text-gold-600 text-sm tracking-[0.2em] uppercase font-medium">Product Comparison</p>
              <h3 className="font-serif-tc text-2xl lg:text-3xl font-bold text-ink-800 mt-2">
                生前契約主要商品差異
              </h3>
              <p className="text-ink-500 text-sm mt-2">寶富生前契約與寶暉生前契約（家用型）規格對照</p>
              <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4" />
            </div>

            {/* 對照表格 */}
            <div className="overflow-x-auto rounded-2xl border border-ivory-200 shadow-sm mb-8">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-ivory-100 border-b border-ivory-200 text-ink-800 text-sm sm:text-base font-serif-tc">
                    <th className="p-4 w-1/4 font-bold">比較項目</th>
                    <th className="p-4 w-3/8 font-bold text-gold-700 bg-gold-50/50">寶富、福益生前契約（標準型）</th>
                    <th className="p-4 w-3/8 font-bold text-ink-700">寶暉、璞瑜生前契約（簡易型）</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ivory-200 text-xs sm:text-sm text-ink-700">
                  {contractComparison.map((item, idx) => (
                    <tr key={idx} className="hover:bg-ivory-50/60 transition-colors">
                      <td className="p-4 font-semibold text-ink-900 bg-ivory-50/30">{item.feature}</td>
                      <td className="p-4 bg-gold-50/20 leading-relaxed font-medium text-ink-900">
                        <div className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                          <span>{item.baofu}</span>
                        </div>
                      </td>
                      <td className="p-4 leading-relaxed text-ink-600">
                        <div className="flex items-start gap-1.5">
                          {item.baohui.includes('無') || item.baohui.includes('未提供') ? (
                            <MinusCircle className="w-4 h-4 text-ink-400 shrink-0 mt-0.5" />
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-ink-400 shrink-0 mt-2 mr-1" />
                          )}
                          <span>{item.baohui}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center">
              <a
                href="#contact"
                onClick={() => setActiveModal(null)}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-ink-800 hover:bg-gold-600 text-white font-medium text-sm transition-all shadow-md"
              >
                諮詢適合您的方案
              </a>
            </div>

          </div>
        </div>
      )}

      {/* 2. 禮儀師團隊 Modal 彈窗 */}
      {activeModal === 'funeral' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white border border-ivory-200 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 lg:p-12 shadow-2xl relative">
            
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-ink-400 hover:text-ink-800 hover:bg-ivory-100 transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-10">
              <p className="text-gold-600 text-sm tracking-[0.2em] uppercase font-medium">Professional Team</p>
              <h3 className="font-serif-tc text-2xl lg:text-3xl font-bold text-ink-800 mt-2">
                禮儀服務團隊
              </h3>
              <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-ivory-50 rounded-2xl p-8 border border-ivory-200 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-36 h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
                    <img
                      src={member.image}
                      alt={`${member.name} ${member.title}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <h4 className="font-serif-tc text-xl font-bold text-ink-800 mb-2">
                    {member.name} <span className="text-gold-600 text-base font-normal"> - {member.title}</span>
                  </h4>

                  {member.certId && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100/60 border border-gold-200 text-gold-800 text-xs font-medium mb-3">
                      <UserCheck className="w-3.5 h-3.5" />
                      <span>技術證號：{member.certId}</span>
                    </div>
                  )}

                  <p className="text-ink-600 text-sm leading-relaxed mt-2">
                    {member.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href="#contact"
                onClick={() => setActiveModal(null)}
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
