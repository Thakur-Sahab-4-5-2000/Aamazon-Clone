import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";

import CheckoutProduct from "./CheckoutProduct.js";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
      <img
        className="checkout__ad"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/uk_xsite2019/FDFO/fsfo_en_lp_2.jpg"
        alt="chechout_image"
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Basket is Empty</h2>
          <p>
            The price and availability of items at Amazon.in are subject to
            change. The shopping basket is a temporary place to store a list of
            your items and reflects each item's most recent price. Do you have a
            gift card or promotional code? We'll ask you to enter your claim
            code when it's time to pay.
          </p>
        </div>
      ) : (
        <div className="checkout__title">
          <h2>Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image} 
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
      </div>
      {basket.length>0 && (
        <div className="checkout__right">
          
          <Subtotal/>
        </div>
      )}
    </div>
  );
}

export default Checkout;
