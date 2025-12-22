
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { url } = body;

        if (!url) {
            return NextResponse.json({ error: 'URL is required' }, { status: 400 });
        }

        const encoded = encodeURIComponent(url);
        const targetUrl = `https://ytdl.socialplug.io/api/video-info?url=${encoded}`;

        const headers = {
            'accept': 'application/json, text/plain, */*',
            'origin': 'https://www.socialplug.io',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
        };

        const response = await fetch(targetUrl, {
            method: 'GET',
            headers: headers,
        });

        if (!response.ok) {
            const text = await response.text();
            return NextResponse.json({ error: `Upstream error: ${response.status}`, details: text }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data);

    } catch (error) {
        console.error('Proxy error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
