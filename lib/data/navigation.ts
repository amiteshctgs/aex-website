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
  { label: "HOME", href: "/" },
  {
    label: "PRODUCTS",
    href: "/products",
    children: [
      {
        label: "Heat Shrink Moulded Components",
        href: "/products/heat-shrink-moulded-components",
        children: [
          { label: "Cable End Sealing Caps", href: "/products/heat-shrink-moulded-components/cable-end-caps" },
          { label: "Low Voltage Breakouts", href: "/products/heat-shrink-moulded-components/lv-breakouts" },
          { label: "Non-Tracking Breakouts", href: "/products/heat-shrink-moulded-components/non-tracking-breakouts" },
          { label: "Semi Conductive Breakouts", href: "/products/heat-shrink-moulded-components/semi-conductive-breakouts" },
          { label: "Right Angle & Straight Boots", href: "/products/heat-shrink-moulded-components/right-angle-boots" },
          { label: "Creepage Extension Skirts", href: "/products/heat-shrink-moulded-components/creepage-extension-skirts" },
          { label: "Anode Caps", href: "/products/heat-shrink-moulded-components/anode-caps" },
          { label: "Pre-Insulated Pipe Seals", href: "/products/heat-shrink-moulded-components/pre-insulated-pipe-seals" },
        ],
      },
      {
        label: "Heat Shrink Tubing",
        href: "/products/heat-shrink-tubing",
        children: [
          { label: "Medium & Heavy Wall Tubing", href: "/products/heat-shrink-tubing/medium-heavy-wall" },
          { label: "Busbar Insulation Sleeves", href: "/products/heat-shrink-tubing/busbar-insulation-sleeves" },
          { label: "Non-Tracking Tubing", href: "/products/heat-shrink-tubing/non-tracking-tubing" },
          { label: "Thin Wall Tubing", href: "/products/heat-shrink-tubing/thin-wall" },
          { label: "Dual Wall Tubing", href: "/products/heat-shrink-tubing/dual-wall" },
          { label: "Stress Control Tubing", href: "/products/heat-shrink-tubing/stress-control" },
          { label: "Double Layer Tubing", href: "/products/heat-shrink-tubing/double-layer" },
        ],
      },
      {
        label: "Power Cable Accessories",
        href: "/products/power-cable-accessories",
        children: [
          { label: "Cable Jointing Kits", href: "/products/power-cable-accessories/cable-jointing-kits" },
          { label: "Termination Kits", href: "/products/power-cable-accessories/termination-kits" },
        ],
      },
      {
        label: "Busbar / Switchgear Insulation",
        href: "/products/busbar-switchgear-insulation",
        children: [
          { label: "Busbar Insulating Sleeves", href: "/products/busbar-switchgear-insulation/busbar-insulating-sleeves" },
          { label: "Polyolefin Busbar Covers", href: "/products/busbar-switchgear-insulation/polyolefin-busbar-covers" },
          { label: "PVC Busbar Covers", href: "/products/busbar-switchgear-insulation/pvc-busbar-covers" },
          { label: "Heat Shrink Tapes", href: "/products/busbar-switchgear-insulation/heat-shrink-tapes" },
          { label: "Insulated Adapters", href: "/products/busbar-switchgear-insulation/insulated-adapters" },
          { label: "Right Angle & Straight Boots", href: "/products/busbar-switchgear-insulation/right-angle-boots" },
          { label: "Bushing Boots", href: "/products/busbar-switchgear-insulation/bushing-boots" },
        ],
      },
      {
        label: "Heat Shrink Wrap Around Sleeves",
        href: "/products/heat-shrink-wrap-around-sleeves",
        children: [
          { label: "Sleeves for Cables", href: "/products/heat-shrink-wrap-around-sleeves/for-cables" },
          { label: "Sleeves for Pipes", href: "/products/heat-shrink-wrap-around-sleeves/for-pipes" },
          { label: "Sleeves for Poles", href: "/products/heat-shrink-wrap-around-sleeves/for-poles" },
        ],
      },
      {
        label: "Asset & Wildlife Protection",
        href: "/products/asset-and-wildlife-protection",
        children: [
          { label: "Wildlife Protection Covers", href: "/products/asset-and-wildlife-protection/wildlife-protection-covers" },
          { label: "Overhead Line Covers", href: "/products/asset-and-wildlife-protection/overhead-line-covers" },
          { label: "Overhead Line Tubes", href: "/products/asset-and-wildlife-protection/overhead-line-tubes" },
          { label: "Busbar Sleeves", href: "/products/asset-and-wildlife-protection/busbar-sleeves" },
          { label: "Busbar Tape", href: "/products/asset-and-wildlife-protection/busbar-tape" },
        ],
      },
      {
        label: "Tapes & Sealants",
        href: "/products/tapes-and-sealants",
        children: [
          { label: "Busbar Insulating Tapes", href: "/products/tapes-and-sealants/busbar-insulating-tapes" },
          { label: "Black Mastic Tapes", href: "/products/tapes-and-sealants/black-mastic-tapes" },
          { label: "Red Mastic Tapes", href: "/products/tapes-and-sealants/red-mastic-tapes" },
          { label: "Stress Control Mastic Tapes", href: "/products/tapes-and-sealants/stress-control-mastic-tapes" },
        ],
      },
      {
        label: "Other Products",
        href: "/products/other-products",
      },
    ],
  },

  {
    label: "SOLUTIONS",
    href: "#",
    children: [
      { label: "Cable Industry", href: "/industries/cable-industry" },
      { label: "Switchgear Industry", href: "/industries/switchgear-industry" },
      { label: "Transformer & Busduct Industry", href: "/industries/transformer-and-busduct-industry" },
      { label: "Electric Utilities (Power T&D)", href: "/industries/power-transmission-and-distribution" },
      {
        label: "Asset & Wildlife Protection",
        href: "/industries/asset-and-wildlife-protection",
        children: [
          { label: "Wildlife Protection Covers", href: "/industries/asset-and-wildlife-protection/wildlife-protection-covers" },
          { label: "Overhead Line Covers", href: "/industries/asset-and-wildlife-protection/overhead-line-covers" },
          { label: "Overhead Line Tubes", href: "/industries/asset-and-wildlife-protection/overhead-line-tubes" },
          { label: "Busbar Sleeves", href: "/industries/asset-and-wildlife-protection/busbar-sleeves" },
          { label: "Heat Shrink Tape", href: "/industries/asset-and-wildlife-protection/busbar-tape" },
        ],
      },
      { label: "Renewable Energy — Wind", href: "/industries/wind-energy-solutions" },
      { label: "Renewable Energy — Solar", href: "/industries/solar-energy-solutions" },
      { label: "Cable Joints & Terminations Kit", href: "/industries/kit-components-cable-joints" },
      {
        label: "Pre-Insulated Pipe / District Heating",
        href: "/industries/district-heating-cooling",
        children: [
          { label: "Heat Shrink Pre-Insulated Pipe Seals", href: "/products/heat-shrink-moulded-components/pre-insulated-pipe-seals" },
          { label: "Heat Shrink Tubing", href: "/industries/district-heating-cooling/heat-shrink-tubing" },
          { label: "Heat Shrink Wrap Around Sleeves", href: "/industries/district-heating-cooling/heat-shrink-wrap-around-sleeves" },
          { label: "Mastic Tapes", href: "/industries/district-heating-cooling/mastic-tapes" },
        ],
      },
      {
        label: "Utility Pole / Street Pole",
        href: "/industries/utility-pole-industry",
        children: [
          { label: "Heat Shrink Pole Caps", href: "/products/heat-shrink-moulded-components/cable-end-caps" },
          { label: "Heat Shrink Pole Protection Sleeves", href: "/products/heat-shrink-wrap-around-sleeves/for-poles" },
        ],
      },
      { label: "Oil & Gas / Corrosion Protection", href: "/industries/oil-gas-corrosion-protection" },
      { label: "Cathodic Protection", href: "/industries/cathodic-protection" },
      { label: "Automobile / Wire Harness", href: "/industries/automobile-wire-harness" },
      { label: "Telecom Industry", href: "/industries/telecom-industry" },
    ],
  },
  {
    label: "COMPANY",
    href: "/about",
    children: [
      { label: "About AEX", href: "/about" },
      { label: "Facility", href: "/facility" },
      { label: "Vision, Mission and Ethics", href: "/vision-mission-ethics" },
      { label: "Our Strength", href: "/strength" },
      { label: "Values We Live By", href: "/values-we-live-by" },
    ],
  },
  {
    label: "CREDENTIALS",
    href: "#",
    children: [
      { label: "Certificate — ISO 9001", href: "/certificates/iso-9001" },
      { label: "Certificate — CE Marking", href: "/certificates/ce-marking" },
    ],
  },
  { label: "DOWNLOAD", href: "/downloads" },
  { label: "EVENTS & NEWS", href: "/news" },
  { label: "CONTACT US", href: "/contact" },
];

/** Footer quick links */
export const footerLinks = [
  { label: "About AEX", href: "/about" },
  { label: "Facility", href: "/facility" },
  { label: "Vision, Mission and Ethics", href: "/vision-mission-ethics" },
  { label: "Our Strength", href: "/strength" },
  { label: "Values We Live By", href: "/values-we-live-by" },
  { label: "Products", href: "/products" },
  { label: "Downloads", href: "/downloads" },
  { label: "Events & News", href: "/news" },
  { label: "Enquiry", href: "/enquiry" },
  { label: "Contact Us", href: "/contact" },
];
