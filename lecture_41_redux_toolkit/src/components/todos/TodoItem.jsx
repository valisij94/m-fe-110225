import Button from "../button/Button";

export default function TodoItem( {todo, dropTodo} ) {

  return (
    <div>
      <h2>{todo.todo}</h2>
      {todo.description && <p>{todo.description}</p>}
      <Button clickHandler={ () => dropTodo(todo.id) } btnText="Drop todo"/>
      <input type="checkbox" checked={todo.completed}/>
    </div>
  );
}