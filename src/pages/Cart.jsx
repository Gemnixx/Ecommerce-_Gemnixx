import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  removeFromCart,
} from "../features/cart/cartSlice";

import { toast } from "react-toastify";

import {
  useNavigate,
  Link,
  useLocation,
  Navigate,
} from "react-router-dom";

import { useState } from "react";

import OrderForm from "../components/OrderForm";

import { motion } from "framer-motion";

function Cart() {
  const location = useLocation();

  if (!location.state?.allowed) {
    return <Navigate to="/" replace />;
  }

  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  const handleOrderSubmit = (e) => {
    e.preventDefault();

    toast.success("🎉 Order Placed Successfully!");

    setShowForm(false);

    dispatch(clearCart());

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50/50 py-12 sm:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITLE */}
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter mb-12"
        >
          Your Shopping Bag.
        </motion.h1>

        {cartItems.length === 0 ? (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-24 bg-white border border-gray-100 rounded-3xl shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-16 h-16 mx-auto text-gray-300 mb-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
              />
            </svg>

            <p className="text-gray-500 font-medium tracking-wide text-lg mb-6">
              Your bag is currently empty
            </p>

           
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* ITEMS */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-8 space-y-4"
            >
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.4,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {/* LEFT */}
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <motion.img
                      whileHover={{
                        scale: 1.05,
                      }}
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-24 h-24 object-cover bg-gray-50 rounded-xl border border-gray-100 flex-shrink-0"
                    />

                    <div className="space-y-1">
                      <h2 className="font-bold text-gray-900 text-base sm:text-lg tracking-tight leading-tight">
                        {item.title}
                      </h2>

                      <p className="text-gray-400 font-medium text-sm">
                        Price: ${item.price.toFixed(2)}
                      </p>

                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-100 inline-block px-2 py-0.5 rounded-md">
                        Qty: {item.quantity}
                      </div>
                    </div>
                  </div>

                  {/* ACTIONS */}
                  <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-50">

                    {/* QUANTITY */}
                    <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden shadow-sm">

                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                          dispatch(removeFromCart(item.id));
                        }}
                        className="px-3 py-2 bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors font-bold text-sm"
                      >
                        −
                      </motion.button>

                      <span className="px-4 py-2 bg-white text-gray-900 font-bold text-sm min-w-[2.5rem] text-center">
                        {item.quantity}
                      </span>

                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() =>
                          dispatch(addToCart(item))
                        }
                        className="px-3 py-2 bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors font-bold text-sm"
                      >
                        +
                      </motion.button>
                    </div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="font-extrabold text-gray-900 text-lg min-w-[5rem] text-right"
                    >
                      $
                      {(
                        item.price *
                        item.quantity
                      ).toFixed(2)}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* SUMMARY */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-4 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm space-y-6 sticky top-28"
            >
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-50 pb-4">
                Order Summary
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between text-sm text-gray-500 font-medium">
                  <span>Subtotal</span>

                  <span className="text-gray-900">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-sm text-gray-500 font-medium">
                  <span>Shipping</span>

                  <span className="text-green-600 font-semibold">
                    Free
                  </span>
                </div>

                <hr className="border-gray-100 my-4" />

                <div className="flex justify-between items-baseline">
                  <span className="text-base font-bold text-gray-900">
                    Estimated Total
                  </span>

                  <motion.span
                    key={total}
                    initial={{
                      scale: 1.2,
                    }}
                    animate={{
                      scale: 1,
                    }}
                    className="text-2xl font-black text-gray-950 tracking-tight"
                  >
                    ${total.toFixed(2)}
                  </motion.span>
                </div>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() =>
                  setShowForm(true)
                }
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 px-6 rounded-2xl transition-all duration-300 font-bold text-sm uppercase tracking-widest shadow-md hover:shadow-lg mt-4"
              >
                Place Order
              </motion.button>
            </motion.div>

          </div>
        )}

        {/* ORDER FORM */}
        {showForm && (
          <OrderForm
            onClose={() =>
              setShowForm(false)
            }
            onSubmit={handleOrderSubmit}
          />
        )}
      </div>
    </motion.div>
  );
}

export default Cart;