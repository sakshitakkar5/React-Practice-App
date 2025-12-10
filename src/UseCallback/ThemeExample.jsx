


import React , {useState,useCallback} from 'react'
import ThemeExampleChild from './ThemeExampleChild';

const ThemeExample = () => {
    const [count, setcount] = useState(0);
    const [theme, settheme] = useState('light');

    const changeCount = useCallback(() =>{
        setcount(pre => pre+1)
    },[])

    const changeTheme = () =>{
        settheme(theme == 'light'?'dark':'light')
    }

    console.log('Parent Component rendered');
  return (
    <div>
      <div>
      <h2>Count: {count}</h2>
      <h2>Theme : {theme}</h2>
      </div>
      <ThemeExampleChild countfn = {changeCount}/>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default ThemeExample
