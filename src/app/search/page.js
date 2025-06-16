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
  }
};

export default async function SearchPage({ searchParams }) {
  // Get all tools server-side
  const allTools = getAllTools();
  
  // Get search parameters
  const query = searchParams?.q || '';
  const category = searchParams?.category || 'all';
  
  // Server-side filtering for initial results
  let filteredTools = allTools;
  
  if (query) {
    const searchTerm = query.toLowerCase();
    filteredTools = allTools.filter(tool => 
      tool.name.toLowerCase().includes(searchTerm) ||
      tool.description.toLowerCase().includes(searchTerm) ||
      tool.category.toLowerCase().includes(searchTerm)
    );
  }
  
  if (category && category !== 'all') {
    filteredTools = filteredTools.filter(tool => tool.category === category);
  }
  
  return (
    <SearchPageServer 
      initialTools={filteredTools}
      initialQuery={query}
      initialCategory={category}
      allTools={allTools}
    />
  );
}
