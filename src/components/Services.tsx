import { useReveal } from '@/hooks/useReveal';
import {
  HeartHandshake,
  UserCheck,
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
    <path d="M5 7c0 5 2 7 2 12H5z" />
    <path d="M9 22h6" />
    <path d="M12 2v2" />
  </svg>
);

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
    name: '王室悰',
    title: '禮儀顧問',
    image: '/王室悰.png',
    fallbackImage: '/王室悰.jpg',
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

  return (
    <section id="services" className="pt-2 pb-24 lg:pt-4 lg:pb-32 bg-ivory-100 relative overflow-hidden -mt-6 lg:-mt-10">
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-gold-100/30 blur-3xl pointer-events-none" />

      <div ref={ref} className="mx-auto max-w-8xl px-6 relative">
        {/* 禮儀服務團隊 + 12 大服務流程 區塊 */}
        <div className="bg-white border border-ivory-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-md">
          {/* 區塊一：禮儀服務團隊 */}
          <div className="text-center mb-12 pt-2">
            <p className="text-gold-600 text-sm tracking-[0.3em] uppercase">Professional Team</p>
            <h3 className="font-serif-tc text-3xl md:text-4xl lg:text-5xl font-bold text-ink-800 mt-3">
              禮儀服務團隊
            </h3>
            <div className="gold-divider w-32 mx-auto mt-6" />
            <p className="text-ink-500 text-sm sm:text-base mt-4 mx-auto whitespace-nowrap overflow-x-auto">
              專業團隊全程守護與陪伴，讓您與家人在人生最重要的告別時刻，完成一場充滿愛與祝福的人生畢業典禮。
            </p>
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
          <div className="text-center mb-12">
            <p className="text-gold-600 text-sm tracking-[0.3em] uppercase">Service Process</p>
            <h3 className="font-serif-tc text-3xl md:text-4xl lg:text-5xl font-bold text-ink-800 mt-3">
              12 大禮儀服務流程
            </h3>
            <div className="gold-divider w-32 mx-auto mt-6" />
            <p className="text-
