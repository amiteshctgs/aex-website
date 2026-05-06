import { NextResponse } from "next/server";
import { catalogueService } from "@/services/pdf/catalogueService";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query") || undefined;
    const category = (searchParams.get("category") as any) || undefined;
    const subCategory = (searchParams.get("subCategory") as any) || undefined;
    const sort = (searchParams.get("sort") as any) || "latest";
    const tags = searchParams.get("tags")?.split(",") || undefined;

    const result = await catalogueService.getFilteredCatalogues({
      query,
      category,
      subCategory,
      sort,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching catalogues:", error);
    return NextResponse.json(
      { error: "Failed to fetch catalogues" },
      { status: 500 }
    );
  }
}
