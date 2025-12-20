export default function CollaborationsPage() {
  return (
    <section className="bg-white">
      {/* Hero */}
      <div className="bg-green-50">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
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
        </div>
      </div>

      {/* Why Collaborate */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div>
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
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-green-50 to-orange-50 p-8 shadow">
            <ul className="space-y-4 text-gray-700 font-medium">
              <li>✔ 7,000+ installations across India</li>
              <li>✔ Trusted by temples, hotels, dairy farms & institutions</li>
              <li>✔ Complete machinery & product ecosystem</li>
              <li>✔ Ethical, sustainable & indigenous focus</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Collaboration Types */}
      <div className="bg-orange-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Who Can Collaborate With Us
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-green-700">
                Retailers & Distributors
              </h3>
              <p className="text-gray-600">
                Organic stores, grocery outlets, health food stores, and distributors
                interested in stocking cold-pressed oils, vegan products, and organic foods.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-green-700">
                Hotels, Cafes & Restaurants
              </h3>
              <p className="text-gray-600">
                Hospitality businesses seeking premium cold-pressed oils, organic ingredients,
                catering services, or machinery for in-house oil extraction.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-green-700">
                Entrepreneurs & Startups
              </h3>
              <p className="text-gray-600">
                Individuals and businesses planning to set up cold press oil units with
                complete end-to-end support and buy-back options.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-green-700">
                Wellness & Ayurveda Centers
              </h3>
              <p className="text-gray-600">
                Ayurveda hospitals, wellness centers, and natural therapy institutions
                looking for pure oils and organic products.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-green-700">
                NGOs & Social Organizations
              </h3>
              <p className="text-gray-600">
                Organizations working in sustainability, rural development, and ethical
                sourcing aligned with indigenous food systems.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-green-700">
                Ethical & Sustainable Brands
              </h3>
              <p className="text-gray-600">
                Businesses that prioritize environmentally friendly practices, transparency,
                and long-term sustainable partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Collaboration Process */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
          How Collaboration Works
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm text-center">
            <h3 className="mb-2 text-lg font-semibold text-green-700">
              Step 1: Reach Out
            </h3>
            <p className="text-gray-600">
              Contact us with your requirements, business idea, or partnership proposal.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm text-center">
            <h3 className="mb-2 text-lg font-semibold text-green-700">
              Step 2: Discussion
            </h3>
            <p className="text-gray-600">
              Our team evaluates your needs and discusses suitable collaboration models.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm text-center">
            <h3 className="mb-2 text-lg font-semibold text-green-700">
              Step 3: Partnership
            </h3>
            <p className="text-gray-600">
              We finalize the collaboration and begin a long-term, mutually beneficial journey.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-green-700">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Let’s Build a Sustainable Partnership
          </h2>
          <p className="mb-6 text-green-100">
            Interested in collaborating with Synergy Naturals? We’d love to hear from you.
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
