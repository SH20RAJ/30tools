
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";

export const metadata = {
  title: "Free Save Tiktok Mp4 Online - No Signup | 30tools",
  description: "Free Save Tiktok Mp4 online. Save Tiktok Mp4 allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "save tiktok mp4, free online tool, no signup, downloaders, save tiktok mp4 online, 30tools",
  alternates: {
    canonical: "https://30tools.com/save-tiktok-mp4",
  },
  openGraph: {
    title: "Free Save Tiktok Mp4 Online - No Signup | 30tools",
    description: "Free Save Tiktok Mp4 online. Save Tiktok Mp4 allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/save-tiktok-mp4",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Save Tiktok Mp4 Online - No Signup | 30tools",
    description: "Free Save Tiktok Mp4 online. Save Tiktok Mp4 allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "save-tiktok-mp4",
  "name": "Save Tiktok Mp4",
  "description": "Free Save Tiktok Mp4 online. Save Tiktok Mp4 allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
  "route": "/save-tiktok-mp4",
  "extraSlugs": [
    "save-tiktok-mp4",
    "save-tiktok-music"
  ],
  "category": "downloaders"
};
  const breadcrumbs = [
  {
    "name": "Downloaders Tools",
    "url": "/downloaders-tools"
  },
  {
    "name": "Save Tiktok Mp4",
    "url": "/save-tiktok-mp4"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"Save Tiktok Mp4","description":"Free Save Tiktok Mp4 online. Save Tiktok Mp4 allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.","url":"https://30tools.com/save-tiktok-mp4","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
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
