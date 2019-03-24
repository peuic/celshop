import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './pages/home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={Home} />
    </div>
  </Router>
);

export default App;
