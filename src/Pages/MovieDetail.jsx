import React from "react";
import Navbar from "../Component/Layout/Navbar";
import ContentMovieDetail from "../Component/Child Movie Detail/ContentMovieDetail";

export default function MovieDetail() {
  return (
    <>
      <Navbar />
      <main>
        <ContentMovieDetail />
      </main>
    </>
  );
}
