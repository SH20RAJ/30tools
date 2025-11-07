// Terabox Video Player Implementation with mdiskplay API
// Extract video ID from terabox URL and fetch video data

function extractVideoIdFromTeraboxUrl(url) {
  // Extract video ID from URLs like https://teraboxshare.com/s/1Qx3vtX3rpRcI6poGaRe5wA
  const match = url.match(/\/s\/1?([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

async function fetchTeraboxVideoFromMdiskplay(teraboxUrl) {
  try {
    // Extract video ID from the terabox URL
    const videoId = extractVideoIdFromTeraboxUrl(teraboxUrl);
    if (!videoId) {
      throw new Error('Invalid Terabox URL - could not extract video ID');
    }

    console.log('🎬 Extracted video ID:', videoId);

    // Fetch video data from mdiskplay API
    const apiUrl = `https://core.mdiskplay.com/box/terabox/${videoId}?aka=baka`;
    console.log('🔍 Fetching from mdiskplay API:', apiUrl);

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    console.log('✅ Received data from mdiskplay API:', data);

    if (data.status !== 'success' || !data.source) {
      throw new Error('Invalid response from mdiskplay API');
    }

    // Process M3U8 playlist if available
    let processedVideoData = {
      status: data.status,
      source: data.source,
      download: data.download,
      m3u8Url: data.source,
      directVideoUrl: data.download
    };

    // If the source is an M3U8 file, fetch and process it
    if (data.source && data.source.includes('.m3u8')) {
      try {
        const m3u8Response = await fetch(data.source);
        const m3u8Content = await m3u8Response.text();
        console.log('🎵 M3U8 Content:', m3u8Content);

        // Parse M3U8 and generate video segment URLs
        const segments = parseM3u8Content(m3u8Content, videoId);
        processedVideoData.segments = segments;
        processedVideoData.totalSegments = segments.length;
        
        console.log(`🔗 Generated ${segments.length} video segment URLs`);
        
      } catch (m3u8Error) {
        console.warn('⚠️ Failed to fetch/process M3U8:', m3u8Error);
        // Continue with direct video URL
      }
    }

    return processedVideoData;

  } catch (error) {
    console.error('❌ Error fetching Terabox video:', error);
    throw error;
  }
}

function parseM3u8Content(m3u8Content, videoId) {
  const segments = [];
  const lines = m3u8Content.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Look for .ts segment files
    if (line && line.endsWith('.ts')) {
      // Extract segment filename (e.g., "source0.ts")
      const segmentName = line;
      
      // Generate the full URL using the mdiskplay video streams pattern
      // https://streams.mdiskplay.com/videos/H0xwA-GXx3RG-KOK2AwX3w/source0.ts
      const segmentUrl = `https://streams.mdiskplay.com/videos/${videoId}/${segmentName}`;
      
      segments.push({
        filename: segmentName,
        url: segmentUrl,
        index: segments.length
      });
    }
  }
  
  return segments;
}

// Function to create a playable video URL from segments
function createPlayableVideoUrl(segments) {
  if (!segments || segments.length === 0) {
    return null;
  }
  
  // Return the first segment URL as a starting point
  // For complete playback, you'd need to implement HLS.js or similar
  return segments[0].url;
}

// Example usage:
async function testTeraboxPlayer() {
  try {
    const teraboxUrl = "https://teraboxshare.com/s/1Qx3vtX3rpRcI6poGaRe5wA";
    const videoData = await fetchTeraboxVideoFromMdiskplay(teraboxUrl);
    
    console.log('🎬 Complete video data:', videoData);
    
    if (videoData.segments && videoData.segments.length > 0) {
      console.log('🎯 First segment URL:', videoData.segments[0].url);
      console.log('📊 Total segments:', videoData.totalSegments);
    }
    
    return videoData;
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

// Export functions for use in the terabox player
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    fetchTeraboxVideoFromMdiskplay,
    extractVideoIdFromTeraboxUrl,
    parseM3u8Content,
    createPlayableVideoUrl
  };
}
