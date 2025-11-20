import LogoMaker from "@/components/tools/design/LogoMakerTool";
import ToolSEOLayout from "@/components/seo/ToolSEOLayout";

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
    images: [
      {
        url: "/og-images/logo-maker.jpg",
        width: 1200,
        height: 630,
        alt: "Logo Maker Preview",
      },
    ],
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

export default function LogoMakerPage() {
  return (
    <ToolSEOLayout toolId="logo-maker">
      <LogoMaker />
    </ToolSEOLayout>
  );
}
