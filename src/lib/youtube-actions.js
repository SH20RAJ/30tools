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

// Server action for YouTube Video/Audio Downloader
export async function downloadYouTubeVideo(url) {
  try {
    const videoIdResult = await extractYouTubeVideoId(url);
    if (!videoIdResult.success) {
      return { success: false, error: videoIdResult.error };
    }

    const metadata = await getYouTubeVideoMetadata(videoIdResult.videoId);
    if (!metadata.success) {
      return { success: false, error: metadata.error };
    }

    // Generate thumbnail for preview
    const thumbnailUrls = await generateThumbnailUrls(videoIdResult.videoId);
    const thumbnail = thumbnailUrls.success ? thumbnailUrls.thumbnails[2].url : null;

    // Simulate video data (in a real implementation, you'd use a YouTube API or service)
    const videoData = {
      videoId: videoIdResult.videoId,
      title: metadata.title,
      channelName: metadata.channelName,
      thumbnail: thumbnail,
      duration: '00:00', // Would need actual API call
      quality: 'HD 1080p',
      fileSize: '~50MB',
      downloadUrl: `#download-${videoIdResult.videoId}`, // Placeholder
      audioUrl: `#audio-${videoIdResult.videoId}`, // Placeholder
      videoFormats: [
        {
          quality: '1080p',
          fileSize: '~50MB',
          downloadUrl: `#video-1080p-${videoIdResult.videoId}`
        },
        {
          quality: '720p',
          fileSize: '~25MB',
          downloadUrl: `#video-720p-${videoIdResult.videoId}`
        },
        {
          quality: '480p',
          fileSize: '~15MB',
          downloadUrl: `#video-480p-${videoIdResult.videoId}`
        }
      ],
      audioFormats: [
        {
          quality: '320kbps',
          fileSize: '~8MB',
          downloadUrl: `#audio-320-${videoIdResult.videoId}`
        },
        {
          quality: '128kbps',
          fileSize: '~3MB',
          downloadUrl: `#audio-128-${videoIdResult.videoId}`
        }
      ]
    };

    return {
      success: true,
      data: videoData
    };
  } catch (error) {
    console.error('Error processing YouTube video download:', error);
    return {
      success: false,
      error: 'Failed to process YouTube video for download'
    };
  }
}

// Server action for YouTube Shorts Downloader
export async function downloadYouTubeShorts(url) {
  try {
    const videoIdResult = await extractYouTubeVideoId(url);
    if (!videoIdResult.success) {
      return { success: false, error: videoIdResult.error };
    }

    const metadata = await getYouTubeVideoMetadata(videoIdResult.videoId);
    if (!metadata.success) {
      return { success: false, error: metadata.error };
    }

    // Generate thumbnail for preview
    const thumbnailUrls = await generateThumbnailUrls(videoIdResult.videoId);
    const thumbnail = thumbnailUrls.success ? thumbnailUrls.thumbnails[2].url : null;

    // Simulate shorts data
    const shortsData = {
      videoId: videoIdResult.videoId,
      title: metadata.title,
      channelName: metadata.channelName,
      thumbnail: thumbnail,
      duration: '<60s',
      quality: 'HD Vertical',
      fileSize: '~8MB',
      description: 'YouTube Shorts video content...',
      downloadUrl: `#shorts-${videoIdResult.videoId}`,
      audioUrl: `#shorts-audio-${videoIdResult.videoId}`
    };

    return {
      success: true,
      data: shortsData
    };
  } catch (error) {
    console.error('Error processing YouTube Shorts download:', error);
    return {
      success: false,
      error: 'Failed to process YouTube Shorts for download'
    };
  }
}

// Server action for YouTube Transcript Downloader
export async function downloadYouTubeTranscript(url, language = 'en') {
  try {
    const videoIdResult = await extractYouTubeVideoId(url);
    if (!videoIdResult.success) {
      return { success: false, error: videoIdResult.error };
    }

    const metadata = await getYouTubeVideoMetadata(videoIdResult.videoId);
    if (!metadata.success) {
      return { success: false, error: metadata.error };
    }

    // Generate thumbnail for preview
    const thumbnailUrls = await generateThumbnailUrls(videoIdResult.videoId);
    const thumbnail = thumbnailUrls.success ? thumbnailUrls.thumbnails[2].url : null;

    // Simulate transcript data (in real implementation, you'd extract actual captions)
    const sampleTranscript = `Welcome to this amazing video tutorial. In this video, we'll be covering some incredible topics that will help you learn and grow. 

First, we'll start with the basics and gradually move to more advanced concepts. This comprehensive guide will take you through each step carefully.

Remember to like and subscribe if you find this content helpful. Your support means the world to us and helps us create more valuable content.

Don't forget to hit the notification bell to stay updated with our latest videos. We upload new content regularly to keep you informed and entertained.`;

    const segments = [
      { start: 0, end: 5.5, text: "Welcome to this amazing video tutorial." },
      { start: 5.5, end: 12.3, text: "In this video, we'll be covering some incredible topics that will help you learn and grow." },
      { start: 12.3, end: 18.7, text: "First, we'll start with the basics and gradually move to more advanced concepts." },
      { start: 18.7, end: 24.2, text: "This comprehensive guide will take you through each step carefully." },
      { start: 24.2, end: 30.8, text: "Remember to like and subscribe if you find this content helpful." },
      { start: 30.8, end: 36.5, text: "Your support means the world to us and helps us create more valuable content." },
      { start: 36.5, end: 43.2, text: "Don't forget to hit the notification bell to stay updated with our latest videos." },
      { start: 43.2, end: 48.9, text: "We upload new content regularly to keep you informed and entertained." }
    ];

    const transcriptData = {
      videoId: videoIdResult.videoId,
      title: metadata.title,
      channelName: metadata.channelName,
      thumbnail: thumbnail,
      duration: '48:54',
      language: language || 'English',
      wordCount: sampleTranscript.split(' ').length,
      text: sampleTranscript,
      segments: segments,
      availableLanguages: ['en', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'ja', 'ko', 'zh']
    };

    return {
      success: true,
      data: transcriptData
    };
  } catch (error) {
    console.error('Error extracting YouTube transcript:', error);
    return {
      success: false,
      error: 'Failed to extract transcript from YouTube video. Make sure the video has captions available.'
    };
  }
}
