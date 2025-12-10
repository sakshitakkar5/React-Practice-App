import React, { useReducer } from 'react'

const UseReducerExample1 = () => {

    const initialCountState = 0;
    const reducerfn = (state,action) =>{
            switch(action){
                case 'increment':
                    return state+1;
                case 'decrement' :
                    return state-1;
                case 'reset':
                    return initialCountState;
                default:
                    return initialCountState;
            }
    }

    const [count, dispatch] = useReducer(reducerfn, initialCountState)
  return (
    <div>
        <h2>Count : {count}</h2>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={()=> dispatch('reset')}>Reset</button>
      
    </div>
  )
}

export default UseReducerExample1
