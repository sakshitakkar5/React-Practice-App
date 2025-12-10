

import React, { useMemo, useState } from 'react'
const UseMemoExample1 = () => {
    const [num1, setNum1] = useState(0);
    const [theme,setTheme] = useState('light');
    const incre = () =>{
        setNum1(num1 => num1+1);
    }
    const changeTheme1 = () =>{
        setTheme(theme == 'light' ? 'dark' :'light')
    }
    const heavyCalculation = useMemo(() =>{
        let i =0;
        while(i<10000000000)
        {
            i++;
        }
        return num1*2

    },[num1])
  return (
    <div>
        <h2>Count : {num1}</h2>
        <h2>Theme : {theme}</h2>
        <h2>Multiplication by 2 : {heavyCalculation}</h2>
        <button onClick={incre}>Increment</button>
        <button onClick={changeTheme1}>Change Theme</button>
    </div>
  )
}

export default UseMemoExample1
