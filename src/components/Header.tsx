import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { useScrolled } from '@/hooks/useReveal';
import BrandLogo from '@/components/BrandLogo';

interface SubLink {
  label: string;
  path: string;
  hash?: string;
}

interface NavItem {
  label: string;
  en: string;
  path: string;
  subLinks?: SubLink[];
}

const navLinks: NavItem[] = [
  {
    label: '關於寶慈',
    en: 'ABOUT',
    path: '/about',
    subLinks: [
      { label: '關於寶慈', path: '/about', hash: 'about-intro' },
      { label: '發展歷程', path: '/about', hash: 'about-history' },
    ],
  },
  {
    label: '生前契約',
    en: 'CONTRACT',
    path: '/preneed',
    subLinks: [
      { label: '什麼是生前契約', path: '/preneed', hash: 'contract-intro' },
      { label: '契約商品', path: '/preneed', hash: 'contract-products' },
    ],
  },
  {
    label: '禮儀服務',
    en: 'SERVICES',
    path: '/services',
    subLinks: [
      { label: '禮儀服務團隊', path: '/services', hash: 'services-team' },
      { label: '12 大禮儀服務流程', path: '/services', hash: 'services-process' },
    ],
  },
  { label: '信託公開', en: 'TRUST', path: '/trust' },
  { label: '手續服務', en: 'PROCEDURES', path: '/procedures' },
  { label: '聯絡我們', en: 'CONTACT', path: '/contact' },
];

export default function Header() {
  const scrolled = useScrolled(60);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);
  const navigate = useNavigate();

  // 點擊子選單：切換頁面並瞬間跳轉到目標區塊（不使用平滑位移）
  const handleSubLinkClick = (e: React.MouseEvent, sub: SubLink) => {
    e.preventDefault();
    setMenuOpen(false);
    setOpenMobileSub(null);

    const targetUrl = sub.hash ? `${sub.path}#${sub.hash}` : sub.path;
    navigate(targetUrl);

    // 確保在頁面渲染完成後瞬間定位到該 ID
    setTimeout(() => {
      if (sub.hash) {
        const el = document.getElementById(sub.hash);
        if (el) {
          const headerOffset = 100; // 預留頂部導覽列高度，避免標題被遮住
          const elementPosition = el.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - headerOffset,
            behavior: 'instant' as ScrollBehavior,
          });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }, 50);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory-50/95 backdrop-blur-md shadow-[0_2px_20px_rgba(12,15,20,0.08)]'
          : 'bg-ivory-50/90 backdrop-blur-md shadow-sm'
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

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1.5 font-medium">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group/nav">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `group relative px-3.5 py-2 flex flex-col items-center text-ink-900 hover:text-[#C69233] transition-colors ${
                      isActive ? 'text-[#C69233] font-bold' : ''
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* 英文小標題 */}
                      <span className="font-serif-tc text-[11px] tracking-[0.25em] text-gold-700 group-hover:text-[#C69233] transition-colors font-bold uppercase">
                        {link.en}
                      </span>
                      {/* 中文標題 + 若有子選單則加上小箭頭提示 */}
                      <span className="font-serif-tc text-sm sm:text-base font-bold tracking-wide mt-0.5 inline-flex items-center gap-1">
                        <span>{link.label}</span>
                        {link.subLinks && (
                          <ChevronDown className="w-3.5 h-3.5 text-gold-600 group-hover:text-[#C69233] transition-transform duration-300 group-hover/nav:rotate-180" />
                        )}
                      </span>
                    </>
                  )}
                </NavLink>

                {/* 第二層下拉選單 (桌面版 Hover 展開)：背景已改為更淺的灰 #f2f1ef */}
                {link.subLinks && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible translate-y-1 group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 transition-all duration-200 z-50">
                    <div className="w-48 rounded-2xl bg-[#f2f1ef]/90 backdrop-blur-md shadow-[0_12px_30px_rgba(12,15,20,0.12)] py-2 overflow-hidden">
                      {link.subLinks.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.hash ? `${sub.path}#${sub.hash}` : sub.path}
                          onClick={(e) => handleSubLinkClick(e, sub)}
                          className="block px-5 py-2.5 text-center font-serif-tc text-sm font-bold text-ink-900 hover:text-[#C69233] transition-colors"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Phone CTA (desktop) */}
          <a
            href="tel:0800-600-603"
            className="hidden lg:flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#585c63] text-ivory-50 border border-gold-400/60 ring-1 ring-gold-400/25 hover:border-gold-300 hover:ring-gold-300/40 hover:bg-gold-600 transition-all hover:shadow-xl group shrink-0"
          >
            <div className="p-2 rounded-full bg-gold-400/20 text-gold-300 group-hover:bg-white group-hover:text-gold-600 transition-colors">
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs text-gold-300 group-hover:text-white font-medium tracking-wider leading-none transition-colors">
                24小時服務專線
              </span>
              <span className="text-base font-bold tracking-wide mt-0.5 leading-tight font-['Microsoft_JhengHei']">
                0800-600-603
              </span>
            </div>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-ink-900 cursor-pointer"
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
            {navLinks.map((link) => {
              const isSubOpen = openMobileSub === link.path;
              return (
                <div key={link.path} className="border-b border-ivory-200">
                  <div className="py-3 flex items-center justify-between">
                    <Link
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className="flex-1 flex items-center justify-between group pr-2"
                    >
                      <span className="font-serif-tc text-ink-900 text-base font-bold group-hover:text-[#C69233] transition-colors">
                        {link.label}
                      </span>
                      <span className="font-serif-tc text-[11px] tracking-widest text-gold-700 font-bold uppercase">
                        {link.en}
                      </span>
                    </Link>

                    {/* 手機版子選單展開按鈕 */}
                    {link.subLinks && (
                      <button
                        type="button"
                        onClick={() => setOpenMobileSub(isSubOpen ? null : link.path)}
                        className="p-1.5 text-gold-600 hover:bg-gold-400/10 rounded-lg transition-colors"
                        aria-label={`展開${link.label}子選單`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isSubOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* 手機版第二層子項目：背景同樣改為 #f2f1ef */}
                  {link.subLinks && isSubOpen && (
                    <div className="pb-3 pl-4 space-y-1.5 bg-[#f2f1ef]/90 rounded-xl p-2 mt-1">
                      {link.subLinks.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.hash ? `${sub.path}#${sub.hash}` : sub.path}
                          onClick={(e) => handleSubLinkClick(e, sub)}
                          className="block py-2 px-3 rounded-lg font-serif-tc text-sm font-semibold text-ink-900 hover:text-[#C69233] transition-colors"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <a
              href="tel:0800-600-603"
              className="mt-4 flex items-center justify-center gap-3 py-3 rounded-full bg-[#585c63] text-ivory-50 border border-gold-400/60 ring-1 ring-gold-400/25 hover:bg-gold-600 transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-300" />
              <div className="flex flex-col items-start">
                <span className="text-xs text-gold-300 font-medium leading-none">24小時服務專線</span>
                <span className="font-bold text-base leading-tight mt-0.5 font-['Microsoft_JhengHei']">0800-600-603</span>
              </div>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
