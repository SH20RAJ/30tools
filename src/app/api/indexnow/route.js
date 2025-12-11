import { NextResponse } from "next/server";
import sitemap from "../../sitemap";

async function handleIndexNowSubmission() {
  try {
    // 1. Get all URLs from sitemap
    const sitemapData = await sitemap();
    const urlList = sitemapData
      .map((entry) => entry.url)
      .filter((url) => url.startsWith("https://30tools.com")); // Safety filter

    if (urlList.length === 0) {
      return NextResponse.json({ error: "No URLs found to index" }, { status: 404 });
    }

    // 2. Prepare IndexNow Payload
    const apiKey = "8a92b225c56c4293a55543c3938a1234";
    const payload = {
      host: "30tools.com",
      key: apiKey,
      keyLocation: `https://30tools.com/${apiKey}.txt`,
      urlList: urlList,
    };

    // 3. Submit to IndexNow
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `IndexNow submission failed: ${response.status} ${errorText}` },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Successfully submitted ${urlList.length} URLs to IndexNow.`,
      submittedUrlsCount: urlList.length,
    });

  } catch (error) {
    console.error("IndexNow Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return handleIndexNowSubmission();
}

export async function POST() {
  return handleIndexNowSubmission();
}
