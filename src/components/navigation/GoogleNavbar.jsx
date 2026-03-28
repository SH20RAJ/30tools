"use client";

import React from "react";
import Link from "next/link";
import { GoogleLogo } from "@/components/shared/GoogleLogo";
import { ThemeToggle } from "@/components/shared/theme-provider";
import { 
  SearchIcon, 
  LayoutGridIcon, 
  SettingsIcon,
  HelpCircleIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function GoogleNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <GoogleLogo />
        </div>

        {/* Minimal Search Bar (Google Style) */}
        <div className="hidden md:flex flex-1 max-w-2xl px-4 py-2 bg-secondary/50 hover:bg-secondary/80 border border-transparent hover:border-border rounded-full items-center transition-all cursor-text group">
          <SearchIcon className="h-4 w-4 text-muted-foreground mr-3 group-hover:text-primary" />
          <span className="text-muted-foreground text-sm flex-1">Search tools...</span>
          <div className="flex items-center gap-1.5 px-1.5 py-0.5 border border-border/50 rounded text-[10px] font-bold text-muted-foreground/60">
            <span>⌘</span>
            <span>K</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          <Link href="/search">
            <Button variant="ghost" size="icon" className="rounded-full md:hidden">
              <SearchIcon className="h-5 w-5" />
            </Button>
          </Link>
          
          <Button variant="ghost" size="icon" className="rounded-full hidden sm:inline-flex">
            <HelpCircleIcon className="h-5 w-5 text-muted-foreground" />
          </Button>
          
          <Button variant="ghost" size="icon" className="rounded-full">
            <LayoutGridIcon className="h-5 w-5 text-muted-foreground" />
          </Button>

          <div className="h-6 w-px bg-border mx-1 hidden sm:block" />
          
          <ThemeToggle />
          
          <div className="ml-2 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs border border-primary/20">
            30
          </div>
        </div>
      </div>
    </header>
  );
}
