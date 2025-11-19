import { getTempEmailStats } from "@/lib/temp-email-actions";

export async function GET() {
  try {
    const stats = await getTempEmailStats();

    return Response.json(stats, {
      headers: {
        "Cache-Control": "public, max-age=3600", // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error("Error in temp-email-stats API:", error);
    return Response.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}
