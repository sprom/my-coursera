import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import "./App.css";
import Navbar from "./Navbar";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing" style={{ position: "relative" }}>
      <div className="content">
        <h1 style={{ fontSize: 48, marginBottom: 8 }}>Paradise Nursery</h1>
        <p style={{ fontSize: 18, marginBottom: 20 }}>
          Hand-picked houseplants to make your space greener.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button className="btn" onClick={() => navigate("/plants")}>Get Started</button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      {/* Navbar shows on pages that include it; Landing intentionally minimal */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<><Navbar /><AboutUs /></>} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </>
  );
};

export default App;
