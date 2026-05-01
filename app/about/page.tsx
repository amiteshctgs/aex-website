import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faArrowRight,
  faFlask,
  faCogs,
  faUsers,
  faGlobe,
  faHandshake,
  faLeaf,
  faStar,
  faLightbulb,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons";
import PageTitle from "@/components/PageTitle";
import StatsCounter from "@/components/StatsCounter";
import DownloadPdfButton from "@/components/DownloadPdfButton";

export const metadata: Metadata = {
  title: "About AEX Heat Shrink — Global Manufacturer | AEX International Engineering",
  description:
    "Learn about AEX International Engineering Works Pvt. Ltd. — decades of experience in thermoplastics and thermoset polymers. 200,000 sq ft facility, 400+ workforce, ISO certified, export to 50+ countries.",
};

const productRange = [
  "Heat Shrink Cable End Caps",
  "Heat Shrink Low Voltage Breakouts",
  "Heat Shrink Non-Tracking Breakouts",
  "Heat Shrink Creepage-Extension Skirts",
  "Heat Shrink Right Angled & Straight Boots",
  "Heat Shrink Anode Caps",
  "Heat Shrink Pre-Insulated Pipe Sealing Caps",
  "Heat Shrink Medium & Heavy Wall Tubes",
  "Heat Shrink Busbar Sleeves",
  "Heat Shrink Non-Tracking Tubes",
  "Heat Shrink Wrap Around Sleeves",
  "Heat Shrink Thin Wall Tubes",
  "Heat Shrink Dual Wall Tubes",
  "Heat Shrink Tape & Mastic Tape",
  "Heat Shrink Cable Joints & Terminations",
  "Metal & Brass Fittings",
];

const keyStrengths = [
  {
    icon: faStar,
    title: "35+ Year Legacy",
    text: "Backed by Apple International Engineering Works Pvt. Ltd. — 35+ years in Electrical Accessories, Earthing and Lightning Protection.",
  },
  {
    icon: faFlask,
    title: "In-House R&D",
    text: "Customer-led innovation at our core. We invest in R&D to stretch the boundaries of Injection Moulding and Extrusion.",
  },
  {
    icon: faIndustry,
    title: "Widest Machine Range in India",
    text: "We possess one of the widest ranges of capacity machines in India — from injection moulding to extrusion and anti-static treatment.",
  },
  {
    icon: faUsers,
    title: "400+ Skilled Workforce",
    text: "Experts in Injection Moulding, Extrusion, Anti-Static Treatment, Project Management, and Supply Chain Management.",
  },
  {
    icon: faGlobe,
    title: "Global Reach",
    text: "Clients, Distributors, and International branches across the Americas, Asia/Pacific, and EMEA regions.",
  },
  {
    icon: faLeaf,
    title: "Eco-Friendly Products",
    text: "RoHS compliant, halogen-free, low-smoke product ranges designed for safer, greener industrial operations worldwide.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageTitle
        title="About AEX"
        breadcrumbs={[{ label: "About AEX" }]}
      />

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 block">
          
          {/* Floated Image */}
          <div className="relative float-none md:float-left w-full md:w-1/2 lg:w-5/12 mb-10 md:mb-6 md:mr-10 lg:mr-14">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/resource/welcome.jpg"
                alt="AEX International Engineering — Manufacturing"
                width={600}
                height={450}
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-primary text-white rounded-2xl p-5 text-center shadow-xl hidden md:block z-10">
              <div className="text-4xl font-extrabold">35+</div>
              <div className="text-sm font-semibold">Years of Legacy</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="section-subtitle">Welcome to AEX Heat Shrink</p>
            <h2 className="section-title mb-6">
              With Decades of Proven Experience, Our Team Is Prepared to Help You Achieve Your Goals, And Beyond.
            </h2>
            
            <div className="text-gray-600 leading-relaxed space-y-5 text-justify">
              <p>
                We have a deep advantage of many years of experience in processing a wide variety of Thermoplastics and Thermoset Polymers including Flame-retardant materials across many industries.
              </p>
              <p>
                Guided by our Policy of Innovation and flexibility, AEX leads the way in supplying high-quality services to the Energy industry worldwide. 
              </p>
              <p>
                AEX is recognized as a worldwide leader in manufacturing a wide range of Heat Shrinkable Moulded Products, Heat Shrink Tubes, Power Cable Accessories, Insulation Enhancement Products, etc. Our Product range consists of Heat Shrink Cable End Caps, Heat Shrink Low Voltage Breakouts, Heat Shrink Non-Tracking Breakouts, Heat Shrink Creepage-extension Skirts, Heat Shrink Right Angled and Heat Shrink Straight Boots, Heat Shrink Anode Caps, Heat Shrink Pre-Insulated Pipe Sealing Caps, Heat Shrink Medium and Heavy Wall Tubes, Heat Shrink Busbar Insulating Sleeves, Heat Shrink Wraparound Sleeves, Wildlife Protection Products etc.
              </p>
              <p>
                AEX is committed to supplying highest quality products to major stakeholders in the global energy industry. We have created value in this segment by designing and manufacturing innovative solutions to boost productivity, minimize energy losses, and engineer safe connections. AEX supports the transition to sustainable energy infrastructure. Quality is fundamental to everything we do.
              </p>
              <p>
                Our R&D team and manufacturing setups employ cutting-edge processes to deliver products of the highest standard to our customers. To ensure maximum reliability and to consistently meet customer expectations, all AEX products are subject to stringent quality management and testing procedures. Testing starts with the incoming raw materials, spans through the manufacturing process, and finally extends to checking the performance of the end products. AEX has an established quality assurance structure designed strictly following ISO 9001 and ISO 14001, to ensure quality is maintained in the product and services delivered. AEX&apos;s test facility is capable of conducting performance tests of Cable Accessories according to all major national and international standards. Independent type testing of products plays an important role in reassuring customers of our product quality and reliability. To meet this requirement, AEX&apos;s Power Cable Accessories have been tested to international standards at Independent Accredited Testing Facilities worldwide.
              </p>
            </div>
            
            <div className="clear-both pt-8 flex flex-wrap gap-4">
              <Link href="/facility" className="btn-primary">
                Our Facility <FontAwesomeIcon icon={faArrowRight} />
              </Link>
              <Link href="/strength" className="btn-secondary">
                Strength &amp; Values
              </Link>
              <DownloadPdfButton />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsCounter />

      {/* Product Range */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="section-subtitle">Our Product Range</p>
              <h2 className="section-title mt-3 mb-5">
                A Comprehensive Range of Heat Shrink Solutions
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our Product range consists of a complete portfolio of heat shrink products designed
                to meet the demands of electrical, industrial, and energy sectors worldwide:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {productRange.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-brand-primary mt-0.5 flex-shrink-0 text-xs"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/products/heat-shrink-moulded-components" className="btn-primary">
                  View All Products <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 lg:h-full min-h-[400px]">
              <Image
                src="/images/resource/feature52.jpg"
                alt="AEX Heat Shrink Products Range"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <p className="section-subtitle">Our Solutions</p>
            <h2 className="section-title mt-3">AEX International Engineering Solutions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg italic border-l-4 border-brand-primary pl-4 py-2 bg-brand-light rounded-r-xl">
                &quot;AEX International, a group of Apple International, a remarkable history of over 30 years in manufacturing all the types of Metal Parts under the brand APPLE. The spirit of perseverance has served us well in the last 30 years, reason why our manufacturing unit is one of the largest of its kind in Asia. AEX is a leading manufacturer of high-quality Power Cable Accessories, Heat Shrinkable Products, Busbar Insulation Products, Products for Pre-insulated Pipe Sealing Systems and Metal fittings in India. We have emerged to become one of the largest heat shrink manufacturers in the world. AEX provides electrical and mechanical insulation solutions to the Electrical Utilities, Power and Telecom industries and Automotive and Electronics markets.&quot;
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                AEX is one of the most experienced companies focussing solely on the Energy sectors and providing customised solutions to Electrical Insulating Industries. We provide a wide range of products, which are designed and produced to the highest International Standards.
              </p>
              <Link href="/products/heat-shrink-moulded-components" className="btn-primary">
                Explore Solutions <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 min-h-[400px]">
              <Image
                src="/images/resource/feature52.jpg"
                alt="AEX Solutions"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* R&D & Advanced Tech — split */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subtitle">Innovation &amp; Technology</p>
            <h2 className="section-title mt-3">Pushing the Boundaries of Polymer Engineering</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* R&D Card */}
            <div className="group bg-brand-light rounded-2xl p-10 border border-gray-100 hover:border-brand-primary/40 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-brand-primary/10 group-hover:bg-brand-primary rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                <FontAwesomeIcon
                  icon={faFlask}
                  className="text-brand-primary group-hover:text-white text-xl transition-colors"
                />
              </div>
              <h3 className="text-xl font-extrabold text-brand-primary mb-3">
                Research and Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Customer-led innovation is core to the success of AEX. We are struggling very hard
                to turn the <strong>Possibilities into Realities</strong>. Always striving to exceed
                client requirements, AEX invests in Research and Development, and technologies to
                stretch the boundaries of <strong>Injection Moulding and Extrusion</strong> and be
                at the forefront of breakthroughs in the Plastic moulding industry.
              </p>
            </div>

            {/* Advanced Tech Card */}
            <div className="group bg-brand-light rounded-2xl p-10 border border-gray-100 hover:border-brand-primary/40 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-brand-primary/10 group-hover:bg-brand-primary rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                <FontAwesomeIcon
                  icon={faLightbulb}
                  className="text-brand-primary group-hover:text-white text-xl transition-colors"
                />
              </div>
              <h3 className="text-xl font-extrabold text-brand-primary mb-3">
                Advanced Technological Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Dedicated to meeting the latest challenges presented by societal, scientific, and
                industrial problems, AEX constantly strives to find innovative ways to meet customer
                demands, improve productivity, and comply with legislative requirements. AEX works
                closely with <strong>OEM customers</strong> to design and implement advanced solutions
                while remaining cost-effective.
              </p>
            </div>

            {/* Inclusion & Diversity */}
            <div className="group bg-brand-light rounded-2xl p-10 border border-gray-100 hover:border-brand-primary/40 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-brand-primary/10 group-hover:bg-brand-primary rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                <FontAwesomeIcon
                  icon={faHandshake}
                  className="text-brand-primary group-hover:text-white text-xl transition-colors"
                />
              </div>
              <h3 className="text-xl font-extrabold text-brand-primary mb-3">
                Inclusion and Diversity
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We are committed to our vision of a globally diverse and inclusive work environment
                where all employees are engaged, differences are respected and valued, and all opinions
                matter. To unlock the innovation needed to solve complex problems, we want top talent
                from all dimensions of diversity. The company is committed to a strategy of inclusiveness
                and to pursuing diversity in terms of backgrounds, experiences and viewpoints.
              </p>
            </div>

            {/* Global Impact */}
            <div className="group bg-brand-light rounded-2xl p-10 border border-gray-100 hover:border-brand-primary/40 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-brand-primary/10 group-hover:bg-brand-primary rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="text-brand-primary group-hover:text-white text-xl transition-colors"
                />
              </div>
              <h3 className="text-xl font-extrabold text-brand-primary mb-3">
                Global Impact
              </h3>
              <p className="text-gray-600 leading-relaxed">
                With Employees, Clients, Distributors, International branches, and our sales coming
                from the <strong>Americas, Asia/Pacific and EMEA regions</strong>, we have the advantage
                of being a truly global industrial technology leader. Our products are trusted in
                50+ countries across 6 continents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subtitle">Why Choose AEX</p>
            <h2 className="section-title mt-3">Our Core Strengths</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyStrengths.map((s) => (
              <div
                key={s.title}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-brand-primary/40 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-brand-primary/10 group-hover:bg-brand-primary rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <FontAwesomeIcon
                    icon={s.icon}
                    className="text-brand-primary group-hover:text-white text-xl transition-colors"
                  />
                </div>
                <h3 className="font-bold text-brand-primary text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, #cc0000 0%, #1a2b5f 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-yellow-400 font-semibold uppercase tracking-widest text-xs mb-4">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-gray-200 leading-relaxed mb-8 max-w-2xl mx-auto">
            We would be happy to receive your enquiries no matter what sector you&apos;re in.
            We will listen and transform your needs into solutions that allow you to fulfil your
            expectations. Clients are at the centre of everything we do — quality, reliability and
            committed service are guaranteed.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/enquiry" className="btn-primary text-lg px-8 py-4">
              Submit Enquiry <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link href="/contact" className="btn-outline text-lg px-8 py-4">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
