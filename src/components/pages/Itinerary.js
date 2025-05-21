import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Itinerary = () => {
  const location = useLocation();
  const itineraryData = JSON.parse(location.state);

  console.log("itineraryData: " + itineraryData);

  //     const jsonString = `{
  //     "Day 1": [
  //       {
  //         "place_to_visit": "Pioneer Park",
  //         "description_and_highlights": "Explore a historical village showcasing Alaska's past, visit the Gold Rush Town for a glimpse into the early days of Fairbanks, enjoy a ride on the Riverboat Discovery.",
  //         "approximate_time_to_visit_the_place": "3-4 hours",
  //         "useful_tips": "Consider buying the Riverboat Discovery tickets in advance to secure a spot.",
  //         "entry_fee_if_any": "Free admission to the park, Riverboat Discovery tickets additional cost."
  //       }
  //     ],
  //     "Day 2": [
  //       {
  //         "place_to_visit": "University of Alaska Museum of the North",
  //         "description_and_highlights": "Discover natural and cultural history of Alaska, view exhibits on wildlife, art, and the people of the North.",
  //         "approximate_time_to_visit_the_place": "2-3 hours",
  //         "useful_tips": "Check the museum's schedule for guided tours or special events.",
  //         "entry_fee_if_any": "Low-cost admission, discounts for students and seniors."
  //       },
  //       {
  //         "place_to_visit": "Creamer's Field Migratory Waterfowl Refuge",
  //         "description_and_highlights": "Experience bird watching and nature walks in a serene refuge, ideal for outdoor enthusiasts and photography lovers.",
  //         "approximate_time_to_visit_the_place": "1-2 hours",
  //         "useful_tips": "Bring binoculars for bird watching, wear suitable footwear for walking trails.",
  //         "entry_fee_if_any": "Free admission to the refuge."
  //       }
  //     ]
  //   }`;

  //   const itineraryData = JSON.parse(jsonString);

  // Get all day keys sorted (e.g., "Day 1", "Day 2", ...)
  const dayKeys = Object.keys(itineraryData || {}).sort((a, b) => {
    const dayA = parseInt(a.replace(/\D/g, ""), 10);
    const dayB = parseInt(b.replace(/\D/g, ""), 10);
    return dayA - dayB;
  });

  // State to manage which days are open
  const [openDays, setOpenDays] = useState({});

  const toggleDay = (day) => {
    setOpenDays((prev) => ({
      ...prev,
      [day]: !prev[day],
    }));
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center text-primary">Your Trip Itinerary</h2>
      <div className="accordion" id="itineraryAccordion">
        {dayKeys.map((day) => (
          <div className="card mb-4 shadow" key={day}>
            <div
              className="card-header d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer", background: "#f0f4fa" }}
              onClick={() => toggleDay(day)}
              aria-expanded={!!openDays[day]}
              aria-controls={`collapse-${day}`}
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleDay(day);
              }}
            >
              <h5 className="mb-0">
                <span role="img" aria-label="calendar">
                  📅
                </span>{" "}
                {day}
              </h5>
              <button
                className="btn btn-link"
                style={{ fontSize: "1.5rem", textDecoration: "none" }}
                aria-expanded={!!openDays[day]}
                aria-controls={`collapse-${day}`}
                tabIndex={-1}
              >
                {openDays[day] ? "−" : "+"}
              </button>
            </div>
            <div
              id={`collapse-${day}`}
              className={`collapse ${openDays[day] ? "show" : ""}`}
            >
              <div className="card-body bg-light">
                {Array.isArray(itineraryData[day]) &&
                itineraryData[day].length > 0 ? (
                  itineraryData[day].map((item, i) => (
                    <div
                      key={i}
                      className="mb-4 p-3 rounded shadow-sm"
                      style={{ background: "#fff" }}
                    >
                      <h5 className="text-success mb-2">
                        <span role="img" aria-label="location">
                          📍
                        </span>{" "}
                        {item.place_to_visit}
                      </h5>
                      <p>
                        <strong>Description & Highlights:</strong>
                        <br />
                        {item.description_and_highlights}
                      </p>
                      <p>
                        <strong>Approximate Time to Visit:</strong>
                        <br />
                        <span className="badge bg-info text-dark">
                          {item.approximate_time_to_visit_the_place}
                        </span>
                      </p>
                      <p>
                        <strong>Useful Tips:</strong>
                        <br />
                        <span className="text-warning">{item.useful_tips}</span>
                      </p>
                      <p>
                        <strong>Entry Fee:</strong>
                        <br />
                        <span className="text-primary">
                          {item.entry_fee_if_any}
                        </span>
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="text-danger">
                    No itinerary data for this day.
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>
        {`
          .card-header:hover, .card-header:focus {
            background: #e2e6ea;
            transition: background 0.2s;
            outline: none;
          }
          .accordion .card {
            border-radius: 14px;
            border: none;
          }
          .accordion .card-header {
            border-radius: 14px 14px 0 0;
            border-bottom: 1px solid #dee2e6;
            font-size: 1.15rem;
            font-weight: 500;
          }
          .accordion .card-body {
            border-radius: 0 0 14px 14px;
          }
          .shadow-sm {
            box-shadow: 0 2px 8px rgba(0,0,0,0.07);
          }
          .shadow {
            box-shadow: 0 4px 24px rgba(0,0,0,0.10);
          }
        `}
      </style>
    </div>
  );
};

export default Itinerary;
