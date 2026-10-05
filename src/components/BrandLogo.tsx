type BrandLogoProps = {
  variant?: 'header' | 'footer';
};

const logoSource = '/寶慈LOGO.png';

export default function BrandLogo({ variant = 'header' }: BrandLogoProps) {
  const isFooter = variant === 'footer';

  // 圖案尺寸與文字大小設定
  const iconDisplayWidth = isFooter ? 40 : 52; // 圖案隨之微調，比例更協調
  const iconDisplayHeight = (iconDisplayWidth * 50) / 84;
  
  // 💡 文字大小：頁首從 28 縮小為 22；頁尾從 22 縮小為 18
  const textFontSize = isFooter ? 18 : 22;

  return (
    <span
      className="flex items-center gap-2.5 shrink-0"
      role="img"
      aria-label="寶慈生命事業"
    >
      {/* Icon — cropped left portion of the original logo image */}
      <span
        className="relative block overflow-hidden shrink-0"
        style={{ width: iconDisplayWidth, height: iconDisplayHeight }}
      >
        <img
          src={logoSource}
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-0 max-w-none"
          style={{
            width: iconDisplayWidth * (396 / 84),
            height: iconDisplayHeight,
            maxWidth: 'none',
          }}
        />
        {/* 精緻立體光澤圖層 */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-90"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.3) 100%)',
          }}
        />
      </span>

      {/* Wordmark — 縮小後的標題文字 */}
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
