import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Passing via STATE
  const userDetails = {
    name: "Sakshi",
    email: "sakshi@example.com"
  };

  const goToAbout = () => {
    navigate("/about", { state: userDetails });  // passing data to About page
  };

  // Passing via QUERY PARAMS
  const goToProduct = () => {
    navigate("/product?id=100&name=laptop");
  };

  return (
    <div>
      <h2>Home Page</h2>

      <button onClick={goToAbout}>Go to About (Pass Data)</button>
      <br /><br />

      <button onClick={goToProduct}>Go to Product (Query Params)</button>
      <br /><br />

      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate(1)}>Next</button>
    </div>
  );
};

export default Home;
