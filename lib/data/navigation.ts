export interface NavSubItem {
  label: string;
  href: string;
}

export interface NavDropdownItem {
  label: string;
  href: string;
  children?: NavSubItem[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavDropdownItem[];
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About AEX", href: "/about" },
      { label: "Our Facility", href: "/facility" },
      { label: "Our Strength & Values", href: "/strength" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "Heat Shrink Moulded Components",
        href: "/products/heat-shrink-moulded-components",
        children: [
          { label: "Cable End Sealing Caps", href: "/products/heat-shrink-moulded-components" },
          { label: "LV Breakouts", href: "/products/heat-shrink-moulded-components" },
          { label: "Non-Tracking Breakouts", href: "/products/heat-shrink-moulded-components" },
          { label: "Semi Conductive Breakouts", href: "/products/heat-shrink-moulded-components" },
          { label: "Right Angle & Straight Boots", href: "/products/heat-shrink-moulded-components" },
          { label: "Creepage Extension Skirts", href: "/products/heat-shrink-moulded-components" },
          { label: "Heat Shrink Anode Caps", href: "/products/heat-shrink-moulded-components" },
          { label: "Pre-Insulated Pipe Seals", href: "/products/heat-shrink-moulded-components" },
        ],
      },
      {
        label: "Heat Shrink Tubing",
        href: "/products/heat-shrink-tubes",
        children: [
          { label: "Medium & Heavy Wall Tubing", href: "/products/heat-shrink-tubes" },
          { label: "Thin Wall Tubing", href: "/products/heat-shrink-tubes" },
          { label: "Dual Wall Tubing", href: "/products/heat-shrink-tubes" },
          { label: "Busbar Insulation Sleeves", href: "/products/heat-shrink-tubes" },
          { label: "Non-Tracking Tubing", href: "/products/heat-shrink-tubes" },
          { label: "Stress Control Tubing", href: "/products/heat-shrink-tubes" },
          { label: "Double Layer Tubing", href: "/products/heat-shrink-tubes" },
        ],
      },
      {
        label: "Power Cable Accessories",
        href: "/products/power-cable-accessories",
        children: [
          { label: "Cable Jointing Kits", href: "/products/power-cable-accessories" },
          { label: "Termination Kits", href: "/products/power-cable-accessories" },
        ],
      },
      {
        label: "Busbar / Switchgear Insulation",
        href: "/products/switchgear-insulation-products",
        children: [
          { label: "Polyolefin Busbar Insulating Covers", href: "/products/switchgear-insulation-products" },
          { label: "PVC Busbar Insulation Covers", href: "/products/switchgear-insulation-products" },
          { label: "Heat Shrink Tapes", href: "/products/switchgear-insulation-products" },
          { label: "Insulated Adapters", href: "/products/switchgear-insulation-products" },
        ],
      },
      {
        label: "Heat Shrink Wrap Around Sleeves",
        href: "/products/heat-shrinkable-wrap-around-sleeves",
        children: [
          { label: "Sleeves for Cables", href: "/products/heat-shrinkable-wrap-around-sleeves" },
          { label: "Sleeves for Pipes", href: "/products/heat-shrinkable-wrap-around-sleeves" },
          { label: "Sleeves for Rolls", href: "/products/heat-shrinkable-wrap-around-sleeves" },
        ],
      },
      {
        label: "Asset & Wildlife Protection",
        href: "/products/overhead-line-covers",
        children: [
          { label: "Wildlife Protection Covers", href: "/products/overhead-line-covers" },
          { label: "Overhead Line Covers", href: "/products/overhead-line-covers" },
          { label: "Overhead Line Tubes", href: "/products/overhead-line-covers" },
          { label: "Busbar Tape", href: "/products/overhead-line-covers" },
        ],
      },
      {
        label: "Tapes & Sealants",
        href: "/products/tapes-and-sealants",
        children: [
          { label: "Busbar Insulating Tapes", href: "/products/tapes-and-sealants" },
          { label: "Black Mastic Tapes", href: "/products/tapes-and-sealants" },
          { label: "Red Mastic Tapes", href: "/products/tapes-and-sealants" },
          { label: "Stress Control Mastic Tapes", href: "/products/tapes-and-sealants" },
        ],
      },
      {
        label: "Pre-Insulated Pipe Management",
        href: "/products/pre-insulated-pipe-management",
        children: [
          { label: "Pre-Insulated Pipe Seals", href: "/products/pre-insulated-pipe-management" },
          { label: "Heat Shrink LDPE Tubing", href: "/products/pre-insulated-pipe-management" },
          { label: "Heat Shrink HDPE Tubing", href: "/products/pre-insulated-pipe-management" },
          { label: "Mastic Tapes", href: "/products/pre-insulated-pipe-management" },
        ],
      },
      {
        label: "Pole Protection Products",
        href: "/products/pole-protection-products",
        children: [
          { label: "Heat Shrink Pole Caps", href: "/products/pole-protection-products" },
          { label: "Pole Protection Sleeves", href: "/products/pole-protection-products" },
        ],
      },
      {
        label: "Metal & Brass Fittings",
        href: "/products/metal-components",
        children: [
          { label: "Metal Components", href: "/products/metal-components" },
          { label: "Brass Fittings", href: "/products/metal-components" },
        ],
      },
      {
        label: "Pipeline / Corrosion Protection",
        href: "/products/pipeline",
        children: [
          { label: "Pipeline Joint Protection", href: "/products/pipeline" },
          { label: "Corrosion Protection", href: "/products/pipeline" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "#",
    children: [
      { label: "Cable Industry", href: "/industries/cable-industry" },
      { label: "Switchgear Industry", href: "/industries/switchgear-industry" },
      { label: "Transformer & Busduct Industry", href: "/industries/transformer-and-busduct-industry" },
      { label: "Electric Utilities (Power T&D)", href: "/industries/power-transmission-and-distribution" },
      { label: "Asset & Wildlife Protection", href: "/industries/asset-and-wildlife-protection" },
      { label: "Renewable Energy — Wind", href: "/industries/wind-energy-solutions" },
      { label: "Renewable Energy — Solar", href: "/industries/solar-energy-solutions" },
      { label: "Cable Joints & Terminations Kit", href: "/industries/kit-components-cable-joints" },
      { label: "Pre-Insulated Pipe / District Heating", href: "/industries/district-heating-cooling" },
      { label: "Utility Pole / Street Pole", href: "/industries/utility-pole-industry" },
      { label: "Oil & Gas / Corrosion Protection", href: "/industries/oil-gas-corrosion-protection" },
      { label: "Cathodic Protection", href: "/industries/cathodic-protection" },
      { label: "Automobile / Wire Harness", href: "/industries/automobile-wire-harness" },
      { label: "Telecom Industry", href: "/industries/telecom-industry" },
    ],
  },
  {
    label: "Company",
    href: "#",
    children: [
      { label: "Certificate — ISO 9001", href: "/certificates/iso-9001" },
      { label: "Certificate — ISO 14001", href: "/certificates/iso-14001" },
      { label: "Certificate — ISO 45001", href: "/certificates/iso-45001" },
      { label: "Downloads & Catalogues", href: "/downloads" },
      { label: "Events & News", href: "/news" },
    ],
  },
  { label: "Enquiry", href: "/enquiry" },
  { label: "Contact", href: "/contact" },
];

/** Footer quick links */
export const footerLinks = [
  { label: "About AEX", href: "/about" },
  { label: "Our Facility", href: "/facility" },
  { label: "Our Strength & Values", href: "/strength" },
  { label: "Products", href: "/products" },
  { label: "Downloads", href: "/downloads" },
  { label: "Events & News", href: "/news" },
  { label: "Enquiry", href: "/enquiry" },
  { label: "Contact Us", href: "/contact" },
];
