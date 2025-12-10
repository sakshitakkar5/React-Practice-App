

import React, { useMemo, useState } from 'react'

const UseMemoExample = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const counter1 = () =>{
        
        setCounterOne(c => c+1)
    }

    const counter2 = () =>{
        setCounterTwo(c => c+1)
    }

    const isEven = useMemo(() => {
        let i = 0;
        while(i<1000000000)
        {
            i++;
        }
        return counterOne%2 == 0
    },[counterOne])

  return (
    <div>

        <button onClick={counter1}>Counter1: {counterOne}</button>
        <span>{isEven ? "Even":"Odd"}</span>
        <button onClick={counter2}>Counter2: {counterTwo}</button>

    </div>
  )
}

export default UseMemoExample
