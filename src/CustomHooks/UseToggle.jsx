

import React, {useState} from 'react'

const UseToggle = () => {

    const [value, setValue] = useState(false);
    
        const changeValue = () =>{
            setValue(prev => !prev);
        }
    
  return [value, changeValue];
}

export default UseToggle
