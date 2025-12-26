
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const body = await req.json();
        const videoUrl = body.url;

        if (!videoUrl) {
            return NextResponse.json({ error: 'URL is required' }, { status: 400 });
        }

        // Generate a random string for the 'rand' parameter
        const rand = Math.random().toString(36).substring(2, 15);
        const encodedVideoUrl = encodeURIComponent(videoUrl);
        const targetUrl = `https://s6.youtube4kdownloader.com/ajax/getLinks.php?video=${encodedVideoUrl}&rand=${rand}`;

        const response = await fetch(targetUrl, {
            method: "GET",
            headers: {
                "Accept": "*/*",
                "Accept-Language": "en-GB,en;q=0.5",
                "Connection": "keep-alive",
                "Content-Type": "application/x-www-form-urlencoded",
                "Origin": "https://youtube4kdownloader.com",
                "Referer": "https://youtube4kdownloader.com/",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-site",
                "Sec-GPC": "1",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36",
                "sec-ch-ua": '"Brave";v="143", "Chromium";v="143", "Not A(Brand";v="24"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"macOS"'
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Upstream API error:`, response.status, errorText);
            return NextResponse.json({ error: `Upstream API error: ${response.statusText}` }, { status: response.status });
        }

        const rawData = await response.json();

        // Check for API success
        if (rawData.status !== 'success' || !rawData.data) {
            console.error('Upstream API returned error status:', rawData);
            return NextResponse.json({ error: rawData.error_msg || 'Failed to fetch video data' }, { status: 400 });
        }

        const data = rawData.data;
        
        // Pass essential data plus the full rich media list
        // The 'av' array contains both video and audio options usually, or mostly video variants.
        // We'll pass it as 'medias' to align with frontend logic, but filters will need adjustment.
        return NextResponse.json({
            title: data.title,
            thumbnail: data.thumbnail,
            duration: data.duration, // in seconds
            id: data.id,
            medias: data.av || []
        });

    } catch (error) {
        console.error('Proxy Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
