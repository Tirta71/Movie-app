import React, { useState } from "react";

export default function HeaderCardList({ genres, onGenreClick }) {
  const [activeGenre, setActiveGenre] = useState(null);

  const handleGenreClick = (genre) => {
    setActiveGenre(genre);
    onGenreClick(genre);
  };

  const handleAllClick = () => {
    setActiveGenre(null);
    onGenreClick(null);
  };

  return (
    <div className="row align-items-end mb-60">
      <div className="col-lg-6">
        <div className="section-title text-center text-lg-left">
          <span className="sub-title">ONLINE STREAMING</span>
          <h2 className="title">New Release Movies</h2>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="movie-page-meta">
          <div className="tr-movie-menu-active text-center">
            <button
              className={activeGenre === null ? "active" : ""}
              onClick={handleAllClick}
            >
              All
            </button>

            {genres
              ? genres.map((genre, index) => (
                  <button
                    key={index}
                    className={activeGenre === genre ? "active" : ""}
                    onClick={() => handleGenreClick(genre)}
                  >
                    {genre}
                  </button>
                ))
              : null}
          </div>
          <form action="#" className="movie-filter-form">
            <select className="custom-select">
              <option selected>English</option>
              <option value="1">Blueray</option>
              <option value="2">4k Movie</option>
              <option value="3">Hd Movie</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}
