import { TODO_ACTIONS } from "../actions/todoActions.js";

// начальное состояние - пустой массив, то есть никаких дел нет
const initialState = {
  todoList: [],
  todosCount: 0
}

export const todoReducer = ( state = initialState, action ) => {

  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO: {
      return {
        // ...state,
        todoList: [...state.todoList, action.payload],
        todosCount: state.todosCount + 1
      }
    }
    case TODO_ACTIONS.DROP_TODO: {
      const newTodos = state.todoList.filter( oldTodo => oldTodo !== action.payload )
      return {
        todoList: newTodos,
        todosCount: newTodos.length
      }
    }
    default: return state;
  }
}