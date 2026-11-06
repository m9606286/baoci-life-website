import React from 'react';
import { useReveal } from '@/hooks/useReveal';

const aboutSections = [
  {
    isCustomImage: true,
    imageSrc: '/time.jpg',
    title: '我們的故事',
    content: (
      <div className="space-y-3">
        <p>
          寶慈生命事業深耕殯葬禮儀服務逾二十年，為合法經營之殯葬禮儀服務業者，經臺南市民政局核準發行生前契約，並於2026年5月正式由寶碩集團接續經營，源於創辦人對於禮儀服務的深刻理解和對家庭關懷的執著，我們見證了無數家庭在失去親人時的悲傷，也看到了專業禮儀服務如何能夠幫助人們度過這個困難的時期，因此決定讓可永續經營之集團接續，讓會員權益更有保障。
        </p>
        <p className="font-semibold text-ink-800 pt-1 border-t border-ivory-200/80">
          從最初的小型禮儀公司，到如今成為寶碩集團的一分子，我們始終堅持一個信念：
          <span className="block gold-text-gradient font-bold mt-1">
            每一個生命都值得被尊重，每一個家庭都應該得到最好的照顧。
          </span>
        </p>
      </div>
    ),
  },
  {
    isCustomImage: true,
    imageSrc: '/heart.jpg',
    title: '我們的使命',
    content: (
      <p>
        提供專業、溫暖與尊重的禮儀服務，是我們始終堅持的使命。透過生前契約的預先規劃，讓個人意願得以被尊重，也讓家人在面對離別時，能夠減少徬徨與壓力，以從容的心情陪伴摯愛走完人生最後一程。
      </p>
    ),
  },
  {
    isCustomImage: true,
    imageSrc: '/eye.jpg',
    title: '我們的願景',
    content: (
      <p>
        我們以成為台灣最受信任的禮儀服務品牌為願景，持續推動生前契約理念，結合人文關懷與專業服務，為每一個家庭提供值得信賴且具尊嚴的生命紀念服務。
      </p>
    ),
  },
];

// 寶碩官網超連結元件
const ApexLink = () => (
  <a
    href="https://www.apex.com.tw/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gold-700 hover:text-gold-500 font-semibold no-underline transition-colors"
  >
    寶碩財務科技股份有限公司（股票代號5210）
  </a>
);

// 發展歷程資料
const milestones = [
  {
    year: '2002年',
    text: '公司正式成立後，投入傳統禮儀服務領域。創業初期逐步累積服務經驗，為後續企業發展奠定極固基礎。',
  },
  {
    year: '2014年',
    text: '為強化企業經營實力與永續發展基礎，資本額增至新臺幣3,000萬元，展現深耕殯葬禮儀服務領域、持續提升服務品質的決心。',
  },
  {
    year: '2016年',
    text: '經臺南市政府民政局核準（南市民生字第1050157780號函），正式取得販售「生前殯葬服務契約」的合法資格。為嚴格保障客戶權益，公司依殯葬管理條例規定，將生前契約款項依法交付「京城銀行」辦理信託專戶管理，確保資金安全透明，落實對每一位家屬安心承諾。',
  },
  {
    year: '2025年',
    text: '本公司迎來經營團隊與經營團隊重組，內部積極推動行政系統整合與流程優化，以持續提供專業且可靠之生前契約與生命禮儀服務。',
  },
  {
    year: '2026年',
    text: (
      <>
        <ApexLink />加入後，進一步擴充資本額至新臺幣6,000萬元，秉持人本關懷的服務使命，持續深化客戶權益保障，落實誠信經營與服務品質，致力於提供安心、完善的生命服務，並以穩健經營為基礎，確保企業永續發展。
      </>
    ),
  },
];

// 存放於 public 目錄下的 story.png
const aboutImage = '/story.png';

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24 lg:py-32 bg-gradient-to-b from-ivory-100 to-ivory-200 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gold-100/40 blur-3xl pointer-events-none" />

      <div ref={ref} className="mx-auto max-w-8xl px-6 relative">
        {/* 將 gap-12 lg:gap-16 改為 gap-6 lg:gap-8，縮短左右兩欄間距 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-24">
          
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
          </div>

          {/* 右側：三個卡片區塊 (故事、使命、願景) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            {aboutSections.map((section, idx) => {
              return (
                <div
                  key={idx}
                  className="relative rounded-2xl p-7 bg-white/80 backdrop-blur-sm shadow-sm border border-ivory-300/80 overflow-hidden group cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="flex items-center justify-center shrink-0">
                      <img 
                        src={section.imageSrc} 
                        alt={section.title} 
                        className="h-8 sm:h-9 w-auto object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_8px_12px_rgba(212,175,55,0.45)]" 
                      />
                    </div>

                    <h3 className="font-serif-tc text-2xl font-bold text-ink-900 group-hover:text-gold-500 transition-colors duration-300">
                      {section.title}
                    </h3>
                  </div>
                  <div className="text-ink-700 leading-relaxed text-base">
                    {section.content}
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300 group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              );
            })}
          </div>

        </div>

        {/* 發展歷程 (Milestones) 區塊 */}
        <div className="group/milestone mt-20 lg:mt-28 max-w-4xl mx-auto bg-white/85 backdrop-blur-md rounded-3xl p-8 sm:p-12 lg:p-16 border border-ivory-300 shadow-xl relative overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
          
          <div className="text-center mb-14">
            <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-bold reveal">
              MILESTONES
            </p>
            <h3 className="font-serif-tc text-3xl md:text-4xl font-bold text-ink-900 mt-2">
              發展歷程
            </h3>
            <div className="gold-divider w-24 mx-auto mt-4" />
          </div>

          {/* 時間軸列表 */}
          <div className="relative border-l-2 border-gold-400/50 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
            {milestones.map((item, index) => (
              <div 
                key={index} 
                className="relative group/timeline cursor-pointer p-2 rounded-xl transition-all duration-300 hover:translate-x-1.5"
              >
                
                <div className="absolute -left-[31px] sm:-left-[47px] top-3.5 w-4 h-4 rounded-full bg-white border-4 border-gold-500 shadow-md group-hover/timeline:scale-150 group-hover/timeline:border-gold-600 group-hover/timeline:shadow-gold-500/50 transition-all duration-300" />

                <h4 className="font-serif-tc text-2xl font-bold text-gold-700 group-hover/timeline:text-gold-500 group-hover/timeline:scale-105 origin-left transition-all duration-300 mb-2 tracking-wide">
                  {item.year}
                </h4>

                <div className="text-ink-700 text-sm sm:text-base leading-relaxed">
                  {item.text}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
