
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";

export const metadata = {
  title: "Free Flickr Video Downloader Online - No Signup | 30tools",
  description: "Save Flickr videos to your device in high quality. 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "flickr video downloader, free online tool, no signup, downloaders, flickr video downloader online, 30tools",
  alternates: {
    canonical: "https://30tools.com/flickr-video-downloader",
  },
  openGraph: {
    title: "Free Flickr Video Downloader Online - No Signup | 30tools",
    description: "Save Flickr videos to your device in high quality. 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/flickr-video-downloader",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Flickr Video Downloader Online - No Signup | 30tools",
    description: "Save Flickr videos to your device in high quality. 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "flickr-video-downloader",
  "name": "Flickr Video Downloader",
  "description": "Save Flickr videos to your device in high quality.",
  "route": "/flickr-video-downloader",
  "extraSlugs": [],
  "popular": false,
  "category": "downloaders"
};
  const breadcrumbs = [
  {
    "name": "Downloaders Tools",
    "url": "/downloaders-tools"
  },
  {
    "name": "Flickr Video Downloader",
    "url": "/flickr-video-downloader"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"Flickr Video Downloader","description":"Save Flickr videos to your device in high quality.","url":"https://30tools.com/flickr-video-downloader","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
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
