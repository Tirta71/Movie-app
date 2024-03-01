import React from "react";
import Navbar from "../Component/Layout/Navbar";
import Footer from "../Component/Layout/Footer";
import CardListMovie from "../Component/Child List Movie/CardListMovie";

export default function MovieList() {
  return (
    <>
      <button className="scroll-top scroll-to-target" data-target="html">
        <i className="fas fa-angle-up"></i>
      </button>

      <Navbar />

      <main>
        <section
          className="breadcrumb-area breadcrumb-bg"
          data-background="img/bg/breadcrumb_bg.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-content">
                  <h2 className="title">
                    My List <span>Movie</span>
                  </h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Movie
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CardListMovie />
      </main>

      <Footer />
    </>
  );
}
