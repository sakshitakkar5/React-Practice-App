import React, { useState, useEffect } from "react";

const StepCounter = () => {
  const [steps, setSteps] = useState(0);

  // useEffect: Logs updates + cleanup on unmount
  useEffect(() => {
    console.log(`Steps updated: ${steps}`);

    return () => {
      console.log("Component unmounted. Resetting steps...");
    };
  }, [steps]); // runs every time steps change

  return (
    <div style={styles.container}>
      <h2>Step Counter</h2>

      <h3>Steps: {steps}</h3>

      <button
        onClick={() => setSteps(steps + 100)}
        style={styles.btn}
      >
        +100 Steps
      </button>

      {/* Conditional Rendering */}
      {steps > 1000 && (
        <p style={styles.warning}>⚠️ Take a rest!</p>
      )}
    </div>
  );
};

// Simple inline styles
const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial",
  },
  btn: {
    marginTop: "15px",
    padding: "10px 20px",
    backgroundColor: "#0066ff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  warning: {
    marginTop: "15px",
    color: "red",
    fontWeight: "bold",
    fontSize: "18px",
  },
};

export default StepCounter;
