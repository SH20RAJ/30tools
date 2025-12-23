
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const token = searchParams.get("token");
        const t = searchParams.get("t");

        if (!token || !t) {
            return NextResponse.json(
                { error: "Missing token or timestamp" },
                { status: 400 }
            );
        }

        const body = await req.json();
        const targetUrl = body.url;

        if (!targetUrl) {
            return NextResponse.json({ error: "Missing url in body" }, { status: 400 });
        }

        const formData = new FormData();
        formData.append("url", targetUrl);

        const apiUrl = `https://stream-api.iteraplay.com/?token=${token}&t=${t}`;

        const response = await fetch(apiUrl, {
            method: "POST",
            body: formData,
            headers: {
                // "Content-Type": "multipart/form-data" // standard fetch adds boundary automatically with FormData
                "Origin": "http://127.0.0.1:5500", // Spoof origin if needed, or use a realistic one
                "Referer": "http://127.0.0.1:5500/",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            },
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Upstream API error:", response.status, errorText);
            return NextResponse.json(
                { error: `Upstream API error: ${response.status}`, details: errorText },
                { status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Proxy error:", error);
        return NextResponse.json(
            { error: "Internal Server Error", details: String(error) },
            { status: 500 }
        );
    }
}
