import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <footer className="footer my-5">
          <span className="text-muted">
              &copy; {this.props.footer}
            </span>
        </footer>
      </div>
    );
  }
}

export default Footer;
