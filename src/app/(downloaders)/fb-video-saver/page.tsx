
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";

export const metadata = {
  title: "Free Fb Video Saver Online - No Signup | 30tools",
  description: "Free Fb Video Saver online. Fb Video Saver allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "fb video saver, free online tool, no signup, downloaders, fb video saver online, 30tools",
  alternates: {
    canonical: "https://30tools.com/fb-video-saver",
  },
  openGraph: {
    title: "Free Fb Video Saver Online - No Signup | 30tools",
    description: "Free Fb Video Saver online. Fb Video Saver allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/fb-video-saver",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Fb Video Saver Online - No Signup | 30tools",
    description: "Free Fb Video Saver online. Fb Video Saver allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "fb-video-saver",
  "name": "Fb Video Saver",
  "description": "Free Fb Video Saver online. Fb Video Saver allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
  "route": "/fb-video-saver",
  "extraSlugs": [
    "download-fb-video",
    "fb-story-saver",
    "fb-video-saver",
    "insta-video-saver"
  ],
  "category": "downloaders"
};
  const breadcrumbs = [
  {
    "name": "Downloaders Tools",
    "url": "/downloaders-tools"
  },
  {
    "name": "Fb Video Saver",
    "url": "/fb-video-saver"
  }
];
  const relatedTools = [
  {
    "id": "akillitv-video-downloader",
    "name": "AkilliTv Video Downloader",
    "description": "Download AkilliTv videos easily with our free online downloader.",
    "route": "/akillitv-video-downloader",
    "extraSlugs": [],
    "popular": false,
    "category": "downloaders"
  },
  {
    "id": "bandcamp-video-downloader",
    "name": "Bandcamp Video Downloader",
    "description": "The easiest way to download Bandcamp videos online.",
    "route": "/bandcamp-video-downloader",
    "extraSlugs": [],
    "popular": false,
    "category": "downloaders"
  },
  {
    "id": "bilibili-video-downloader",
    "name": "Bilibili Video Downloader",
    "description": "Download Bilibili videos online with ease.",
    "route": "/bilibili-video-downloader",
    "extraSlugs": [],
    "popular": false,
    "category": "downloaders"
  }
];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"Fb Video Saver","description":"Free Fb Video Saver online. Fb Video Saver allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.","url":"https://30tools.com/fb-video-saver","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
      />
      
      <ToolLayout 
        tool={tool} 
        breadcrumbs={breadcrumbs}
        relatedTools={relatedTools}
      >
        <DownloaderEngine placeholder="Enter URL to download..." />
      </ToolLayout>
    </>
  );
}
