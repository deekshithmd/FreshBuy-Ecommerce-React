export const DataReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return { ...state, products: action.payload };
    case "LOAD_WISHLIST":
      return { ...state, wishlist: action.payload };
    case "LOAD_CART":
      return { ...state, cart: action.payload };
    case "LOAD_CATEGORY":
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};
