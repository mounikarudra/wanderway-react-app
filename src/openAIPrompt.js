import OpenAI from "openai";

async function getitinerary(
  traveler,
  place,
  budget,
  interested_places,
  month,
  days
) {
  const client = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY, // This is the default and can be omitted
    dangerouslyAllowBrowser: true,
  });

  //   var selectedMonthName = months[month - 1];

  const prompt_text = `Suggest day to day itineraries by considering the below parameters and distance between the places. On a given day, there can be 2-3 places a person can visit.
                        Place: ${place}
                        Traveler type: ${traveler}
                        Month: ${month}
                        Budget: ${budget}
                        Types of places interested in visiting: ${interested_places}
                        Please suggest a ${days}-day itinerary in the following json format:
                        {{
                        "Day n": [
                            {{ 
                            "place_to_visit": "",
                            "description_and_highlights": "",
                            "approximate_time_to_visit_the_place": "",
                            "useful_tips": "",
                            "entry_fee_if_any": ""
                        }},
                        
                        {{ 
                            "place_to_visit": "",
                            "description_and_highlights": "",
                            "approximate_time_to_visit_the_place": "",
                            "useful_tips": "",
                            "entry_fee_if_any": ""
                        }},
                        ]
                        }}`;

  console.log("Promt text: ", prompt_text);

  const completion = await client.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          ": Please act as a travel agent to curate tailored itineraries for cleints.",
      },
      { role: "user", content: prompt_text },
    ],
    store: true,
  });

  // console.log(completion.choices);
  console.log(completion.choices[0].message.content);

  // prepJson(completion.choices[0].message.content);
  return completion.choices[0].message.content;
}

function prepJson(strTripPlan) {
  try {
    const jsonTripPlan = JSON.parse(strTripPlan);

    for (let i = 0; i < jsonTripPlan.count; i++) {
      console.log(jsonTripPlan[0]);
    }
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
  return;
}

export { getitinerary, prepJson };
