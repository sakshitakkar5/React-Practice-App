
import React, { useState, useCallback } from 'react';
const AddFlavorButton = React.memo(({ addFlavor }) => {
  console.log("🍧 AddFlavorButton rendered!");
  return (
    <button onClick={() => addFlavor("Vanilla")}>Add Vanilla</button>
  );
});

export default AddFlavorButton