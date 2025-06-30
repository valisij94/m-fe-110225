export default function TodoItem( {todo, dropTodo} ) {

  return (
    <div>
      <h2>{todo.todo}</h2>
      {todo.description && <p>{todo.description}</p>}
      <button onClick={ () => dropTodo(todo.id) }>Remove todo</button>
      <input type="checkbox" checked={todo.completed}/>
    </div>
  );
}