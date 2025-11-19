import { NextResponse } from "next/server";
import { extractYouTubeId } from "@/lib/youtube-utils";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get("url") || "";
    const id = extractYouTubeId(url);

    if (!id) {
      return NextResponse.json(
        { error: "Invalid YouTube URL" },
        { status: 400 },
      );
    }

    const embedUrl = `https://www.youtube-nocookie.com/embed/${id}`;
    return NextResponse.json({ id, embedUrl });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
