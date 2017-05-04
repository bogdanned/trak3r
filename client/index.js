import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import routes from './routes';
import App from './components/App.js';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


/* TODO: Review the concept of store in redux */
const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'));
