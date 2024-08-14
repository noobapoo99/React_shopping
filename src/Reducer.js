// Reducer.js
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    // other cases
    default:
      return state;
  }
};
