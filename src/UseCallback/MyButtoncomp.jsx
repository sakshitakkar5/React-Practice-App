

import React from 'react'

const MyButtoncomp = (props) => {
    console.log("Child component Rendered")
  return (
    <div>
        <button onClick={props.increment}>Increment</button>
      
    </div>
  )
}

export default React.memo(MyButtoncomp);
