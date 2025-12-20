export default function AboutPage() {
  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="bg-green-50">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
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
        </div>
      </div>

      {/* Company Overview */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Who We Are
            </h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Synergy Naturals was founded in 2016 with a clear mission — to revive
              traditional cold press oil extraction methods while maintaining modern
              manufacturing standards. Headquartered in Bangalore, we specialize in
              designing and manufacturing domestic and commercial cold press oil machines.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Alongside machinery, we also supply a wide range of premium cold-pressed oils,
              instant vegan products, and organic & Ayurvedic food products to customers
              across India.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-green-50 to-orange-50 p-8 shadow">
            <ul className="space-y-4 text-gray-700 font-medium">
              <li>✔ 7,000+ Machine Installations</li>
              <li>✔ Domestic & Commercial Solutions</li>
              <li>✔ Trusted by Institutions & Businesses</li>
              <li>✔ End-to-End Unit Setup Support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Experience & Clients */}
      <div className="bg-orange-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
            Our Experience & Trust
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold text-green-700">
                Proven Expertise
              </h3>
              <p className="text-gray-600">
                Over a decade of experience in cold press oil technology and natural food
                product sourcing.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold text-green-700">
                Trusted Clients
              </h3>
              <p className="text-gray-600">
                Murudeshwar Temple, Hotel Nisarga Grand, Akshaya Kalpa Dairy Farm,
                Ayurveda institutions, and NGOs.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold text-green-700">
                Ethical & Sustainable
              </h3>
              <p className="text-gray-600">
                We promote ethical sourcing, sustainable practices, and indigenous
                food traditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To become a globally trusted brand in cold press oil machinery and natural
              food products while preserving India’s traditional processing methods.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To empower individuals and businesses with reliable machinery, pure products,
              and complete support systems that enable sustainable and profitable operations.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-green-700">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Partner With Synergy Naturals
          </h2>
          <p className="mb-6 text-green-100">
            Looking for reliable machinery, wholesale products, or collaboration opportunities?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 font-semibold text-green-700 transition hover:bg-green-50"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
