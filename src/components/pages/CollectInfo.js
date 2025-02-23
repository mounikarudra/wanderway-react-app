import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { getitinerary } from "../../openAIPrompt";

const CollectInfo = () => {
  const navigate = useNavigate();

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function handleInfo(event) {
    event.preventDefault();

    // console.dir(event.target);
    const placeInput = event.target.elements.placeInput.value;
    const tripStartDate = event.target.elements.tripStartDate.value;
    const travelerType = event.target.elements.travelerType.value;
    const noOfDaysType = event.target.elements.noOfDaysType.value;
    const budgetType = event.target.elements.budgetType.value;

    const placesType = [];
    const elements = event.target.elements.placesType.selectedOptions;

    // console.log(elements);
    // console.log(event.target.elements.placesType.selectedOptions);

    if (elements.length > 1) {
      for (let i = 0; i < elements.length; i++) {
        placesType.push(elements[i].value);
      }
    } else if (elements) {
      placesType.push(elements.value);
    }
    // const placesType = event.target.elements.placesType.value;

    getitinerary(
      travelerType,
      placeInput,
      budgetType,
      placesType.join(","),
      months[tripStartDate.substr(5, 2) - 1],
      noOfDaysType
    );

    console.log(
      placeInput,
      months[tripStartDate.substr(5, 2) - 1],
      travelerType,
      noOfDaysType,
      budgetType,
      placesType.join(",")
    );
  }

  return (
    // <div className="d-flex justify-content-center align-items-center vh-100">
    //   <div className="container-fluid px-2 py-5 mx-auto">
    //     <div className="row d-flex">
    // <div className="col-xl-7 col-lg-8 col-md-9 col-11">
    <div className="justify-content-center col-xl-7 col-lg-8 col-md-9 col-11">
      <h3 className="text-center">Answer some questions</h3>
      <p className="blue-text text-center">
        Just answer a few questions
        <br /> so that we can personalize the right trip itinerary for you.
      </p>
      <div className="card">
        <form onSubmit={handleInfo}>
          <p className="text-center">
            <label className="red-label">*</label> indicated required fields
          </p>
          <div className="form-group">
            <label htmlFor="placeInput" className="text-left">
              <label className="red-label">*</label> Place
            </label>
            <input
              type="text"
              className="form-control"
              id="placeInput"
              aria-describedby="Name of the Place"
              placeholder="Enter place name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="tripStartDate" className="text-right">
              <label className="red-label">*</label> Date
            </label>
            <input
              type="date"
              className="form-control"
              id="tripStartDate"
              placeholder="" // TODO - Get the current date and grey-out past dates
            />
          </div>
          <div className="form-group">
            <label htmlFor="travelerType">
              <label className="red-label">*</label> Traveler Type
            </label>
            <select className="form-control" id="travelerType">
              <option>Single</option>
              <option>Family</option>
              <option>Friends</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="noOfDaysType">
              <label className="red-label">*</label> No. of Days
            </label>
            {/* <select className="form-control" id="noOfDaysType">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select> */}
            <input
              className="form-control"
              type="number"
              id="noOfDaysType"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="budgetType">
              <label className="red-label">*</label> Budget
            </label>
            <select className="form-control" id="budgetType">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="placesType">
              <label className="red-label">*</label> Types of Places
            </label>
            <select multiple={true} className="form-control" id="placesType">
              <option>Must see places</option>
              <option>Hiking</option>
              <option>Adventure activies</option>
              <option>Wildlife</option>
              <option>Scenic Drives</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            // onClick={() => navigate("/step1")}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default CollectInfo;
