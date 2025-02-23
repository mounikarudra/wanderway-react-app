import React from "react";
import { useNavigate } from "react-router-dom";

function Step2() {
  const navigate = useNavigate();
  return (
    <div className="row justify-content-center align-items-center vh-100">
      <div className="col-md-6">
        <button
          className="btn btn-outline-dark m-2"
          type="button"
          onClick={() => navigate("/roadtrip-info")}
        >
          Road Trip
        </button>
        <button
          className="btn btn-outline-dark m-2"
          type="button"
          onClick={() => navigate("/redirect-page")}
        >
          Flying
        </button>
      </div>
    </div>
  );
}

export default Step2;
