import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10">
      <div className="max-w-xl md:max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 text-center md:text-left">
          About Us
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
          At <span className="font-bold text-indigo-600">MyStore</span>, we are
          passionate about bringing you the best products at the most affordable
          prices. Our mission is to provide a seamless online shopping
          experience, offering a curated selection of high-quality items across
          a wide range of categories, from fashion and electronics to home decor
          and accessories.
        </p>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
          We pride ourselves on exceptional customer service and a commitment to
          making your shopping experience enjoyable and hassle-free. Whether
          you're a first-time shopper or a loyal customer, we strive to exceed
          your expectations and help you find exactly what you're looking for.
        </p>
        <div className="flex justify-center mt-4 md:mt-6">
          <Link to="/">
            <button className="bg-blue-900 text-white font-semibold py-2 px-4 md:py-2 md:px-6 rounded-sm hover:bg-blue-800 transition-all text-sm md:text-base">
              Explore Our Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
