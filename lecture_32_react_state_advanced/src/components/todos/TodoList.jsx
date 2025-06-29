import TodoItem from "./TodoItem";

export default function TodoList( { todos, dropTodo } ) {

  return  (
    <div className="todoListContainer">
      {
        todos.map( todo => <TodoItem key={todo.id} todo={todo} dropTodo={dropTodo} /> )
      }
    </div>
  )
}