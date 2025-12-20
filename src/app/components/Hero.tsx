"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-60" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-60" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2">
        
        {/* Left Content */}
        <div>
          <span className="mb-4 inline-block rounded-full bg-green-50 px-4 py-1 text-sm font-medium text-green-700">
            Since 2016 • Trusted by 7,000+ Customers
          </span>

          <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Cold Press Oil <span className="text-green-700">Machines</span> &
            <br />
            <span className="text-orange-600"> Natural Products</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-600">
            Synergy Naturals manufactures domestic and commercial cold press oil machines
            and supplies premium cold-pressed oils, organic, Ayurvedic and vegan products
            across India.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-md bg-green-700 px-6 py-3 font-semibold text-white shadow transition hover:bg-green-800"
            >
              Explore Machines
            </Link>

            <a
              href="https://wa.me/919440293257"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-orange-500 px-6 py-3 font-semibold text-orange-600 transition hover:bg-orange-50"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative">
          <div className="rounded-2xl bg-linear-to-br from-green-50 to-orange-50 p-6 shadow-lg">
            <img
              src="/Hero/machine-hero.png"
              alt="Cold Press Oil Machine"
              className="h-auto w-full rounded-xl object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
