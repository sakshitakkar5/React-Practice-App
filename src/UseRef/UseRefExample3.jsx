
import React , {useState, useRef} from 'react'

const UseRefExample3 = () => {

    const [count, setcount] = useState(0);
    const refValue = useRef(0)

    const changeCount = () =>{
        setcount(pre => pre+1);
    }

    const changeRefCount = () => {
        refValue.current = refValue.current+1;
        console.log(refValue.current);
    }


  return (
    <div>

        <h2>Count : {count}</h2>
        <button onClick={changeCount}>Increment</button>

        <h2>Ref Counter: {refValue.current}</h2>
        <button onClick={changeRefCount}>Ref Counter</button>
      
    </div>
  )
}

export default UseRefExample3

// import { useState, useRef } from "react";

// function App() {
//   const [stateCount, setStateCount] = useState(0); // updates UI
//   const refCount = useRef(0);                     // does NOT update UI

//   const handleStateClick = () => {
//     setStateCount(stateCount + 1); // re-renders UI
//   };

//   const handleRefClick = () => {
//     refCount.current = refCount.current + 1; // internal only
//     console.log("ref value:", refCount.current);
//   };

//   return (
//     <>
//       <h2>State Count (updates UI): {stateCount}</h2>
//       <button onClick={handleStateClick}>Increase State</button>

//       <hr />

//       <h2>Ref Count (does not update UI): {refCount.current}</h2>
//       <button onClick={handleRefClick}>Increase Ref</button>
//     </>
//   );
// }

// export default App;

