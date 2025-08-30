import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import logo from "../RGPV_logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0c1326] text-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">

        {/* Logo + Tagline */}
        <div>
          <img
            src={logo}
            alt="RGPV Logo"
            className="h-14 mb-4 object-contain"
          />
          <p className="text-sm text-gray-400 leading-relaxed">
            Empowering students for a better tomorrow through quality
            education and placement opportunities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold mb-4 text-lg">Quick Links</h2>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-red-500 transition">About Us</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Success Stories</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Recruiters</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="font-semibold mb-4 text-lg">Connect with Us</h2>
          <div className="flex space-x-5 text-2xl text-gray-300">
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-sky-500 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-600 transition"><FaFacebook /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaLinkedin /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="font-semibold mb-4 text-lg">Newsletter</h2>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 mb-3 rounded-lg bg-gray-800 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="bg-red-600 hover:bg-red-700 w-full py-2.5 rounded-lg text-sm font-medium transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
        © 2024 RGPV Training and Placement Cell. All Rights Reserved.
      </div>
    </footer>
  );
}
