import { createContext, useContext, useEffect, useReducer } from "react";
import { DataReducer } from "../Reducers";
import { getCartlist, getCategories, getProducts, getWishlist } from "../../services";
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const token = localStorage.getItem("login");

  const [data, dispatch] = useReducer(DataReducer, {
    products: [],
    cart: [],
    wishlist: [],
    categories:[],
    filtered:[]
  });

  useEffect(() => {
    (async () => {
      try {
        const productResponse = await getProducts();
        dispatch({
          type: "LOAD_PRODUCTS",
          payload: productResponse.data.products,
        });
        const categoryResponse = await getCategories();
        dispatch({
          type:"LOAD_CATEGORY",
          payload: categoryResponse.data.categories,
        });
        const cartResponse = await getCartlist({encodedToken:token});
        dispatch({
          type: "LOAD_CART",
          payload: cartResponse.data.cart,
        });
        const wishlistResponse = await getWishlist({encodedToken:token});
        dispatch({
          type: "LOAD_WISHLIST",
          payload: wishlistResponse.data.wishlist,
        });
      } catch (e) {
        console.log("load", e);
      }
    })();
  }, []);

  return (
    <DataContext.Provider value={{ data, dispatch,token }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
