

import React, { useState, useEffect } from "react";

const CartExampleUseEffect = () => {
  const [cartCount, setCartCount] = useState(0);
  const [message, setMessage] = useState("");

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  // useEffect runs whenever cartCount changes
  useEffect(() => {
    if (cartCount > 0) {
      setMessage("🛍️ Item added to cart!");

      // Remove message after 3 seconds
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);

      // Cleanup timer when component updates/unmounts
    //   return () => clearTimeout(timer);
    }
  }, [cartCount]); // Run only when cartCount changes

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-3xl font-bold text-green-700 mb-4">Shopping Cart 🛒</h1>
      <button
        onClick={addToCart}
        className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
      >
        Add to Cart
      </button>
      <h2 className="mt-4 text-xl">Items in cart: {cartCount}</h2>
      {message && <p className="mt-2 text-green-800">{message}</p>}
    </div>
  );
};

export default CartExampleUseEffect;
