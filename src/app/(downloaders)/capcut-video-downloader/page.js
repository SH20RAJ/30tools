
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";

export const metadata = {
  title: "Free Capcut Video Downloader Online - No Signup | 30tools",
  description: "Download Capcut videos and templates easily. 100% free, no signup required, and privacy-focused processing in your browser.",
  keywords: "capcut video downloader, free online tool, no signup, downloaders, capcut video downloader online, 30tools",
  alternates: {
    canonical: "https://30tools.com/capcut-video-downloader",
  },
  openGraph: {
    title: "Free Capcut Video Downloader Online - No Signup | 30tools",
    description: "Download Capcut videos and templates easily. 100% free, no signup required, and privacy-focused processing in your browser.",
    url: "https://30tools.com/capcut-video-downloader",
    siteName: "30tools",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Capcut Video Downloader Online - No Signup | 30tools",
    description: "Download Capcut videos and templates easily. 100% free, no signup required, and privacy-focused processing in your browser.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function ToolPage() {
  const tool = {
  "id": "capcut-video-downloader",
  "name": "Capcut Video Downloader",
  "description": "Download Capcut videos and templates easily.",
  "route": "/capcut-video-downloader",
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
    "name": "Capcut Video Downloader",
    "url": "/capcut-video-downloader"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"Capcut Video Downloader","description":"Download Capcut videos and templates easily.","url":"https://30tools.com/capcut-video-downloader","applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }}
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
