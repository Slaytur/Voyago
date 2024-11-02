from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from prompts import GET_CITIES
from openai import OpenAI
import dotenv
import os
import uvicorn
import pickle
dotenv.load_dotenv()

YOUR_API_KEY = os.environ.get("PERPLEXITY_API_KEY")
client = OpenAI(api_key=YOUR_API_KEY, base_url="https://api.perplexity.ai")

app = FastAPI(title="python backend")

class CityRequest(BaseModel):
    location: str
    interests: List[str]
    date: str  # assuming ISO format 'YYYY-MM-DD'

class ItineraryRequest(BaseModel):
    cities: List[str]

# Placeholder response model for cities
class CityResponse(BaseModel):
    cities: List[str]
    descriptions: List[str]

# Placeholder response model for itinerary
class ItineraryResponse(BaseModel):
    itinerary: dict

# Root route
@app.get("/")
async def root():
    return {"message": "Welcome to the Python Backend!"}

# API endpoint to get recommended cities based on location, interests, and date
# @app.post("/get_cities", response_model=CityResponse)
def get_cities(request: CityRequest):
    custom_prompt = GET_CITIES[::].replace("{location}", request.location).replace("{interests}", ", ".join(request.interests)).replace("{date}", request.date)

    messages = [
        {
            "role": "system",
            "content": "You are an expert trip planner with 20+ years of experience. You know all about the cities of the world."
        },
        {
            "role": "user",
            "content": custom_prompt
        },
    ]
    
    # with open("response_cache.pkl", "rb") as f:
    #     response = pickle.load(f)
        
    response = client.chat.completions.create(
        model="llama-3.1-sonar-large-128k-online",
        messages=messages,
    )
    
    with open('response_cache.pkl', 'wb') as f:
        pickle.dump(response, f)
    cities = []
    descriptions = []

    response_text = response.choices[0].message.content

    response_list = response_text.split("\n")
    for i in range(len(response_list)):
        if "#" in response_list[i]:
            cities.append(response_list[i].replace("#", "").strip())
            descriptions.append(response_list[i+1])
            

    return CityResponse(cities, descriptions)

# API endpoint to get itinerary based on a list of cities
@app.post("/get_itinerary", response_model=ItineraryResponse)
async def get_itinerary(request: ItineraryRequest):
    # Placeholder logic for itinerary creation
    itinerary = {
        "CityA": ["Visit museum", "Lunch at cafe"],
        "CityB": ["City tour", "Dinner at local restaurant"],
        "CityC": ["Hiking trail", "Visit historical site"]
    }  # replace with actual logic based on cities in request
    return ItineraryResponse(itinerary=itinerary)

request = CityRequest(location="New York", interests=["history", "art"], date="2022-12-01")

print(get_cities(request))

if __name__=="__main__":
    uvicorn.run(app, host='0.0.0.0', port=8000)

#pip freeze > requirements.txt