import React from 'react'; // new syntax (ES5) = var React = require('react');
import { render } from "react-dom";
import App from '../components/App';

render(
  // define the encompassing component,
  <App />,
  // DOM element we want to mount it to
  document.getElementById('app')
)
