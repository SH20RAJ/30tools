import React from 'react';
import Link from 'next/link';
import toolsData from '@/constants/tools.json';
import { ArrowRight, Star } from 'lucide-react';

interface RelatedToolsProps {
  currentToolId: string;
  categorySlug?: string;
  limit?: number;
}

export default function RelatedTools({ 
  currentToolId, 
  categorySlug, 
  limit = 4 
}: RelatedToolsProps) {
  
  // Flatten tools for searching
  const allTools = Object.values(toolsData.categories).flatMap(cat => cat.tools);
  
  // Filter logic:
  // 1. Exclude current tool
  // 2. Same category first
  // 3. Fallback to popular tools
  
  let related = allTools.filter(t => t.id !== currentToolId);
  
  if (categorySlug) {
      // Sort by same category
      related.sort((a, b) => {
          const aInCat = a.category === categorySlug ? 1 : 0;
          const bInCat = b.category === categorySlug ? 1 : 0;
          return bInCat - aInCat;
      });
  } else {
      // Sort by popularity if no category provided
      related.sort((a, b) => (b.popular === true ? 1 : 0) - (a.popular === true ? 1 : 0));
  }

  // Slice
  const displayTools = related.slice(0, limit);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {displayTools.map((tool) => (
        <Link 
          key={tool.id} 
          href={tool.route}
          className="group relative flex flex-col p-5 bg-card border border-border/50 rounded-2xl hover:border-primary/50 hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-start justify-between mb-3">
             <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                {/* Fallback Icon if specific icon handling isn't implemented elsewhere yet */}
                <Star className="w-5 h-5" />
             </div>
             {tool.popular && (
                 <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-500/10 text-orange-600 px-2 py-0.5 rounded-full">
                     Hot
                 </span>
             )}
          </div>
          
          <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors line-clamp-1">
              {tool.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">
              {tool.description}
          </p>
          
          <div className="flex items-center text-xs font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
              Try Tool <ArrowRight className="w-3 h-3 ml-1" />
          </div>
        </Link>
      ))}
    </div>
  );
}
