import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todoitem:[{id:1, text:"item1"}]
}

export const TodoSlicer = createSlice({

    name: "todo",
    initialState,
    reducers : {
        addTodo: (state,action)=>{
            let newtodo= {
                id:nanoid(),
                text:action.payload
            } 
            state.todoitem.push(newtodo)
        },
        removeTodo : (state,action) =>{
            state.todoitem = state.todoitem.filter((item) => item.id!=action.payload)

        }
    }
})

export const {addTodo, removeTodo} = TodoSlicer.actions;
export default TodoSlicer.reducer; 