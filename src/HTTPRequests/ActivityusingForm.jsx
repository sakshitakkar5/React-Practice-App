

import React, { useState } from "react";

const ActivityusingForm = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page refresh

    const userData = {
      name: name,
      username: job
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Response:", data);
        setMessage("User Created Successfully! ✔️");
      })
      .catch(() => {
        setMessage("Failed to create user ❌");
      });
  };

  return (
    <div>
      <h2>Create User</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br /><br />

        <input
          type="text"
          placeholder="Enter Username"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        /><br /><br />

        <button type="submit">Create User</button>
      </form>

      <h3>{message}</h3>
    </div>
  );
};

export default ActivityusingForm;
