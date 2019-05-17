import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { paginate } from "../utils/paginate";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 5,
    currentPage: 1,
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
      sortColumn,
      movies: AllMovies
    } = this.state;

    const filtered_movies =
      selectedGenre && selectedGenre._id
        ? AllMovies.filter(m => m.genre._id === selectedGenre._id)
        : AllMovies;

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
      currentPage: 1
    });
  };

  onSortMovie = sortColumn => {
    this.setState({
      sortColumn
    });
  };

  render() {
    const { pageSize, currentPage, sortColumn, genres } = this.state;

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
          <p>You have {filteredMoviesCount} movie(s) in your collection.</p>

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
