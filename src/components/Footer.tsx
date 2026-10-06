import { Phone, MapPin, ArrowUp } from 'lucide-react';
import { companyInfo } from '@/data/content';
import BrandLogo from '@/components/BrandLogo';

const quickLinks = [
  { label: '關於我們', href: '#about' },
  { label: '核心價值', href: '#values' },
  { label: '生前契約', href: '#preneed' },
  { label: '服務項目', href: '#services' },
  { label: '契約商品', href: '#products' },
  { label: '信託公開', href: '#trust' },
  { label: '聯絡我們', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ivory-200/60">
      {/* Main */}
      <div className="mx-auto max-w-8xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <BrandLogo variant="footer" />
            </div>
            <p className="text-sm leading-relaxed mb-4">
              專業的禮儀服務，溫暖的人文關懷。
            </p>
            <p className="text-sm text-ivory-200/40">
              統一編號：{companyInfo.taxId}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-ivory-50 font-medium text-sm mb-5 tracking-wide">快速連結</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-ivory-50 font-medium text-sm mb-5 tracking-wide">聯絡方式</h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <a href="tel:0800-600-603" className="hover:text-gold-400 transition-colors">
                  24 小時服務專線 0800-600-603
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span>地址：台北市內湖區新湖二路329號5樓</span>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-ink-800">
              <h3 className="text-ivory-50 font-medium text-sm mb-4 tracking-wide">信託保障</h3>
              <ul className="space-y-2.5 text-sm">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  <span>75% 交付京城銀行信託保管</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  <span>寶碩（股票代號5210）全資子公司</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ink-800">
        <div className="mx-auto max-w-8xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory-200/40">
            © 2026 寶慈生命事業股份有限公司 · 版權所有
          </p>
          <a
            href="#top"
            className="flex items-center gap-2 text-xs text-ivory-200/60 hover:text-gold-400 transition-colors group"
          >
            <span>回到頂部</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
}
