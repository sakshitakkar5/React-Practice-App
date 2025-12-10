import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const { name, email } = location.state || {};

  return (
    <div>
      <h2>About Page</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default About;
