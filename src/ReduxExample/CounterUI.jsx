
import React, { useState } from 'react'
import { CounterSlice } from './CounterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset, incbyAmount } from './CounterSlice';

const CounterUI = () => {
    const [newValue, setnewValue] = useState(0);
    const countValue = useSelector(state=>state.counter.count);
    const dispatch = useDispatch();
  return (
    <div>
        <h2>Count:{countValue}</h2>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
      <input type='number' value={newValue} onChange={(e)=>{setnewValue(e.target.value)}} />
       <button onClick={()=>dispatch(incbyAmount(newValue))}>Increment by Amount</button>
    </div>
  )
}

export default CounterUI
