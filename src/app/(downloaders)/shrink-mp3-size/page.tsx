
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";

export const metadata = {
  title: "Free Shrink Mp3 Size Online - No Signup | 30tools",
  description: "Free Shrink Mp3 Size online. Shrink Mp3 Size allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "shrink mp3 size, free online tool, no signup, downloaders, shrink mp3 size online, 30tools",
  alternates: {
    canonical: "https://30tools.com/shrink-mp3-size",
  },
  openGraph: {
    title: "Free Shrink Mp3 Size Online - No Signup | 30tools",
    description: "Free Shrink Mp3 Size online. Shrink Mp3 Size allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/shrink-mp3-size",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Shrink Mp3 Size Online - No Signup | 30tools",
    description: "Free Shrink Mp3 Size online. Shrink Mp3 Size allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "shrink-mp3-size",
  "name": "Shrink Mp3 Size",
  "description": "Free Shrink Mp3 Size online. Shrink Mp3 Size allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
  "route": "/shrink-mp3-size",
  "extraSlugs": [
    "shrink-mp3-size"
  ],
  "category": "downloaders"
};
  const breadcrumbs = [
  {
    "name": "Downloaders Tools",
    "url": "/downloaders-tools"
  },
  {
    "name": "Shrink Mp3 Size",
    "url": "/shrink-mp3-size"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"Shrink Mp3 Size","description":"Free Shrink Mp3 Size online. Shrink Mp3 Size allows you to save social media content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.","url":"https://30tools.com/shrink-mp3-size","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
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
