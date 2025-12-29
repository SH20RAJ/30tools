import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const body = await req.json();
        const url = body.url;

        if (!url) {
            return NextResponse.json({ error: 'URL is required' }, { status: 400 });
        }

        const COMMON_HEADERS = {
            'accept': 'application/json, text/javascript, */*; q=0.01',
            'accept-language': 'en-GB,en;q=0.5',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'origin': 'https://ytdown.to',
            'referer': 'https://ytdown.to/en2/',
            'sec-ch-ua': '"Brave";v="143", "Chromium";v="143", "Not A(Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'sec-gpc': '1',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36',
            'x-requested-with': 'XMLHttpRequest',
            'cookie': 'PHPSESSID=go6tjlikmro2k7uokfkh7jcagg'
        };

        // If it's a YouTube URL, we fetch info
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
            // STEP 1: Fetch cooldown (Rules: always fetch cooldown)
            try {
                await fetch('https://ytdown.to/cooldown.php', {
                    method: 'POST',
                    headers: COMMON_HEADERS,
                    body: 'action=check'
                });
            } catch (e) {
                console.error('Cooldown check failed:', e);
            }

            // STEP 2: Fetch video info
            const response = await fetch('https://ytdown.to/proxy.php', {
                method: 'POST',
                headers: COMMON_HEADERS,
                body: `url=${encodeURIComponent(url)}`
            });

            if (!response.ok) {
                return NextResponse.json({ error: 'Failed to fetch video details from upstream' }, { status: response.status });
            }

            const rawData = await response.json();

            if (!rawData.api || rawData.api.status !== "OK") {
                return NextResponse.json({ error: rawData.api?.message || 'Failed to parse video' }, { status: 400 });
            }

            const data = rawData.api;

            // Map resources to consistent 'medias' format
            const medias = (data.mediaItems || []).map(item => ({
                url: item.mediaUrl,
                quality: item.mediaQuality + (item.mediaRes ? ` (${item.mediaRes})` : ''),
                ext: item.mediaExtension.toLowerCase(),
                size: item.mediaFileSize,
                type: item.type.toLowerCase(),
                mediaId: item.mediaId
            }));

            return NextResponse.json({
                title: data.title,
                thumbnail: data.imagePreviewUrl,
                duration: data.mediaItems?.[0]?.mediaDuration || "00:00",
                medias: medias
            });

        } else {
            // STEP 3: Polling for conversion (if url is a mediaUrl/process link)
            const response = await fetch('https://ytdown.to/proxy.php', {
                method: 'POST',
                headers: COMMON_HEADERS,
                body: `url=${encodeURIComponent(url)}`
            });

            if (!response.ok) {
                return NextResponse.json({ error: 'Failed to poll status from upstream' }, { status: response.status });
            }

            const data = await response.json();
            return NextResponse.json(data);
        }

    } catch (error) {
        console.error('Proxy Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
