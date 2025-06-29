import TodoItem from "./TodoItem";

export default function TodoList( { todoHeader = "Default todos header", todos, dropTodo } ) {

  return  (
    <div className="todoListContainer">
      <h3>{todoHeader}</h3>
      {
        todos.map( todo => <TodoItem key={todo.id} todo={todo} dropTodo={dropTodo} /> )
      }
    </div>
  )
}