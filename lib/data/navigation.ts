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
      {
        label: "Cable Industry",
        href: "/industries/cable-industry",
        children: [
          { label: "Heat Shrinkable Cable End Sealing Caps", href: "/industries/cable-industry/heat-shrinkable-cable-end-sealing-caps" },
          { label: "Heat Shrink Valved End Caps", href: "/industries/cable-industry/heat-shrink-valved-end-caps" },
          { label: "PVC End Caps", href: "/industries/cable-industry/pvc-end-caps" },
          { label: "Heat Shrink Medium and Heavy Wall Tubing", href: "/industries/cable-industry/heat-shrink-medium-and-heavy-wall-tubing" },
          { label: "Heat Shrink Wrap Around Sleeves", href: "/industries/cable-industry/heat-shrink-wrap-around-sleeves" },
          { label: "Heat Shrinkable Cable Jointing Kits", href: "/industries/cable-industry/heat-shrinkable-cable-jointing-kits" },
          { label: "Heat Shrinkable Cable Termination Kits", href: "/industries/cable-industry/heat-shrinkable-cable-termination-kits" },
        ],
      },
      {
        label: "Switchgear Industry",
        href: "/industries/switchgear-industry",
        children: [
          { label: "Heat Shrink Busbar Insulating Sleeves", href: "/industries/switchgear-industry/heat-shrink-busbar-insulating-sleeves" },
          { label: "Polyolefin Busbar Insulation Covers", href: "/industries/switchgear-industry/polyolefin-busbar-insulation-covers" },
          { label: "Busbar Insulating Boots/Shrouds - PVC", href: "/industries/switchgear-industry/busbar-insulating-boots-shrouds-pvc" },
          { label: "Busbar End Caps", href: "/industries/switchgear-industry/busbar-end-caps" },
          { label: "Heat Shrink Busbar Insulating Tapes", href: "/industries/switchgear-industry/heat-shrink-busbar-insulating-tapes" },
          { label: "Heat Shrinkable Cable Jointing Kits", href: "/industries/switchgear-industry/heat-shrinkable-cable-jointing-kits" },
          { label: "Heat Shrinkable Cable Termination Kits", href: "/industries/switchgear-industry/heat-shrinkable-cable-termination-kits" },
          { label: "Bushing Boot", href: "/industries/switchgear-industry/bushing-boot" },
          { label: "Heat Shrink Right Angle and Straight Boots", href: "/industries/switchgear-industry/heat-shrink-right-angle-and-straight-boots" },
          { label: "Insulated Adapter Termination Systems", href: "/industries/switchgear-industry/insulated-adapter-termination-systems" },
        ],
      },

      {
        label: "Transformer & Busduct Industry",
        href: "/industries/transformer-and-busduct-industry",
        children: [
          { label: "Heat Shrinkable Cable Termination Kits", href: "/industries/transformer-and-busduct-industry/heat-shrinkable-cable-termination-kits" },
          { label: "Heat Shrink Busbar Insulating Sleeves", href: "/industries/transformer-and-busduct-industry/heat-shrink-busbar-insulating-sleeves" },
          { label: "Heat Shrink Right Angle and Straight Boots", href: "/industries/transformer-and-busduct-industry/heat-shrink-right-angle-and-straight-boots" },
          { label: "Bushing Boot", href: "/industries/transformer-and-busduct-industry/bushing-boot" },
          { label: "Asset & Wildlife Protection Products - Bus Connection Insulating Covers", href: "/industries/transformer-and-busduct-industry/asset-and-wildlife-protection-products-bus-connection-insulating-covers" },
          { label: "Overhead Line Cover - Polyolefin", href: "/industries/transformer-and-busduct-industry/overhead-line-cover-polyolefin" },
          { label: "Overhead Line Tube - Polyolefin", href: "/industries/transformer-and-busduct-industry/overhead-line-tube-polyolefin" },
        ],
      },
      {
        label: "Electric Utilities (Power T&D)",
        href: "/industries/electric-utilities-power-transmission",
        children: [
          { label: "Heat Shrinkable Cable Jointing Kits", href: "/industries/electric-utilities-power-transmission/heat-shrinkable-cable-jointing-kits" },
          { label: "Heat Shrinkable Cable Terminations", href: "/industries/electric-utilities-power-transmission/heat-shrinkable-cable-terminations" },
          { label: "Asset & Wildlife Protection Products", href: "/industries/electric-utilities-power-transmission/asset-and-wildlife-protection-products" },
          { label: "Overhead Line Cover", href: "/industries/electric-utilities-power-transmission/overhead-line-cover" },
          { label: "Overhead Line Tube", href: "/industries/electric-utilities-power-transmission/overhead-line-tube" },
          { label: "Heat Shrink Pole Protection Sleeves", href: "/industries/electric-utilities-power-transmission/heat-shrink-pole-protection-sleeves" },
          { label: "Heat Shrink Busbar Insulating Sleeves", href: "/industries/electric-utilities-power-transmission/heat-shrink-busbar-insulating-sleeves" },
          { label: "Heat Shrink Tape", href: "/industries/electric-utilities-power-transmission/heat-shrink-tape" },
          { label: "Heat Shrink Wrap Around Sleeves", href: "/industries/electric-utilities-power-transmission/heat-shrink-wrap-around-sleeves" },
          { label: "Heat Shrink Low Voltage Cable Breakouts", href: "/industries/electric-utilities-power-transmission/heat-shrink-low-voltage-cable-breakouts" },
          { label: "Heat Shrink Cable End Sealing Caps", href: "/industries/electric-utilities-power-transmission/heat-shrink-cable-end-sealing-caps" },
          { label: "Heat Shrink Live End Caps", href: "/industries/electric-utilities-power-transmission/heat-shrink-live-end-caps" },
          { label: "Heat Shrink Medium and Heavy Wall Tubing", href: "/industries/electric-utilities-power-transmission/heat-shrink-medium-and-heavy-wall-tubing" },
          { label: "Bushing Boot", href: "/industries/electric-utilities-power-transmission/bushing-boot" },
          { label: "Heat Shrink Right Angle and Straight Boot", href: "/industries/electric-utilities-power-transmission/heat-shrink-right-angle-and-straight-boot" },
          { label: "Heat Shrink Pole Protection Cap", href: "/industries/electric-utilities-power-transmission/heat-shrink-pole-protection-cap" },
        ],
      },
      {
        label: "Asset & Wildlife Protection",
        href: "/industries/asset-and-wildlife-protection",
        children: [
          { label: "Bus Connection Insulating Covers", href: "/industries/asset-and-wildlife-protection/bus-connection-insulating-covers" },
          { label: "Overhead Line Covers", href: "/industries/asset-and-wildlife-protection/overhead-line-covers" },
          { label: "Overhead Line Tubes", href: "/industries/asset-and-wildlife-protection/overhead-line-tubes" },
          { label: "Heat Shrink Pole Protection Sleeves", href: "/industries/asset-and-wildlife-protection/heat-shrink-pole-protection-sleeves" },
          { label: "Heat Shrink Busbar Sleeves", href: "/industries/asset-and-wildlife-protection/heat-shrink-busbar-sleeves" },
          { label: "Heat Shrink Tape", href: "/industries/asset-and-wildlife-protection/heat-shrink-tape" },
          { label: "Heat Shrink Wrap Around Sleeves", href: "/industries/asset-and-wildlife-protection/heat-shrink-wrap-around-sleeves" },
          { label: "Bushing Boot", href: "/industries/asset-and-wildlife-protection/bushing-boot" },
        ],
      },
      {
        label: "Renewable Energy — Wind",
        href: "/industries/wind-energy-solutions",
        children: [
          { label: "Heat Shrinkable Cable Jointing Kits", href: "/industries/wind-energy-solutions/heat-shrinkable-cable-jointing-kits" },
          { label: "Heat Shrinkable Cable Termination Kits", href: "/industries/wind-energy-solutions/heat-shrinkable-cable-termination-kits" },
          { label: "Heat Shrink Medium and Heavy Wall Tubes", href: "/industries/wind-energy-solutions/heat-shrink-medium-heavy-wall-tubes" },
          { label: "Heat Shrink Busbar Insulating Sleeves", href: "/industries/wind-energy-solutions/heat-shrink-busbar-insulating-sleeves" },
          { label: "Heat Shrink Tape", href: "/industries/wind-energy-solutions/heat-shrink-tape" },
          { label: "Bushing Insulation Covers", href: "/industries/wind-energy-solutions/bushing-insulation-covers" },
          { label: "Overhead Line Cover", href: "/industries/wind-energy-solutions/overhead-line-cover" },
          { label: "Overhead Line Tube", href: "/industries/wind-energy-solutions/overhead-line-tube" },
        ],
      },
      {
        label: "Renewable Energy — Solar",
        href: "/industries/solar-energy-solutions",
        children: [
          { label: "Heat Shrinkable Cable Jointing Kits", href: "/industries/solar-energy-solutions/heat-shrinkable-cable-jointing-kits" },
          { label: "Heat Shrinkable Cable Termination Kits", href: "/industries/solar-energy-solutions/heat-shrinkable-cable-termination-kits" },
          { label: "Heat Shrink Medium and Heavy Wall Tubes", href: "/industries/solar-energy-solutions/heat-shrink-medium-heavy-wall-tubes" },
          { label: "Heat Shrink Busbar Insulating Sleeves", href: "/industries/solar-energy-solutions/heat-shrink-busbar-insulating-sleeves" },
          { label: "Heat Shrink Tape", href: "/industries/solar-energy-solutions/heat-shrink-tape" },
          { label: "Bushing Insulation Covers", href: "/industries/solar-energy-solutions/bushing-insulation-covers" },
          { label: "Overhead Line Cover", href: "/industries/solar-energy-solutions/overhead-line-cover" },
          { label: "Overhead Line Tube", href: "/industries/solar-energy-solutions/overhead-line-tube" },
        ],
      },
      {
        label: "Cable Joints & Terminations Kit",
        href: "/industries/kit-components-cable-joints",
        children: [
          { label: "Heat Shrink Low Voltage Cable Breakouts", href: "/industries/kit-components-cable-joints/heat-shrink-low-voltage-cable-breakouts" },
          { label: "Heat Shrink Non Tracking Cable Breakouts", href: "/industries/kit-components-cable-joints/heat-shrink-non-tracking-cable-breakouts" },
          { label: "Heat Shrink Creepage Extension Skirt", href: "/industries/kit-components-cable-joints/heat-shrink-creepage-extension-skirt" },
          { label: "Heat Shrink Semi Conductivecable Breakouts", href: "/industries/kit-components-cable-joints/heat-shrink-semi-conductivecable-breakouts" },
          { label: "Heat Shrink Right Angle and Straight Boot", href: "/industries/kit-components-cable-joints/heat-shrink-right-angle-and-straight-boot" },
          { label: "Heat Shrink Medium and Heavy Wall Tubing", href: "/industries/kit-components-cable-joints/heat-shrink-medium-and-heavy-wall-tubing" },
          { label: "Heat Shrink Wrap Around Sleeves", href: "/industries/kit-components-cable-joints/heat-shrink-wrap-around-sleeves" },
          { label: "Heat Shrink Red Insulation Tubing", href: "/industries/kit-components-cable-joints/heat-shrink-red-insulation-tubing" },
          { label: "Heat Shrink Non Tracking Tubing", href: "/industries/kit-components-cable-joints/heat-shrink-non-tracking-tubing" },
          { label: "Heat Shrink Stress Control Tubing", href: "/industries/kit-components-cable-joints/heat-shrink-stress-control-tubing" },
          { label: "Heat Shrink Double Layer Tubing", href: "/industries/kit-components-cable-joints/heat-shrink-double-layer-tubing" },
          { label: "Mastic Tape", href: "/industries/kit-components-cable-joints/mastic-tape" },
          { label: "Constant Force Spring", href: "/industries/kit-components-cable-joints/constant-force-spring" },
          { label: "Jubilee Clamps", href: "/industries/kit-components-cable-joints/jubilee-clamps" },
          { label: "Tinned Copper Braids", href: "/industries/kit-components-cable-joints/tinned-copper-braids" },
          { label: "Copper Braid with Solder Blocks", href: "/industries/kit-components-cable-joints/copper-braid-with-solder-blocks" },
        ],
      },
      {
        label: "Pre-Insulated Pipe / District Heating",
        href: "/industries/district-heating-cooling",
        children: [
          { label: "Heat Shrink Pre-Insulated Pipe Seals", href: "/industries/district-heating-cooling/heat-shrink-pre-insulated-pipe-seal" },
          { label: "Heat Shrink Tubing", href: "/industries/district-heating-cooling/heat-shrink-tubing" },
          { label: "Heat Shrink Wrap Around Sleeves", href: "/industries/district-heating-cooling/heat-shrink-wrap-around-sleeves" },
          { label: "Mastic Tape", href: "/industries/district-heating-cooling/mastic-tape" },
        ],
      },
      {
        label: "Utility Pole / Street Pole",
        href: "/industries/utility-pole-industry",
        children: [
          { label: "Heat Shrink Pole Caps", href: "/industries/utility-pole-industry/heat-shrink-pole-caps" },
          { label: "Heat Shrink Pole Protection Sleeves", href: "/industries/utility-pole-industry/heat-shrink-pole-protection-sleeves" },
        ],
      },
      {
        label: "Oil & Gas / Corrosion Protection",
        href: "/industries/oil-gas-corrosion-protection",
        children: [
          { label: "Heat Shrink Tube for U-bolt", href: "/industries/oil-gas-corrosion-protection/heat-shrink-tube-for-u-bolt" },
          { label: "Heat Shrink Tube for Pipeline Protection", href: "/industries/oil-gas-corrosion-protection/heat-shrink-tube-for-corrosion-protection-pipeline" },
        ],
      },
      {
        label: "Cathodic Protection",
        href: "/industries/cathodic-protection",
        children: [
          { label: "Heat Shrink Anode Caps", href: "/industries/cathodic-protection/heat-shrink-anode-caps" },
        ],
      },
      {
        label: "Automobile / Wire Harness",
        href: "/industries/automobile-wire-harness",
        children: [
          { label: "Heat Shrink Thin Wall Tubing", href: "/industries/automobile-wire-harness/heat-shrink-thin-wall-tubing" },
          { label: "Heat Shrink Dual Wall Tubing", href: "/industries/automobile-wire-harness/heat-shrink-dual-wall-tubing" },
        ],
      },
      {
        label: "Telecom Industry",
        href: "/industries/telecom-industry",
        children: [
          { label: "Heat Shrink Medium and Heavy Wall Tubing", href: "/industries/telecom-industry/heat-shrink-medium-heavy-wall-tubing" },
          { label: "Branch off Clips", href: "/industries/telecom-industry/branch-off-clips" },
          { label: "Heat Shrink Wrap Around Sleeves", href: "/industries/telecom-industry/heat-shrink-wrap-around-sleeves" },
          { label: "Heat Shrink Low Voltage Cable Breakouts", href: "/industries/telecom-industry/heat-shrink-low-voltage-cable-breakouts" },
          { label: "Heat Shrink Cable End Sealing Caps", href: "/industries/telecom-industry/heat-shrink-cable-end-sealing-caps" },
          { label: "Heat Shrink Dual Wall Tubing", href: "/industries/telecom-industry/heat-shrink-dual-wall-tubing" },
        ],
      },
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
