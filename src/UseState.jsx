

// import React, { useEffect, useState } from 'react'

// const UseState = () => {

//     const [count, setCount] = useState(0);

   
//     const IncrementFunc = () =>{
//         setCount((pState) =>pState+1)
//     }

//     const DecrementFunc = () =>{

//          setCount((pState) =>pState-1)

//     }
//   return (
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={IncrementFunc}>Increment</button>
//         <button onClick={DecrementFunc}>Decrement</button>
      
//     </div>
//   )
// }

// export default UseState


import React, { useState } from 'react'

const UseState = () => {

  const [count, setCount] = useState(0);
  const incre = () =>{
      setCount((pre) => {
        return pre+1;
      })
  }

  const decre = () =>{
    if (count>0){
    setCount(pre => pre-1 );}

  }
  return (
    <div>

      <h1>Count : {count}</h1>
      <button onClick={incre}>Increment</button>
      <button onClick={decre}>Decrement</button>


      
    </div>
  )
}

export default UseState
