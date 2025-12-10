
import { configureStore } from "@reduxjs/toolkit";
import cReducer from './ReduxExample/CounterSlice'

export const store1 = configureStore({
    reducer: {
        counter:cReducer
    }
})