import { SET_BLUE, SET_GREEN, SET_RED } from "../actions/colorActions";

const initialState = {
  red: 0,
  green: 0,
  blue: 0
};

export const colorReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_RED: {
      return {
        ...state,
        red: action.payload
      }
    }
    case SET_GREEN: {
      return {
        ...state,
        green: action.payload
      }
    }
    case SET_BLUE: {
      return {
        ...state,
        blue: action.payload
      }
    }
    default: return state;
  }
}