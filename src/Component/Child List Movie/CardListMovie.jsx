import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderCardList from "./HeaderCardList";
import "../../Assets/css/ListMovie.css";

export default function CardListMovie() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(8);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/api/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        const uniqueGenres = [
          ...new Set(
            data
              .map((movie) => movie.genre.split(", ").map((g) => g.trim()))
              .flat()
          ),
        ];
        setGenres(uniqueGenres);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = selectedGenre
    ? movies.filter((movie) => movie.genre.includes(selectedGenre))
    : movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleGenreClick = (genre) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedGenre(genre);
      setCurrentPage(1);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section
      className="movie-area movie-bg"
      data-background="img/bg/movie_bg.jpg"
    >
      <div className="container">
        <HeaderCardList genres={genres} onGenreClick={handleGenreClick} />
        <div className={`row tr-movie-active ${isTransitioning ? "fade" : ""}`}>
          {currentMovies.map((movie) => (
            <div
              key={movie.id}
              className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two"
            >
              <div className="movie-item movie-item-three mb-50">
                <div className="movie-poster">
                  <img
                    style={{ width: "303px", height: "430px" }}
                    src={`http://localhost:8000/images/${movie.gambar}`}
                    alt=""
                  />
                  <ul className="overlay-btn">
                    <li className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <a href={movie.url_streaming} className="popup-video btn">
                        Watch Now
                      </a>
                    </li>
                    <li>
                      <Link to={`/movie-detail/${movie.id}`} className="btn">
                        Details
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="movie-content">
                  <div className="top">
                    <h5 className="title">
                      <Link to={`/movie-detail/${movie.id}`}>
                        {movie.judul}
                      </Link>
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
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="pagination-wrap mt-30">
              <nav>
                <ul>
                  {Array.from(
                    { length: Math.ceil(currentMovies.length / moviesPerPage) },
                    (_, i) => (
                      <li
                        key={i}
                        className={currentPage === i + 1 ? "active" : ""}
                      >
                        <a href="#" onClick={() => paginate(i + 1)}>
                          {i + 1}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
