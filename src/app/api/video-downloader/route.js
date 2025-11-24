import { NextResponse } from "next/server";

// This API route will handle video download requests
// It will use the savevideo.me API as specified in the requirements
export async function POST(request) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    // Validate URL format
    try {
      new URL(url);
    } catch (e) {
      return NextResponse.json(
        { error: "Invalid URL format" },
        { status: 400 },
      );
    }

    // Check if the URL is from a supported platform
    const supportedPlatforms = [
      "tiktok.com",
      "vm.tiktok.com",
      "facebook.com",
      "fb.watch",
      "instagram.com",
      "twitter.com",
      "x.com",
      "t.co",
      "vimeo.com",
      "dailymotion.com",
      "reddit.com",
      "rumble.com",
    ];

    const isSupported = supportedPlatforms.some((platform) =>
      url.includes(platform),
    );

    if (!isSupported) {
      return NextResponse.json(
        {
          error:
            "Unsupported video platform. Please try TikTok, Facebook, Instagram, Twitter/X, Vimeo, Dailymotion, Reddit, or Rumble.",
        },
        { status: 400 },
      );
    }

    // Make request to savevideo.me API
    const response = await fetch("https://savevideo.me/en/get/", {
      method: "POST",
      headers: {
        accept: "text/html, */*; q=0.01",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        origin: "https://savevideo.me",
        priority: "u=1, i",
        referer: "https://savevideo.me/en/",
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
      body: `url=${encodeURIComponent(url)}`,
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch video data from the service" },
        { status: 500 },
      );
    }

    const result = await response.text();

    // Parse the response to extract video information
    // This is a simplified implementation - in a real scenario, you would need to parse
    // the actual response from savevideo.me to extract video URLs and metadata
    const videoData = parseVideoResponse(result, url);

    return NextResponse.json({ success: true, data: videoData });
  } catch (_error) {
    console.error("Error in video downloader API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

// Helper function to parse the response from savevideo.me
function parseVideoResponse(responseText, originalUrl) {
  // This is a simplified implementation
  // In a real implementation, you would need to parse the actual response
  // from savevideo.me to extract video URLs and metadata

  // For now, we'll return mock data based on the platform
  const platform = detectPlatform(originalUrl);

  return {
    title: `${platform} Video`,
    thumbnail: "/placeholder-video-thumbnail.jpg",
    duration: "0:30",
    author:
      platform === "TikTok"
        ? "@tiktoker"
        : platform === "Twitter/X"
          ? "@username"
          : "",
    music: platform === "TikTok" ? "Trending Sound" : "",
    qualities: [
      { quality: "HD No Watermark", size: "8.2 MB", url: "#", type: "video" },
      { quality: "SD No Watermark", size: "4.8 MB", url: "#", type: "video" },
      { quality: "Audio Only (MP3)", size: "1.2 MB", url: "#", type: "audio" },
    ],
    platform: platform,
  };
}

// Helper function to detect the platform from the URL
function detectPlatform(url) {
  if (url.includes("tiktok.com") || url.includes("vm.tiktok.com")) {
    return "TikTok";
  } else if (url.includes("facebook.com") || url.includes("fb.watch")) {
    return "Facebook";
  } else if (url.includes("instagram.com")) {
    return "Instagram";
  } else if (
    url.includes("twitter.com") ||
    url.includes("x.com") ||
    url.includes("t.co")
  ) {
    return "Twitter/X";
  } else if (url.includes("vimeo.com")) {
    return "Vimeo";
  } else if (url.includes("dailymotion.com")) {
    return "Dailymotion";
  } else if (url.includes("reddit.com")) {
    return "Reddit";
  } else if (url.includes("rumble.com")) {
    return "Rumble";
  } else {
    return "Unknown";
  }
}
