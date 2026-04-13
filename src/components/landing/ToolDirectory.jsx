"use client";

import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Zap, 
  Code, 
  Download, 
  LayoutGrid, 
  Image, 
  Music, 
  FileText, 
  Shield, 
  Star, 
  Search, 
  Settings, 
  Video 
} from "lucide-react";

const ICON_MAP = {
  ImageIcon: Image,
  LayoutGridIcon: LayoutGrid,
  SearchIcon: Search,
  StarIcon: Star,
  UsersIcon: Star,
  ShieldCheckIcon: Shield,
  ZapIcon: Zap,
  pdf: FileText,
  video: Video,
  image: Image,
  downloaders: Download,
  audio: Music,
  utilities: Settings,
  developer: Code,
  generators: Sparkles,
  seo: Search,
};

export function ToolDirectory({ categories = [], lang = "en" }) {
  return (
    <div className="py-12">
      {categories.map((category) => (
        <section key={category.key} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-center text-foreground mb-12 decoration-primary decoration-4 underline-offset-[12px] underline">
            {category.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.tools.map((tool) => {
              const Icon = ICON_MAP[tool.icon] || ICON_MAP[category.iconKey] || ICON_MAP[category.key] || LayoutGrid;
              return (
                <Link
                  key={tool.id}
                  href={tool.route}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-200 group no-underline"
                >
                  <div className="p-3 rounded-xl bg-secondary/50 text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {tool.name}
                  </h3>
                </Link>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
