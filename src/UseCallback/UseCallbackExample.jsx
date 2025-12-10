

import React, { useCallback, useState } from 'react'
import Child from './Child';

const UseCallbackExample = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const incre = useCallback(() =>
        {
        setCount(count => count+1)
    },[])

    const decre = useCallback(() =>{
        setCount(count =>count-1)

    },[])

    const num = useCallback(() =>{
        setNumber(nums =>nums+1)
    },[])

    console.log("Parent Component is rendered")
  return (
    <div>
      <h2>Counter:{count} </h2>
      <h2>Number: {number} </h2>
      <Child increment = {incre} decrement = {decre} number1 = {num}/>
    </div>
  )
}

export default UseCallbackExample
