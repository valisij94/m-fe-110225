import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import cartReducer from './slices/cartSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
    cart:     cartReducer
  },
})