'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Headphones } from 'lucide-react';

export default function AudioToolsNavbar() {
  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:animate-bounce-cute">
              <Headphones className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">30tools</span>
            <span className="text-sm text-muted-foreground font-medium">Audio</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Link href="/search?">
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
  );
}
