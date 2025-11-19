import LogoMaker from "@/components/tools/design/LogoMakerTool";

export const metadata = {
  title: "Logo Maker - Create Simple Logos Online | 30tools",
  description:
    "Professional logo maker with instant results. Free online tool for students, professionals, and businesses worldwide. Used by millions worldwide for reliable, fast results.",
  keywords:
    "logo maker, logo creator, logo designer, brand graphics, logo generator, design logo",
  openGraph: {
    title: "Logo Maker - Create Simple Logos Online | 30tools",
    description: "Create simple logos and brand graphics online.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logo Maker - Free Online Tool | Professional Results",
    description:
      "Professional logo maker tool. Free online processing with high-quality results. No registration required, instant results.",
    images: ["/og-images/logo-maker.jpg"],
    creator: "@30tools",
  },
  alternates: {
    canonical: "https://30tools.com/logo-maker",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Logo Maker",
  description:
    "Professional logo maker tool. Free online processing with high-quality results. No registration required, instant results.",
  url: "https://30tools.com/logo-maker",
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

export default function LogoMakerPage() {
  return <LogoMaker />;
}
