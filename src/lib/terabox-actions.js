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

    const apiUrl = 'https://api.iteraplay.com/';
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'accept': '*/*',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'content-type': 'application/json',
        'origin': 'https://iteraplay.com',
        'referer': 'https://iteraplay.com/',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        'x-api-key': 'terabox_pro_api_2025_premium_new'
      },
      body: JSON.stringify({
        link: url
      })
    });

    if (!response.ok) {
      throw new Error('Failed to fetch video data from API');
    }

    const data = await response.json();

    if (!data || data.status !== 'success' || !data.list || data.list.length === 0) {
      throw new Error('Invalid video data received');
    }

    // Get the first file from the list
    const fileData = data.list[0];

    if (!fileData.stream_url) {
      throw new Error('No stream URL available');
    }

    // Transform the response to match the expected format
    const transformedData = {
      name: fileData.name || 'Terabox Video',
      type: fileData.type || 'video',
      size: fileData.size || 0,
      size_formatted: fileData.size_formatted || 'Unknown',
      image: fileData.thumbnail || null,
      download_links: {
        url_1: fileData.download_link || fileData.stream_url, // Direct download link
        url_2: fileData.fast_download_link || fileData.stream_url, // Fast download link
        stream: fileData.stream_url // Stream URL for playing
      },
      stream_url: fileData.stream_url, // Direct stream URL for video player
      thumbnail: fileData.thumbnail,
      file_size: fileData.size_formatted || 'Unknown',
      // Additional metadata from the new API
      fs_id: fileData.fs_id,
      folder: fileData.folder,
      total_files: data.total_files,
      shorturl: data.shorturl
    };

    return {
      success: true,
      data: transformedData
    };
  } catch (error) {
    console.error('Error fetching video data:', error);
    return {
      error: error.message || 'Unable to fetch video from Terabox. Please check the URL and try again.'
    };
  }
}
