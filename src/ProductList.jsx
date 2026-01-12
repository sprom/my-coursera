import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCartItems } from "./CartSlice";
import Navbar from "./Navbar";

/*
ProductList:
- 3 categories: Foliage, Succulents, Flowering
- At least 6 unique plants per category (here 6 each = 18 items)
- thumbnail, name, price
- Add to Cart buttons dispatch addItem; disabled if already in cart
- Cart icon updates via Navbar (selectTotalCount used there)
*/

const data = [
  {
    category: "Foliage",
    items: [
      { id: "f1", name: "Monstera Deliciosa", price: 29.99, image: "https://images.pexels.com/photos/4505957/pexels-photo-4505957.jpeg" },
      { id: "f2", name: "Fiddle Leaf Fig", price: 49.0, image: "https://images.pexels.com/photos/5699666/pexels-photo-5699666.jpeg" },
      { id: "f3", name: "Bird's Nest Fern", price: 19.5, image: "https://images.pexels.com/photos/4505963/pexels-photo-4505963.jpeg" },
      { id: "f4", name: "ZZ Plant", price: 24.0, image: "https://images.pexels.com/photos/5699664/pexels-photo-5699664.jpeg" },
      { id: "f5", name: "Snake Plant", price: 17.99, image: "https://images.pexels.com/photos/5699665/pexels-photo-5699665.jpeg" },
      { id: "f6", name: "Pothos", price: 12.5, image: "https://images.pexels.com/photos/4505961/pexels-photo-4505961.jpeg" }
    ]
  },
  {
    category: "Succulents",
    items: [
      { id: "s1", name: "Echeveria", price: 9.99, image: "https://images.pexels.com/photos/462272/pexels-photo-462272.jpeg" },
      { id: "s2", name: "Haworthia", price: 8.5, image: "https://images.pexels.com/photos/104827/cactus-plant-flower-104827.jpeg" },
      { id: "s3", name: "Aloe Vera", price: 14.0, image: "https://images.pexels.com/photos/4046451/pexels-photo-4046451.jpeg" },
      { id: "s4", name: "Sedum", price: 7.0, image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" },
      { id: "s5", name: "Crassula Ovata", price: 11.5, image: "https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg" },
      { id: "s6", name: "Graptoveria", price: 10.0, image: "https://images.pexels.com/photos/237610/pexels-photo-237610.jpeg" }
    ]
  },
  {
    category: "Flowering",
    items: [
      { id: "fl1", name: "Peace Lily", price: 22.0, image: "https://images.pexels.com/photos/838644/pexels-photo-838644.jpeg" },
      { id: "fl2", name: "Kalanchoe", price: 13.5, image: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg" },
      { id: "fl3", name: "African Violet", price: 15.0, image: "https://images.pexels.com/photos/36764/flower-purple-plant-petals-36764.jpeg" },
      { id: "fl4", name: "Anthurium", price: 27.0, image: "https://images.pexels.com/photos/1622666/pexels-photo-1622666.jpeg" },
      { id: "fl5", name: "Cyclamen", price: 18.0, image: "https://images.pexels.com/photos/50710/flowers-blossom-flower-bloom-50710.jpeg" },
      { id: "fl6", name: "Begonia", price: 16.0, image: "https://images.pexels.com/photos/768526/pexels-photo-768526.jpeg" }
    ]
  }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const inCart = (id) => cartItems.some((i) => i.id === id);

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Plants</h2>
        {data.map((group) => (
          <section key={group.category} style={{ marginBottom: 32 }}>
            <h3>{group.category}</h3>
            <div className="product-grid">
              {group.items.map((p) => (
                <div key={p.id} className="card">
                  <img src={p.image} alt={p.name} />
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontWeight: 700 }}>{p.name}</div>
                    <div style={{ color: "#666" }}>${p.price.toFixed(2)}</div>
                    <div style={{ marginTop: 8 }}>
                      <button
                        className="btn"
                        onClick={() => dispatch(addItem(p))}
                        disabled={inCart(p.id)}
                      >
                        {inCart(p.id) ? "Added" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default ProductList;
