"use client";

import Link from "next/link";

const services = [
  {
    title: "Cold Press Oil Machines",
    description:
      "Manufacturing domestic and commercial cold press oil machines with proven performance, durability, and after-sales support.",
    highlight: "Machines",
  },
  {
    title: "Full Unit Setup Support",
    description:
      "End-to-end support including raw material sourcing, processing, packing, labeling, certifications, and marketing assistance.",
    highlight: "Unit Setup",
  },
  {
    title: "Cold Pressed Oils (Wholesale)",
    description:
      "Supplying premium quality cold-pressed oils such as Groundnut, Coconut, Sesame, Sunflower, Safflower, and more.",
    highlight: "Wholesale",
  },
  {
    title: "Instant Vegan Products",
    description:
      "Ready-to-use vegan products including filter coffee, ginger tea, lemon tea, and traditional kashaya.",
    highlight: "Vegan",
  },
  {
    title: "Organic & Ayurvedic Products",
    description:
      "A curated range of organic and Ayurvedic products like A2 Ghee, Khandsari sugar, Dhage Wali mishri, and pickles.",
    highlight: "Ayurveda",
  },
  {
    title: "Organic Food Catering",
    description:
      "Providing healthy, organic food catering solutions for institutions, events, and wellness-focused organizations.",
    highlight: "Catering",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-green-50 px-4 py-1 text-sm font-medium text-green-700">
            What We Offer
          </span>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Our <span className="text-green-700">Services</span> &
            <span className="text-orange-600"> Solutions</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Synergy Naturals delivers complete solutions — from manufacturing
            cold press oil machines to supplying organic, Ayurvedic, and vegan
            products across India.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 transition group-hover:bg-orange-50 group-hover:text-orange-600">
                {service.highlight}
              </div>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>

              <p className="leading-relaxed text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-green-700 px-8 py-3 font-semibold text-white shadow transition hover:bg-green-800"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
