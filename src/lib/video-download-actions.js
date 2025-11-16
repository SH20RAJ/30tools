'use server';

export async function fetchVideoData(url) {
  try {
    if (!url || typeof url !== 'string' || url.trim().length === 0) {
      throw new Error('Video URL is required');
    }

    // Make request to savevideo.me API
    const response = await fetch('https://savevideo.me/en/get/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': 'application/json, text/html, */*; q=0.01',
        'X-Requested-With': 'XMLHttpRequest',
        'origin': 'https://savevideo.me',
        'referer': 'https://savevideo.me/en/',
        'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
      },
      body: `url=${encodeURIComponent(url.trim())}`
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    // Detect platform from URL
    const detectPlatform = (videoUrl) => {
      if (videoUrl.includes('tiktok.com')) return 'TikTok';
      if (videoUrl.includes('facebook.com') || videoUrl.includes('fb.watch')) return 'Facebook';
      if (videoUrl.includes('instagram.com')) return 'Instagram';
      if (videoUrl.includes('twitter.com') || videoUrl.includes('x.com')) return 'Twitter/X';
      if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) return 'YouTube';
      if (videoUrl.includes('vimeo.com')) return 'Vimeo';
      if (videoUrl.includes('dailymotion.com')) return 'Dailymotion';
      if (videoUrl.includes('pinterest.com')) return 'Pinterest';
      if (videoUrl.includes('reddit.com')) return 'Reddit';
      if (videoUrl.includes('snapchat.com')) return 'Snapchat';
      if (videoUrl.includes('rumble.com')) return 'Rumble';
      return 'Unknown';
    };

    const platform = detectPlatform(url);

    // Process the response from savevideo.me API
    let processedData = {
      title: data.title || `${platform} Video`,
      thumbnail: data.thumbnail || '/placeholder-video-thumbnail.jpg',
      duration: data.duration || '0:30',
      author: data.author || (platform === 'TikTok' ? '@tiktoker' : platform === 'Twitter/X' ? '@username' : ''),
      music: data.music || (platform === 'TikTok' ? 'Trending Sound' : ''),
      qualities: []
    };

    // Process available formats from API response
    if (data.formats && Array.isArray(data.formats)) {
      processedData.qualities = data.formats.map((format, index) => ({
        quality: format.quality || format.resolution || `Quality ${index + 1}`,
        size: format.size || 'Unknown',
        url: format.url || format.download_url || '#',
        type: format.type || 'video',
        id: format.id || index
      }));
    } else if (data.url) {
      // Fallback if formats array doesn't exist
      processedData.qualities = [
        {
          quality: 'HD No Watermark',
          size: 'Unknown',
          url: data.url,
          type: 'video',
          id: 'default'
        }
      ];
    }

    // Add default qualities if none found
    if (processedData.qualities.length === 0) {
      processedData.qualities = [
        {
          quality: 'HD No Watermark',
          size: '8.2 MB',
          url: '#',
          type: 'video',
          id: 'hd'
        },
        {
          quality: 'SD No Watermark',
          size: '4.8 MB',
          url: '#',
          type: 'video',
          id: 'sd'
        },
        {
          quality: 'Audio Only (MP3)',
          size: '1.2 MB',
          url: '#',
          type: 'audio',
          id: 'audio'
        }
      ];
    }

    return {
      ...processedData,
      platform: platform
    };

  } catch (error) {
    console.error('Video download API error:', error);
    throw new Error(`Failed to process the video. ${error.message}`);
  }
}