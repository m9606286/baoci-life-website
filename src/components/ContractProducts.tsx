import React from 'react';
import { Download, Building2, Phone } from 'lucide-react';

interface ContractProduct {
  id: string;
  typeTag: '標準型禮儀服務' | '簡約型禮儀服務';
  bgImage: string; // 契約書封面背景路徑
  channel: {
    name: string;
    phone: string;
  };
  pdfUrl: string;
}

const contractProducts: ContractProduct[] = [
  {
    id: 'baofu',
    typeTag: '標準型禮儀服務',
    bgImage: '/寶富契約書封面.png',
    channel: {
      name: '晨暉資產股份有限公司',
      phone: '02-2514-7758',
    },
    pdfUrl: '/寶富生前契約書.pdf',
  },
  {
    id: 'fuyi',
    typeTag: '標準型禮儀服務',
    bgImage: '/福益契約書封面.png',
    channel: {
      name: '天勤生命文創股份有限公司',
      phone: '04-2322-0208',
    },
    pdfUrl: '/福益生前契約書.pdf',
  },
  {
    id: 'baohui',
    typeTag: '簡約型禮儀服務',
    bgImage: '/寶暉契約書封面.png',
    channel: {
      name: '晨暉資產股份有限公司',
      phone: '02-2514-7758',
    },
    pdfUrl: '/寶暉生前契約書.pdf',
  },
  {
    id: 'puyu',
    typeTag: '簡約型禮儀服務',
    bgImage: '/璞瑜契約書封面.png',
    channel: {
      name: '天勤生命文創股份有限公司',
      phone: '04-2322-0208',
    },
    pdfUrl: '/璞瑜生前契約書.pdf',
  },
];

export default function ContractProducts() {
  return (
    <section id="products" className="py-20 bg-ivory-100/60 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 標題區 */}
        <div className="text-center mb-14">
          <p className="text-gold-600 text-xs sm:text-sm tracking-[0.25em] uppercase font-medium">
            Contract Products
          </p>
          <h2 className="font-serif-tc text-3xl md:text-4xl text-ink-800 font-bold mt-2">
            生前契約商品
          </h2>
          {/* 原版左右漸細的經典金色分隔線 */}
          <div className="gold-divider w-32 mx-auto mt-6" />
        </div>

        {/* 4 個商品格子（比例 3:4 契合契約書封面尺寸） */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {contractProducts.map((product) => (
            <div
              key={product.id}
              className="relative rounded-2xl overflow-hidden shadow-lg border border-ivory-300 aspect-[3/4] bg-cover bg-center flex flex-col justify-end p-6 sm:p-8 group hover:shadow-2xl transition-all duration-300"
              style={{ backgroundImage: `url(${product.bgImage})` }}
            >
              {/* 漸層遮罩，提升文字閱讀清晰度 */}
              <div className="absolute inset-0 bg-gradient-to-b from-ink-950/20 via-transparent to-ink-950/90 pointer-events-none" />

              {/* 下方資訊區塊 */}
              <div className="relative z-10 text-white space-y-4 flex flex-col items-end">
                
                {/* 銷售通路與聯絡電話 (左邊字體起始點完全對齊，字體大小統一) */}
                <div className="space-y-3 flex flex-col items-start w-fit text-left">
                  
                  {/* 銷售通路 */}
                  <div>
                    <div className="flex items-center gap-1.5 text-white font-medium text-sm sm:text-base">
                      <Building2 className="w-4 h-4 text-white shrink-0" />
                      <span>銷售通路</span>
                    </div>
                    <p className="font-medium text-white/95 text-sm sm:text-base mt-0.5">
                      {product.channel.name}
                    </p>
                  </div>

                  {/* 聯絡電話 (對齊銷售通路，字體大小相同) */}
                  <div>
                    <div className="flex items-center gap-1.5 text-white font-medium text-sm sm:text-base">
                      <Phone className="w-4 h-4 text-white shrink-0" />
                      <span>聯絡電話</span>
                    </div>
                    <p className="font-mono text-white/95 text-sm sm:text-base font-semibold mt-0.5">
                      {product.channel.phone}
                    </p>
                  </div>

                </div>

                {/* 底部按鈕區：服務類型標籤（左） + 生前契約書下載按鈕（右） */}
                <div className="pt-2 flex items-center justify-end gap-2.5 w-full flex-wrap">
                  {/* 服務型態標籤 (置於下載按鈕左側) */}
                  <span className="inline-flex items-center px-4 py-2.5 rounded-xl bg-ink-900/90 text-white text-xs sm:text-sm font-medium border border-gold-400/40 backdrop-blur-sm shadow-md">
                    {product.typeTag}
                  </span>

                  {/* 生前契約書下載按鈕 */}
                  <a
                    href={product.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ink-900/90 hover:bg-gold-500 text-white hover:text-ink-950 font-medium text-xs sm:text-sm transition-all duration-300 border border-gold-400/40 backdrop-blur-sm shadow-md"
                  >
                    <span>生前契約書</span>
                    <Download className="w-4 h-4" />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
