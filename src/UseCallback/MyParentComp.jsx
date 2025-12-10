
import React, { useCallback, useState } from 'react'
import MyButtoncomp from './MyButtoncomp';

const MyParentComp = () => {

    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState("light");
    
    const changeCount = useCallback(() =>{
        setCount(c => c+1)
    },[]);

    const changeTheme = () => {
        setTheme(theme == 'light'? 'dark' : 'light')
    }

    console.log("Parent Component Rendered")

  return (
    <div>
        <div  style = {{backgroundColor:theme == "light"?"white":"black",
    color:theme=='light'?'black':"white"}}>


        <h2>Count : {count}</h2>
        <h2>Theme : {theme}</h2>
        </div>
        <MyButtoncomp increment = {changeCount}></MyButtoncomp>
        <button onClick={changeTheme}>Toggle Theme</button>
      
    </div>
  )
}

export default MyParentComp
