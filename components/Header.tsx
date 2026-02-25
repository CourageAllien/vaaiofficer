"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] backdrop-blur-[12px] border-b border-border px-5 md:px-10 h-16 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "bg-white/90" : "bg-white/90"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 no-underline">
        <div className="w-8 h-8 bg-blue rounded-lg flex items-center justify-center">
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
          >
            <path
              d="M8 2L10.5 6.5H13L9.5 9.5L11 14L8 11L5 14L6.5 9.5L3 6.5H5.5L8 2Z"
              fill="white"
            />
          </svg>
        </div>
        <span className="font-serif text-lg text-dark tracking-[-0.3px]">
          VA Engines
        </span>
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        <li>
          <a
            href="#what-i-build"
            className="text-sm text-mid font-medium no-underline hover:text-dark transition-colors"
          >
            What I Build
          </a>
        </li>
        <li>
          <a
            href="#how-it-works"
            className="text-sm text-mid font-medium no-underline hover:text-dark transition-colors"
          >
            How It Works
          </a>
        </li>
        <li>
          <a
            href="#case-studies"
            className="text-sm text-mid font-medium no-underline hover:text-dark transition-colors"
          >
            Case Studies
          </a>
        </li>
        <li>
          <a
            href="#pricing"
            className="text-sm text-mid font-medium no-underline hover:text-dark transition-colors"
          >
            Pricing
          </a>
        </li>
      </ul>

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center gap-3">
        <button className="px-5 py-2 text-sm font-medium text-dark bg-transparent border border-border rounded-lg cursor-pointer font-sans hover:border-dark transition-all">
          Contact
        </button>
        <a
          href="#pricing"
          className="px-5 py-2 text-sm font-semibold text-white bg-blue border-none rounded-lg cursor-pointer font-sans hover:bg-blue-hover transition-all no-underline"
        >
          Start Free Trial
        </a>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 text-dark"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          {mobileOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-border p-6 flex flex-col gap-4 md:hidden">
          <a
            href="#what-i-build"
            className="text-sm text-mid font-medium no-underline"
            onClick={() => setMobileOpen(false)}
          >
            What I Build
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-mid font-medium no-underline"
            onClick={() => setMobileOpen(false)}
          >
            How It Works
          </a>
          <a
            href="#case-studies"
            className="text-sm text-mid font-medium no-underline"
            onClick={() => setMobileOpen(false)}
          >
            Case Studies
          </a>
          <a
            href="#pricing"
            className="text-sm text-mid font-medium no-underline"
            onClick={() => setMobileOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#pricing"
            className="px-5 py-3 text-sm font-semibold text-white bg-blue rounded-lg text-center no-underline"
            onClick={() => setMobileOpen(false)}
          >
            Start Free Trial
          </a>
        </div>
      )}
    </nav>
  );
}
