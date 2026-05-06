import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center text-sm text-gray-500 mb-6 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
      <Link 
        href="/" 
        className="hover:text-brand-primary transition-colors flex items-center"
        aria-label="Home"
      >
        <FontAwesomeIcon icon={faHome} className="w-4 h-4" />
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3 mx-2 text-gray-400" />
          {item.href ? (
            <Link 
              href={item.href}
              className="hover:text-brand-primary transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 font-medium">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
