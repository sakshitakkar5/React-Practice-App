


import React, { useEffect, useState, useRef } from 'react'

const UseRefExample2 = () => {

    const [value1, setValue1] = useState("");
    const preValue = useRef("");
    const renderValue = useRef(0);

    useEffect(() => {
        preValue.current = value1;
        renderValue.current = renderValue.current + 1;
    }, [value1]);
  return (
    <div>

        <input type='text' ref={preValue} value={value1} onChange = {(e) => setValue1(e.target.value)}/>
        <h2 >Current Value : {value1}</h2>
        <h2>Previous Value : {preValue.current}</h2>
        <h2>Render : {renderValue.current}</h2>
      
    </div>
  )
}

export default UseRefExample2
