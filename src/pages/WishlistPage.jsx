import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/wishlistSlice";
import { RiDeleteBinFill } from "react-icons/ri";

const WishlistPage = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(removeFromWishlist(product));
  };

  return (
    <div className="min-h-screen p-4 md:p-6">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center md:text-left">
        My Wishlist
      </h2>
      {wishlist.length === 0 ? (
        <p className="text-center p-6 text-lg md:text-2xl font-medium text-slate-500">
          Your wishlist is empty!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 p-6">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="p-4 h-auto border rounded-sm flex flex-col items-center hover:shadow-md"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-24 h-24 md:w-28 md:h-28 object-contain mb-3"
              />
              <h3 className="font-semibold text-center text-sm md:text-base mb-1">
                {product.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base">
                ${product.price.toFixed(2)}
              </p>
              <button
                onClick={() => handleRemove(product)}
                className="mt-3 text-sm flex items-center gap-1 justify-center bg-red-600 text-white px-3 py-2 rounded-sm hover:bg-red-700"
              >
                <span>Remove</span> <RiDeleteBinFill />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
