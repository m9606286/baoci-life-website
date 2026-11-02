import React from 'react';
import { Phone, MapPin, Mail, ArrowUp, ExternalLink } from 'lucide-react';
import { companyInfo } from '@/data/content';
import BrandLogo from '@/components/BrandLogo';

const quickLinks = [
  { label: '關於我們', href: '#top' },
  { label: '生前契約', href: '#preneed' },
  { label: '禮儀服務', href: '#services' },
  { label: '信託公開', href: '#trust' },
  { label: '手續服務', href: '#procedures' },
  { label: '聯絡我們', href: '#contact' },
];

export default function Footer() {
  // 統一處理平滑捲動導航
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#1e293b] text-white border-t border-gold-400/40 transition-colors duration-300">
      {/* Main */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <BrandLogo variant="footer" />
            </div>
            <p className="text-sm leading-relaxed mb-4 text-slate-200 font-normal">
              專業的禮儀服務，溫暖的人文關懷。
            </p>
            <p className="text-sm text-slate-300 font-mono">
              統一編號：{companyInfo.taxId}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-serif-tc text-white font-bold text-base mb-5 tracking-wide">
              快速連結
            </h3>
            <div className="flex gap-x-8">
              {/* 左欄 */}
              <ul className="space-y-2.5">
                {quickLinks.slice(0, 4).map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm text-slate-100 hover:text-gold-400 font-normal transition-colors inline-block cursor-pointer"
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
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm text-slate-100 hover:text-gold-400 font-normal transition-colors inline-block cursor-pointer"
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
            <h3 className="font-serif-tc text-white font-bold text-base mb-5 tracking-wide">
              聯絡方式
            </h3>
            <ul className="space-y-3.5 text-sm text-white">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href="tel:062678859" className="hover:text-gold-400 transition-colors">
                  電話：(06) 2678859
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href="tel:0800600603" className="hover:text-gold-400 transition-colors">
                  24 小時服務專線：0800-600-603
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href="mailto:service@apexbaoci.com.tw" className="hover:text-gold-400 transition-colors">
                  Email：service@apexbaoci.com.tw
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=台北市內湖區新湖二路329號5樓"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>地址：台北市內湖區新湖二路329號5樓</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar (已改為清爽的同色系階梯色，完全移除黑色) */}
      <div className="border-t border-slate-700/60 bg-[#0f172a]">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-300">
            © 2026 寶慈生命事業股份有限公司 · 版權所有
          </p>
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, '#top')}
            className="flex items-center gap-2 text-xs text-slate-200 hover:text-gold-400 transition-colors font-normal group cursor-pointer"
          >
            <span>回到頂部</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform text-gold-400" />
          </a>
        </div>
      </div>
    </footer>
  );
}
