import React, { Component } from "react";
import Spinners from "../../layouts/Spinners";

export class MovieDetail extends Component {
  render() {
    if (this.props.loading) {
      return <Spinners />;
    } else {
      return (
        <div className="MovieDetail">
          <div className="row">
            {this.props.movies.map((movie) => (
              <div className="col-md-3 col-6 mt-3" key={movie.id} {...movie}>
                <a href={`https://api.themoviedb.org/3/movie/${movie.id}?api_key=54cd1af69dd6dc43fcfdfc3a29bef89b`}>
                <img
                  className="img-thumbnail"
                  src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
                  alt=""
                />
                </a>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default MovieDetail;
