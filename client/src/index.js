import React from 'react';
import ReactDOM from 'react-dom';
import './scss/resets.scss';
import './scss/theme.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
