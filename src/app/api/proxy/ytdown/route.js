
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { url } = body;

        if (!url) {
            return NextResponse.json({ error: 'URL is required' }, { status: 400 });
        }

        const targetUrl = 'https://ytdown.to/proxy.php';
        const params = new URLSearchParams();
        params.append('url', url);

        const headers = {
            'accept': 'application/json, text/javascript, */*; q=0.01',
            'accept-language': 'en-GB,en;q=0.5',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'origin': 'https://ytdown.to',
            'referer': 'https://ytdown.to/en2/', // Use a generic referer
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
            'x-requested-with': 'XMLHttpRequest',
            // 'cookie': 'PHPSESSID=4cg0sdbruq4oc39hdsq529cf17', // Optional: might strictly need a session, let's see if it works without or if we need to mock one. 
            // User provided a specific cookie, but hardcoding it might expire. 
            // Usually these "proxy.php" scripts just check Referer/Origin. 
            // Let's try without cookie first, or use a dummy one if needed.
        };

        // The curl command used --data-raw 'url=...'
        const response = await fetch(targetUrl, {
            method: 'POST',
            headers: headers,
            body: params.toString(),
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
