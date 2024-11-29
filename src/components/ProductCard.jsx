import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlistItem } from "../redux/wishlistSlice";
import { addToCart } from "../redux/cartSlice";
import { FaStar, FaRegStar, FaHeart, FaRegHeart } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const handleToggleWishlist = () => {
    dispatch(toggleWishlistItem(product));
  };

  const handleAddToCart = () => {
    if (product && product.id) {
      dispatch(addToCart(product));
    } else {
      console.error("Invalid product:", product);
    }
  };

  return (
    <div className="rounded-sm px-4 py-5 mb-10 hover:shadow-md flex justify-start items-start gap-10 h-[250px]">
      <div className="relative w-[20%]">
        <img
          src={product.image}
          alt={product.title}
          className="w-36 h-36 object-contain"
        />
        {isInWishlist ? (
          <FaHeart
            className="absolute top-1 -right-2 w-4 h-4 text-red-600 cursor-pointer"
            onClick={handleToggleWishlist}
          />
        ) : (
          <FaRegHeart
            className="absolute top-1 -right-2 w-4 h-4 text-gray-500 cursor-pointer"
            onClick={handleToggleWishlist}
          />
        )}
      </div>

      <div className="flex flex-col justify-start items-start gap-5 w-[60%]">
        <h6 className="font-medium text-xs text-gray-500 capitalize">
          {product.category}
        </h6>
        <h3 className="font-semibold text-sm md:text-lg text-gray-700 text-start">
          {product.title}
        </h3>
        <p className="text-gray-900 text-center font-bold text:sm md:text-2xl">
          ${product.price.toFixed(2)}
        </p>
      </div>

      <div className="w-[20%] h-full flex flex-col justify-between items-end">
        <div className="flex flex-col justify-between items-end">
          <p className="text-xs sm:text-sm text-gray-500 capitalize">
            {product.rating.count} ratings
          </p>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-[80px] sm:w-[110px] md:w-[160px] bg-blue-800 text-white px-2 md:px-4 py-3 rounded-sm hover:bg-blue-900 hover:shadow-md transition flex justify-center items-center gap-2 hover:scale-[1.02]"
        >
          <span className="text-xs md:text-base ">Add to Cart</span>
          <MdAdd className="hidden sm:inline" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
