import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./CardTransisi.css";
import { Link } from "react-router-dom";
export default function CardTopRatedMovie({ movies }) {
  const [visibleMovies, setVisibleMovies] = useState([]);

  useEffect(() => {
    setVisibleMovies(movies);
  }, [movies]);

  return (
    <TransitionGroup className="row tr-movie-active">
      {visibleMovies.map((movie, index) => (
        <CSSTransition key={movie.id} timeout={500} classNames="fade">
          <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two">
            <div className="movie-item mb-60">
              <div className="movie-poster">
                <Link to={`/movie-detail/${movie.id}`}>
                  <img
                    style={{ width: "303px", height: "430px" }}
                    src={`http://localhost:8000/images/${movie.gambar}`}
                    alt=""
                  />
                </Link>
              </div>
              <div className="movie-content">
                <div className="top">
                  <h5 className="title">
                    <a href="movie-details.html">{movie.judul}</a>
                  </h5>
                  <span className="date">{movie.tahun_rilis}</span>
                </div>
                <div className="bottom">
                  <ul>
                    <li>
                      <span className="quality">hd</span>
                    </li>
                    <li>
                      <span className="duration">
                        <i className="far fa-clock"></i> {movie.durasi} min
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
