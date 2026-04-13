
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";

export const metadata = {
  title: "Free Pinterest Video Downloader Online - No Signup | 30tools",
  description: "Download Pinterest videos in HD fast and free. Convert pins to MP4 or GIF—on mobile or desktop. Save favorites in 720p/1080p, and 4K when available. 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "pinterest video downloader, free online tool, no signup, downloaders, pinterest video downloader online, 30tools",
  alternates: {
    canonical: "https://30tools.com/pinterest-video-downloader",
  },
  openGraph: {
    title: "Free Pinterest Video Downloader Online - No Signup | 30tools",
    description: "Download Pinterest videos in HD fast and free. Convert pins to MP4 or GIF—on mobile or desktop. Save favorites in 720p/1080p, and 4K when available. 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/pinterest-video-downloader",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Pinterest Video Downloader Online - No Signup | 30tools",
    description: "Download Pinterest videos in HD fast and free. Convert pins to MP4 or GIF—on mobile or desktop. Save favorites in 720p/1080p, and 4K when available. 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "pinterest-video-downloader",
  "name": "Pinterest Video Downloader",
  "description": "Download Pinterest videos in HD fast and free. Convert pins to MP4 or GIF—on mobile or desktop. Save favorites in 720p/1080p, and 4K when available.",
  "route": "/pinterest-video-downloader",
  "extraSlugs": [
    "how-to-download-pinterest-videos-to-camera-roll",
    "pinterest-video-download-hd",
    "pinterest-video-saver-hd",
    "save-pinterest-video"
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
    "name": "Pinterest Video Downloader",
    "url": "/pinterest-video-downloader"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"Pinterest Video Downloader","description":"Download Pinterest videos in HD fast and free. Convert pins to MP4 or GIF—on mobile or desktop. Save favorites in 720p/1080p, and 4K when available.","url":"https://30tools.com/pinterest-video-downloader","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
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
