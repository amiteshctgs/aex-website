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
}

export const products: Product[] = [
  {
    slug: "heat-shrink-moulded-components",
    title: "Heat Shrinkable Moulded Components",
    shortTitle: "Moulded Components",
    description:
      "Premium heat shrinkable moulded components manufactured from high-quality cross-linked polyolefin material, compatible with most commonly used cable jackets.",
    longDescription:
      "AEX Heat Shrinkable Moulded Components are manufactured from high-quality cross-linked polyolefin material conforming to stringent military specifications. They provide superior electrical insulation, moisture sealing, and mechanical protection for cable terminations and joints. Compatible with most commonly used cable jackets, these products are designed for easy installation using standard hot air guns.",
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
      "Heat Shrink Cable End Sealing Caps",
      "Heat Shrink Low Voltage Breakouts",
      "Heat Shrink Non-Tracking Breakouts",
      "Semi Conductive Breakouts",
      "Heat Shrink Right Angle & Straight Boots",
      "Creepage Extension Skirts",
      "Heat Shrink Pre-Insulated Pipe Seals",
    ],
    pdfUrl: "/pdfs/AEX_Heat_Shrinkable_End_Cap.pdf",
  },
  {
    slug: "heat-shrink-tubes",
    title: "Heat Shrink Tubing / Sleeves",
    shortTitle: "Heat Shrink Tubing",
    description:
      "High-quality heat shrink tubes manufactured from cross-linked polyolefin material, available in thin wall, dual wall, medium & heavy wall configurations.",
    longDescription:
      "AEX Heat Shrink Tubes/Sleeves are manufactured from high quality cross-linked Polyolefin material conforming to stringent military specifications. They offer excellent electrical insulation, corrosion protection, and strain relief. Our tubing range covers thin wall, dual wall, medium wall, and heavy wall configurations for every application.",
    image: "/images/resource/feature52.jpg",
    features: [
      "Ratio: 2:1 to 4:1 shrink ratios available",
      "Temperature range: -55°C to +135°C",
      "Excellent dielectric strength",
      "Flame retardant (UL 224 VW-1)",
      "Chemical and solvent resistant",
      "Longitudinally split versions available",
    ],
    applications: [
      "Heat Shrink Medium & Heavy Wall Tubing",
      "Heat Shrink Thin Wall Tubing",
      "Heat Shrink Dual Wall Tubing",
      "Heat Shrink Busbar Insulation Sleeves",
      "Heat Shrink Non-Tracking Tubing",
      "Heat Shrink Stress Control Tubing",
      "Heat Shrink Double Layer Tubing",
    ],
    pdfUrl: "/pdfs/AEX_Medium_and_Heavy_Wall_Tube.pdf",
  },
  {
    slug: "power-cable-accessories",
    title: "Power Cable Accessories",
    shortTitle: "Cable Accessories",
    description:
      "Complete range of heat shrinkable cable jointing kits and termination kits for LV, MV, and HV power cables.",
    longDescription:
      "AEX Power Cable Accessories provide reliable and cost-effective solutions for joining and terminating power cables up to 33kV. Our kits include all necessary components including stress control tubing, insulating tubes, semi-conductive materials, and sealing compounds for watertight, long-life installations.",
    image: "/images/resource/p3m5.jpg",
    features: [
      "Suitable for LV, MV cables up to 33kV",
      "Complete kits with all components",
      "Stress grading technology",
      "Compatible with XLPE and EPR cables",
      "Easy installation, no special tools required",
      "Rated for direct burial and submersible applications",
    ],
    applications: [
      "Heat Shrink Cable Jointing Kit",
      "Heat Shrink Termination Kit",
    ],
  },
  {
    slug: "switchgear-insulation-products",
    title: "Switchgear Insulation Products",
    shortTitle: "Switchgear Insulation",
    description:
      "High-performance switchgear insulation products including busbar sleeves, boots, tapes, and glands for electrical switchgear applications.",
    longDescription:
      "AEX Switchgear Insulation Products offer exceptional electrical insulation for safety and efficiency in switchgear panels. Our range prevents electrical breakdown and ensures reliable equipment operation across voltage classes. Products are designed for easy retrofit installation on existing busbars.",
    image: "/images/resource/p3m11.jpg",
    features: [
      "Dielectric strength > 20 kV/mm",
      "Flame retardant, self-extinguishing",
      "Operating temperature: -55°C to +125°C",
      "Low smoke, halogen-free options",
      "Track and erosion resistant",
      "IP65-rated with appropriate accessories",
    ],
    applications: [
      "Heat Shrink Busbar Insulating Sleeves",
      "Polyolefin Busbar Insulating Boots",
      "Heat Shrink Tapes",
      "Bushing Boots",
      "Heat Shrink Glands",
    ],
  },
  {
    slug: "heat-shrinkable-wrap-around-sleeves",
    title: "Heat Shrink Wrap Around Sleeves",
    shortTitle: "Wrap Around Sleeves",
    description:
      "Innovative wrap-around heat shrink sleeves that can be installed on continuous runs without disconnection of connectors or equipment.",
    longDescription:
      "AEX Heat Shrink Wrap Around Sleeves are designed for retrofit applications where standard tubing cannot be used. These longitudinally split sleeves wrap around cables, pipes, or components and are secured with a closure strip before heat shrinking. Ideal for pipeline corrosion protection and cable repair.",
    image: "/images/resource/slideee1.jpg",
    features: [
      "No need to disconnect cable ends",
      "Wraparound installation on continuous runs",
      "Moisture-barrier adhesive liner (dual-wall versions)",
      "Operating range: -55°C to +120°C",
      "Suitable for field repair and retrofit",
      "Available in corrosion-resistant grades",
    ],
    applications: [
      "Heat Shrink Wrap Around Sleeves",
    ],
    pdfUrl: "/pdfs/AEX_Wraparound_Sleeve.pdf",
  },
  {
    slug: "overhead-line-covers",
    title: "Overhead Line Covers & Tubes",
    shortTitle: "Overhead Line",
    description:
      "Safety covers and insulating tubes for overhead power lines, protecting both wildlife and personnel from electrical hazards.",
    longDescription:
      "AEX Overhead Line Covers and Tubes provide effective insulation for bare overhead conductors, reducing the risk of electrocution to birds and animals, and protecting line workers. Made from UV-stabilized, weather-resistant polyolefin, they are easy to install with a hot air gun.",
    image: "/images/resource/p3m14.jpg",
    features: [
      "UV and weather stabilized",
      "Operating temperature: -55°C to +90°C",
      "Rated for 11kV, 22kV, 33kV lines",
      "Easy snap-on or wrap-around installation",
      "Flame retardant",
      "Animal and bird-friendly barrier",
    ],
    applications: [
      "Overhead Line Covers",
      "Overhead Line Tube",
    ],
  },
  {
    slug: "tapes-and-sealants",
    title: "Tapes & Sealants",
    shortTitle: "Tapes & Sealants",
    description:
      "High-performance self-fusing, mastic, and insulating tapes for cable, busbar, and pipe sealing applications.",
    longDescription:
      "AEX Tapes & Sealants include a comprehensive range of self-amalgamating, mastic, and busbar insulating tapes for various sealing, protection, and insulation requirements. Our Mastic Tape is widely used as sealant in heat shrink kits for watertight sealing.",
    image: "/images/resource/Silicone-self-fusing-tape01.jpg",
    features: [
      "Self-fusing silicone rubber grades available",
      "Working temperature: -55°C to +150°C",
      "Excellent moisture and chemical resistance",
      "No adhesive — bonds to itself",
      "Conformable to irregular shapes",
      "Available in various widths and lengths",
    ],
    applications: [
      "Heat Shrink Busbar Insulating Tapes",
      "Non-Shrinkable Tapes",
      "Mastic Tapes",
    ],
    pdfUrl: "/pdfs/AEX_Heat_Shrink_Tape.pdf",
  },
  {
    slug: "pre-insulated-pipe-management",
    title: "Pre-Insulated Pipe Management Products",
    shortTitle: "Pipe Management",
    description:
      "Complete range of heat shrinkable products for pre-insulated pipe systems used in district heating and cooling networks.",
    longDescription:
      "AEX Pre-Insulated Pipe Management Products provide robust corrosion protection and watertight sealing for the joints of pre-insulated pipes used in district heating and cooling systems. Our products are compatible with HDPE and LDPE outer jackets and meet EN 489 standards.",
    image: "/images/resource/feature54.png",
    features: [
      "Suitable for district heating & cooling pipes",
      "Compatible with HDPE and LDPE outer jackets",
      "Adhesive-lined, fully waterproof seal",
      "Operating temperature up to +115°C continuous",
      "Meets EN 489 standard",
      "Various sizes for DN20 to DN500 pipes",
    ],
    applications: [
      "Heat Shrink Pre-Insulated Pipe Seals",
      "Heat Shrink LDPE Tubing",
      "Heat Shrink HDPE Tubing",
      "Heat Shrink Sleeves",
      "Mastic Tapes",
    ],
    pdfUrl: "/pdfs/AEX_Pre-insulated_Pipe_Sealing_Cap.pdf",
  },
  {
    slug: "pole-protection-products",
    title: "Pole Protection Products",
    shortTitle: "Pole Protection",
    description:
      "Heat shrinkable solutions for protecting steel and timber poles from corrosion, weathering, and ground-line deterioration.",
    longDescription:
      "AEX Pole Protection Products prevent corrosion and ground-line deterioration of steel and timber utility poles. Our heat shrinkable pole caps, tubing, and wrap sleeves provide a long-lasting physical barrier against moisture, soil chemicals, and mechanical damage.",
    image: "/images/resource/p3m20.jpg",
    features: [
      "Protects against corrosion and moisture",
      "Ground-line protection from soil chemicals",
      "Mechanical impact resistance",
      "UV stabilized for outdoor use",
      "Easy installation with standard heat gun",
      "Compatible with steel, wood, and concrete poles",
    ],
    applications: [
      "Heat Shrink Pole Caps",
      "Heat Shrink Tubing",
      "Heat Shrink Wrap Sleeves",
    ],
  },
  {
    slug: "metal-components",
    title: "Metal Components",
    shortTitle: "Metal Components",
    description:
      "High-precision metal and brass fittings designed for use with heat shrink cable accessories and termination kits.",
    longDescription:
      "AEX Metal Components include a range of precision-machined brass and aluminium fittings, lugs, connectors, and accessories that complement our heat shrink product range. Manufactured to international standards for reliability and long service life.",
    image: "/images/resource/project-2.jpg",
    features: [
      "Manufactured to IEC and BS standards",
      "Electrolytically tinned for corrosion resistance",
      "High conductivity copper and brass alloys",
      "Available in various cable cross-section ranges",
      "Custom configurations available",
      "RoHS compliant",
    ],
    applications: [
      "Cable compression lugs",
      "Mechanical connectors",
      "Earth terminals",
      "Brass cable glands",
    ],
  },
  {
    slug: "pipeline",
    title: "Pipeline / Corrosion / Cathodic Protection Products",
    shortTitle: "Pipeline Protection",
    description:
      "Pipeline corrosion protection products guard against deterioration, including cathodic protection for long-lasting defense.",
    longDescription:
      "AEX Pipeline & Cathodic Protection Products provide comprehensive anti-corrosion protection for buried and submerged pipelines. Our range includes heat shrinkable joint sleeves, end seals, and field-applied coatings that meet international standards for pipeline corrosion control.",
    image: "/images/resource/feature54.png",
    features: [
      "Meets DIN 30672, AWWA C-214 standards",
      "Adhesive-lined for watertight seal",
      "Suitable for gas, water, and oil pipelines",
      "Field-applied, no special equipment needed",
      "Operating temperature: -20°C to +80°C",
      "Compatible with cathodic protection systems",
    ],
    applications: [
      "Pipeline joint protection",
      "Corrosion protection sleeves",
      "Field joint coating",
      "Cathodic protection accessories",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

// Featured products shown on the home page
export const featuredProducts = products.slice(0, 6);
