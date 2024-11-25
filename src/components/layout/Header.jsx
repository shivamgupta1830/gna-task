import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { CiHeart, CiShoppingCart, CiHome } from "react-icons/ci";
import { SlPeople } from "react-icons/sl";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const cart = useSelector((state) => state.cart.cart);

  // total quantity of products in cart to show on cart icon
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  // State for controlling the hamburger menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center bg-blue-950 text-white w-full px-6 py-4 gap-5">
      <Link to="/">
        <h1 className="tracking-tight font-semibold text-2xl">MyStore</h1>
      </Link>

      {/*Navigation */}
      <nav
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-blue-950 md:bg-transparent z-20 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:flex md:translate-x-0 md:items-center`}
      >
        <ul className="flex flex-col md:flex-row md:justify-around items-center w-full font-medium gap-5 md:gap-8 px-6 py-4 md:p-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex justify-center items-center gap-1 ${
                  isActive ? "text-blue-400" : "text-white"
                }`
              }
            >
              Home
              <CiHome
                className="text-lg block md:hidden lg:block"
                aria-hidden="true"
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                `flex justify-center items-center gap-1 ${
                  isActive ? "text-blue-400" : "text-white"
                }`
              }
            >
              Wishlist
              <CiHeart
                className="text-lg block md:hidden lg:block"
                aria-hidden="true"
              />
            </NavLink>
          </li>

          {/* Cart Icon for Larger Screens */}
          <li className="hidden md:block relative">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `flex justify-center items-center gap-1 ${
                  isActive ? "text-blue-400" : "text-white"
                }`
              }
            >
              Cart
              <CiShoppingCart
                className="text-lg block md:hidden lg:block"
                aria-hidden="true"
              />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex justify-center items-center gap-1 ${
                  isActive ? "text-blue-400" : "text-white"
                }`
              }
            >
              About us
              <SlPeople
                className="text-md block md:hidden lg:block"
                aria-hidden="true"
              />
            </NavLink>
          </li>
          <li>
            <button className="bg-white text-blue-950 py-2 px-4 rounded-sm hover:bg-gray-100 transition-all">
              Become a Seller
            </button>
          </li>
          <li>
            <button className="border border-white py-2 px-4 rounded-sm hover:bg-opacity-90 hover:text-blue-950 hover:bg-gray-100 transition-all">
              Sign in/ Register
            </button>
          </li>
        </ul>
      </nav>

      {/* Right Section for Smaller Screens */}
      <div className="flex items-center gap-4 md:hidden">
        <div className="relative">
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `flex justify-center items-center gap-1 ${
                isActive ? "text-blue-400" : "text-white"
              }`
            }
          >
            <CiShoppingCart className="text-lg" />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </NavLink>
        </div>

        {/* Hamburger Menu */}
        <button
          className="text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>
    </header>
  );
};

export default Header;
