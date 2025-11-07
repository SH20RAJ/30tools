import VideoEditor from "@/components/tools/video/VideoEditorTool";

export const metadata = {
  title: 'Video Editor - Edit Videos Online | 30tools',
  description: "Professional video editor tool. Process videos online for free with high quality output. No watermarks, no registration required. Fast & secure processing.",
  keywords: 'video editor, edit videos, video trimmer, video cutter, video merger, online video editing',
  openGraph: {
    title: 'Video Editor - Edit Videos Online | 30tools',
    description: 'Basic video editing online - trim, cut, and merge videos.',
    type: 'website',
  },

  twitter: {
    card: "summary_large_image",
    title: "Video Editor - Free Online Video Tool | High-Quality Results",
    description: "Professional video editor tool. Process videos online for free with high quality output. No watermarks, no registration required. Fast & secure processing.",
    images: ["/og-images/video-editor.jpg"],
    creator: "@30tools"
  },

  alternates: {
    canonical: "https://30tools.com/video-editor"
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Video Editor",
  "description": "Professional video editor tool. Process videos online for free with high quality output. No watermarks, no registration required. Fast & secure processing.",
  "url": "https://30tools.com/video-editor",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  },
};

export default function VideoEditorPage() {
  return <VideoEditor />;
}
