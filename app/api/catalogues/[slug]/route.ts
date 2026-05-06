import { NextResponse } from "next/server";
import { catalogueService } from "@/services/pdf/catalogueService";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const catalogue = await catalogueService.getCatalogueBySlug(slug);

    if (!catalogue) {
      return NextResponse.json(
        { error: "Catalogue not found" },
        { status: 404 }
      );
    }

    // Get related catalogues
    const related = await catalogueService.getRelatedCatalogues(slug);

    return NextResponse.json({
      catalogue,
      related,
    });
  } catch (error) {
    console.error("Error fetching catalogue details:", error);
    return NextResponse.json(
      { error: "Failed to fetch catalogue details" },
      { status: 500 }
    );
  }
}
