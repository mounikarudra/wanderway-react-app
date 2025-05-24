import React, { useState } from "react";
import axios from "axios";

function SamplePostAPICall() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handlePost = async () => {
    try {
      let postData = {
        name: "Apple MacBook Pro 16",
        data: {
          year: 2019,
          price: 1849.99,
          "CPU model": "Intel Core i9",
          "Hard disk size": "1 TB",
        },
      };
      const res = await axios.post(
        "https://api.restful-api.dev/objects",
        postData
      );
      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResponse(null);
    }
  };

  return (
    <div>
      <button onClick={handlePost}>Send POST Request</button>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default SamplePostAPICall;
