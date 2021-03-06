import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom'

import App from './App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <HashRouter>
      <App />
    </HashRouter>
  </BrowserRouter>,
  document.getElementById('root')
);

