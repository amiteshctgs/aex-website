import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-16">
      <FontAwesomeIcon icon={faSpinner} className="text-5xl text-brand-primary animate-spin mb-6" />
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Loading Catalogues...</h2>
      <p className="text-gray-500">Please wait while we fetch the latest documents.</p>
    </div>
  );
}
