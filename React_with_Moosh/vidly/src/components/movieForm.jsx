import React from "react";
import { getMovie } from "../services/fakeMovieService";

const MovieForm = ({ match, history }) => {
  const movie = getMovie(match.params.id);
  return (
    <div>
      <label className="form-control-plaintext">Name: {movie.title}</label>
      <label className="form-control-plaintext">ID: {movie._id}</label>
      <label className="form-control-plaintext">
        Genre: {movie.genre.name}
      </label>
      <label className="form-control-plaintext">
        Total in stock: {movie.numberInStock}
      </label>
      <label className="form-control-plaintext">
        Ratings: {movie.dailyRentalRate}
      </label>
      <button
        onClick={() => history.push("/movies")}
        style={{ margin: 10 }}
        className="btn btn-sm btn-outline-dark btn-primary"
      >
        Back to movies
      </button>
    </div>
  );
};

export default MovieForm;
