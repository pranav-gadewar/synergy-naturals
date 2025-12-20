"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    e.currentTarget.reset();
  }

  return (
    <section className="bg-white">
      {/* Header */}
      <div className="bg-green-50">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <span className="mb-4 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
            Get in Touch
          </span>
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Contact <span className="text-green-700">Synergy</span>{" "}
            <span className="text-orange-600">Naturals</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Reach out to us for cold press oil machines, wholesale products,
            unit setup support, catering services, or collaboration opportunities.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

          {/* Contact Info */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Contact Information
            </h2>

            <p className="mb-4 text-gray-600">
              📍 <strong>Bangalore, India</strong>
            </p>

            <p className="mb-2 text-gray-600">
              📞 <a href="tel:+919440293257" className="font-semibold text-green-700">+91 94402 93257</a>
            </p>

            <p className="mb-4 text-gray-600">
              📞 <a href="tel:+919652151104" className="font-semibold text-green-700">+91 96521 51104</a>
            </p>

            <p className="mb-6 text-gray-600">
              💬 <a href="https://wa.me/919440293257" target="_blank" className="font-semibold text-orange-600">
                WhatsApp Enquiry
              </a>
            </p>

            <div className="rounded-xl bg-green-50 p-6">
              <p className="font-medium text-gray-700">Business Hours</p>
              <p className="mt-2 text-gray-600">
                Monday – Saturday<br />
                9:30 AM – 6:30 PM
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-gray-100 p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Send Us a Message
            </h2>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input required placeholder="Your Name" className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none" />
                <input type="email" required placeholder="Your Email" className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none" />
                <input required placeholder="Phone Number" className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none" />
                <textarea rows={4} required placeholder="Your Message" className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none" />

                <button
                  type="submit"
                  className="w-full rounded-md bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
                >
                  Submit Enquiry
                </button>
              </form>
            ) : (
              <div className="text-center">
                <p className="mb-4 text-lg font-semibold text-green-700">
                  Thank you for contacting us!
                </p>
                <p className="text-gray-600">
                  We have received your message and will get back to you shortly.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
