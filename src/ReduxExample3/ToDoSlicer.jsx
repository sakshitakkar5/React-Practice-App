import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todoitem : JSON.parse(localStorage.getItem("todos")) || [{id:1, text:"Item1"}]
}

export const TodoSlicer = createSlice({
    name: "todolist",
    initialState,
    reducers:{
        addtodo:(state,action) =>{
            let newtodoitem = {
                id:nanoid(),
                text:action.payload
            }
            
            state.todoitem.push(newtodoitem);
            localStorage.setItem("todos", JSON.stringify(state.todoitem))
        },
        deletetodo: (state,action) =>{
            state.todoitem =state.todoitem.filter(u=>u.id!=action.payload);
            localStorage.setItem("todos", JSON.stringify(state.todoitem))
        }
    }

})

export const {addtodo, deletetodo} = TodoSlicer.actions;
export default TodoSlicer.reducer;