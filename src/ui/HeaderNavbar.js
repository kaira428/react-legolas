import React from "react";
import { Link } from "react-router-dom";

const HeaderNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#F1E6C8" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            width="190"
            height="60"
            src="/images/upskill.png"
            alt="Legolas"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/pages/supervisorLanding"
              >
                Supervisor Landing Page
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pages/supervisorDashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pages/createLearningTrackForm">
                LT Form
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pages/createNewCohortForm">
                New Cohort Form
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNavbar;
