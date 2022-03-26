import "./cart.css";
import { useData } from "../../contexts";
import {
  getWishlist,
  addWishlist,
  deleteCartlist,
  editCartlist,
} from "../../services";

export default function Cart() {
  const { data, dispatch, token } = useData();

  async function incrementCart(product, tokens) {
    const responseCart = await editCartlist({
      productId: product._id,
      encodedToken: tokens,
      type: "increment",
    });
    console.log(responseCart.data.cart);
    dispatch({ type: "LOAD_CART", payload: responseCart.data.cart });
  }

  async function decrementCart(product, tokens) {
    const responseCart = await editCartlist({
      productId: product._id,
      encodedToken: tokens,
      type: "decrement",
    });
    dispatch({ type: "LOAD_CART", payload: responseCart.data.cart });
  }

  async function addWish(product, tokens) {
    const responseWishlist = await getWishlist({ encodedToken: tokens });
    if (
      !responseWishlist.data.wishlist.find((item) => item._id === product._id)
    ) {
      const res = await addWishlist({ product: product, encodedToken: tokens });
      dispatch({ type: "LOAD_WISHLIST", payload: res.data.wishlist });
    }
  }

  async function deleteCart(productid, tokens) {
    const responseCartlist = await deleteCartlist({
      productId: productid,
      encodedToken: tokens,
    });
    dispatch({ type: "LOAD_CART", payload: responseCartlist.data.cart });
  }

  return (
    <div className="grid-container">
      <div className="cart-products">
        <section className="cart-items">
          <p className="product-page-heading text-lg text-bold">
            <span className="no-items-in-cart">{data.cart.length}</span>{" "}
            Products in your Basket
          </p>
          {data.cart.map((item) => {
            return (
              <div className="card-container horizontal">
                <div className="card-img horizontal-img border-right">
                  <img src={item.image} alt="Apple" />
                </div>
                <div className="card-details card-details-horizontal">
                  <h2 className="card-heading">
                    {item.title}
                    <span>
                      <i
                        className="far fa-heart"
                        onClick={() => {
                          addWish(item, token);
                          deleteCart(item._id, token);
                        }}
                      ></i>
                    </span>
                  </h2>
                  <div className="rating text-sm">
                    <span className="rating-value">
                      {item.rating}
                      <i className="fa fa-star checked margin-l"></i>
                    </span>
                    (<span className="rating-number">2333</span>)
                  </div>
                  <h4 className="product-price">
                    Rs.{item.price}{" "}
                    <span className="original-price text-strike-through">
                      Rs.{item.price * 1.2}
                    </span>
                    <span className="discount-percentage">
                      {item.discount}% off
                    </span>
                  </h4>
                  <span className="qty-scale text-md">
                    Quantity:
                    <button
                      className="inc"
                      onClick={() => incrementCart(item, token)}
                    >
                      +
                    </button>
                    <div className="count">{item.qty}</div>
                    <button
                      className="dec"
                      onClick={() => decrementCart(item, token)}
                    >
                      -
                    </button>
                  </span>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => deleteCart(item._id, token)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </section>
        <section className="item-data margin-t">
          <h3 className="text-md">Price Details</h3>
          <hr></hr>
          <p>
            Price <span className="rate">Rs.5222</span>
          </p>
          <p>
            Discount <span className="rate">-Rs.522</span>
          </p>
          <p>
            Delivery Charge <span className="rate">Rs.52</span>
          </p>
          <hr></hr>
          <h3 className="text-md">
            Total Amount <span className="rate">Rs.1444</span>
          </h3>
          <hr></hr>
          <p>You will save Rs.21 on this order</p>
          <button className="btn btn-outline-primary margin-t">
            Place Order
          </button>
        </section>
      </div>
    </div>
  );
}
