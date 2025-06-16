import ColorPickerTool from '@/components/tools/design/ColorPickerTool';

export const metadata = {
  title: "Color Picker - Pick Colors & Get All Formats | 30tools",
  description: "Professional color picker tool with HEX, RGB, HSL, CMYK formats. Generate color harmonies, save palettes, and get contrast ratios. Free online color picker.",
  keywords: "color picker, hex color picker, rgb color picker, color harmonies, color palette generator, color converter",
  openGraph: {
    title: "Color Picker - Pick Colors & Get All Formats",
    description: "Professional color picker with all formats and color harmony generation.",
    url: "https://30tools.com/color-picker",
    images: [
      {
        url: "/og-images/color-picker.jpg",
        width: 1200,
        height: 630,
        alt: "Color Picker Tool"
      }
    ],
  },
};

export default function ColorPickerPage() {
  return <ColorPickerTool />;
}
