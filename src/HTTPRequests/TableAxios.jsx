import React, { useState, useEffect } from "react";
import axios from "axios";

const TableAxios = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  // Fetch all users
  const fetchUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch(err => setMessage("Failed to fetch users"));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete user
  const deleteUser = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        const newUsers = users.filter(u => u.id !== id);
        setUsers(newUsers); // update UI
        setMessage("User deleted successfully ✔️");
      })
      .catch(err => setMessage("Failed to delete user ❌"));
  };

  

  return (
    <div>
      <h2>User Management Table</h2>
      {<p style={{ color: "green" }}>{message}</p>}

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                
                <button onClick={() => deleteUser(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableAxios;
