

import React from 'react'

const DataPractice = () => {
 const queryparams = new URLSearchParams(window.location.search);
    const name = queryparams.get('name');
    const email = queryparams.get('email');

    
  return (
    <div>
      <p>This is Data Practice Page</p>
      <p>Name : {name}</p>
      <p>Email :{email}</p>
    </div>
  )
}

export default DataPractice
