import { createStore, combineReducers } from 'redux';
import { counterReducer } from './reducers/counterReducer';

export const store = createStore(
  combineReducers({
    counter: counterReducer
  })
);