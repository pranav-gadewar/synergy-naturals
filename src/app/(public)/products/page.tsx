"use client";

import Link from "next/link";

const products = [
  {
    title: "Cold Press Oil Machines",
    description:
      "Domestic and commercial cold press oil machines engineered for durability, low RPM operation, and consistent oil quality.",
    image: "/products/machines/machine-small.png",
    href: "/contact",
  },
  {
    title: "Cold Pressed Oils (Wholesale)",
    description:
    "Premium cold-pressed oils including groundnut, coconut, sesame, sunflower, safflower, almond, and more.",
    image: "/products/machines/machine-small.png",
    href: "/contact",
  },
  {
    title: "Instant Vegan Products",
    description:
    "Ready-to-use traditional vegan products like filter coffee, ginger tea, lemon tea, and kashaya.",
    image: "/products/machines/machine-small.png",
    href: "/contact",
  },
  {
    title: "Organic & Ayurvedic Products",
    description:
    "Naturally processed organic and Ayurvedic products such as A2 ghee, khandsari sugar, mishri, and pickles.",
    image: "/products/machines/machine-small.png",
    href: "/contact",
  },
  {
    title: "Organic Food Catering",
    description:
    "Healthy organic food catering solutions for institutions, events, wellness programs, and organizations.",
    image: "/products/machines/machine-small.png",
    href: "/contact",
  },
];

export default function ProductsPage() {
  return (
    <section className="bg-white overflow-hidden">

      {/* HERO / BANNER */}
      <div className="relative bg-gradient-to-br from-green-50 via-white to-orange-50">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <span className="mb-4 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
            Our Products
          </span>
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Premium <span className="text-green-700">Machines</span> &
            <span className="text-orange-600"> Natural Products</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Explore our complete range of cold press oil machines, cold-pressed oils,
            organic, Ayurvedic, and vegan products crafted for quality and sustainability.
          </p>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {products.map((product, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-56 w-full object-cover transition group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {product.title}
                </h3>

                <p className="mb-6 text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                <Link
                  href={product.href}
                  className="inline-flex items-center justify-center rounded-md bg-green-700 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* CTA */}
      <div className="bg-green-700">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Need Help Choosing the Right Product?
          </h2>
          <p className="mb-6 text-green-100">
            Our team will guide you based on your requirements, usage, and budget.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 font-semibold text-green-700 transition hover:bg-green-50"
          >
            Talk to Our Experts
          </Link>
        </div>
      </div>

    </section>
  );
}
