'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Youtube, Menu, X } from 'lucide-react';
import { useState } from 'react';
import AuthComponent from '@/components/auth/AuthComponent';

export default function YouTubeToolsNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const youtubeTools = [
    { name: 'Thumbnail Downloader', href: '/youtube-thumbnail-downloader' },
    { name: 'Video Downloader', href: '/youtube-downloader' },
    { name: 'Shorts Downloader', href: '/youtube-shorts-downloader' },
    { name: 'Transcript Downloader', href: '/youtube-transcript-downloader' },
    { name: 'Timestamp Generator', href: '/youtube-timestamp-generator' },
    { name: 'Embed Generator', href: '/youtube-embed-generator' },
    { name: 'GIF Maker', href: '/youtube-gif-maker' },
    { name: 'AI Script Generator', href: '/youtube-script-generator' },
    { name: 'Comment Responder', href: '/youtube-comment-responder' },
    { name: 'Idea Generator', href: '/youtube-idea-generator' },
    { name: 'Pack Downloader', href: '/youtube-pack-downloader' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center group-hover:animate-bounce-cute">
              <Youtube className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              30tools
            </span>
            <span className="text-sm text-muted-foreground font-medium">YouTube</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {youtubeTools.map((tool) => (
                <Link
                  key={tool.name}
                  href={tool.href}
                  className="text-sm font-medium text-foreground/80 hover:text-red-500 transition-colors hover:underline decoration-2 underline-offset-4 decoration-red-500"
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
            </div>
          </div>

          <div className="md:hidden">
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
              {youtubeTools.map((tool) => (
                <Link
                  key={tool.name}
                  href={tool.href}
                  className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:text-red-500 hover:bg-accent/20 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {tool.name}
                </Link>
              ))}
              <Link
                href="/other-tools"
                className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:text-red-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Other Tools
              </Link>
              <Link
                href="/search"
                className="block px-3 py-2 text-sm font-medium text-red-500"
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
