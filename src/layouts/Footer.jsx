import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <footer className="footer mt-5" align='center'>
          <div className="container">
            <span className="text-muted">
              &copy; {this.props.footer} <a href="https://appslution4you-demo.000webhostapp.com">{this.props.name}</a>
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
