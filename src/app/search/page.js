import { getAllTools } from '@/constants/tools-utils';
import SearchPageServer from './SearchPageServer';

export const metadata = {
  title: "Search Tools - Find the Perfect Online Tool | 30tools",
  description: "Search through our collection of 50+ free online tools. Find image compressors, video converters, PDF tools, text tools, and more. Fast, free, and easy to use.",
  keywords: "search tools, online tools, image compressor, video converter, pdf tools, text tools, search free tools, file converter, online utilities",
  openGraph: {
    title: "Search Tools - Find the Perfect Online Tool | 30tools",
    description: "Search through our collection of 50+ free online tools. Find image compressors, video converters, PDF tools, text tools, and more.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Search Tools - Find the Perfect Online Tool | 30tools",
    description: "Search through our collection of 50+ free online tools. Find image compressors, video converters, PDF tools, text tools, and more.",
  },

  alternates: {
    canonical: "https://30tools.com/search"
  },
};

export default async function SearchPage({ searchParams }) {
  // Await searchParams to fix Next.js 15 async APIs
  const params = await searchParams;
  
  // Get all tools server-side
  const allTools = getAllTools();
  
  // Get search parameters
  const query = params?.q || '';
  const category = params?.category || 'all';
  const premium = params?.premium === 'true';
  
  // Server-side filtering for initial results
  let filteredTools = allTools;
  
  if (query) {
    const searchTerm = query.toLowerCase();
    filteredTools = allTools.filter(tool => 
      tool.name.toLowerCase().includes(searchTerm) ||
      tool.description.toLowerCase().includes(searchTerm) ||
      tool.category.toLowerCase().includes(searchTerm)
    );
  },
  
  if (category && category !== 'all') {
    filteredTools = filteredTools.filter(tool => tool.category === category);
  },

  if (premium) {
    filteredTools = filteredTools.filter(tool => tool.premium === true);
  },
  
  return (
        <>
            
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <SearchPageServer 
      initialTools={filteredTools}
      initialQuery={query}
      initialCategory={category}
      initialPremium={premium}
      allTools={allTools}
    />
  );
}
