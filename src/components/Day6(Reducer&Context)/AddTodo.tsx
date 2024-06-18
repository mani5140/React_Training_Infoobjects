import { useState } from "react";
import { useTodoDispatch } from "./TodoContext";

export function AddTodo() {
    const [input, setInput] = useState<string>('');
    const dispatch = useTodoDispatch();
    
    const nextId = 3;

    return (
        <>
           <h1>Todo List :)</h1>
            <input 
                type="text" 
                value={input} 
                placeholder="Enter Task" 
                onChange={e => setInput(e.target.value)} 
            />
            <button 
                onClick={() => {
                    dispatch({
                        type: 'added',
                        id: nextId,
                        text: input,
                    });
                    setInput('');
                }}
            >
                Add
            </button>
        </>
    );
}
