type BrandLogoProps = {
  variant?: 'header' | 'footer';
};

const logoSource = '/logo.png';

export default function BrandLogo({ variant = 'header' }: BrandLogoProps) {
  const isFooter = variant === 'footer';

  return (
    <a href="/" className="flex items-center gap-2.5 shrink-0 group">
      {/* 限制 Logo 高度為 h-8 (約 32px)，保持精緻不誇張 */}
      <img
        src={logoSource}
        alt="寶慈生命事業"
        className="h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />
      {/* 套用典雅明體 (font-serif-tc)、適中字型大小與精緻字距 */}
      <span
        className={`font-serif-tc text-lg md:text-xl font-bold tracking-wider ${
          isFooter ? 'text-white/90' : 'text-slate-800'
        }`}
      >
        寶慈生命事業
      </span>
    </a>
  );
}
