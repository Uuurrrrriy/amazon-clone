import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

export const CheckoutProduct = ({
  item: { id, title, price, rating, image },
}) => {
  const [, dispatch] = useStateValue();
  const removeFromBusket = () => {
    dispatch({
      type: "Remove_From_Busket",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={title} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong> {price} </strong>
        </p>
        <div className="checkoutProduct__rating">
          {!!rating &&
            Array(rating)
              .fill()
              .map((_, i) => <p key={i}>⭐</p>)}
        </div>
        <button onClick={removeFromBusket}> Remove from Busket </button>
      </div>
    </div>
  );
};
