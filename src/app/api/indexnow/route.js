import { NextResponse } from "next/server";
import { getAllTools, getAllCategories } from "@/constants/tools-utils";

async function handleIndexNowSubmission(specificUrls = null) {
  try {
    const baseUrl = "https://30tools.com";
    let urlList = [];

    if (specificUrls && Array.isArray(specificUrls) && specificUrls.length > 0) {
      // Use provided URLs
      urlList = specificUrls.filter(url => url.startsWith(baseUrl));
    } else {
      // Fallback: Get all URLs dynamically
      // We can't use the sitemap() function directly often because it might import things not available in this context or be heavy
      // Instead, let's reconstruct the URLs using the same util functions
      const allTools = getAllTools();
      const allCategories = getAllCategories();

      const staticUrls = [
        baseUrl,
        `${baseUrl}/search`,
        `${baseUrl}/about`,
        `${baseUrl}/contact`,
        `${baseUrl}/privacy`,
        `${baseUrl}/terms`,
        `${baseUrl}/help`,
        `${baseUrl}/api-docs`,
        `${baseUrl}/blog`
      ];

      const categoryUrls = allCategories.map(cat => `${baseUrl}/${cat.slug}`);
      const toolUrls = allTools.map(tool => `${baseUrl}${tool.route}`);
      
      // Also include extra slugs if any
      const extraToolUrls = allTools.flatMap(tool => 
        (tool.extraSlugs || []).map(slug => `${baseUrl}/${slug}`)
      );

      urlList = [...staticUrls, ...categoryUrls, ...toolUrls, ...extraToolUrls];
    }

    if (urlList.length === 0) {
      return NextResponse.json({ error: "No URLs found to index" }, { status: 404 });
    }

    // Key from generated file
    const apiKey = "bd59f21abb6f06b92d43a3c02c948f9b";
    
    // Chunk URLs if there are too many (IndexNow recommends batching, max 10k usually, but smaller batches are safer)
    // For this app size (~150 URLs), one request is fine.
    
    const payload = {
      host: "30tools.com",
      key: apiKey,
      keyLocation: `https://30tools.com/${apiKey}.txt`,
      urlList: urlList,
    };

    console.log(`Submitting ${urlList.length} URLs to IndexNow...`);

    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("IndexNow Submission Failed:", response.status, errorText);
      return NextResponse.json(
        { error: `IndexNow submission failed: ${response.status} ${errorText}` },
        { status: response.status }
      );
    }

    console.log("IndexNow Submission Successful");
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
  // Allow manual triggering via GET (e.g. from a cron job or browser)
  // Protected lightly by obscurity, but harmless since it just tells Bing to index our own site.
  return handleIndexNowSubmission();
}

export async function POST(request) {
  try {
    const body = await request.json();
    return handleIndexNowSubmission(body.urls);
  } catch (error) {
    return handleIndexNowSubmission();
  }
}
