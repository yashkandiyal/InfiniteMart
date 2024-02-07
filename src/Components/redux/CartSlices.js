import { createSlice } from "@reduxjs/toolkit";
import productdata from "../StoreItems/storeitems";
const initialState = {
  cart: [],
  availableItems: productdata,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const existingItem = state.cart.find(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );

      if (existingItem) {
        existingItem.quantity = action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    IncreaseQuantity: (state, action) => {
      const existingItem = state.cart.find(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );

      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    DeleteItem: (state, action) => {
      state.cart = state.cart.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            item.color === action.payload.color &&
            item.size === action.payload.size
          )
      );
    },
    DecreaseQuantity: (state, action) => {
      const existingItem = state.cart.find(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );

      if (existingItem.quantity >= 1) {
        existingItem.quantity -= 1;
      }
      if (existingItem.quantity === 0) {
        state.cart = state.cart.filter(
          (item) =>
            !(
              item.id === action.payload.id &&
              item.color === action.payload.color &&
              item.size === action.payload.size
            )
        );
      }
    },
    sortDataHtoL: (state) => {
      const sortedItems = [...state.availableItems].sort((a, b) => {
        const priceA = a.price;
        const priceB = b.price;

        return priceB - priceA;
      });

      state.availableItems = sortedItems;
    },
    sortDataLtoH: (state) => {
      console.log("Sorting data");
      const sortedItems = [...state.availableItems].sort((a, b) => {
        const priceA = a.price;
        const priceB = b.price;

        return priceA - priceB;
      });

      state.availableItems = sortedItems;
    },
  },
});
export const {
  addtocart,

  sortDataHtoL,
  sortDataLtoH,
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteItem,
} = cartSlice.actions;
export default cartSlice.reducer;
