
import React, { useState } from 'react'
import UseToggle from './UseToggle'

const CustomHookComponent = () => {
    // const [value, setValue] = useState(false);

    // const changeValue = () =>{
    //     setValue(prev => !prev);
    // }

    const [val, changeValue] = UseToggle(false);

  return (
    <div>
      <input type={ val ? 'text' : 'password'} />
      <button onClick={changeValue}>{val?'Hide' : "Show"} Password</button>
    </div>
  )
}

export default CustomHookComponent
