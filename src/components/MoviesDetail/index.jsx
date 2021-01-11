import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../Card";
import "./moviesdetail.scss";

const API_KEY = "7b6143b00f184cc753a835e91c99fc27";

function MoviesDetail(props) {
  const [movie, setMovie] = useState([]);
  const [similars, setSimilars] = useState([]);
  const params = useParams();

  const MOVIE_API = `https://api.themoviedb.org/3/movie/${
    params.movieID
  }?api_key=${API_KEY}&language=en-US/`;

  const SIM_API = `https://api.themoviedb.org/3/movie/${
    params.movieID
  }/similar?api_key=${API_KEY}&language=en-US&page=1`;

  useEffect(() => {
    const axios = require("axios").default;

    axios.get(MOVIE_API).then(response => {
      setMovie(response.data);
    });

    axios.get(SIM_API).then(response => {
      setSimilars(response.data.results);
    });
  }, [params.movieID]);

  return (
    <div className="col-sm-6 offset-sm-3 mt-5">
      <nav aria-label="breadcrumb" className="mb-5">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-house-fill me-2"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                />
              </svg>
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-camera-reels-fill me-2"
              viewBox="0 0 16 16"
            >
              <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7z" />
            </svg>
            {movie.title}
          </li>
        </ol>
      </nav>

      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          className="card-img-top"
          alt="..."
        />

        <div className="container bg-light">
          <h1 className="pt-3">{movie.title}</h1>
          <p>{movie.overview}</p>
          <p>Runtime: {movie.runtime} Minutes</p>
          <div className="d-flex justify-content-between">
            <p>IMDB RATING: {movie.vote_average}</p>
            <p>{movie.release_date}</p>
          </div>
        </div>
        <div className="mb-3 mt-5">
          <h3 className="summary--title">Similar Movies </h3>
        </div>
        <div className="row">
          {similars
            .filter(item => item.poster_path)
            .map(item => (
              <div className="col-12 col-md-4 mt-3 ">
                <Card key={item.id} movie={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MoviesDetail;
