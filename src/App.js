import React from "react";
import Weather from './components/Weather'
import Home from './components/Home'
import Stations from './components/Stations'
import MadeBy from './components/MadeBy'
import './reset.css';
import './main.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/weather" component={Weather} />
      <Route path="/stations" component={Stations} />
      <Route path="/madeby" component={MadeBy} />
    </div>
  </Router>
);

export default App;
