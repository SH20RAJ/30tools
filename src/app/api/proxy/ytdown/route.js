
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { searchParams } = new URL(req.url);
        const action = searchParams.get('action'); // 'info' or 'download'
        const body = await req.json();

        let targetUrl = '';
        if (action === 'info') {
            targetUrl = 'https://downr.org/.netlify/functions/video-info';
        } else if (action === 'download') {
            targetUrl = 'https://downr.org/.netlify/functions/youtube-download';
        } else {
            return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
        }

        const response = await fetch(targetUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Origin": "https://downr.org",
                "Referer": "https://downr.org/",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Upstream API error (${action}):`, response.status, errorText);
            return NextResponse.json({ error: `Upstream API error: ${response.statusText}` }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data);

    } catch (error) {
        console.error('Proxy Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
