'use server';

// Server action to extract YouTube video ID from URL
export async function extractYouTubeVideoId(url) {
  try {
    if (!url) {
      return { error: 'Please provide a YouTube URL' };
    }

    // Remove any whitespace
    url = url.trim();

    // Regular expressions for different YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/watch\?.*v=([a-zA-Z0-9_-]{11})/,
      /youtu\.be\/([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/v\/([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return { success: true, videoId: match[1] };
      }
    }

    return { error: 'Invalid YouTube URL. Please check the URL and try again.' };
  } catch (error) {
    console.error('Error extracting video ID:', error);
    return { error: 'Failed to process the YouTube URL' };
  }
}

// Server action to get YouTube video metadata
export async function getYouTubeVideoMetadata(videoId) {
  try {
    if (!videoId) {
      return { error: 'Video ID is required' };
    }

    // We'll use the YouTube oEmbed API for basic metadata
    const oembedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;
    
    const response = await fetch(oembedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    if (!response.ok) {
      throw new Error('Video not found or unavailable');
    }

    const data = await response.json();
    
    return {
      success: true,
      title: data.title || 'YouTube Video',
      channelName: data.author_name || 'Unknown Channel',
      channelUrl: data.author_url || '',
      videoId: videoId
    };
  } catch (error) {
    console.error('Error fetching video metadata:', error);
    return { 
      error: 'Unable to fetch video information. The video might be private or unavailable.',
      videoId: videoId 
    };
  }
}

// Server action to generate thumbnail URLs
export async function generateThumbnailUrls(videoId) {
  try {
    if (!videoId) {
      return { error: 'Video ID is required' };
    }

    const thumbnails = [
      {
        name: 'Default (120x90)',
        url: `https://img.youtube.com/vi/${videoId}/default.jpg`,
        size: '120x90',
        quality: 'low'
      },
      {
        name: 'Medium Quality (320x180)',
        url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
        size: '320x180',
        quality: 'medium'
      },
      {
        name: 'High Quality (480x360)',
        url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        size: '480x360',
        quality: 'high'
      },
      {
        name: 'Standard Definition (640x480)',
        url: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
        size: '640x480',
        quality: 'sd'
      },
      {
        name: 'Max Resolution (1280x720)',
        url: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        size: '1280x720',
        quality: 'maxres'
      }
    ];

    return {
      success: true,
      thumbnails: thumbnails,
      videoId: videoId
    };
  } catch (error) {
    console.error('Error generating thumbnail URLs:', error);
    return { error: 'Failed to generate thumbnail URLs' };
  }
}

// Server action to validate thumbnail existence
export async function validateThumbnailExists(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return {
      exists: response.ok,
      url: url
    };
  } catch (error) {
    return {
      exists: false,
      url: url
    };
  }
}
