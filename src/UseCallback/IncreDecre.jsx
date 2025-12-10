

import React , {useCallback, useState} from 'react'
import IncreDecreChild from './IncreDecreChild';

const IncreDecre = () => {
    const [count, setcount] = useState(0);
    const [number, setnumber] = useState(0);

    const incre = useCallback(() =>{
        setcount(precount => precount +1);
    }
    ,[])
    const decre = useCallback(() =>{
        setcount(precount => precount+1)
    },[])

    const num = useCallback(() =>{
        setnumber(prenum => prenum +1)
    },[])

    console.log("Parent Component Rendered")
  return (

    <div>
        <h2>Count : {count}</h2>
        <h2>Number : {number}</h2>
        <IncreDecreChild inc = {incre} dec = {decre} number = {num} />
      
    </div>
  )
}

export default IncreDecre
