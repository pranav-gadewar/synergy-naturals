"use client";

import Advertising from "@/app/components/Advertising";
import { motion } from "framer-motion";

export default function AboutPage() {
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
            Since 2016
          </span>
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            About <span className="text-green-700">Synergy</span>{" "}
            <span className="text-orange-600">Naturals</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            A trusted manufacturer of cold press oil machines and a leading supplier
            of cold-pressed oils, organic, Ayurvedic, and vegan products based in Bangalore.
          </p>
        </motion.div>
      </div>

      <Advertising />

      {/* COMPANY OVERVIEW */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Who We Are
            </h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Synergy Naturals was founded in 2016 with a clear mission — to revive
              traditional cold press oil extraction methods while maintaining modern
              manufacturing standards.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Alongside machinery, we supply premium cold-pressed oils, instant vegan
              products, and organic & Ayurvedic food products to customers across India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-linear-to-br from-green-50 to-orange-50 p-8 shadow"
          >
            <ul className="space-y-4 text-gray-700 font-medium">
              <li>✔ 7,000+ Machine Installations</li>
              <li>✔ Domestic & Commercial Solutions</li>
              <li>✔ Trusted by Institutions & Businesses</li>
              <li>✔ End-to-End Unit Setup Support</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="bg-orange-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl font-bold text-gray-900"
          >
            Our Experience & Trust
          </motion.h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Proven Expertise",
                text: "Over a decade of experience in cold press oil technology and natural food product sourcing.",
              },
              {
                title: "Trusted Clients",
                text: "Murudeshwar Temple, Hotel Nisarga Grand, Akshaya Kalpa Dairy Farm, Ayurveda institutions, and NGOs.",
              },
              {
                title: "Ethical & Sustainable",
                text: "We promote ethical sourcing, sustainable practices, and indigenous food traditions.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-semibold text-green-700">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* VISION & MISSION */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To become a globally trusted brand in cold press oil machinery and
              natural food products while preserving India’s traditional methods.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To empower individuals and businesses with reliable machinery, pure
              products, and complete support systems for sustainable growth.
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
            Partner With Synergy Naturals
          </h2>
          <p className="mb-6 text-green-100">
            Looking for reliable machinery, wholesale products, or collaboration opportunities?
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
