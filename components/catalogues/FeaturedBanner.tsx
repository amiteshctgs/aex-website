import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Catalogue } from "@/types/pdf";

interface FeaturedBannerProps {
  catalogue: Catalogue;
}

export default function FeaturedBanner({ catalogue }: FeaturedBannerProps) {
  if (!catalogue) return null;

  return (
    <div className="relative bg-gray-900 rounded-2xl overflow-hidden mb-12 shadow-2xl">
      {/* Background Graphic/Texture */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/20 to-transparent"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center">
        {/* Content Side */}
        <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center text-left">
          <div className="inline-flex items-center gap-2 bg-brand-primary/20 border border-brand-primary/30 text-brand-primary px-4 py-1.5 rounded-full text-sm font-bold mb-6 w-fit">
            <FontAwesomeIcon icon={faStar} className="text-brand-primary" />
            Featured Document
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            {catalogue.title}
          </h2>
          
          <p className="text-gray-300 mb-8 max-w-xl text-lg">
            {catalogue.description || "Discover our comprehensive range of high-quality products and solutions tailored for your industry needs."}
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Link 
              href={`/downloads/${catalogue.slug}`}
              className="bg-brand-primary hover:bg-brand-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-[0_0_20px_rgba(204,0,0,0.4)]"
            >
              View Document <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>

        {/* Image Side */}
        <div className="md:w-2/5 p-8 md:p-12 flex justify-center md:justify-end items-center relative">
          <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform md:rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white/10">
            {catalogue.thumbnailUrl ? (
              <Image
                src={catalogue.thumbnailUrl}
                alt={catalogue.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                <span className="text-white/50 font-bold text-xl text-center px-4">AEX <br/> {catalogue.title}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
