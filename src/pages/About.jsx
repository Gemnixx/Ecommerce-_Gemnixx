import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function About() {
  const navigate = useNavigate();
  const location = useLocation();

  if (!location.state?.allowed) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50/50 overflow-hidden">
      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900 leading-tight"
          >
            About
            <span className="bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
              {" "}
              SHOPNOW.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="max-w-3xl mx-auto mt-6 text-gray-500 text-base sm:text-lg font-medium"
          >
            SHOPNOW is a modern ecommerce platform built to provide premium
            products, smooth shopping experience, and fast checkout for
            customers around the world.
          </motion.p>
        </div>
      </motion.section>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* OUR STORY */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          {/* LEFT */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400 mb-3">
              Our Story
            </p>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
              Designed For Modern Shopping Experience.
            </h2>

            <p className="mt-6 text-gray-500 leading-relaxed font-medium">
              We believe online shopping should feel premium, simple, and
              enjoyable. SHOPNOW was created with a focus on elegant design,
              smooth performance, and carefully selected products that match
              modern lifestyle needs.
            </p>

            <p className="mt-4 text-gray-500 leading-relaxed font-medium">
              From fashion and accessories to daily essentials, our goal is to
              deliver quality with trust and convenience.
            </p>
          </div>

          {/* RIGHT */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <h3 className="text-3xl font-black text-gray-900">10K+</h3>
                <p className="text-gray-500 text-sm mt-2 font-medium">
                  Happy Customers
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <h3 className="text-3xl font-black text-gray-900">500+</h3>
                <p className="text-gray-500 text-sm mt-2 font-medium">
                  Premium Products
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <h3 className="text-3xl font-black text-gray-900">24/7</h3>
                <p className="text-gray-500 text-sm mt-2 font-medium">
                  Customer Support
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <h3 className="text-3xl font-black text-gray-900">99%</h3>
                <p className="text-gray-500 text-sm mt-2 font-medium">
                  Satisfaction Rate
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* FEATURES */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400 mb-3">
              Why Choose Us
            </p>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">
              Premium Features.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* CARD 1 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-gray-900 text-white flex items-center justify-center text-2xl mb-6">
                🚚
              </div>

              <h3 className="text-xl font-black text-gray-900 mb-3">
                Fast Delivery
              </h3>

              <p className="text-gray-500 leading-relaxed font-medium">
                Quick and secure shipping with reliable delivery services.
              </p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-gray-900 text-white flex items-center justify-center text-2xl mb-6">
                🔒
              </div>

              <h3 className="text-xl font-black text-gray-900 mb-3">
                Secure Payment
              </h3>

              <p className="text-gray-500 leading-relaxed font-medium">
                Safe checkout with trusted and encrypted payment methods.
              </p>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-gray-900 text-white flex items-center justify-center text-2xl mb-6">
                ⭐
              </div>

              <h3 className="text-xl font-black text-gray-900 mb-3">
                Premium Quality
              </h3>

              <p className="text-gray-500 leading-relaxed font-medium">
                Carefully selected high-quality products for modern customers.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* FINAL CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-[2rem] p-10 md:p-16 text-center shadow-xl"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Experience Modern Shopping.
          </h2>

          <p className="text-gray-300 mt-5 max-w-2xl mx-auto font-medium">
            Discover premium products with elegant design, smooth experience,
            and trusted quality only at SHOPNOW.
          </p>

          <motion.button
            onClick={() => {
              navigate("/");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-white text-gray-900 px-8 py-4 rounded-full font-bold shadow-lg"
          >
            Start Shopping
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
