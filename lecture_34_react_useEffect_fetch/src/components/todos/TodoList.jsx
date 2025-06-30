import { useEffect } from 'react';
import TodoItem from "./TodoItem";

export default function TodoList( { todoHeader = "Default todos header", todos, dropTodo } ) {

  useEffect( () => {
    console.log('TodoHeader prop is changed!');
  }, [ todoHeader ] );

  useEffect( () => {
    return () => {
      console.log('TodoList is unmounted!');
    }
  }, []);

  return  (
    <div className="todoListContainer">
      <h3>{todoHeader}</h3>
      {
        todos.map( todo => <TodoItem key={todo.id} todo={todo} dropTodo={dropTodo} /> )
      }
    </div>
  )
}