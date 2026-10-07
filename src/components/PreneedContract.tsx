import { useReveal } from '@/hooks/useReveal';
import { FileText, TrendingUp, ShieldCheck, Heart, CheckCircle2 } from 'lucide-react';

// 主要圖片圖源
const advantageImage =
  'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1200&q=80';

// 核心保障清單
const preneedAdvantages = [
  { text: '一定會發生的事情，提早做好規劃，減輕家人的壓力。' },
  { text: '確保按照自己的意願進行禮儀安排。' },
  { text: '獲得透明的價格和完整的服務保障。' },
  { text: '享受優惠的付款方案，鎖定價格抗通膨。' },
  { text: '為親愛的家人留下清晰的指引，留愛不留債。' },
  { text: '保障75%信託，選擇永續經營公司，更有保障。' },
  { text: '可自由轉讓，契約持有者可指定使用人，不受限於自己或家人使用。' },
];

// 核心特色卡片
const features = [
  {
    icon: FileText,
    title: '一定會發生的事情，先做好準備',
    text: '一定會發生的事，等發生了才規劃，花費往往會超出預期，生前契約可以保障壽險理賠真正留給所愛的家人。',
  },
  {
    icon: TrendingUp,
    title: '享受預約優惠價，鎖定價格抗通膨',
    text: '台灣平均一場喪葬費用為35萬，並隨著通膨逐年增加，生前契約是用現在的價格，幫您鎖住未來一定會發生的支出。',
  },
  {
    icon: Heart,
    title: '給親愛的家人留愛不留債',
    text: '生前契約也是資產配置的一環，可以利用儲蓄的方式，如同保險一樣，提早準備規劃好自己想要的安排，避免未來留給家人負擔。',
  },
  {
    icon: ShieldCheck,
    title: '保證75%信託，永續經營有保障',
    text: '寶慈生命事業所發行之合法生前契約，契約款項依規定提撥75%交付京城銀行辦理信託保管，以確保資金安全與專款專用。寶慈生命事業為寶碩（股票代號5210）集團旗下之全資子公司，依循公司治理原則運作，強化營運穩定性與長期服務承諾。',
  },
];

export default function PreNeed() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="preneed" className="py-24 lg:py-32 bg-ink-950 text-white relative overflow-hidden">
      {/* 頂部裝飾線 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

      <div ref={ref} className="mx-auto max-w-8xl px-6 relative">
        
        {/* Header 標題區 */}
        <div className="text-center mb-16">
          <p className="text-gold-400 text-xs tracking-[0.35em] uppercase reveal">Preneed Contract</p>
          <h2 className="font-serif-tc text-3xl md:text-4xl lg:text-5xl text-ivory-50 font-bold mt-3 reveal reveal-delay-1">
            什麼是生前契約？
          </h2>

          {/* 置中漸漸淡出金色細線 (中間深、左右淡) */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold-400/80 to-transparent mx-auto mt-6 reveal reveal-delay-2" />

          <p className="mt-6 text-ivory-200/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed reveal reveal-delay-3">
            生前契約是給家人的最後一道保障，也可明確記錄您對於身後事的安排和意願。
          </p>
        </div>

        {/* 圖片 + 核心保障清單 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch mb-20">
          
          {/* 左側：圖片區塊 */}
          <div className="lg:col-span-5 relative reveal flex flex-col">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer border border-white/10 w-full h-full min-h-[400px]">
              <img
                src={advantageImage}
                alt="生前契約核心保障"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* 右側：核心保障列表 */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {/* 標題區塊：加入英文副標題 CORE GUARANTEES，與中文標題及漸層線完美置中對齊 */}
            <div className="w-fit text-center">
              <p className="text-gold-400 text-xs tracking-[0.35em] uppercase mb-1.5 font-medium">
                Core Guarantees
              </p>
              <h3 className="font-serif-tc text-2xl lg:text-3xl font-bold text-white tracking-wide mb-3">
                契約核心保障
              </h3>
              {/* 線條精準置中於文字正下方 */}
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold-400/80 to-transparent mx-auto mb-6" />
            </div>

            <div className="space-y-3.5 flex-1 flex flex-col justify-between">
              {preneedAdvantages.map((adv, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-gold-400/40 hover:translate-x-1.5 hover:shadow-lg hover:shadow-gold-500/5"
                >
                  {/* 金色勾勾圖示 */}
                  <div className="p-1 rounded-full bg-gold-400/10 text-gold-400 group-hover:bg-gold-400 group-hover:text-ink-950 transition-all duration-300 shrink-0">
                    <CheckCircle2 className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* 保障文字 */}
                  <p className="text-white/80 group-hover:text-white text-base leading-relaxed font-medium transition-colors duration-300">
                    {adv.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 下方四個特色卡片區塊 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`reveal reveal-delay-${(idx % 2) + 1} group bg-ink-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-gold-400/40 transition-all duration-500 hover:bg-ink-900/90`}
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center shrink-0 group-hover:bg-gold-400/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-gold-400" />
                </div>
                <div>
                  <h3 className="font-serif-tc text-lg lg:text-xl text-ivory-50 font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-ivory-200/70 text-sm leading-relaxed">{feature.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
