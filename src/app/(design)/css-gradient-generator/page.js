import CSSGradientTool from '@/components/tools/design/CSSGradientTool';

export const metadata = {
  title: "CSS Gradient Generator - Free Online Tool | 30tools",
  description: "Create beautiful CSS gradients with live preview and export options for web development.",
  keywords: "css gradient generator, linear gradient, radial gradient, css background, web design tools, gradient maker",
  openGraph: {
    title: "CSS Gradient Generator - Free Online Tool",
    description: "Create beautiful CSS gradients with live preview and export options.",
    url: "https://30tools.com/css-gradient-generator",
    images: [
      {
        url: "/og-images/css-gradient-generator.jpg",
        width: 1200,
        height: 630,
        alt: "CSS Gradient Generator Tool"
      }
    ],
  },
};

export default function CSSGradientPage() {
  return <CSSGradientTool />;
}
