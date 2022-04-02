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
    case "PRICE":
      return { ...state, price: action.payload };
    case "RATING":
      return { ...state, rating: action.payload };
    case "SORT":
      return { ...state, sortBy: action.payload };
    case "ALLIUM":
      return { ...state, allium: !state.allium };
    case "CRUCIFEROUS":
      return { ...state, cruciferous: !state.cruciferous };
    case "ROOT":
      return { ...state, root: !state.root };
    case "FRUIT":
      return { ...state, fruit: !state.fruit };
    case "MARROW":
      return { ...state, marrow: !state.marrow };
    case "LEAFY":
      return { ...state, leafy: !state.leafy };
    case "CLEAR":
      return {
        ...state,
        price: 200,
        rating: 0,
        sortBy: null,
        allium: false,
        cruciferous: false,
        fruit: false,
        leafy: false,
        marrow: false,
        root: false,
      };
    case "LOGOUT":
      return { ...state, wishlist: [], cart: [] };
    default:
      return state;
  }
};
