import React, { Component } from "react";
import { Link } from "react-router-dom";
import MoviesTable from "./moviesTable";
import SearchBox from "./searchBox";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { paginate } from "../utils/paginate";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 5,
    currentPage: 1,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { column: "title", order: "asc" }
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genre" }, ...getGenres()];

    this.setState({
      movies: getMovies(),
      genres
    });
  }

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      searchQuery,
      sortColumn,
      movies: AllMovies
    } = this.state;

    let filtered_movies = AllMovies;

    if (searchQuery)
      filtered_movies = AllMovies.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered_movies = AllMovies.filter(
        m => m.genre._id === selectedGenre._id
      );

    const sortedMovies = _.orderBy(
      filtered_movies,
      [sortColumn.column],
      [sortColumn.order]
    );

    const movies = paginate(sortedMovies, currentPage, pageSize);

    return { filteredMoviesCount: filtered_movies.length, movies };
  };

  onDeleteMovie = movie => {
    const remaining_movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({
      movies: remaining_movies
    });
  };

  onLikeMovie = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;

    this.setState({
      movies
    });
  };

  onPageChange = page => {
    this.setState({
      currentPage: page
    });
  };

  onGenreSelection = genre => {
    this.setState({
      selectedGenre: genre,
      searchQuery: "",
      currentPage: 1
    });
  };

  onSortMovie = sortColumn => {
    this.setState({
      sortColumn
    });
  };

  onSearch = query => {
    this.setState({
      searchQuery: query,
      selectedGenre: null,
      currentPage: 1
    });
  };

  render() {
    const {
      pageSize,
      currentPage,
      sortColumn,
      genres,
      searchQuery
    } = this.state;

    const { filteredMoviesCount, movies } = this.getPagedData();

    if (filteredMoviesCount === 0)
      return <p>There are no movies in your collection. Sorry.</p>;

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.onGenreSelection}
          />
        </div>
        <div className="col">
          <Link
            to="/movies/new"
            className="btn btn-primary btn-outline-primary"
            style={{ marginBottom: 20 }}
          >
            Add new Movie
          </Link>
          <p>You have {filteredMoviesCount} movie(s) in your collection.</p>
          <SearchBox value={searchQuery} onChange={this.onSearch} />
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.onLikeMovie}
            onDelete={this.onDeleteMovie}
            onSort={this.onSortMovie}
          />
          <Pagination
            itemsCount={filteredMoviesCount}
            pageSize={pageSize}
            onPageChange={this.onPageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
