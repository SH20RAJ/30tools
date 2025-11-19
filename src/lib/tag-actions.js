"use server";

import { generateYouTubeTagsAI } from "./ai-services/youtube-ai-actions.js";

export async function generateYouTubeTags(query) {
  return await generateYouTubeTagsAI(query);
}

export async function generateTikTokTags(query) {
  try {
    const response = await fetch(
      `https://rapidtags.io/api/generator?query=${encodeURIComponent(query)}&type=TikTok`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to generate tags");
    }

    const data = await response.json();
    return {
      success: true,
      data: data,
    };
  } catch (error) {
    console.error("Error generating TikTok tags:", error);
    return {
      success: false,
      error: "Failed to generate TikTok tags. Please try again.",
    };
  }
}
