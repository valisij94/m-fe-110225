import './App.css'
import TodoItem from './components/TodoItem/TodoItem';
import { todoList } from './data/todos'; // путь к массиву
import TodoList from './components/TodoList/TodoList';
import { useState } from "react";

import AddTodo from './components/addTodo/AddTodo';

export default function App() {
  // состояние: список задач
  const [todos, setTodos] = useState(todoList);

  // функция для добавления новой задачи из компонента AddTodo
  const addTodoComponent = (title) => {
    const newTodo = {
      id: Date.now(),
      todo: title,
      completed: false
    };
    setTodos([...todos, newTodo]);
  }
  // состояние: текст в инпуте
  const [newTodoInput, setNewTodoInput] = useState('');
  // удаление задачи по id
  const removeTodo = (idToRemove) => {
    setTodos(oldTodos => oldTodos.filter(todo => todo.id !== idToRemove));
  };
  // переключение флажка completed
  const toggleCompleted = (idToToggle) => {
    setTodos(todos.map(todo =>
      todo.id === idToToggle
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };
  // добавление новой задачи
  // const addTodo = () => {
  //   if (newTodoInput === "") return;
  //   const newTodo = {
  //     id: todos.length + 1,
  //     todo: newTodoInput,
  //     completed: false,
  //   };
  //   setTodos([...todos, newTodo]);
  //   setNewTodoInput('');
  // };

  // более надёжный способ с помощью добавления id (id: Date.now()), чем length + 1
  const addTodo = () => {
    if (newTodoInput === "") return;
    const newTodo = {
      id: Date.now(),
      todo: newTodoInput,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setNewTodoInput('');
  };

  return (
    <>
      <h1>My ToDo List:</h1>

      {/* компонент AddTodo поднимает текст наверх */}
      <AddTodo onAdd={addTodoComponent} />

      {/* Форма добавления */}
      <div className="add-todo-form">
        <input
          type="text"
          value={newTodoInput}
          onChange={(event) => setNewTodoInput(event.target.value)}
          placeholder="New Todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      {/* Список задач */}
      <TodoList
        todos={todos}
        onRemove={removeTodo}
        onToggle={toggleCompleted}
      />
    </>
  )
}
