import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <footer className="footer mt-5" align='center'>
          <div className="container">
            <span className="text-muted">
              &copy; {this.props.footer}
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
