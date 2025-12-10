import React, { useState } from "react";

const TabSwitcher = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div style={styles.container}>
      <h2>Simple Tab Navigation</h2>

      {/* Buttons */}
      <div style={styles.buttonBox}>
        <button 
          style={activeTab === "home" ? styles.activeBtn : styles.btn}
          onClick={() => setActiveTab("home")}
        >
          Home
        </button>

        <button 
          style={activeTab === "about" ? styles.activeBtn : styles.btn}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>

        <button 
          style={activeTab === "contact" ? styles.activeBtn : styles.btn}
          onClick={() => setActiveTab("contact")}
        >
          Contact
        </button>
      </div>

      {/* Page Content */}
      <div style={styles.contentBox}>
        {activeTab === "home" && <p>🏠 Welcome to the Home Page!</p>}
        {activeTab === "about" && <p>ℹ️ This is the About Page.</p>}
        {activeTab === "contact" && <p>📞 Contact us at support@example.com</p>}
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial",
  },
  buttonBox: {
    marginBottom: "20px",
  },
  btn: {
    padding: "10px 20px",
    margin: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
  activeBtn: {
    padding: "10px 20px",
    margin: "5px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
  contentBox: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#333",
  }
};

export default TabSwitcher;
