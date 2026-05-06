import { NextResponse } from "next/server";
import { DownloadTrackPayload } from "@/types/pdf";

export async function POST(request: Request) {
  try {
    const payload: DownloadTrackPayload = await request.json();

    // Here we would normally save this to a database
    // For now, we'll just log it to simulate backend processing
    console.log(`[TRACKING] Download recorded:`, {
      slug: payload.slug,
      timestamp: payload.timestamp,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing tracking data:", error);
    return NextResponse.json(
      { error: "Failed to process tracking data" },
      { status: 500 }
    );
  }
}
