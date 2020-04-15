import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./components/Home";
import About from './components/About'
import News from './components/News'
import Footer from "./layouts/Footer";
import Movies from "./components/movies/Movies";
import MovieShow from "./components/movies/MovieShow";
import Users from "./components/users/Users";

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
            <Route path='/movieShow' component={MovieShow} />
            <Route path='/users' component={Users} />
          </Switch>
          <Footer footer={this.state.footer} name={this.state.name} />
        </HashRouter>
      </div>
    );
  }
}

export default App;
