import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectPage = () => {
  const [countdown, setCountdown] = useState(8); // Initial countdown value
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Open Google in a new tab immediately
  //   // const newTab = window.open("https://www.google.com", "_blank");

  //   const interval = setInterval(() => {
  //     setCountdown((prev) => {
  //       if (prev === 1) {
  //         window.open("https://www.google.com", "_blank");
  //         navigate("/step1");
  //         // window.location.href = "https://example.com"; // Change to your desired redirect URL
  //         return 0;
  //       }
  //       return prev - 1;
  //     });
  //   }, 1000); // Decrease every second

  //   return () => clearInterval(interval); // Cleanup interval on unmount
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000); // Decrease every second

    const timer = setTimeout(() => {
      window.open("https://www.skyscanner.com", "_blank"); // Redirect to Google
      // window.open("https://www.google.com", "_blank"); // Redirect to Google
      navigate("/step1");
    }, 5000); // Redirect after 5 seconds

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redirecting...</h1>
      <h2>Come back to this page once you have decided on a place</h2>
      {/* <p>Google has been opened in a new tab.</p> */}
      <p>
        You will be redirected to a skyscanner website to browse flights in{" "}
        <strong>{countdown}</strong> seconds.
      </p>
    </div>
  );
};

export default RedirectPage;
