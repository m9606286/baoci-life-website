import { useReveal } from '@/hooks/useReveal';
import { History, Heart, Eye, Calendar } from 'lucide-react';

const aboutSections = [
  {
    icon: History,
    title: '我們的故事',
    content: (
      <div className="space-y-3">
        <p>
          寶慈生命事業(原永慈事業)成立於 2002 年，為合法經營之殯葬禮儀服務業者，經臺南市民政局核準發行生前契約，並於2026年5月正式由寶碩集團併購接手經營，源於創辦人對於禮儀服務的深刻理解和對家庭關懷的執著，我們見證了無數家庭在失去親人時的悲傷，也看到了專業禮儀服務如何能夠幫助人們度過這個困難的時期，因此決定讓可永續經營之集團接續，讓會員權益更有保障。
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

// 發展歷程資料
const milestones = [
  {
    year: '2002年',
    text: '公司正式成立後，投入傳統禮儀服務領域。創業初期逐步累積服務經驗，為後續企業發展奠定極固基礎。',
  },
  {
    year: '2014年',
    text: '為了更聚焦於生命產業與人本關懷，更名為「永慈事業股份有限公司」。同時將資本額擴充至新台幣 3,000 萬元，展現深耕殯葬禮儀服務市場的決心。',
  },
  {
    year: '2016年',
    text: '經臺南市政府民政局核准（南市民生字第1050157780號函），正式取得販售「生前殯葬服務契約」的合法資格。為嚴格保障客戶權益，公司依殯葬管理條例規定，將生前契約款項依法交付「京城銀行」辦理信託專戶管理，確保資金安全透明，落實對每一位家屬安心承諾。',
  },
  {
    year: '2025年',
    text: '本公司迎來經營團隊與經營團隊重組，內部積極推動行政系統整合與流程優化，以持續提供專業且可靠之生前契約與生命禮儀服務。',
  },
  {
    year: '2026年',
    text: '「寶碩財務科技股份有限公司（5210）」加入，正式更名為「寶慈生命事業股份有限公司」，秉持人本關懷的使命，更加深保障客戶權益的堅持，確保公司永續經營。',
  },
];

const aboutImage =
  'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80';

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24 lg:py-32 bg-gradient-to-b from-ivory-100 to-ivory-200 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gold-100/40 blur-3xl pointer-events-none" />

      <div ref={ref} className="mx-auto max-w-8xl px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch mb-24">
          
          {/* 左側：圖片區塊 */}
          <div className="lg:col-span-5 relative reveal flex flex-col h-full min-h-[550px] lg:min-h-[700px]">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full flex-1 group cursor-pointer border border-ivory-300/85">
              <img
                src={aboutImage}
                alt="溫暖陪伴與專業禮儀服務"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* 左下角 75% 信託保障浮水印標籤 */}
            <div className="absolute bottom-6 right-6 lg:-right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-5 border border-white/60 z-25">
              <p className="font
