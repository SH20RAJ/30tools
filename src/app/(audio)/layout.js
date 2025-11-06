import AudioToolsNavbar from '@/components/navigation/AudioToolsNavbar';
import AudioToolsFooter from '@/components/footers/AudioToolsFooter';

export const metadata = {
  title: "Audio Tools - Free Online Audio Processing | 30tools",
  description: "Professional audio tools for compression and format conversion. Free online audio processing with high quality output.",
  keywords: "audio tools, audio compressor, audio converter, free audio tools online",
  openGraph: {
    title: "Audio Tools - Free Online Audio Processing",
    description: "Professional audio tools for compression and format conversion.",
    url: "https://30tools.com/audio-tools",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/audio-tools.jpg",
        width: 1200,
        height: 630,
        alt: "Free Audio Tools"
      }
    ],
    type: "website"
  },
};

export default function AudioToolsLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AudioToolsNavbar />
      <main className="flex-1">
        {children}
      </main>
      <AudioToolsFooter />
    </div>
  );
}
