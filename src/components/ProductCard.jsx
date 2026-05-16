import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { motion } from "framer-motion";

function ProductCard() {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 text-center mb-14"
      >
        ✨ Featured Products
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {products.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group"
          >

            {/* Image */}
            <div className="relative overflow-hidden">

              <motion.img
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5 }}
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-56 object-cover"
              />

              {/* Badge */}
              <span className="absolute top-4 left-4 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                Hot Deal
              </span>

            </div>

            {/* Content */}
            <div className="p-5">

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 truncate">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm mt-2 leading-relaxed line-clamp-2">
                {item.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-3 text-yellow-400 text-sm">
                ⭐⭐⭐⭐☆
                <span className="text-gray-400 text-xs ml-2">
                  (4.5)
                </span>
              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between mt-6">

                {/* Price */}
                <p className="text-2xl font-black text-gray-900">
                  ${item.price}
                </p>

                {/* Button */}
                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() => dispatch(addToCart(item))}
                  className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition shadow-md"
                >
                  Add to Cart
                </motion.button>

              </div>

            </div>

          </motion.div>
        ))}

      </div>
    </div>
  );
}

export default ProductCard;