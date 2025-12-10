

import React, { useState, useCallback } from 'react';
import AddFlavorButton from '../UseCallback/AddFlavorButton'

const IceCreamShop = () => {
  const [shopName, setShopName] = useState("Sakshi's Ice Creams");
  const [flavors, setFlavors] = useState([]);

  console.log("🏪 Parent (IceCreamShop) rendered!");

  // ✅ useCallback remembers this function
  const addFlavor = useCallback((flavor) => {
    setFlavors((prev) => [...prev, flavor]);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>{shopName}</h2>
      <input
        value={shopName}
        onChange={(e) => setShopName(e.target.value)}
        placeholder="Change shop name"
      />
      <br /><br />
      <AddFlavorButton addFlavor={addFlavor} />
      <h3>Flavors: {flavors.join(", ") || "No flavors yet"}</h3>
    </div>
  );
  
}

export default IceCreamShop
