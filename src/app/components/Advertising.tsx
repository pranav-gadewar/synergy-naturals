"use client";

export default function Advertising() {
  return (
    <section className="bg-orange-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-600">
            Machine Usage
          </span>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Cold Press Oil <span className="text-orange-600">Production Process</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-gray-600">
            See how our cold press machines extract pure, chemical-free oil
            while preserving natural nutrients and aroma.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">

          {/* Info */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-gray-900">
              How the Machine Works
            </h3>

            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li>✔ Seeds are cleaned and slowly crushed at required RPM</li>
              <li>✔ No external heat or chemicals used</li>
              <li>✔ Oil extracted naturally through pressure</li>
              <li>✔ Residue (oil cake) collected separately</li>
              <li>✔ Oil filtered and ready for consumption or packaging</li>
            </ul>

            <p className="mt-6 text-gray-600">
              This process ensures **maximum nutrition retention**, making the oil
              ideal for health-conscious consumers, Ayurveda centers, hotels,
              and organic food businesses.
            </p>
          </div>

          {/* Video */}
          <div className="rounded-2xl overflow-hidden shadow">
            <video
              controls
              className="w-full h-auto"
              poster="/videos/production-thumbnail.jpg" // optional
            >
              <source src="/videos/Advertising.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

        </div>
      </div>
    </section>
  );
}
