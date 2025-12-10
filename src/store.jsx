
import { configureStore } from "@reduxjs/toolkit";

const addToCart = 'addToCart';
const removefromCart = 'removefromCart';
const resetCart = 'resetCart';

const initialCart = {count:0}

const reducerCart = (state=initialCart,action) =>{
    switch(action.type){
        case addToCart:
            return {count:state.count+1}
        case removefromCart:
            return {count:state.count-1}
        case resetCart:
            return initialCart;
        default:
            return state;
    }
}

const store = configureStore({
    reducer:reducerCart
})
export{addToCart,removefromCart, resetCart};
export default store;