import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { useScrolled } from '@/hooks/useReveal';
import BrandLogo from '@/components/BrandLogo';

const navLinks = [
  { label: '關於我們', en: 'ABOUT', path: '/' },
  { label: '生前契約', en: 'CONTRACT', path: '/preneed' },
  { label: '禮儀服務', en: 'SERVICES', path: '/services' },
  { label: '信託公開', en: 'TRUST', path: '/trust' },
  { label: '手續服務', en: 'PROCEDURES', path: '/procedures' },
  { label: '聯絡我們', en: 'CONTACT', path: '/contact' },
];

export default function Header() {
  const scrolled = useScrolled(60);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory-50/95 backdrop-blur-md shadow-[0_2px_20px_rgba(12,15,20,0.08)]'
          : 'bg-ivory-50/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-8xl px-6">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="寶慈生命事業首頁"
            onClick={() => setMenuOpen(false)}
          >
            <BrandLogo />
          </Link>

          {/* Desktop nav (同步採用 font-serif-tc 襯線體) */}
          <nav className="hidden lg:flex items-center gap-1.5 font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `group relative px-3.5 py-2 flex flex-col items-center text-ink-700 hover:text-gold-600 transition-colors ${
                    isActive ? 'text-gold-600 font-semibold' : ''
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {/* 英文小標題：使用 font-serif-tc 襯線體 */}
                    <span className="font-serif-tc text-[11px] tracking-[0.25em] text-gold-600 group-hover:text-gold-600 transition-colors font-bold uppercase">
                      {link.en}
                    </span>
                    {/* 中文標題：使用 font-serif-tc 襯線體 */}
                    <span className="font-serif-tc text-sm sm:text-base font-bold tracking-wide mt-0.5">
                      {link.label}
                    </span>
                    
                    {/* 金色底線 */}
                    <span
                      className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 bg-gold-500 transition-all duration-300 ${
                        isActive
                          ? 'w-3/4 opacity-100'
                          : 'w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Phone CTA (desktop) - 已替換為與 Footer 相同的質感黑 bg-ink-950，並加上金屬邊框 */}
          <a
            href="tel:0800-600-603"
            className="hidden lg:flex items-center gap-3 px-5 py-2 rounded-full bg-ink-950 text-ivory-50 border border-gold-400/40 ring-1 ring-gold-400/20 hover:border-gold-400 hover:bg-gold-600 transition-all hover:shadow-lg group shrink-0"
          >
            <div className="p-1.5 rounded-full bg-gold-400/20 text-gold-400 group-hover:bg-white group-hover:text-gold-600 transition-colors">
              <Phone className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-gold-400 group-hover:text-white font-medium tracking-wider leading-none transition-colors">
                24小時服務專線
              </span>
              <span className="text-sm font-semibold tracking-wide mt-0.5 leading-tight font-['Microsoft_JhengHei']">
                0800-600-603
              </span>
            </div>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-ink-700 cursor-pointer"
            aria-label="開啟選單"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-ivory-50 border-t border-ivory-300 animate-fade-in font-medium">
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="py-3 border-b border-ivory-200 flex items-center justify-between group"
              >
                <span className="font-serif-tc text-ink-800 text-base font-bold group-hover:text-gold-600 transition-colors">{link.label}</span>
                <span className="font-serif-tc text-[11px] tracking-widest text-gold-600 font-bold uppercase">{link.en}</span>
              </Link>
            ))}
            <a
              href="tel:0800-600-603"
              className="mt-4 flex items-center justify-center gap-3 py-3 rounded-full bg-ink-950 text-ivory-50 border border-gold-400/40 ring-1 ring-gold-400/20 hover:bg-gold-600 transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <div className="flex flex-col items-start">
                <span className="text-[10px] text-gold-400 font-medium leading-none">24小時服務專線</span>
                <span className="font-semibold text-sm leading-tight mt-0.5 font-['Microsoft_JhengHei']">0800-600-603</span>
              </div>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
