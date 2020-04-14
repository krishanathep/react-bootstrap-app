import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark fixed-top">
          <div className="container">
            <Link to={'/'} className="navbar-brand">
              {this.props.brand}
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link active">
                    ABOUT
                  </Link>
                </li>
                <li className="nav item">
                  <Link to="/news" className="nav-link active">
                    NEWS
                  </Link>
                </li>
                <li className='nav-item dropdown'>
                  <a 
                    href="#" 
                    className="nav-link dropdown-toggle active"
                    id='navbarDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    SERVICES
                  </a>
                  <div className="dropdown-menu" aria-labelledby='navbarDropdown'>
                    <Link to={'/movies'} className='dropdown-item'>Movies</Link>
                    <a href="" className='dropdown-item'>Services-2</a>
                    <a href="" className='dropdown-item'>Services-3</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
