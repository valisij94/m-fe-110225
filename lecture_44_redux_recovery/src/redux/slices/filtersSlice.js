import { createSlice } from '@reduxjs/toolkit'

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    priceFrom: null,
    priceTo: null,
    discounted: false
  },
  reducers: {
    setPriceFrom: (state, action) => {
      if (!action.payload) {
        state.priceFrom = null;
      } else if (state.priceTo && action.payload <= state.priceTo || !state.priceTo) {
        state.priceFrom = action.payload
      }
    },
    setPriceTo: (state, action) => {
      if (!action.payload) {
        state.priceTo = null;
      } else if (state.priceFrom && action.payload >= state.priceFrom || !state.priceFrom) {
        state.priceTo = action.payload
      }
    },
    setDiscounted: (state, action) => {
      state.discounted = action.payload
    },
  },
});

export const { setPriceFrom, setPriceTo, setDiscounted } = filtersSlice.actions;

export default filtersSlice.reducer