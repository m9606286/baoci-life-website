type BrandLogoProps = {
  variant?: 'header' | 'footer';
};

const logoSource = '/logo.png';

export default function BrandLogo({ variant = 'header' }: BrandLogoProps) {
  const isFooter = variant === 'footer';

  return (
    <a href="/" className="flex items-center gap-3 shrink-0 group">
      <img
        src={logoSource}
        alt="寶慈生命事業"
        className="h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
      />
      <span
        className={`font-serif-tc text-xl md:text-2xl font-bold tracking-wide ${
          isFooter ? 'text-white' : 'text-ink-900'
        }`}
      >
        寶慈生命事業
      </span>
    </a>
  );
}
