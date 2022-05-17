import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product(props) {
  const rating = Math.floor(Math.random() * 5 + 1);
  const [{}, dispatch] = useStateValue();
  function addToBasket() {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.src,
        price: props.price,
        rating: props.rating,
      },
    });
  }

  return (
    <div className="product">
      <div className="product_info">
        <p>{props.title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>

        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>

      <img src={props.src} alt="ipad air 5" />

      <button className="product_button" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
