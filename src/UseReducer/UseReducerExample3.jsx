
import React, { useReducer } from 'react'

const UseReducerExample3 = () => {

    const initialCartState = {count : 0};
    const initialdiscountState = {discountApplied: false}
    const initialtoggleState = {toggleOn : 'OFF'}

    const reducerCart = (state,action) =>{
        switch(action.type1){
            case 'addcart':
                return {count:state.count+action.value};
            case 'removecart':
                return {count:state.count<=0?0 : state.count-1};
            case 'reset':
                return initialCartState;
            default:
                return state;
        }

    }

    const reducerDiscount = (state, action) =>{
        switch(action.type){
            case 'discountapplied':
                return {discountApplied : true};
            case 'discountremoved':
                return {discountApplied : false};
            default:
                return state;
        }
    }

    const reducerToggle = (state, action) => {
        switch (action.type){
            case "Toggle":
                return {toggleOn : state.toggleOn == 'OFF' ? 'ON' : 'OFF' };
            case "Reset":
                return initialtoggleState;
            default:
                return state;
        }

    }
    
    const [cartState, dispatchCartState] = useReducer(reducerCart, initialCartState);
    const [discountState , dispatchdiscountState] = useReducer(reducerDiscount, initialdiscountState);
    const [toggleState, dispatchtoggleState] = useReducer(reducerToggle, initialtoggleState);
  
  
    return (
    <div>
        <h2>Cart : {cartState.count}</h2>
        <button onClick={() => dispatchCartState({type1:'addcart', value:5})}>Add to Cart</button>
        <button onClick={()=>dispatchCartState({type1:'removecart'})}>Remove from Cart</button>
        <button onClick={()=>dispatchCartState({type1:'reset'})}>Reset Cart</button>
    
        <h2>Discount : {discountState.discountApplied ? "Applied" : "Removed"}</h2>
        <button onClick={() => dispatchdiscountState({type:'discountapplied'})}>Apply Discount</button>
        <button onClick={() => dispatchdiscountState({type:'discountremoved'})}>Remove Discount</button>

        <h2>Toggle: {toggleState.toggleOn }</h2>
        <button onClick={() => dispatchtoggleState({type:'Toggle'})}>Toggle</button>
      

    
    </div>
  )
}

export default UseReducerExample3



// import React, { useReducer } from "react";

// // Reducer 1 → For Cart Count
// const initialCartState = { count: 0 };

// function cartReducer(state, action) {
//   switch (action.type) {
//     case "add":
//       return { count: state.count + 1 };
//     case "remove":
//       return { count: state.count > 0 ? state.count - 1 : 0 };
//     case "reset":
//       return { count: 0 };
//     default:
//       return state;
//   }
// }

// // Reducer 2 → For Discount Management
// const initialDiscountState = { discountApplied: false };

// function discountReducer(state, action) {
//   switch (action.type) {
//     case "APPLY_DISCOUNT":
//       return { discountApplied: true };
//     case "REMOVE_DISCOUNT":
//       return { discountApplied: false };
//     default:
//       return state;
//   }
// }


// const UseReducerExample3 = () => {
//   // First reducer: handles cart count
//   const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

//   // Second reducer: handles discount
//   const [discountState, discountDispatch] = useReducer(discountReducer, initialDiscountState);

//   return (
//     <div style={{ textAlign: "center", marginTop: "40px" }}>
//       <h2>🛒 Shopping Cart</h2>
//       <h3>Items in Cart: {cartState.count}</h3>

//       <button onClick={() => cartDispatch({ type: "add" })}>Add Item</button>
//       <button onClick={() => cartDispatch({ type: "remove" })}>Remove Item</button>
//       <button onClick={() => cartDispatch({ type: "reset" })}>Reset Cart</button>

//       <hr />

//       <h3>Discount Status: {discountState.discountApplied ? "✅ Applied" : "❌ Not Applied"}</h3>

//       <button onClick={() => discountDispatch({ type: "APPLY_DISCOUNT" })}>
//         Apply Discount
//       </button>
//       <button onClick={() => discountDispatch({ type: "REMOVE_DISCOUNT" })}>
//         Remove Discount
//       </button>
//     </div>
//   );
// }

// export default UseReducerExample3

