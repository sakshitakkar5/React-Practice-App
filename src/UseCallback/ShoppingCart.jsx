

import React, {useState, useCallback} from 'react'
import Product from '../UseCallback/Product.jsx';

const ShoppingCart = () => {
 const [cart, setCart] = useState([]);
  const [address, setAddress] = useState("Delhi, India");

  const products = ["Shoes 👟", "Watch ⌚", "Bag 🎒"];

  console.log("🛒 Parent rendered!");

  // ✅ useCallback keeps the same function reference
  const addToCart = useCallback((product) => {
    setCart((prev) => [...prev, product]);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛍️ Shopping Cart</h2>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Change address"
      />
      <h4>📦 Cart: {cart.join(", ") || "Empty"}</h4>
      <hr />
      {products.map((item) => (
        <Product key={item} name={item} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ShoppingCart
