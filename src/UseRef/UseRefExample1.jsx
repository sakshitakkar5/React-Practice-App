

import React , {useRef, useEffect} from 'react'

const UseRefExample1 = () => {

    const prevRef = useRef('');

    useEffect(() => {
        console.log('Focused');
        prevRef.current.focus();
    }, []);
  return (
    <div>
      <input type='text' ref={prevRef} className='m-3 outline-0 border-amber-400 border-solid border-2'/>
    </div>
  )
}

export default UseRefExample1
