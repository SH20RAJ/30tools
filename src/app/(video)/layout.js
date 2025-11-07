import VideoToolsNavbar from '@/components/navigation/VideoToolsNavbar';
import VideoToolsFooter from '@/components/footers/VideoToolsFooter';

export const metadata = {
  title: "Video Tools - Free Online Video Processing | 30tools",
  description: "Professional video tools for compression, conversion, and GIF creation. Free online video processing with high quality output.",
  keywords: "video tools, video compressor, video converter, video to gif, free video tools online",
  openGraph: {
    title: "Video Tools - Free Online Video Processing",
    description: "Professional video tools for compression, conversion, and GIF creation.",
    url: "https://30tools.com/video-tools",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/video-tools.jpg",
        width: 1200,
        height: 630,
        alt: "Free Video Tools"
      },
    ],
    type: "website"
  },
};

export default function VideoToolsLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <VideoToolsNavbar />
      <main className="flex-1">
        {children}
      </main>
      <VideoToolsFooter />
    </div>
  );
}
