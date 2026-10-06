import { useReveal } from '@/hooks/useReveal';
import { History, Heart, Eye } from 'lucide-react';

const aboutSections = [
  {
    icon: History,
    title: '我們的故事',
    content: (
      <div className="space-y-3">
        <p>
          寶慈生命事業(原永慈事業)成立於 2002 年，為合法經營之殯葬禮儀服務業者，經臺南市民政局核准發行生前契約，並於2026年5月正式由寶碩集團併購接手經營，源於創辦人對於禮儀服務的深刻理解和對家庭關懷的執著，我們見證了無數家庭在失去親人時的悲傷，也看到了專業禮儀服務如何能夠幫助人們度過這個困難的時期，因此決定讓可永續經營之集團接續，讓會員權益更有保障。
        </p>
        <p className="font-semibold text-ink-800 pt-1 border-t border-ivory-200/80">
          從最初的小型禮儀社，到如今成為寶碩集團的一分子，我們始終堅持一個信念：
          <span className="block gold-text-gradient font-bold mt-1">
            每一個生命都值得被尊重，每一個家庭都應該得到最好的照顧。
          </span>
        </p>
      </div>
    ),
  },
  {
    icon: Heart,
    title: '我們的使命',
    content: (
      <p>
        提供專業、溫暖與尊重的禮儀服務，是我們始終堅持的使命。透過生前契約的預先規劃，讓個人意願得以被尊重，也讓家人在面對離別時，能夠減少徬徨與壓力，以從容的心情陪伴摯愛走完人生最後一程。
      </p>
    ),
  },
  {
    icon: Eye,
    title: '我們的願景',
    content: (
      <p>
        我們以成為台灣最受信任的禮儀服務品牌為願景，持續推動生前契約理念，結合人文關懷與專業服務，為每一個家庭提供值得信賴且具尊嚴的生命紀念服務。
      </p>
    ),
  },
];

// 更換為更符合生命事業「莊嚴、平靜、溫暖手心陪伴」主題的典雅高畫質圖片
const aboutImage =
  'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80';

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24 lg:py-32 bg-gradient-to-b from-ivory-100 to-ivory-200 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gold-100/40 blur-3xl pointer-events-none" />

      <div ref={ref} className="mx-auto max-w-8xl px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* 左側：圖片區塊 (加上 h-full 讓它自動延伸對齊右側卡片高度) */}
          <div className="lg:col-span-5 relative reveal flex flex-col h-full min-h-[550px] lg:min-h-[700px]">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full flex-1 group">
              <img
                src={aboutImage}
                alt="溫暖陪伴與專業禮儀服務"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-ink-950/10 to-transparent" />
            </div>
            
            {/* 左下角懸浮浮水印標籤 */}
            <div className="absolute bottom-6 right-6 lg:-right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-5 border border-white/60">
              <p className="font-serif-tc text-3xl font-bold gold-text-gradient">75%</p>
              <p className="text-xs font-semibold text-ink-700 mt-0.5">信託保障</p>
              <p className="text-[11px] text-ink-400 mt-0.5">專款專用 履約保障</p>
            </div>
          </div>

          {/* 右側：文字內容 */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-gold-600 text-sm tracking-[0.3em] uppercase reveal">About Us</p>
              <h2 className="font-serif-tc text-3xl md:text-4xl lg:text-5xl text-ink-800 font-bold mt-3 reveal reveal-delay-1 leading-tight">
                關於我們
                <span className="block gold-text-gradient mt-2 text-2xl lg:text-3xl">溫暖的人文關懷</span>
              </h2>
              <div className="gold-divider w-32 mt-6 mb-8 reveal reveal-delay-2" />
            </div>

            {/* 卡片列表 */}
            <div className="space-y-6">
              {aboutSections.map((item, idx) => (
                <div
                  key={item.title}
                  className={`reveal reveal-delay-${idx + 1} p-6 sm:p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-ivory-300/60`}
                >
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-gold-600" />
                    </div>
                    <h3 className="text-ink-800 font-serif-tc font-bold text-xl">{item.title}</h3>
                  </div>
                  <div className="text-ink-600 text-sm sm:text-base leading-relaxed">
                    {item.content}
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
