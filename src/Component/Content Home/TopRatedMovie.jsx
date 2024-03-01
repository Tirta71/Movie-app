import React, { useState, useEffect } from "react";
import CardTopRatedMovie from "./Child Top Rated Movie/CardTopRatedMovie";

export default function TopRatedMovie() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/movies")
      .then((response) => response.json())
      .then((data) => {
        const uniqueCategories = [...new Set(data.map((movie) => movie.genre))];
        setCategories(["All", ...uniqueCategories]); // Include "All" category
        setMovies(data);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredMovies =
    selectedCategory && selectedCategory !== "All"
      ? movies.filter((movie) =>
          movie.genre.toLowerCase().includes(selectedCategory.toLowerCase())
        )
      : movies;

  return (
    <section
      className="top-rated-movie tr-movie-bg"
      data-background="img/bg/tr_movies_bg.jpg"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-50">
              <span className="sub-title">ONLINE STREAMING</span>
              <h2 className="title">Top Rated Movies</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="tr-movie-menu-active text-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={category === selectedCategory ? "active" : ""}
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <CardTopRatedMovie movies={filteredMovies} />
      </div>
    </section>
  );
}
