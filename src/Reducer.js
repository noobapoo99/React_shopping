export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartHome: [...state.cartHome, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartHome: state.cartHome.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
