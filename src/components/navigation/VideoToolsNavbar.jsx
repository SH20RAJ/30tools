'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Video } from 'lucide-react';
import AuthComponent from '@/components/auth/AuthComponent';

export default function VideoToolsNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const videoTools = [
    { name: 'Video Compressor', href: '/video-compressor' },
    { name: 'Video to GIF', href: '/video-to-gif' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:animate-bounce-cute">
              <Video className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              30tools
            </span>
            <span className="text-sm text-muted-foreground font-medium">Video</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {videoTools.map((tool) => (
                <Link
                  key={tool.name}
                  href={tool.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors hover:underline decoration-2 underline-offset-4 decoration-primary"
                >
                  {tool.name}
                </Link>
              ))}
            </div>
            
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
              <AuthComponent />
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <AuthComponent />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {videoTools.map((tool) => (
                <Link
                  key={tool.name}
                  href={tool.href}
                  className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent/20 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {tool.name}
                </Link>
              ))}
              <Link
                href="/search"
                className="block px-3 py-2 text-sm font-medium text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                All Tools
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
