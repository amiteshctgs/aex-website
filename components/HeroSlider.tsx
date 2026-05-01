"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const slides = [
  {
    id: 1,
    image: "/images/main-slider/image-1.jpg",
    tag: "18+ Years of Excellence",
    title: "Innovative Heat Shrink Solutions",
    subtitle:
      "Leading manufacturer of heat shrinkable products for electrical, power, and industrial applications worldwide.",
    cta: { label: "Explore Products", href: "/products/heat-shrink-moulded-components" },
    ctaSecondary: { label: "Contact Us", href: "/contact" },
  },
  {
    id: 2,
    image: "/images/main-slider/image-2.jpg",
    tag: "ISO 9001 : 2015 Certified",
    title: "Quality You Can Rely On",
    subtitle:
      "Our products conform to rigorous international quality standards, ensuring performance and longevity in every application.",
    cta: { label: "View Certificates", href: "/certificates/iso-9001" },
    ctaSecondary: { label: "About Us", href: "/about" },
  },
  {
    id: 3,
    image: "/images/main-slider/image-3.jpg",
    tag: "Serving 50+ Countries",
    title: "Global Reach, Local Expertise",
    subtitle:
      "From Jamnagar to the world — AEX delivers reliable heat shrink solutions to over 50 countries across 6 continents.",
    cta: { label: "Get a Quote", href: "/enquiry" },
    ctaSecondary: { label: "Our Industries", href: "/industries/cable-industry" },
  },
];

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="relative h-[85vh] min-h-[500px] max-h-[800px] overflow-hidden">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className="relative flex-[0_0_100%] h-full"
            >
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={idx === 0}
                sizes="100vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/85 via-brand-secondary/60 to-transparent" />

              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 w-full">
                  <div className="max-w-xl animate-fade-in">
                    {/* Tag */}
                    <span className="inline-block bg-brand-accent text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                      {slide.tag}
                    </span>
                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
                      {slide.title}
                    </h1>
                    {/* Subtitle */}
                    <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 max-w-md">
                      {slide.subtitle}
                    </p>
                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        href={slide.cta.href}
                        className="inline-flex items-center gap-2 bg-brand-accent text-white font-bold px-7 py-3.5 rounded-lg hover:bg-yellow-500 transition-all duration-200 shadow-lg hover:shadow-xl"
                      >
                        {slide.cta.label}
                        <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                      </Link>
                      <Link
                        href={slide.ctaSecondary.href}
                        className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-7 py-3.5 rounded-lg hover:bg-white hover:text-brand-primary transition-all duration-200"
                      >
                        {slide.ctaSecondary.label}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${idx === selectedIndex
              ? "w-8 h-3 bg-brand-accent"
              : "w-3 h-3 bg-white/50 hover:bg-white"
              }`}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-white/60 text-xs">
        <div className="w-px h-10 bg-white/30 animate-pulse" />
        <span className="rotate-90 tracking-widest">SCROLL</span>
      </div>
    </section>
  );
}
