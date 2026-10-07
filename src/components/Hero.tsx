import { Phone, ChevronDown, Heart } from 'lucide-react';

const heroImage =
  'https://images.pexels.com/photos/4148981/pexels-photo-4148981.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280';

export default function Hero() {
  return (
    <section id="top" className="relative h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="家人彼此陪伴"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/50 via-ink-900/40 to-ink-900/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full mx-auto max-w-8xl px-6 flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <Heart className="w-5 h-5 text-gold-300" />
            <span className="text-gold-300 text-sm tracking-[0.3em] uppercase">Apex BaoCi-Life</span>
          </div>

          <h1
            className="font-serif-tc text-4xl md:text-5xl lg:text-6xl text-ivory-50 leading-[1.2] font-bold animate-fade-up"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            用愛心規劃
            <span className="block gold-text-gradient mt-2">讓家人安心</span>
          </h1>

          <p
            className="mt-8 text-lg md:text-xl text-ivory-200/90 leading-relaxed max-w-2xl animate-fade-up"
            style={{ animationDelay: '0.7s', opacity: 0 }}
          >
            幫助您提早規劃，讓生命的每一刻
            <br />
            都充滿尊嚴與意義。
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: '1s', opacity: 0 }}
          >
            <a
              href="#preneed"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gold-400 text-ink-900 font-medium hover:bg-gold-300 transition-all hover:shadow-2xl hover:shadow-gold-500/20 group"
            >
              <span>瞭解生前契約</span>
              <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-ivory-200/40 text-ivory-50 font-medium hover:bg-ivory-50/10 transition-all backdrop-blur-sm group"
            >
              <Phone className="w-4 h-4 mr-2 text-gold-300 group-hover:scale-110 transition-transform" />
              <span>聯絡我們</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1.5s', opacity: 0 }}>
        <span className="text-ivory-200/60 text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-ivory-200/60 to-transparent" />
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ivory-100 to-transparent" />
    </section>
  );
}
