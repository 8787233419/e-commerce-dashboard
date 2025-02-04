import React from "react";
import "./Cart.css";

export default function Cart({ setIsCartOpen }) {
  const cartItems = [
    { id: 1, name: "Shawarma", price: 110, quantity: 2 },
    { id: 2, name: "Shawarma", price: 110, quantity: 2 },
    { id: 3, name: "Shawarma", price: 110, quantity: 2 },
    { id: 4, name: "Shawarma", price: 110, quantity: 2 },
  ];

  const deliveryCharge = 20;
  const tax = 18;
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) + deliveryCharge + tax;

  return (
    <div className="cart-container">
      {/* Header */}
      <div className="cart-header">
        <h2 className="cart-title">Items</h2>
        <button onClick={() => setIsCartOpen(false)} className="cart-close">✖</button>
      </div>

      {/* Cart Items */}
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div>
              <p className="cart-item-name">{item.name}</p>
              <div className="cart-quantity">
                <button className="cart-qty-btn">-</button>
                <span>{item.quantity}</span>
                <button className="cart-qty-btn">+</button>
              </div>
            </div>
            <p className="cart-item-price">{item.price}₹</p>
          </div>
        ))}
      </div>

      {/* Charges & Total */}
      <div className="cart-charges">
        <p className="cart-charge-item">
          <span>Delivery charges :</span> <span>{deliveryCharge}₹</span>
        </p>
        <p className="cart-charge-item">
          <span>Tax :</span> <span>{tax}₹</span>
        </p>
      </div>

      {/* Total & Continue Button */}
      <div className="cart-total-section">
        <p className="cart-total">
          <span>Total :</span> <span>{total}₹</span>
        </p>
        <button className="cart-continue">Continue</button>
      </div>
    </div>
  );
}
