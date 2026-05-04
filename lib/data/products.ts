export interface SubProduct {
  slug: string;
  title: string;
  description: string;
  features: string[];
  applications: string[];
}

export interface Product {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  applications: string[];
  pdfUrl?: string;
  subProducts?: SubProduct[];
}

export const products: Product[] = [
  {
    slug: "heat-shrink-moulded-components",
    title: "Heat Shrink Moulded Components",
    shortTitle: "Moulded Components",
    description: "Premium heat shrinkable moulded components manufactured from high-quality cross-linked polyolefin material, compatible with most commonly used cable jackets.",
    longDescription: "AEX Heat Shrinkable Moulded Components are manufactured from high-quality cross-linked polyolefin material conforming to stringent military specifications. They provide superior electrical insulation, moisture sealing, and mechanical protection for cable terminations and joints.",
    image: "/images/resource/feature55.jpg",
    features: [
      "Cross-linked polyolefin construction",
      "2:1 shrink ratio (standard), 3:1 available",
      "Operating temperature: -55°C to +135°C",
      "Excellent UV, chemical, and moisture resistance",
      "Flame retardant to UL224",
      "Available in multiple colors",
    ],
    applications: [
      "Cable End Sealing Caps", "LV Breakouts", "Non-Tracking Breakouts",
      "Semi Conductive Breakouts", "Right Angle & Straight Boots",
      "Creepage Extension Skirts", "Anode Caps", "Pre-Insulated Pipe Seals",
    ],
    pdfUrl: "/pdfs/AEX_Heat_Shrinkable_End_Cap.pdf",
    subProducts: [
      {
        slug: "cable-end-caps",
        title: "Cable End Sealing Caps",
        description: "Heat shrinkable end caps provide reliable sealing of cable ends, preventing moisture ingress and protecting conductors during storage and installation.",
        features: ["Adhesive-lined for watertight seal", "2:1 and 3:1 shrink ratios", "Operating range: -55°C to +135°C", "Flame retardant", "Available in multiple sizes"],
        applications: ["Cable storage protection", "Temporary sealing", "Permanent end terminations", "Underground cable ends"],
      },
      {
        slug: "lv-breakouts",
        title: "Low Voltage Breakouts",
        description: "Heat shrinkable LV breakouts provide insulation and strain relief at the branching points of multi-core cables in low voltage applications.",
        features: ["Suitable for LV cables", "Flexible polyolefin material", "Excellent dielectric properties", "Easy heat gun installation", "Multiple leg configurations"],
        applications: ["LV cable branching", "Multi-core cable terminations", "Panel wiring", "Distribution boards"],
      },
      {
        slug: "non-tracking-breakouts",
        title: "Non-Tracking Breakouts",
        description: "Non-tracking heat shrinkable breakouts are specially formulated to resist electrical tracking and erosion in medium and high voltage applications.",
        features: ["Non-tracking material", "High voltage rated", "Track and erosion resistant", "UV stabilized", "Suitable for outdoor use"],
        applications: ["MV cable joints", "HV cable terminations", "Outdoor applications", "Substations"],
      },
      {
        slug: "semi-conductive-breakouts",
        title: "Semi Conductive Breakouts",
        description: "Semi-conductive heat shrinkable breakouts provide electric field control at cable termination points, reducing stress concentration.",
        features: ["Electric field stress control", "Semi-conductive layer", "Compatible with XLPE cables", "Operating voltage up to 36kV", "IEC 60502 compliant"],
        applications: ["MV/HV cable terminations", "Stress grading", "Underground cable systems", "Power stations"],
      },
      {
        slug: "right-angle-boots",
        title: "Right Angle & Straight Boots",
        description: "Heat shrinkable boots provide protection and insulation at connector entry points, available in right angle and straight configurations.",
        features: ["Right angle and straight versions", "Strain relief at connector entry", "Moisture and chemical resistant", "Multiple entry diameters", "Flexible installation"],
        applications: ["Connector backshells", "Panel entry protection", "Cable strain relief", "Military connectors"],
      },
      {
        slug: "creepage-extension-skirts",
        title: "Creepage Extension Skirts",
        description: "Creepage extension skirts increase the creepage distance of insulators and bushings, improving performance in polluted environments.",
        features: ["Increases creepage distance", "UV and weather resistant", "Silicone and polyolefin grades", "Easy field installation", "Rated for 11kV to 33kV"],
        applications: ["Insulator retrofit", "Bushing creepage extension", "Substation equipment", "Overhead line fittings"],
      },
      {
        slug: "anode-caps",
        title: "Heat Shrink Anode Caps",
        description: "Anode caps provide insulation and protection for sacrificial anodes used in cathodic protection systems.",
        features: ["Chemical resistant", "Watertight seal", "Adhesive-lined", "Operating range: -55°C to +90°C", "Compatible with all anode materials"],
        applications: ["Cathodic protection anodes", "Offshore structures", "Buried pipelines", "Marine applications"],
      },
      {
        slug: "pre-insulated-pipe-seals",
        title: "Pre-Insulated Pipe Seals",
        description: "Heat shrinkable sealing caps and sleeves for the end sealing of pre-insulated pipes used in district heating and cooling systems.",
        features: ["EN 489 compliant", "Adhesive-lined watertight seal", "Compatible with HDPE/LDPE jackets", "Up to 115°C continuous", "DN20 to DN500 sizes"],
        applications: ["District heating pipe ends", "Pre-insulated pipe sealing", "Pipe storage protection", "Field joint sealing"],
      },
    ],
  },
  {
    slug: "heat-shrink-tubing",
    title: "Heat Shrink Tubing",
    shortTitle: "Heat Shrink Tubing",
    description: "High-quality heat shrink tubes manufactured from cross-linked polyolefin material, available in thin wall, dual wall, medium & heavy wall configurations.",
    longDescription: "AEX Heat Shrink Tubing/Sleeves are manufactured from high quality cross-linked Polyolefin material conforming to stringent military specifications. They offer excellent electrical insulation, corrosion protection, and strain relief.",
    image: "/images/resource/feature52.jpg",
    features: [
      "Shrink ratios: 2:1 to 4:1", "Temperature range: -55°C to +135°C",
      "Excellent dielectric strength", "Flame retardant (UL 224 VW-1)",
      "Chemical and solvent resistant", "Longitudinally split versions available",
    ],
    applications: [
      "Medium & Heavy Wall Tubing", "Thin Wall Tubing", "Dual Wall Tubing",
      "Busbar Insulation Sleeves", "Non-Tracking Tubing", "Stress Control Tubing", "Double Layer Tubing",
    ],
    pdfUrl: "/pdfs/AEX_Medium_and_Heavy_Wall_Tube.pdf",
    subProducts: [
      {
        slug: "medium-heavy-wall",
        title: "Medium & Heavy Wall Tubing",
        description: "Medium and heavy wall heat shrink tubing provides robust insulation and mechanical protection for cables and connections requiring high-performance barriers.",
        features: ["Wall thickness: 0.8mm to 2.5mm", "3:1 shrink ratio", "Adhesive-lined dual wall version available", "Operating temp: -55°C to +135°C", "Flame retardant"],
        applications: ["Cable jointing", "Connector insulation", "Pipe protection", "Underground cables"],
      },
      {
        slug: "busbar-insulation-sleeves",
        title: "Busbar Insulation Sleeves",
        description: "Large diameter heat shrink tubing specifically designed for busbar insulation in switchgear and distribution panels.",
        features: ["Large diameter: up to 300mm", "High dielectric strength", "Flame retardant", "Low smoke halogen-free", "Track resistant"],
        applications: ["Busbar insulation", "Switchgear panels", "Distribution boards", "MV/LV busbars"],
      },
      {
        slug: "non-tracking-tubing",
        title: "Non-Tracking Tubing",
        description: "Non-tracking heat shrink tubing resists electrical tracking and erosion, ideal for outdoor and high-voltage insulation.",
        features: ["Non-tracking formulation", "UV stabilized", "Outdoor rated", "High voltage compatible", "Weather resistant"],
        applications: ["Outdoor HV terminations", "Overhead line insulation", "Substation applications"],
      },
      {
        slug: "thin-wall",
        title: "Thin Wall Tubing",
        description: "Thin wall heat shrink tubing offers lightweight insulation and identification for wires and small components.",
        features: ["2:1 shrink ratio", "Thin wall profile", "Available in many colors", "Operating temp: -55°C to +125°C", "UL approved"],
        applications: ["Wire identification", "Harness protection", "Small connector insulation", "Color coding"],
      },
      {
        slug: "dual-wall",
        title: "Dual Wall Tubing",
        description: "Dual wall heat shrink tubing with inner hot-melt adhesive provides a fully waterproof, strain-relieved seal.",
        features: ["Inner adhesive liner", "3:1 shrink ratio", "Watertight seal", "Strain relief", "Operating temp: -55°C to +110°C"],
        applications: ["Marine wiring", "Outdoor connections", "Underground cables", "Automotive wiring"],
      },
      {
        slug: "stress-control",
        title: "Stress Control Tubing",
        description: "Stress control tubing redistributes electric field stress at cable termination points, preventing premature insulation failure.",
        features: ["High permittivity material", "Voltage stress grading", "Compatible with 6kV to 36kV cables", "Easy installation", "IEC 60502 compliant"],
        applications: ["MV cable terminations", "Cable joints", "Stress grading", "Switchgear connections"],
      },
      {
        slug: "double-layer",
        title: "Double Layer Tubing",
        description: "Double layer heat shrink tubing combines an outer semi-conductive layer and inner insulating layer for field-graded terminations.",
        features: ["Dual layer construction", "Field grading capability", "Suitable for 11kV to 33kV", "One-piece installation", "Robust mechanical protection"],
        applications: ["HV cable terminations", "Stress grading", "Substation applications"],
      },
    ],
  },
  {
    slug: "power-cable-accessories",
    title: "Power Cable Accessories",
    shortTitle: "Cable Accessories",
    description: "Complete range of heat shrinkable cable jointing kits and termination kits for LV, MV, and HV power cables.",
    longDescription: "AEX Power Cable Accessories provide reliable and cost-effective solutions for joining and terminating power cables up to 33kV. Our kits include all necessary components for watertight, long-life installations.",
    image: "/images/resource/p3m5.jpg",
    features: [
      "Suitable for LV, MV cables up to 33kV", "Complete kits with all components",
      "Stress grading technology", "Compatible with XLPE and EPR cables",
      "Easy installation, no special tools required", "Rated for direct burial and submersible applications",
    ],
    applications: ["Cable Jointing Kits", "Termination Kits"],
    subProducts: [
      {
        slug: "cable-jointing-kits",
        title: "Cable Jointing Kits",
        description: "Complete heat shrink cable jointing kits for straight-through and branch joints on LV and MV power cables, including all components.",
        features: ["For LV and MV cables", "All components included", "Watertight seal", "IEC 60502 compliant", "Suitable for direct burial"],
        applications: ["Straight-through joints", "Branch joints", "Underground cables", "Armoured and unarmoured cables"],
      },
      {
        slug: "termination-kits",
        title: "Termination Kits",
        description: "Indoor and outdoor heat shrink termination kits for LV, MV, and HV power cables, providing reliable insulation and weatherproof sealing.",
        features: ["Indoor and outdoor versions", "Up to 36kV rated", "Pre-assembled components", "Non-tracking outer surface", "Easy installation"],
        applications: ["Indoor/outdoor terminations", "Switchgear connections", "Transformer terminations", "Substation installations"],
      },
    ],
  },
  {
    slug: "busbar-switchgear-insulation",
    title: "Busbar / Switchgear Insulation Products",
    shortTitle: "Busbar / Switchgear",
    description: "High-performance switchgear insulation products including busbar sleeves, boots, tapes, and adapters for electrical switchgear applications.",
    longDescription: "AEX Busbar and Switchgear Insulation Products offer exceptional electrical insulation for safety and efficiency in switchgear panels. Our range prevents electrical breakdown and ensures reliable equipment operation across voltage classes.",
    image: "/images/resource/p3m11.jpg",
    features: [
      "Dielectric strength > 20 kV/mm", "Flame retardant, self-extinguishing",
      "Operating temperature: -55°C to +125°C", "Low smoke, halogen-free options",
      "Track and erosion resistant", "IP65-rated with appropriate accessories",
    ],
    applications: [
      "Busbar Insulating Sleeves", "Polyolefin Busbar Covers", "PVC Busbar Covers",
      "Heat Shrink Tapes", "Insulated Adapters", "Right Angle & Straight Boots", "Bushing Boots",
    ],
    subProducts: [
      {
        slug: "busbar-insulating-sleeves",
        title: "Busbar Insulating Sleeves",
        description: "Heat shrink busbar insulating sleeves provide phase-to-phase and phase-to-earth insulation on copper and aluminium busbars.",
        features: ["Up to 300mm diameter", "High dielectric strength", "Flame retardant", "Color-coded versions (R/Y/B)", "Easy retrofit installation"],
        applications: ["Copper busbars", "Aluminium busbars", "LV/MV switchgear", "Distribution panels"],
      },
      {
        slug: "polyolefin-busbar-covers",
        title: "Polyolefin Busbar Covers",
        description: "Extruded polyolefin busbar covers for insulating and protecting rectangular and circular busbars in switchgear panels.",
        features: ["Flexible polyolefin material", "Snap-fit installation", "Phase color coded", "UV resistant", "Temperature rated to +105°C"],
        applications: ["Rectangular busbars", "Circular busbars", "Switchgear panels", "Distribution boards"],
      },
      {
        slug: "pvc-busbar-covers",
        title: "PVC Busbar Covers",
        description: "PVC busbar covers provide cost-effective insulation for busbars in control panels and distribution boards.",
        features: ["PVC material", "Economical solution", "Color-coded", "Easy clip installation", "Rated for LV applications"],
        applications: ["Control panels", "Distribution boards", "LV busbars", "Motor control centers"],
      },
      {
        slug: "heat-shrink-tapes",
        title: "Heat Shrink Tapes",
        description: "Heat shrink insulating tapes for wrapping and insulating irregular-shaped busbars, joints, and connections.",
        features: ["Self-supporting tape form", "Conforms to complex shapes", "Shrinks with heat gun", "High dielectric strength", "Flame retardant"],
        applications: ["Irregular busbar shapes", "Joint insulation", "Connector wrapping", "Field repair"],
      },
      {
        slug: "insulated-adapters",
        title: "Insulated Adapters / Termination Systems",
        description: "Insulated busbar adapter systems for connecting cables to busbars with integrated insulation and mechanical support.",
        features: ["Integrated insulation", "Mechanical support", "Multiple cable entry sizes", "Phase-segregated", "Tool-free installation"],
        applications: ["Busbar to cable connections", "Panel wiring", "Switchgear terminations"],
      },
      {
        slug: "right-angle-boots",
        title: "Right Angle & Straight Boots",
        description: "Insulating boots for busbar bend points and T-connections, available in right angle and straight configurations.",
        features: ["Right angle and straight options", "Pre-moulded shape", "Snap-fit design", "Flame retardant", "Multiple sizes"],
        applications: ["Busbar bends", "T-connections", "Panel corners", "Switchgear fittings"],
      },
      {
        slug: "bushing-boots",
        title: "Bushing Boots",
        description: "Heat shrinkable bushing boots insulate transformer and switchgear bushings, providing additional creepage distance.",
        features: ["Non-tracking material", "Increases creepage distance", "UV stabilized", "Outdoor rated", "Easy installation"],
        applications: ["Transformer bushings", "Switchgear bushings", "Outdoor installations", "Substation equipment"],
      },
    ],
  },
  {
    slug: "heat-shrink-wrap-around-sleeves",
    title: "Heat Shrink Wrap Around Sleeves",
    shortTitle: "Wrap Around Sleeves",
    description: "Innovative wrap-around heat shrink sleeves that can be installed on continuous runs without disconnection of connectors or equipment.",
    longDescription: "AEX Heat Shrink Wrap Around Sleeves are designed for retrofit applications where standard tubing cannot be used. These longitudinally split sleeves wrap around cables, pipes, or components and are secured with a closure strip before heat shrinking.",
    image: "/images/resource/slideee1.jpg",
    features: [
      "No need to disconnect cable ends", "Wraparound installation on continuous runs",
      "Moisture-barrier adhesive liner (dual-wall versions)", "Operating range: -55°C to +120°C",
      "Suitable for field repair and retrofit", "Available in corrosion-resistant grades",
    ],
    applications: ["Sleeves for Cables", "Sleeves for Pipes", "Sleeves for Poles"],
    pdfUrl: "/pdfs/AEX_Wraparound_Sleeve.pdf",
    subProducts: [
      {
        slug: "for-cables",
        title: "Wrap Around Sleeves for Cables",
        description: "Heat shrink wrap around sleeves for cable repair, insulation, and protection without removing connectors or equipment.",
        features: ["Longitudinally split design", "Adhesive-lined versions available", "Flame retardant", "2:1 shrink ratio", "Various widths and lengths"],
        applications: ["Cable repair", "Cable insulation retrofit", "Splice protection", "Underground cable joints"],
      },
      {
        slug: "for-pipes",
        title: "Wrap Around Sleeves for Pipes",
        description: "Heat shrink wrap around sleeves for protecting pipeline joints and fittings against corrosion and mechanical damage.",
        features: ["Corrosion-resistant adhesive liner", "Suitable for buried pipelines", "High peel strength", "EN 12068 compliant", "Field-applied"],
        applications: ["Pipeline joint protection", "Elbow and T-joint protection", "Field joint coating", "Corrosion protection"],
      },
      {
        slug: "for-poles",
        title: "Wrap Around Sleeves for Poles",
        description: "Heat shrink wrap around sleeves for protecting wooden, steel, and concrete utility poles at ground level from corrosion and decay.",
        features: ["Ground-line corrosion protection", "UV stabilized", "Mechanical impact resistant", "Adhesive-lined", "Easy field installation"],
        applications: ["Utility pole protection", "Street light poles", "Wooden pole preservation", "Steel pole corrosion control"],
      },
    ],
  },
  {
    slug: "asset-wildlife-protection",
    title: "Asset and Wildlife Protection Products",
    shortTitle: "Asset & Wildlife Protection",
    description: "Insulating covers and sleeves for overhead power lines, protecting both wildlife and electrical assets from hazards.",
    longDescription: "AEX Asset and Wildlife Protection Products provide effective insulation for bare overhead conductors, reducing the risk of electrocution to birds and animals, and protecting line workers. Made from UV-stabilized, weather-resistant polyolefin.",
    image: "/images/resource/p3m14.jpg",
    features: [
      "UV and weather stabilized", "Operating temperature: -55°C to +90°C",
      "Rated for 11kV, 22kV, 33kV lines", "Easy snap-on or wrap-around installation",
      "Flame retardant", "Animal and bird-friendly barrier",
    ],
    applications: ["Wildlife Protection Covers", "Overhead Line Covers", "Overhead Line Tubes", "Busbar Sleeves", "Busbar Tape"],
    subProducts: [
      {
        slug: "wildlife-protection-covers",
        title: "Wildlife Protection Covers",
        description: "Insulating covers designed to protect wildlife — particularly birds — from electrocution on overhead power line equipment.",
        features: ["UV stabilized polyolefin", "Snap-on installation", "11kV to 33kV rated", "Weather resistant", "Long service life"],
        applications: ["Transformer bushings", "Cross-arm insulation", "Jumper wire protection", "Substation structures"],
      },
      {
        slug: "overhead-line-covers",
        title: "Overhead Line Covers",
        description: "Insulating covers for bare overhead conductors providing phase-to-phase and phase-to-earth protection.",
        features: ["Snap-on or wrap design", "Rated for LV and MV lines", "UV resistant", "Easy installation without outage", "Long service life"],
        applications: ["Distribution lines", "Urban areas", "Wildlife corridors", "Fault-prone sections"],
      },
      {
        slug: "overhead-line-tubes",
        title: "Overhead Line Tubes",
        description: "Heat shrink insulating tubes for overhead conductors, providing a continuous insulating barrier along the conductor length.",
        features: ["Continuous conductor insulation", "UV stabilized", "Rated for 11kV, 22kV, 33kV", "Flame retardant", "Easy installation"],
        applications: ["Bare conductor insulation", "Fault reduction", "Wildlife protection corridors"],
      },
      {
        slug: "busbar-sleeves",
        title: "Busbar Sleeves",
        description: "Insulating sleeves for outdoor busbar connections at substations and switchyards, providing protection against animals and environmental hazards.",
        features: ["Outdoor rated", "UV stabilized", "Non-tracking material", "High creepage distance", "Retrofit installation"],
        applications: ["Outdoor substations", "Switchyard busbars", "Animal guard protection"],
      },
      {
        slug: "busbar-tape",
        title: "Busbar Tape",
        description: "Self-amalgamating and heat shrink tape for insulating busbar joints, bends, and irregular shapes in outdoor and indoor installations.",
        features: ["Conformable to irregular shapes", "High dielectric strength", "UV resistant", "Self-fusing grades available", "Quick field application"],
        applications: ["Busbar joints", "Irregular busbar shapes", "Field insulation repair"],
      },
    ],
  },
  {
    slug: "tapes-and-sealants",
    title: "Tapes and Sealants",
    shortTitle: "Tapes & Sealants",
    description: "High-performance self-fusing, mastic, and insulating tapes for cable, busbar, and pipe sealing applications.",
    longDescription: "AEX Tapes & Sealants include a comprehensive range of self-amalgamating, mastic, and busbar insulating tapes for various sealing, protection, and insulation requirements.",
    image: "/images/resource/Silicone-self-fusing-tape01.jpg",
    features: [
      "Self-fusing silicone rubber grades available", "Working temperature: -55°C to +150°C",
      "Excellent moisture and chemical resistance", "No adhesive — bonds to itself",
      "Conformable to irregular shapes", "Available in various widths and lengths",
    ],
    applications: ["Busbar Insulating Tapes", "Black Mastic Tapes", "Red Mastic Tapes", "Stress Control Mastic Tapes"],
    pdfUrl: "/pdfs/AEX_Heat_Shrink_Tape.pdf",
    subProducts: [
      {
        slug: "busbar-insulating-tapes",
        title: "Busbar Insulating Tapes",
        description: "Self-amalgamating and PVC insulating tapes for wrapping busbars and electrical connections to provide insulation and phase identification.",
        features: ["Self-amalgamating silicone version", "PVC version available", "Color-coded", "High dielectric strength", "Easy application"],
        applications: ["Busbar wrapping", "Phase identification", "Connection insulation", "Panel wiring"],
      },
      {
        slug: "black-mastic-tapes",
        title: "Black Mastic Tapes",
        description: "Black mastic sealant tapes used as moisture and void-filling sealants within heat shrink jointing and termination kits.",
        features: ["Excellent moisture seal", "Void filling capability", "Compatible with heat shrink", "Flexible at low temperatures", "Black color"],
        applications: ["Cable jointing kits", "Termination kits", "Moisture sealing", "Void filling"],
      },
      {
        slug: "red-mastic-tapes",
        title: "Red Mastic Tapes",
        description: "Red mastic sealant tapes provide high-temperature moisture sealing in cable jointing and termination applications.",
        features: ["High temperature resistance", "Excellent moisture seal", "Flexible and conformable", "Red color for identification", "Used in HV kits"],
        applications: ["HV cable kits", "High temperature applications", "Termination sealing"],
      },
      {
        slug: "stress-control-mastic-tapes",
        title: "Stress Control Mastic Tapes",
        description: "Semi-conductive mastic tapes for electric field stress grading at cable termination and joint interfaces.",
        features: ["Semi-conductive properties", "Field stress grading", "Suitable for MV/HV cables", "Conformable", "Used with termination kits"],
        applications: ["Cable termination stress grading", "MV/HV cable accessories", "Electric field control"],
      },
    ],
  },
  {
    slug: "other-products",
    title: "Other Products",
    shortTitle: "Other Products",
    description: "Additional AEX products including pipeline corrosion protection, metal components, pole protection, and other specialty heat shrink solutions.",
    longDescription: "AEX offers a range of specialty products beyond our core categories. This includes pipeline and cathodic protection products, metal and brass fittings, pole protection solutions, and pre-insulated pipe management systems — all backed by our 30+ years of engineering expertise.",
    image: "/images/resource/project-2.jpg",
    features: [
      "Pipeline corrosion protection", "Cathodic protection accessories",
      "Metal and brass fittings", "Pole protection products",
      "Pre-insulated pipe management", "Custom engineered solutions",
    ],
    applications: [
      "Pipeline joint protection", "Cathodic protection", "Metal components",
      "Pole caps and sleeves", "Pre-insulated pipe seals",
    ],
  },
];

// Legacy slug aliases for backward compatibility
const slugAliases: Record<string, string> = {
  "heat-shrink-tubes": "heat-shrink-tubing",
  "switchgear-insulation-products": "busbar-switchgear-insulation",
  "overhead-line-covers": "asset-wildlife-protection",
  "heat-shrinkable-wrap-around-sleeves": "heat-shrink-wrap-around-sleeves",
  "pre-insulated-pipe-management": "other-products",
  "pole-protection-products": "other-products",
  "metal-components": "other-products",
  "pipeline": "other-products",
};

export function getProductBySlug(slug: string): Product | undefined {
  const resolved = slugAliases[slug] ?? slug;
  return products.find((p) => p.slug === resolved);
}

export function getProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

export function getSubProductBySlug(categorySlug: string, subSlug: string): SubProduct | undefined {
  const product = getProductBySlug(categorySlug);
  return product?.subProducts?.find((s) => s.slug === subSlug);
}

export function getAllSubProductParams(): { category: string; sub: string }[] {
  return products.flatMap((p) =>
    (p.subProducts ?? []).map((s) => ({ category: p.slug, sub: s.slug }))
  );
}

// Featured products shown on the home page
export const featuredProducts = products.slice(0, 6);

/**
 * Searches for a product or sub-product by its title and returns its URL.
 * Used to link industry product strings to their respective pages.
 */
export function getProductUrlByName(name: string): string | null {
  const searchName = name.toLowerCase().trim();

  // Try exact matches first
  for (const p of products) {
    if (p.title.toLowerCase() === searchName || p.shortTitle.toLowerCase() === searchName) {
      return `/products/${p.slug}`;
    }
    if (p.subProducts) {
      for (const s of p.subProducts) {
        if (s.title.toLowerCase() === searchName) {
          return resolveProductUrl(p.slug, s.slug);
        }
      }
    }
  }

  // Try partial/fuzzy matches (e.g. "Heat Shrink Cable End Sealing Caps" matching "Cable End Sealing Caps")
  // We remove common prefixes like "Heat Shrink", "Heat Shrinkable", etc.
  const normalized = searchName.replace(/^heat shrink(able)?\s+/i, "").replace(/[-\s]/g, "");

  for (const p of products) {
    const pTitle = p.title.toLowerCase().replace(/[-\s]/g, "");
    if (pTitle.includes(normalized) || normalized.includes(pTitle)) {
      return `/products/${p.slug}`;
    }
    if (p.subProducts) {
      for (const s of p.subProducts) {
        const sTitle = s.title.toLowerCase().replace(/[-\s]/g, "");
        if (sTitle.includes(normalized) || normalized.includes(sTitle)) {
          return resolveProductUrl(p.slug, s.slug);
        }
      }
    }
  }

  return null;
}

/**
 * Resolves a product or subproduct URL to an industry URL if a mapping exists,
 * otherwise returns the standard /products/ URL.
 */
export function resolveProductUrl(categorySlug: string, subSlug?: string): string {
  // Asset & Wildlife Protection mapping
  if (categorySlug === "asset-wildlife-protection" && subSlug) {
    return `/products/asset-and-wildlife-protection/${subSlug}`;
  }

  // District Heating & Cooling mapping
  if (categorySlug === "heat-shrink-moulded-components" && subSlug === "pre-insulated-pipe-seals") {
    return `/products/heat-shrink-moulded-components/pre-insulated-pipe-seals`;
  }

  // Utility Pole Industry mapping
  if (categorySlug === "heat-shrink-moulded-components" && subSlug === "cable-end-caps") {
    return `/products/heat-shrink-moulded-components/cable-end-caps`;
  }
  if (categorySlug === "heat-shrink-wrap-around-sleeves" && subSlug === "for-poles") {
    return `/products/heat-shrink-wrap-around-sleeves/for-poles`;
  }

  // Fallback to standard product URLs
  if (subSlug) {
    return `/products/${categorySlug}/${subSlug}`;
  }
  return `/products/${categorySlug}`;
}
