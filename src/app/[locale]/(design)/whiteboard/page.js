import WhiteboardTool from "@/components/tools/design/WhiteboardTool";

export const metadata = {
  title: "Free Online Whiteboard - Draw, Sketch & Collaborate",
  description:
    "Professional whiteboard with instant results. Free online tool for students, professionals, and businesses worldwide. Used by millions worldwide for reliable, fast results.",
  keywords:
    "online whiteboard, free whiteboard, drawing board, sketch pad, digital whiteboard, collaborative whiteboard",
  openGraph: {
    title: "Free Online Whiteboard - Draw, Sketch & Collaborate",
    description:
      "Free unlimited online whiteboard for drawing, sketching, brainstorming and collaboration.",
    url: "https://30tools.com/whiteboard",
    images: [
      {
        url: "/og-images/whiteboard.jpg",
        width: 1200,
        height: 630,
        alt: "Online Whiteboard Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Whiteboard - Free Online Tool | Professional Results",
    description:
      "Professional whiteboard tool. Free online processing with high-quality results. No registration required, instant results.",
    images: ["/og-images/whiteboard.jpg"],
    creator: "@30tools",
  },
  alternates: {
    canonical: "https://30tools.com/whiteboard",
  },
};

const _jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Whiteboard",
  description:
    "Professional whiteboard tool. Free online processing with high-quality results. No registration required, instant results.",
  url: "https://30tools.com/whiteboard",
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

export default function WhiteboardPage() {
  return <WhiteboardTool />;
}
