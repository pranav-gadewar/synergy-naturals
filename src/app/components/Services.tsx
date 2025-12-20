"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-green-100 blur-3xl opacity-40" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-orange-100 blur-3xl opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-green-50 px-4 py-1 text-sm font-medium text-green-700">
            What We Offer
          </span>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Our <span className="text-green-700">Services</span> &{" "}
            <span className="text-orange-600">Solutions</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Synergy Naturals delivers complete solutions — from manufacturing
            cold press oil machines to supplying organic, Ayurvedic, and vegan
            products across India.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              {/* Accent border */}
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-xl bg-linear-to-r from-green-600 to-orange-500 opacity-0 transition group-hover:opacity-100" />

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mb-4 inline-flex items-center justify-center rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 transition group-hover:bg-orange-50 group-hover:text-orange-600"
              >
                {service.highlight}
              </motion.div>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>

              <p className="leading-relaxed text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-green-700 px-8 py-3 font-semibold text-white shadow transition hover:scale-105 hover:bg-green-800"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
