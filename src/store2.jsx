import { configureStore } from "@reduxjs/toolkit";
import newReducer from './ReduxExample2/TodoSlicer'


export const store2 = configureStore({
    reducer:{
        todoreducer : newReducer
    }
})