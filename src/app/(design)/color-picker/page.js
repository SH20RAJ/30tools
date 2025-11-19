import ColorPickerTool from "@/components/tools/design/ColorPickerTool";

export const metadata = {
  title: "Color Picker - Pick Colors & Get All Formats | 30tools",
  description:
    "Professional color picker with instant results. Free online tool for students, professionals, and businesses worldwide. Used by millions worldwide for reliable, fast results.",
  keywords:
    "color picker, hex color picker, rgb color picker, color harmonies, color palette generator, color converter",
  openGraph: {
    title: "Color Picker - Pick Colors & Get All Formats",
    description:
      "Professional color picker with all formats and color harmony generation.",
    url: "https://30tools.com/color-picker",
    images: [
      {
        url: "/og-images/color-picker.jpg",
        width: 1200,
        height: 630,
        alt: "Color Picker Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Color Picker - Free Online Tool | Professional Results",
    description:
      "Professional color picker tool. Free online processing with high-quality results. No registration required, instant results.",
    images: ["/og-images/color-picker.jpg"],
    creator: "@30tools",
  },
  alternates: {
    canonical: "https://30tools.com/color-picker",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Color Picker",
  description:
    "Professional color picker tool. Free online processing with high-quality results. No registration required, instant results.",
  url: "https://30tools.com/color-picker",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "30tools",
    url: "https://30tools.com",
  },
};

export default function ColorPickerPage() {
  return <ColorPickerTool />;
}
