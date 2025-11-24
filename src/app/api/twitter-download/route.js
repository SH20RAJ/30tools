import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { url } = await request.json();

    // Validate the URL
    if (
      !url ||
      (!url.startsWith("https://x.com/") &&
        !url.startsWith("https://twitter.com/"))
    ) {
      return NextResponse.json(
        { error: "Invalid Twitter/X URL" },
        { status: 400 },
      );
    }

    // Encode the URL for the API request
    const encodedUrl = encodeURIComponent(url);

    // Make request to Twmate API
    const response = await fetch("https://twmate.com/en2/?", {
      method: "POST",
      headers: {
        accept: "*/*",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        origin: "https://twmate.com",
        priority: "u=1, i",
        referer: "https://twmate.com/en2/",
        "sec-ch-ua":
          '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0 Safari/537.36",
        "x-requested-with": "XMLHttpRequest",
      },
      body: `page=${encodedUrl}&ftype=all&ajax=1`,
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const html = await response.text();

    return NextResponse.json({ html });
  } catch (_error) {
    console.error("Twitter video download error:", error);
    return NextResponse.json(
      { error: "Failed to download video information" },
      { status: 500 },
    );
  }
}
