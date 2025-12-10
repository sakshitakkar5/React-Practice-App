

import React, { useState, useCallback } from 'react';
import ButtonComponent from './ButtonComponent';

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  console.log("Parent rendered!");

  // Without useCallback – every re-render creates a new function
  // With useCallback – the function is remembered until dependencies change
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [theme]); // 👈 No dependency — same function every render

  return (
    <div
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '20px',
      }}
    >
      <h2>Count: {count}</h2>

      {/* Passing callback function as prop */}
      <ButtonComponent onClick={handleIncrement} />

      <br /><br />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ParentComponent;
