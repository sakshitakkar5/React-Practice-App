

import React, { useState } from "react";

const ShoppingCartUseState = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <h2>🛒 Item Quantity: {quantity}</h2>
      <button onClick={() => setQuantity(q => q + 1)}>Add</button>
      <button onClick={() => setQuantity(q => Math.max(0, q - 1))}>Remove</button>
    </div>
  );
};

export default ShoppingCartUseState;
