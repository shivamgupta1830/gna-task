import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlistItem } from "../redux/wishlistSlice";
import { addToCart } from "../redux/cartSlice";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { MdAdd } from "react-icons/md";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const handleToggleWishlist = () => {
    dispatch(toggleWishlistItem(product));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= Math.floor(rating) ? (
          <FaStar key={i} className="text-yellow-500" />
        ) : (
          <FaRegStar key={i} className="text-gray-500" />
        )
      );
    }
    return stars;
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
        <h6 className="font-medium text-sm text-gray-500 capitalize">
          {product.category}
        </h6>
        <h3 className="font-semibold text-base md:text-lg text-gray-700 text-start">
          {product.title}
        </h3>
        <p className="text-gray-900 text-center font-bold text:lg md:text-2xl">
          ${product.price.toFixed(2)}
        </p>
      </div>

      <div className="w-[20%] h-full flex flex-col justify-between items-end">
        <div className="flex flex-col justify-between items-end">
          <div className="flex mb-2">{renderStars(product.rating.rate)}</div>
          <p className="text-sm text-gray-500 capitalize">
            {product.rating.count} ratings
          </p>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-[130px] md:w-[160px] bg-blue-800 text-white px-2 md:px-4 py-3 rounded-sm hover:bg-blue-900 transition flex justify-center items-center gap-2"
        >
          <span className="text-sm md:text-base">Add to Cart</span> <MdAdd />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
