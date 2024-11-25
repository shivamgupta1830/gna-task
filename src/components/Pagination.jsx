import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevClick = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex items-center justify-center gap-3 mt-6 text-sm md:text-base">
      <button
        onClick={handlePrevClick}
        disabled={currentPage === 1}
        className={`px-4 py-2 bg-gray-200 text-gray-600 rounded-lg ${
          currentPage === 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-300"
        }`}
      >
        Prev
      </button>
      <span className="px-4 py-2 text-gray-600 font-medium">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 bg-gray-200 text-gray-600 rounded-lg ${
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-300"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
