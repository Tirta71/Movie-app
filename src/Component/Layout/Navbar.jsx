import React from "react";
import { Link, useLocation } from "react-router-dom";
import SearchNavbar from "./Child Navbar/SearchNavbar";

export default function Navbar() {
  const location = useLocation();

  return (
    <header>
      <div id="sticky-header" className="menu-area transparent-header">
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div className="mobile-nav-toggler">
                <i className="fas fa-bars"></i>
              </div>
              <div className="menu-wrap">
                <nav className="menu-nav show">
                  <div className="logo">
                    <Link to="/">
                      <img
                        src={process.env.PUBLIC_URL + "/img/logo/logo.png"}
                        alt="Logo"
                      />
                    </Link>
                  </div>
                  <div className="navbar-wrap main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      <li
                        className={
                          location.pathname === "/"
                            ? "active menu-item-has-children"
                            : "menu-item-has-children"
                        }
                      >
                        <Link to="/">Home</Link>
                      </li>
                      <li
                        className={
                          location.pathname === "/movie-list" ||
                          location.pathname.includes("/movie-detail")
                            ? "active menu-item-has-children"
                            : "menu-item-has-children"
                        }
                      >
                        <Link to="/movie-list">Movie</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="header-action d-none d-md-block">
                    <ul>
                      <li className="header-search">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#search-modal"
                        >
                          <i className="fas fa-search"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <SearchNavbar />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
