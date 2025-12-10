
import { useState } from 'react';
import React from 'react'
import ThemeComp from './ThemeComp';

export const themeContext = React.createContext();
const ThemeProvider = () => {

    const [theme, setTheme] = useState("light");
  return (
    <div>
    <themeContext.Provider value={{theme,setTheme}}>
      <h1>This is theme provider component</h1>
      <ThemeComp/>
    </themeContext.Provider>
    </div>
  )
}

export default ThemeProvider
