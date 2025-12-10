

import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
    const location = useLocation();
    const {topic} = location.state || {} ;
  return (
    <div>
      <p>This is About Page. So the topic is {topic}</p>
    </div>
  )
}

export default About
