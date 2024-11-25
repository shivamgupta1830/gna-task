import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 md:p-8">
      <h1 className="text-3xl md:text-4xl font-extrabold text-red-600 mb-4">
        404
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 text-center md:text-left">
        Page Not Found
      </h2>
      <p className="text-base md:text-lg text-gray-600 mb-6 text-center md:text-left">
        Oops! The page you are looking for doesn't exist. It may have been
        moved, or the URL might be incorrect.
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white font-semibold py-2 px-4 md:py-2 md:px-6 rounded-sm hover:bg-blue-700 transition-all text-sm md:text-base"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
