import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  selectTotalAmount,
  removeItem,
  incrementQuantity,
  decrementQuantity
} from "./CartSlice";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const CartItem = () => {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectTotalAmount);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Your Cart</h2>
        {items.length === 0 ? (
          <div>
            <p>Your cart is empty.</p>
            <Link to="/plants" className="btn">Continue Shopping</Link>
          </div>
        ) : (
          <>
            <div style={{ display: "grid", gap: 12 }}>
              {items.map((it) => (
                <div key={it.id} style={{ display: "flex", gap: 12, alignItems: "center", borderBottom: "1px solid #eee", paddingBottom: 12 }}>
                  <img src={it.image} alt={it.name} style={{ width: 110, height: 80, objectFit: "cover", borderRadius: 6 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700 }}>{it.name}</div>
                    <div>Unit price: ${it.price.toFixed(2)}</div>
                    <div style={{ marginTop: 8, display: "flex", gap: 8, alignItems: "center" }}>
                      <button className="btn" onClick={() => dispatch(decrementQuantity(it.id))}>-</button>
                      <div style={{ minWidth: 32, textAlign: "center" }}>{it.quantity}</div>
                      <button className="btn" onClick={() => dispatch(incrementQuantity(it.id))}>+</button>
                      <button style={{ marginLeft: 12 }} className="btn" onClick={() => dispatch(removeItem(it.id))}>Delete</button>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontWeight: 700 }}>${(it.price * it.quantity).toFixed(2)}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: 18, fontWeight: 700 }}>Total: ${total.toFixed(2)}</div>
              <div style={{ display: "flex", gap: 8 }}>
                <button className="btn" onClick={() => alert("Coming Soon")}>Checkout</button>
                <Link to="/plants" className="btn">Continue Shopping</Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartItem;
