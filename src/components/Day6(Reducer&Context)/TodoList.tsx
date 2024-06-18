import { useState } from "react";
import { useTodoDispatch, useTodos } from "./TodoContext";
import { ITodo } from "../../interfaces/ITodo";

export function TodoList() {
    const todos = useTodos();
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <Task todo={todo} />
                </li>
            ))}
        </ul>
    );
}

interface props {
    todo: ITodo;
}

function Task({ todo }: props) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useTodoDispatch();

    const handleTextChange = (text: string) => {
        dispatch({
            type: 'changed',
            todo: {
                ...todo,
                text,
            },
        });
    };

    const handleToggleDone = (done: boolean) => {
        dispatch({
            type: 'changed',
            todo: {
                ...todo,
                done,
            },
        });
    };

    const handleDelete = () => {
        dispatch({
            type: 'deleted',
            id: todo.id,
        });
    };

    return (
        <label>
            <input
                type="checkbox"
                checked={todo.done}
                onChange={e => handleToggleDone(e.target.checked)}
            />
            {isEditing ? (
                <>
                    <input
                        value={todo.text}
                        onChange={e => handleTextChange(e.target.value)}
                    />
                    <button onClick={() => setIsEditing(false)}>
                        Save
                    </button>
                </>
            ) : (
                <>
                    {todo.text}
                    <button onClick={() => setIsEditing(true)}>
                        Edit
                    </button>
                </>
            )}
            <button onClick={handleDelete}>
                Delete
            </button>
        </label>
    );
}
