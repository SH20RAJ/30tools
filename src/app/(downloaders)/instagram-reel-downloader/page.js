
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";

export const metadata = {
  title: "Free Instagram Reel Downloader Online - No Signup | 30tools",
  description: "Download Instagram Reels without watermark in HD 1080p quality with original audio. Fast, free, and no login required. Save IG Reels to your gallery instantly. 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "instagram reel downloader, free online tool, no signup, downloaders, instagram reel downloader online, 30tools",
  alternates: {
    canonical: "https://30tools.com/instagram-reel-downloader",
  },
  openGraph: {
    title: "Free Instagram Reel Downloader Online - No Signup | 30tools",
    description: "Download Instagram Reels without watermark in HD 1080p quality with original audio. Fast, free, and no login required. Save IG Reels to your gallery instantly. 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/instagram-reel-downloader",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Instagram Reel Downloader Online - No Signup | 30tools",
    description: "Download Instagram Reels without watermark in HD 1080p quality with original audio. Fast, free, and no login required. Save IG Reels to your gallery instantly. 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "instagram-reel-downloader",
  "name": "Instagram Reel Downloader",
  "description": "Download Instagram Reels without watermark in HD 1080p quality with original audio. Fast, free, and no login required. Save IG Reels to your gallery instantly.",
  "route": "/instagram-reel-downloader",
  "extraSlugs": [
    "save-instagram-reels-without-watermark-online",
    "ig-reel-saver-hd",
    "download-instagram-reels-with-audio",
    "insta-reel-download-free",
    "save-ig-reels-to-gallery-1080p",
    "instagram-reel-downloader-no-signup"
  ],
  "popular": true,
  "category": "downloaders"
};
  const breadcrumbs = [
  {
    "name": "Downloaders Tools",
    "url": "/downloaders-tools"
  },
  {
    "name": "Instagram Reel Downloader",
    "url": "/instagram-reel-downloader"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"Instagram Reel Downloader","description":"Download Instagram Reels without watermark in HD 1080p quality with original audio. Fast, free, and no login required. Save IG Reels to your gallery instantly.","url":"https://30tools.com/instagram-reel-downloader","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
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
