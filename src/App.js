import React, { useState, useEffect } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./style.css";

import Card from "./components/Card";
import MoviesDetail from "./components/MoviesDetail";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import About from "./views/About";

const API_KEY = "1f23c695f16c51df0ecc35535663874a";

export default function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const PRO_API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=/`;

  useEffect(() => {
    fetch(PRO_API)
      .then(response => response.json())
      .then(info => {
        setMovies(info.results);
      });
  }, []);

  const Clicker = event => {
    event.preventDefault();

    fetch(SEARCH_API + search)
      .then(rsp => rsp.json())
      .then(data => setMovies(data.results));
  };
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <div className="container mt-5 mb-5">
            <form>
              <div className="row">
                <div className="col-md-4 offset-md-4">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter the Movie"
                      name="search"
                      value={search}
                      onChange={event => setSearch(event.target.value)}
                    />
                    <label for="floatingInput">Movie Name</label>
                    <button
                      onClick={Clicker}
                      type="submit"
                      className="btn btn-search btnS text-light border border-light"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="container mt-5 mb-5">
            <div className="row">
              {movies
                .filter(item => item.poster_path)
                .map(item => (
                  <div className="col-12 col-md-3 mt-3 ">
                    <Card key={item.id} movie={item} />
                  </div>
                ))}
            </div>
          </div>
        </Route>
        <Route path="/movie/:movieID">
          <MoviesDetail movies={movies} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Redirect from="*" to="/404" />
      </Switch>
    </BrowserRouter>
  );
}
