import React, { Component } from "react";

export class MovieSearch extends Component {
  state = {
    value: "",
  };

  imeout = null;

  onSearch = (event) => {
    this.setState({ value: event.target.value });
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.props.callback(this.state.value);
    }, 500);
  };

  render() {
    return (
      <div className="MovieSearch">
        <div className="row">
          <div className="col-md-12">
            <div className="card mt-3">
              <div className="card-body">
                <input
                  onChange={this.onSearch}
                  value={this.props.value}
                  type="search"
                  className="form-control"
                  placeholder="Search From Movie Title..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieSearch;
