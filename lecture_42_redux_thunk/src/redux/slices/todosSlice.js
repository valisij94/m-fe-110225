import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('https://dummyjson.com/todos');
  const todos = await response.json();
  return todos.todos;
})

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    filters: null,
    status: 'idle',
    error: ''
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    dropTodo: (state, action) => {
      state.todos = state.todos.filter(el => el.id !== action.payload)
    },
    applyFilters: () => {},
    clearFilters: () => {},
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload
        state.status = 'idle'
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.error = action.payload
        state.status = 'idle'
      })
  }
});

// Action creators are generated for each case reducer function
export const { addTodo, dropTodo } = todosSlice.actions

export default todosSlice.reducer