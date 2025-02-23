import React from "react";
import { useNavigate } from "react-router-dom";

function Step1() {
  const navigate = useNavigate();
  return (
    // <h1>Did you already decide on a place?</h1>
    <div className="row justify-content-center align-items-center vh-100">
      <div className="col-md-6">
        <h1>Did you already decide on a place?</h1>
        <button
          className="btn btn-outline-dark m-2"
          type="button"
          onClick={() => navigate("/step2")}
        >
          Yes
        </button>
        <button
          className="btn btn-outline-dark m-2"
          type="button"
          onClick={() => navigate("/step2")}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default Step1;
