import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./components/Home";
import About from './components/About'
import News from './components/News'
import Footer from "./layouts/Footer";
import Movies from "./components/movies/Movies";

class App extends Component {
  constructor() {
    super();

    this.state = {
      brand: "REACT BOOTSTRAP",
      footer: "REACT BOOTSTRAP BY",
      name: "FULL STACK SOLUTION"
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
            <Route path='/movies' component={Movies} />
          </Switch>
          <Footer footer={this.state.footer} name={this.state.name} />
        </HashRouter>
      </div>
    );
  }
}

export default App;
