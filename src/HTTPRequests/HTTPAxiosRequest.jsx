import React, { useState } from 'react'
import axios from 'axios';

const HTTPAxiosRequest = () => {

    const [users, setusers] = useState([]);
    const [singleuser ,setsingleuser] = useState(null);
    const [responseMessage, setresponseMessage] = useState("");
    const [error, seterror] = useState("");
    const [error1, seterror1] = useState("");
    const fetchData = () =>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => setusers(res.data))
    .catch(err => console.log(err))
    }

    const fetchSingleData = () =>{
        axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res=>setsingleuser(res.data))
        .catch(err=>{
        console.log(err);
        // setsingleuser(null);
        seterror1("User Does not Exist")})
    }

    const postData = () =>{
        const newData = {
            name: "Sakshi",
            email:"sakshitakkar5@gmail.com"
        }

        axios.post("https://jsonplaceholder.typicode.com/users", newData)
        .then(res=>{
            
           
            console.log("New Data" , res.data);
            setresponseMessage("User Added Successfully" + JSON.stringify(res.data));
            seterror("");
        
    })
        
        .catch((err)=>{
            console.log(err);
             seterror("User not added successfully")
            setresponseMessage("");
           
        })

    }

    const putData = () =>{
        const updatedData = {
            name:"Neeraj",
            email:"neeraj34@gmail.com"
        }

        axios.put("https://jsonplaceholder.typicode.com/users/199", updatedData)
        .then(res=>{
            console.log("Updated Data" ,res.data);
            setresponseMessage("User updated successfully" + JSON.stringify(res.data));
            seterror("")
        })
        .catch((err)=>{
            console.log(err);
            seterror("User not updated successfully");
            setresponseMessage("");
        })
    }

    const deleteData = () =>{
        axios.delete("https://jsonplaceholder.typicode.com/users/1")
        .then(res =>{
            console.log(res.data);
        

            setresponseMessage("User Deleted Successfully");
            seterror("");
        }
        )
        .catch((err)=>{
            console.log(err);
            seterror("User Not deleted successfully");
            setresponseMessage("");
        })
    }
  return (
    <div>
        <button onClick={fetchData}>Get Data</button>
        <button onClick={fetchSingleData}>Get Single ID Data</button>
        <button onClick={postData}>POST Data</button>
        <button onClick={putData}>PUT Data</button>
        <button onClick={deleteData}>DELETE Data</button>
        {responseMessage?(<p className='text-green-600'>{responseMessage}</p>):null}
        {error?(<p className='text-red-500'>{error}</p>):null}
        <ul>
        {
            users.map((item) =>{
                return(
                <li key={item.id}>
                    {item.id} - {item.name} - {item.email}
                </li>
                )
            })
        }
        </ul>

        <ul>
            {singleuser?(
                <li>
                    <p>Id: {singleuser.id}</p>
                    <p>Name: {singleuser.name}</p>
                    <p>Email: {singleuser.email}</p>
                </li>
            ):({error1} ?(<p>{error1}</p>) : null)}
        </ul>
    </div>
  )
}

export default HTTPAxiosRequest
