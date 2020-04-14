import React, { Component } from "react";
import MovieDetail from "./MovieDetail";
import MovieSearch from "./MovieSearch";

export class Movies extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      query: "",
      loading: false,
      totalPages: 0,
      currentPage: 0,
      searchTerm: 0,
    };
  }

  componentDidMount() {
    this.setState({ loading: true })
    const endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=54cd1af69dd6dc43fcfdfc3a29bef89b&language=en-US&page=1`;
    this.fetchTerms(endpoint);
  }

  searchItems = (searchTerm) => {
    let endpoint = "";
    this.setState({  
      movies: [],
      loading: true,
      searchTerm,
    });

    if (searchTerm === "") {
      endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=54cd1af69dd6dc43fcfdfc3a29bef89b&language=en-US&page=1`;
    } else {
      endpoint = `https://api.themoviedb.org/3/search/movie?query=${this.state.searchTerm}&api_key=54cd1af69dd6dc43fcfdfc3a29bef89b`;
    }
    this.fetchTerms(endpoint);
  };

  fetchTerms = (endpoint) => {
    fetch(endpoint)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          movies: [...this.state.movies, ...result.results],
          loading: false,
          currentPage: result.page,
          totalPages: result.total_pages,
        });
      });
  };

  render() {
      const { movies, query } = this.state
      const isSearched = query => item => !query || item.title.toLowerCase().includes(query.toLowerCase())
    
    return (
      <div className="Movies container">
        <MovieSearch callback={this.searchItems}/>
        <MovieDetail movies={movies.filter(isSearched(query))} loading={this.state.loading} />
      </div>
    );
  }
}

export default Movies;
