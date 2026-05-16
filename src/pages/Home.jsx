import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch } from "react-redux";
import { setProducts } from "../features/products/productSlice";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const productsRef = useRef(null);

  const url = "https://dummyjson.com/products";

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setIsLoading(true);
      const response = await axios.get(url);
      dispatch(setProducts(response.data.products));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  // smooth scroll
  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20 overflow-hidden">

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white border-b border-gray-100 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">

          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-4 leading-tight">
            Discover Your Next <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
              Favorite Product.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-gray-500 font-medium">
            Explore our exclusive collection of premium items carefully curated for you.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">

            {/* SHOP NOW → SCROLL */}
            <button

              onClick={scrollToProducts}
              className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-800 transition"
            >
              Shop Now
            </button>

            {/* EXPLORE → NAVIGATE */}
            <button
            
              onClick={()=>navigate("/about", { state: { allowed: true } })}
              className="border border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Explore
            </button>

          </div>
        </div>
      </motion.div>

      {/* PRODUCTS SECTION */}
      <div
        ref={productsRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
      >

        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Trending Products
          </h2>
          <p className="text-gray-500 mt-2">
            Handpicked premium collection for you
          </p>
        </div>

        {/* LOADING */}
        {isLoading ? (
          <div className="flex justify-center items-center py-32">
            <div className="w-14 h-14 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin"></div>
          </div>
        ) : (
          <ProductCard />
        )}

      </div>
    </div>
  );
}

export default Home;