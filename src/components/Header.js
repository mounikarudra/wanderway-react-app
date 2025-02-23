import React, { useState } from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-info-subtle">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Wanderway ✈️
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li> */}
          </ul>
          <a
            className="nav-link active m-2"
            aria-current="page"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdgUgwgM5hghngQxIxB6YOPtn-5BZk2cEU0Y5r0V6YW9uuLzA/viewform"
          >
            Give Feedback!
          </a>
          <button className="btn btn-outline-info m-2" type="button">
            Login
          </button>
          <button className="btn btn-outline-info m-2" type="button">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
