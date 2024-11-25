import React from "react";

const PriceFilter = ({ priceRange, onPriceChange }) => {
  return (
    <div className="p-4 border-b-2 w-full md:w-[80%] text-sm md:text-base">
      <h3 className="font-semibold mb-3">Price</h3>
      <div className="flex flex-wrap gap-4 md:flex-col md:gap-2 items-start">
        <p className="text-gray-500 font-medium">
          ${priceRange.min} - ${priceRange.current}
        </p>
        <input
          type="range"
          min={priceRange.min}
          max={priceRange.max}
          value={priceRange.current}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className="h-1 w-full my-2"
        />
      </div>
    </div>
  );
};

export default PriceFilter;
