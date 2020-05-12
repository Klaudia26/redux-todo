import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const todoReducer = (state = [], action) => {
  console.log(state);
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat(action.payload);
    case 'REMOVE__TODO':
      return state.filter((todo) => todo.id !== action.payload);
    case 'CHECKBOX__TODO':
      return state.map((todo) => {
        if (todo.id === action.payload) {
          todo.checked = !todo.checked;
          return todo;
        }
        return todo;
      });
    default:
      return state;
  }
};

const reducer = combineReducers({
  todo: todoReducer,
});

const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
