"use client";

import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <section className="bg-white overflow-hidden">

      {/* HERO */}
      <div className="relative bg-green-50">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-green-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-7xl px-6 py-20 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
            What We Do
          </span>
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Our <span className="text-green-700">Services</span> &{" "}
            <span className="text-orange-600">Solutions</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Synergy Naturals provides end-to-end solutions in cold press oil machinery,
            natural food products, wholesale supply, and organic catering services.
          </p>
        </motion.div>
      </div>

      {/* SERVICES */}
      <div className="mx-auto max-w-7xl px-6 py-20 space-y-24">

        {/* SERVICE 1 */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Cold Press Oil Machine Manufacturing
            </h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Synergy Naturals is a trusted manufacturer of domestic and commercial
              cold press oil machines, designed for durability, efficiency, and
              consistent oil quality.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our machine range starts from small domestic models to large-scale
              commercial units, priced from ₹16,500 up to ₹12 lakhs, suitable for
              homes, restaurants, hotels, temples, dairy farms, and industrial setups.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-green-50 p-8 shadow"
          >
            <ul className="space-y-3 text-gray-700 font-medium">
              <li>✔ Domestic & Commercial Models</li>
              <li>✔ Energy-efficient & heavy-duty motors</li>
              <li>✔ Long-term performance & service support</li>
              <li>✔ Trusted with 7,000+ installations</li>
            </ul>
          </motion.div>
        </div>

        {/* SERVICE 2 */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 rounded-2xl bg-orange-50 p-8 shadow"
          >
            <ul className="space-y-3 text-gray-700 font-medium">
              <li>✔ Raw material sourcing</li>
              <li>✔ Oil processing & extraction guidance</li>
              <li>✔ Packaging & labeling support</li>
              <li>✔ Certifications & compliance assistance</li>
              <li>✔ Buy-back & marketing support</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Complete Cold Press Unit Setup
            </h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              We provide complete unit setup support for entrepreneurs and businesses
              looking to start their own cold press oil production units.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From raw material selection to processing, packaging, certifications,
              buy-back options, and marketing guidance — we support you at every step.
            </p>
          </motion.div>
        </div>

        {/* SERVICE 3 */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Cold Pressed Oils – Wholesale Supply
            </h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Synergy Naturals supplies a wide range of premium quality cold-pressed
              oils on a wholesale basis to retailers, hotels, institutions, and
              health-focused businesses.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our offerings include Groundnut, Coconut, Sunflower, Safflower,
              Sesame, Mustard, Almond oils, and more.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-green-50 p-8 shadow"
          >
            <ul className="space-y-3 text-gray-700 font-medium">
              <li>✔ Pure & chemical-free oils</li>
              <li>✔ Bulk & wholesale supply</li>
              <li>✔ Consistent quality assurance</li>
            </ul>
          </motion.div>
        </div>

        {/* SERVICE 4 */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 rounded-2xl bg-orange-50 p-8 shadow"
          >
            <ul className="space-y-3 text-gray-700 font-medium">
              <li>✔ Filter coffee</li>
              <li>✔ Ginger tea & lemon tea</li>
              <li>✔ Traditional kashaya</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Instant Vegan Products
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We offer ready-to-use instant vegan products made using traditional
              formulations, ideal for homes, offices, wellness centers, and retailers.
            </p>
          </motion.div>
        </div>

        {/* SERVICE 5 */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Organic & Ayurvedic Products
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our organic and Ayurvedic range includes A2 Ghee, Khandsari sugar,
              Dhage Wali Mishri, pickles, and other naturally processed products
              sourced with ethical and sustainable practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-green-50 p-8 shadow"
          >
            <ul className="space-y-3 text-gray-700 font-medium">
              <li>✔ Traditional & Ayurvedic sourcing</li>
              <li>✔ Chemical-free processing</li>
              <li>✔ Suitable for health-conscious consumers</li>
            </ul>
          </motion.div>
        </div>

        {/* SERVICE 6 */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 rounded-2xl bg-orange-50 p-8 shadow"
          >
            <ul className="space-y-3 text-gray-700 font-medium">
              <li>✔ Organic menu planning</li>
              <li>✔ Institutional & event catering</li>
              <li>✔ Wellness-focused food preparation</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Organic Food Catering Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We provide organic food catering services for institutions, events,
              wellness programs, and organizations that prioritize healthy and
              sustainable food choices.
            </p>
          </motion.div>
        </div>

      </div>

      {/* CTA */}
      <div className="bg-green-700">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl px-6 py-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white">
            Let’s Work Together
          </h2>
          <p className="mb-6 text-green-100">
            Looking for machines, wholesale products, unit setup support, or collaboration?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 font-semibold text-green-700 transition hover:scale-105 hover:bg-green-50"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
