import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HackerNewsDrill from './components/HackerNewsDrill';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <HackerNewsDrill />
  </Provider>,
  document.getElementById('root')
);
