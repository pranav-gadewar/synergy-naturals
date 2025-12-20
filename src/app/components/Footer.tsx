"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative mt-20 bg-green-900 text-gray-100 overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-green-500/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-7xl px-4 py-14 grid grid-cols-1 gap-10 md:grid-cols-4"
      >
        
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            Synergy <span className="text-orange-400">Naturals</span>
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Manufacturer of cold press oil machines and wholesaler of cold-pressed oils,
            organic, Ayurvedic, and vegan products since 2016.
          </p>
          <p className="mt-4 text-sm text-gray-400">
            📍 Bangalore, India
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Products", "/products"],
              ["Services", "/services"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="group inline-flex items-center text-gray-300 transition hover:text-orange-400"
                >
                  <span className="relative">
                    {label}
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-orange-400 transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Offerings */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Our Offerings
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Cold Press Oil Machines</li>
            <li>Cold Pressed Oils (Wholesale)</li>
            <li>Instant Vegan Products</li>
            <li>Organic & Ayurvedic Products</li>
            <li>Organic Food Catering</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Contact Us
          </h3>
          <p className="mb-2 text-sm text-gray-300">
            📞 +91 94402 93257
          </p>
          <p className="mb-4 text-sm text-gray-300">
            📞 +91 96521 51104
          </p>

          <a
            href="https://wa.me/919440293257"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow transition hover:scale-105 hover:bg-orange-600"
          >
            WhatsApp Enquiry
          </a>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-green-800 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="font-medium text-gray-300">Synergy Naturals</span>. All
        Rights Reserved.
      </div>
    </footer>
  );
}
