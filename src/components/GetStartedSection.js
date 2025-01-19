import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function GetStartedSection() {
  const navigate = useNavigate();
  return (
    <>
      <div
        // style={{
        //   position: "absolute",
        //   left: "50%",
        //   top: "50%",
        //   transform: "translate(-50%, -50%)",
        // }}
        className="row justify-content-center align-items-center vh-100"
      >
        <div className="col-md-6">
          <h1>Let your future travel plan begin here!</h1>
          <button
            class="btn btn-outline-dark m-2"
            type="button"
            onClick={() => navigate("/step1")}
          >
            Get Started!
          </button>
        </div>
      </div>
    </>
  );
}

export default GetStartedSection;
