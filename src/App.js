import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import HomeDashboard from "./Pages/HomeDashboard";
import MovieList from "./Pages/MovieList";
import MovieDetail from "./Pages/MovieDetail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeDashboard />} />
        <Route path="/movie-list" element={<MovieList />} />
        <Route path="/movie-detail/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
