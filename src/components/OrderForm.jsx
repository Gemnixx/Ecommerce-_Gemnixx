import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function OrderForm({ onClose, onSubmit }) {
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        onClick={handleBackdropClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 bg-gray-950/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto"
      >
        
        {/* MODAL */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            y: 30,
          }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
          className="bg-white w-full max-w-lg rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 p-5 md:p-6 relative overflow-hidden my-4"
        >
          
          {/* CLOSE BUTTON */}
          <motion.button
            whileHover={{ rotate: 90, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            type="button"
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 p-1.5 rounded-full transition-all duration-200"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-4"
          >
            <h2 className="text-xl font-black text-gray-950 tracking-tighter">
              Checkout Details.
            </h2>

            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mt-0.5">
              Complete your premium order
            </p>
          </motion.div>

          {/* FORM */}
          <form onSubmit={onSubmit} className="space-y-3">

            {/* GRID */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              
              {/* NAME */}
              <div className="space-y-0.5">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                  Full Name
                </label>

                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="w-full border border-gray-200 bg-gray-50/50 px-3 py-2 rounded-lg text-sm font-semibold text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-950 focus:bg-white focus:ring-4 focus:ring-gray-950/5 transition-all duration-200"
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="space-y-0.5">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                  Email Address
                </label>

                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full border border-gray-200 bg-gray-50/50 px-3 py-2 rounded-lg text-sm font-semibold text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-950 focus:bg-white focus:ring-4 focus:ring-gray-950/5 transition-all duration-200"
                  required
                />
              </div>
            </motion.div>

            {/* PHONE */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="space-y-0.5"
            >
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                Phone Number
              </label>

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="tel"
                name="phone"
                placeholder="+92 300 1234567"
                className="w-full border border-gray-200 bg-gray-50/50 px-3 py-2 rounded-lg text-sm font-semibold text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-950 focus:bg-white focus:ring-4 focus:ring-gray-950/5 transition-all duration-200"
                required
              />
            </motion.div>

            {/* ADDRESS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-0.5"
            >
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                Shipping Address
              </label>

              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="address"
                rows="2"
                placeholder="Street address, Apartment, City"
                className="w-full border border-gray-200 bg-gray-50/50 px-3 py-2 rounded-lg text-sm font-semibold text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-950 focus:bg-white focus:ring-4 focus:ring-gray-950/5 transition-all duration-200 resize-none"
                required
              />
            </motion.div>

            {/* PAYMENT */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="space-y-1.5 pt-1"
            >
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                Select Payment Method
              </label>

              <div className="grid grid-cols-2 gap-2">

                {[
                  {
                    id: "cod",
                    title: "📦 COD",
                    sub: "Cash on Delivery",
                    active: "border-gray-950 bg-gray-50/50",
                  },
                  {
                    id: "easypaisa",
                    title: "📱 EasyPaisa",
                    sub: "Mobile Wallet",
                    active: "border-green-600 bg-green-50/10",
                  },
                  {
                    id: "jazzcash",
                    title: "🔸 JazzCash",
                    sub: "Mobile Wallet",
                    active: "border-amber-600 bg-amber-50/10",
                  },
                  {
                    id: "bank",
                    title: "🏛️ Bank Transfer",
                    sub: "Direct Wire",
                    active: "border-blue-600 bg-blue-50/10",
                  },
                ].map((method) => (
                  <motion.label
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    key={method.id}
                    className={`flex flex-col p-2 border rounded-lg cursor-pointer transition-all duration-200 ${
                      paymentMethod === method.id
                        ? `${method.active} ring-2`
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      checked={paymentMethod === method.id}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                      className="sr-only"
                    />

                    <span className="text-xs font-bold text-gray-900">
                      {method.title}
                    </span>

                    <span className="text-[10px] text-gray-400 font-medium mt-0.5">
                      {method.sub}
                    </span>
                  </motion.label>
                ))}
              </div>
            </motion.div>

            {/* MESSAGE */}
            <motion.div
              key={paymentMethod}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-50 border border-gray-100 rounded-lg p-2 text-[11px] text-gray-500 font-medium"
            >
              {paymentMethod === "cod" &&
                " Pay with cash when the rider delivers your package."}

              {paymentMethod === "easypaisa" &&
                " We will send EasyPaisa account details via SMS/Email."}

              {paymentMethod === "jazzcash" &&
                " We will send JazzCash account details via SMS/Email."}

              {paymentMethod === "bank" &&
                " Transfer directly to our Bank account. Details will follow."}
            </motion.div>

            {/* PRIVACY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex items-center gap-1.5 text-gray-400 text-[10px] font-medium pt-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3.5 h-3.5 flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0V10.5m-2.25 10.5h13.5c.621 0 1.125-.504 1.125-1.125V11.25c0-.621-.504-1.125-1.125-1.125H4.25c-.621 0-1.125.504-1.125 1.125v7.875c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>

              <span>Secure 256-bit SSL encrypted checkout.</span>
            </motion.div>

            {/* BUTTON */}
            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              type="submit"
              className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-xl transition-all duration-300 font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-lg"
            >
              Confirm Order
            </motion.button>

          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default OrderForm;