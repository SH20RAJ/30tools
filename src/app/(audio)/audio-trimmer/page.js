import AudioTrimmer from "@/components/tools/audio/AudioTrimmerTool";

export const metadata = {
  title: 'Audio Trimmer - Trim and Cut Audio | 30tools',
  description: "Professional audio trimmer with instant results. Free online tool for students, professionals, and businesses worldwide.",
  keywords: 'audio trimmer, audio cutter, trim audio, cut audio, audio clips, mp3 trimmer',
  openGraph: {
    title: 'Audio Trimmer - Trim and Cut Audio | 30tools',
    description: 'Trim and cut audio clips to specific lengths.',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Audio Trimmer - Free Online Tool | Professional Results",
    description: "Professional audio trimmer tool. Free online processing with high-quality results. No registration required, instant results.",
    images: ["/og-images/audio-trimmer.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/audio-trimmer"
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Audio Trimmer",
  "description": "Professional audio trimmer tool. Free online processing with high-quality results. No registration required, instant results.",
  "url": "https://30tools.com/audio-trimmer",
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

export default function AudioTrimmerPage() {
  return <AudioTrimmer />;
}
