
import React from 'react'
const Child = React.memo((props) => {
    console.log("Child Component is rendered")
  return (
    <div>
    <button onClick={props.increment}>Increment</button>
    <button onClick={props.decrement}>Decrement</button>
    <button onClick={props.number1}>Number</button> 
    </div>
  )
})
export default Child;
