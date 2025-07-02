import YouTubeToolsNavbar from '@/components/navigation/YouTubeToolsNavbar';
import YouTubeToolsFooter from '@/components/footers/YouTubeToolsFooter';

export const metadata = {
  title: "YouTube Tools - Free Online YouTube Utilities | 30tools",
  description: "Professional YouTube tools for video download, thumbnail extraction, tag generation, and content optimization. Free YouTube utilities for creators and marketers.",
  keywords: "youtube tools, youtube downloader, youtube thumbnail downloader, youtube tag generator, free youtube tools online",
  openGraph: {
    title: "YouTube Tools - Free Online YouTube Utilities",
    description: "Professional YouTube tools for video download, thumbnail extraction, and content optimization.",
    url: "https://30tools.com/youtube-tools",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/youtube-tools.jpg",
        width: 1200,
        height: 630,
        alt: "Free YouTube Tools"
      }
    ],
    type: "website"
  },
};

export default function YouTubeLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-cute">
      <YouTubeToolsNavbar />
      <main className="flex-1 relative">
        <div className="absolute inset-0 bg-gradient-cute opacity-50"></div>
        <div className="relative z-10">{children}</div>
      </main>
      <YouTubeToolsFooter />
    </div>
  );
}
