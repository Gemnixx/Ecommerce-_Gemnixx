import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP BAR */}
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-black tracking-tighter"
            >
              <span className="bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">
                SHOPNOW.
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 text-sm font-semibold text-gray-500 uppercase tracking-widest">

            <motion.li
              whileHover={{ y: -2 }}
            >
              <Link
                to="/"
                className="relative group hover:text-gray-900 transition-colors duration-300"
              >
                Home

                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.li>

            <motion.li
              whileHover={{ y: -2 }}
            >
              <Link
                to="/about"
                state={{ allowed: true }}
                className="relative group hover:text-gray-900 transition-colors duration-300"
              >
                About

                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.li>

          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-5">

            {/* CART ICON */}
            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: 3,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
  to="/cart"
  state={{ allowed: true }}
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="relative flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-100 text-gray-700 hover:text-gray-900 transition-all duration-300"
>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
                  />
                </svg>

                {/* Badge */}
                <AnimatePresence>
                  {totalItems > 0 && (
                    <motion.span
                      initial={{
                        scale: 0,
                        opacity: 0,
                      }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                      }}
                      exit={{
                        scale: 0,
                        opacity: 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                      }}
                      className="absolute -top-1 -right-1 bg-gray-900 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md border-2 border-white"
                    >
                      {totalItems}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            </motion.div>

            {/* HAMBURGER */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-gray-700 hover:text-gray-900 transition-colors focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </motion.button>

          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-2 pb-6 pt-2 border-t border-gray-100 mt-2">

                <motion.div
                  whileHover={{ x: 5 }}
                >
                  <Link
                    to="/"
                    onClick={closeMenu}
                    className="block px-4 py-3 text-sm font-semibold text-gray-600 uppercase tracking-wider rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-colors"
                  >
                    Home
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                >
                  <Link
                    to="/about"
                    state={{ allowed: true }}
                    onClick={closeMenu}
                    className="block px-4 py-3 text-sm font-semibold text-gray-600 uppercase tracking-wider rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-colors"
                  >
                    About
                  </Link>
                </motion.div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.nav>
  );
}

export default Navbar;