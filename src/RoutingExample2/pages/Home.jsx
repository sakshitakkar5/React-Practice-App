// import { products } from "../data";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();

//   const openProduct = (id, name) => {
//     navigate(`/product?id=${id}&name=${name}`);
//   };

//   return (
//     <div>
//       <h2>Student Store</h2>

//       {products.map((p) => (
//         <div key={p.id}>
//           <h3>{p.name} - ₹{p.price}</h3>
//           <button onClick={() => openProduct(p.id, p.name)}>View Details</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Home;


import React from 'react'
import { products } from '../data';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const sendData= (id,name,price) =>{
        navigate(`/product?id=${id}&name=${name}&price=${price}`)
    }
    
  return (
    <div>
        <ul>
            {
                products.map(item =>{
                    return(
                        <li key={item.id}>
                            <p>{item.name}-{item.price}</p>
                            <button onClick={()=>sendData(item.id,item.name,item.price)}>View Details</button>
                        </li>
                    )
                })
            }
        </ul>
      
    </div>
  )
}

export default Home

