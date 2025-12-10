


import React , {useState} from 'react'
import CustomCompReuse from './CustomCompReuse'

const CustomToggleON = () => {

    const [toggle, changeToggle] = CustomCompReuse('OFF');
    
  return (
    <div>
      <h2>Toggle : {toggle}</h2>
      <button onClick={changeToggle}>Toggle {toggle=='OFF' ? 'ON' : 'OFF'}</button>
    </div>
  )
}

export default CustomToggleON
