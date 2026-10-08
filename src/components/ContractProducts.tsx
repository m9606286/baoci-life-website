import React from 'react';
import { Download, Building2, Phone } from 'lucide-react';

interface ContractProduct {
  id: string;
  typeTag: string; // 左上角：標準型禮儀服務 / 簡約型禮儀服務
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
          <div className="w-20 h-0.5 bg-gold-400 mx-auto mt-4" />
        </div>

        {/* 4 個商品格子（比例 3:4 契合契約書封面尺寸） */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {contractProducts.map((product) => (
            <div
              key={product.id}
              className="relative rounded-2xl overflow-hidden shadow-lg border border-ivory-300 aspect-[3/4] bg-cover bg-center flex flex-col justify-between p-6 sm:p-8 group hover:shadow-2xl transition-all duration-300"
              style={{ backgroundImage: `url(${product.bgImage})` }}
            >
              {/* 漸層遮罩，提升文字閱讀清晰度（上與下柔和黑漸層） */}
              <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-transparent to-ink-950/85 pointer-events-none" />

              {/* 左上角：禮儀服務類型標籤 */}
              <div className="relative z-10 flex justify-start">
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-ink-900 text-xs sm:text-sm font-medium border border-gold-300/60 shadow-sm">
                  {product.typeTag}
                </span>
              </div>

              {/* 左下角：銷售通路、聯絡電話、生前契約書下載 */}
              <div className="relative z-10 text-white space-y-4">
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center gap-1.5 text-gold-300/90 font-medium">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>銷售通路</span>
                  </div>
                  <p className="font-medium text-white/95 text-sm sm:text-base pl-5">
                    {product.channel.name}
                  </p>

                  <div className="flex items-center gap-1.5 text-gold-300/90 font-medium pt-1">
                    <Phone className="w-3.5 h-3.5" />
                    <span>聯絡電話</span>
                  </div>
                  <p className="font-mono text-white/90 text-xs sm:text-sm pl-5">
                    {product.channel.phone}
                  </p>
                </div>

                {/* 生前契約書下載按鈕 */}
                <div className="pt-2">
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
