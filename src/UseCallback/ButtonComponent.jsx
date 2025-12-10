

import React from 'react';

const ButtonComponent = React.memo(({ onClick }) => {
  console.log("ButtonComponent rendered!");

  return (
    <button onClick={onClick}>
      Increment Count
    </button>
  );
});

export default ButtonComponent;
