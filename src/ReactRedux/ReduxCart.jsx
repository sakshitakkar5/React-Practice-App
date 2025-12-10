

import React from 'react'
import { addToCart, removefromCart, resetCart } from '../store';
import { useSelector, useDispatch} from 'react-redux';

const ReduxCart = () => {
        const cart = useSelector((state) => state.count);
        const dispatch1 = useDispatch();

  return (
    <div>
        <h2>Count : {cart}</h2>
        <button onClick={()=>dispatch1({type:addToCart})}>Add to Cart</button>
         <button onClick={()=>dispatch1({type:removefromCart})}>Remove from Cart</button>
          <button onClick={()=>dispatch1({type:resetCart})}>Reset Cart</button>
      
    </div>
  )
}

export default ReduxCart
