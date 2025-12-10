


import React from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom';
import HomePractice from './HomePractice';
import AboutPractice from './AboutPractice';
import ContactPractice from './ContactPractice';
import DataPractice from './DataPractice';

const ParentPractice = () => {

    const aboutData = {
        compName: "ASX",
        location1:"Hyderabad",
        work:"Front End Applications"
    }

    


     const NavigateButtons = () =>{
        const navigate = useNavigate();
        return(<div>
        <button onClick={()=>navigate(-1)}>Back</button>
        <button onClick={()=>navigate(1)}>Next</button>
        </div>)
    }
   
  return (
    <div>
        <BrowserRouter>
        <div><Link to='/'>Home</Link></div>
        {/* Passing Data via Query Params */}
        <div><Link to={`/data?name=${encodeURIComponent("Sakshi Takkar")}&email=${encodeURIComponent("sakshitakkar5@gmail.com")}`}>Data</Link></div>
        {/* Passing Parameters via State */}
        <div><Link to='/about' state={aboutData}>About</Link></div>
        {/* Passing data via query params */}
        <div><Link to='/contact?id=3'>Contact</Link></div>
        {<NavigateButtons /> }
      

        <Routes>
            <Route path='/' element={<HomePractice/>}/>
            <Route path='/data' element={<DataPractice/>}/>
            <Route path='/about' element={<AboutPractice/>}/>
            <Route path='/contact' element={<ContactPractice/>}/>
        </Routes>
        
        
        
        
        
        </BrowserRouter>
      
    </div>
  )
}

export default ParentPractice
