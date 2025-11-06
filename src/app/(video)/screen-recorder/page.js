import ScreenRecorder from "@/components/tools/video/ScreenRecorderTool";

export const metadata = {
  title: 'Screen Recorder - Record Your Screen | 30tools',
  description: "Professional screen recorder tool. Process videos online for free with high quality output. No watermarks, no registration required. Fast & secure processing.",
  keywords: 'screen recorder, screen capture, record screen, desktop recording, video recording',
  openGraph: {
    title: 'Screen Recorder - Record Your Screen | 30tools',
    description: 'Record your screen and save as video file.',
    type: 'website',
  },
,
  twitter: {
    card: "summary_large_image",
    title: "Screen Recorder - Free Online Video Tool | High-Quality Results",
    description: "Professional screen recorder tool. Process videos online for free with high quality output. No watermarks, no registration required. Fast & secure processing.",
    images: ["/og-images/screen-recorder.jpg"],
    creator: "@30tools"
  }
,
  alternates: {
    canonical: "https://30tools.com/screen-recorder"
  }
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Screen Recorder",
  "description": "Professional screen recorder tool. Process videos online for free with high quality output. No watermarks, no registration required. Fast & secure processing.",
  "url": "https://30tools.com/screen-recorder",
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
  }
};

export default function ScreenRecorderPage() {
  return <ScreenRecorder />;
}
