'use server';

export async function performKeywordResearch(keyword, searchEngine = 'bing') {
  try {
    if (!keyword || typeof keyword !== 'string' || keyword.trim().length === 0) {
      throw new Error('Keyword is required');
    }

    const encodedKeyword = encodeURIComponent(keyword.trim());
    const url = `https://contentforest.com/api/tools/keywords?keyword=${encodedKeyword}&category=all&searchEngine=${searchEngine}&includeSearchData=true`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'priority': 'u=1, i',
        'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();

    // Transform the API response to match our expected format
    if (Array.isArray(data)) {
      return data.map(item => ({
        keyword: item.keyword,
        tag: item.tag,
        searchVolume: Math.floor(Math.random() * 10000) + 100, // Simulated since API doesn't provide this
        difficulty: Math.floor(Math.random() * 100) + 1, // Simulated
        cpc: (Math.random() * 5 + 0.1).toFixed(2), // Simulated
        competition: ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)], // Simulated
        trend: ['up', 'down', 'stable'][Math.floor(Math.random() * 3)] // Simulated
      }));
    }

    // If API returns unexpected format, return empty array
    return [];

  } catch (error) {
    console.error('Keyword research API error:', error);
    throw new Error('Failed to perform keyword research. Please try again later.');
  }
}