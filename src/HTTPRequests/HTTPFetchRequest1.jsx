

// import React, {useEffect, useState} from 'react'

// const HTTPFetchRequest1 = () => {
//     const [posts, setposts] = useState({});

//     useEffect(() => {
//         fetch('https://dummyjson.com/recipes')
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data);
//         setposts(data);
//     })
//     }, []);
    
//   return (
//     <div>
//         <ul>
//             {
//                 posts.recipes && posts.recipes.map(
//                     (item)=>{
//                         return (
//                         <li key={item.id}>
//                             id : {item.id} <br/>
//                             name:{item.name} <br/>
//                             serving :{item.servings} 
//                         </li>)
//                     }
//                 )
//             }
//         </ul>
      
//     </div>
//   )
// }

// export default HTTPFetchRequest1





import React, {useEffect, useState} from 'react'

const HTTPFetchRequest1 = () => {
    const [posts, setposts] = useState({});
    const [responseMsg, setresponseMsg] = useState('');
    const [errorMsg, seterrorMsg] = useState('');
    const [result, setresult] = useState('');

    const fetchData = ()  => {
        fetch('https://dummyjson.com/recipes')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        setposts(data);
    })
    }

    const postData = () =>{
        const newData ={
            name: "Sakshi",
            email:"sakshitakkar5@gmail.com"
        }
        fetch('https://jsonplaceholder.typicode.com/comments', {
            method: "POST",
            body:JSON.stringify(newData),
            headers: { "Content-Type": "application/json" }
        })
        .then(res=>{
            console.log(res.status)
            if(!res.ok){
                throw new Error(`status : ${res.status}`)
            }
            return res.json()})
        .then(data=>{
            console.log("New Data ", data);
            setresult("Data is Added" + JSON.stringify(data))
            setresponseMsg("Comment Added Successfully");
            seterrorMsg("");
        })
        .catch(() =>{
            setresponseMsg("");
            seterrorMsg("Comment Adding Failed")
        }
        )
    }

    const updateData = () =>{
        const newData ={
            name: "Sakshi",
            email:"sakshitakkar5@gmail.com"
        }
        fetch('https://jsonplaceholder.typicode.com/comments/5', {
            method: "PUT",
            body:JSON.stringify(newData),
            headers: { "Content-Type": "application/json" }
        })
        .then(res=>{
            console.log(res.status)
            if(!res.ok){
                throw new Error(`status : ${res.status}`)
            }
            return res.json()})
        .then(data=>{
            console.log("Updated Data ", data);
            setresult("Data is Updated" + JSON.stringify(data))
            setresponseMsg("Comment Updated Successfully");
            seterrorMsg("");
        })
        .catch(() =>{
            setresponseMsg("");
            seterrorMsg("Comment Updating Failed")
        }
        )
    }

    const deleteData = () =>{
       
        fetch('https://jsonplaceholder.typicode.com/comments/1', {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
        .then(res=>{
            console.log(res.status)
            if(!res.ok){
                throw new Error(`status : ${res.status}`)
            }
            return res.json()})
        .then(data=>{
            console.log("Deleted Data " , data);
            setresult("Data is Deleted" + JSON.stringify(data))
            setresponseMsg("Comment Deleted Successfully");
            seterrorMsg("");
        })
        .catch(() =>{
            setresponseMsg("");
            seterrorMsg("Comment Deleting Failed")
        }
        )
    }
    
  return (
    <div>
        <button onClick={fetchData}>Fetch Data</button>
        <button onClick={postData}>Post Data</button>
        <button onClick={updateData}>Update Data</button>
        <button onClick={deleteData}>Delete Data</button>
        <p className='text-green-700'>{responseMsg}</p>
        <p className='text-red-700'>{errorMsg}</p>
        <p className='text-blue-500'>{result}</p>
        <ul>
            {
                posts.recipes && posts.recipes.map(
                    (item)=>{
                        return (
                        <li key={item.id}>
                            id : {item.id} <br/>
                            name:{item.name} <br/>
                            serving :{item.servings} 
                        </li>)
                    }
                )
            }
        </ul>
      
    </div>
  )
}

export default HTTPFetchRequest1
