"use client";

import React from "react";
import Link from "next/link";
import { SearchIcon, ImageIcon, FileTextIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function GoogleHero({ toolCount, quickSearchTags = [] }) {
  return (
    <section className="relative pt-24 pb-20">
      <div className="container mx-auto px-4 text-center">
        {/* Animated Big Logo */}
        <div className="mb-8 animate-in fade-in duration-1000">
          <h1 className="text-5xl md:text-8xl font-medium tracking-tight mb-4 select-none">
            <span className="text-[#4285F4]">3</span>
            <span className="text-[#EA4335]">0</span>
            <span className="text-[#FBBC05]">t</span>
            <span className="text-[#4285F4]">o</span>
            <span className="text-[#34A853]">o</span>
            <span className="text-[#EA4335]">l</span>
            <span className="text-[#FBBC05]">s</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-normal">
            Every tool you need, right in your browser. <br className="hidden sm:block" />
            Simple. Secure. Searchable.
          </p>
        </div>

        {/* Centered Pill Search (Google Style) */}
        <div className="max-w-xl mx-auto mb-10 relative animate-in zoom-in-95 duration-700">
          <Link href="/search" className="block outline-none">
            <div className="flex items-center h-14 px-6 bg-background rounded-full border border-border shadow-sm hover:shadow-md transition-shadow cursor-text group focus-within:ring-4 focus-within:ring-primary/5">
              <SearchIcon
                className="h-5 w-5 text-muted-foreground mr-4 group-hover:text-primary transition-colors"
                aria-hidden="true"
              />
              <span className="text-muted-foreground text-lg text-left flex-1 font-normal opacity-70">
                Search {toolCount}+ tools...
              </span>
              <div className="flex items-center gap-3">
                <ImageIcon className="h-5 w-5 text-muted-foreground/40 hover:text-primary transition-colors cursor-pointer" title="Search by Image" />
                <FileTextIcon className="h-5 w-5 text-muted-foreground/40 hover:text-primary transition-colors cursor-pointer" title="Search by Document" />
              </div>
            </div>
          </Link>
        </div>

        {/* Quick Action Buttons (Google Style) */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <Link href="/search">
            <Button variant="secondary" className="rounded-md px-6 bg-[#f8f9fa] hover:bg-[#f1f3f4] border border-transparent hover:border-[#dadce0] text-[#3c4043] dark:bg-muted/20 dark:text-foreground font-normal transition-all shadow-none h-10">
              30tools Search
            </Button>
          </Link>
          <Link href="/search?lucky=true">
            <Button variant="secondary" className="rounded-md px-6 bg-[#f8f9fa] hover:bg-[#f1f3f4] border border-transparent hover:border-[#dadce0] text-[#3c4043] dark:bg-muted/20 dark:text-foreground font-normal transition-all shadow-none h-10">
              I'm Feeling Lucky
            </Button>
          </Link>
        </div>

        {/* Simple Try Badges */}
        <div className="flex flex-wrap justify-center gap-2 mt-12 opacity-80">
          <span className="text-sm text-muted-foreground mr-2 py-1">Try:</span>
          {quickSearchTags.slice(0, 5).map((tag) => (
            <Link key={tag} href={`/search?q=${encodeURIComponent(tag)}`}>
              <Badge
                variant="outline"
                className="px-4 py-1.5 rounded-full text-sm font-normal border-border bg-background hover:bg-secondary hover:text-primary transition-all cursor-pointer shadow-none"
              >
                {tag}
              </Badge>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
