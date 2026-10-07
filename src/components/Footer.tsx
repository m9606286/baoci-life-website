import { Phone, MapPin, Mail, ArrowUp } from 'lucide-react';
import { companyInfo } from '@/data/content';
import BrandLogo from '@/components/BrandLogo';

const quickLinks = [
  { label: '關於我們', href: '#top', isTop: true },
  { label: '核心價值', href: '#values' },
  { label: '生前契約', href: '#preneed' },
  { label: '服務項目', href: '#services' },
  { label: '契約商品', href: '#products' },
  { label: '信託公開', href: '#trust' },
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
    <footer className="bg-ink-950 text-white">
      {/* Main - 縮減最大寬度至 max-w-6xl，並減少上下內距 */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <BrandLogo variant="footer" />
            </div>
            <p className="text-sm leading-relaxed mb-4 text-white">
              專業的禮儀服務，溫暖的人文關懷。
            </p>
            <p className="text-sm text-white">
              統一編號：{companyInfo.taxId}
            </p>
          </div>

          {/* Quick links - 改為兩欄橫向排列 */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5 tracking-wide">快速連結</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-sm text-white hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5 tracking-wide">聯絡方式</h3>
            <ul className="space-y-3.5 text-sm text-white">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href="tel:062678859" className="hover:text-gold-400 transition-colors">
                  電話：(06) 2678859
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href="tel:0800-600-603" className="hover:text-gold-400 transition-colors">
                  24 小時服務專線：0800-600-603
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href="mailto:service@apexbaoci.com.tw" className="hover:text-gold-400 transition-colors">
                  Email：service@apexbaoci.com.tw
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>地址：台北市內湖區新湖二路329號5樓</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar - 同步縮減容器寬度 */}
      <div className="border-t border-ink-800">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white">
            © 2026 寶慈生命事業股份有限公司 · 版權所有
          </p>
          <a
            href="#top"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-white hover:text-gold-400 transition-colors group"
          >
            <span>回到頂部</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform text-gold-400" />
          </a>
        </div>
      </div>
    </footer>
  );
}
