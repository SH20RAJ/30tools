import Link from "next/link";
import { Heart, Github, Twitter } from "lucide-react";

export default function PDFToolsFooter() {
  const pdfTools = [
    { name: "PDF Merger", href: "/pdf-merger" },
    { name: "PDF Splitter", href: "/pdf-splitter" },
    { name: "PDF Compressor", href: "/pdf-compressor" },
    { name: "PDF Protect", href: "/pdf-protect" },
    { name: "PDF Unlocker", href: "/pdf-unlocker" },
  ];

  const otherCategories = [
    { name: "Image Tools", href: "/image-tools" },
    { name: "Video Tools", href: "/video-tools" },
    { name: "Audio Tools", href: "/audio-tools" },
    { name: "Text Tools", href: "/text-tools" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2 group mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                30tools
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Free PDF tools like IlovePDF. Merge PDF, split PDF, compress PDF,
              convert PDF to Word, Word to PDF. Professional PDF processing
              alternative to SmallPDF and SodaPDF. Process your PDFs with love!
              💖
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* PDF Tools */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-foreground mb-4">
              PDF Tools
            </h3>
            <ul className="space-y-2">
              {pdfTools.map((tool) => (
                <li key={tool.name}>
                  <Link
                    href={tool.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Categories */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Other Tools
            </h3>
            <ul className="space-y-2">
              {otherCategories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
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
            <p className="text-sm text-muted-foreground mt-2 md:mt-0">
              Free • Secure • No Registration Required
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
