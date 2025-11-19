import PhotoEnhancer from "@/components/tools/image/PhotoEnhancerTool";

export const metadata = {
  title: "Photo Enhancer - AI Image Enhancement | 30tools",
  description:
    "Enhance photo quality with AI-powered image enhancement. Improve sharpness, reduce noise, and enhance colors automatically.",
  keywords:
    "photo enhancer, AI image enhancement, photo quality, image upscaling, noise reduction, sharpness",
  openGraph: {
    title: "Photo Enhancer - AI Image Enhancement | 30tools",
    description: "Enhance photo quality with AI-powered image enhancement.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Photo Enhancer - Free Image Tool | Professional Quality",
    description:
      "Professional photo enhancer for Process images online. Free, fast & secure image processing. No watermarks, maintains original quality.",
    images: ["/og-images/photo-enhancer.jpg"],
    creator: "@30tools",
  },

  alternates: {
    canonical: "https://30tools.com/photo-enhancer",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Photo Enhancer",
  description:
    "Professional photo enhancer for Process images online. Free, fast & secure image processing. No watermarks, maintains original quality.",
  url: "https://30tools.com/photo-enhancer",
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

export default function PhotoEnhancerPage() {
  return <PhotoEnhancer />;
}
