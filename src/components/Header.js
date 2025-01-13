import React, { useState } from "react";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-info-subtle">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Wanderway ✈️
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li> */}
          </ul>
          <a
            class="nav-link active m-2"
            aria-current="page"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdgUgwgM5hghngQxIxB6YOPtn-5BZk2cEU0Y5r0V6YW9uuLzA/viewform"
          >
            Give Feedback!
          </a>
          <button class="btn btn-outline-info m-2" type="button">
            Login
          </button>
          <button class="btn btn-outline-info m-2" type="button">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
