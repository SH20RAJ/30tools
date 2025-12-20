"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  TrendingUp,
  BarChart,
  Link as LinkIcon,
  FileSearch,
  Target,
  Zap,
  Globe,
  CheckCircle2,
} from "lucide-react";


export default function SEOToolsNavbar() {
  const seoTools = [
    {
      name: "Keyword Rank Checker",
      href: "/bulk-keyword-rank-checker",
      icon: TrendingUp,
      popular: true,
    },
    {
      name: "Google Index Checker",
      href: "/bulk-google-index-checker",
      icon: Globe,
      popular: true,
    },
    {
      name: "Title Rewrite Checker",
      href: "/title-rewrite-checker",
      icon: FileSearch,
      popular: true,
    },
    {
      name: "Sitemap Extractor",
      href: "/xml-sitemap-extractor",
      icon: Target,
      popular: true,
    },
    {
      name: "Broken Link Checker",
      href: "/broken-link-checker",
      icon: LinkIcon,
      popular: false,
    },
    {
      name: "Meta Tags Generator",
      href: "/meta-tags-generator",
      icon: CheckCircle2,
      popular: false,
    },
    {
      name: "QR Code Generator",
      href: "/qr-code-generator",
      icon: Zap,
      popular: true,
    },
    {
      name: "Sitemap Generator",
      href: "/sitemap-generator",
      icon: BarChart,
      popular: false,
    },
  ];

  return (
    <div className="space-y-4">
      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-background:animate-bounce-cute">
                <Search className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold bg-background">
                30tools
              </span>
              <span className="text-sm text-muted-foreground font-medium">
                SEO Tools
              </span>
            </Link>
            <div className="flex items-center space-x-2">
              <Link href="/other-tools">
                <Button variant="ghost" size="sm" className="btn-cute">
                  Other Tools
                </Button>
              </Link>
              <Link href="/search">
                <Button variant="outline" size="sm" className="btn-cute">
                  All Tools
                </Button>
              </Link>

            </div>
          </div>
        </div>
      </nav>

      {/* SEO Tools Quick Access */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-background">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            Professional SEO Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {seoTools.map((tool) => (
              <Link key={tool.href} href={tool.href}>
                <Button
                  variant="ghost"
                  className="w-full justify-start h-auto p-3 hover:bg-white/50 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <tool.icon className="h-4 w-4 text-primary" />
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-medium">{tool.name}</span>
                      {tool.popular && (
                        <Badge variant="secondary" className="text-xs mt-1">
                          Popular
                        </Badge>
                      )}
                    </div>
                  </div>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
