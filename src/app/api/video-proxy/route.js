export async function GET(request) {
  const url = new URL(request.url);
  const videoUrl = url.searchParams.get('url');
  const fileName = url.searchParams.get('file_name') || 'video.mp4';

  if (!videoUrl) {
    return new Response('Missing URL parameter', { status: 400 });
  }

  try {
    const response = await fetch(videoUrl);

    if (!response.ok) {
      return new Response('Failed to fetch video', { status: response.status });
    }

    const headers = new Headers();
    headers.set('Content-Type', 'video/mp4');
    headers.set('Content-Disposition', `inline; filename="${fileName}"`);
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'GET, HEAD');
    headers.set('Access-Control-Allow-Headers', 'Range');

    return new Response(response.body, {
      status: response.status,
      headers
    });
  } catch (error) {
    console.error('Error proxying video:', error);
    return new Response('Error fetching video', { status: 500 });
  }
}