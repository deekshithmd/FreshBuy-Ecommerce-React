import { Link, useNavigate } from "react-router-dom";
import { useData } from "../../contexts";
import {
  getWishlist,
  getCartlist,
  addCartlist,
  editCartlist,
  addWishlist,
  deleteWishlist,
} from "../../services";

const ProductCard = ({ product }) => {
  const { data, dispatch } = useData();

  const navigate = useNavigate();

  const token = localStorage.getItem("login");

  const wish = data.wishlist.some((item) => item.title === product.title)
    ? "fas fa-heart wishlisted"
    : "far fa-heart";

  async function addWish(product, tokens) {
    const responseWishlist = await getWishlist({ encodedToken: tokens });
    if (
      !responseWishlist.data.wishlist.find((item) => item._id === product._id)
    ) {
      const res = await addWishlist({ product: product, encodedToken: tokens });
      dispatch({ type: "LOAD_WISHLIST", payload: res.data.wishlist });
    }
  }

  async function deleteWish(productid, tokens) {
    const responseWishlist = await deleteWishlist({
      productId: productid,
      encodedToken: tokens,
    });
    dispatch({
      type: "LOAD_WISHLIST",
      payload: responseWishlist.data.wishlist,
    });
  }

  async function addCart(product, tokens) {
    const responseCart = await getCartlist({ encodedToken: tokens });
    if (!responseCart.data.cart.find((item) => item._id === product._id)) {
      const res = await addCartlist({ product: product, encodedToken: tokens });
      dispatch({ type: "LOAD_CART", payload: res.data.cart });
    } else {
      const res = await editCartlist({
        productId: product._id,
        encodedToken: tokens,
        type: "increment",
      });
      dispatch({ type: "LOAD_CART", payload: res.data.cart });
    }
  }

  return (
    <div
      className={
        product.outofstock
          ? "card-container vertical overlay"
          : "card-container vertical"
      }
      key={product._id}
    >
      <div className="card-img vertical-img border-bottom">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="card-details card-details-vertical">
        <h2 className="card-heading">
          {product.title}
          <span>
            {product.outofstock ? (
              <i className="far fa-heart"></i>
            ) : (
              <i
                className="far fa-heart"
                onClick={() => {
                  token
                    ? wish === "far fa-heart"
                      ? addWish(product, token)
                      : deleteWish(product._id, token)
                    : navigate("/login");
                }}
              ></i>
            )}
          </span>
        </h2>
        <div className="rating text-sm">
          <span className="rating-value">
            {product.rating}
            <i className="fa fa-star checked margin-l"></i>
          </span>
          (<span className="rating-number">2333</span>)
        </div>
        <h4 className="product-price">
          Rs.{product.price}/kg{" "}
          <span className="original-price text-strike-through">
            Rs.{product.price * 1.2}
          </span>
          <span className="discount-percentage">{product.discount}% off</span>
        </h4>
        {product.outofstock ? (
          <button className="btn btn-icon-text-primary-outline">
            <span className="btn-icon">
              <i className="fa fa-shopping-basket margin-r"></i>
            </span>
            Add to Basket
          </button>
        ) : data.cart.some((item) => item.title === product.title) ? (
          <Link to="/cart">
            <button className="btn btn-icon-text-primary-outline">
              <span className="btn-icon">
                <i className="fa fa-shopping-basket margin-r"></i>
              </span>
              Go To Basket
            </button>
          </Link>
        ) : (
          <button
            className="btn btn-icon-text-primary-outline"
            onClick={() => {
              token ? addCart(product, token) : navigate("/login");
            }}
          >
            <span className="btn-icon">
              <i className="fa fa-shopping-basket margin-r"></i>
            </span>
            Add to Basket
          </button>
        )}
      </div>
      {product.offer && (
        <div class="badge badge-offer 20-off">
          <span></span>
        </div>
      )}
      {product.outofstock && (
        <span class="card-text-overlay out-of-stock">
          <h2>Out of Stock</h2>
        </span>
      )}
    </div>
  );
};

export { ProductCard };
