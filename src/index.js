import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/app';
import ageCounter from './reducer/reducer';
import { createStore, applyMiddleware } from "redux";

const store = createStore(ageCounter, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
