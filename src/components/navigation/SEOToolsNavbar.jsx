"use client";

import {
  TrendingUp,
  BarChart,
  Link as LinkIcon,
  FileSearch,
  Target,
  Zap,
  Globe,
  CheckCircle2,
} from "lucide-react";
import ToolCategoryNavbar from "./ToolCategoryNavbar";

export default function SEOToolsNavbar() {
  const tools = [
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

  return <ToolCategoryNavbar title="SEO Tools" tools={tools} />;
}
