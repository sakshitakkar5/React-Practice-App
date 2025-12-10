

import React, { useState } from "react";
import './tailwindstyle.css'

// const PasswordExampleUsestate = () => {
//   const [show, setShow] = useState(false);

//   return (
//     <div>
//       <input
//         type={show ? "text" : "password"}
//         placeholder="Enter Password"
//       />
//       <button onClick={() => setShow(prev => !prev)}>
//         {show ? "Hide" : "Show"} Password
//       </button>
//     </div>
//   );
// };





// const PasswordExampleUseState = () => {

//     const [value, setValue] = useState(false);

//     const changeValue = () =>{
//         setValue(prev => {return !prev})
//     }
//   return (
//     <div>

//         <input type={value? "text" : "password"} className="border-2 border-amber-300 border-solid"/>
//         <button onClick={changeValue}>{value ? "Hide" : "Show"} Password</button>
      
//     </div>
//   )
// }

// export default PasswordExampleUseState



const PasswordExampleUseState = () => {

  const [pass, setPass] = useState(false);

  const writePass = () =>{
    setPass(pre => !pre)
  }
  return (
    <div>
      <input type={pass ? "text" : "password"} />
      <button onClick={writePass}>{pass ? "Hide" :"Show"} Password</button>
    </div>
  )
}

export default PasswordExampleUseState


