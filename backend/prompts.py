
GET_WEATHER = "I am traveling to {points_of_interest} in {location}. I will be traveling on {date}, please estimate the weather for the area in this time of year. Do not give a weather forecast for each place, do it for the area as a whole. Include the usual chance of rain, temerature, and weather conditions. Only include the estimated weather, do not include anything else."

GET_TRAVEL_TIPS = "Research travel guides for the attractions of {points_of_interest}. Then return a 20+ long bullet pointed list of every tip that you find. Combine all the tips into one big travel tips list. Make a mix of general tips and specific tips. Do not include places or things to do at the interests.\nFormat:\n - {travel_tip1}\n - {travel_tip2}\n - {travel_tip3}"

GET_PACKING_LIST = "I am traveling to {location}. Create a packing list for {points_of_interest} and nearby attractions. The date of the visit is {date} and length is {length}. Then return a bullet pointed list of every item that could be needed.\nFormat:\n - {item1}\n - {item2}\n - {item3}"

GET_ITINERARY= """
Create a hyper-specific travel itinerary that is in the format of bullet points, separated by day. Make sure to include what the user should be doing at all times of the day.
User wants to visit {location}.
User wants to make sure to visit the {points_of_interest}
User wants to see popular tourist destinations but also smaller niche quaint gems.
User likes {interests}.
User wants a packed schedule.
User's vacation is on the {date} and is {length} days long.
Be hyper-specific with recommendations, such as recommending specific restaurants, not just area of restaurant.
Format
## Day 1 (place)
 - 7:00 AM go to Cafe du Mond
 - 8:00 Go the _ art gallery
...""".strip()



# unneeded
GET_CITIES = "Think about all the cities in the country of (including) {location}. Then create a list of cities that are relatively close and align with these interests: {interests} around {date}. You should include a mix of highly popular cities, but also some smaller niche quaint gems. Only include titles with these cities, then under them have a description of the city and explain why it fits their interests.\nUse the following response schema:\n## {City}\n{description}"
GET_CITY_ATTRACTION= "I am traveling to {location} on {date}. Create a list of {attraction_type} in {city} that align with the interests: {interests}. Only include titles with the name, then under the them include a description of the {attraction_type}. Do not include any other information.\nFormat:\n## {{attraction_type}}\n{desction}"

GET_POI_SUGGESTIONS_1 = "User is traveling to {region}. User's current interests include sightseeing, {interests}. Identify the major tourist attractions in this region and that align with the user's interests. Then return a list of just the top 12 attractions. Do not add any description or other information.\nFormat:\n - {major_attraction_1}\n - {major_attraction_2}\n - {major_attraction_3}\n...\n - {major_attraction_12}"

GET_POI_SUGGESTIONS_2 = "User is traveling to {point_of_interest}. User's current interests include {interests}, and sightseeing/touristing. Identify other major tourist attractions that align with the user's interests around the point of interest these could be in the same country, orr bordering country if the destinations are close. Then return a bullet point list of just the top 12 other attractions. Do not add any description or other information.\nFormat:\n - {major_attraction_1}\n - {major_attraction_2}\n - {major_attraction_3}\n...\n - {major_attraction_12}"
