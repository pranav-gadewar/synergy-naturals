"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClasses =
    "relative px-3 py-2 text-base font-medium text-green-700 transition hover:text-orange-600";

  const loginBtnClasses =
    "ml-3 inline-flex items-center justify-center rounded-md bg-green-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:scale-105 hover:bg-green-800";

  const mobileBtnClasses =
    "md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 transition";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-white shadow-sm backdrop-blur"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-4">
          <motion.img
            src="/logo/syn logo.png"
            alt="Synergy Naturals"
            className="h-14 w-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <div className="leading-tight">
            <h1 className="text-xl font-bold text-red-700">
              Synergy <span className="text-green-600">Naturals</span>
            </h1>
            <p className="text-xs text-gray-500">Redefining Indian Heritage</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-2 md:flex">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Products", "/products"],
            ["Services", "/services"],
            ["Collaborations", "/collaborations"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link key={label} href={href} className={navLinkClasses}>
              {label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-orange-500 transition-all duration-300 hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop Login */}
        <div className="hidden md:block">
          <Link href="/login" className={loginBtnClasses}>
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className={mobileBtnClasses}
        >
          <motion.svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </motion.svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t bg-white shadow-sm md:hidden"
          >
            <nav className="flex flex-col gap-2 px-4 py-4 text-base font-medium">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Products", "/products"],
                ["Services", "/services"],
                ["Collaborations", "/collaborations"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-green-700 transition  hover:bg-orange-50 hover:text-orange-600"
                >
                  {label}
                </Link>
              ))}

              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-md bg-green-700 px-4 py-2 text-center font-semibold text-white transition hover:bg-green-800"
              >
                Login
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
