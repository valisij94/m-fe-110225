import { COUNTER_ACTIONS } from "../actions/counterActions.js";

// начальное состояние
const initialState = 0;

export const counterReducer = ( state = initialState, action ) => {

  switch (action.type) {
    case COUNTER_ACTIONS.increment: {
      return state + 1;
    }
    case COUNTER_ACTIONS.decrement: {
      return state - 1;
    }
    default: return state;
  }
}