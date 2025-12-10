import { createSlice } from "@reduxjs/toolkit";


export const CounterSlice = createSlice({
    name:"co",
    initialState : {count:0},
    reducers: {
        increment:(state) => {state.count+=1},
        decrement:(state) => {state.count-=1},
        reset: (state) => {state.count=0},
        incbyAmount: (state,action) =>{
            state.count+=Number(action.payload)
        }
    }
})

export const {increment, decrement, reset, incbyAmount} = CounterSlice.actions;
export default CounterSlice.reducer;
