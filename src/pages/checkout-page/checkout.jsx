import "./checkout.css";
import { useData } from "../../contexts";
import { useState } from "react";
export default function Checkout() {
  const { data } = useData();
  const [address, setAddress] = useState();

  const doPayment = () => {
    let options = {
      key: "rzp_test_FKsgyFO1LyEuxU",
      key_secret: "B5IjUO1TmcjmfDw34KMI4f8X",
      amount: data.cartPriceDetails.total * 100,
      currency: "INR",
      name: "FreshBuy",
      description: "Thank you for choosing FreshBuy",
      handler: function (response) {
        alert("payment successful" + response.razorpay_payment_id);
      },
      prefill: {
        name: "Deekshith M D",
        email: "deekshithmogra@gmail.com",
        contact: "7975507889",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#0bb32f",
      },
    };
    let pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <div className="checkout-grid">
      <div className="address-container">
        <div className="all-address">
          <h1 className="text-center">Addresses</h1>
          {data.address.map((addres) => {
            return (
              <div className="address-data margin-b" key={addres._id}>
                <input
                  type="radio"
                  name="address"
                  onClick={() => setAddress(addres)}
                />
                <div className="address-details text-md margin-l">
                  <div className="text-md text-bold">{addres.name},</div>
                  <div>
                    {addres.building}, {addres.city},
                  </div>
                  <div>
                    {addres.country}, {addres.pincode},
                  </div>
                  <div>{addres.phone}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="order-details">
        <section className="item-data margin-t">
          <div className="coupon">
            <span className="text-md text-bold">Apply Coupen</span>{" "}
            <button className="coupon-btn btn btn-outline-primary">
              Apply
            </button>
          </div>
          <h3 className="text-md">Order Details</h3>
          <hr />
          {data.cart.map((item) => {
            return (
              <div className="order-detail margin" key={item._id}>
                <span className="text-md">{item.title}</span>
                <span className="text-md">{item.qty}</span>
              </div>
            );
          })}
          <hr />
          <h3 className="text-md">Price Details</h3>
          <hr></hr>
          <p>
            Price <span className="rate">Rs.{data.cartPriceDetails.price}</span>
          </p>
          <p>
            Discount{" "}
            <span className="rate">-Rs.{data.cartPriceDetails.discount}</span>
          </p>
          <p>
            Delivery Charge{" "}
            <span className="rate">
              Rs.{data.cartPriceDetails.deliveryCharge}
            </span>
          </p>
          <hr />
          <h3 className="text-md">
            Total Amount{" "}
            <span className="rate">Rs.{data.cartPriceDetails.total}</span>
          </h3>
          <hr />
          <p>You will save Rs.{data.cartPriceDetails.discount} on this order</p>
          <hr />

          {address ? (
            <>
              <p className="text-md text-bold">Deliver To :</p>
              <div className="address-data margin-b">
                <div className="address-details text-md margin-l">
                  <div className="text-md text-bold">{address.name},</div>
                  <div>
                    {address.building}, {address.city},
                  </div>
                  <div>
                    {address.country}, {address.pincode},
                  </div>
                  <div>{address.phone}</div>
                </div>
              </div>
            </>
          ) : null}
          <button
            className="btn btn-outline-primary margin-t"
            onClick={() => doPayment()}
          >
            Place Order
          </button>
        </section>
      </div>
    </div>
  );
}
