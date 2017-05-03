import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, IndexRoute} from 'react-router-dom';
import routes from './routes';

import App from './components/App.js';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';


render(
    <BrowserRouter>
      <IndexRoute path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </BrowserRouter>,
    document.getElementById('app'));
