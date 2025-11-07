import DownloaderToolsNavbar from '@/components/navigation/DownloaderToolsNavbar';
import DownloaderToolsFooter from '@/components/footers/DownloaderToolsFooter';

export const metadata = {
    title: "Downloader Tools - Free Online Media Downloaders | 30tools",
    description: "Free social media downloaders for Instagram, TikTok, Facebook, and more. Download videos, images, and stories instantly.",
    keywords: "downloader tools, instagram downloader, tiktok downloader, facebook downloader, free downloader tools online",
    openGraph: {
        title: "Downloader Tools - Free Online Media Downloaders",
        description: "Free social media downloaders for Instagram, TikTok, Facebook, and more.",
        url: "https://30tools.com/downloader-tools",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/downloader-tools.jpg",
                width: 1200,
                height: 630,
                alt: "Free Downloader Tools"
            },
        ],
        type: "website"
    },
};

export default function DownloadersLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <DownloaderToolsNavbar />
            <main className="flex-1">
                {children}
            </main>
            <DownloaderToolsFooter />
        </div>
    );
}