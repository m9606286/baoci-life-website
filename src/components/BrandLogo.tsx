type BrandLogoProps = {
  variant?: 'header' | 'footer';
};

const logoSource = '/images/螢幕擷取畫面_2026-08-28_141654.png';

export default function BrandLogo({ variant = 'header' }: BrandLogoProps) {
  const isFooter = variant === 'footer';

  const iconDisplayWidth = isFooter ? 48 : 64;
  const iconDisplayHeight = iconDisplayWidth * 50 / 84;
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
        {/* 3D gradient lighting overlay — shape-preserving */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-85 mix-blend-soft-light"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 40%, rgba(4,27,62,0.35) 100%)',
          }}
        />
      </span>

      {/* Wordmark — real text in serif font, sized to match the icon */}
      <span
        className="font-serif-tc font-bold tracking-[0.12em] leading-none select-none"
        style={{
          fontSize: textFontSize,
          background:
            'linear-gradient(180deg, #3a6da6 0%, #24528b 45%, #163e6b 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
          filter: isFooter
            ? 'brightness(1.8) saturate(0.9)'
            : 'none',
        }}
      >
        寶慈生命事業
      </span>
    </span>
  );
}
