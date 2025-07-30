import { useDispatch, useSelector } from "react-redux";
import { dropTodo } from "../../redux/actions/todoActions";

export default function TodoList( { todoHeader = "Default todos header" } ) {

  const todos = useSelector( state => state.todos );

  const dispatch = useDispatch();

  const dropTodoHandler = (todo) => {
    dispatch( dropTodo(todo) );
  }

  return  (
    <div className="todoListContainer">
      <h3>{todoHeader}</h3>
      <h4>Now we have {todos.todosCount} todos!</h4>
      {
        todos.todoList.map( todo => <p onClick={ () => dropTodoHandler(todo) } key={todo}>{todo}</p> )
      }
    </div>
  )
}