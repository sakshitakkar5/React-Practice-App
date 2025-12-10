

// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {

//     const [count, setCount] = useState(0)
//     const [count1, setCount1] = useState("red")
    
//         useEffect(()=>{
//            console.log("component has been mounted",  count);
//            return (()=>{
//             console.log("Comp has been unmounted" , count);
//            })
//         },[count])
//         const IncrementFunc = () =>{
//             setCount((pState) =>pState+1)
//         }

//         const updateValue = () =>{
//             setCount1("Blue");
//         }
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//         <button onClick={IncrementFunc}>Increment</button>
//         <button onClick={updateValue}>Change Value</button>
//     </div>
//   )
// }

// export default UseEffect
import React, { useEffect, useState } from 'react'
const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("React");
  useEffect(
    () => {console.log("Component has been mounted" , count)
    return () =>{
      console.log("Component has been unmounted", count)
    }}
    ,
    [count]
    
  )

  const changeNum = () =>{
    setCount(pre => pre+1)
  }

  const changeVal= () =>{
      setValue("Ok");
    

  }

  return (
    <div>
      <h1>Count : {count}</h1>
      <h2>Value : {value}</h2>
      <button onClick={changeNum}>Increment</button>
      <button onClick = {changeVal}>Change Value</button>
      
    </div>
  )
}

export default UseEffect

