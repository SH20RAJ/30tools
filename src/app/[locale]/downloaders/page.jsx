import DownloaderToolsNavbar from "@/components/navigation/DownloaderToolsNavbar";
import DownloaderToolsFooter from "@/components/footers/DownloaderToolsFooter";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title: "Universal Video Downloader - TikTok, Facebook, Instagram | 30tools",
  description: "Download videos from TikTok, Facebook, Instagram, Twitter/X, and more for free. All-in-one online video downloader with no watermarks.",
  alternates: {
    canonical: "https://30tools.com/downloaders",
  },
  openGraph: {
    title: "Universal All-in-One Video Downloader",
    description: "Download videos from multiple platforms including TikTok, Instagram, and Facebook easily and for free.",
    url: "https://30tools.com/downloaders",
    siteName: "30tools",
    type: "website",
  },
};

export default function DownloadersPage() {
  return (
    <div className="min-h-screen flex-col">
      <DownloaderToolsNavbar />

      <main className="flex-grow bg-gray-50 dark:bg-gray-900/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Universal Video Downloader
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Download videos from TikTok, Facebook, Instagram, Twitter/X,
              Vimeo, Dailymotion, Reddit, Rumble and more easily!
            </p>
          </div>

          <div className="flex justify-center">
            <UniversalVideoDownloader />
          </div>
        </div>
      </main>

      <DownloaderToolsFooter />
    </div>
  );
}
