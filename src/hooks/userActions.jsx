import {
  getWishlist,
  getCartlist,
  addCartlist,
  editCartlist,
  addWishlist,
  deleteWishlist,
  deleteCartlist,
} from "../../src/services";
import { useData } from "../contexts";
import { useToast } from "./useToast";

export const useUserActions = () => {
  const { dispatch, setLoading, setLoadText } = useData();
  const { successToast, warningToast } = useToast();
  const token = localStorage.getItem("login");

  async function addWish(product) {
    setLoading(true);
    setLoadText("Adding...");
    const responseWishlist = await getWishlist({ encodedToken: token });
    if (
      !responseWishlist.data.wishlist.find((item) => item._id === product._id)
    ) {
      const res = await addWishlist({ product: product, encodedToken: token });
      dispatch({ type: "LOAD_WISHLIST", payload: res.data.wishlist });
    }
    setLoadText("");
    setLoading(false);
    successToast("Added to Wishlist...");
  }

  async function deleteWish(productid) {
    setLoading(true);
    setLoadText("Removing...");
    const responseWishlist = await deleteWishlist({
      productId: productid,
      encodedToken: token,
    });
    dispatch({
      type: "LOAD_WISHLIST",
      payload: responseWishlist.data.wishlist,
    });
    setLoadText("");
    setLoading(false);
    warningToast("Removed from Wishlist...");
  }

  async function addCart(product) {
    setLoading(true);
    setLoadText("Adding...");
    const responseCart = await getCartlist({ encodedToken: token });
    if (!responseCart.data.cart.find((item) => item._id === product._id)) {
      const res = await addCartlist({ product: product, encodedToken: token });
      dispatch({ type: "LOAD_CART", payload: res.data.cart });
    } else {
      const res = await editCartlist({
        productId: product._id,
        encodedToken: token,
        type: "increment",
      });
      dispatch({ type: "LOAD_CART", payload: res.data.cart });
    }
    setLoadText("");
    setLoading(false);
    successToast("Added to Cart...");
  }

  async function deleteCart(productid) {
    setLoading(true);
    setLoadText("Removing...");
    const responseCartlist = await deleteCartlist({
      productId: productid,
      encodedToken: token,
    });
    dispatch({ type: "LOAD_CART", payload: responseCartlist.data.cart });
    setLoadText("");
    setLoading(false);
    warningToast("Removed from Cart...");
  }

  async function incrementCart(product) {
    const responseCart = await editCartlist({
      productId: product._id,
      encodedToken: token,
      type: "increment",
    });
    dispatch({ type: "LOAD_CART", payload: responseCart.data.cart });
  }

  async function decrementCart(product) {
    const responseCart = await editCartlist({
      productId: product._id,
      encodedToken: token,
      type: "decrement",
    });
    dispatch({ type: "LOAD_CART", payload: responseCart.data.cart });
  }

  // const getPriceFiltered = (filtered, price) => {
  //   const o =
  //     filtered.price === 200
  //       ? filtered.products
  //       : filtered.products.filter(
  //           (item) => parseInt(item.price) <= parseInt(filtered.price)
  //         );
  //   dispatch({ type: "FILTERED", payload: o });
  // };

  // const getCategoryFiltered=(filtered,)

  return {
    addWish,
    deleteWish,
    addCart,
    deleteCart,
    incrementCart,
    decrementCart,
  };
};
