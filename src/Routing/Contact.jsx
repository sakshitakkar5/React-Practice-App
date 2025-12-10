import React from 'react'
import { useLocation } from 'react-router-dom'

const Contact = () => {
    // const query = new URLSearchParams(window.location.search);
    // const email = query.get('method')
    const loc = useLocation();
    const {method} = loc.state || {};
  return (
    <div>
      <p>This is Contact Page</p>
       <p>Method , {method}</p>
    </div>
  )
}

export default Contact
