import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlistItem(state, action) {
      const existingItem = state.wishlist.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.wishlist = state.wishlist.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.wishlist.push(action.payload);
      }
    },
    removeFromWishlist(state, action) {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { toggleWishlistItem, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
