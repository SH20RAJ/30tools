import { NextRequest, NextResponse } from "next/server";


interface MusicGenerationRequest {
  prompt: string;
  lyrics?: string;
  lyrics_optimizer?: boolean;
  is_instrumental?: boolean;
  sample_rate?: number;
  bitrate?: number;
  format?: "mp3" | "wav";
}

export async function POST(req: NextRequest) {
  try {
    const body: MusicGenerationRequest = await req.json();

    if (!body.prompt || body.prompt.trim().length === 0) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
    const apiToken = process.env.CLOUDFLARE_AI_API_TOKEN;

    if (!accountId || !apiToken) {
      return NextResponse.json(
        { error: "Server configuration error. Missing API credentials." },
        { status: 500 }
      );
    }

    const payload: Record<string, any> = {
      prompt: body.prompt.trim(),
      lyrics_optimizer: body.lyrics_optimizer ?? false,
      is_instrumental: body.is_instrumental ?? false,
    };

    if (body.lyrics && body.lyrics.trim().length > 0) {
      payload.lyrics = body.lyrics.trim();
    }

    if (body.sample_rate) {
      payload.sample_rate = body.sample_rate;
    }

    if (body.bitrate) {
      payload.bitrate = body.bitrate;
    }

    if (body.format) {
      payload.format = body.format;
    }

    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/minimax/music-2.6`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Cloudflare AI API error:", response.status, errorText);
      return NextResponse.json(
        {
          error: `AI generation failed: ${response.statusText}`,
          details: errorText,
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Cloudflare Workers AI returns { result: { audio: "data:audio/wav;base64,..." } }
    if (!data.result?.audio && !data.audio) {
      return NextResponse.json(
        { error: "Invalid response from AI service", raw: data },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      audio: data.result?.audio || data.audio,
      format: body.format || "wav",
      prompt: body.prompt,
    });
  } catch (error) {
    console.error("Music generation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
