

import React, { useState, useCallback } from 'react';

const Product = React.memo(({ name, addToCart }) => {
  console.log(`🧩 Product rendered: ${name}`);
  return (
    <div style={{ margin: "10px" }}>
      <span>{name}</span>
      <button onClick={() => addToCart(name)}>Add to Cart</button>
    </div>
  );
});

export default Product