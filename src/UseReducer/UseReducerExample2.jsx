

import React, { useReducer } from 'react'

const UseReducerExample2 = () => {
    const initialCountState = {count:0}
    const initialToggleState = {isOn : 'ON'}
    const reducerCount = (state1, action1) =>{
        switch(action1.type){
            case 'increment':
                return {count:state1.count+1};
            case 'decrement':
                return {count:state1.count-1};
            case 'reset':
                return initialCountState;
            default:
                return state1;
        }
    }

    const reducerToggle = (state1,action1) =>{

        switch(action1.type){
            case 'toggle':
                return {isOn : state1.isOn=='ON' ? 'OFF' : 'ON'}
            case 'reset':
                return initialToggleState;
            default:
                return state1;
        }

    }


    const [countState, dispatchCount] = useReducer(reducerCount, initialCountState)
    const [toggleState, dispatchtoggle] = useReducer(reducerToggle, initialToggleState)
  return (
    <div>
        <h2>Count : {countState.count}</h2>
        <button onClick={()=>dispatchCount({type:'increment'})}>Increment No.</button>
        <button onClick={()=>dispatchCount({type:'decrement'})}>Decrement No.</button>
        <button onClick={()=>dispatchCount({type:'reset'})}>Reset No.</button>

        <h2>Toggle : {toggleState.isOn}</h2>
        <button onClick={()=>dispatchtoggle({type:'toggle'})}>Toggle Button</button>
        <button onClick={()=>{dispatchtoggle({type:'reset'})}}>Reset Toggle</button>
      
    </div>
  )
}

export default UseReducerExample2
