

import React, {useState} from 'react'
import { addTodo, removeTodo } from './TodoSlicer';
import { useDispatch, useSelector } from 'react-redux';


const TodoUI = () => {
const [todoVal, settodoVal] = useState("");

const todoValues = useSelector(state=> state.todoreducer.todoitem);
const dispatch = useDispatch();

const handleadd = () =>{
dispatch(addTodo(todoVal))
settodoVal("");
}
  return (
    <div>
      <h2>Todo-Example</h2><br />
      <input type="text" value={todoVal} onChange={(e) => settodoVal(e.target.value)} className='border-2 border-black border-solid'/> 
      <button onClick={handleadd}>Add Todo Todo</button>

      <ul>
        {
            todoValues.map((item) =>{
                return(
                <li key = {item.id}>
                  
                   {item.text}
                    <button onClick={()=>dispatch(removeTodo(item.id))}>Delete</button>
                </li>)
            })
            
        }
      </ul>
    </div>
  )
}

export default TodoUI
