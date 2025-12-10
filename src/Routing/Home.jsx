
import React from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
    //   const queryparams = new URLSearchParams(window.location.search);
    //   const name1 = queryparams.get('name');

    const loc = useLocation();
    const {name} = loc.state || {};
  return (
  
    <div>
      <p>This is Home Page</p>
      <p>Welcome, {name}</p>
    </div>
  )
}

export default Home
