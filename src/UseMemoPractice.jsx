

import React, {useState, useMemo} from 'react'

const UseMemoPractice = () => {
    const [count, setcount] = useState(0);
    const [theme, settheme] = useState('light');

    const changeCount = () =>{
        setcount(pre => pre+1);
    }

    const changeTheme = () =>{
        settheme(theme == 'light' ?'dark' : 'light');
    }

    const heavyCalculation = useMemo(() =>{
        let i = 0;
        while(i<10000000000)
        {
            i++
        }
        return count*2
    },[count])
  return (
    <div>
      <h2>Count : {count}</h2>
      <h2>Theme : {theme}</h2>
      <h2>Multiply by 2 : {heavyCalculation}</h2>
      <button onClick={changeCount}>Change Count</button>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default UseMemoPractice
