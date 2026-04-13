
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";

export const metadata = {
  title: "Free Instagram Image Downloader Online - No Signup | 30tools",
  description: "Download Instagram Image online for free. The ultimate tool for downloading videos and media from Instagram directly to your device. Fast, secure, and no installation required. 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "instagram image downloader, free online tool, no signup, downloaders, instagram image downloader online, 30tools",
  alternates: {
    canonical: "https://30tools.com/instagram-image-downloader",
  },
  openGraph: {
    title: "Free Instagram Image Downloader Online - No Signup | 30tools",
    description: "Download Instagram Image online for free. The ultimate tool for downloading videos and media from Instagram directly to your device. Fast, secure, and no installation required. 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/instagram-image-downloader",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Instagram Image Downloader Online - No Signup | 30tools",
    description: "Download Instagram Image online for free. The ultimate tool for downloading videos and media from Instagram directly to your device. Fast, secure, and no installation required. 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "instagram-image-downloader",
  "name": "Instagram Image Downloader",
  "description": "Download Instagram Image online for free. The ultimate tool for downloading videos and media from Instagram directly to your device. Fast, secure, and no installation required.",
  "route": "/instagram-image-downloader",
  "extraSlugs": [
    "ig-image-downloader",
    "instagram-photo-downloader",
    "instagram-picture-saver",
    "instagram-profile-photo-hd",
    "instagram-profile-pic-downloader",
    "instagram-profile-picture-viewer",
    "profile-pic-viewer-instagram"
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
    "name": "Instagram Image Downloader",
    "url": "/instagram-image-downloader"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"Instagram Image Downloader","description":"Download Instagram Image online for free. The ultimate tool for downloading videos and media from Instagram directly to your device. Fast, secure, and no installation required.","url":"https://30tools.com/instagram-image-downloader","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
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
