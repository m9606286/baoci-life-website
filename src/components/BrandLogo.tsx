type BrandLogoProps = {
  variant?: 'header' | 'footer';
};

const logoSource = '/寶慈LOGO.png';

export default function BrandLogo({ variant = 'header' }: BrandLogoProps) {
  const isFooter = variant === 'footer';

  // 圖案尺寸與文字大小設定
  const iconDisplayWidth = isFooter ? 40 : 52; 
  const textFontSize = isFooter ? 18 : 22;

  return (
    <span
      className="flex items-center gap-2.5 shrink-0"
      role="img"
      aria-label="寶慈生命事業"
    >
      {/* Icon — 直接完整顯示新上傳的 Logo 圖檔 */}
      <img
        src={logoSource}
        alt="寶慈生命事業 Logo"
        style={{
          width: iconDisplayWidth,
          height: 'auto',
          objectFit: 'contain',
        }}
      />

      {/* Wordmark — 標題文字 */}
      <span
        className="font-serif-tc font-bold tracking-[0.12em] leading-none select-none"
        style={{
          fontSize: textFontSize,
          color: isFooter ? '#64748b' : '#1e3a8a',
        }}
      >
        寶慈生命事業
      </span>
    </span>
  );
}
