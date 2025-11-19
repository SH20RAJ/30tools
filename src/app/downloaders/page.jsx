"use client";

import DownloaderToolsNavbar from "@/components/navigation/DownloaderToolsNavbar";
import DownloaderToolsFooter from "@/components/footers/DownloaderToolsFooter";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";
import { useEffect } from "react";

export default function DownloadersPage() {
  useEffect(() => {
    // Any client-side initialization can go here
  }, []);

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
