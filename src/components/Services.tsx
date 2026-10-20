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
  CalendarDays,
  Flower2,
  Users,
  Footprints,
  Home,
  Building2,
} from 'lucide-react';

// 自訂 SVG 圖示：莊嚴靈堂 Icon (設立靈堂 STEP 03)
const ShrineIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 21h18" />
    <path d="M5 21V7l7-4 7 4v14" />
    <path d="M9 10h6" />
    <path d="M10 14h4" />
    <path d="M12 7v7" />
  </svg>
);

// 自訂 SVG 圖示：素雅棺木 Icon（無十字） (入殮 STEP 04)
const CoffinIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 2h8l4 6-4 14H8L4 8l4-6z" />
  </svg>
);

// 自訂 SVG 圖示：骨罐 Icon (火化封罐 STEP 09)
const UrnIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 4h8" />
    <path d="M6 7h12" />
    <path d="M5 7c0 5 2 7 2 12h10c0-5 2-7 2-12H5z" />
    <path d="M9 22h6" />
    <path d="M12 2v2" />
  </svg>
);

const iconMap: Record<string, typeof ClipboardList> = {
  clipboard: ClipboardList,
  hands: HeartHandshake,
};

// 團隊成員資料：包含 6 位禮儀師 + 9 位禮儀顧問
const teamMembers = [
  // --- 禮儀師 ---
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
  {
    name: '林柏宏',
    title: '禮儀師',
    image: '/林柏宏.png',
    fallbackImage: '/林柏宏.png',
    certId: '1050079874',
  },
  // --- 禮儀顧問 ---
  {
    name: '嚴宏偉',
    title: '禮儀顧問',
    image: '/嚴宏偉.png',
    fallbackImage: '/嚴宏偉.jpg',
  },
  {
    name: '廖秋月',
    title: '禮儀顧問',
    image: '/廖秋月.png',
    fallbackImage: '/廖秋月.jpg',
  },
  {
    name: '劉建和',
    title: '禮儀顧問',
    image: '/劉建和.png',
    fallbackImage: '/劉建和.jpg',
  },
  {
    name: '賴豐升',
    title: '禮儀顧問',
    image: '/賴豐升.png',
    fallbackImage: '/賴豐升.jpg',
  },
  {
    name: '黃竹君',
    title: '禮儀顧問',
    image: '/黃竹君.png',
    fallbackImage: '/黃竹君.jpg',
  },
  {
    name: '莊至誠',
    title: '禮儀顧問',
    image: '/莊至誠.png',
    fallbackImage: '/莊至誠.jpg',
  },
  {
    name: '李承融',
    title: '禮儀顧問',
    image: '/李承融.png',
    fallbackImage: '/李承融.jpg',
  },
  {
    name: '王建偉',
    title: '禮儀顧問',
    image: '/王建偉.png',
    fallbackImage: '/王建偉.jpg',
  },
  {
    name: '王室悰',
    title: '禮儀顧問',
    image: '/王室悰.png',
    fallbackImage: '/王室悰.jpg',
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
  {
    number: '01',
    title: '臨終關懷',
    icon: PhoneCall,
    desc: '提供 24 小時即時諮詢與臨終指引，第一時間給予家屬溫暖支持與安心陪伴。',
    image: '/臨終關懷.jpg',
    fallbackImage: '/臨終關懷.png',
  },
  {
    number: '02',
    title: '遺體接運',
    icon: Truck,
    desc: '專車及專業接體人員協助接運逝者至指定殯儀館或接體地點，並完善冰存安置。',
    image: '/遺體接運.jpg',
    fallbackImage: '/遺體接運.png',
  },
  {
    number: '03',
    title: '設立靈堂',
    icon: ShrineIcon,
    desc: '協助設置安靈拜祭空間、豎靈儀式與牌位安排，提供家屬靜心追思與守靈場合。',
    image: '/設立靈堂.jpg',
    fallbackImage: '/設立靈堂.png',
  },
  {
    number: '04',
    title: '入殮',
    icon: CoffinIcon,
    desc: '由專業禮儀師引導進行尊榮入殮儀式，為逝者整理容顏、更衣並恭安至壽木中。',
    image: '/入殮.jpg',
    fallbackImage: '/入殮.png',
  },
  {
    number: '05',
    title: '治喪協調',
    icon: CalendarDays,
    desc: '與家屬溝通宗教信仰、奠禮流程、擇定吉日吉時及會場風格規劃。',
    image: '/治喪協調.jpg',
    fallbackImage: '/治喪協調.png',
  },
  {
    number: '06',
    title: '奠禮準備',
    icon: Flower2,
    desc: '印製訃聞通知親友、佈置典雅告別式會場、協調花藝、燈光音響與各項用品。',
    image: '/奠禮準備.jpg',
    fallbackImage: '/奠禮準備.png',
  },
  {
    number: '07',
    title: '家公奠禮',
    icon: Users,
    desc: '專業司儀與禮生引導進行家奠與公奠追思儀式，陪伴親友圓滿表達最後懷念。',
    image: '/家公奠禮.jpg',
    fallbackImage: '/家公奠禮.png',
  },
  {
    number: '08',
    title: '發引',
    icon: Footprints,
    desc: '奠禮結束後引導發引辭靈，由靈車護送靈柩前往火化場或安葬地點。',
    image: '/發引.jpg',
    fallbackImage: '/發引.png',
  },
  {
    number: '09',
    title: '火化封罐',
    icon: UrnIcon,
    desc: '陪同家屬至火化場進行火化儀式，並由禮儀師協助撿骨、迎靈與骨灰罐封罐。',
    image: '/火化封罐.jpg',
    fallbackImage: '/火化封罐.png',
  },
  {
    number: '10',
    title: '返主除靈',
    icon: Home,
    desc: '引導家屬迎請香火牌位返家安靈，並進行除靈與拜祭注意事項說明。',
    image: '/返主除靈.jpg',
    fallbackImage: '/返主除靈.png',
  },
  {
    number: '11',
    title: '擇吉安奉',
    icon: Building2,
    desc: '擇吉日良辰，舉行莊嚴安葬儀式，圓滿人生最後一程。',
    image: '/擇吉安奉.jpg',
    fallbackImage: '/擇吉安奉.png',
  },
  {
    number: '12',
    title: '後續關懷',
    icon: HeartHandshake,
    desc: '提供百日、對年、合爐及各項祭祀節日之提醒與諮詢，關懷陪伴永不間斷。',
    image: '/後續關懷.jpg',
    fallbackImage: '/後續關懷.png',
  },
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
          {/* 外層容器加上 relative，讓內部絕對定位的 X 按鈕能對齊彈窗右上角 */}
          <div className="bg-white border border-ivory-200 rounded-3xl max-w-4xl w-full max-h-[90vh] shadow-2xl relative flex flex-col overflow-hidden">
            
            {/* 絕對定位釘選於彈窗右上角（不受內部捲動影響、永遠可見） */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 z-[100] p-2.5 rounded-full text-ink-600 bg-ivory-100 hover:text-ink-950 hover:bg-gold-400 transition-all shadow-md border border-ivory-300 cursor-pointer"
              aria-label="關閉"
            >
              <X className="w-6 h-6" />
            </button>

            {/* 內部可捲動內容區（預留右側空間避免標題壓到關閉按鈕） */}
            <div className="p-6 sm:p-8 lg:p-12 overflow-y-auto flex-1 pr-12 sm:pr-16">
              <div className="text-center mb-8 pt-2">
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
        </div>
      )}

      {/* 2. 禮儀服務 Modal 彈窗（含 禮儀服務團隊 + 12 大服務流程） */}
      {activeModal === 'funeral' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/80 backdrop-blur-md animate-fadeIn">
          {/* 外層容器加上 relative，讓內部絕對定位的 X 按鈕能對齊彈窗右上角 */}
          <div className="bg-white border border-ivory-200 rounded-3xl max-w-5xl w-full max-h-[90vh] shadow-2xl relative flex flex-col overflow-hidden">
            
            {/* 絕對定位釘選於彈窗右上角（不受內部捲動影響、永遠可見） */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 z-[100] p-2.5 rounded-full text-ink-600 bg-ivory-100 hover:text-ink-950 hover:bg-gold-400 transition-all shadow-md border border-ivory-300 cursor-pointer"
              aria-label="關閉"
            >
              <X className="w-6 h-6" />
            </button>

            {/* 內部可捲動內容區（預留右側空間避免標題壓到關閉按鈕） */}
            <div className="p-6 sm:p-10 lg:p-12 overflow-y-auto flex-1 pr-12 sm:pr-16 scrollbar-thin scrollbar-thumb-gold-400/30">
              {/* 區塊一：禮儀服務團隊 */}
              <div className="text-center mb-10 pt-2">
                <p className="text-gold-600 text-xs sm:text-sm tracking-[0.2em] uppercase font-medium">Professional Team</p>
                <h3 className="font-serif-tc text-2xl lg:text-3xl font-bold text-ink-800 mt-2">
                  禮儀服務團隊
                </h3>
              </div>

              {/* 禮儀團隊卡片網格 (大頭照 w-40 h-40) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {teamMembers.map((member, idx) => (
                  <div
                    key={idx}
                    className="group bg-ivory-50 rounded-2xl p-6 border border-ivory-200 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300"
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

                    <h4 className="font-serif-tc text-lg font-bold text-ink-900 mb-2">
                      {member.name} <span className="text-gold-700 font-semibold text-sm"> {member.title}</span>
                    </h4>

                    {/* 禮儀師顯示內政部證號，禮儀顧問免顯示 */}
                    {member.certId && (
                      <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gold-100/70 border border-gold-300/60 text-gold-900 text-xs font-medium">
                        <UserCheck className="w-3.5 h-3.5 shrink-0 text-gold-700" />
                        <span>內政部禮儀師證書({member.certId})</span>
                      </div>
                    )}
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
                  從臨終關懷到擇吉安奉與後續關懷，寶慈專業團隊全程陪伴，圓滿每一份託付。
                </p>
              </div>

              {/* 12 大禮儀流程卡片：左側示意圖 + 右側文字 結構 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {processSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.number}
                      className="group relative bg-ivory-50/90 rounded-2xl p-5 border border-ivory-200 shadow-sm hover:shadow-md hover:border-gold-400/60 transition-all duration-300 flex items-center gap-5 overflow-hidden"
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
                          {/* 步驟編號與圖示：Hover 時顯示深金色背景與白色線條圖示 */}
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-gold-600 font-mono text-xs font-bold tracking-wider uppercase">
                              STEP {step.number}
                            </span>
                            <div className="w-6 h-6 rounded-md bg-ink-900/10 group-hover:bg-gold-600 transition-colors duration-300 flex items-center justify-center shrink-0">
                              <Icon className="w-3.5 h-3.5 text-gold-700 group-hover:text-white transition-colors duration-300" />
                            </div>
                          </div>

                          {/* 步驟標題 */}
                          <h4 className="font-serif-tc text-lg font-bold text-ink-900 mb-1.5">
                            {step.title}
                          </h4>

                          {/* 步驟描述 */}
                          <p className="text-ink-600 text-xs sm:text-sm leading-relaxed">
                            {step.desc}
                          </p>
                        </div>

                        {/* 卡片底線亮起效果 */}
                        <div className="mt-3 w-full h-0.5 bg-ivory-200 group-hover:bg-gold-400 transition-colors duration-300 rounded-full" />
                      </div>
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
        </div>
      )}
    </section>
  );
}
