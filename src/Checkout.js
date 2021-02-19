import React from "react";
import { useStateValue } from "./StateProvider";
import { CheckoutProduct } from "./CheckoutProduct";
import { Subtotal } from "./Subtotal";
import "./Checkout.css";

export const Checkout = (props) => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__add"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout  add"
        />
        {!basket?.length ? (
          <div>
            <h2>Your Shopping Busket is empty</h2>
            <p>
              You have no items in your busket. To buy ne or more items, click "
              Add to Busket " next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Busket</h2>
            {!!basket.length &&
              basket.map((item) => <CheckoutProduct item={item} />)}
          </div>
        )}
      </div>

      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};
