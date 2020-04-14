import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./components/Home";
import About from './components/About'
import News from './components/News'
import Footer from "./layouts/Footer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      brand: "REACT BOOTSTRAP",
      footer: "REACT BOOTSTRAP BY FULL STACK SOLUTION",
    };
  }

  render() {
    return (
      <div className="App">
        <HashRouter basename="/">
          <Navbar brand={this.state.brand} />
          <Switch>
            <Route exact path ='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/news' component={News} />
          </Switch>
          <Footer footer={this.state.footer} />
        </HashRouter>
      </div>
    );
  }
}

export default App;
