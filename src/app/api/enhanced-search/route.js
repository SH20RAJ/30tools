// Enhanced search API with advanced SEO integration
import toolsData from '@/constants/tools.json';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.toLowerCase() || '';
  const category = searchParams.get('category') || 'all';
  const limit = parseInt(searchParams.get('limit') || '20');

  try {
    let allTools = [];

    // Flatten all tools from tools directory
    Object.entries(toolsData.categories).forEach(([catKey, catData]) => {
      if (catData.tools) {
        catData.tools.forEach(tool => {
          allTools.push({
            ...tool,
            categoryKey: catKey,
            categoryName: catData.name,
            categorySlug: catData.slug
          });
        });
      }
    });

    // Advanced search scoring algorithm
    const searchResults = allTools
      .map(tool => {
        let score = 0;
        let matchedKeywords = [];

        if (!query) {
          score = tool.popular ? 100 : tool.trending ? 80 : 50;
        } else {
          // Primary keyword matching (highest weight)
          if (tool.primaryKeyword?.includes(query)) {
            score += 100;
            matchedKeywords.push(tool.primaryKeyword);
          }

          // Name matching (high weight)
          if (tool.name.toLowerCase().includes(query)) {
            score += 90;
            matchedKeywords.push('name');
          }

          // Description matching (medium weight)
          if (tool.description.toLowerCase().includes(query)) {
            score += 70;
            matchedKeywords.push('description');
          }

          // Keywords matching (medium weight)
          tool.keywords?.forEach(keyword => {
            if (keyword.toLowerCase().includes(query)) {
              score += 60;
              matchedKeywords.push(keyword);
            }
          });

          // Long-tail keywords matching (high weight for exact matches)
          tool.longTailKeywords?.forEach(longTail => {
            if (longTail.toLowerCase().includes(query)) {
              score += 80;
              matchedKeywords.push(longTail);
            }
            if (longTail.toLowerCase() === query) {
              score += 120;
              matchedKeywords.push(`exact: ${longTail}`);
            }
          });

          // Boost for popular and trending tools
          if (tool.popular) score *= 1.2;
          if (tool.trending) score *= 1.1;
          if (tool.completed) score *= 1.3;

          // Boost for high search volume keywords
          if (tool.monthlySearches > 100000) score *= 1.15;
          if (tool.monthlySearches > 50000) score *= 1.1;
        }

        return {
          ...tool,
          searchScore: score,
          matchedKeywords: [...new Set(matchedKeywords)],
          searchQuery: query
        };
      })
      .filter(tool => {
        if (category !== 'all' && tool.categoryKey !== category) {
          return false;
        }
        if (query && tool.searchScore === 0) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (b.searchScore !== a.searchScore) {
          return b.searchScore - a.searchScore;
        }
        if (b.monthlySearches !== a.monthlySearches) {
          return (b.monthlySearches || 0) - (a.monthlySearches || 0);
        }
        if (b.completed !== a.completed) {
          return b.completed ? 1 : -1;
        }
        return 0;
      })
      .slice(0, limit);

    return Response.json({
      results: searchResults,
      query,
      category,
      total: searchResults.length,
      seoData: {
        title: generateSearchSEOTitle(query, category, searchResults.length),
        description: generateSearchSEODescription(query, category, searchResults.length)
      }
    });

  } catch (error) {
    console.error('Search API error:', error);
    return Response.json(
      { error: 'Search failed', results: [], total: 0 },
      { status: 500 }
    );
  }
}

function generateSearchSEOTitle(query, category, resultCount) {
  if (!query) {
    return category === 'all'
      ? "Free Online Tools - 30tools Toolkit"
      : `Free ${category.charAt(0).toUpperCase() + category.slice(1)} Tools Online | 30tools`;
  }
  return `${query.charAt(0).toUpperCase() + query.slice(1)} Tools (${resultCount} found) | 30tools`;
}

function generateSearchSEODescription(query, category, resultCount) {
  if (!query) {
    return category === 'all'
      ? "Discover 100+ free online tools for images, PDFs, videos, audio, and text processing."
      : `Professional ${category} tools for free. Compress, convert, edit, and optimize files online.`;
  }
  return `Found ${resultCount} professional ${query} tools. Free online ${query} with no watermarks required.`;
}
