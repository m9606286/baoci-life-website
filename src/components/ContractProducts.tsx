import { Download, Building2, Phone, CheckCircle2, MinusCircle, FileText } from 'lucide-react';

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
    id: 'baohui',
    typeTag: '簡約型禮儀服務',
    bgImage: '/寶暉契約書封面.png',
    channel: {
      name: '晨暉資產股份有限公司',
      phone: '02-2514-7758',
    },
    pdfUrl: '/寶暉生前契約書.pdf',
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
    baohui: '10 件以內',
  },
];

export default function ContractProducts() {
  return (
    <section id="products" className="pt-2 pb-24 lg:pt-4 lg:pb-32 bg-ivory-100/60 relative -mt-6 lg:-mt-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 標題區 */}
        <div className="text-center mb-14">
          <p className="text-gold-600 text-sm tracking-[0.3em] uppercase">
            Contract Products
          </p>
          <h2 className="font-serif-tc text-3xl md:text-4xl text-ink-800 font-bold mt-2">
            契約商品
          </h2>
          {/* 左右漸細的經典金色分隔線 */}
          <div className="gold-divider w-32 mx-auto mt-6" />
        </div>

        {/* 商品格子區塊 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto mb-10">
          {contractProducts.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-2xl overflow-hidden shadow-lg border border-ivory-300 aspect-[3/4] flex flex-col justify-end p-6 sm:p-8 hover:shadow-2xl transition-all duration-500"
            >
              {/* 背景圖片 */}
              <div className="absolute inset-0 overflow-hidden bg-ivory-200">
                <img
                  src={product.bgImage}
                  alt={product.typeTag}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
              </div>

              {/* 漸層遮罩 */}
              <div className="absolute inset-0 bg-gradient-to-b from-ink-950/10 via-transparent to-ink-950/90 pointer-events-none transition-opacity duration-500 group-hover:opacity-95" />

              {/* 下方資訊區塊 */}
              <div className="relative z-10 text-white space-y-4 flex flex-col items-start text-left">
                
                {/* 銷售通路與聯絡電話 */}
                <div className="space-y-2 text-sm sm:text-base font-medium">
                  <div className="flex items-center gap-1.5 text-white">
                    <Building2 className="w-4 h-4 text-white shrink-0" />
                    <span>銷售通路：{product.channel.name}</span>
                  </div>

                  <a
                    href={`tel:${product.channel.phone}`}
                    className="flex items-center gap-1.5 text-white hover:text-gold-300 transition-colors duration-200 group/phone"
                  >
                    <Phone className="w-4 h-4 text-white group-hover/phone:text-gold-300 shrink-0 transition-colors duration-200" />
                    <span className="font-mono group-hover/phone:underline underline-offset-4">
                      聯絡電話：{product.channel.phone}
                    </span>
                  </a>
                </div>

                {/* 底部按鈕區 */}
                <div className="pt-2 flex items-center gap-2.5 w-full flex-wrap">
                  {/* 服務型態標籤 */}
                  <span className="inline-flex items-center px-4 py-2.5 rounded-xl bg-ink-900/90 hover:bg-gold-500 text-white hover:text-ink-950 font-medium text-xs sm:text-sm transition-all duration-300 border border-gold-400/40 backdrop-blur-sm shadow-md cursor-default">
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

        {/* 獨立區塊：台南市民政局生前契約銷售及代銷商最新核准函（位於契約書與對照表之間） */}
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <a
            href="/台南市民政局生前契約銷售及代銷商最新核准函1150903.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-ink-900/90 hover:bg-gold-600 text-white font-medium text-sm sm:text-base transition-all duration-300 border border-gold-400/40 backdrop-blur-sm shadow-lg group hover:shadow-xl hover:-translate-y-0.5"
          >
            <FileText className="w-5 h-5 text-gold-400 group-hover:text-white transition-colors shrink-0" />
            <span>台南市民政局生前契約銷售及代銷商最新核准函</span>
            <Download className="w-4 h-4 shrink-0" />
          </a>
        </div>

        {/* 生前契約商品差異對照表 */}
        <div className="bg-white border border-ivory-200 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-md max-w-5xl mx-auto">
          <div className="text-center mb-8 pt-2">
            <p className="text-gold-600 text-sm tracking-[0.3em] uppercase">Product Comparison</p>
            <h3 className="font-serif-tc text-2xl lg:text-3xl font-bold text-ink-800 mt-2">
              生前契約主要商品差異
            </h3>
            <div className="gold-divider w-24 mx-auto mt-4" />
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
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-ink-800 hover:bg-gold-600 text-white font-medium text-sm transition-all shadow-md"
            >
              諮詢適合您的方案
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
