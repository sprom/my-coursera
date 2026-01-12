import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTotalCount } from "./CartSlice";

const Navbar = () => {
  const count = useSelector(selectTotalCount);

  return (
    <nav className="navbar">
      <div style={{ flex: 1 }}>
        <Link to="/" style={{ fontSize: 18, fontWeight: 700 }}>
          Paradise Nursery
        </Link>
      </div>

      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart" style={{ display: "flex", alignItems: "center" }}>
          <span className="icon">🛒</span>
          <span style={{ marginLeft: 6, fontWeight: 700 }}>{count}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
