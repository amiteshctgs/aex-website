"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm">
      <div className="relative flex items-center justify-center">
        {/* Outer spinning ring */}
        <div className="absolute h-24 w-24 rounded-full border-4 border-gray-200"></div>
        <div className="absolute h-24 w-24 animate-spin rounded-full border-4 border-aex-amber border-t-transparent"></div>
        {/* Inner Icon */}
        <FontAwesomeIcon
          icon={faCircleNotch}
          className="animate-spin text-3xl text-aex-navy"
        />
      </div>
      <h2 className="mt-6 text-xl font-semibold text-aex-navy animate-pulse">
        Loading...
      </h2>
    </div>
  );
}
