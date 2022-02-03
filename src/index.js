import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import App from './App';
import { addElement, removeElement, changeArr } from './redux/constants';

const defaultState = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
//action = {type, payload}
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case addElement():
      localStorage.setItem('tasks', JSON.stringify([...state, action.payload]))
      return [...state, action.payload]

    case removeElement():
      localStorage.setItem('tasks', JSON.stringify(state.filter(elem => elem.id !== action.payload)))
      return state.filter(elem => elem.id !== action.payload)

    case changeArr():
      localStorage.setItem('tasks', JSON.stringify(action.payload))
      return action.payload

    default:
      return state;
  }
}
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);