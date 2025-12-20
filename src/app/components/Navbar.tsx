"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClasses =
    "px-3 py-2 rounded-md text-base font-medium text-green-700 hover:bg-orange-600 hover:text-white transition";

  const loginBtnClasses =
    "ml-3 inline-flex items-center justify-center rounded-md bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800 transition shadow-sm";

  const mobileBtnClasses =
    "md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 transition";

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-4">
          <img src="/logo/syn logo.png" alt="Synergy Naturals" className="h-14 w-auto" />
          <div className="leading-tight">
            <h1 className="text-xl font-bold text-red-700">
              Synergy <span className="text-green-600">Naturals</span>
            </h1>
            <p className="text-xs text-gray-500">Redefining Indian Heritage</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-2 md:flex">
          <Link href="/" className={navLinkClasses}>Home</Link>
          <Link href="/about" className={navLinkClasses}>About</Link>
          <Link href="/products" className={navLinkClasses}>Products</Link>
          <Link href="/services" className={navLinkClasses}>Services</Link>
          <Link href="/collaborations" className={navLinkClasses}>Collaborations</Link>
          <Link href="/contact" className={navLinkClasses}>Contact</Link>
        </nav>

        {/* Desktop Login */}
        <div className="hidden md:block">
          <Link href="/login" className={loginBtnClasses}>Login</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className={mobileBtnClasses}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white shadow-sm md:hidden">
          <nav className="flex flex-col gap-2 px-4 py-4 text-base font-medium">
            <Link href="/" onClick={() => setOpen(false)} className={navLinkClasses}>Home</Link>
            <Link href="/about" onClick={() => setOpen(false)} className={navLinkClasses}>About</Link>
            <Link href="/products" onClick={() => setOpen(false)} className={navLinkClasses}>Products</Link>
            <Link href="/services" onClick={() => setOpen(false)} className={navLinkClasses}>Services</Link>
            <Link href="/collaborations" onClick={() => setOpen(false)} className={navLinkClasses}>Collaborations</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className={navLinkClasses}>Contact</Link>

            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-green-700 px-4 py-2 text-center font-semibold text-white hover:bg-green-800 transition"
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
