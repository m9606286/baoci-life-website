import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { useScrolled } from '@/hooks/useReveal';
import BrandLogo from '@/components/BrandLogo';

const navLinks = [
  { label: '關於我們', en: 'ABOUT', path: '/' },
  { label: '生前契約', en: 'CONTRACT', path: '/preneed' },
  { label: '服務項目', en: 'SERVICES', path: '/services' },
  { label: '契約商品', en: 'PRODUCTS', path: '/products' },
  { label: '信託公開', en: 'TRUST', path: '/trust' },
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
          {/* Logo 切換回首頁路由 */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="寶慈生命事業首頁"
            onClick={() => setMenuOpen(false)}
          >
            <BrandLogo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `group relative px-4 py-2 flex flex-col items-center text-ink-600 hover:text-ink-900 transition-colors ${
                    isActive ? 'text-ink-900 font-semibold' : ''
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="text-[10px] tracking-[0.25em] text-gold-500/70 group-hover:text-gold-500 transition-colors">
                      {link.en}
                    </span>
                    <span className="text-sm font-medium tracking-wide mt-0.5">
                      {link.label}
                    </span>
                    <span
                      className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-px bg-gold-400 transition-all duration-300 ${
                        isActive ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Phone CTA (desktop) */}
          <a
            href="tel:0800-600-603"
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink-900 text-ivory-50 hover:bg-ink-800 transition-all hover:shadow-lg group"
          >
            <Phone className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">0800-600-603</span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-ink-700"
            aria-label="開啟選單"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-ivory-50 border-t border-ivory-300 animate-fade-in">
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="py-3 border-b border-ivory-200 flex items-center justify-between group"
              >
                <span className="text-ink-700 font-medium">{link.label}</span>
                <span className="text-[10px] tracking-widest text-gold-500">{link.en}</span>
              </Link>
            ))}
            <a
              href="tel:0800-600-603"
              className="mt-4 flex items-center justify-center gap-2 py-3 rounded-full bg-ink-900 text-ivory-50"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span className="font-medium">0800-600-603</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
