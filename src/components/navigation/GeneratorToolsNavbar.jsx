"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";


export default function GeneratorToolsNavbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border dark:bg-gray-900/95 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-background:scale-110 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold bg-primary bg-clip-text text-transparent">
              30tools
            </span>
            <span className="text-sm text-muted-foreground dark:text-muted-foreground font-medium">
              Generators
            </span>
          </Link>
          <div className="flex items-center space-x-2">
            <Link href="/search">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-gray-100"
              >
                Other Tools
              </Button>
            </Link>
            <Link href="/search">
              <Button
                variant="outline"
                size="sm"
                className="border-border text-foreground hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                All Tools
              </Button>
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}
