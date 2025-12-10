


import axios from 'axios';
import React, { useState, useEffect } from 'react'

const ContactPractice = () => {
    const queryparams = new URLSearchParams(window.location.search);
    const [users,setUsers] = useState([]);
    const id = queryparams.get('id');


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res=>setUsers(res.data))
    .catch(err=>console.log(err))
    }, []);
    
  return (
    <div>
      <p>This is Contact Practice Page</p>
      <p>name: {users.name}</p>
      <p>username: {users.username}</p>
      <p>email: {users.email}</p>
      <p>Phone : {users.phone}</p>
    </div>
  )
}

export default ContactPractice
