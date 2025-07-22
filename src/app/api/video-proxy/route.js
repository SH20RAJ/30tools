export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const videoUrl = searchParams.get('url');
    
    if (!videoUrl) {
      return new Response('Video URL is required', { status: 400 });
    }

    // Validate that it's a valid stream URL for security
    if (!videoUrl.includes('tera-cdn.pappaaaa.one/stream') && 
        !videoUrl.includes('teraplay.tera-api.workers.dev/proxy')) {
      return new Response('Invalid video URL', { status: 400 });
    }

    // Fetch the video stream with proper headers
    const response = await fetch(videoUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        'Accept': 'video/mp4,video/*,*/*;q=0.9',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'identity',
        'Range': request.headers.get('range') || 'bytes=0-',
        'Referer': 'https://30tools.com/',
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch video: ${response.status}`);
    }

    // Get response headers
    const contentType = response.headers.get('content-type') || 'video/mp4';
    const contentLength = response.headers.get('content-length');
    const acceptRanges = response.headers.get('accept-ranges');
    const contentRange = response.headers.get('content-range');

    // Create response with proper CORS headers
    const headers = new Headers({
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
      'Access-Control-Allow-Headers': 'Range, Content-Type, Accept',
      'Access-Control-Expose-Headers': 'Content-Length, Content-Range, Accept-Ranges',
      'Cache-Control': 'public, max-age=3600',
    });

    // Add content headers if available
    if (contentLength) {
      headers.set('Content-Length', contentLength);
    }
    if (acceptRanges) {
      headers.set('Accept-Ranges', acceptRanges);
    }
    if (contentRange) {
      headers.set('Content-Range', contentRange);
    }

    // Handle range requests for video seeking
    const status = response.status === 206 ? 206 : 200;

    return new Response(response.body, {
      status,
      headers
    });

  } catch (error) {
    console.error('Video proxy error:', error);
    return new Response('Failed to proxy video stream', { status: 500 });
  }
}