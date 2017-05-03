import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App.js';
import About from './components/About.js';
import Navbar from './components/Navbar.js';

export default (
  <Route path="/" component={App}>
    <Route path="/about" component={About} />
  </Route>
)
