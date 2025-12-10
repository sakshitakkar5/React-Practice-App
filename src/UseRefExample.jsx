
// import React , {useEffect, useRef} from 'react'

// const UseRefExample = () => {
//     const inputRef = useRef(0);
    
//     useEffect(() => {
//         inputRef.current.focus();
        
//     }, []);
//   return (
//     <div>

//         <input type='text' ref={inputRef} className='m-4 focus:outline-0 border-2 border-amber-400 border-solid'/>
      
//     </div>
//   )
// }

// export default UseRefExample


import React , {useState, useRef, useEffect} from 'react'

const UseRefExample = () => {
    const [name, setname] = useState("");
    const RefObject = useRef("")


    useEffect(() => {
        RefObject.current = name;
    }, [name]);

  return (
    <div>
        <input type="text" value={name} onChange={(e) => setname(e.target.value)}/>
        <h2>Current name: {name}</h2>
        <h2>Previous Name: {RefObject.current}</h2>
      
    </div>
  )
}

export default UseRefExample

