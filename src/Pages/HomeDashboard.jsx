import React from "react";
import Navbar from "../Component/Layout/Navbar";
import Banner from "../Component/Layout/Banner";
import TopRatedMovie from "../Component/Content Home/TopRatedMovie";
import Footer from "../Component/Layout/Footer";

export default function HomeDashboard() {
  return (
    <>
      <button className="scroll-top scroll-to-target" data-target="html">
        <i className="fas fa-angle-up"></i>
      </button>
      <Navbar />
      <main>
        <Banner />
        <TopRatedMovie />
      </main>
      <Footer />
    </>
  );
}
