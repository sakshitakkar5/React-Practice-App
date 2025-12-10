

import React, { useContext } from 'react'
import { themeContext } from './ThemeProvider'



const ThemeComp = () => {

  

    const {theme,setTheme} = useContext(themeContext);

    const changeTheme = () =>{
        setTheme((theme)=>{
            return theme=='light'?'dark':'light'
        })
    }

    
  return (
    <div style = {{backgroundColor:theme == "light"? "white":"black",
        color:theme == "light"?"black":"white"
    }}>
      <h1>This is new theme component and theme is : {theme}</h1>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default ThemeComp
