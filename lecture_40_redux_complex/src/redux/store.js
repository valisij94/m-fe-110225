import { createStore, combineReducers } from 'redux';
import { counterReducer } from './reducers/counterReducer';
import { todoReducer } from './reducers/todoReducer';

export const store = createStore(
  combineReducers({
    counter: counterReducer,
    todos:   todoReducer
  })
);