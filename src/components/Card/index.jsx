import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

function Card(props) {
  const { id, title, poster_path, vote_average } = props.movie;
  return (
    <div className="card card--movie">
      <img
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5
            className="card--title"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "90%"
            }}
          >
            {title}
          </h5>
          <div>
            <h5 className="border border-dark border-2 rounded p-1">
              {vote_average}
            </h5>
          </div>
        </div>
        <div className="card--movie__footer">
          <Link
            to={`/movie/${id}`}
            className="btn btnS btn-secondary border border-dark"
          >
            Detail
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-right ms-2"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

Card.defaultProps = {
  movie: {
    title: "None",
    img: "https://picsum.photos/id/100/400/300"
  }
};

export default Card;
