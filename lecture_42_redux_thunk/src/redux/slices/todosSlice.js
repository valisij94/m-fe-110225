// src/redux/slices/counterSlice.js
import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todoList: [],
    todosCount: 0
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      state.todosCount += 1;
    },
    dropTodo: (state, action) => {
      const newTodos = state.todoList.filter( (todo) => todo !== action.payload );
      state.todoList = newTodos;
      state.todosCount = newTodos.length;
    }
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, dropTodo } = todosSlice.actions

export default todosSlice.reducer