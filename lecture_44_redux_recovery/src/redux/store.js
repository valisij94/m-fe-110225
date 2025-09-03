import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import cartReducer from './slices/cartSlice';
import filtersReducer from './slices/filtersSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
    cart:     cartReducer,
    filters:  filtersReducer
  },
})