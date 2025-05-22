// This module now calls your Vercel serverless function instead of OpenAI directly from the browser.
// Your OpenAI API key should NOT be in this file or in your React app.

async function getitinerary(
  traveler,
  place,
  budget,
  interested_places,
  month,
  days
) {
  console.log("Traveler:", traveler);
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
    if (!res.ok) {
      throw new Error("Failed to fetch data from server");
    }
    const data = await res.json();

    console.log("Response from server:", data);
    return data.reply;
  };
}

export { getitinerary };
