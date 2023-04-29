import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return { ...state, products: action.payload };
    case 'ADD_TO_CART':
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        return state;
      }
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};






const store = configureStore({
  reducer,
});

export default store;
