"use server";

import {
  generateYouTubeScriptAI,
  generateCommentResponseAI,
  generateYouTubeIdeasAI,
  generateTimestampsAI,
} from "./ai-services/youtube-ai-actions.js";

// Server action to extract YouTube video ID from URL
export async function extractYouTubeVideoId(url) {
  try {
    if (!url) {
      return { error: "Please provide a YouTube URL" };
    }

    // Remove any whitespace
    url = url.trim();

    // Regular expressions for different YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/watch\?.*v=([a-zA-Z0-9_-]{11})/,
      /youtu\.be\/([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/v\/([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return { success: true, videoId: match[1] };
      }
    }

    return {
      error: "Invalid YouTube URL. Please check the URL and try again.",
    };
  } catch (error) {
    console.error("Error extracting video ID:", error);
    return { error: "Failed to process the YouTube URL" };
  }
}

// Server action to get YouTube video metadata
export async function getYouTubeVideoMetadata(videoId) {
  try {
    if (!videoId) {
      return { error: "Video ID is required" };
    }

    // We'll use the YouTube oEmbed API for basic metadata
    const oembedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;

    const response = await fetch(oembedUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    });

    if (!response.ok) {
      throw new Error("Video not found or unavailable");
    }

    const data = await response.json();

    return {
      success: true,
      title: data.title || "YouTube Video",
      channelName: data.author_name || "Unknown Channel",
      channelUrl: data.author_url || "",
      videoId: videoId,
    };
  } catch (error) {
    console.error("Error fetching video metadata:", error);
    return {
      error:
        "Unable to fetch video information. The video might be private or unavailable.",
      videoId: videoId,
    };
  }
}

// Server action to generate thumbnail URLs
export async function generateThumbnailUrls(videoId) {
  try {
    if (!videoId) {
      return { error: "Video ID is required" };
    }

    const thumbnails = [
      {
        name: "Default (120x90)",
        url: `https://img.youtube.com/vi/${videoId}/default.jpg`,
        size: "120x90",
        quality: "low",
      },
      {
        name: "Medium Quality (320x180)",
        url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
        size: "320x180",
        quality: "medium",
      },
      {
        name: "High Quality (480x360)",
        url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        size: "480x360",
        quality: "high",
      },
      {
        name: "Standard Definition (640x480)",
        url: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
        size: "640x480",
        quality: "sd",
      },
      {
        name: "Max Resolution (1280x720)",
        url: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        size: "1280x720",
        quality: "maxres",
      },
    ];

    return {
      success: true,
      thumbnails: thumbnails,
      videoId: videoId,
    };
  } catch (error) {
    console.error("Error generating thumbnail URLs:", error);
    return { error: "Failed to generate thumbnail URLs" };
  }
}

// Server action to validate thumbnail existence
export async function validateThumbnailExists(url) {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return {
      exists: response.ok,
      url: url,
    };
  } catch (error) {
    return {
      exists: false,
      url: url,
    };
  }
}

// Server action for YouTube Video/Audio Downloader
export async function downloadYouTubeVideo(url) {
  try {
    const videoIdResult = await extractYouTubeVideoId(url);
    if (!videoIdResult.success) {
      return { success: false, error: videoIdResult.error };
    }

    const metadata = await getYouTubeVideoMetadata(videoIdResult.videoId);
    if (!metadata.success) {
      return { success: false, error: metadata.error };
    }

    // Generate thumbnail for preview
    const thumbnailUrls = await generateThumbnailUrls(videoIdResult.videoId);
    const thumbnail = thumbnailUrls.success
      ? thumbnailUrls.thumbnails[2].url
      : null;

    // Simulate video data (in a real implementation, you'd use a YouTube API or service)
    const videoData = {
      videoId: videoIdResult.videoId,
      title: metadata.title,
      channelName: metadata.channelName,
      thumbnail: thumbnail,
      duration: "00:00", // Would need actual API call
      quality: "HD 1080p",
      fileSize: "~50MB",
      downloadUrl: `#download-${videoIdResult.videoId}`, // Placeholder
      audioUrl: `#audio-${videoIdResult.videoId}`, // Placeholder
      videoFormats: [
        {
          quality: "1080p",
          fileSize: "~50MB",
          downloadUrl: `#video-1080p-${videoIdResult.videoId}`,
        },
        {
          quality: "720p",
          fileSize: "~25MB",
          downloadUrl: `#video-720p-${videoIdResult.videoId}`,
        },
        {
          quality: "480p",
          fileSize: "~15MB",
          downloadUrl: `#video-480p-${videoIdResult.videoId}`,
        },
      ],
      audioFormats: [
        {
          quality: "320kbps",
          fileSize: "~8MB",
          downloadUrl: `#audio-320-${videoIdResult.videoId}`,
        },
        {
          quality: "128kbps",
          fileSize: "~3MB",
          downloadUrl: `#audio-128-${videoIdResult.videoId}`,
        },
      ],
    };

    return {
      success: true,
      data: videoData,
    };
  } catch (error) {
    console.error("Error processing YouTube video download:", error);
    return {
      success: false,
      error: "Failed to process YouTube video for download",
    };
  }
}

// Server action for YouTube Shorts Downloader
export async function downloadYouTubeShorts(url) {
  try {
    const videoIdResult = await extractYouTubeVideoId(url);
    if (!videoIdResult.success) {
      return { success: false, error: videoIdResult.error };
    }

    const metadata = await getYouTubeVideoMetadata(videoIdResult.videoId);
    if (!metadata.success) {
      return { success: false, error: metadata.error };
    }

    // Generate thumbnail for preview
    const thumbnailUrls = await generateThumbnailUrls(videoIdResult.videoId);
    const thumbnail = thumbnailUrls.success
      ? thumbnailUrls.thumbnails[2].url
      : null;

    // Simulate shorts data
    const shortsData = {
      videoId: videoIdResult.videoId,
      title: metadata.title,
      channelName: metadata.channelName,
      thumbnail: thumbnail,
      duration: "<60s",
      quality: "HD Vertical",
      fileSize: "~8MB",
      description: "YouTube Shorts video content...",
      downloadUrl: `#shorts-${videoIdResult.videoId}`,
      audioUrl: `#shorts-audio-${videoIdResult.videoId}`,
    };

    return {
      success: true,
      data: shortsData,
    };
  } catch (error) {
    console.error("Error processing YouTube Shorts download:", error);
    return {
      success: false,
      error: "Failed to process YouTube Shorts for download",
    };
  }
}

// Server action for YouTube Transcript Downloader
export async function downloadYouTubeTranscript(url, language = "en") {
  return await downloadYouTubeTranscriptTactiq(url, language);
}

// Server action to download YouTube transcript using Tactiq API
export async function downloadYouTubeTranscriptTactiq(url, langCode = "en") {
  try {
    if (!url) {
      return { error: "Please provide a YouTube URL" };
    }

    // Validate YouTube URL
    const videoIdResult = await extractYouTubeVideoId(url);
    if (!videoIdResult.success) {
      return {
        error: "Invalid YouTube URL. Please check the URL and try again.",
      };
    }

    // Call Tactiq API
    const response = await fetch(
      "https://tactiq-apps-prod.tactiq.io/transcript",
      {
        method: "POST",
        headers: {
          accept: "*/*",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "content-type": "application/json",
          origin: "https://tactiq.io",
          referer: "https://tactiq.io/",
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
        },
        body: JSON.stringify({
          videoUrl: url,
          langCode: langCode,
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();

    if (!data.captions || data.captions.length === 0) {
      return {
        error:
          "No transcript found for this video. The video may not have captions or they may not be available in the selected language.",
      };
    }

    // Process the transcript data
    const processedTranscript = processTranscriptData(data);

    return {
      success: true,
      data: processedTranscript,
    };
  } catch (error) {
    console.error("Error downloading transcript:", error);
    return {
      error: error.message.includes("API request failed")
        ? "Failed to fetch transcript from the API. Please try again later."
        : "Failed to download transcript. Please check the video URL and try again.",
    };
  }
}

// Helper function to process and format transcript data
function processTranscriptData(tactiqData) {
  const { title, captions } = tactiqData;

  // Convert Tactiq format to our standard format
  const segments = captions.map((caption) => ({
    start: parseFloat(caption.start),
    end: parseFloat(caption.start) + parseFloat(caption.dur),
    dur: parseFloat(caption.dur),
    text: caption.text.trim(),
  }));

  // Create plain text version
  const plainText = segments.map((segment) => segment.text).join(" ");

  // Create timestamped text
  const timestampedText = segments
    .map((segment) => {
      const startTime = formatTimestamp(segment.start);
      return `[${startTime}] ${segment.text}`;
    })
    .join("\n");

  // Create SRT format
  const srtContent = segments
    .map((segment, index) => {
      const startTime = formatSRTTime(segment.start);
      const endTime = formatSRTTime(segment.end);
      return `${index + 1}\n${startTime} --> ${endTime}\n${segment.text}\n`;
    })
    .join("\n");

  // Create VTT format
  const vttContent =
    `WEBVTT\n\n` +
    segments
      .map((segment) => {
        const startTime = formatVTTTime(segment.start);
        const endTime = formatVTTTime(segment.end);
        return `${startTime} --> ${endTime}\n${segment.text}\n`;
      })
      .join("\n");

  // Create JSON format
  const jsonContent = JSON.stringify(
    {
      title: title || "YouTube Video Transcript",
      language: "auto-detected",
      segments: segments,
      totalDuration:
        segments.length > 0 ? segments[segments.length - 1].end : 0,
      wordCount: plainText.split(" ").length,
    },
    null,
    2,
  );

  return {
    title: title || "YouTube Video Transcript",
    language: "auto-detected",
    segments: segments,
    plainText: plainText,
    timestampedText: timestampedText,
    srtContent: srtContent,
    vttContent: vttContent,
    jsonContent: jsonContent,
    wordCount: plainText.split(" ").length,
    duration: segments.length > 0 ? segments[segments.length - 1].end : 0,
    segmentCount: segments.length,
  };
}

// Helper function to format timestamp for display
function formatTimestamp(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }
  return `${minutes}:${secs.toString().padStart(2, "0")}`;
}

// Helper function to format time for SRT
function formatSRTTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  const ms = Math.floor((seconds % 1) * 1000);

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")},${ms.toString().padStart(3, "0")}`;
}

// Helper function to format time for VTT
function formatVTTTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  const ms = Math.floor((seconds % 1) * 1000);

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}.${ms.toString().padStart(3, "0")}`;
}

// Server action to generate YouTube timestamps
export async function generateTimestamps(videoUrl, transcript) {
  try {
    if (!videoUrl && !transcript) {
      return { error: "Please provide either a YouTube URL or transcript" };
    }

    // Use AI service for transcript analysis if available
    if (transcript) {
      return await generateTimestampsAI(videoUrl, transcript);
    }

    // Extract video ID if URL is provided
    let videoId = null;
    if (videoUrl) {
      const result = await extractYouTubeVideoId(videoUrl);
      if (result.error) {
        return { error: result.error };
      }
      videoId = result.videoId;
    }

    // Fallback to mock data if no transcript
    const mockTimestamps = [
      {
        time: "0:00",
        title: "Introduction and Overview",
        description: "Welcome and what we'll cover",
      },
      {
        time: "1:30",
        title: "Getting Started",
        description: "Initial setup and preparation",
      },
      {
        time: "4:15",
        title: "Main Content",
        description: "Core concepts and examples",
      },
      {
        time: "8:45",
        title: "Advanced Tips",
        description: "Pro techniques and best practices",
      },
      {
        time: "12:20",
        title: "Common Mistakes",
        description: "What to avoid and troubleshooting",
      },
      {
        time: "15:00",
        title: "Conclusion",
        description: "Summary and next steps",
      },
    ];

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return {
      success: true,
      timestamps: mockTimestamps,
      videoId,
    };
  } catch (error) {
    console.error("Error generating timestamps:", error);
    return { error: "Failed to generate timestamps" };
  }
}

// Server action to create GIF from YouTube video
export async function createGifFromYoutube(videoUrl, options) {
  try {
    if (!videoUrl) {
      return { error: "Please provide a YouTube URL" };
    }

    const result = await extractYouTubeVideoId(videoUrl);
    if (result.error) {
      return { error: result.error };
    }

    const videoId = result.videoId;
    const { startTime, endTime, width, height, frameRate, quality } = options;

    // Validate duration
    if (endTime - startTime > 30) {
      return { error: "GIF duration cannot exceed 30 seconds" };
    }

    // Mock GIF creation for demo purposes
    // In a real implementation, this would use ffmpeg or similar to process the video
    const mockGifUrl = `https://media.giphy.com/media/3o7TKAXkWwP1dXPXKU/giphy.gif`;
    const mockPreviewUrl = mockGifUrl;

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return {
      success: true,
      gifUrl: mockGifUrl,
      previewUrl: mockPreviewUrl,
      videoId,
      settings: {
        duration: endTime - startTime,
        frameRate,
        quality,
        dimensions: { width, height },
      },
    };
  } catch (error) {
    console.error("Error creating GIF:", error);
    return { error: "Failed to create GIF from YouTube video" };
  }
}

// Server action to generate YouTube script with AI
export async function generateYouTubeScript(scriptData) {
  try {
    const { topic } = scriptData;

    if (!topic) {
      return { error: "Video topic is required" };
    }

    // Use AI service for script generation
    return await generateYouTubeScriptAI(scriptData);
  } catch (error) {
    console.error("Error generating script:", error);
    return { error: "Failed to generate script" };
  }
}

// Server action to generate comment responses
export async function generateCommentResponse(requestData) {
  try {
    const { comment } = requestData;

    if (!comment) {
      return { error: "Comment is required" };
    }

    // Use AI service for comment response generation
    return await generateCommentResponseAI(requestData);
  } catch (error) {
    console.error("Error generating comment response:", error);
    return { error: "Failed to generate comment responses" };
  }
}

// Server action to download YouTube video pack
export async function downloadYouTubePack(videoUrl, selectedAssets) {
  try {
    if (!videoUrl) {
      return { error: "Please provide a YouTube URL" };
    }

    const result = await extractYouTubeVideoId(videoUrl);
    if (result.error) {
      return { error: result.error };
    }

    const videoId = result.videoId;

    // Get video metadata
    const metadata = await getYouTubeVideoMetadata(videoId);
    if (metadata.error) {
      return { error: metadata.error };
    }

    // Build comprehensive video data pack
    const packData = {
      videoId,
      url: videoUrl,
      extractedAt: new Date().toISOString(),
      selectedAssets,
    };

    // Add metadata if selected
    if (selectedAssets.metadata || selectedAssets.title) {
      packData.metadata = {
        title: metadata.title || "YouTube Video",
        description: metadata.description || "",
        duration: metadata.duration || "Unknown",
        publishedAt: metadata.publishedAt || new Date().toISOString(),
        viewCount: Math.floor(Math.random() * 1000000) + 10000, // Mock data
        likeCount: Math.floor(Math.random() * 50000) + 1000,
        commentCount: Math.floor(Math.random() * 10000) + 100,
      };
    }

    // Add title and description if selected
    if (selectedAssets.title) {
      packData.title = metadata.title || "YouTube Video";
      packData.description = metadata.description || "No description available";
    }

    // Add tags if selected
    if (selectedAssets.tags) {
      packData.tags = [
        "youtube",
        "video",
        "content",
        "tutorial",
        "how-to",
        "education",
        "entertainment",
        "viral",
        "trending",
      ]; // Mock tags - in real implementation, extract from video
    }

    // Add transcript if selected
    if (selectedAssets.transcript) {
      packData.transcript = {
        available: true,
        language: "en",
        content:
          "This is a sample transcript. In a real implementation, this would contain the actual video transcript extracted using YouTube Data API or caption parsing.",
        wordCount: 150,
      };
    }

    // Add thumbnail data if selected
    if (selectedAssets.thumbnail) {
      packData.thumbnails = {
        default: `https://img.youtube.com/vi/${videoId}/default.jpg`,
        medium: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
        high: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        standard: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
        maxres: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      };
    }

    // Add channel information if selected
    if (selectedAssets.channelInfo) {
      packData.channel = {
        id: "UC" + videoId.substring(0, 22), // Mock channel ID
        title: metadata.author_name || "YouTube Channel",
        subscriberCount: Math.floor(Math.random() * 1000000) + 1000,
        videoCount: Math.floor(Math.random() * 1000) + 50,
        description: "Sample channel description",
        joinedDate: "2020-01-01",
        verified: Math.random() > 0.5,
      };
    }

    // Add analytics if selected
    if (selectedAssets.analytics) {
      packData.analytics = {
        performance: {
          avgViewDuration: "4:32",
          clickThroughRate: "3.2%",
          engagementRate: "4.8%",
          retentionRate: "65%",
        },
        demographics: {
          topCountries: ["United States", "United Kingdom", "Canada"],
          ageGroups: {
            "18-24": "25%",
            "25-34": "35%",
            "35-44": "20%",
            "45+": "20%",
          },
          genderSplit: {
            male: "60%",
            female: "40%",
          },
        },
      };
    }

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return {
      success: true,
      data: packData,
      videoId,
      assetCount: Object.values(selectedAssets).filter(Boolean).length,
    };
  } catch (error) {
    console.error("Error downloading YouTube pack:", error);
    return { error: "Failed to download YouTube video pack" };
  }
}

// Server action for AI-powered YouTube idea generation
export async function generateYouTubeIdeas(requestData) {
  return await generateYouTubeIdeasAI(requestData);
}

// Server action to get Channel Info (ID, Title, etc.) from URL
export async function getChannelInfo(url) {
  try {
    if (!url) throw new Error("URL is required");

    // Basic validation
    if (!url.includes("youtube.com") && !url.includes("youtu.be")) {
      throw new Error("Invalid YouTube URL");
    }

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch channel page");
    }

    const html = await response.text();

    // Extract Channel ID
    // Pattern 1: <meta itemprop="channelId" content="UC...">
    const channelIdMatch = html.match(/itemprop="channelId" content="([^"]+)"/);
    // Pattern 2: "externalId":"UC..."
    const externalIdMatch = html.match(/"externalId":"([^"]+)"/);
    
    const channelId = channelIdMatch?.[1] || externalIdMatch?.[1];

    if (!channelId) {
      throw new Error("Could not find Channel ID");
    }

    // Extract Title
    const titleMatch = html.match(/<meta property="og:title" content="([^"]+)"/);
    const title = titleMatch?.[1] || "Unknown Channel";

    // Extract Description
    const descriptionMatch = html.match(/<meta property="og:description" content="([^"]+)"/);
    const description = descriptionMatch?.[1] || "";

    // Extract Thumbnail
    const imageMatch = html.match(/<meta property="og:image" content="([^"]+)"/);
    const thumbnail = imageMatch?.[1] || "";

    return {
      success: true,
      data: {
        channelId,
        title,
        description,
        thumbnail,
        url
      }
    };

  } catch (error) {
    console.error("Error fetching channel info:", error);
    return {
      success: false,
      error: error.message || "Failed to process request"
    };
  }
}
