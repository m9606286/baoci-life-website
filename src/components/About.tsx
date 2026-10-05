import { useReveal } from '@/hooks/useReveal';
import { ShieldCheck, Scale } from 'lucide-react';

const values = [
  { icon: ShieldCheck, title: '專業保障', text: '擁有豐富與專業的行業經驗，確保應有之服務品質。' },
  { icon: Scale, title: '法規遵循', text: '依據內政部《殯葬管理條例》規範，簽訂生前契約後依法保障消費者權益。' },
];

const aboutImage =
  'https://images.pexels.com/photos/18199418/pexels-photo-18199418.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1500';

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24 lg:py-32 bg-gradient-to-b from-ivory-100 to-ivory-200 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gold-100/40 blur-3xl pointer-events-none" />

      <div ref={ref} className="mx-auto max-w-8xl px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative reveal">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="溫暖的禮儀服務"
                className="w-full h-[480px] lg:h-[580px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl shadow-2xl p-6">
              <p className="font-serif-tc text-3xl font-bold gold-text-gradient">75%</p>
              <p className="text-xs text-ink-500 mt-1">信託保障</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-gold-600 text-sm tracking-[0.3em] uppercase reveal">About Us</p>
            <h2 className="font-serif-tc text-3xl md:text-4xl lg:text-5xl text-ink-800 font-bold mt-3 reveal reveal-delay-1 leading-tight">
              專業的禮儀服務
              <span className="block gold-text-gradient mt-2">溫暖的人文關懷</span>
            </h2>
            <div className="gold-divider w-32 mt-6 reveal reveal-delay-2" />
            <p className="mt-8 text-ink-600 text-lg leading-relaxed reveal reveal-delay-2">
              寶慈生命事業股份有限公司，用愛心規劃，讓家人安心。
              我們協助您提早規劃人生最後旅程，以專業、透明、溫暖的服務，
              為每一個生命留下永恆的尊嚴與紀念。
            </p>
            <p className="mt-4 text-ink-500 leading-relaxed reveal reveal-delay-3">
              依殯葬管理條例規範，契約款項依規定提撥75%交付京城銀行辦理信託保管，
              確保資金安全與專款專用。寶慈生命事業為寶碩（股票代號5210）轉投資之關係企業，
              依循公司治理原則運作，強化營運穩定性與長期服務承諾。
            </p>

            {/* Values */}
            <div className="mt-10 space-y-5">
              {values.map((value, idx) => (
                <div
                  key={value.title}
                  className={`reveal reveal-delay-${idx + 1} flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="text-ink-800 font-serif-tc font-bold text-lg">{value.title}</h3>
                    <p className="text-ink-500 text-sm mt-1 leading-relaxed">{value.text}</p>
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
