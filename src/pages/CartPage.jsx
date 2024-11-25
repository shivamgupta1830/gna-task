import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";
import { RiDeleteBinFill } from "react-icons/ri";

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 md:p-6 min-h-screen">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center md:text-left">
        My Cart
      </h2>
      {cart.length > 0 ? (
        <div className="space-y-4 md:space-y-6 p-6">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex flex-col md:flex-row justify-between items-center border-b pb-4 md:pb-6 hover:shadow-md"
            >
              {/* Product Info */}
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 w-full md:w-[60%]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain"
                />
                <div className="text-center md:text-left">
                  <h3 className="text-lg md:text-xl font-semibold my-1">
                    {product.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-500 capitalize">
                    {product.category}
                  </p>
                  <p className="font-bold text-md md:text-lg my-1">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Quantity and Actions */}
              <div className="flex flex-col items-center justify-center md:flex-row md:justify-end w-full md:w-[40%] space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => dispatch(decreaseQuantity(product))}
                    className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-sm text-sm"
                  >
                    -
                  </button>
                  <span className="w-[30px] text-center">
                    {product.quantity}
                  </span>
                  <button
                    onClick={() => dispatch(increaseQuantity(product))}
                    className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-sm text-sm"
                  >
                    +
                  </button>
                </div>
                <RiDeleteBinFill
                  onClick={() => dispatch(removeFromCart(product))}
                  className="text-red-500 cursor-pointer text-2xl hover:text-red-600"
                  title="Delete"
                />
              </div>
            </div>
          ))}

          {/* Summary Section */}
          <div className="mt-6 text-center md:text-right">
            <p className="text-lg text-slate-800 mb-2">
              <strong>Total Quantity:</strong> {totalQuantity}
            </p>
            <p className="text-lg text-slate-800 mb-4">
              <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
            </p>
            <button className="px-4 py-2 bg-green-600 text-white rounded-sm hover:bg-green-700">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center p-10 text-lg md:text-2xl font-medium text-slate-500">
          Your Cart is empty!
        </p>
      )}
    </div>
  );
};

export default CartPage;
