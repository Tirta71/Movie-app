import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top-wrap">
        <div className="container">
          <div className="footer-menu-wrap">
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src="img/logo/logo.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="footer-menu">
                  <nav>
                    <ul className="navigation">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="index.html">Movie</a>
                      </li>
                      <li>
                        <a href="index.html">tv show</a>
                      </li>
                      <li>
                        <a href="index.html">pages</a>
                      </li>
                      <li>
                        <a href="pricing.html">Pricing</a>
                      </li>
                    </ul>
                    <div className="footer-search">
                      <form action="#">
                        <input type="text" placeholder="Find Favorite Movie" />
                        <button>
                          <i className="fas fa-search"></i>
                        </button>
                      </form>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-quick-link-wrap">
            <div className="row align-items-center">
              <div className="col-md-7">
                <div className="quick-link-list">
                  <ul>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Help Center</a>
                    </li>
                    <li>
                      <a href="#">Terms of Use</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="footer-social">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2021. All Rights Reserved By{" "}
                  <a href="index.html">Movflx</a>
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="payment-method-img text-center text-md-right">
                <img src="img/images/card_img.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
