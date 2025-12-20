import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            Synergy <span className="text-orange-400">Naturals</span>
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Manufacturer of cold press oil machines and wholesaler of cold-pressed oils,
            organic, Ayurvedic, and vegan products since 2016.
          </p>
          <p className="mt-3 text-sm text-gray-400">
            📍 Bangalore, India
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-orange-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-orange-400">About Us</Link></li>
            <li><Link href="/products" className="hover:text-orange-400">Products</Link></li>
            <li><Link href="/services" className="hover:text-orange-400">Services</Link></li>
            <li><Link href="/contact" className="hover:text-orange-400">Contact</Link></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">
            Our Offerings
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Cold Press Oil Machines</li>
            <li>Cold Pressed Oils (Wholesale)</li>
            <li>Instant Vegan Products</li>
            <li>Organic & Ayurvedic Products</li>
            <li>Organic Food Catering</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">
            Contact Us
          </h3>
          <p className="text-sm text-gray-300 mb-2">
            📞 +91 94402 93257
          </p>
          <p className="text-sm text-gray-300 mb-4">
            📞 +91 96521 51104
          </p>
          <a
            href="https://wa.me/919440293257"
            target="_blank"
            className="inline-block px-4 py-2 bg-orange-500 rounded-md text-white hover:bg-orange-600 transition"
          >
            WhatsApp Enquiry
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-800 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Synergy Naturals. All Rights Reserved.
      </div>
    </footer>
  );
}
