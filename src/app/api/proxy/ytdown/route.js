
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
                "accept": "*/*",
                "accept-language": "en-GB,en;q=0.6",
                "content-type": "application/json",
                "cookie": "sess=eyJpcCI6IjExNS4yNDAuOTAuMTMwIiwiZXhwIjoxNzY2NjQwNTcyNDkxfQ==.b35506ebd02b5a861927bd732c7f62b853424312e67c08bb94de2bcb062485a6",
                "origin": "https://downr.org",
                "priority": "u=1, i",
                "referer": "https://downr.org/",
                "sec-ch-ua": '"Brave";v="143", "Chromium";v="143", "Not A(Brand";v="24"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"macOS"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "sec-gpc": "1",
                "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36",
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
