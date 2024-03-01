/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ContentMovieDetail.css";
export default function ContentMovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie:", error));
  }, [id]);

  const handleBack = () => {
    window.history.back();
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <section
      className={`movie-details-area scale-in`}
      data-background="img/bg/movie_details_bg.jpg"
    >
      <div className="container">
        <div className="row align-items-center position-relative">
          <div className="col-xl-3 col-lg-4">
            <div className="movie-details-img">
              <img
                src={`http://localhost:8000/images/${movie.gambar}`}
                style={{ width: "303px", height: "430px" }}
              />

              <a href={movie.url_streaming} className="popup-video">
                <img src="img/images/play_icon.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-xl-6 col-lg-8">
            <div className="movie-details-content">
              <h2 style={{ fontSize: "30px" }}>{movie.judul}</h2>
              <div className="banner-meta">
                <ul>
                  <li className="quality">
                    <span>{movie.bahasa}</span>
                    <span>hd</span>
                  </li>
                  <li className="category">
                    {movie.genre.split(",").map((genre, index) => (
                      <a key={index} href="#">
                        {genre.trim()}
                      </a>
                    ))}
                  </li>
                  <li className="release-time">
                    <span>
                      <i className="far fa-calendar-alt"></i>{" "}
                      {movie.tahun_rilis}
                    </span>
                    <span>
                      <i className="far fa-clock"></i> {movie.durasi} min
                    </span>
                  </li>
                </ul>
              </div>
              <p>{movie.deskripsi}</p>
              <div className="movie-details-prime">
                <ul>
                  <li className="share">
                    <a href="#">
                      <i className="fas fa-share-alt"></i> Share
                    </a>
                  </li>
                  <li className="streaming">
                    <h6>LK 21</h6>
                    <span>Streaming Channels</span>
                  </li>
                  <li className="watch">
                    <a href={movie.url_streaming} className="btn popup-video">
                      <i className="fas fa-play"></i> Watch Now
                    </a>
                  </li>
                </ul>
                <div className="btn-back">
                  <a
                    class="btn btn-primary mt-3"
                    onClick={handleBack}
                    role="button"
                  >
                    Back
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
