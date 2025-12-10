

// import React, {useState, useEffect} from 'react'

// const HTTPFetchRequest = () => {
//     const [users, setusers] = useState([]);



//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(json => { 
//         console.log(json)
//         setusers(json)
// })
//     }, []);
    
//   return (
//     <div>
//         <ul>
//             {
//             users.map(item =>(
//                 <li key={item.id}>
//                     {item.id}-{item.name}
//                 </li>
//             ))
//         }
//         </ul>
      
//     </div>
//   )
// }

// export default HTTPFetchRequest




// import React, {useState, useEffect} from 'react'

// const HTTPFetchRequest = () => {
//     const [responseMessage, setresponseMessage] = useState('');
//     const [errorMessage, seterrorMessage] = useState('');


//     const newUserData = {
//         name: "Sakshi",
//         email:"sakshitakkar5@gmail.com",
//         address:{
//             city:"Phagwara"
//         }
//     }
    
//     useEffect(() => {

        

        

//         fetch('https://jsonplaceholder.typicode.com/users/1',{
//             method:"DELETE",
            
//             body:JSON.stringify(newUserData),
//             headers: { "Content-Type": "application/json" }
//         })
//     .then(res => res.json())
//     .then(data => {
//   console.log("Mock response:", data);
//   setresponseMessage("User deleted Successfully");
// })
//     .catch(() => {
//         setresponseMessage("");
//         seterrorMessage('Failed to delete user')
//     })
//     }, []);
    
//   return (
//     <div>
//         <h2>Create User</h2>
//         {responseMessage}
//         {errorMessage}
      
//     </div>
//   )
// }

// export default HTTPFetchRequest




// import React, {useState, useEffect} from 'react'

// const HTTPFetchRequest = () => {
//     const [prod, setprod] = useState({});



//     useEffect(() => {
//     fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then(json => { 
//         console.log(json)
//         setprod(json)
// })
//     }, []);
    
//   return (
//     <div>
//         <ul>
//             {
//             prod.products && prod.products.map(item =>(
//                 <li key={item.id}>
//                     {item.id}-{item.title}-{item.category}
//                 </li>
//             ))
//         }
//         </ul>
      
//     </div>
//   )
// }

// export default HTTPFetchRequest

import React, {useState, useEffect} from 'react'

const HTTPFetchRequest = () => {
    const [prod, setprod] = useState({});
    const [responseMessage, setresponseMessage] = useState('');
    const [errorMessage, seterrorMessage] = useState('');


const fetchData = () =>{
    
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => { 
        console.log(json)
        setprod(json)
})
    }

const postData = () => {
    const newData = {
        title:"Sephora eye shadow",
        body: "Sephora"
    }
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData)
    })
    .then(res=>res.json())
    .then(data => {
        console.log(data)
        setresponseMessage("Product Added Successfully");
        seterrorMessage('');
    }
    )
    .catch(()=>{
        setresponseMessage("");
        seterrorMessage('Failed to add Product');
    }
    )

}

const putData = () =>{

    const newData = {
        title:"Sephora eye shadow",
        body: "Sephora"
    }
    fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method:"PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData)
    })
    .then(res=>
        {
            console.log(`${res.status}`)
            if(!res.OK) throw new Error(`HTTP Error status : ${res.status}`)
            
            res.json()
        }
        )
    .then(data => {
        console.log(data)
        setresponseMessage("Product Updated Successfully");
        seterrorMessage('');
    }
    )
    .catch(()=>{
        setresponseMessage("");
        seterrorMessage('Failed to update Product');
    }
    )

}

const deleteData = () =>{

    const newData = {
        title:"Sephora eye shadow",
        body: "Sephora"
    }
    fetch('https://jsonplaceholder.typicode.com/pos',{
        method:"DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData)
    })
    .then(res=>res.json())
    .then(data => {
        console.log(data)
        setresponseMessage("Product Deleted Successfully");
        seterrorMessage('');
    }
    )
    .catch(()=>{
        setresponseMessage("");
        seterrorMessage('Failed to delete Product');
    }
    )

}
    
  return (
    <div>


        <button onClick={fetchData}>Fetch Data</button>
        <button onClick={postData}>POST Data</button>
        <button onClick={putData}>PUT Data</button>
        <button onClick={deleteData}>DELETE Data</button>
        <p>{responseMessage}</p>
        <p>{errorMessage}</p>
        <ul>
            {
            prod.products && prod.products.map(item =>(
                <li key={item.id}>
                    {item.id}-{item.title}-{item.brand}
                </li>
            ))
        }
        </ul>
      
    </div>
  )
}

export default HTTPFetchRequest







