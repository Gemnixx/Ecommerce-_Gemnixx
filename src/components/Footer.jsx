import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-20 overflow-hidden">
      
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black tracking-tighter bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">
              SHOPNOW.
            </h2>

            <p className="mt-4 text-gray-500 leading-relaxed text-sm">
              Premium ecommerce experience with modern products, smooth shopping, and elegant design crafted for everyone.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-3 mt-6">

              {["F", "I", "X", "Y"].map((icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-sm font-bold text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {icon}
                </motion.div>
              ))}

            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-500 font-medium">

              <li>
                <Link
                  to="/"
                  className="hover:text-gray-900 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  state={{ allowed: true }}
                  className="hover:text-gray-900 transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/cart"
                  state={{ allowed: true }}
                  className="hover:text-gray-900 transition"
                >
                  Cart
                </Link>
              </li>

            </ul>
          </motion.div>

          {/* SUPPORT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 mb-5">
              Support
            </h3>

            <ul className="space-y-3 text-sm text-gray-500 font-medium">

              <li className="hover:text-gray-900 transition cursor-pointer">
                Help Center
              </li>

              <li className="hover:text-gray-900 transition cursor-pointer">
                Privacy Policy
              </li>

              <li className="hover:text-gray-900 transition cursor-pointer">
                Terms & Conditions
              </li>

              <li className="hover:text-gray-900 transition cursor-pointer">
                Contact Us
              </li>

            </ul>
          </motion.div>

          {/* NEWSLETTER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 mb-5">
              Newsletter
            </h3>

            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              Subscribe to get updates on premium products and exclusive offers.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border border-gray-200 bg-gray-50 px-4 py-3 rounded-xl text-sm font-medium focus:outline-none focus:border-gray-900 focus:bg-white transition"
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition"
              >
                Join
              </motion.button>

            </div>
          </motion.div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="border-t border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-sm text-gray-400 font-medium text-center md:text-left">
            © 2026 SHOPNOW. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-sm text-gray-400 font-medium">

            <span className="hover:text-gray-900 transition cursor-pointer">
              Privacy
            </span>

            <span className="hover:text-gray-900 transition cursor-pointer">
              Terms
            </span>

            <span className="hover:text-gray-900 transition cursor-pointer">
              Security
            </span>

          </div>

        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;