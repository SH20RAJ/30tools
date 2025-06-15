'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';

export default function PDFToolsNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pdfTools = [
    { name: 'PDF Merger', href: '/pdf-merger' },
    { name: 'PDF Splitter', href: '/pdf-splitter' },
    { name: 'PDF Compressor', href: '/pdf-compressor' },
    { name: 'JPG to PDF', href: '/jpg-to-pdf' },
    { name: 'PNG to PDF', href: '/png-to-pdf' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:animate-bounce-cute">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              30tools
            </span>
            <span className="text-sm text-muted-foreground font-medium">PDF</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {pdfTools.map((tool) => (
                <Link
                  key={tool.name}
                  href={tool.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors hover:underline decoration-2 underline-offset-4 decoration-primary"
                >
                  {tool.name}
                </Link>
              ))}
            </div>
            
            <Link href="/search">
              <Button variant="outline" size="sm" className="btn-cute">
                All Tools
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {pdfTools.map((tool) => (
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
