import React, { Component } from "react";
import { Link } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="jumbotron mt-3">
          <div className="container">
            <h2 className='text-primary'>Welcome to React Bootstrap</h2>
            <p className='text-muted'>This is how to build a website with React, React-Router & React-Bootstrap</p>
            <Link to={'/about'} className='btn btn-primary'>Learn More</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
