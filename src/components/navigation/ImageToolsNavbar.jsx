import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageIcon, HomeIcon, MenuIcon } from "lucide-react";


export default function ImageToolsNavbar() {
  const imageTools = [
    { name: "Image Compressor", href: "/image-compressor", popular: true },
    {
      name: "Free Image Compressor",
      href: "/free-image-compressor",
      popular: true,
    },
    { name: "Image Optimizer", href: "/image-optimizer" },
    { name: "Compress Images Online", href: "/compress-images-online" },
  ];

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <ImageIcon className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">30tools</span>
            <Badge variant="secondary">Free</Badge>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <HomeIcon className="h-4 w-4" />
              <span>Home</span>
            </Link>

            <div className="flex items-center space-x-4">
              {imageTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors relative"
                >
                  {tool.name}
                  {tool.popular && (
                    <Badge variant="secondary" className="ml-1 text-xs">
                      Popular
                    </Badge>
                  )}
                </Link>
              ))}
            </div>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">

            <Button variant="ghost" size="sm">
              <MenuIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
