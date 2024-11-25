import React from "react";

const CategoryFilter = ({ products, selectedCategories, onCategoryChange }) => {
  //Unique Categories

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className="p-4 border-b-2 w-full md:w-[80%] text-sm md:text-base">
      <h3 className="font-semibold mb-3">Category</h3>
      <div className="flex flex-wrap gap-4 md:flex-col md:gap-2">
        {categories.map((category) => (
          <label
            key={category}
            className="flex items-center gap-2 mb-2 text-gray-500 font-medium"
          >
            <input
              type="checkbox"
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={() => onCategoryChange(category)}
              className="w-4 h-4"
            />
            <span>{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
