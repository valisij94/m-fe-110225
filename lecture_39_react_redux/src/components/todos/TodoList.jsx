import { useEffect } from 'react';
import TodoItem from "./TodoItem";
import { useRef } from 'react';

export default function TodoList( { todoHeader = "Default todos header", todos, dropTodo } ) {

  useEffect( () => {
    console.log('TodoHeader prop is changed!');
  }, [ todoHeader ] );

  useEffect( () => {
    return () => {
      console.log('TodoList is unmounted!');
    }
  }, []);

  useEffect( () => {
    if (todos) {
      console.log('TodoList size: ', containerRef.current.offsetWidth, containerRef.current.offsetHeight)
    }
  }, [todos]);

  const containerRef = useRef(null);

  return  (
    <div className="todoListContainer" ref={containerRef}>
      <h3>{todoHeader}</h3>
      {
        todos.map( todo => <TodoItem key={todo.id} todo={todo} dropTodo={dropTodo} /> )
      }
    </div>
  )
}