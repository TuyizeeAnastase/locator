import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"
const NavBar = () => {
  return (
    <div className="navbar-dark  bg-danger  shadow">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                  <img src={logo} alt="logo"/>
                  <h4 className="text-dark" id="nav-logo">KLOC</h4>
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item" >
                      <Link className="nav-link  active" id="nav-item" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" id="nav-item" to="/guids">
                        How it works
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" id="nav-item" to="/listing">
                        Lisitng
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" id="nav-item" to="/about">
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" id="nav-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
