
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";

export const metadata = {
  title: "Free Linkedin Video Downloader Online - No Signup | 30tools",
  description: "Download LinkedIn videos in high quality—free and easy. Our LinkedIn Video Downloader works with any public post link. Just copy the LinkedIn video URL, paste it, and download in seconds. No signup, no clutter, and no confusing steps—just fast processing and a clean, simple interface that helps you save videos quickly. 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "linkedin video downloader, free online tool, no signup, downloaders, linkedin video downloader online, 30tools",
  alternates: {
    canonical: "https://30tools.com/linkedin-video-downloader",
  },
  openGraph: {
    title: "Free Linkedin Video Downloader Online - No Signup | 30tools",
    description: "Download LinkedIn videos in high quality—free and easy. Our LinkedIn Video Downloader works with any public post link. Just copy the LinkedIn video URL, paste it, and download in seconds. No signup, no clutter, and no confusing steps—just fast processing and a clean, simple interface that helps you save videos quickly. 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/linkedin-video-downloader",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Linkedin Video Downloader Online - No Signup | 30tools",
    description: "Download LinkedIn videos in high quality—free and easy. Our LinkedIn Video Downloader works with any public post link. Just copy the LinkedIn video URL, paste it, and download in seconds. No signup, no clutter, and no confusing steps—just fast processing and a clean, simple interface that helps you save videos quickly. 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "linkedin-video-downloader",
  "name": "Linkedin Video Downloader",
  "description": "Download LinkedIn videos in high quality—free and easy. Our LinkedIn Video Downloader works with any public post link. Just copy the LinkedIn video URL, paste it, and download in seconds. No signup, no clutter, and no confusing steps—just fast processing and a clean, simple interface that helps you save videos quickly.",
  "route": "/linkedin-video-downloader",
  "extraSlugs": [
    "save-linkedin-video-online-free",
    "linkedin-video-grabber"
  ],
  "popular": false,
  "category": "downloaders"
};
  const breadcrumbs = [
  {
    "name": "Downloaders Tools",
    "url": "/downloaders-tools"
  },
  {
    "name": "Linkedin Video Downloader",
    "url": "/linkedin-video-downloader"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"Linkedin Video Downloader","description":"Download LinkedIn videos in high quality—free and easy. Our LinkedIn Video Downloader works with any public post link. Just copy the LinkedIn video URL, paste it, and download in seconds. No signup, no clutter, and no confusing steps—just fast processing and a clean, simple interface that helps you save videos quickly.","url":"https://30tools.com/linkedin-video-downloader","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
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
