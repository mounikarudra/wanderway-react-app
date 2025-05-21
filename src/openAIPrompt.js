// This module now calls your Vercel serverless function instead of OpenAI directly from the browser.
// Your OpenAI API key should NOT be in this file or in your React app.

// import { useState } from "react";
async function getitinerary(
  traveler,
  place,
  budget,
  interested_places,
  month,
  days
) {
  // const [message, setMessage] = useState("");
  // const [response, setResponse] = useState("");

  const sendMessage = async () => {
    const res = await fetch("/api/openai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        traveler,
        place,
        budget,
        interested_places,
        month,
        days,
      }),
    });

    const data = await res.json();
    // setResponse(data.reply);
    return data.reply;
  };
}

export { getitinerary };
