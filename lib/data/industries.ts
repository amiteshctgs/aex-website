export interface IndustrySubItem {
  label: string;
  href: string;
  slug?: string;
  description?: string;
  longDescription?: string;
  image?: string;
  images?: string[];
  features?: string[];
  applications?: string[];
}

export interface Industry {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  image: string;
  images?: string[];
  products: string[];
  icon: string;
  subItems?: IndustrySubItem[];
}

export const industries: Industry[] = [
  {
    slug: "cable-industry",
    title: "Cable Industry",
    shortTitle: "Cable",
    description: "Providing state-of-the-art mechanical and environmental protection, sealing, and insulation solutions.",
    longDescription:
      "The cable industry is a critical component of the global infrastructure, providing essential connectivity for various sectors such as power transmission, telecommunications, and information technology. The industry encompasses the manufacturing and distribution of a wide range of cables, including power cables, telecommunication cables, fiber optic cables, and specialty cables tailored for specific applications.\n\nAEX is one of the leaders in providing state-of-the-art solutions to Cable Industries. Our comprehensive range of Products is designed to provide mechanical and environmental protection as well as used for sealing and insulation. The specific Heat Shrink products are perfectly suited to their respective area of implementation, thus guaranteeing the maximum mechanical protection for cable connections.",
    image: "/images/no.1-cable-industry/all-types-of-cabels.jpg",
    images: [
      "/images/no.1-cable-industry/all-type-of-normal-cabels.png",
      "/images/no.1-cable-industry/all-types-of-cabels.jpg"
    ],
    products: [
      "Heat Shrink Cable End Sealing Caps",
      "Heat Shrink Valved End Caps",
      "PVC End Caps",
      "Heat Shrink Medium and Heavy Wall Tubing",
      "Heat Shrink Wrap Around Sleeves",
      "Heat Shrinkable Cable Jointing Kits",
      "Heat Shrinkable Cable Termination Kits"
    ],
    icon: "shield-alt",
    subItems: [
      {
        label: "Heat Shrinkable Cable End Sealing Caps",
        slug: "heat-shrinkable-cable-end-sealing-caps",
        href: "/industries/cable-industry/heat-shrinkable-cable-end-sealing-caps",
        description: "Heat Shrinkable Cable End Sealing Caps",
        longDescription: "AEX’s Heat Shrink End Sealing Caps are designed to provide mechanical protection and an environmental seal against moisture and dirt to all types of Power Cable ends. AEX Heat Shrink End Caps are made from high-quality Cross-linked Polyolefin material that is halogen-free. It contains a minimum of 2.5% carbon to protect it from ultraviolet rays.\n\nAEX's Heat Shrink Cable End Caps are  designed to provide Mechanical protection and environmental seal to Power cable ends.It provides a temper proof sealing to cable ends to avoid claims due to cable pilferage. "
        , image: "/images/no.1-cable-industry/product-and-application/1-1-product-heat-shrink-end-cap.jpg",
        images: [
          "/images/no.1-cable-industry/product-and-application/1-1-heat-shrink-cable-end-sealing-caps-installed-on-cables-in-cable-drum.jpeg",
          "/images/no.1-cable-industry/product-and-application/1-1-application-heat-shrink-end-cap.jpg"
        ],
        features: [
          "Excellent environmental protection",
          "Effective moisture sealing",
          "Resistant to UV radiation",
          "Easy and fast installation",
          "Durable and long-lasting"
        ],
        applications: [
          "Power cables",
          "Telecom cables",
          "Fiber optic cables",
          "Industrial cables",
          "LV/MV/HV cable ends"
        ]
      },
      {
        label: "Heat Shrink Valved End Caps",
        slug: "heat-shrink-valved-end-caps",
        href: "/industries/cable-industry/heat-shrink-valved-end-caps",
        description: "Heat Shrink Valved End Caps",
        longDescription: "AEX’s Heat Shrink End Sealing Caps are designed to provide mechanical protection and an environmental seal against moisture and dirt to all types of Power Cable ends. AEX Heat Shrink End Caps are made from high-quality Cross-linked Polyolefin material that is halogen-free. It contains a minimum of 2.5% carbon to protect it from ultraviolet rays. \n\nAEX's Heat Shrink Cable End Caps are  designed to provide Mechanical protection and environmental seal to Power cable ends.It provides a temper proof sealing to cable ends to avoid claims due to cable pilferage.",
        image: "/images/no.1-cable-industry/product-and-application/1-2-product-heat-shrink-valved-end-caps.jpg",
        // images: [
        //   "/images/no.1-cable-industry/product-and-application/1-2-product-heat-shrink-valved-end-caps.jpg"
        // ],
        features: [
          "Valve for pressure testing",
          "Excellent environmental protection",
          "Effective moisture sealing",
          "Resistant to UV radiation"
        ],
        applications: [
          "Pressurized power cables",
          "Telecom cables",
          "Industrial cables"
        ]
      },
      {
        label: "PVC End Caps",
        slug: "pvc-end-caps",
        href: "/industries/cable-industry/pvc-end-caps",
        description: "Provides cost-effective mechanical protection to cable ends.",
        longDescription: "AEX's PVC End Caps are used to seal Cable Ends during storage and transportation. The Caps are manufactured from Poly polyvinyl chloride material. It is available in various colours and length. \n\nAEX's PVC End Caps are used for Sealing Cable ends of Coaxial, General Cables & Wires.",
        image: "/images/no.1-cable-industry/product-and-application/1-3-pvc-end-caps.png",
        images: [
          "/images/no.1-cable-industry/product-and-application/1-3-pvc-end-caps.png",
          "/images/no.1-cable-industry/product-and-application/1-3-pvc-end-cap-application.png"
        ],
        features: [
          "Cost-effective",
          "Protects against dust and dirt",
          "Easy to install",
          "Durable"
        ],
        applications: [
          "Power cables",
          "Telecom cables",
          "General cable storage"
        ]
      },
      {
        label: "Heat Shrink Medium and Heavy Wall Tubing",
        slug: "heat-shrink-medium-and-heavy-wall-tubing",
        href: "/industries/cable-industry/heat-shrink-medium-and-heavy-wall-tubing",
        description: "Provides superior insulation and mechanical protection for cable joints and terminations.",
        longDescription: "AEX’s Heat Shrink Medium Wall Tubing (AMT) and Heavy Wall Tubing (AHT) are made from thermally stabilised Cross-linked Polyolefin material.By applying the heat, the tubing shrinks to the original smaller extruded diameter, fitting tightly over a wide range of Cable sizes and Cable accessories. These Tubes are designed for insulation on low-voltage cable accessories, as well as for environmental sealing, protection and outer jacketing on low, medium and high-voltage cables and cable accessories. It is also used to repair cable jackets and also for insulation on cable pulling eye. \n\nAEX's Heat Shrink Medium/Heavy Wall Tube is used to repair Cable Jackets.It is provides Insulation on the cable pulling eye. This Tubes are made from high quality cross-linked Polyolefin material.",
        image: "/images/no.1-cable-industry/product-and-application/1-4-product-heat-shrink-medium-and-heavy-wall-tube.jpeg",
        // images: [
        //   "/images/no.1-cable-industry/product-and-application/1-4-product-heat-shrink-medium-and-heavy-wall-tube.jpeg"
        // ],
        features: [
          "Superior insulation",
          "High resistance to abrasion and impact",
          "Excellent environmental sealing",
          "Durable"
        ],
        applications: [
          "Cable joints",
          "Cable terminations",
          "Industrial applications"
        ]
      },
      {
        label: "Heat Shrink Wrap Around Sleeves",
        slug: "heat-shrink-wrap-around-sleeves",
        href: "/industries/cable-industry/heat-shrink-wrap-around-sleeves",
        description: "Designed for cable repair and jointing without cutting the cable.",
        longDescription: "AEX’s Heat Shrink Wrap Around Sleeves (AWS) is used for sealing and repairing the damaged sheaths of all Polymeric and Rubber-insulated cables with polyethylene or metal jackets and the Conductors. These Sleeves are ideal for joint outer sheath rebuilding on both LV and MV applications when there is a limitation of space, or when parking the outer jacket Tubing is difficult. It is used as an outer jacket in Cable Joints for mechanical protection.\n\nAEX's Wrap Around Sleeve is Cross-linked polyolefin Sleeve whichis folded around the cable/pipe, zipped up with a stainless steel channel and then heat shrunk. It is used as an outer jacket in Cable Joints for mechanical protection. It is also used to repair a Cable jacket. ",
        image: "/images/no.1-cable-industry/product-and-application/1-5-application-heat-shrink-wraparound-sleeve.jpg",
        images: [
          "/images/no.1-cable-industry/product-and-application/1-5-application-heat-shrink-wraparound-sleeve.jpg",
          "/images/no.1-cable-industry/product-and-application/1-5-product-heat-shrink-wraparound-sleeve.jpg"
        ],
        features: [
          "No need to cut cable",
          "Quick and easy repair",
          "Excellent environmental sealing",
          "Durable"
        ],
        applications: [
          "Cable repair",
          "Cable jointing",
          "Maintenance"
        ]
      },
      {
        label: "Heat Shrinkable Cable Jointing Kits",
        slug: "heat-shrinkable-cable-jointing-kits",
        href: "/industries/cable-industry/heat-shrinkable-cable-jointing-kits",
        description: "Complete kits for creating reliable cable joints.",
        longDescription: "AEX is the World leader in High-performance Power Cable Accessories. AEX offers Heat Shrink Joints for all types of PVC/PILC/XLPE/EPR Power Cables up to 66kV. The design specification and quality of AEX Heat Shrink Power Cable accessories meet and conform to the various National and International standards and tested as per IEC, CENELEC, IS Standards from leading independent test laboratories such as CPRI and ERDA.\n\nAEX is one of the leaders in designing and manufacturing Heat Shrink Joints for the most modern PVC/PILC/XLPE/EPR Low & Medium Voltage Power Cable up to 66kV Class.The design specification and  quality of our Heat Shrink Cable accessories have been upheld by the most stringent national/International standards worldwide.",
        image: "/images/no.1-cable-industry/product-and-application/1-6-product-heat-shrinkable-cable-jointing-kits.jpg",
        images: [
          "/images/no.1-cable-industry/product-and-application/1-6-product-heat-shrinkable-cable-jointing-kits.jpg",
          "/images/no.1-cable-industry/product-and-application/1-6-application-heat-shrinkable-cable-jointing-kits.webp"
        ],
        features: [
          "Complete kit",
          "Reliable insulation",
          "Excellent environmental sealing",
          "High mechanical strength"
        ],
        applications: [
          "Power cable jointing",
          "Distribution networks",
          "Industrial installations"
        ]
      },
      {
        label: "Heat Shrinkable Cable Termination Kits",
        slug: "heat-shrinkable-cable-termination-kits",
        href: "/industries/cable-industry/heat-shrinkable-cable-termination-kits",
        description: "Complete kits for creating reliable cable terminations.",
        longDescription: "AEX is the World leader in High-performance Power Cable Accessories. AEX offers Class 1 Termination for all types of PVC/PILC/XLPE/EPR Power Cables up to 66kV. The design specification and quality of AEX Heat Shrink Power Cable accessories meet and conform to the various National and International standards and tested as per IEC, CENELEC, IS Standards from leading independent test laboratories such as CPRI and ERDA.\n\nAEX offers unsurpassed technical superiority for perfect Termination of most modern PVC/PILC/XLPE/EPR Low & Medium Voltage Power Cable up to 66kV Class. We provide CLASS 1 Terminations to Electrical Industries. Our Cable Terminations are made considerably tamper proof from environmental factors as the entire length between the wire termination point and contact is safely encapsulated with this protective product.",
        image: "/images/no.1-cable-industry/product-and-application/1-7-heat-shrink-cable-termination-kits.jpeg",
        images: [
          "/images/no.1-cable-industry/product-and-application/1-7-heat-shrink-cable-termination-kits.jpeg",
          "/images/no.1-cable-industry/product-and-application/1-7-application-heat-shrinkable-cable-termination-kits.jpeg"
        ],
        features: [
          "Complete kit",
          "Excellent stress control",
          "Reliable insulation",
          "Weather resistant"
        ],
        applications: [
          "Power cable terminations",
          "Substations",
          "Industrial installations"
        ]
      }
    ]
  },
  {
    slug: "switchgear-industry",
    title: "Switchgear Industry",
    shortTitle: "Switchgear",
    description: "Insulation solutions for Busbar Switchgears and Control Panels to enhance safety and reduce clearance.",
    longDescription:
      "The switchgear industry is a critical sector within the broader electrical equipment industry, primarily focused on the design, manufacturing, and distribution of switchgear products. Switchgear plays a crucial role in electrical power systems, providing control, protection, and isolation of electrical equipment. It is an integral component in the transmission and distribution of electrical energy, ensuring the safety and reliability of power networks.\n\nAEX is one of the leaders in providing insulation solutions for Busbas Switchgears and Control Panels. The AEX range of products is made up of High-grade specially formulated polymers that are safe for electrical use, UV Stable & and weather resistant. AEX's Heat Shrinkable Busbar Sleeves and Busbar Insulating Shrouds are used for the protection of bus-bar systems and reduction clearances; thereby helping the Engineers in making compact Panels.",
    image: "/images/no.2-switchgear/swichger.png",
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
    subItems: [
      {
        label: "Heat Shrink Busbar Insulating Sleeves",
        slug: "heat-shrink-busbar-insulating-sleeves",
        href: "/industries/switchgear-industry/heat-shrink-busbar-insulating-sleeves",
        description: "Provides electrical insulation and protection against flashovers for busbars.",
        longDescription: " AEX’s Heat Shrink Busbar Insulating Sleeve is used to insulate Copper and Aluminium Busbars. These Sleeves provide Insulation enhancement and protection against flashover and accidentally induced discharge. The Busbar Sleeves can be used in confined spaces to reduce the clearance necessary between busbar phases in Medium Voltage Switchgears up to 36kV. The use of Busbar Sleeves allows equipment designers the liberty to reduce air spacing between busbars, such as in the manufacture of switchgear cabinets where space is at a premium.\n\nAEX's Heat Shrink Busbar Sleeve is heat shrinkable sleeve designed to insulate busbar systems up to 66KV and also to protect against accidental flash-over. It helps to reduces the air clearance. The sleeves are manufactured from high-quality cross-linked polyolefin material. Meets ANSI C37.20.2 standards for MV switchgear application up to 66 kV.",
        image: "/images/no.2-switchgear/product-and-application/2-1-product-heat-shrink-busbar-insulating-sleeves.jpg",
        images: [
          "/images/no.2-switchgear/product-and-application/2-1-product-heat-shrink-busbar-insulating-sleeves.jpg",
          "/images/no.2-switchgear/product-and-application/2-1-application-heat-shrink-busbar-insulating-sleeves.jpg"
        ],
        features: [
          "High dielectric strength",
          "Reduces busbar clearance",
          "Protects against flashovers",
          "UV stable and weather resistant"
        ],
        applications: [
          "Busducts",
          "Switchgears",
          "Control panels"
        ]
      },
      {
        label: "Polyolefin Busbar Insulation Covers",
        slug: "polyolefin-busbar-insulation-covers",
        href: "/industries/switchgear-industry/polyolefin-busbar-insulation-covers",
        description: "Insulation covers designed to protect busbar joints and connections.",
        longDescription: "AEX's Polyolefin Busbar Insulation Covers/Boots are cold-applied flexible electrical insulating shrouds for busbar and switchgear connections up to 36kV. These pliable boots can be installed, removed or replaced in few minutes. The covers are designed to protect and insulate energized busbar connections from flash-overs due to accidental contact. These Covers are Halogen free because it is made from high-quality Cross-linked Polyolefin material. These Covers/Boots provide a reduction in air clearance, hence it is used to make compact Switchgear Panels.\n\nAEX's Polyolefin Busboot is a flexible electrical insulating boot/shroud for busbar and switchgear connections up to 36KV. These pliable boots can be installed, removed or replaced in few minutes. Made from high-quality Polyolefin material to provide excellent electrical insulation and to withstand higher operating temperature continuously. ",
        image: "/images/no.2-switchgear/product-and-application/2-2-product-polyolefin-busbar-insulation-covers.jpg",
        images: [
          "/images/no.2-switchgear/product-and-application/2-2-product-polyolefin-busbar-insulation-covers.jpg",
          "/images/no.2-switchgear/product-and-application/2-2-application-polyolefin-busbar-insulation-covers.jpg"
        ],
        features: [
          "Excellent electrical insulation",
          "Easy to install over complex joints",
          "Prevents accidental flashovers",
          "High mechanical strength"
        ],
        applications: [
          "Switchgear busbar joints",
          "Control panel connections",
          "Substations"
        ]
      },
      {
        label: "Busbar Insulating Boots/Shrouds - PVC",
        slug: "busbar-insulating-boots-shrouds-pvc",
        href: "/industries/switchgear-industry/busbar-insulating-boots-shrouds-pvc",
        description: "PVC insulating boots and shrouds for busbar connections.",
        longDescription: "AEX's PVC Busbar Insulation Covers/Boots are cold-applied flexible electrical insulating shrouds for busbar and switchgear connections up to 36kV. These pliable boots can be installed, removed or replaced in few minutes. The covers are designed to protect and insulate energized busbar connections from flash-overs due to accidental contact. These Covers/Boots are made from Polyvinyl chloride (PVC) material. These Covers/Boots provide a reduction in air clearance, hence it is used to make compact Switchgear Panels. \n\nAEX's PVC Busboot is a flexible electrical insulating boot/shroud for busbar and switchgear connections up to 36KV.  kV. These pliable boots can be installed, removed or replaced in few minutes. Made from specially formulated Polyvinyl Chloride(PVC) material to provide excellent electrical insulation and to withstand higher operating temperature continuously.",
        image: "/images/no.2-switchgear/product-and-application/2-3-product-busbar-end-caps.png",
        images: [
          "/images/no.2-switchgear/product-and-application/2-3-product-busbar-end-caps.png",
          "/images/no.2-switchgear/product-and-application/2-3-application-busbar-end-caps.jpg"
        ],
        features: [
          "Flexible and easy to install",
          "Excellent electrical insulation",
          "Protects against dust and moisture",
          "Cost-effective solution"
        ],
        applications: [
          "Busbar connections",
          "Switchgears",
          "Transformers"
        ]
      },
      {
        label: "Busbar End Caps",
        slug: "busbar-end-caps",
        href: "/industries/switchgear-industry/busbar-end-caps",
        description: "Insulating end caps for the exposed ends of busbars.",
        longDescription: "AEX's Busbar End Caps are a highly flexible and re-usable electrical insulating End Cap, used to cover the end of live Bus Bars.  It is made from Polyvinyl Chloride material, formulated specially for electrical application at high voltage. These End Caps can be installed, removed or replaced in a few minutes.\n\nAEX's Busbar End Cap is used to cover the end of live  Busbars. It is made from Polyvinyl Chloride (PVC) material, it is formulated specially for electrical application at high voltage.",
        image: "/images/no.2-switchgear/product-and-application/2-4-product-busbar-end-caps.png",
        images: [
          "/images/no.2-switchgear/product-and-application/2-4-product-busbar-end-caps.png",
          "/images/no.2-switchgear/product-and-application/2-4-application-busbar-end-caps.jpeg"
        ],
        features: [
          "Easy to slip on",
          "Excellent electrical insulation",
          "Prevents accidental contact",
          "Durable and long-lasting"
        ],
        applications: [
          "Exposed busbar ends",
          "Switchgears",
          "Control panels"
        ]
      },
      {
        label: "Heat Shrink Busbar Insulating Tapes",
        slug: "heat-shrink-busbar-insulating-tapes",
        href: "/industries/switchgear-industry/heat-shrink-busbar-insulating-tapes",
        description: "Versatile insulating tapes for busbars and complex connections.",
        longDescription: "AEX’s high voltage Heat Shrink Busbar Insulation Tapes are adhesive-coated tapes that provide Insulation enhancement and protection against accidentally induced flashovers for Copper or Aluminium busbar sections where tube products cannot easily be applied. \n\nThe AHT tapes are quick and easy to install. Upon application of heat, the tapes shrink and the adhesive lining melts, joining the overlapping layers to produce a complete seal. \n\nAEX's Heat Shrink Tape is used for Insulation & protection of medium voltage busbar connections, where tubing cannot be used.",
        image: "/images/no.2-switchgear/product-and-application/2-5-product-heat-shrink-busbar-insulating-tapes.jpg",
        images: [
          "/images/no.2-switchgear/product-and-application/2-5-product-heat-shrink-busbar-insulating-tapes.jpg",
          "/images/no.2-switchgear/product-and-application/2-5-application-heat-shrink-busbar-insulating-tapes.png"
        ],
        features: [
          "Highly flexible",
          "Ideal for complex shapes",
          "Excellent electrical insulation",
          "Easy application"
        ],
        applications: [
          "Complex busbar bends",
          "Switchgear connections",
          "Repair and maintenance"
        ]
      },
      {
        label: "Heat Shrinkable Cable Jointing Kits",
        slug: "heat-shrinkable-cable-jointing-kits",
        href: "/industries/switchgear-industry/heat-shrinkable-cable-jointing-kits",
        description: "Complete kits for creating reliable cable joints in switchgear installations.",
        longDescription: "AEX is the World leader in High-performance Power Cable Accessories. AEX offers Heat Shrink Joints for all types of PVC/PILC/XLPE/EPR Power Cables up to 66kV. The design specification and quality of AEX Heat Shrink Power Cable accessories meet and conform to the various National and International standards and tested as per IEC, CENELEC, IS Standards from leading independent test laboratories such as CPRI and ERDA.\n\nAEX is one of the leaders in designing and manufacturing Heat Shrink Joints for the most modern PVC/PILC/XLPE/EPR Low & Medium Voltage Power Cable up to 66kV Class.The design specification and  quality of our Heat Shrink Cable accessories have been upheld by the most stringent national/International standards worldwide.",
        image: "/images/no.2-switchgear/product-and-application/2-6-product-heat-shrinkable-cable-jointing-kits.jpg",
        images: [
          "/images/no.2-switchgear/product-and-application/2-6-product-heat-shrinkable-cable-jointing-kits.jpg",
          "/images/no.2-switchgear/product-and-application/2-6-application-heat-shrinkable-cable-jointing-kits.webp"
        ],
        features: [
          "Complete kit",
          "Reliable insulation",
          "Excellent environmental sealing",
          "High mechanical strength"
        ],
        applications: [
          "Power cable jointing",
          "Switchgear installations",
          "Industrial networks"
        ]
      },
      {
        label: "Heat Shrinkable Cable Termination Kits",
        slug: "heat-shrinkable-cable-termination-kits",
        href: "/industries/switchgear-industry/heat-shrinkable-cable-termination-kits",
        description: "Provides excellent electrical insulation and stress control for cable terminations.",
        longDescription: "AEX is the World leader in High-performance Power Cable Accessories. AEX offers Class 1 Termination for all types of PVC/PILC/XLPE/EPR Power Cables up to 66kV. The design specification and quality of AEX Heat Shrink Power Cable accessories meet and conform to the various National and International standards and tested as per IEC, CENELEC, IS Standards from leading independent test laboratories such as CPRI and ERDA.\n\nAEX offers unsurpassed technical superiority for perfect Termination of most modern PVC/PILC/XLPE/EPR Low & Medium Voltage Power Cable up to 66kV Class. We provide CLASS 1 Terminations to Electrical Industries. Our Cable Terminations are made considerably tamper proof from environmental factors as the entire length between the wire termination point and contact is safely encapsulated with this protective product.",
        image: "/images/no.2-switchgear/product-and-application/2-7-heat-shrink-cable-termination-kits.jpeg",
        images: [
          "/images/no.2-switchgear/product-and-application/2-7-heat-shrink-cable-termination-kits.jpeg",
          "/images/no.2-switchgear/product-and-application/2-7-application-heat-shrinkable-cable-termination-kits.jpeg"
        ],
        features: [
          "Excellent stress control",
          "Reliable insulation",
          "Weather resistant",
          "Easy to install"
        ],
        applications: [
          "Switchgears",
          "Transformers",
          "Substations"
        ]
      },
      {
        label: "Bushing Boot",
        slug: "bushing-boot",
        href: "/industries/switchgear-industry/bushing-boot",
        description: "Provides insulation and protection for bushings in switchgears.",
        longDescription: "AEX's Bushing Boots are non-tracking elastomeric insulating boots, used in conjunction with Cable Terminations. They fit over the bushings of switchgear, insulating the area between the cable connector in either right angled or straight bushing connections. They are designed to enhance the phase-to-phase and phase-to-earth insulation. They are used in Switchgear and Transformer Cable boxes up to 36kV, particularly where air clearances are not sufficient for normal operation, and they also protect against flashovers in the event of any surge impulse, high humidity, or rodent menace contact.\n\nBushing Boots are non-tracking elastomeric insulating boots that are used in conjunction with terminations. They fit over the bushings of Switchgear, insulating the area between the cable connector in either right-angled or straight bushing connections. They are designed to enhance the phase-to-phase and phase-to-earth insulation. The boots can be used up to 24 KV application & protect against flashover or surges induced in switchgear & transformer boxes.",
        image: "/images/no.2-switchgear/product-and-application/2-8-product-bushing-boot.jpg",
        images: [
          "/images/no.2-switchgear/product-and-application/2-8-product-bushing-boot.jpg",
          "/images/no.2-switchgear/product-and-application/2-8-application-bushing-boot.jpg"
        ],
        features: [
          "High tracking resistance",
          "UV resistant",
          "Easy to install and remove",
          "Protects against animal intrusion"
        ],
        applications: [
          "Switchgear bushings",
          "Substation equipment",
          "Transformer connections"
        ]
      },
      {
        label: "Heat Shrink Right Angle and Straight Boots",
        slug: "heat-shrink-right-angle-and-straight-boots",
        href: "/industries/switchgear-industry/heat-shrink-right-angle-and-straight-boots",
        description: "Insulating boots for protecting connections in switchgears.",
        longDescription: "AEX’s Heat Shrink Right Angle and Straight Boots fit over the connection between a Termination’s cable lug and an equipment bushing, to provide phase-to-phase and phase-to-ground insulation. \n\nThey are used in Switchgear and Transformer Cable boxes up to 36kV, particularly where air clearances are not sufficient for normal operation, and they also protect against flashovers in the event of any surge impulse, high humidity, or rodent menace contact. The boots are made from thermally stabilized Non-tracking Cross-linked material for excellent insulation and weather-resistant properties. \n\nAEX's Angleboots are Heat Shrink Right Angle / Straight Boots provide insulation to the bushings in the cable termination box, where the clearance between phase to phase and phase to earth is less then the normal air clearance. These boots provide protection against flashover in the event of high humidity, rodent menace and surge impulse.",
        image: "/images/no.2-switchgear/product-and-application/2-9-product-heat-shrink-right-angle-and-straight-boots.png",
        images: [
          "/images/no.2-switchgear/product-and-application/2-9-product-heat-shrink-right-angle-and-straight-boots.png",
          "/images/no.2-switchgear/product-and-application/2-9-application-heat-shrink-right-angle-and-straight-boots.png"
        ],
        features: [
          "Excellent electrical insulation",
          "Prevents flashovers",
          "Resistant to environmental factors",
          "Available in various shapes"
        ],
        applications: [
          "Switchgear connections",
          "Transformer connections",
          "Busbar joints"
        ]
      },
      {
        label: "Insulated Adapter Termination Systems",
        slug: "insulated-adapter-termination-systems",
        href: "/industries/switchgear-industry/insulated-adapter-termination-systems",
        description: "Advanced termination systems for specialized switchgear connections.",
        longDescription: "AEX Insulating Adapter is for the connection on outer cone bushings Type C according to EN-50181. Can be used to connect any type of cable, irrespective of whether it is paper or plastic insulated or has one or three cores.",
        image: "/images/no.2-switchgear/product-and-application/2-10-insulated-adapter-termination-system.jpg",
        images: [
          "/images/no.2-switchgear/product-and-application/2-10-insulated-adapter-termination-system.jpg"
        ],
        features: [
          "Advanced termination design",
          "Robust mechanical stability",
          "Excellent electrical performance",
          "Suitable for specialized applications"
        ],
        applications: [
          "Specialized switchgears",
          "High-demand connections",
          "Industrial installations"
        ]
      }
    ]
  },
  {
    slug: "transformer-and-busduct-industry",
    title: "Transformer And Busduct Industry",
    shortTitle: "Transformer & Busduct",
    description: "Products and solutions providing exceptional insulation and long-term reliability for Dry type and Oil-filled Transformers.",
    longDescription:
      "The transformer industry is a crucial sector within the electrical equipment manufacturing domain, primarily focused on the design, production, and distribution of transformers. Transformers are devices that facilitate the efficient and safe transfer of electrical energy between circuits through electromagnetic induction. They play a fundamental role in power transmission, distribution, and utilization across various sectors.\n\nAEX designs and manufactures the Products & Solutions for Dry type and Oil filled Transformers. AEX Products provide exceptional insulation and long-term reliability even at high continuous operating temperatures.",
    image: "/images/no.3-transformer-busduct-industry/10232023-image2-equitymaster.jpg",
    images: [
      "/images/no.3-transformer-busduct-industry/easing-china-curbs-on-government-tenders-minimal-impact-expected-on-l-t-negative-for-transformer-sector.jpg",
      "/images/no.3-transformer-busduct-industry/power-transformer-100kva-330-415kv.jpg"
    ],
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
    subItems: [
      {
        label: "Heat Shrinkable Cable Termination Kits",
        slug: "heat-shrinkable-cable-termination-kits",
        href: "/industries/transformer-and-busduct-industry/heat-shrinkable-cable-termination-kits",
        description: "Provides excellent electrical insulation and stress control for cable terminations.",
        longDescription: "AEX is the World leader in High-performance Power Cable Accessories. AEX offers Class 1 Termination for all types of PVC/PILC/XLPE/EPR Power Cables up to 66kV. The design specification and quality of AEX Heat Shrink Power Cable accessories meet and conform to the various National and International standards and tested as per IEC, CENELEC, IS Standards from leading independent test laboratories such as CPRI and ERDA.\n\nAEX offers unsurpassed technical superiority for perfect Termination of most modern PVC/PILC/XLPE/EPR Low & Medium Voltage Power Cable up to 66kV Class. We provide CLASS 1 Terminations to Electrical Industries. Our Cable Terminations are made considerably tamper proof from environmental factors as the entire length between the wire termination point and contact is safely encapsulated with this protective product.",
        image: "/images/no.3-transformer-busduct-industry/product-and-application/3-1-heat-shrink-cable-termination-kits.jpeg",
        images: [
          "/images/no.3-transformer-busduct-industry/product-and-application/3-1-heat-shrink-cable-termination-kits.jpeg",
          "/images/no.3-transformer-busduct-industry/product-and-application/3-1-application-heat-shrinkable-cable-termination-kits.jpeg"
        ],
        features: [
          "Excellent stress control",
          "Reliable insulation",
          "Weather resistant",
          "Easy to install"
        ],
        applications: [
          "Transformers",
          "Switchgears",
          "Substations"
        ]
      },
      {
        label: "Heat Shrink Busbar Insulating Sleeves",
        slug: "heat-shrink-busbar-insulating-sleeves",
        href: "/industries/transformer-and-busduct-industry/heat-shrink-busbar-insulating-sleeves",
        description: "Provides electrical insulation and protection against flashovers for busbars.",
        longDescription: " AEX’s Heat Shrink Busbar Insulating Sleeve is used to insulate Copper and Aluminium Busbars. These Sleeves provide Insulation enhancement and protection against flashover and accidentally induced discharge. \n\nThe Busbar Sleeves can be used in confined spaces to reduce the clearance necessary between busbar phases in Medium Voltage Switchgears & Transformers up to 36kV. The use of Busbar Sleeves allows equipment designers the liberty to reduce air spacing between busbars, such as in the manufacture of switchgear cabinets where space is at a premium.\n\nAEX's Heat Shrink Busbar Sleeve is heat shrinkable sleeve designed to insulate busbar systems up to 66KV and also to protect against accidental flash-over. It helps to reduces the air clearance. The sleeves are manufactured from high-quality cross-linked polyolefin material. Meets ANSI C37.20.2 standards for MV switchgear/Transformer application up to 66 kV.",
        image: "/images/no.3-transformer-busduct-industry/product-and-application/3-2-product-heat-shrink-busbar-insulating-sleeves.jpg",
        images: [
          "/images/no.3-transformer-busduct-industry/product-and-application/3-2-product-heat-shrink-busbar-insulating-sleeves.jpg",
          "/images/no.3-transformer-busduct-industry/product-and-application/3-2-application-heat-shrink-busbar-insulating-sleeves.jpg"
        ],
        features: [
          "High dielectric strength",
          "Reduces busbar clearance",
          "Protects against flashovers",
          "UV stable and weather resistant"
        ],
        applications: [
          "Busducts",
          "Switchgears",
          "Control panels"
        ]
      },
      {
        label: "Heat Shrink Right Angle and Straight Boots",
        slug: "heat-shrink-right-angle-and-straight-boots",
        href: "/industries/transformer-and-busduct-industry/heat-shrink-right-angle-and-straight-boots",
        description: "Insulating boots for protecting connections in switchgears and transformers.",
        longDescription: "AEX’s Heat Shrink Right Angle and Straight Boots fit over the connection between a Termination’s cable lug and an equipment bushing, to provide phase-to-phase and phase-to-ground insulation. \n\nThey are used in Switchgear and Transformer Cable boxes up to 36kV, particularly where air clearances are not sufficient for normal operation, and they also protect against flashovers in the event of any surge impulse, high humidity, or rodent menace contact. The boots are made from thermally stabilized Non-tracking Cross-linked material for excellent insulation and weather-resistant properties.\n\nAEX's Angleboots are Heat Shrink Right Angle / Straight Boots provide insulation to the bushings in the cable termination box, where the clearance between phase to phase and phase to earth is less then the normal air clearance. These boots provide protection against flashover in the event of high humidity, rodent menace and surge impulse. ",
        image: "/images/no.3-transformer-busduct-industry/product-and-application/3-3-product-heat-shrink-right-angle-and-straight-boots.png",
        images: [
          "/images/no.3-transformer-busduct-industry/product-and-application/3-3-product-heat-shrink-right-angle-and-straight-boots.png",
          "/images/no.3-transformer-busduct-industry/product-and-application/3-3-application-heat-shrink-right-angle-and-straight-boots.png"
        ],
        features: [
          "Excellent electrical insulation",
          "Prevents flashovers",
          "Resistant to environmental factors",
          "Available in various shapes"
        ],
        applications: [
          "Transformer connections",
          "Switchgear connections",
          "Busbar joints"
        ]
      },
      {
        label: "Bushing Boot",
        slug: "bushing-boot",
        href: "/industries/transformer-and-busduct-industry/bushing-boot",
        description: "Provides insulation and protection for transformer bushings.",
        longDescription: "AEX's Bushing Boots are non-tracking elastomeric insulating boots, used in conjunction with Cable Terminations. They fit over the bushings of switchgear, insulating the area between the cable connector in either right angled or straight bushing connections. They are designed to enhance the phase-to-phase and phase-to-earth insulation. They are used in Switchgear and Transformer Cable boxes up to 36kV, particularly where air clearances are not sufficient for normal operation, and they also protect against flashovers in the event of any surge impulse, high humidity, or rodent menace contact.\n\nAEX's Bushing Boot is used for Insulation & protection of Cable Terminating to Bushing up to 24 KV. It protects against flashovers or surges induced in Switchgear & Transformer boxes.",
        image: "/images/no.3-transformer-busduct-industry/product-and-application/3-4-product-bushing-boot.jpg",
        images: [
          "/images/no.3-transformer-busduct-industry/product-and-application/3-4-product-bushing-boot.jpg",
          "/images/no.3-transformer-busduct-industry/product-and-application/3-4-application-bushing-boot.jpg"
        ],
        features: [
          "High tracking resistance",
          "UV resistant",
          "Easy to install and remove",
          "Protects against animal intrusion"
        ],
        applications: [
          "Transformer bushings",
          "Substation equipment",
          "Switchgear connections"
        ]
      },
      {
        label: "Asset & Wildlife Protection Products - Bus Connection Insulating Covers",
        slug: "asset-and-wildlife-protection-products-bus-connection-insulating-covers",
        href: "/industries/transformer-and-busduct-industry/asset-and-wildlife-protection-products-bus-connection-insulating-covers",
        description: "Insulating covers designed to protect bus connections and prevent wildlife-related outages.",
        longDescription: "High-voltage insulating products for underground and overhead systems in electrical supply utilities, railways, OEMs & major industrial companies. They improve systems' reliability and prevent costly damages to equipment caused by accidental inter-phase or phase to ground bridging. Bridging occurs when birds, animals, vegetation, air-bourne debris and even vandalism come in contact with bare electrical systems in substations, overhead lines and related equipment. By insulating strategic areas, it is possible to eliminate such problems, and in areas of growing environmental awareness such as protection of endangered species, insulation products allow wildlife to move freely without being electrocuted.\n\nHigh-voltage insulating products for underground and overhead systems in electrical supply utilities, railways, OEMs & major industrial companies. They improve systems' reliability and prevent costly damages to equipment caused by accidental inter-phase or phase to ground bridging. Bridging occurs when birds, animals, vegetation, air-bourne debris and even",
        image: "/images/no.3-transformer-busduct-industry/product-and-application/3-5-bushing-insulation-covers.jpg",
        images: [
          "/images/no.3-transformer-busduct-industry/product-and-application/3-5-bushing-insulation-covers.jpg"
        ],
        features: [
          "Prevents wildlife-induced outages",
          "Excellent UV and weather resistance",
          "High dielectric strength",
          "Easy installation on existing setups"
        ],
        applications: [
          "Bus connections",
          "Substations",
          "Overhead power lines"
        ]
      },
      {
        label: "Overhead Line Cover - Polyolefin",
        slug: "overhead-line-cover-polyolefin",
        href: "/industries/transformer-and-busduct-industry/overhead-line-cover-polyolefin",
        description: "Polyolefin covers for insulating bare overhead conductors.",
        longDescription: "AEX's Overhead Line Cover is a Medium Voltage Wrap-Around type Overhead Line Cover that provides state-of-the-art insulation to Overhead conductors to help prevent electrical outages caused by trees or wildlife coming into contact with power distribution lines. It is manufactured from high-quality UV-resistant, Non-tracking Polyolefin material.  It is designed to insulate existing bare lines without costly conductor replacement expenditures or additional line hardware.These covers provide a layer of electrical insulation for Phase-to-Phase and Phase-to-Ground protection from birds and animals.\n\nAEX's Overhead Line Cover is a Medium Voltage Wrap Around Overhead Line Cover that provides retrofit insulation for overhead conductors to help prevent electrical outages caused by trees or wildlife coming into the contact with distribution lines. It is manufactured from high-quality UV resistant Polyolefin material. These covers provide a layer of electrical insulation for Phase-to-Phase and Phase-to-Ground protection from bird and animals.",
        image: "/images/no.3-transformer-busduct-industry/product-and-application/3-6-overhead-line-cover.jpg",
        images: [
          "/images/no.3-transformer-busduct-industry/product-and-application/3-6-overhead-line-cover.jpg"
        ],
        features: [
          "Excellent electrical insulation",
          "UV stable and weather resistant",
          "Prevents incidental short circuits",
          "Durable and long-lasting"
        ],
        applications: [
          "Overhead conductors",
          "Distribution lines",
          "Substation connections"
        ]
      },
      {
        label: "Overhead Line Tube - Polyolefin",
        slug: "overhead-line-tube-polyolefin",
        href: "/industries/transformer-and-busduct-industry/overhead-line-tube-polyolefin",
        description: "Insulating tubes for comprehensive protection of overhead lines.",
        longDescription: "AEX's Overhead Line Tube is a Medium Voltage Tubular type Line Cover that provides insulation for overhead conductors to help prevent electrical outages caused by trees or wildlife coming into contact with Power distribution lines. It is manufactured from high-quality UV-resistant, Non-tracking Polyolefin material. \n\nAEX's Overhead Line Tube is a Medium Voltage Line Cover that provides insulation for overhead conductors to help prevent electrical outages caused by trees or wildlife coming into the contact with distribution lines. It is manufactured from high-quality UV resistant Polyolefin material.",
        image: "/images/no.3-transformer-busduct-industry/product-and-application/3-7-overhead-line-tube.png",
        images: [
          "/images/no.3-transformer-busduct-industry/product-and-application/3-7-overhead-line-tube.png"
        ],
        features: [
          "Superior tracking resistance",
          "Excellent weatherability",
          "High mechanical strength",
          "Easy to install"
        ],
        applications: [
          "Overhead lines",
          "Transmission networks",
          "Distribution networks"
        ]
      }
    ]
  },
  {
    slug: "electric-utilities-power-transmission",
    title: "Electric Utilities For Power Transmission And Distribution",
    shortTitle: "Power Transmission",
    description: "Wide range of electrical insulation systems and wildlife protection products for power generation, transmission, and distribution.",
    longDescription:
      "Electric utilities play a crucial role in the Generation, Transmission, and Distribution of Electrical Power to meet the energy needs of communities, industries, and individuals. These utilities form the backbone of the Power sector, facilitating the delivery of electricity from power plants to end-users.\n\n AEX offers a wide range of solutions for Electrical Insulation systems, which are used worldwide by Electrical Utilities, Industries & Original Equipment Manufacturers for the insulation of bare parts in the Electrical network. AEX is committed to provide the highest quality Power Cable Accessories and Wildlife Protection Products/Insulation Enhancement Products. It is a trusted name amongst major stakeholders in the global energy industry.  We have created value in this segment by designing and manufacturing innovative solutions to boost productivity, minimize energy losses and engineering safe connections. ",
    image: "/images/no.4-electric-utilities-power-transmission/unnamed.jpg",
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
    subItems: [
      {
        label: "Heat Shrinkable Cable Jointing Kits",
        slug: "heat-shrinkable-cable-jointing-kits",
        href: "/industries/electric-utilities-power-transmission/heat-shrinkable-cable-jointing-kits",
        description: "Complete kits for creating reliable cable joints in power distribution networks.",
        longDescription: "AEX is the World leader in High-performance Power Cable Accessories. AEX offers Heat Shrink Joints for all types of PVC/PILC/XLPE/EPR Power Cables up to 66kV. The design specification and quality of AEX Heat Shrink Power Cable accessories meet and conform to the various National and International standards and tested as per IEC, CENELEC, IS Standards from leading independent test laboratories such as CPRI and ERDA. \n\n AEX is one of the leaders in designing and manufacturing Heat Shrink Joints for the most modern PVC/PILC/XLPE/EPR Low & Medium Voltage Power Cable up to 66kV Class.The design specification and  quality of our Heat Shrink Cable accessories have been upheld by the most stringent national/International standards worldwide.",
        image: "/images/no.4-electric-utilities-power-transmission/product-and-application/4-1-product-heat-shrinkable-cable-jointing-kits.jpg",
        images: [
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-1-product-heat-shrinkable-cable-jointing-kits.jpg",
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-1-application-heat-shrinkable-cable-jointing-kits.webp"
        ],
        features: [
          "Complete jointing solution",
          "Excellent electrical insulation",
          "Environmental sealing",
          "High mechanical strength"
        ],
        applications: [
          "Power distribution networks",
          "Underground cables",
          "Industrial installations"
        ]
      },
      {
        label: "Heat Shrinkable Cable Terminations",
        slug: "heat-shrinkable-cable-terminations",
        href: "/industries/electric-utilities-power-transmission/heat-shrinkable-cable-terminations",
        description: "Provides excellent electrical insulation and stress control for cable terminations.",
        longDescription: "AEX is the World leader in High-performance Power Cable Accessories. AEX offers Class 1 Termination for all types of PVC/PILC/XLPE/EPR Power Cables up to 66kV. The design specification and quality of AEX Heat Shrink Power Cable accessories meet and conform to the various National and International standards and tested as per IEC, CENELEC, IS Standards from leading independent test laboratories such as CPRI and ERDA. \n\n AEX offers unsurpassed technical superiority for perfect Termination of most modern PVC/PILC/XLPE/EPR Low & Medium Voltage Power Cable up to 66kV Class. We provide CLASS 1 Terminations to Electrical Industries. Our Cable Terminations are made considerably tamper proof from environmental factors as the entire length between the wire termination point and contact is safely encapsulated with this protective product.",
        image: "/images/no.4-electric-utilities-power-transmission/product-and-application/4-2-product-heat-shrinkable-cable-termination-kits.jpeg",
        images: [
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-2-product-heat-shrinkable-cable-termination-kits.jpeg",
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-2-application-heat-shrinkable-cable-termination-kits.jpeg",
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-2-heat-shrink-cable-termination-kits.jpeg"
        ],
        features: [
          "Excellent stress control",
          "Reliable insulation",
          "Weather resistant",
          "Easy to install"
        ],
        applications: [
          "Power utilities",
          "Substations",
          "Distribution networks"
        ]
      },
      {
        label: "Asset & Wildlife Protection Products",
        slug: "asset-and-wildlife-protection-products",
        href: "/industries/electric-utilities-power-transmission/asset-and-wildlife-protection-products",
        description: "Insulating covers designed to protect connections and prevent wildlife-related outages.",
        longDescription: "High-voltage insulating products for underground and overhead systems in electrical supply utilities, railways, OEMs & major industrial companies. They improve systems' reliability and prevent costly damages to equipment caused by accidental inter-phase or phase to ground bridging. Bridging occurs when birds, animals, vegetation, air-bourne debris and even vandalism come in contact with bare electrical systems in substations, overhead lines and related equipment. By insulating strategic areas, it is possible to eliminate such problems, and in areas of growing environmental awareness such as protection of endangered species, insulation products allow wildlife to move freely without being electrocuted.",
        image: "/images/no.4-electric-utilities-power-transmission/product-and-application/4-3-bushing-insulation-covers.jpg",
        images: [
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-3-bushing-insulation-covers.jpg"
        ],
        features: [
          "Prevents wildlife-induced outages",
          "Excellent UV and weather resistance",
          "High dielectric strength",
          "Easy installation"
        ],
        applications: [
          "Substations",
          "Overhead power lines",
          "Transformer connections"
        ]
      },
      {
        label: "Overhead Line Cover",
        slug: "overhead-line-cover",
        href: "/industries/electric-utilities-power-transmission/overhead-line-cover",
        description: "Covers for insulating bare overhead conductors.",
        longDescription: "AEX's Overhead Line Cover is a Medium Voltage Wrap-Around type Overhead Line Cover that provides state-of-the-art insulation to Overhead conductors to help prevent electrical outages caused by trees or wildlife coming into contact with power distribution lines. It is manufactured from high-quality UV-resistant, Non-tracking Polyolefin material. It is designed to insulate existing bare lines without costly conductor replacement expenditures or additional line hardware.These covers provide a layer of electrical insulation for Phase-to-Phase and Phase-to-Ground protection from birds and animals.\n\nAEX's Overhead Line Cover is a Medium Voltage Wrap Around Overhead Line Cover that provides retrofit insulation for overhead conductors to help prevent electrical outages caused by trees or wildlife coming into the contact with distribution lines. It is manufactured from high-quality UV resistant Polyolefin material. These covers provide a layer of electrical insulation for Phase-to-Phase and Phase-to-Ground protection from bird and animals.",
        image: "/images/no.4-electric-utilities-power-transmission/product-and-application/4-4-overhead-line-cover.jpg",
        images: [
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-4-overhead-line-cover.jpg"
        ],
        features: [
          "Excellent electrical insulation",
          "UV stable and weather resistant",
          "Prevents incidental short circuits",
          "Durable"
        ],
        applications: [
          "Overhead conductors",
          "Distribution lines",
          "Substation connections"
        ]
      },
      {
        label: "Overhead Line Tube",
        slug: "overhead-line-tube",
        href: "/industries/electric-utilities-power-transmission/overhead-line-tube",
        description: "Insulating tubes for comprehensive protection of overhead lines.",
        longDescription: "AEX's Overhead Line Tube is a Medium Voltage Tubular type Line Cover that provides insulation for overhead conductors to help prevent electrical outages caused by trees or wildlife coming into contact with Power distribution lines. It is manufactured from high-quality UV-resistant, Non-tracking Polyolefin material. \n\nAEX's Overhead Line Tube is a Medium Voltage Line Cover that provides insulation for overhead conductors to help prevent electrical outages caused by trees or wildlife coming into the contact with distribution lines. It is manufactured from high-quality UV resistant Polyolefin material.",
        image: "/images/no.4-electric-utilities-power-transmission/product-and-application/4-5-overhead-line-tube.png",
        images: [
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-5-overhead-line-tube.png"
        ],
        features: [
          "Superior tracking resistance",
          "Excellent weatherability",
          "High mechanical strength",
          "Easy to install"
        ],
        applications: [
          "Overhead lines",
          "Transmission networks",
          "Distribution networks"
        ]
      },
      {
        label: "Heat Shrink Pole Protection Sleeves",
        slug: "heat-shrink-pole-protection-sleeves",
        href: "/industries/electric-utilities-power-transmission/heat-shrink-pole-protection-sleeves",
        description: "Sleeves to protect utility poles from environmental damage and wildlife.",
        longDescription: "AEX's Heat Shrink Pole Protection Sleeve is used to seal and protect the Wooden Electric Poles and the Street lighting poles from Corrosion. These Sleeves are Superior moisture resistance coupled with excellent mechanical protection. It also provides electrical insulation. It is manufactured from high-quality Cross-linked Polyolefin material. This Sleeve is to be folded around the Poles, zipped up with a stainless steel channel, and then to shrink it by using hot air gun or flame tourch.\n\nAEX's Heat Shrink Pole Protection Sleeve is manufactured from High quality Cross-linked Polyolefin material.It provides superior environmental sealing, rugged mechanical protection and high-performance electrical insulation. It is used on Woodenpoles to prevent the decay of Poles at the critical ground-line area. It is the Best & Cost-effective Solution for long-term maintenance of Poles.",
        image: "/images/no.4-electric-utilities-power-transmission/product-and-application/4-6-pole-protection-sleeve-application-image.png",
        images: [
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-6-pole-protection-sleeve-application-image.png"
        ],
        features: [
          "Environmental protection",
          "Wildlife deterrence",
          "UV resistant",
          "Extends pole lifespan"
        ],
        applications: [
          "Utility poles",
          "Power distribution",
          "Telecommunications"
        ]
      },
      {
        label: "Heat Shrink Busbar Insulating Sleeves",
        slug: "heat-shrink-busbar-insulating-sleeves",
        href: "/industries/electric-utilities-power-transmission/heat-shrink-busbar-insulating-sleeves",
        description: "Provides electrical insulation and protection against flashovers for busbars.",
        longDescription: "HAEX’s Heat Shrink Busbar Insulating Sleeve is used to insulate Copper and Aluminium Busbars. These Sleeves provide Insulation enhancement and protection against flashover and accidentally induced discharge. \n\n The Busbar Sleeves can be used in confined spaces to reduce the clearance necessary between busbar phases in Medium Voltage Switchgears up to 36kV. The use of Busbar Sleeves allows equipment designers the liberty to reduce air spacing between busbars, such as in the manufacture of switchgear cabinets where space is at a premium.\n\nAEX's Heat Shrink Busbar Sleeve is heat shrinkable sleeve designed to insulate busbar systems up to 66KV and also to protect against accidental flash-over. It helps to reduces the air clearance. The sleeves are manufactured from high-quality cross-linked polyolefin material. Meets ANSI C37.20.2 standards for MV switchgear application up to 66 kV.",
        image: "/images/no.4-electric-utilities-power-transmission/product-and-application/4-7-product-heat-shrink-busbar-insulating-sleeves.jpg",
        images: [
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-7-product-heat-shrink-busbar-insulating-sleeves.jpg",
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-7-application-heat-shrink-busbar-insulating-sleeves.jpg"
        ],
        features: [
          "High dielectric strength",
          "Protects against flashovers",
          "UV stable",
          "Weather resistant"
        ],
        applications: [
          "Busducts",
          "Substations",
          "Power distribution"
        ]
      },
      {
        label: "Heat Shrink Tape",
        slug: "heat-shrink-tape",
        href: "/industries/electric-utilities-power-transmission/heat-shrink-tape",
        description: "Versatile insulating tapes for busbars and complex connections.",
        longDescription: "AEX’s high voltage Heat Shrink Busbar Insulation Tapes are adhesive-coated tapes that provide Insulation enhancement and protection against accidentally induced flashovers for Copper or Aluminium busbar sections where tube products cannot easily be applied. \n\nThe AHT tapes are quick and easy to install. Upon application of heat, the tapes shrink and the adhesive lining melts, joining the overlapping layers to produce a complete seal. \n\nAEX's Heat Shrink Tape is used for Insulation & protection of medium voltage busbar connections, where tubing cannot be used.",
        image: "/images/no.4-electric-utilities-power-transmission/product-and-application/4-8-product-heat-shrink-busbar-insulating-tapes.jpg",
        images: [
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-8-product-heat-shrink-busbar-insulating-tapes.jpg",
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-8-application-heat-shrink-busbar-insulating-tapes.png"
        ],
        features: [
          "Highly flexible",
          "Ideal for complex shapes",
          "Excellent electrical insulation",
          "Easy application"
        ],
        applications: [
          "Complex bends",
          "Substation connections",
          "Repair and maintenance"
        ]
      },
      {
        label: "Heat Shrink Wrap Around Sleeves",
        slug: "heat-shrink-wrap-around-sleeves",
        href: "/industries/electric-utilities-power-transmission/heat-shrink-wrap-around-sleeves",
        description: "Designed for cable repair and jointing without cutting the cable.",
        longDescription: "AEX’s Heat Shrink Wrap Around Sleeves (AWS) is used for sealing and repairing the damaged sheaths of all Polymeric and Rubber-insulated cables with polyethylene or metal jackets and the Conductors. \n\nThese Sleeves are ideal for Joint outer sheath rebuilding on both LV and MV applications when there is a limitation of space, or when parking the outer jacket Tubing is difficult. It is used as an outer jacket in Cable Joints for mechanical protection.\n\nAEX's Wrap Around Sleeve is Cross-linked polyolefin Sleeve which is folded around the cable/pipe, zipped up with a stainless steel channel and then heat shrunk. It is used as an outer jacket in Cable Joints for mechanical protection. It is also used to repair a Cable jacket. ",
        image: "/images/no.4-electric-utilities-power-transmission/product-and-application/4-9-product-heat-shrink-wraparound-sleeve.jpg",
        images: [
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-9-product-heat-shrink-wraparound-sleeve.jpg",
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-9-application-heat-shrink-wraparound-sleeve.jpg"
        ],
        features: [
          "No need to cut cable",
          "Quick and easy repair",
          "Excellent environmental sealing",
          "Durable"
        ],
        applications: [
          "Cable repair",
          "Power distribution",
          "Maintenance"
        ]
      },
      {
        label: "Heat Shrink Low Voltage Cable Breakouts",
        slug: "heat-shrink-low-voltage-cable-breakouts",
        href: "/industries/electric-utilities-power-transmission/heat-shrink-low-voltage-cable-breakouts",
        description: "Seals and protects multi-core cable breakouts.",
        longDescription: "AEX’s Heat Shrink Low Voltage Cable Breakouts are used to insulate and seal the crutches of 2, 3, 4, 5, 6, and 7 core XLPE, PVC, PILC and Rubber insulated Cables up to 3.3kV. \n\n The Breakouts are made from thermally stabilised Cross-linked halogen-free Polyolefin material that offers abiding service reliability. It contains a minimum of 2.5% carbon to protect it from ultraviolet rays. \n\n AEX's Heat Shrink Low Voltage Cable Breakouts provides a strong and permanent environmental seal to the crutch of 2, 3, 4, 5, 6 and 7 core PVC, XLPE Rubber and PILC cables upto 3.3 KV rated voltage. The Breakouts are Manufactured form high quality cross-linked polyolefin material that  offer an exceptional insulation and long term service reliability. ",
        image: "/images/no.4-electric-utilities-power-transmission/product-and-application/4-10-heat-shrink-lv-breakout.jpg",
        images: [
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-10-heat-shrink-lv-breakout.jpg",
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-10-heat-shrink-lv-breakout-application.jpg"
        ],
        features: [
          "Watertight seal",
          "Mechanical protection",
          "UV resistant",
          "Excellent electrical insulation"
        ],
        applications: [
          "Multi-core cables",
          "Power distribution",
          "Cable terminations"
        ]
      },
      {
        label: "Heat Shrink Cable End Sealing Caps",
        slug: "heat-shrink-cable-end-sealing-caps",
        href: "/industries/electric-utilities-power-transmission/heat-shrink-cable-end-sealing-caps",
        description: "Provides mechanical and environmental protection to cable ends.",
        longDescription: "AEX’s Heat Shrink End Sealing Caps are designed to provide mechanical protection and an environmental seal against moisture and dirt to all types of Power Cable ends. AEX Heat Shrink End Caps are made from high-quality Cross-linked Polyolefin material that is halogen-free. It contains a minimum of 2.5% carbon to protect it from ultraviolet rays. \n\n AEX's Heat Shrink Cable End Caps are  designed to provide Mechanical protection and environmental seal to Power cable ends.The caps are manufactured from high quality cross linked polyolefin material. It provides a temper proof sealing to cable ends to avoid claims due to cable pilferage.",
        image: "/images/no.4-electric-utilities-power-transmission/product-and-application/4-11-product-heat-shrink-end-cap.jpg",
        images: [
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-11-product-heat-shrink-end-cap.jpg",
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-11-application-heat-shrink-end-cap.jpg",
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-11-heat-shrink-cable-end-sealing-caps-installed-on-cables-in-cable-drum.jpeg"
        ],
        features: [
          "Environmental seal",
          "Moisture and dirt protection",
          "UV resistant",
          "Easy to install"
        ],
        applications: [
          "Cable storage",
          "Power distribution",
          "Cable transportation"
        ]
      },
      {
        label: "Heat Shrink Live End Caps",
        slug: "heat-shrink-live-end-caps",
        href: "/industries/electric-utilities-power-transmission/heat-shrink-live-end-caps",
        description: "Seals and insulates live cable ends safely.",
        longDescription: "AEX's Heat Shrink Live End Caps (AECL) are used to seal the ends of the Live cables. It is made from thermally stabilized Cross-linked Polyolefin Material. It is the kit of 4 small End Caps and 1 big end caps with Flash symbol printed on it. \n\n AEX's Heat Shrink Live End Caps are used to seal the ends of the Live cables.",
        image: "/images/no.4-electric-utilities-power-transmission/product-and-application/4-12-heat-shrink-live-end-caps.jpg",
        images: [
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-12-heat-shrink-live-end-caps.jpg"
        ],
        features: [
          "Safe sealing of live ends",
          "Excellent electrical insulation",
          "Moisture protection",
          "Reliable performance"
        ],
        applications: [
          "Live cable ends",
          "Power distribution",
          "Maintenance operations"
        ]
      },
      {
        label: "Heat Shrink Medium and Heavy Wall Tubing",
        slug: "heat-shrink-medium-and-heavy-wall-tubing",
        href: "/industries/electric-utilities-power-transmission/heat-shrink-medium-and-heavy-wall-tubing",
        description: "Superior insulation and mechanical protection for cable joints.",
        longDescription: "AEX’s Heat Shrink Medium Wall Tubing (AMT) and Heavy Wall Tubing (AHT) are made from thermally stabilised Cross-linked Polyolefin material that offers abiding service reliability in severe climatic conditions and in polluted environments. \n\nBy applying the heat, the tubing shrinks to the original smaller extruded diameter, fitting tightly over a wide range of Cable sizes and Cable accessories. The inside-coated Hot melt adhesive melts and flows throughout the shrinking process and gives a reliable moisture seal over even the most irregular shapes. \n\n AEX's Medium wall and Heavy wall black tubing are used for environmental and mechanical protection of low voltage and medium voltage Cable Joints and insulating the connectors for low voltage straight through joints/splice rated up to 3.3KV. These tubes are manufactured from high-quality cross-inked polyolefin material.",
        image: "/images/no.4-electric-utilities-power-transmission/product-and-application/4-13-product-heat-shrink-medium-and-heavy-wall-tube.jpeg",
        images: [
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-13-product-heat-shrink-medium-and-heavy-wall-tube.jpeg",
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-13-application-heat-shrink-medium-and-heavy-wall-tube.jpeg",
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-13-heat-shrink-medium-heavy-wall-tubes.jpg"
        ],
        features: [
          "Superior insulation",
          "High resistance to abrasion",
          "Excellent environmental sealing",
          "Durable"
        ],
        applications: [
          "Cable joints",
          "Cable terminations",
          "Power distribution"
        ]
      },
      {
        label: "Bushing Boot",
        slug: "bushing-boot",
        href: "/industries/electric-utilities-power-transmission/bushing-boot",
        description: "Provides insulation and protection for transformer bushings.",
        longDescription: "AEX's Bushing Boots are non-tracking elastomeric insulating boots, used in conjunction with Cable Terminations. They fit over the bushings of switchgear, insulating the area between the cable connector in either right angled or straight bushing connections. They are designed to enhance the phase-to-phase and phase-to-earth insulation. They are used in Switchgear and Transformer Cable boxes up to 36kV, particularly where air clearances are not sufficient for normal operation, and they also protect against flashovers in the event of any surge impulse, high humidity, or rodent menace contact.\n\nBushing Boots are non-tracking elastomeric insulating boots that are used in conjunction with terminations. They fit over the bushings of Switchgear, insulating the area between the cable connector in either right-angled or straight bushing connections. They are designed to enhance the phase-to-phase and phase-to-earth insulation. The boots can be used up to 24 KV application & protect against flashover or surges induced in switchgear & transformer boxes.",
        image: "/images/no.4-electric-utilities-power-transmission/product-and-application/4-14-product-bushing-boot.jpg",
        images: [
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-14-product-bushing-boot.jpg",
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-14-application-bushing-boot.jpg"
        ],
        features: [
          "High tracking resistance",
          "UV resistant",
          "Protects against animal intrusion",
          "Easy to install"
        ],
        applications: [
          "Transformer bushings",
          "Substation equipment",
          "Power utilities"
        ]
      },
      {
        label: "Heat Shrink Right Angle and Straight Boot",
        slug: "heat-shrink-right-angle-and-straight-boot",
        href: "/industries/electric-utilities-power-transmission/heat-shrink-right-angle-and-straight-boot",
        description: "Insulating boots for protecting connections.",
        longDescription: "AEX’s Heat Shrink Right Angle and Straight Boots fit over the connection between a Termination’s cable lug and an equipment bushing, to provide phase-to-phase and phase-to-ground insulation. \n\n They are used in Switchgear and Transformer Cable boxes up to 36kV, particularly where air clearances are not sufficient for normal operation, and they also protect against flashovers in the event of any surge impulse, high humidity, or rodent menace contact. The boots are made from thermally stabilized Non-tracking Cross-linked material for excellent insulation and weather-resistant properties. \n\n AEX's Angleboots are Heat Shrink Right Angle / Straight Boots provide insulation to the bushings in the cable termination box, where the clearance between phase to phase and phase to earth is less then the normal air clearance. These boots provide protection against flashover in the event of high humidity, rodent menace and surge impulse.",
        image: "/images/no.4-electric-utilities-power-transmission/product-and-application/4-15-product-heat-shrink-right-angle-and-straight-boots.png",
        images: [
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-15-product-heat-shrink-right-angle-and-straight-boots.png",
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-15-application-heat-shrink-right-angle-and-straight-boots.png"
        ],
        features: [
          "Excellent electrical insulation",
          "Prevents flashovers",
          "Resistant to environmental factors",
          "Available in various shapes"
        ],
        applications: [
          "Utility connections",
          "Substations",
          "Power distribution"
        ]
      },
      {
        label: "Heat Shrink Pole Protection Cap",
        slug: "heat-shrink-pole-protection-cap",
        href: "/industries/electric-utilities-power-transmission/heat-shrink-pole-protection-cap",
        description: "Caps to protect the top of utility poles.",
        longDescription: "AEX's Heat Shrink Pole Protection Cap is used to seal and protect the top of the Wooden Electric Poles from ingress of water and moisture. It is manufactured from thermally stabilized Cross-linked Polyolefin material. It improves the life of Poles. \n\n AEX's Pole Cap is Heat Shrink Cap, used to cover the top of the Wooden Power Pole & to protect it from ingress of water / moisture, thereby increasing Pole life. These Caps are manufactured from high-quality cross inked polyolefin material. ",
        image: "/images/no.4-electric-utilities-power-transmission/product-and-application/4-16-pole-cap-application.png",
        images: [
          "/images/no.4-electric-utilities-power-transmission/product-and-application/4-16-pole-cap-application.png"
        ],
        features: [
          "Waterproof seal",
          "Prevents rot and degradation",
          "UV resistant",
          "Easy to install"
        ],
        applications: [
          "Utility poles",
          "Power distribution",
          "Telecommunications"
        ]
      }
    ]
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
    subItems: [
      {
        label: "Wildlife Protection Covers",
        slug: "wildlife-protection-covers",
        href: "/industries/asset-and-wildlife-protection/wildlife-protection-covers",
        description: "Specialized insulating covers to protect wildlife and prevent electrical faults on overhead equipment.",
        longDescription: "AEX Wildlife Protection Covers are engineered to provide a reliable insulating barrier for transformer bushings, cross-arms, and other critical overhead equipment. These covers are essential for preventing accidental bridging by birds and animals, ensuring both wildlife safety and grid reliability. Manufactured from high-quality, UV-stabilized polyolefin, they offer exceptional weather resistance and a long service life in harsh outdoor environments.",
        image: "/images/resource/p3m14.jpg",
        features: ["UV stabilized material", "Easy snap-on installation", "Rated for 11kV to 33kV", "Weather resistant", "Flame retardant"],
        applications: ["Transformer bushings", "Substation equipment", "Overhead cross-arms", "Jumper wire protection"]
      },
      {
        label: "Overhead Line Covers",
        slug: "overhead-line-covers",
        href: "/industries/asset-and-wildlife-protection/overhead-line-covers",
        description: "Flexible insulating covers for bare overhead conductors providing phase-to-phase protection.",
        longDescription: "Our Overhead Line Covers provide a robust insulating layer for bare conductors in urban areas and wildlife corridors. They are designed for easy installation without the need for power outages, offering an immediate solution to reduce fault rates caused by environmental factors. The flexible design allows for application on various conductor sizes and configurations.",
        image: "/images/resource/p3m14.jpg",
        features: ["Retrofit installation", "Flexible design", "UV resistant", "High dielectric strength"],
        applications: ["Urban distribution lines", "Wildlife corridors", "Temporary insulation"]
      },
      {
        label: "Overhead Line Tubes",
        slug: "overhead-line-tubes",
        href: "/industries/asset-and-wildlife-protection/overhead-line-tubes",
        description: "Continuous heat shrink insulation for bare overhead conductors.",
      },
      {
        label: "Busbar Sleeves",
        slug: "busbar-sleeves",
        href: "/industries/asset-and-wildlife-protection/busbar-sleeves",
        description: "Insulating sleeves for outdoor busbar connections.",
      },
      {
        label: "Heat Shrink Tape",
        slug: "busbar-tape",
        href: "/industries/asset-and-wildlife-protection/busbar-tape",
        description: "Insulating tape for irregular busbar shapes and joints.",
      },
    ],
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
    subItems: [
      { label: "Heat Shrink Pre-Insulated Pipe Seals", href: "/products/heat-shrink-moulded-components/pre-insulated-pipe-seals" },
      { label: "Heat Shrink Tubing", href: "/products/heat-shrink-tubing" },
      { label: "Heat Shrink Wrap Around Sleeves", href: "/products/heat-shrink-wrap-around-sleeves" },
      { label: "Mastic Tapes", href: "/products/tapes-and-sealants" },
    ],
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
    subItems: [
      { label: "Heat Shrink Pole Caps", href: "/products/heat-shrink-moulded-components/cable-end-caps" },
      { label: "Heat Shrink Pole Protection Sleeves", href: "/products/heat-shrink-wrap-around-sleeves/for-poles" },
    ],
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

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}

export function getIndustrySlugs() {
  return industries.map((i) => i.slug);
}

export function getIndustrySubItem(industrySlug: string, subSlug: string) {
  const industry = getIndustryBySlug(industrySlug);
  return industry?.subItems?.find((s) => s.slug === subSlug);
}

export function getAllIndustrySubItemParams() {
  const params: { slug: string; sub: string }[] = [];
  industries.forEach((industry) => {
    industry.subItems?.forEach((sub) => {
      if (sub.slug) {
        params.push({ slug: industry.slug, sub: sub.slug });
      }
    });
  });
  return params;
}
