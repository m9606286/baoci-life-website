type BrandLogoProps = {
  variant?: 'header' | 'footer';
};

const logoSource = '/images/螢幕擷取畫面_2026-08-28_141654.png';

export default function BrandLogo({ variant = 'header' }: BrandLogoProps) {
  const isFooter = variant === 'footer';

  const iconDisplayWidth = isFooter ? 48 : 64;
  const iconDisplayHeight = (iconDisplayWidth * 50) / 84;
  const textFontSize = isFooter ? 22 : 28;

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
        {/* 精緻立體光澤圖層 — Shape-preserving, clean background */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-90"
          style={{
            // 使用純白色的光照漸層，完全移除深色邊緣
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.3) 100%)',
          }}
        />
      </span>

      {/* Wordmark — clean serif text, ensuring no shadow/gradient artifacts */}
      <span
        className="font-serif-tc font-bold tracking-[0.12em] leading-none select-none"
        style={{
          fontSize: textFontSize,
          color: isFooter ? '#64748b' : '#1e3a8a', // 頁首：深藍色；頁尾：優雅灰
        }}
      >
        寶慈生命事業
      </span>
    </span>
  );
}
