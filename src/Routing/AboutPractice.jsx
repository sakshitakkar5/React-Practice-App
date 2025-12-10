

import React from 'react'
import { useLocation } from 'react-router-dom'

const AboutPractice = () => {

    const loc = useLocation();
    const {compName,location1,work} = loc.state || {}
  return (
    <div>
      <p>This is About Practice Page</p>
      <p>Company Name : {compName}</p>
      <p>Location : {location1}</p>
      <p>Work: {work}</p>
    </div>
  )
}

export default AboutPractice
