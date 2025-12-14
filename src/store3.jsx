import { configureStore } from "@reduxjs/toolkit";
import receiveReducer from './ReduxExample3/ToDoSlicer'


export const store3 = configureStore({
    reducer:{
        todoReducer : receiveReducer
    }
})