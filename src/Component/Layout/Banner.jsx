import React from "react";
import BannerImage from "../../Assets/Images/wallpaperflare.com_wallpaper.jpg";

export default function Banner() {
  return (
    <section
      className="banner-area banner-bg"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="container custom-container">
        <div className="row">
          <div className="col-xl-6 col-lg-8">
            <div className="banner-content">
              <h6
                className="sub-title wow fadeInUp"
                data-wow-delay=".2s"
                data-wow-duration="1.8s"
              >
                Movflx
              </h6>
              <h2
                className="title wow fadeInUp"
                data-wow-delay=".4s"
                data-wow-duration="1.8s"
              >
                Unlimited <span>Movie</span>, TVs Shows, & More.
              </h2>
              <div
                className="banner-meta wow fadeInUp"
                data-wow-delay=".6s"
                data-wow-duration="1.8s"
              >
                <ul>
                  <li className="quality">
                    <span>Pg 18</span>
                    <span>hd</span>
                  </li>
                  <li className="category">
                    <a href="#">Action,</a>
                    <a href="#">Horor</a>
                  </li>
                  <li className="release-time">
                    <span>
                      <i className="far fa-calendar-alt"></i> 2021
                    </span>
                    <span>
                      <i className="far fa-clock"></i> 128 min
                    </span>
                  </li>
                </ul>
              </div>
              <a
                href="https://www.youtube.com/watch?v=-FmWuCgJmxo"
                className="banner-btn btn popup-video wow fadeInUp"
                data-wow-delay=".8s"
                data-wow-duration="1.8s"
              >
                <i className="fas fa-play"></i> Watch Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
