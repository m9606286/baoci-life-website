import React from 'react';
import { Phone, MapPin, Mail, ArrowUp } from 'lucide-react';
import { companyInfo } from '@/data/content';
import BrandLogo from '@/components/BrandLogo';

const quickLinks = [
  { label: '關於我們', href: '#top', isTop: true },
  { label: '生前契約', href: '#preneed' },
  { label: '禮儀服務', href: '#services' },
  { label: '信託公開', href: '#trust' },
  { label: '手續服務', href: '#procedures' },
  { label: '聯絡我們', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof quickLinks[0]) => {
    if (link.isTop) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ivory-50/90 text-slate-700 border-t border-gold-400/30 transition-colors duration-300">
      {/* Main */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <BrandLogo variant="footer" />
            </div>
            <p className="text-sm leading-relaxed mb-4 text-slate-600 font-medium">
              專業的禮儀服務，溫暖的人文關懷。
            </p>
            <p className="text-sm text-slate-500 font-mono">
              統一編號：{companyInfo.taxId}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-serif-tc text-ink-950 font-bold text-base mb-5 tracking-wide">
              快速連結
            </h3>
            <div className="flex gap-x-8">
              {/* 左欄 */}
              <ul className="space-y-2.5">
                {quickLinks.slice(0, 4).map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link)}
                      className="text-sm text-slate-600 hover:text-gold-600 font-medium transition-colors inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              {/* 右欄 */}
              <ul className="space-y-2.5">
                {quickLinks.slice(4).map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link)}
                      className="text-sm text-slate-600 hover:text-gold-600 font-medium transition-colors inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif-tc text-ink-950 font-bold text-base mb-5 tracking-wide">
              聯絡方式
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-600">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-600 flex-shrink-0" />
                <a href="tel:062678859" className="hover:text-gold-600 transition-colors">
                  電話：(06) 2678859
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-600 flex-shrink-0" />
                <a href="tel:0800600603" className="hover:text-gold-600 font-semibold transition-colors">
                  24 小時服務專線：0800-600-603
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-600 flex-shrink-0" />
                <a href="mailto:service@apexbaoci.com.tw" className="hover:text-gold-600 transition-colors">
                  Email：service@apexbaoci.com.tw
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold-600 flex-shrink-0" />
                <span>地址：台北市內湖區新湖二路329號5樓</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold-400/20 bg-ivory-100/60">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © 2026 寶慈生命事業股份有限公司 · 版權所有
          </p>
          <a
            href="#top"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-slate-600 hover:text-gold-600 transition-colors font-medium group"
          >
            <span>回到頂部</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform text-gold-600" />
          </a>
        </div>
      </div>
    </footer>
  );
}
