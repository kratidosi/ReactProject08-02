import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import About from "./components/About";
import Contact from "./components/Contact";
import AddEmployee from "./components/AddEmployee";
import ViewEmployee from "./components/ViewEmployee";

class App extends Component{
  constructor(){
    super();
   
  }


 render(){
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/addemployee" component={AddEmployee} />
          <Route exact path="/viewemployee" component={ViewEmployee} />
        </Switch>
         
      </Router>
    </>
  );
}
}

export default App;
