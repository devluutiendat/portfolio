"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import headerNavLinks from "@/data/navBarLink";
import Link from "@/components/ui/Link";

const NavMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close the menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        data-umami-event="mobile-nav-toggle"
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 dark:border-gray-700"
      >
        {isOpen ? (
          <X className="h-5 w-5 text-gray-900 dark:text-gray-100" />
        ) : (
          <Menu className="h-5 w-5 text-gray-900 dark:text-gray-100" />
        )}
      </button>

      {/* Mobile nav overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800/50 backdrop-blur-sm dark:bg-gray-900/80">
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white p-6 shadow-xl dark:bg-gray-800 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-md p-1 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col space-y-6">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-lg font-medium text-gray-900 transition-colors hover:text-primary dark:text-gray-100 dark:hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavMobile;
