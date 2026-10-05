import { useReveal } from '@/hooks/useReveal';
import { Megaphone } from 'lucide-react';
import { announcement } from '@/data/content';

export default function Announcement() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="py-12 lg:py-16 bg-ivory-100">
      <div ref={ref} className="mx-auto max-w-8xl px-6">
        <div className="reveal relative bg-gradient-to-r from-ink-900 to-ink-800 rounded-2xl p-6 lg:p-8 overflow-hidden shadow-xl">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-full opacity-10 pointer-events-none">
            <div className="w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(212,167,73,0.4) 0%, transparent 60%)',
            }} />
          </div>

          <div className="relative flex items-center gap-4 lg:gap-6">
            <div className="flex-shrink-0 w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gold-400/15 border border-gold-400/30 flex items-center justify-center">
              <Megaphone className="w-7 h-7 lg:w-8 lg:h-8 text-gold-400" />
            </div>
            <div>
              <p className="text-gold-400 text-xs tracking-[0.25em] uppercase mb-2">重要公告</p>
              <p className="font-serif-tc text-base lg:text-xl text-ivory-50 leading-relaxed font-medium">
                {announcement}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
