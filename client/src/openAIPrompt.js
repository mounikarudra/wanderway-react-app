// This module now calls your Vercel serverless function instead of OpenAI directly from the browser.
// Your OpenAI API key should NOT be in this file or in your React app.

import axios from "axios";

async function getitinerary(
  traveler,
  place,
  budget,
  interested_places,
  month,
  days
) {
  console.log("Traveler:", traveler);
  console.log("Place:", place);
  console.log("Budget:", budget);
  console.log("Interested Places:", interested_places);
  console.log("Month:", month);
  console.log("Days:", days);
  // const sendMessage = async () => {
  //   const res = await fetch("/api/openai", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       traveler,
  //       place,
  //       budget,
  //       interested_places,
  //       month,
  //       days,
  //     }),
  //   });
  //   if (!res.ok) {
  //     throw new Error("Failed to fetch data from server");
  //   }
  //   const data = await res.json();

  //   console.log("Response from server:", data);
  //   return data.reply;
  // };
  const sendMessage = async () => {
    try {
      const res = await axios.post(
        // "https://wanderway-react-app.vercel.app/api/openai",
        "/server/api/openai",
        JSON.stringify(
          {
            traveler,
            place,
            budget,
            interested_places,
            month,
            days,
          },
          {
            timeout: 10000, // ⏱ Timeout after 10 seconds
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
      );
      if (res.status !== 200) {
        throw new Error("Failed to fetch data from server");
      }
      console.log("Response from server:", res.data);
      return res.data;
    } catch (error) {
      console.error("Error:", error);
      throw new Error("Failed to fetch data from server");
    }
  };
  return sendMessage();
}

export { getitinerary };
