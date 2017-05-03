import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import routes from './routes';
import App from './components/App.js';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';


render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('app'));
