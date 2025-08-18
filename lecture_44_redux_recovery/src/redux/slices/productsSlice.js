import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://dummyjson.com/products');
  const products = await response.json();
  return products.products;
})

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'idle',
    error: ''
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload
        state.status = 'idle'
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload
        state.status = 'idle'
      })
  }
});

export default productsSlice.reducer