import { useContext, createContext, useReducer, ReactNode, Dispatch } from "react";
import { ITodo } from "../../interfaces/ITodo";
import { initialITodos } from "../../interfaces/ITodo";

interface props {
    children: ReactNode;
}

type Action = 
    | { type: 'added'; id: number; text: string }
    | { type: 'changed'; todo: ITodo }
    | { type: 'deleted'; id: number };


function todoReducer(todos: ITodo[], action: Action){
    switch (action.type) {
        case 'added': {
            return [...todos, {
                id: action.id,
                text: action.text,
                done: false
            }];
        }
        case 'changed': {
            return todos.map(t => {
                if (t.id === action.todo.id) {
                    return action.todo;
                } else {
                    return t;
                }
            });
        }
        case 'deleted': {
            return todos.filter(t => t.id !== action.id);
        }
        default: {
            throw new Error('Unknown action: ' + action);
        }
    }
}

const TodoContext = createContext<ITodo[] | undefined>(undefined);
const TodoDispatchContext = createContext<Dispatch<Action> | undefined>(undefined);


export function TodoProvider({ children }: props) {
    const [todos, dispatch] = useReducer(todoReducer, initialITodos);

    return (
        <TodoContext.Provider value={todos}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoContext.Provider>
    );
}


export function useTodos(): ITodo[]{
    const context = useContext(TodoContext);
    if (context === undefined) {
        throw new Error('useITodos must be used within a ITodoProvider');
    }
    return context;
}

export function useTodoDispatch(): Dispatch<Action> {
    const context = useContext(TodoDispatchContext);
    if (context === undefined) {
        throw new Error('useITodoDispatch must be used within a ITodoProvider');
    }
    return context;
}
