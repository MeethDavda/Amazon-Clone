import React from "react";
import Header from "../Components/Header";
import { useStateValue } from "../Components/StateProvider";
import "./Checkout.css";
import CheckoutProduct from "../Components/CheckoutProduct";
import Subtotal from "../Components/Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      {/* <Header /> */}
      <div className="checkout_left">
        <img
          src="https://m.media-amazon.com/images/G/01/FireTV/Inline/IDB_RatingLabel_NA._TTW_.jpg"
          alt=""
          className="checkout_ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>
              You have no items in basket. To buy one or more items, click "Add
              to Basket" next to the item
            </p>
          </div>
        ) : (
          <div>
            <h2 className="h2">Your Shopping Basket</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
