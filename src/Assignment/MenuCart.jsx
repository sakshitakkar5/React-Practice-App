import React, { useState } from "react";
import styles from "./MenuCart.module.css";

const MenuCart = () => {
  const menuItems = [
    { id: 1, name: "Burger", price: 120 },
    { id: 2, name: "Pizza", price: 250 },
    { id: 3, name: "Fries", price: 80 },
  ];

  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Calculate total using reduce()
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Menu</h2>

      <div className={styles.menuList}>
        {menuItems.map((item) => (
          <div key={item.id} className={styles.card}>
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <button
              className={styles.btn}
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h2 className={styles.heading}>Cart Items</h2>

      {cart.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <div className={styles.cartBox}>
          {cart.map((c, index) => (
            <div key={index} className={styles.cartItem}>
              <span>{c.name}</span>
              <span>₹{c.price}</span>
            </div>
          ))}
        </div>
      )}

      <h3 className={styles.total}>Total Price: ₹{total}</h3>
    </div>
  );
};

export default MenuCart;
