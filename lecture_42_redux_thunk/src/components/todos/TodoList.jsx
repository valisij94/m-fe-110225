import { useDispatch, useSelector } from "react-redux";
import { dropTodo, fetchTodos } from "../../redux/slices/todosSlice";
import { useEffect } from "react";

export default function TodoList( { todoHeader = "Default todos header" } ) {

  useEffect( () => {
    dispatch(fetchTodos( {foo: 'bar', boo: 'baz'} ));
  }, []);

  const todos = useSelector( state => state.todos );

  const dispatch = useDispatch();

  const dropTodoHandler = (id) => {
    dispatch( dropTodo(id) );
  }

  return  (
    <div className="todoListContainer">
      <h3>{todoHeader}</h3>
      <h4>Now we have {todos.todos.length} todos!</h4>
      {
        todos.todos.map( todo => <p onClick={ () => dropTodoHandler(todo.id) } key={todo.id}>{todo.todo}</p> )
      }
    </div>
  )
}