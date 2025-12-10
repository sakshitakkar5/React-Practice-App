import React, { useContext } from 'react'
import { themeContext } from '../UseContext/ThemeProvider'
const ThemeGetter = () => {
const {theme,setTheme} = useContext(themeContext)
const changeTheme = () =>{
        setTheme((uTheme)=>{
           return uTheme == 'light'?'dark':'light'
        })
}
  return (
    <div >
    <div style={{backgroundColor:theme=='light'?'white':'black',
        color:theme=='light'?'black':'white'
    }
    }>   
    <h1>Current Theme : {theme}</h1>
    </div>
    <button onClick={changeTheme}>Toggle Theme</button>
    </div>
  )
}
export default ThemeGetter
