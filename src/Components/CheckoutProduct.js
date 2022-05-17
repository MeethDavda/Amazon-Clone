import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct(props) {
  const [{ basket }, dispatch] = useStateValue();
  function remove() {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
  }

  return (
    <div className="checkoutProduct">
      <img src={props.image} alt="Product" />

      <div className="prod_info">
        <h3>{props.title}</h3>
        <p>
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <button onClick={remove}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
