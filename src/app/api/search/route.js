import { NextResponse } from 'next/server';
import toolsDirectory from '@/constants/tools-directory.json';

const getAllTools = () => {
  const tools = [];
  Object.values(toolsDirectory.categories).forEach(category => {
    if (category.tools) {
      tools.push(...category.tools.map(tool => ({
        ...tool,
        categoryName: category.name
      })));
    }
  });
  return tools;
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.toLowerCase() || '';
  const category = searchParams.get('category') || '';
  
  let allTools = getAllTools();
  
  // Filter by category if specified
  if (category && category !== 'all') {
    allTools = allTools.filter(tool => tool.category === category);
  }
  
  // If no query, return all tools
  if (!query) {
    return NextResponse.json({
      query: '',
      results: allTools,
      total: allTools.length,
      categories: Object.keys(toolsDirectory.categories)
    });
  }
  
  // Search logic with scoring
  const searchResults = allTools
    .map(tool => {
      let score = 0;
      const nameMatch = tool.name.toLowerCase().includes(query);
      const descMatch = tool.description.toLowerCase().includes(query);
      const keywordMatch = tool.keywords?.some(keyword => 
        keyword.toLowerCase().includes(query)
      );
      const urlMatch = tool.url.toLowerCase().includes(query);
      
      // Scoring system
      if (tool.name.toLowerCase() === query) score += 100;
      else if (tool.name.toLowerCase().startsWith(query)) score += 50;
      else if (nameMatch) score += 25;
      
      if (descMatch) score += 15;
      if (keywordMatch) score += 20;
      if (urlMatch) score += 10;
      if (tool.popular) score += 5;
      
      return { ...tool, score };
    })
    .filter(tool => tool.score > 0)
    .sort((a, b) => b.score - a.score);
  
  return NextResponse.json({
    query,
    results: searchResults,
    total: searchResults.length,
    categories: Object.keys(toolsDirectory.categories)
  });
}
