import AudioEditor from "@/components/tools/audio/AudioEditorTool";


export const metadata = {
  title: 'Audio Editor - Edit Audio Files Online | 30tools',
  description: "Professional audio editor with instant results. Free online tool for students, professionals, and businesses worldwide. Used by millions worldwide for reliable, fast results.",
  keywords: 'audio editor, edit audio, audio trimmer, audio effects, mp3 editor, wav editor',
  openGraph: {
    title: 'Audio Editor - Edit Audio Files Online | 30tools',
    description: 'Edit audio files - trim, merge, and apply effects.',
    type: 'website',
  },
,
  twitter: {
    card: "summary_large_image",
    title: "Audio Editor - Free Online Tool | Professional Results",
    description: "Professional audio editor tool. Free online processing with high-quality results. No registration required, instant results.",
    images: ["/og-images/audio-editor.jpg"],
    creator: "@30tools"
  }
,
  alternates: {
    canonical: "https://30tools.com/audio-editor"
  }
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Audio Editor",
  "description": "Professional audio editor tool. Free online processing with high-quality results. No registration required, instant results.",
  "url": "https://30tools.com/audio-editor",
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

export default function AudioEditorPage() {
  return <AudioEditor />;
}
