import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  ImageIcon,
  TwitterIcon,
  GithubIcon,
  HeartIcon
} from 'lucide-react';

export default function ImageToolsFooter() {
  const imageTools = [
    { name: "Image Compressor", href: "/image-compressor" },
    { name: "Free Image Compressor", href: "/free-image-compressor" },
    { name: "Image Optimizer", href: "/image-optimizer" },
    { name: "Compress Images Online", href: "/compress-images-online" },
  ];

  const relatedTools = [
    { name: "Video Tools", href: "/video-tools" },
    { name: "PDF Tools", href: "/pdf-tools" },
    { name: "Audio Tools", href: "/audio-tools" },
    { name: "Text Tools", href: "/text-tools" },
  ];

  const resources = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Help & FAQ", href: "/help" },
    { name: "API Documentation", href: "/api-docs" },
  ];

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <ImageIcon className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">30tools</span>
              <Badge variant="secondary">Free</Badge>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Free online image tools for compression, optimization, and conversion.
              No watermarks, no registration required.
            </p>
            <div className="flex space-x-2">
              <Link href="https://twitter.com/30tools" className="text-muted-foreground hover:text-foreground">
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link href="https://github.com/30tools" className="text-muted-foreground hover:text-foreground">
                <GithubIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Image Tools */}
          <div className="space-y-4">
            <h3 className="font-semibold">Image Tools</h3>
            <ul className="space-y-2 text-sm">
              {imageTools.map((tool) => (
                <li key={tool.href}>
                  <Link
                    href={tool.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Tools */}
          <div className="space-y-4">
            <h3 className="font-semibold">Other Tools</h3>
            <ul className="space-y-2 text-sm">
              {relatedTools.map((tool) => (
                <li key={tool.href}>
                  <Link
                    href={tool.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              {resources.map((resource) => (
                <li key={resource.href}>
                  <Link
                    href={resource.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 30tools.com - All rights reserved
          </p>
          <p className="flex items-center text-sm text-muted-foreground">
            Made with <HeartIcon className="h-4 w-4 mx-1 text-red-500 fill-current" /> for the web
          </p>
        </div>
      </div>
    </footer>
  );
}
