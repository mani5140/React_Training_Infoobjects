export interface ITodo {
    id: number;
    text: string;
    done: boolean;
}

export const initialITodos: ITodo[] = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
];