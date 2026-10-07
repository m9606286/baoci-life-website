import React from 'react';
import {
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
  HeartHandshake,
} from 'lucide-react';

// 12 道流程資料內容（不含禮體淨身）
const processSteps = [
  {
    number: '01',
    title: '臨終關懷',
    icon: PhoneCall,
    desc: '提供 24 小時即時諮詢與臨終指引，第一時間給予家屬溫暖支持與安心陪伴。',
  },
  {
    number: '02',
    title: '遺體接運',
    icon: Truck,
    desc: '專車及專業接體人員協助接運逝者至指定殯儀館或接體地點，並完善冰存安置。',
  },
  {
    number: '03',
    title: '設立靈堂',
    icon: Flame,
    desc: '協助設置安靈拜祭空間、豎靈儀式與牌位安排，提供家屬靜心追思與守靈場合。',
  },
  {
    number: '04',
    title: '入殮',
    icon: FileCheck2,
    desc: '由專業禮儀師引導進行尊榮入殮儀式，為逝者整理容顏、更衣並恭安至壽木中。',
  },
  {
    number: '05',
    title: '治喪協調',
    icon: CalendarDays,
    desc: '與家屬溝通宗教信仰、奠禮流程、擇定吉日吉時及會場風格規劃。',
  },
  {
    number: '06',
    title: '奠禮準備',
    icon: Sparkles,
    desc: '印製訃聞通知親友、佈置典雅告別式會場、協調花藝、燈光音響與各項用品。',
  },
  {
    number: '07',
    title: '家公奠禮',
    icon: Users,
    desc: '專業司儀與禮生引導進行家奠與公奠追思儀式，陪伴親友圓滿表達最後懷念。',
  },
  {
    number: '08',
    title: '發引',
    icon: Footprints,
    desc: '奠禮結束後引導發引辭靈，由靈車護送靈柩前往火化場或安葬地點。',
  },
  {
    number: '09',
    title: '火化封罐',
    icon: Box,
    desc: '陪同家屬至火化場進行火化儀式，並由禮儀師協助撿骨、迎靈與骨灰罐封罐。',
  },
  {
    number: '10',
    title: '返主除靈',
    icon: Home,
    desc: '引導家屬迎請香火牌位返家安靈，並進行除靈與拜祭注意事項說明。',
  },
  {
    number: '11',
    title: '晉塔安葬',
    icon: Building2,
    desc: '選擇吉日良辰將骨灰罐晉塔安座（或進行樹葬/花葬等自然葬），圓滿歸宿。',
  },
  {
    number: '12',
    title: '後續關懷',
    icon: HeartHandshake,
    desc: '提供百日、對年、合爐及各項祭祀節日之提醒與諮詢，關懷陪伴永不間斷。',
  },
];

export default function ProcessFlow() {
  return (
    <div className="py-8">
      {/* 標題區 */}
      <div className="text-center mb-12">
        <p className="text-gold-600 text-xs tracking-[0.3em] uppercase font-medium">Service Process</p>
        <h3 className="font-serif-tc text-2xl md:text-3xl font-bold text-ink-800 mt-2">
          生命圓滿禮儀 12 大服務流程
        </h3>
        <p className="text-ink-500 text-sm mt-3 max-w-xl mx-auto">
          從臨終前的溫暖諮詢，到晉塔安葬與後續關懷，寶慈團隊全程陪伴，讓愛與思念圓滿延續。
        </p>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-5" />
      </div>

      {/* 12 步驟網格佈局 (桌面端 3 列，手機端單列時間軸) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-2">
        {processSteps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="group relative bg-white rounded-2xl p-6 border border-ivory-300/80 shadow-sm hover:shadow-xl hover:border-gold-400/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* 右上角水印編號 */}
              <span className="absolute -top-2 -right-1 text-5xl font-serif-tc font-bold text-ink-900/5 group-hover:text-gold-500/10 transition-colors pointer-events-none select-none">
                {step.number}
              </span>

              <div>
                {/* 圖示與步驟小標 */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-ink-900 flex items-center justify-center shrink-0 group-hover:bg-gold-500 transition-colors duration-300 shadow-md">
                    <Icon className="w-6 h-6 text-gold-400 group-hover:text-ink-950 transition-colors" />
                  </div>
                  <div>
                    <span className="text-gold-600 font-mono text-xs font-bold tracking-wider uppercase block">
                      STEP {step.number}
                    </span>
                    <h4 className="font-serif-tc text-lg font-bold text-ink-800 group-hover:text-ink-950">
                      {step.title}
                    </h4>
                  </div>
                </div>

                {/* 說明文字 */}
                <p className="text-ink-600 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* 底部 hover 金線裝飾 */}
              <div className="mt-5 w-full h-0.5 bg-ivory-200 group-hover:bg-gold-400/80 transition-colors duration-300 rounded-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
