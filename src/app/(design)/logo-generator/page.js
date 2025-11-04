import LogoGeneratorTool from '@/components/tools/design/LogoGeneratorTool';

export const metadata = {
  title: "Free Logo Generator - Create Professional Business Logos Online | 30tools",
  description: "Create professional logos instantly with our free logo generator. Choose from text-based designs, custom fonts, colors, and effects. No design skills required. Download high-quality PNG/SVG logos.",
  keywords: [
    "logo maker",
    "free logo generator",
    "logo creator",
    "business logo",
    "brand logo",
    "logo design tool",
    "text logo maker",
    "company logo generator"
  ],
  longTailKeywords: [
    "free logo generator no watermark",
    "simple logo maker online",
    "business logo creator free",
    "text based logo generator",
    "professional logo design tool",
    "custom logo maker with fonts",
    "logo generator for small business",
    "create logo online free download"
  ],
  primaryKeyword: "logo generator",
  openGraph: {
    title: "Free Logo Generator - Create Professional Business Logos Online",
    description: "Create professional logos instantly with our free logo generator. Choose from text-based designs, custom fonts, colors, and effects.",
    url: "https://30tools.com/logo-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/logo-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Free Logo Generator Tool"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Logo Generator - Create Professional Business Logos",
    description: "Create professional logos instantly with our free logo generator. No design skills required.",
    images: ["/og-images/logo-generator.jpg"]
  }
};

export default function LogoGeneratorPage() {
  return <LogoGeneratorTool />;
}