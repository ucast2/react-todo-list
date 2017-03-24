import React from 'react'; // new syntax (ES5) = var React = require('react');
import { render } from "react-dom";
import App from '../components/App';
import configureStore from '../redux/store';
import { Provider } from "react-redux";

let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'Initial todo for demo purposes'
  }]
}

// Create store w/ initialState
let store = configureStore(initialState);

// Provider: component that allows Users to
// connect certain components to the store
render(
  <Provider store={store}>
    <App />
  </Provider>,
  // DOM element we want to mount it to
  document.getElementById('app')
)
