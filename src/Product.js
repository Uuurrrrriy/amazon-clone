import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

export const Product = ({ id, title, price, rating, image }) => {
  const [, dispatch] = useStateValue();
  const addToBusket = () => {
    dispatch({
      type: "Add_To_Busket",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{truncate(title, 150)}</p>
        <p className="product__price">
          <small>$</small>
          <strong> {price} </strong>
        </p>
        <div className="product__rating">
          {!!rating &&
            Array(rating)
              .fill()
              .map((_, i) => <p key={i}>⭐</p>)}
        </div>
      </div>
      <img src={image} alt=" Product image " />
      <button onClick={addToBusket}> Add to Busket </button>
    </div>
  );
};
