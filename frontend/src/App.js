import React from 'react';
import './App.css';
import Home from './Home.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ClientList from './ClientList.js';
import ClientEdit from "./ClientEdit.js";

const App = () => {

  return (
    <Router>
        <Route path='/' exact={true} component={Home} />
        <Route path='/clients' exact={true} component={ClientList} />
        <Route path='/clients/:id' component={ClientEdit} />
    </Router>
  );
};

export default App;