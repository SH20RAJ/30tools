import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const body = await req.json();
        const targetUrl = 'https://downr.org/.netlify/functions/download';

        const response = await fetch(targetUrl, {
            method: "POST",
            headers: {
                "accept": "*/*",
                "accept-language": "en-GB,en;q=0.6",
                "content-type": "application/json",
                "cookie": "sess=eyJpcCI6IjExNS4yNDAuOTAuMTMwIiwiZXhwIjoxNzY2NjQxMTg2MzA1fQ==.447e25ce465f25f4cdb742d2c9ca325324a18bc6813baa7394cac559e6ce9f0f",
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
            console.error(`Upstream API error:`, response.status, errorText);
            return NextResponse.json({ error: `Upstream API error: ${response.statusText}` }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data);

    } catch (error) {
        console.error('Proxy Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
