

import React from 'react'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'

const Parent = () => {
   

    const NavigateButtons = () =>{

         const navigate = useNavigate();
         return(
        <div>
        <button onClick={()=>navigate(-1)}>Back Page</button>
        <button onClick={()=>navigate(1)}>Next Page</button>
        </div>
         )
    }
  return (
    <div>
        <BrowserRouter>
        {/* <p><Link to="/home?name=Sakshi">Home</Link></p> */}
        <p><Link to="/home" state= {{name:"Sakshi"}}>Home</Link></p>
        <p><Link to="/abouttt" state = {{topic:"Web Development"}}>About</Link></p>
        {/* <p><Link to ="contact?method=email">Contact</Link></p> */}
        <p><Link to ="/contact" state={{method:"email"}}>Contact</Link></p>
        
        <NavigateButtons/>
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/abouttt" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default Parent
