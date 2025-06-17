import ColorConverterTool from '@/components/tools/design/ColorConverterTool';

export const metadata = {
  title: 'Color Converter - HEX, RGB, HSL Converter | 30tools',
  description: 'Convert colors between HEX, RGB, and HSL formats. Free online color converter with live preview and copy functionality.',
  keywords: 'color converter, hex to rgb, rgb to hsl, color format converter, hex color converter, css color converter',
  openGraph: {
    title: 'Color Converter - HEX, RGB, HSL Converter | 30tools',
    description: 'Convert colors between HEX, RGB, and HSL formats with live preview.',
    type: 'website',
  },
};

export default function ColorConverterPage() {
  return <ColorConverterTool />;
}
