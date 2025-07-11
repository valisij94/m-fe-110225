export default function TodoItem( {todo, dropTodo} ) {

  const dropTodoHandler = () => {
    dropTodo(todo.id);
  }

  return (
    <div>
      <h2>{todo.todo}</h2>
      {todo.description && <p>{todo.description}</p>}
      <button onClick={ dropTodoHandler }>Remove todo</button>
      <input type="checkbox" checked={todo.completed}/>
    </div>
  );
}