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
      if (state.cartProducts[action.payload.id]) {
        state.cartProducts[action.payload.id].count += 1;
      } else {
        state.cartProducts[action.payload.id] = {
          name: action.payload.title,
          price: action.payload.price,
          count: 1
        };
      }
      state.totalPrice = Math.round((state.totalPrice + action.payload.price) * 100) / 100;
      state.totalCount += 1;
      console.log(JSON.parse(JSON.stringify(state)))
    },
    /**
     * Экшн для удаления товара. В payload ожидает идентификатор товара (чилос)
     */
    dropProduct: (state, action) => {
      if (state.cartProducts[action.payload]) {
        const price = state.cartProducts[action.payload].price;
        if (state.cartProducts[action.payload].count === 1) {
          delete state.cartProducts[action.payload];
        } else {
          state.cartProducts[action.payload].count -= 1;
        }
        state.totalPrice = Math.round((state.totalPrice - price) * 100) / 100;
        state.totalCount -= 1;
        console.log(JSON.parse(JSON.stringify(state)))
      }
    }
  },
});

export const { addProduct, dropProduct } = cartSlice.actions;

export default cartSlice.reducer


// {
//   cartProducts: {
//     1: { name: 'Apple', price: 10, count: 1 },
//     3: { name: 'Banana', price: 5, count: 10 }
//   },
//   totalPrice: 60,
//   totalCount: 11
// }
