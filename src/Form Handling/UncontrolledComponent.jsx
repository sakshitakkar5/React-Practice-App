
import React, { useRef } from 'react'

const UncontrolledComponent = () => {
    
    const Ref1 = useRef(null);
    const Ref2 = useRef(null);

    const handleSubmit = (e) =>{
        alert(`${Ref1.current.value} and ${Ref2.current.value}`)
        e.preventDefault();

        console.log(Ref1.current);
        console.log(Ref2.current);
    }

  return (
    <form onSubmit={handleSubmit}>
    <div >
      Username : <input type='text' ref={Ref1}/> <br />
      Password : <input type = "password" ref={Ref2}/> <br />
      <button type='submit'>Submit Form1</button>
    </div>
    </form>
  )
}

export default UncontrolledComponent
