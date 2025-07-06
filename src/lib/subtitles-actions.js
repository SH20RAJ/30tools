'use server';

// Server actions for YouTube Subtitles Downloader
// Using multiple APIs for reliability and comprehensive subtitle fetching

export async function extractYouTubeVideoId(url) {
  try {
    console.log('🔍 Extracting video ID from URL:', url);
    
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
        console.log('✅ Video ID extracted:', match[1]);
        return { success: true, videoId: match[1] };
      }
    }

    console.log('❌ Invalid YouTube URL format');
    return { error: 'Invalid YouTube URL. Please check the URL and try again.' };
  } catch (error) {
    console.error('❌ Error extracting video ID:', error);
    return { error: 'Failed to process the YouTube URL' };
  }
}

// Server action to get YouTube video metadata using oEmbed
export async function getYouTubeVideoMetadata(videoId) {
  try {
    console.log('📄 Fetching metadata for video ID:', videoId);
    
    if (!videoId) {
      return { error: 'Video ID is required' };
    }

    // Use YouTube oEmbed API for basic metadata
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
    
    console.log('✅ Metadata fetched successfully:', data.title);
    
    return {
      success: true,
      title: data.title || 'YouTube Video',
      channelName: data.author_name || 'Unknown Channel',
      channelUrl: data.author_url || '',
      videoId: videoId
    };
  } catch (error) {
    console.error('❌ Error fetching video metadata:', error);
    return { 
      error: 'Unable to fetch video information. The video might be private or unavailable.',
      videoId: videoId 
    };
  }
}

// Server action to download subtitles using multiple methods
export async function downloadYouTubeSubtitles(url, language = 'en') {
  try {
    console.log('🎬 Starting subtitle download for URL:', url);
    console.log('🌐 Requested language:', language);

    if (!url) {
      return { error: 'Please provide a YouTube URL' };
    }

    // Extract video ID
    const videoIdResult = await extractYouTubeVideoId(url);
    if (!videoIdResult.success) {
      return { error: videoIdResult.error };
    }

    const videoId = videoIdResult.videoId;
    console.log('🆔 Using video ID:', videoId);

    // Get video metadata
    const metadataResult = await getYouTubeVideoMetadata(videoId);
    
    // Try multiple subtitle sources
    let subtitleData = null;
    
    // Method 1: Try Tactiq API first
    try {
      console.log('🔄 Trying Tactiq API...');
      subtitleData = await fetchFromTactiq(url, language);
      if (subtitleData) {
        console.log('✅ Tactiq API successful');
      }
    } catch (error) {
      console.log('❌ Tactiq API failed:', error.message);
    }

    // Method 2: Try YouTube Transcript API as fallback
    if (!subtitleData) {
      try {
        console.log('🔄 Trying YouTube Transcript API...');
        subtitleData = await fetchFromYouTubeTranscript(videoId, language);
        if (subtitleData) {
          console.log('✅ YouTube Transcript API successful');
        }
      } catch (error) {
        console.log('❌ YouTube Transcript API failed:', error.message);
      }
    }

    // Method 3: Try direct YouTube API as last resort
    if (!subtitleData) {
      try {
        console.log('🔄 Trying direct YouTube API...');
        subtitleData = await fetchFromYouTubeDirect(videoId, language);
        if (subtitleData) {
          console.log('✅ Direct YouTube API successful');
        }
      } catch (error) {
        console.log('❌ Direct YouTube API failed:', error.message);
      }
    }

    if (!subtitleData || !subtitleData.segments || subtitleData.segments.length === 0) {
      console.log('❌ No subtitles found from any source');
      return { 
        error: 'No subtitles found for this video. The video may not have captions or they may not be available in the selected language.' 
      };
    }

    // Process and format the subtitle data
    const processedData = processSubtitleData(subtitleData, metadataResult.success ? metadataResult : null);
    
    console.log('✅ Subtitles processed successfully');
    console.log('📊 Stats:', {
      segments: processedData.segmentCount,
      words: processedData.wordCount,
      duration: processedData.duration + 's'
    });

    return {
      success: true,
      data: processedData
    };

  } catch (error) {
    console.error('❌ Error downloading subtitles:', error);
    return { 
      error: 'Failed to download subtitles. Please check the video URL and try again.' 
    };
  }
}

// Fetch subtitles from Tactiq API
async function fetchFromTactiq(url, langCode) {
  const response = await fetch('https://tactiq-apps-prod.tactiq.io/transcript', {
    method: 'POST',
    headers: {
      'accept': '*/*',
      'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
      'content-type': 'application/json',
      'origin': 'https://tactiq.io',
      'referer': 'https://tactiq.io/',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
    },
    body: JSON.stringify({
      videoUrl: url,
      langCode: langCode
    })
  });

  if (!response.ok) {
    throw new Error(`Tactiq API request failed: ${response.status}`);
  }

  const data = await response.json();
  
  if (!data.captions || data.captions.length === 0) {
    return null;
  }

  // Convert Tactiq format to our standard format
  return {
    title: data.title,
    segments: data.captions.map(caption => ({
      start: parseFloat(caption.start),
      end: parseFloat(caption.start) + parseFloat(caption.dur),
      dur: parseFloat(caption.dur),
      text: caption.text.trim()
    }))
  };
}

// Fetch subtitles using a mock YouTube Transcript API (placeholder)
async function fetchFromYouTubeTranscript(videoId, language) {
  // This would use a library like youtube-transcript or similar
  // For now, returning null to simulate API failure
  console.log('📝 YouTube Transcript API called for:', videoId, 'language:', language);
  return null;
}

// Fetch subtitles directly from YouTube (placeholder)
async function fetchFromYouTubeDirect(videoId, language) {
  // This would parse YouTube's subtitle tracks directly
  // For now, returning null to simulate API failure
  console.log('📝 Direct YouTube API called for:', videoId, 'language:', language);
  return null;
}

// Process and format subtitle data into all supported formats
function processSubtitleData(subtitleData, metadata) {
  const { title, segments } = subtitleData;
  const videoTitle = metadata?.title || title || 'YouTube Video Subtitles';
  
  // Create plain text version
  const plainText = segments.map(segment => segment.text).join(' ');

  // Create timestamped text
  const timestampedText = segments.map(segment => {
    const startTime = formatTimestamp(segment.start);
    return `[${startTime}] ${segment.text}`;
  }).join('\n');

  // Create SRT format
  const srtContent = segments.map((segment, index) => {
    const startTime = formatSRTTime(segment.start);
    const endTime = formatSRTTime(segment.end);
    return `${index + 1}\n${startTime} --> ${endTime}\n${segment.text}\n`;
  }).join('\n');

  // Create VTT format
  const vttContent = `WEBVTT\n\n` + segments.map(segment => {
    const startTime = formatVTTTime(segment.start);
    const endTime = formatVTTTime(segment.end);
    return `${startTime} --> ${endTime}\n${segment.text}\n`;
  }).join('\n');

  // Create JSON format
  const jsonContent = JSON.stringify({
    title: videoTitle,
    language: 'auto-detected',
    segments: segments,
    metadata: metadata || {},
    totalDuration: segments.length > 0 ? segments[segments.length - 1].end : 0,
    wordCount: plainText.split(' ').length,
    generatedAt: new Date().toISOString()
  }, null, 2);

  // Create CSV format
  const csvContent = [
    'Index,Start Time,End Time,Duration,Text',
    ...segments.map((segment, index) => {
      const startTime = formatTimestamp(segment.start);
      const endTime = formatTimestamp(segment.end);
      const duration = formatDuration(segment.dur);
      const text = `"${segment.text.replace(/"/g, '""')}"`;
      return `${index + 1},${startTime},${endTime},${duration},${text}`;
    })
  ].join('\n');

  return {
    title: videoTitle,
    language: 'auto-detected',
    segments: segments,
    plainText: plainText,
    timestampedText: timestampedText,
    srtContent: srtContent,
    vttContent: vttContent,
    jsonContent: jsonContent,
    csvContent: csvContent,
    wordCount: plainText.split(' ').length,
    duration: segments.length > 0 ? segments[segments.length - 1].end : 0,
    segmentCount: segments.length,
    metadata: metadata || {}
  };
}

// Helper function to format timestamp for display (MM:SS or HH:MM:SS)
function formatTimestamp(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

// Helper function to format duration
function formatDuration(seconds) {
  return `${seconds.toFixed(2)}s`;
}

// Helper function to format time for SRT
function formatSRTTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  const ms = Math.floor((seconds % 1) * 1000);
  
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')},${ms.toString().padStart(3, '0')}`;
}

// Helper function to format time for VTT
function formatVTTTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  const ms = Math.floor((seconds % 1) * 1000);
  
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${ms.toString().padStart(3, '0')}`;
}
