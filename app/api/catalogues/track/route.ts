import { NextResponse } from "next/server";
import { TrackingPayload } from "@/types/pdf";

export async function POST(request: Request) {
  try {
    const payload: TrackingPayload = await request.json();

    // Here we would normally save this to a database
    // For now, we'll just log it to simulate backend processing
    console.log(`[TRACKING] Download recorded:`, {
      catalogueId: payload.catalogueId,
      timestamp: payload.timestamp,
      source: payload.source,
      hasLeadData: !!payload.leadData
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
