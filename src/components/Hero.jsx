import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Hero = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(inputValue.trim());
    }
  };

  return (
    <div className="w-full bg-gray-100 flex flex-col justify-center items-center gap-5 p-5 rounded-sm shadow-md">
      <p className="font-semibold text-xl sm:text-2xl text-center">
        Find Products in Store
      </p>
      <div className="bg-white p-2 w-full sm:w-[75%] md:w-[50%] flex flex-col sm:flex-row gap-3 sm:gap-2 justify-center items-center rounded-sm">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What are you looking for?"
          className="outline-none py-3 px-4 w-full sm:flex-grow rounded-sm"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-950 text-white py-3 px-6 w-full sm:w-auto flex gap-1 justify-center items-center hover:bg-blue-800 rounded-sm"
        >
          <CiSearch className="text-lg" /> Search
        </button>
      </div>
    </div>
  );
};

export default Hero;
