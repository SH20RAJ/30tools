import React from 'react';
import Link from 'next/link';
import { Home, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import RelatedTools from './RelatedTools';

interface ToolLayoutProps {
  toolId: string; // ID from tools.json to fetch metadata
  title: string;
  description: string;
  children: React.ReactNode; // Content: Controls + Output
  controls?: React.ReactNode; // Controls specifically (for mobile sidebar/accordion)
  category?: {
    name: string;
    slug: string;
  };
}

export default function ToolLayout({
  toolId,
  title,
  description,
  children,
  controls,
  category,
}: ToolLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl animate-in fade-in duration-500">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <Home className="w-3 h-3" /> Home
            </Link>
          </li>
          <ChevronRight className="w-3 h-3" />
          {category && (
             <>
              <li>
                <Link href={`/tools/${category.slug}`} className="hover:text-primary transition-colors">
                  {category.name}
                </Link>
              </li>
              <ChevronRight className="w-3 h-3" />
             </>
          )}
          <li aria-current="page" className="font-medium text-foreground truncate max-w-[200px]">
            {title}
          </li>
        </ol>
      </nav>

      {/* Hero Section - Compact */}
      <header className="mb-8 md:mb-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4">
          {title}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      </header>

      {/* Main Layout: 2 Columns on Desktop, Stacked on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 relative items-start">
        
        {/* Left Column: Controls (Sticky on Desktop) */}
        {controls && (
           <aside className="md:col-span-4 lg:col-span-3 space-y-6">
             <div className="md:sticky md:top-24 space-y-6">
               <div className="bg-card border border-border/50 rounded-2xl p-5 shadow-sm">
                 <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    Controls
                 </h2>
                 {controls}
               </div>
               
               {/* Mobile-only visible helper text can go here or be part of controls */}
             </div>
           </aside>
        )}

        {/* Right Column: Output / Main Interface */}
        <main className={cn("space-y-12", controls ? "md:col-span-8 lg:col-span-9" : "col-span-12")}>
          <div className="min-h-[400px] bg-background/50 rounded-3xl border border-dashed border-border/60 p-1 md:p-2">
             {children}
          </div>

          {/* Related Tools Section */}
          <section className="border-t border-border/50 pt-12">
            <h2 className="text-2xl font-bold mb-6">Related Tools</h2>
            <RelatedTools currentToolId={toolId} categorySlug={category?.slug} />
          </section>
        </main>
      </div>
    </div>
  );
}
