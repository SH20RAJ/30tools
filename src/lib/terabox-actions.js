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
export async function fetchTeraboxVideoData(url, cookies = 'ndus=Ye4ozFx5eHui9m4JWsYNeYKpotzW5RsuPMbrkNYS') {
  try {
    if (!url || !url.includes('teraboxapp.com')) {
      return { error: 'Invalid Terabox URL' };
    }

    console.log('🔍 Fetching Terabox video data for:', url);

    // Use the new TeraSnap API
    const apiUrl = 'https://terasnap.netlify.app/api/download';
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        link: url,
        cookies: cookies
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ API Error:', response.status, errorText);
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    console.log('✅ Received data from API:', data);

    if (!data || !data.file_name) {
      throw new Error('Invalid video data received');
    }

    // Transform the response to match the expected format
    // proxy_url is the video src for playback
    const transformedData = {
      name: data.file_name || 'Terabox Video',
      type: 'video',
      size: data.size_bytes || 0,
      size_formatted: data.file_size || 'Unknown',
      image: data.thumbnail || null,
      download_links: {
        url_1: data.download_link, // Original download link
        url_2: data.proxy_url, // Proxied download link (more reliable)
        stream: data.proxy_url // Stream URL for playing (use proxy_url for video src)
      },
      stream_url: data.proxy_url, // Use proxy_url as the video source
      thumbnail: data.thumbnail,
      file_size: data.file_size || 'Unknown',
      // Additional metadata from the new API
      download_link: data.download_link,
      proxy_url: data.proxy_url, // This is the key field for video playback
      size_bytes: data.size_bytes
    };

    console.log('✅ Transformed data:', transformedData);

    return {
      success: true,
      data: transformedData
    };
  } catch (error) {
    console.error('❌ Error fetching video data:', error);
    return {
      error: error.message || 'Unable to fetch video from Terabox. Please check the URL and try again.'
    };
  }
}
