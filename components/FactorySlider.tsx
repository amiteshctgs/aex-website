"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const factoryImages = [
  "/images/main-slider/Factory-Pic-1.jpeg",
  "/images/main-slider/Factory-Pic-2.jpeg",
  "/images/main-slider/Factory-Pic-3.jpeg",
];

export default function FactorySlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
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
    <div className="relative rounded-2xl overflow-hidden shadow-2xl group w-full aspect-[16/10] sm:aspect-video">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {factoryImages.map((src, idx) => (
            <div key={idx} className="relative flex-[0_0_100%] h-full">
              <Image
                src={src}
                alt={`AEX Manufacturing Facility — View ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Badge Overlay */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg font-bold text-sm text-gray-900 shadow-lg hidden sm:block z-10">
        AEX Manufacturing Facility
        <div className="text-brand-primary text-xs mt-0.5 uppercase tracking-wider">State-of-the-art Infrastructure</div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {factoryImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            aria-label={`Go to image ${idx + 1}`}
            className={`transition-all duration-300 rounded-full shadow-md ${
              idx === selectedIndex
                ? "w-8 h-2.5 bg-brand-primary"
                : "w-2.5 h-2.5 bg-white hover:bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
