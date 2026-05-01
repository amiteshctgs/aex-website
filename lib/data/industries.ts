export interface Industry {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  image: string;
  products: string[];
  icon: string;
}

export const industries: Industry[] = [
  {
    slug: "cable-industry",
    title: "Cable Industry",
    shortTitle: "Cable",
    description: "Providing state-of-the-art mechanical and environmental protection, sealing, and insulation solutions.",
    longDescription:
      "The cable industry is a critical component of the global infrastructure, providing essential connectivity for various sectors such as power transmission, telecommunications, and information technology. The industry encompasses the manufacturing and distribution of a wide range of cables, including power cables, telecommunication cables, fiber optic cables, and specialty cables tailored for specific applications.\n\nAEX is one of the leaders in providing state-of-the-art solutions to Cable Industries. Our comprehensive range of Products is designed to provide mechanical and environmental protection as well as used for sealing and insulation. The specific Heat Shrink products are perfectly suited to their respective area of implementation, thus guaranteeing the maximum mechanical protection for cable connections.",
    image: "/images/resource/slideee1.jpg",
    products: [
      "Heat Shrink Cable End Sealing Caps",
      "Heat Shrink Valved End Caps",
      "PVC End Caps",
      "Heat Shrink Medium and Heavy Wall Tubing",
      "Heat Shrink Wrap Around Sleeves",
      "Heat Shrinkable Cable Jointing Kits",
      "Heat Shrinkable Cable Termination Kits"
    ],
    icon: "bolt",
  },
  {
    slug: "switchgear-industry",
    title: "Switchgear Industry",
    shortTitle: "Switchgear",
    description: "Insulation solutions for Busbar Switchgears and Control Panels to enhance safety and reduce clearance.",
    longDescription:
      "The switchgear industry is a critical sector within the broader electrical equipment industry, primarily focused on the design, manufacturing, and distribution of switchgear products. Switchgear plays a crucial role in electrical power systems, providing control, protection, and isolation of electrical equipment.\n\nAEX is one of the leaders in providing insulation solutions for Busbas Switchgears and Control Panels. The AEX range of products is made up of High-grade specially formulated polymers that are safe for electrical use, UV Stable & and weather resistant. AEX's Heat Shrinkable Busbar Sleeves and Busbar Insulating Shrouds are used for the protection of bus-bar systems and reduction clearances; thereby helping the Engineers in making compact Panels.",
    image: "/images/resource/p3m11.jpg",
    products: [
      "Heat Shrink Busbar Insulating Sleeves",
      "Polyolefin Busbar Insulation Covers",
      "Busbar Insulating Boots/Shrouds - PVC",
      "Busbar End Caps",
      "Heat Shrink Busbar Insulating Tapes",
      "Heat Shrinkable Cable Jointing Kits",
      "Heat Shrinkable Cable Termination Kits",
      "Bushing Boot",
      "Heat Shrink Right Angle and Straight Boots",
      "Insulated Adapter Termination Systems"
    ],
    icon: "industry",
  },
  {
    slug: "transformer-and-busduct-industry",
    title: "Transformer And Busduct Industry",
    shortTitle: "Transformer & Busduct",
    description: "Products and solutions providing exceptional insulation and long-term reliability for Dry type and Oil-filled Transformers.",
    longDescription:
      "The transformer industry is a crucial sector within the electrical equipment manufacturing domain, primarily focused on the design, production, and distribution of transformers. Transformers are devices that facilitate the efficient and safe transfer of electrical energy between circuits through electromagnetic induction.\n\nAEX designs and manufactures the Products & Solutions for Dry type and Oil filled Transformers. AEX Products provide exceptional insulation and long-term reliability even at high continuous operating temperatures.",
    image: "/images/resource/feature52.jpg",
    products: [
      "Heat Shrinkable Cable Termination Kits",
      "Heat Shrink Busbar Insulating Sleeves",
      "Heat Shrink Right Angle and Straight Boots",
      "Bushing Boot",
      "Asset & Wildlife Protection Products",
      "Overhead Line Cover - Polyolefin",
      "Overhead Line Tube - Polyolefin"
    ],
    icon: "plug",
  },
  {
    slug: "power-transmission-and-distribution",
    title: "Electric Utilities For Power Transmission And Distribution",
    shortTitle: "Power Transmission",
    description: "Wide range of electrical insulation systems and wildlife protection products for power generation, transmission, and distribution.",
    longDescription:
      "Electric utilities play a crucial role in the Generation, Transmission, and Distribution of Electrical Power to meet the energy needs of communities, industries, and individuals.\n\nAEX offers a wide range of solutions for Electrical Insulation systems, which are used worldwide by Electrical Utilities, Industries & Original Equipment Manufacturers for the insulation of bare parts in the Electrical network. AEX is committed to provide the highest quality Power Cable Accessories and Wildlife Protection Products/Insulation Enhancement Products. It is a trusted name amongst major stakeholders in the global energy industry. We have created value in this segment by designing and manufacturing innovative solutions to boost productivity, minimize energy losses and engineering safe connections.",
    image: "/images/resource/slideee3.jpg",
    products: [
      "Heat Shrinkable Cable Jointing Kits",
      "Heat Shrinkable Cable Terminations",
      "Asset & Wildlife Protection Products",
      "Overhead Line Cover",
      "Overhead Line Tube",
      "Heat Shrink Pole Protection Sleeves",
      "Heat Shrink Busbar Insulating Sleeves",
      "Heat Shrink Tape",
      "Heat Shrink Wrap Around Sleeves",
      "Heat Shrink Low Voltage Cable Breakouts",
      "Heat Shrink Cable End Sealing Caps",
      "Heat Shrink Live End Caps",
      "Heat Shrink Medium and Heavy Wall Tubing",
      "Bushing Boot",
      "Heat Shrink Right Angle and Straight Boot",
      "Heat Shrink Pole Protection Cap"
    ],
    icon: "broadcast-tower",
  },
  {
    slug: "asset-and-wildlife-protection",
    title: "Asset & Wildlife Protection Products",
    shortTitle: "Wildlife Protection",
    description: "High-voltage insulating covers and sleeves to protect systems from accidental bridging caused by wildlife.",
    longDescription:
      "High-voltage insulating products for underground and overhead systems in electrical supply utilities, railways, OEMs & major industrial companies. They improve systems' reliability and prevent costly damages to equipment caused by accidental inter-phase or phase to ground bridging. Bridging occurs when birds, animals, vegetation, air-bourne debris and even vandalism come in contact with bare electrical systems in substations, overhead lines and related equipment. By insulating strategic areas, it is possible to eliminate such problems, and in areas of growing environmental awareness such as protection of endangered species, insulation products allow wildlife to move freely without being electrocuted.",
    image: "/images/resource/slideee4.jpg",
    products: [
      "Bus Connection Insulating Covers",
      "Overhead Line Covers",
      "Overhead Line Tubes",
      "Heat Shrink Busbar Sleeves",
      "Heat Shrink Busbar Tapes"
    ],
    icon: "shield-alt",
  },
  {
    slug: "wind-energy-solutions",
    title: "Renewable Energy - Wind Energy Solutions",
    shortTitle: "Wind Energy",
    description: "Durable cable accessories optimized for onshore and offshore wind farms, tackling humidity, temperature, and corrosion.",
    longDescription:
      "Renewable energy, i.e., Wind Energy, has emerged as a crucial component in the global pursuit of sustainable and clean energy solutions. These technologies harness the power of natural resources to generate electricity, offering a cleaner alternative to traditional fossil fuels.\n\nAEX provides the most suitable Cable Accessories to optimize the design of your onshore and offshore wind farms. From turbines to grids, substations and energy storage – we are one of the best source for multiple connectivity. Our Products are engineered and tested specifically for the wind farm environment so they are durable to tackle the toughest humidity, temperatures, and corrosion.",
    image: "/images/resource/feature51.jpg",
    products: [
      "Heat Shrinkable Cable Jointing Kits",
      "Heat Shrinkable Cable Termination Kits",
      "Heat Shrink Medium and Heavy Wall Tubes",
      "Heat Shrink Busbar Insulating Sleeves",
      "Heat Shrink Tape",
      "Asset & Wildlife Protection Products",
      "Overhead Line Cover",
      "Overhead Line Tube"
    ],
    icon: "wind",
  },
  {
    slug: "solar-energy-solutions",
    title: "Renewable Energy - Solar Energy Solutions",
    shortTitle: "Solar Energy",
    description: "Reliable, cost-effective solar energy solutions and grid connectivity designed for harsh environmental conditions.",
    longDescription:
      "Renewable energy, i.e., Solar Energy, has emerged as a crucial component in the global pursuit of sustainable and clean energy solutions. These technologies harness the power of natural resources to generate electricity, offering a cleaner alternative to traditional fossil fuels.\n\nAs the necessity for Solar power continues to grow, so does your need for more dynamic systems that deliver increased power and efficiency. AEX offers reliable solar energy solutions and grid connectivity. We’re ready with cost-effective and reliable solar connectors that are durable even in harsh environments. Our products suitable for Solar connections can be installed quickly, easily, and accurately.",
    image: "/images/resource/feature54.png",
    products: [
      "Heat Shrinkable Cable Jointing Kits",
      "Heat Shrinkable Cable Termination Kits",
      "Heat Shrink Medium and Heavy Wall Tubes",
      "Heat Shrink Busbar Insulating Sleeves",
      "Heat Shrink Tape",
      "Asset & Wildlife Protection Products",
      "Overhead Line Cover",
      "Overhead Line Tube"
    ],
    icon: "sun",
  },
  {
    slug: "kit-components-cable-joints",
    title: "Kit Components For Cable Joints And Terminations",
    shortTitle: "Cable Joint Kits",
    description: "Crucial power cable components providing secure insulation and reliable connections for underground and overhead networks.",
    longDescription:
      "Cable joints and terminations are crucial components in electrical power systems, facilitating the connection and termination of cables to ensure reliable and safe transmission of electricity. These components are vital for both underground and overhead power distribution networks. Effective cable jointing and termination are critical for the integrity and reliability of electrical power systems.\n\nAEX's electrical Power Cable Accessories last for decades and increase the reliability and efficiency of the grid. They are suitable for low, medium and high voltage applications and can operate under severe environments. Our extensive range of electrical connectors fits applications from Overhead and Underground networks to Power Substations. Our history of invention, heritage of reliable products and decades of experience enable powerful connections for electrical networks.",
    image: "/images/resource/project-3.jpg",
    products: [
      "Heat Shrink Low Voltage Cable Breakouts",
      "Heat Shrink Non Tracking Cable Breakouts",
      "Heat Shrink Creepage Extension Skirt",
      "Heat Shrink Semi Conductivecable Breakouts",
      "Heat Shrink Right Angle and Straight Boot",
      "Heat Shrink Medium and Heavy Wall Tubing",
      "Heat Shrink Wrap Around Sleeves",
      "Heat Shrink Red Insulation Tubing",
      "Heat Shrink Non Tracking Tubing",
      "Heat Shrink Stress Control Tubing",
      "Heat Shrink Double Layer Tubing",
      "Mastic Tape",
      "Constant Force Spring",
      "Jubilee Clamps",
      "Tinned Copper Braids",
      "Copper Braid with Solder Blocks"
    ],
    icon: "tools",
  },
  {
    slug: "district-heating-cooling",
    title: "Pre-Insulated Pipe/District Heating And Cooling Industry",
    shortTitle: "District Heating",
    description: "Heat shrink seals and sleeves for pre-insulated pipe manufacturers in district heating and cooling networks.",
    longDescription:
      "Pre-installed Pipes or District Heating and Cooling systems are innovative solutions for efficiently distributing Thermal energy, providing both heating and cooling services to buildings and communities. These systems are designed to enhance energy efficiency, reduce environmental impact, and optimize the overall performance of heating and cooling infrastructure.\n\nDistrict heating is a system for distributing heat generated in a centralized location through a system of Pre-insulated pipes for residential and commercial heating requirements. District heating is an environmentally friendly heating source, enabling sustainable energy and a green future. AEX is the leader in manufacturing Products for Pre-Insulated Pipe Systems. AEX offers Heat Shrink Seal & Sleeves to Pre-Insulated Pipe manufacturers for underground and overground District Heating networks.",
    image: "/images/resource/project-4.jpg",
    products: [
      "Heat Shrink Pre-Insulated Pipe Seal",
      "Heat Shrink Tubing",
      "Heat Shrink Wrap Around Sleeves",
      "Mastic Tape"
    ],
    icon: "fire-alt",
  },
  {
    slug: "utility-pole-industry",
    title: "Utility Pole / Street Pole Industry",
    shortTitle: "Utility Pole",
    description: "Market-leading heat shrink pole protection caps and sleeves that increase wooden pole lifespan by over 20 years.",
    longDescription:
      "A utility pole is a column or post usually made out of wood used to support overhead power lines and various other public utilities, such as electrical cable, fiber optic cable, and related equipment such as transformers and street lights. These poles play a fundamental role in the distribution of electricity, telecommunication, street lighting, and other essential services.\n\nAEX is the market-leading provider of Heat Shrink Products for Pole Protection. AEX Products are proven to increase the life of Wooden Poles by more than 20 years.",
    image: "/images/resource/slideee5.png",
    products: [
      "Heat Shrink Pole Protection Cap",
      "Heat Shrink Pole Protection Sleeves"
    ],
    icon: "lightbulb",
  },
  {
    slug: "oil-gas-corrosion-protection",
    title: "Oil & Gas / Corrosion Protection Industry",
    shortTitle: "Oil & Gas",
    description: "Heat shrinkable tubing and sleeves designed to completely eliminate corrosion between pipes and U-bolts.",
    longDescription:
      "Corrosion occurs due to metal contact between the uncoated U-bolts and pipe. The excessive corrosion and pitting can eventually develop into pinhole leaks. This interaction can be completely eliminated by utilizing AEX's Heat Shrinkable Tubing.",
    image: "/images/resource/project-5.jpg",
    products: [
      "Heat Shrink Tube for U-bolt",
      "Heat Shrink Tube for Corrosion Protection of Pipeline"
    ],
    icon: "oil-can",
  },
  {
    slug: "cathodic-protection",
    title: "Cathodic Protection Industry",
    shortTitle: "Cathodic Protection",
    description: "Specialized heat shrink anode caps providing essential corrosion protection for cathodic system wire connections.",
    longDescription:
      "Cathodic protection is an electrical means of corrosion control where the structure to be protected is made into a cathode in an electrochemical cell. Oxidation in the electrochemical cell is concentrated on the anodes leaving the structure protected as a cathode with a net reduction reaction. Properly designed cathodic protection systems can reduce the corrosion rate to negligible amounts. Anodic protection (AP) is a technique to control the corrosion of a metal surface by making it the anode of an electrochemical cell and controlling the potential in a range where the metal is passive.\n\nAEX manufactures Heat Shrink Products for Cathodic/Corrosion Protection.",
    image: "/images/resource/project-6.jpg",
    products: [
      "Heat Shrink Anode Caps"
    ],
    icon: "car-battery",
  },
  {
    slug: "automobile-wire-harness",
    title: "Automobile / Wire Harness Industry",
    shortTitle: "Automobile",
    description: "Thin wall and dual wall heat shrink tubing for reliable wire bundling and environmental sealing in vehicles.",
    longDescription:
      "The wiring harness is the combination of electrical cables, or assembly of wires, that connects all electrical and electronic (E/E) components in the automotive vehicle, like sensors, electronic control units, batteries, and actuators.\n\nWhen used in wiring harnesses or other electrical applications, AEX tubing serves to electrically insulate, bundle and protect wires and other components. AEX Heat Shrink Tubing for Vehicle Applications manufactured to provide reliable protection for Vehicle electronic components and electrical systems. Heat Shrink Single Wall and Dual Wall Tubes also provide an environmental seal to prevent liquid, gaseous or solid contaminants from reaching sensitive components.",
    image: "/images/resource/project-1.jpg",
    products: [
      "Heat Shrink Thin Wall Tubing",
      "Heat Shrink Dual Wall Tubing"
    ],
    icon: "car",
  },
  {
    slug: "telecom-industry",
    title: "Telecom Industry",
    shortTitle: "Telecom",
    description: "Broad range of fiber optic solutions, closure kits, and cable jointing products for high-capacity telecom networks.",
    longDescription:
      "The Telecommunications industry is a dynamic and rapidly evolving sector that plays a fundamental role in connecting people and facilitating the exchange of information globally. From traditional voice services to high-speed data transmission and the rise of 5G technology, the telecom industry continues to drive technological innovation and shape the way individuals, businesses, and societies communicate. The Network through Optical Cables is a high-capacity Telecommunications network based on optical technologies.\n\nAEX designs, manufactures, and supplies a broad range of products to the fiber optic industry worldwide. We have expanded our activities to provide unique Fibre Optic solutions to our customers. We provide Fibre Optic Closure Cable Entry Sealing Kit for Telecom Industry. AEX's wide range of products are used to join and seal copper telecom cables.",
    image: "/images/resource/project-2.jpg",
    products: [
      "Heat Shrink Medium and Heavy Wall Tubing",
      "Branch off Clips",
      "Heat Shrink Wrap Around Sleeves - Non Pressurised Heat Shrink Closure",
      "Heat Shrink Low Voltage Cable Breakouts",
      "Heat Shrink Cable End Sealing Caps",
      "Heat Shrink Dual Wall Tubing"
    ],
    icon: "wifi",
  }
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export function getIndustrySlugs(): string[] {
  return industries.map((i) => i.slug);
}
