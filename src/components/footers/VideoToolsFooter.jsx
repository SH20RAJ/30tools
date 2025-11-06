import Link from 'next/link';
import { Heart, Play } from 'lucide-react';

export default function VideoToolsFooter() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2 group mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">30tools</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Free, cute, and powerful video tools for everyone. Process your videos with love! 🎬
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-foreground mb-4">Video Tools</h3>
            <ul className="space-y-2">
              <li><Link href="/video-compressor" className="text-sm text-muted-foreground hover:text-primary transition-colors">Video Compressor</Link></li>
              <li><Link href="/video-to-gif" className="text-sm text-muted-foreground hover:text-primary transition-colors">Video to GIF</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 30tools. Made with <Heart className="w-4 h-4 inline text-destructive animate-pulse" /> for everyone.
          </p>
        </div>
      </div>
    </footer>
  );
}
