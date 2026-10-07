type BrandLogoProps = {
  variant?: 'header' | 'footer';
};

// 使用純 Logo 圖示（請確認 public 資料夾下有這張圖片，例如 /logo-icon.png 或 /logo.png）
const logoSource = '/logo.png';

export default function BrandLogo({ variant = 'header' }: BrandLogoProps) {
  const isFooter = variant === 'footer';

  return (
    <a href="/" className="flex items-center gap-3 shrink-0 group">
      {/* 1. 純 Logo 圖示 */}
      <img
        src={logoSource}
        alt="寶慈生命事業"
        className="h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
      />

      {/* 2. 品牌名稱文字（Header 與 Footer 自動切換合適的漸層藍顏色） */}
      <span
        className={`font-serif-tc text-xl md:text-2xl font-bold tracking-wide bg-clip-text text-transparent ${
          isFooter
            ? 'bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200' // 深色頁尾：亮典雅藍漸層
            : 'bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-900' // 淺色頁首：深沉藍漸層
        }`}
      >
        寶慈生命事業
      </span>
    </a>
  );
}
