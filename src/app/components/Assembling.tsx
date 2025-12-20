"use client";

export default function Assembling() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-green-50 px-4 py-1 text-sm font-medium text-green-700">
            Machine Assembly
          </span>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Cold Press Machine{" "}
            <span className="text-green-700">Assembling Process</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-gray-600">
            Understand how our cold press oil machines are assembled step by step,
            ensuring safety, durability, and smooth oil extraction performance.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">

          {/* Video */}
          <div className="rounded-2xl overflow-hidden shadow">
            <video
              controls
              className="w-full h-auto"
              poster="/videos/assembly-thumbnail.jpg"
            >
              <source src="/videos/assembly.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Info */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-gray-900">
              Step-by-Step Assembly Overview
            </h3>

            {/* Technical Setup */}
            <ul className="space-y-3 text-gray-600 leading-relaxed mb-6">
              <li>✔ Installation of heavy-duty motor and power transmission system</li>
              <li>✔ Mounting of cold press chamber and wooden/steel crusher</li>
              <li>✔ Alignment of oil outlet, filtration tray, and safety covers</li>
            </ul>

            {/* User Assembly Steps (Kept As-Is) */}
            <h4 className="mb-3 text-lg font-semibold text-gray-900">
              Machine Assembly & Operation Steps
            </h4>

            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li>
                ✔ Open the flip, fix the crushing rod and chamber, tighten the screws
                and close the flip and then place the hopper
              </li>
              <li>
                ✔ Connect the power cable and switch on the machine
              </li>
              <li>
                ✔ Switch on the heater, adjust the temperature according to the seeds
                you’re extracting the oil from
              </li>
              <li>
                ✔ Easy preset models like SP1, SP2 and Sp3 as per the seeds
              </li>
            </ul>

            <p className="mt-6 text-gray-600">
              Our machines are designed for <strong>easy assembly and simple operation</strong>.
              With minimal setup and intuitive controls, even first-time users can
              operate the machine safely and efficiently.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
