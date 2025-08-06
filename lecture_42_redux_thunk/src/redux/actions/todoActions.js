export const TODO_ACTIONS = {
  ADD_TODO: 'TODOS/ADD_TODO',
  DROP_TODO: 'TODOS/DROP_TODO'
}

export const addTodo = (todo) => {
  return {
    type: TODO_ACTIONS.ADD_TODO,
    payload: todo
  }
}

export const dropTodo = (todo) => {
  return {
    type: TODO_ACTIONS.DROP_TODO,
    payload: todo
  }
}