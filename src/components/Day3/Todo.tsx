import React, { useState } from 'react';
import './Todo.css';

let nextId: number = 0;

interface ITodo {
  id: number;
  task: string;
}

export default function Todo() {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleAddTodo = () => {
    if (todo.trim() !== '') {
      setTodos([
        ...todos,
        { id: nextId++, task: todo }
      ]);
      setTodo('');
    }
  };

  const handleUpdateTodo = () => {
    if (todo.trim() !== '' && editingId !== null) {
      setTodos(
        todos.map(item =>
          item.id === editingId ? { ...item, task: todo } : item
        )
      );
      setTodo('');
      setEditingId(null);
    }
  };

  const handleEditTodo = (id: number, task: string) => {
    setEditingId(id);
    setTodo(task);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(
      todos.filter(item =>
        item.id !== id
      )
    );
  };

  const handleSubmit = () => {
    if (editingId === null) {
      handleAddTodo();
    } else {
      handleUpdateTodo();
    }
  };

  return (
    <div className="todo-container">
      <h1>Todo List :</h1>
      <input
        className="todo-input"
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <button className="todo-button" onClick={handleSubmit}>
        {editingId === null ? 'Add' : 'Update'}
      </button>
      <ul>
        {todos.map(item => (
          <li key={item.id}>
            {item.task}
            <div>
              <button onClick={() => handleEditTodo(item.id, item.task)}>Edit</button>
              <button onClick={() => handleDeleteTodo(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
