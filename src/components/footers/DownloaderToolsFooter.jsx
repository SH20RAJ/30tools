import Link from "next/link";
import { Heart, Download } from "lucide-react";
import FooterPartners from "@/components/shared/FooterPartners";


export default function DownloaderToolsFooter() {
  return (
    <footer className="bg-white border-t border-border dark:bg-gray-900 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link
            href="/"
            className="flex items-center space-x-2 group mb-4 md:mb-0"
          >
            <div className="w-8 h-8 bg-background">
              <Download className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold bg-primary bg-clip-text text-transparent">
              30tools
            </span>
          </Link>
          <div className="text-sm text-muted-foreground dark:text-muted-foreground text-center md:text-right">
            <p className="mb-2">© 2025 30tools. Made with{" "}
              <Heart className="w-4 h-4 inline text-destructive animate-pulse" />{" "}
              for everyone.</p>
            <FooterPartners />
          </div>

        </div>
      </div>
    </footer>
  );
}
