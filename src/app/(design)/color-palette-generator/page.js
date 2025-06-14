import ColorPaletteGeneratorTool from '@/components/tools/design/ColorPaletteGeneratorTool';

export const metadata = {
  title: "Free Color Palette Generator Online - Create Beautiful Color Schemes | 30tools",
  description: "Generate beautiful color palettes instantly. Create harmonious color schemes, extract colors from images, and export in CSS, SCSS, JSON formats. Perfect for designers and developers.",
  keywords: "color palette generator, color scheme generator, color harmony, extract colors from image, css color palette, design colors, color picker, website color palette",
  openGraph: {
    title: "Free Color Palette Generator Online - Create Beautiful Color Schemes",
    description: "Generate beautiful color palettes instantly. Create harmonious color schemes and extract colors from images.",
    url: "https://30tools.com/color-palette-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/color-palette-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Free Color Palette Generator Online"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Color Palette Generator Online - Create Beautiful Color Schemes",
    description: "Generate beautiful color palettes instantly. Perfect for designers and developers.",
    images: ["/og-images/color-palette-generator.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/color-palette-generator"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Design Tools',
  other: {
    'application-name': '30tools',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Color Palette Generator - 30tools',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000'
  }
};

export default function ColorPaletteGeneratorPage() {
  return <ColorPaletteGeneratorTool />;
}
