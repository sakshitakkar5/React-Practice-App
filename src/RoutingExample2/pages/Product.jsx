// import { useSearchParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// const Product = () => {
//   const [params] = useSearchParams();
//   const navigate = useNavigate();
//   const [details, setDetails] = useState(null);

//   const id = params.get("id");
//   const name = params.get("name");

//   // Fake fetch from API
//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then(res => res.json())
//       .then(data => setDetails(data));
//   }, [id]);

//   const addToCart = () => {
//     navigate("/cart", { state: { id, name, price: 99 } });
//   };

//   return (
//     <div>
//       <h2>Product Details</h2>
//       <p>ID: {id}</p>
//       <p>Name: {name}</p>

//       {details ? (
//         <>
//           <h4>Fetched Title:</h4>
//           <p>{details.title}</p>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}

//       <button onClick={addToCart}>Add to Cart</button>
//     </div>
//   );
// };

// export default Product;


import axios from 'axios';
import React, {useState, useEffect} from 'react'


const Product = () => {
    const [reci,setrecipe] = useState([]);
    const queryparams = new URLSearchParams(window.location.search);
    const id = queryparams.get('id');
    const name = queryparams.get('name');
    const price = queryparams.get('price');


    useEffect(() => {
     axios.get(`https://dummyjson.com/recipes/${id}`)
    .then(res=>setrecipe(res.data))
    .catch(err=>console.log(err));
    }, []);
   

  return (
    <div>
        <h2>Product Description is:</h2>
        <p>id: {id}</p>
        <p>name : {name}</p>
        <p>price: {price}</p>
        {reci?
            (
            <>
            <p>Instructions are:</p>
            <p>{reci.instructions}</p>
            
            </>):(<p>Loading....</p>)
        }
      
    </div>
  )
}

export default Product

