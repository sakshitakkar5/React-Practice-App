
// import React, { useState } from 'react'

// const UseState1 = () => {

//     const [phone , setPhone] = useState(
//         {
//             brand: "samsung",
//             ram: "16 gb",
//             processor :"neo",
//             type:"smartphone"
//         }
//     )

//     const changeRam = () =>{
//         setPhone((preState) => {return ({...preState, ram:"28gb"})}
//     )}
//   return (
//     <div>

//             <h1>The brand of phone is {phone.brand}, ram is {phone.ram}, processor is {phone.processor}
//                 and type is {phone.type}
//             </h1>
//             <button onClick={changeRam}>Change RAM Value</button>

      
//     </div>
//   )
// }

// export default UseState1


// import React, { useState } from 'react'

// const UseState1 = () => {

//     const [led, setLed] = useState({
//         model : "Panasonic",
//         color:"Black",
//         size : "25inch"
//     })

//     const changeModel = () =>{
//         setLed((pre) => ({...pre, model:"Samsung"}))
//     }
//   return (
//     <div>
//         <h1>The model of led is {led.model} , color is {led.color} and size is {
//         led.size}</h1>
//         <button onClick={changeModel}>Change model</button>
      
//     </div>
//   )
// }

// export default UseState1

import React, { useState } from 'react'

const UseState1 = () => {

    const[arr, setArr] = useState(["apple" , "banana", "orange"])
    
    const addNew = () =>{
        setArr((pre)=>  [...pre, "avo"])}

  return (
    <div>
        <h1>Array values are: {arr.join(',')}</h1>
        <button onClick={addNew}>Add new</button>


      
    </div>
  )
}

export default UseState1


