type BrandLogoProps = {
  variant?: 'header' | 'footer';
};

// 使用根目錄下的圖檔（建議確認 GitHub public/ 目錄下存有寶慈LOGO.png，或改為英文檔名）
const logoSource = '/logo.png';

export default function BrandLogo({ variant = 'header' }: BrandLogoProps) {
  const isFooter = variant === 'footer';

  // 依據 Header (頁首) 或 Footer (頁尾) 控制 Logo 的顯示寬度
  const logoWidth = isFooter ? 180 : 180;

  return (
    <a href="/" className="flex items-center shrink-0">
      <img
        src={logoSource}
        alt="寶慈生命事業"
        style={{
          width: logoWidth,
          height: 'auto',
          objectFit: 'contain',
        }}
      />
    </a>
  );
}
