import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App.jsx';
import makeAction from './reducers/index';

const store = createStore(makeAction);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
