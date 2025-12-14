

import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtodo, deletetodo } from './ToDoSlicer';

const ToDoUIFile = () => {

    const [todostate, settodostate] = useState("");

    const gettodoItem = useSelector(state=>state.todoReducer.todoitem);
    const dispatch = useDispatch();

    const handleform = (e) =>{
        e.preventDefault();
        if(todostate === ""){
            return null;
        }
        dispatch(addtodo(todostate));
        settodostate("");
    }
  return (
    <div>
        <h2>To-DO List Example New</h2>
        <form onSubmit={handleform}>
            <input type='text' className='border-2 border-solid border-black' 
            value={todostate} onChange={(e) => settodostate(e.target.value)}/>
            <button type='submit'> Add Item </button>

            <ul>

                {
                    gettodoItem.map((item)=>{
                        return(
                            <li key={item.id}>
                                {item.text}
                                <button onClick={()=>dispatch(deletetodo(item.id))}>Delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        </form>
      
    </div>
  )
}

export default ToDoUIFile
