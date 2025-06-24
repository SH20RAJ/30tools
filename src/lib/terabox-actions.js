'use server';

// Server action to fetch OG metadata from Terabox URL
export async function fetchTeraboxOGData(url) {
  try {
    if (!url || !url.includes('teraboxapp.com')) {
      return { error: 'Invalid Terabox URL' };
    }

    // Fetch the HTML page to extract OG meta tags
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch page');
    }

    const html = await response.text();
    
    // Extract OG meta tags using regex
    const titleMatch = html.match(/<meta[^>]*property="og:title"[^>]*content="([^"]*)"[^>]*>/i);
    const descriptionMatch = html.match(/<meta[^>]*property="og:description"[^>]*content="([^"]*)"[^>]*>/i);
    const imageMatch = html.match(/<meta[^>]*property="og:image"[^>]*content="([^"]*)"[^>]*>/i);
    const typeMatch = html.match(/<meta[^>]*property="og:type"[^>]*content="([^"]*)"[^>]*>/i);
    
    // Also try to extract from title tag if OG title not found
    const pageTitleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
    
    return {
      title: titleMatch?.[1] || pageTitleMatch?.[1] || 'Terabox Video',
      description: descriptionMatch?.[1] || 'Video from Terabox',
      image: imageMatch?.[1] || null,
      type: typeMatch?.[1] || 'video',
      url: url
    };
  } catch (error) {
    console.error('Error fetching OG data:', error);
    return {
      title: 'Terabox Video',
      description: 'Video from Terabox',
      image: null,
      type: 'video',
      url: url
    };
  }
}

// Server action to fetch full video data from Terabox API
export async function fetchTeraboxVideoData(url) {
  try {
    if (!url || !url.includes('teraboxapp.com')) {
      return { error: 'Invalid Terabox URL' };
    }

    const apiUrl = `https://terabox-latest.shraj.workers.dev/?url=${encodeURIComponent(url)}`;
    const response = await fetch(apiUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch video data from API');
    }
    
    const data = await response.json();
    
    if (!data || !data.download_links) {
      throw new Error('Invalid video data received');
    }

    return {
      success: true,
      data: data
    };
  } catch (error) {
    console.error('Error fetching video data:', error);
    return {
      error: error.message || 'Unable to fetch video from Terabox. Please check the URL and try again.'
    };
  }
}
