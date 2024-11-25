import React from "react";
import { RiPagesLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Upper footer */}
      <div className="py-16 sm:px-12 md:px-16 lg:px-24 flex flex-col lg:flex-row justify-around items-center gap-6 lg:gap-8 bg-blue-950">
        <div className="flex items-center justify-center gap-4 w-[80%] md:w-auto">
          <RiPagesLine className="text-white text-4xl sm:text-6xl md:text-7xl" />
          <div className="text-white flex flex-col gap-2">
            <p className="text-base sm:text-xl md:text-2xl font-semibold">
              Your Shopping Journey Starts Here
            </p>
            <p className="text-xs sm:text-sm md:text-base">
              Sign up and we will send you the best deals
            </p>
          </div>
        </div>

        <div className="flex flex-col  sm:flex-row items-center justify-center gap-4 md:w-auto">
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-sm text-sm sm:text-base w-full"
          />
          <button className="bg-blue-700 hover:bg-blue-800 text-white text-sm sm:text-base rounded-sm px-4 py-3 w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </div>

      {/* Lower footer */}
      <div className="bg-white py-6">
        <div className="flex flex-col md:flex-row justify-around items-center md:items-start gap-4 text-center">
          <div>
            <h5 className="text-gray-900 font-medium mb-4">Contact Us</h5>
            <p className="text-gray-600 text-sm mb-2">
              Email: contact@yourstore.com
            </p>
            <p className="text-blue-700 font-semibold text-lg">
              +(1) 123 456 7890
            </p>
          </div>

          <div>
            <h5 className="text-gray-900 font-medium mb-4">Company</h5>
            <p className="text-gray-600 text-sm mb-2">About Us</p>
            <p className="text-gray-600 text-sm mb-2">Careers</p>
            <p className="text-gray-600 text-sm">Privacy Policy</p>
          </div>

          <div>
            <h5 className="text-gray-900 font-medium mb-4">Support</h5>
            <p className="text-gray-600 text-sm mb-2">FAQs</p>
            <p className="text-gray-600 text-sm mb-2">Help Center</p>
            <p className="text-gray-600 text-sm">Shipping & Returns</p>
          </div>

          <div>
            <h5 className="text-gray-900 font-medium mb-4">Other Services</h5>
            <p className="text-gray-600 text-sm mb-2">Gift Cards</p>
            <p className="text-gray-600 text-sm">Affiliate Program</p>
          </div>

          <div>
            <h5 className="text-gray-900 font-medium mb-4">Mobile</h5>
            <p className="text-gray-600 text-sm mb-2">iOS App</p>
            <p className="text-gray-600 text-sm">Android App</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
