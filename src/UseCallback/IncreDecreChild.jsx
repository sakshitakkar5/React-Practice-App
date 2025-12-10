
import React from 'react'
import IncreDecre from './IncreDecre'

const IncreDecreChild = (props) => {
    console.log("Child component rendered")
  return (
    <div>
        <button onClick={props.inc}>Increment</button>
      <button onClick={props.dec}>Decrement</button>
      <button onClick={props.number}>Number</button>
      
    </div>
  )
}

export default React.memo(IncreDecreChild);
