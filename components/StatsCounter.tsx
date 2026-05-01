"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndustry,
  faUsers,
  faGlobe,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";

const stats = [
  {
    icon: faIndustry,
    value: 200000,
    suffix: "",
    prefix: "",
    label: "Sq Ft Manufacturing",
    sublabel: "World-class facility at Jamnagar GIDC",
    color: "bg-brand-primary",
  },
  {
    icon: faUsers,
    value: 400,
    suffix: "+",
    prefix: "",
    label: "Skilled Workforce",
    sublabel: "Dedicated engineering professionals",
    color: "bg-[#1a2b5f]",
  },
  {
    icon: faGlobe,
    value: 50,
    suffix: "+",
    prefix: "",
    label: "Countries Served",
    sublabel: "Global reach across 6 continents",
    color: "bg-brand-accent",
  },
  {
    icon: faCertificate,
    value: 35,
    suffix: "+",
    prefix: "",
    label: "Years of Legacy",
    sublabel: "Through our parent company",
    color: "bg-emerald-600",
  },
];

export default function StatsCounter() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="py-16"
      style={{ background: "linear-gradient(135deg, #111111 0%, #1a1a1a 50%, #0d1b3e 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-brand-accent text-xs font-bold uppercase tracking-[0.2em] mb-2">
            By the Numbers
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            AEX at a Glance
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group text-center bg-white/5 hover:bg-white/10 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <FontAwesomeIcon icon={stat.icon} className="text-white text-xl" />
              </div>
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">
                {stat.prefix}
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix}
                  />
                ) : (
                  <span>0</span>
                )}
              </div>
              <p className="text-white font-semibold text-sm mb-1">{stat.label}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
