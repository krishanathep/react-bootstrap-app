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
      footer: "REACT BOOTSTRAP by Full Stack Solution Co.,Ltd.",
    };
  }

  render() {
    return (
      <div className="App">
        <HashRouter basename="/">
          <Navbar brand={this.state.brand} />
          <Switch>
          <div className="container">
            <Route exact path ='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/news' component={News} />
            <Footer footer={this.state.footer} />
          </div>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
