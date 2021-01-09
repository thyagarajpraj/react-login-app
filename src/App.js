import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import Navigation from './components/Nav/Navigation';
import Login from './containers/Login';

const App = props=> { 
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
      </main>
    </React.Fragment>
  );
};

export default App;
