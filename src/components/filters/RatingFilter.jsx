const RatingFilter = ({ ratings, selectedRatings, onRatingChange }) => {
  return (
    <div className="p-4 border-b-2 w-full md:w-[80%] text-sm md:text-base">
      <h3 className="font-semibold mb-3">Rating</h3>
      <div className="flex flex-wrap gap-3 md:flex-col md:gap-2">
        {ratings.map((rating) => (
          <label
            key={rating}
            className="flex items-center gap-2 mb-2 text-gray-500 font-medium"
          >
            <input
              type="checkbox"
              value={rating}
              checked={selectedRatings.includes(rating)}
              onChange={() => onRatingChange(rating)}
              className="w-4 h-4"
            />
            <span>{rating} Stars</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RatingFilter;
