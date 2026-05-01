"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 rounded-full bg-red-100 p-6 text-red-600">
        <FontAwesomeIcon icon={faExclamationTriangle} className="text-5xl" />
      </div>
      <h2 className="mb-4 text-3xl font-bold text-aex-navy">
        Something went wrong!
      </h2>
      <p className="mb-8 max-w-md text-gray-600">
        We apologize for the inconvenience. An unexpected error has occurred while loading this page.
      </p>
      <div className="flex gap-4">
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
          className="rounded-full bg-aex-amber px-8 py-3 font-semibold text-white transition-colors hover:bg-yellow-600"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-full border-2 border-aex-navy bg-white px-8 py-3 font-semibold text-aex-navy transition-colors hover:bg-aex-navy hover:text-white"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
