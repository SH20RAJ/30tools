import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const body = await req.json();
        const videoUrl = body.url;

        if (!videoUrl) {
            return NextResponse.json({ error: 'URL is required' }, { status: 400 });
        }

        const targetUrl = 'https://api.vidssave.com/api/contentsite_api/media/parse';

        // Construct form data body
        const params = new URLSearchParams();
        params.append('auth', '20250901majwlqo');
        params.append('domain', 'api-ak.vidssave.com');
        params.append('origin', 'source');
        params.append('link', videoUrl);

        const response = await fetch(targetUrl, {
            method: "POST",
            headers: {
                "Accept": "*/*",
                "Accept-Language": "en-GB,en;q=0.8",
                "Content-Type": "application/x-www-form-urlencoded",
                "Origin": "https://vidssave.com",
                "Referer": "https://vidssave.com/",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-site",
                "Sec-GPC": "1",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36",
                "sec-ch-ua": '"Brave";v="143", "Chromium";v="143", "Not A(Brand";v="24"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"macOS"'
            },
            body: params
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Upstream API error:`, response.status, errorText);
            return NextResponse.json({ error: `Upstream API error: ${response.statusText}` }, { status: response.status });
        }

        const rawData = await response.json();

        // Check for API success (API returns status: 1 for success)
        if (rawData.status !== 1 || !rawData.data) {
            console.error('Upstream API returned error status:', rawData);
            return NextResponse.json({ error: 'Failed to fetch video data from external API' }, { status: 400 });
        }

        const data = rawData.data;

        // Map resources to consistent 'medias' format
        const medias = (data.resources || []).map(r => ({
            url: r.download_url,
            quality: r.quality,
            ext: r.format, // "MP4", "WEBM" etc
            size: r.size, // Size in bytes
            // Pass extra fields for frontend to potentially use
            content: r.resource_content,
            type: r.type // "video" or "audio"
        }));

        return NextResponse.json({
            title: data.title,
            thumbnail: data.thumbnail,
            duration: data.duration, // in seconds
            medias: medias
        });

    } catch (error) {
        console.error('Proxy Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
