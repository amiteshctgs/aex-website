import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-brand-light">
      <div className="text-center px-4">
        <div className="text-8xl font-extrabold text-brand-primary mb-4">404</div>
        <h1 className="text-3xl font-bold text-brand-primary mb-3">Page Not Found</h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            <FontAwesomeIcon icon={faHome} />
            Go Home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Us <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </div>
  );
}
