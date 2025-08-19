import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartProducts: {},
    totalPrice: 0,
    totalCount: 0
  },
  reducers: {
    addProduct: (state, action) => {
      // action.payload = { id: 1, name: 'Apple', price: 10 }
      if (state.cartProducts[action.payload.id]) {
        state.cartProducts[action.payload.id].count += 1;
      } else {
        state.cartProducts[action.payload.id] = {
          name: action.payload.name,
          price: action.payload.price,
          count: 1
        };
      }
      state.totalPrice += action.payload.price;
      state.totalCount += 1;
    }
  },
});

export default cartSlice.reducer


// {
//   cartProducts: {
//     1: { name: 'Apple', price: 10, count: 1 },
//     3: { name: 'Banana', price: 5, count: 10 }
//   },
//   totalPrice: 60,
//   totalCount: 11
// }
