import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { services } from '@/data/content';
import {
  ClipboardList,
  HeartHandshake,
  ArrowRight,
  X,
  UserCheck,
  CheckCircle2,
  MinusCircle,
  PhoneCall,
  Truck,
  Flame,
  FileCheck2,
  CalendarDays,
  Sparkles,
  Users,
  Footprints,
  Box,
  Home,
  Building2,
  User
} from 'lucide-react';

const iconMap: Record<string, typeof ClipboardList> = {
  clipboard: ClipboardList,
  hands: HeartHandshake,
};

// 5 位專業禮儀師團隊資料 (已去除介紹文字 desc)
const teamMembers = [
  {
    name: '張晉旗',
    title: '禮儀師',
    image: '/張晉旗.png',
    fallbackImage: '/張晉旗.jpg',
    certId: '1040071129',
  },
  {
    name: '謝淑娟',
    title: '禮儀師',
    image: '/謝淑娟.png',
    fallbackImage: '/謝淑娟.jpg',
    certId: '1040033800',
  },
  {
    name: '曾志忠',
    title: '禮儀師',
    image: '/曾志忠.png',
    fallbackImage: '/曾志忠.jpg',
    certId: '1040073107',
  },
  {
    name: '王立中',
    title: '禮儀師',
    image: '/王立中.png',
    fallbackImage: '/王立中.jpg',
    certId: '1050068290',
  },
  {
    name: '杜美慧',
    title: '禮儀師',
    image: '/杜美慧.png',
    fallbackImage: '/杜美慧.jpg',
    certId: '1090053809',
  },
];

// 生前契約商品差異對照表資料
const contractComparison = [
  {
    feature: '訃聞形式',
    baofu: '紙本雙折訃聞 100 份 (西式加贈程序表 100 份)',
    baohui: '電子訃聞 (圖檔)',
  },
  {
    feature: '家公奠禮與儀式',
    baofu: '包含家公奠禮 (中式含司儀1人、禮生2人、俗家法事3人及5人國樂現場伴奏)',
    baohui: '無家公奠禮規格 (僅配置基本服務人員與誦經居士/神職人員，無司儀、禮生及國樂)',
  },
  {
    feature: '場地與花藝佈置',
    baofu: '大型鮮花主花台、外牌、燈光音響、走道花及羅馬柱等完整會場佈置',
    baohui: '僅提供基本拜祭供品、桌花與收賻處擺設',
  },
  {
    feature: '答禮毛巾',
    baofu: '50 條',
    baohui: '未提供',
  },
  {
    feature: '孝服借用數量',
    baofu: '20 件以內',
    baohui: '10 件以內 (黑袍)',
  },
];

// 12 道禮儀服務流程資料
const processSteps = [
  { number: '01', title: '臨終關懷', icon: PhoneCall, desc: '提供 24 小時即時諮詢與臨終指引，第一時間給予家屬溫暖支持與安心陪伴。' },
  { number: '02', title: '遺體接運', icon: Truck, desc: '專車及專業接體人員協助接運逝者至指定殯儀館或接體地點，並完善冰存安置。' },
  { number: '03', title: '設立靈堂', icon: Flame, desc: '協助設置安靈拜祭空間、豎靈儀式與牌位安排，提供家屬靜心追思與守靈場合。' },
  { number: '04', title: '入殮', icon: FileCheck2, desc: '由專業禮儀師引導進行尊榮入殮儀式，為逝者整理容顏、更衣並恭安至壽木中。' },
  { number: '05', title: '治喪協調', icon: CalendarDays, desc: '與家屬溝通宗教信仰、奠禮流程、擇定吉日吉時及會場風格規劃。' },
  { number: '06', title: '奠禮準備', icon: Sparkles, desc: '印製訃聞通知親友、佈置典雅告別式會場、協調花藝、燈光音響與各項用品。' },
  { number: '07', title: '家公奠禮', icon: Users, desc: '專業司儀與禮生引導進行家奠與公奠追思儀式，陪伴親友圓滿表達最後懷念。' },
  { number: '08', title: '發引', icon: Footprints, desc: '奠禮結束後引導發引辭靈，由靈車護送靈柩前往火化場或安葬地點。' },
  { number: '09', title: '火化封罐', icon: Box, desc: '陪同家屬至火化場進行火化儀式，並由禮儀師協助撿骨、迎靈與骨灰罐封罐。' },
  { number: '10', title: '返主除靈', icon: Home, desc: '引導家屬迎請香火牌位返家安靈，並進行除靈與拜祭注意事項說明。' },
  { number: '11', title: '晉塔安葬', icon: Building2, desc: '選擇吉日良辰將骨灰罐晉塔安座（或進行樹葬/花葬等自然葬），圓滿歸宿。' },
  { number: '12', title: '後續關懷', icon: HeartHandshake, desc: '提供百日、對年、合爐及各項祭祀節日之提醒與諮詢，關懷陪伴永不間斷。' },
];

export default function Services() {
  const ref = useReveal<HTMLDivElement>();
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

                {/* 按鈕點擊 */}
                <button
                  type="button"
                  onClick={() => setActiveModal(isFuneralService ? 'funeral' : 'contract')}
                  className="inline-flex items-center gap-2 text-gold-600 font-medium text-sm hover:text-gold-500 transition-colors group/btn cursor-pointer"
                >
                  <span>了解更多</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>

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
            
            {/* 置頂關閉按鈕 */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 z-30 p-2.5 rounded-full text-ink-600 bg-ivory-100 hover:text-ink-950 hover:bg-gold-400 transition-all shadow-md border border-ivory-300"
              aria-label="關閉"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8 pt-4">
              <p className="text-gold-600 text-sm tracking-[0.2em] uppercase font-medium">Product Comparison</p>
              <h3 className="font-serif-tc text-2xl lg:text-3xl font-bold text-ink-800 mt-2">
                生前契約主要商品差異
              </h3>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-ivory-200 shadow-sm mb-4">
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

            <p className="text-xs sm:text-sm text-ink-500 font-medium mb-8 pl-1">
              註：標準型及簡易型均提供骨罐及火化棺。
            </p>

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

      {/* 2. 禮儀服務 Modal 彈窗（含 5 位專業禮儀師團隊 + 12 大服務流程） */}
      {activeModal === 'funeral' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white border border-ivory-200 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 lg:p-12 pt-16 relative scrollbar-thin scrollbar-thumb-gold-400/30">
            
            {/* 置頂關閉按鈕 (固定右上角不蓋內容) */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 z-40 p-2.5 rounded-full text-ink-600 bg-ivory-100 hover:text-ink-950 hover:bg-gold-400 transition-all shadow-md border border-ivory-300"
              aria-label="關閉"
            >
              <X className="w-6 h-6" />
            </button>

            {/* 區塊一：禮儀服務團隊 */}
            <div className="text-center mb-10">
              <p className="text-gold-600 text-xs sm:text-sm tracking-[0.2em] uppercase font-medium">Professional Team</p>
              <h3 className="font-serif-tc text-2xl lg:text-3xl font-bold text-ink-800 mt-2">
                禮儀服務團隊
              </h3>
            </div>

            {/* 5 位禮儀師卡片網格 (簡化無文字介紹) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-ivory-50 rounded-2xl p-6 border border-ivory-200 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg bg-ivory-200 flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={`${member.name} ${member.title}`}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        // 如果 .png 載入失敗，試嘗試以 .jpg 載入，或顯示預設圖示
                        const target = e.currentTarget;
                        if (target.src.endsWith('.png')) {
                          target.src = member.fallbackImage;
                        } else {
                          target.style.display = 'none';
                        }
                      }}
                    />
                  </div>

                  <h4 className="font-serif-tc text-lg font-bold text-ink-900 mb-2">
                    {member.name} <span className="text-gold-700 font-semibold text-sm"> {member.title}</span>
                  </h4>

                  {/* 內政部禮儀師證書(證號) */}
                  <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gold-100/70 border border-gold-300/60 text-gold-900 text-xs font-medium">
                    <UserCheck className="w-3.5 h-3.5 shrink-0 text-gold-700" />
                    <span>內政部禮儀師證書({member.certId})</span>
                  </div>
                </div>
              ))}
            </div>

            {/* 分隔線 */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent my-12" />

            {/* 區塊二：12 大禮儀服務流程圖 */}
            <div className="text-center mb-10">
              <p className="text-gold-600 text-xs sm:text-sm tracking-[0.2em] uppercase font-medium">Service Process</p>
              <h3 className="font-serif-tc text-2xl lg:text-3xl font-bold text-ink-800 mt-2">
                12 大禮儀服務流程
              </h3>
              <p className="text-ink-500 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
                從臨終關懷到晉塔安葬與後續關懷，寶慈專業團隊全程陪伴，圓滿每一份託付。
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    className="group relative bg-ivory-50/80 rounded-2xl p-5 border border-ivory-200 shadow-sm hover:shadow-md hover:border-gold-400/60 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    <span className="absolute -top-2 -right-1 text-4xl font-serif-tc font-bold text-ink-900/5 group-hover:text-gold-500/10 transition-colors pointer-events-none">
                      {step.number}
                    </span>

                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-ink-900 flex items-center justify-center shrink-0 group-hover:bg-gold-500 transition-colors duration-300">
                          <Icon className="w-5 h-5 text-gold-400 group-hover:text-ink-950 transition-colors" />
                        </div>
                        <div>
                          <span className="text-gold-600 font-mono text-[11px] font-bold tracking-wider uppercase block">
                            STEP {step.number}
                          </span>
                          <h4 className="font-serif-tc text-base font-bold text-ink-800">
                            {step.title}
                          </h4>
                        </div>
                      </div>

                      <p className="text-ink-600 text-xs leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    <div className="mt-4 w-full h-0.5 bg-ivory-200 group-hover:bg-gold-400 transition-colors duration-300 rounded-full" />
                  </div>
                );
              })}
            </div>

            {/* 底部按鈕 */}
            <div className="text-center pt-4">
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
