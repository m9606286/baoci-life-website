import { useReveal } from '@/hooks/useReveal';
import { contractProducts } from '@/data/content';
import { FileText, Phone, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';

const approvalDocs = [
  { title: '生前契約與晨暉、天勤銷售核可函', url: '/生前契約與晨暉、天勤銷售核可函.pdf' },
];

export default function ContractProducts() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="products" className="py-24 lg:py-32 bg-gradient-to-b from-ivory-200 to-ivory-100">
      <div ref={ref} className="mx-auto max-w-8xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-600 text-sm tracking-[0.3em] uppercase reveal">Products</p>
          <h2 className="font-serif-tc text-3xl md:text-4xl lg:text-5xl text-ink-800 font-bold mt-3 reveal reveal-delay-1">
            生前契約商品
          </h2>
          <div className="gold-divider w-32 mx-auto mt-6 reveal reveal-delay-2" />
          <p className="mt-6 text-ink-500 text-lg max-w-2xl mx-auto leading-relaxed reveal reveal-delay-3">
            我們提供標準型與簡約型兩種流程，依不同需求提供最適合的規劃方案。
          </p>
        </div>

        {/* Flow type labels */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 reveal reveal-delay-3">
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink-900 text-ivory-50 text-sm">
            <span className="w-2 h-2 rounded-full bg-gold-400" />
            <span>標準型流程</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-sage-600 text-ivory-50 text-sm">
            <span className="w-2 h-2 rounded-full bg-ivory-50" />
            <span>簡約型流程</span>
          </div>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {contractProducts.map((product, idx) => {
            const isStandard = product.flowType === 'standard';
            return (
              <div
                key={product.name}
                className={`reveal reveal-delay-${(idx % 2) + 1} group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-ink-900/10 transition-all duration-500 hover:-translate-y-2`}
              >
                {/* Top accent bar */}
                <div className={`h-1.5 ${isStandard ? 'bg-gradient-to-r from-gold-400 to-gold-600' : 'bg-gradient-to-r from-sage-400 to-sage-600'}`} />

                <div className="p-8 lg:p-10">
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium ${isStandard ? 'bg-gold-100 text-gold-700' : 'bg-sage-100 text-sage-700'}`}>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{product.type}</span>
                    </div>
                    {/* Product name circle */}
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center font-serif-tc text-2xl font-bold ${isStandard ? 'bg-ink-900 text-gold-400' : 'bg-sage-700 text-ivory-50'}`}>
                      {product.name}
                    </div>
                  </div>

                  {/* Product name */}
                  <h3 className="font-serif-tc text-3xl text-ink-800 font-bold mb-6">
                    {product.name}
                  </h3>

                  {/* Details */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-ink-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-ink-400">銷售通路</p>
                        <p className="text-ink-700 font-medium">{product.channel}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-ink-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-ink-400">聯絡電話</p>
                        <p className="text-ink-700 font-medium">{product.phone}</p>
                      </div>
                    </div>
                  </div>

                  {/* Document link */}
                  <a
                    href={product.documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all group/btn ${
                      isStandard
                        ? 'bg-ink-900 text-ivory-50 hover:bg-ink-800'
                        : 'bg-sage-700 text-ivory-50 hover:bg-sage-600'
                    }`}
                  >
                    <FileText className="w-4 h-4 text-gold-400" />
                    <span>生前契約書</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Approval Documents (Clickable Links) */}
        <div className="mt-12 text-center reveal reveal-delay-4">
          <p className="text-xs text-ink-400 font-medium tracking-wider uppercase mb-3">主管機關核可文件下載</p>
          <div className="flex justify-center items-center">
            {approvalDocs.map((doc, idx) => (
              <a
                key={idx}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/80 hover:bg-white border border-ink-200/80 hover:border-gold-500/50 text-ink-700 hover:text-gold-700 text-sm font-medium transition-all shadow-sm hover:shadow group"
              >
                <FileText className="w-4 h-4 text-gold-600 group-hover:scale-110 transition-transform" />
                <span>{doc.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
