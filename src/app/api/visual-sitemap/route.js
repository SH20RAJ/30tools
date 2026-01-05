import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { url } = await req.json();

        if (!url) {
            return NextResponse.json(
                { error: 'URL is required' },
                { status: 400 }
            );
        }

        try {
            new URL(url);
        } catch (e) {
            return NextResponse.json(
                { error: 'Invalid URL format' },
                { status: 400 }
            );
        }

        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; 30ToolsBot/1.0; +https://30tools.com/bot)',
                'Accept': 'application/xml, text/xml, */*'
            },
            redirect: 'follow',
            next: { revalidate: 60 } // Cache for 60 seconds
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: `Failed to fetch sitemap: ${response.statusText}` },
                { status: response.status }
            );
        }

        const xml = await response.text();

        // basic validation that it looks like XML
        if (!xml.trim().startsWith('<')) {
            return NextResponse.json(
                { error: 'URL did not return valid XML' },
                { status: 400 }
            );
        }

        return NextResponse.json({ xml });
    } catch (error) {
        console.error('Sitemap fetch error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
