// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.REACT_APP_OPENAI_API_KEY, // This is also the default, can be omitted
// });

// console.log("Inside openai.js");

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   const { traveler, place, budget, interested_places, month, days } = req.body;

//   // Build the prompt for OpenAI
//   const prompt_text = `Suggest day to day itineraries by considering the below parameters and distance between the places. On a given day, there can be 2-3 places a person can visit.
//   Place: ${place}
//   Traveler type: ${traveler}
//   Month: ${month}
//   Budget: ${budget}
//   Types of places interested in visiting: ${interested_places}
//   Please suggest a ${days}-day itinerary in the following json format:
//   {
//   "Day n": [
//       {
//       "place_to_visit": "",
//       "description_and_highlights": "",
//       "approximate_time_to_visit_the_place": "",
//       "useful_tips": "",
//       "entry_fee_if_any": ""
//       }
//     ]
//   }`;

//   try {
//     const chatCompletion = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [
//         {
//           role: "system",
//           content:
//             "Please act as a travel agent to curate tailored itineraries for clients.",
//         },
//         { role: "user", content: prompt_text },
//       ],
//       store: true,
//     });
//     console.log(chatCompletion.choices[0].message);
//     const response = chatCompletion.choices[0].message.content;
//     res.status(200).json({ reply: response.data });
//   } catch (error) {
//     console.error(error.response?.data || error.message);
//     res.status(500).json({ error: "Failed to fetch response from OpenAI" });
//   }
// }

import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { traveler, place, budget, interested_places, month, days } = req.body;

  // Build the prompt for OpenAI
  const prompt_text = `Suggest day to day itineraries by considering the below parameters and distance between the places. On a given day, there can be 2-3 places a person can visit.
Place: ${place}
Traveler type: ${traveler}
Month: ${month}
Budget: ${budget}
Types of places interested in visiting: ${interested_places}
Please suggest a ${days}-day itinerary in the following json format:
{
"Day n": [
    { 
    "place_to_visit": "",
    "description_and_highlights": "",
    "approximate_time_to_visit_the_place": "",
    "useful_tips": "",
    "entry_fee_if_any": ""
    }
  ]
}`;

  try {
    const openaiRes = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "Please act as a travel agent to curate tailored itineraries for clients.",
          },
          { role: "user", content: prompt_text },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const content = openaiRes.data.choices[0].message.content;
    res.status(200).json({ itinerary: content });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      error: error.response?.data || "Failed to fetch response from OpenAI",
    });
  }
}
