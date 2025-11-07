import { NextResponse } from 'next/server';
import toolsData from '@/constants/tools.json';

// Extract all tools from the directory for search suggestions
const getAllTools = () => {
  const tools = [];
  Object.values(toolsData.categories).forEach(category => {
    if (category.tools) {
      tools.push(...category.tools);
    }
  });
  return tools;
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.toLowerCase() || '';

  if (!query) {
    return NextResponse.json([query, []]);
  }

  const allTools = getAllTools();

  // Find matching tools based on name, description, or keywords
  const suggestions = allTools
    .filter(tool => {
      const nameMatch = tool.name.toLowerCase().includes(query);
      const descMatch = tool.description.toLowerCase().includes(query);
      const keywordMatch = tool.keywords?.some(keyword =>
        keyword.toLowerCase().includes(query)
      );
      const categoryMatch = tool.category?.toLowerCase().includes(query);

      return nameMatch || descMatch || keywordMatch || categoryMatch;
    })
    .slice(0, 8) // Limit to 8 suggestions
    .map(tool => tool.name);

  // Add common search terms if query matches
  const commonTerms = [
    'image compressor', 'pdf merger', 'video converter', 'audio converter',
    'text tools', 'file converter', 'image optimizer', 'compress images',
    'pdf tools', 'online converter', 'free tools', 'file processor'
  ];

  const matchingTerms = commonTerms
    .filter(term => term.includes(query) && !suggestions.includes(term))
    .slice(0, 3);

  const finalSuggestions = [...suggestions, ...matchingTerms].slice(0, 8);

  return NextResponse.json([query, finalSuggestions]);
}
