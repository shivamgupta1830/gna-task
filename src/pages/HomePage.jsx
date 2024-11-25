import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts, setLoading, setError } from "../redux/productSlice";
import { fetchProductsAPI } from "../api/productAPI";
import ProductList from "../components/ProductList";
import { BiSort } from "react-icons/bi";
import { CiFilter } from "react-icons/ci";
import CategoryFilter from "../components/filters/CategoryFilter";
import PriceFilter from "../components/filters/PriceFilter";
import RatingFilter from "../components/filters/RatingFilter";
import Pagination from "../components/Pagination";
import Hero from "../components/Hero";
import Loader from "../components/Loader";

const HomePage = () => {
  const dispatch = useDispatch();
  const {
    items: products,
    loading,
    error,
  } = useSelector((state) => state.products);

  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 1000,
    current: 1000,
  });
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  // state for filter visibility on smaller devices
  const [showFilters, setShowFilters] = useState(false);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setLoading(true));
      try {
        const data = await fetchProductsAPI();
        dispatch(setProducts(data));
        dispatch(setError(null));
      } catch (error) {
        dispatch(setError("Failed to fetch products. Please try again."));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchProducts();
  }, [dispatch]);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesPrice = product.price <= priceRange.current;
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const matchesRating =
        selectedRatings.length === 0 ||
        selectedRatings.includes(Math.floor(product.rating.rate));
      const matchesSearch =
        searchQuery === "" ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesPrice && matchesCategory && matchesRating && matchesSearch;
    });

    setFilteredProducts(filtered);
    setSortOrder("");
  }, [products, priceRange, selectedCategories, selectedRatings, searchQuery]);

  useEffect(() => {
    if (sortOrder) {
      const sortedProducts = [...filteredProducts].sort((a, b) =>
        sortOrder === "asc" ? a.price - b.price : b.price - a.price
      );
      setFilteredProducts(sortedProducts);
    }
  }, [sortOrder]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const handlePageChange = (page) => setCurrentPage(page);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  if (loading) return <Loader />;
  if (error)
    return (
      <p className="text-xl text-slate-800 font-semibold">Error: {error}</p>
    );

  return (
    <div className="w-full flex flex-col items-center">
      <Hero onSearch={handleSearch} />
      <div className="w-full flex flex-col md:flex-row justify-center items-start p-4 md:p-10">
        {/* Toggle Button for Small Screens */}
        <div className="flex md:hidden mb-4 w-full justify-start">
          <button
            onClick={() => setShowFilters((prev) => !prev)}
            className="flex items-center rounded-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 p-2"
          >
            <CiFilter size={20} className="mr-2" />
            <span>{showFilters ? "Hide Filters" : "Show Filters"}</span>
          </button>
        </div>

        {/*Filters */}
        <div
          className={`${
            showFilters ? "block" : "hidden"
          } md:block w-full md:w-[30%] mb-4 md:mb-0`}
        >
          <CategoryFilter
            products={products}
            selectedCategories={selectedCategories}
            onCategoryChange={(category) =>
              setSelectedCategories((prev) =>
                prev.includes(category)
                  ? prev.filter((c) => c !== category)
                  : [...prev, category]
              )
            }
          />
          <PriceFilter
            priceRange={priceRange}
            onPriceChange={(value) =>
              setPriceRange((prev) => ({ ...prev, current: value }))
            }
          />
          <RatingFilter
            ratings={[1, 2, 3, 4, 5]}
            selectedRatings={selectedRatings}
            onRatingChange={(rating) =>
              setSelectedRatings((prev) =>
                prev.includes(rating)
                  ? prev.filter((r) => r !== rating)
                  : [...prev, rating]
              )
            }
          />
        </div>

        {/* Products*/}
        <div className="w-full md:w-[70%] px-1">
          <div className="flex justify-between items-center border-b-2 border-gray-100 pb-5 text-blue-900">
            <p className="font-medium text-base md:text-xl text-gray-500">
              <span className="text-gray-900">
                {filteredProducts.length} Products
              </span>{" "}
              in Store
            </p>

            <label
              htmlFor="sort"
              className="bg-gray-100 px-5 py-2 md:px-7 md:py-4 rounded-3xl relative hover:bg-gray-200 "
            >
              <BiSort
                className="absolute top-3 left-1   md:top-5 md:left-2 text-blue-900 "
                size={16}
              />
              <select
                name="sort"
                id="sort"
                className="bg-gray-100 hover:bg-gray-200  outline-none appearance-none font-semibold text-sm md:text-base text-center"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="">Sort</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>
            </label>
          </div>

          {/* Product List */}
          <ProductList products={currentProducts} />

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
