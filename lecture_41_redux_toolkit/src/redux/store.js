import { createStore, combineReducers } from 'redux';
import { counterReducer } from './reducers/counterReducer';
import { todoReducer } from './reducers/todoReducer';
import { colorReducer } from './reducers/colorReducer';

export const store = createStore(
  combineReducers({
    counter: counterReducer,
    todos:   todoReducer,
    color:   colorReducer
  })
);