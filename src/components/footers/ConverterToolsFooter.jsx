import Link from "next/link";
import { Heart, RefreshCw } from "lucide-react";

export default function ConverterToolsFooter() {
  return (
    <footer className="bg-white border-t border-border dark:bg-gray-900 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link
            href="/"
            className="flex items-center space-x-2 group mb-4 md:mb-0"
          >
            <div className="w-8 h-8 bg-background">
              <RefreshCw className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold bg-background">30tools</span>
          </Link>
          <p className="text-sm text-muted-foreground dark:text-muted-foreground">
            © 2025 30tools. Made with{" "}
            <Heart className="w-4 h-4 inline text-destructive animate-pulse" />{" "}
            for everyone. Powered by{" "}
            <a
              href="https://sopkit.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              SopKit
            </a>{" "}
            and{" "}
            <a
              href="https://strivio.world"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Strivio
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
