"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

const ThemeSwitch: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Prevent hydration mismatch
    return <div className="h-8 w-8 rounded-md bg-blue-500" />;
  }

  const themeOptions = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Monitor },
  ];

  // Find current theme option
  const currentTheme =
    themeOptions.find((t) => t.value === theme) || themeOptions[0];
  const CurrentIcon = currentTheme.icon;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-8 w-8 items-center justify-center rounded-md text-black dark:text-white transition-colors hover:bg-blue-600"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select theme"
      >
        <CurrentIcon className="h-5 w-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-36 origin-top-right rounded-md bg-gray-900 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <ul
            className="py-1"
            role="listbox"
            aria-label="Theme options"
            aria-activedescendant={`theme-${theme}`}
          >
            {themeOptions.map((option) => {
              const Icon = option.icon;
              const isActive = option.value === theme;

              return (
                <li
                  key={option.value}
                  id={`theme-${option.value}`}
                  role="option"
                  aria-selected={isActive}
                  className={`flex cursor-pointer items-center px-3 py-2 text-sm ${
                    isActive
                      ? "bg-gray-800 text-white"
                      : "text-gray-300 hover:bg-gray-800"
                  }`}
                  onClick={() => {
                    setTheme(option.value);
                    setIsOpen(false);
                  }}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {option.label}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitch;
