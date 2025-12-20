"use client";

import { motion } from "framer-motion";

export default function CollaborationsPage() {
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
            Partnerships & Alliances
          </span>
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Collaboration <span className="text-green-700">Opportunities</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Synergy Naturals actively seeks collaborations with businesses and organizations
            that value quality, sustainability, ethical sourcing, and traditional practices.
          </p>
        </motion.div>
      </div>

      {/* WHY COLLABORATE */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Why Collaborate With Us
            </h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              With over a decade of experience and more than 7,000 successful installations,
              Synergy Naturals has built a strong reputation in the cold press oil machinery
              and natural food products industry.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our collaborations are based on transparency, long-term value creation, and
              shared commitment to sustainable and ethical business practices.
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
              <li>✔ 7,000+ installations across India</li>
              <li>✔ Trusted by temples, hotels, dairy farms & institutions</li>
              <li>✔ Complete machinery & product ecosystem</li>
              <li>✔ Ethical, sustainable & indigenous focus</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* WHO CAN COLLABORATE */}
      <div className="bg-orange-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl font-bold text-gray-900"
          >
            Who Can Collaborate With Us
          </motion.h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Retailers & Distributors",
                text: "Organic stores, grocery outlets, health food stores, and distributors interested in stocking cold-pressed oils, vegan products, and organic foods.",
              },
              {
                title: "Hotels, Cafes & Restaurants",
                text: "Hospitality businesses seeking premium oils, organic ingredients, catering services, or machinery for in-house oil extraction.",
              },
              {
                title: "Entrepreneurs & Startups",
                text: "Individuals and businesses planning to set up cold press oil units with complete end-to-end support and buy-back options.",
              },
              {
                title: "Wellness & Ayurveda Centers",
                text: "Ayurveda hospitals, wellness centers, and natural therapy institutions looking for pure oils and organic products.",
              },
              {
                title: "NGOs & Social Organizations",
                text: "Organizations working in sustainability, rural development, and ethical sourcing aligned with indigenous food systems.",
              },
              {
                title: "Ethical & Sustainable Brands",
                text: "Businesses prioritizing environmentally friendly practices, transparency, and long-term partnerships.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <h3 className="mb-3 text-xl font-semibold text-green-700">
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

      {/* PROCESS */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold text-gray-900"
        >
          How Collaboration Works
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              title: "Step 1: Reach Out",
              text: "Contact us with your requirements, business idea, or partnership proposal.",
            },
            {
              title: "Step 2: Discussion",
              text: "Our team evaluates your needs and discusses suitable collaboration models.",
            },
            {
              title: "Step 3: Partnership",
              text: "We finalize the collaboration and begin a long-term, mutually beneficial journey.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl bg-white p-6 text-center shadow-sm"
            >
              <h3 className="mb-2 text-lg font-semibold text-green-700">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.text}
              </p>
            </motion.div>
          ))}
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
            Let’s Build a Sustainable Partnership
          </h2>
          <p className="mb-6 text-green-100">
            Interested in collaborating with Synergy Naturals? We’d love to hear from you.
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
