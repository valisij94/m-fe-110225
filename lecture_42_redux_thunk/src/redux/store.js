import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import todosReducer from './slices/todosSlice';
import productsReducer from './slices/productsSlice';

export default configureStore({
  reducer: {
    counter:  counterReducer,
    todos:    todosReducer,
    products: productsReducer
  },
})