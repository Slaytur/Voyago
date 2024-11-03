from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from prompts import *
from openai import AsyncOpenAI
import dotenv
import os
import uvicorn
import pickle
import asyncio
from ollama import Client

dotenv.load_dotenv()

API_KEY = os.environ.get("PERPLEXITY_API_KEY")
client = AsyncOpenAI(api_key=API_KEY, base_url="https://api.perplexity.ai")
ollama_client = Client(host='http://100.80.188.54:11434')

app = FastAPI(title="python backend")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class DataRequest(BaseModel):
    points_of_interest: list[str]
    interests: list[str]
    location: str
    date: str
    date_length: str
    token: str

class PointOfInrest1Request(BaseModel):
    region: str
    interests: str
    token: str
    
class PointOfInrest2Request(BaseModel):
    point_of_interest: str
    interests: str
    token: str

class PointOfInrestResponse(BaseModel):
    data: List[str]

class DataResponse(BaseModel):
    itinerary: str
    weather: str
    travel_tips: list[str]
    packing_list: list[str]

@app.post("/autofillPoI1", response_model=PointOfInrestResponse)
async def autofillPoI1(request: PointOfInrest1Request):
    if request.token != "i2JGyVfh3hVdzibdtx63sCnu3Nh4wDNDX3lCSWhkLwlH4wFr7jZQ6oq3wpb5StCR":
        return {"error": "Invalid token"}
    
    custom_prompt = GET_POI_SUGGESTIONS_1[::].replace("{interests}", ", ".join(request.interests)).replace("{region}", request.region)

    messages = [{
            "role": "user",
            "content": custom_prompt
        }]
    
    response = await client.chat.completions.create(
        model="llama-3.1-70b-instruct",
        messages=messages,
    )
    

    response_text = response.choices[0].message.content
    # print(response_text, request.interests, request.region)
    response_list = response_text.split("\n")
    
    poi = []
    for line in response_list:
        if '-' in line:
            poi.append(line.replace("-", "").replace("*", "").strip())
    
    return PointOfInrestResponse(data=poi)


@app.post("/autofillPoI2", response_model=PointOfInrestResponse)
async def autofillPoI2(request: PointOfInrest2Request):
    if request.token != "i2JGyVfh3hVdzibdtx63sCnu3Nh4wDNDX3lCSWhkLwlH4wFr7jZQ6oq3wpb5StCR":
        return {"error": "Invalid token"}
    
    custom_prompt = GET_POI_SUGGESTIONS_2[::].replace("{point_of_interest}", request.point_of_interest).replace("{interests}", request.interests)

    messages = [{
            "role": "user",
            "content": custom_prompt
        }]
    
    response = await client.chat.completions.create(
        model="llama-3.1-70b-instruct",
        messages=messages,
    )
    

    response_text = response.choices[0].message.content
    # print(custom_prompt, response_text)
    response_list = response_text.split("\n")
    
    poi = []
    for line in response_list:
        if '-' in line or '•' in line:
            poi.append(line.replace("-", "").replace("•", "").strip())
    

    return PointOfInrestResponse(data=poi)

# Root route
@app.post("/create-itinerary", response_model=DataResponse)
async def root(request: DataRequest):
    if request.token != "i2JGyVfh3hVdzibdtx63sCnu3Nh4wDNDX3lCSWhkLwlH4wFr7jZQ6oq3wpb5StCR":
        return {"error": "Invalid token"}
    
    print(request)    
    weather = get_weather(request.points_of_interest, request.location, request.date)
    packing_list = get_packing_list(request.points_of_interest, request.location, request.date, request.date_length)
    travel_tips = await get_travel_tips(request.points_of_interest)
    itinerary = await get_itinerary(request.interests, request.points_of_interest, request.location, request.date, request.date_length)

    return DataResponse(itinerary=itinerary, weather=weather, travel_tips=travel_tips, packing_list=packing_list)


    

def get_weather(points_of_interest, location, date):
    messages = [{
        'role': 'user',
        'content': GET_WEATHER[::].replace("{location}", ", ".join(location)).replace("{points_of_interest}", ", ".join(points_of_interest)).replace("{date}", date)
    }]
    response = ollama_client.chat(model='qwen2.5:14b-instruct-q4_K_M', messages=messages)['message']['content']
    return response

async def get_travel_tips(points_of_interest):
    tips = []
    
    if os.path.exists("travel_tips_cache.pkl"):
        with open("travel_tips_cache.pkl", "rb") as f:
            tips = pickle.load(f)
            return tips


    custom_prompt = GET_TRAVEL_TIPS[::].replace("{points_of_interest}", ", ".join(points_of_interest))

    messages = [{
            "role": "user",
            "content": custom_prompt
        },]
    
    response = await client.chat.completions.create(
        model="llama-3.1-sonar-large-128k-online",
        messages=messages,
    )
    

    response_text = response.choices[0].message.content
    response_list = response_text.split("\n")
    
    tips = []
    for line in response_list:
        if '-' in line:
            tips.append(line.replace("-", "").replace("*", "").strip())
    
    
            
    with open('travel_tips_cache.pkl', 'wb') as f:
        pickle.dump(tips, f)

    return tips

# async def research_cities(cities, interests, location, date):
#     research = {}
    
#     if os.path.exists("research_cities.pkl"):
#         with open("research_cities.pkl", "rb") as f:
#             research = pickle.load(f)
#             return research
#     os.exit()
#     attraction_types = ['restaurants', 'hotels', 'tourist attractions', 'niche and quaint attractions', 'local events']
#     non_food_interests = [x for x in interests if 'food' not in x and 'restaurant' not in x]
#     for city in cities:
#         research_dict = {}
#         for attraction_type in attraction_types:
#             custom_prompt = GET_CITY_ATTRACTION[::].replace("{location}", location).replace("{interests}", ", ".join(non_food_interests)).replace("{date}", date).replace("{city}", city).replace("{attraction_type}", attraction_type)

#             messages = [{
#                     "role": "user",
#                     "content": custom_prompt
#                 },]
            
#             response = await client.chat.completions.create(
#                 model="llama-3.1-sonar-large-128k-online",
#                 messages=messages,
#             )
            

#             response_text = response.choices[0].message.content
#             response_list = response_text.split("\n")
            
#             research_list = []
#             for i in range(len(response_list)):
#                 if "#" in response_list[i]:
#                     research_list.append((response_list[i].replace("#", "").strip(), response_list[i+1]))
#             research_dict[attraction_type] = research_list
            
#         research[city] = research_dict
            
#     with open('research_cities.pkl', 'wb') as f:
#         pickle.dump(research, f)
    
#     return research

# research_dict = {'city': {'attraction_type': [(attraction_title, attraction_description), ...], ...}, ...}

async def get_itinerary(interests, points_of_interest, location, date, length):
    custom_prompt = GET_ITINERARY[::].replace("{interests}", ", ".join(interests)).replace("{date}", date).replace("{location}", location).replace("{points_of_interest}", ", ".join(points_of_interest)).replace("{length}", str(length))
      
    messages = [{
        "role": "user",
        "content": custom_prompt
    },]
    
    if os.path.exists("get_itinerary.pkl"):
        with open("get_itinerary.pkl", "rb") as f:
            itin = pickle.load(f)
            return itin
    
    response = await client.chat.completions.create(
        model="llama-3.1-sonar-huge-128k-online",
        messages=messages,
    )
    
    response_text = response.choices[0].message.content
    with open('get_itinerary.pkl', 'wb') as f:
        pickle.dump(response_text, f)

    
    return response_text

      
def get_packing_list(points_of_interest, location, date, weather):
    custom_prompt = GET_PACKING_LIST[::].replace("{points_of_interest}", ", ".join(points_of_interest)).replace("{location}", location).replace("{date}", date).replace("{weather}", weather)

    messages = [{
            "role": "user",
            "content": custom_prompt
        }]

    response_text = ollama_client.chat(model='qwen2.5:14b-instruct-q4_K_M', messages=messages)['message']['content']
    response_list = response_text.split("\n")
    packing_list = []
    for line in response_list:
        if '-' in line:
            packing_list.append(line.replace("-", "").replace("*", "").strip())

    return packing_list
    
# API endpoint to get recommended cities based on location, interests, and date
# @app.post("/get_cities", response_model=CityResponse)
# async def get_cities(request: CityRequest, token:str):
#     if token != "nxx5daGhBrFC2ZVKoDZ7dmCWoSGZarhP222exVfVdQ4PvEMb2iZ83T9KsbKyXDT6":
#         return {"error": "Invalid token"}
    
#     custom_prompt = GET_CITIES[::].replace("{location}", request.location).replace("{interests}", ", ".join(request.interests)).replace("{date}", request.date)

#     messages = [
#         {
#             "role": "system",
#             "content": "You are an expert trip planner with 20+ years of experience. You know all about the cities of the world."
#         },
#         {
#             "role": "user",
#             "content": custom_prompt
#         },
#     ]
    
#     if os.path.exists("get_cities_cache.pkl"):
#         with open("get_cities_cache.pkl", "rb") as f:
#             response = pickle.load(f)
#     else:
#         response = client.chat.completions.create(
#             model="llama-3.1-sonar-large-128k-online",
#             messages=messages,
#         )
        
#         with open('get_cities_cache.pkl', 'wb') as f:
#             pickle.dump(response, f)
    
#     cities = []
#     descriptions = []

#     response_text = response.choices[0].message.content

#     response_list = response_text.split("\n")
#     for i in range(len(response_list)):
#         if "#" in response_list[i]:
#             cities.append(response_list[i].replace("#", "").strip())
#             descriptions.append(response_list[i+1])
            

#     return CityResponse(cities=cities, descriptions=descriptions)


    

if __name__=="__main__":
    # voyago_backend.namikas.dev
    uvicorn.run(app, host='0.0.0.0', port=8000)
    
    # weather = get_weather(['louve', 'big ben'], 'France', '2024-12-01')
    # print(weather)
    # print(get_travel_tips(['louve', 'big ben']))
    # print(get_packing_list(['louve', 'big ben'], 'France', '2024-12-01', weather))
    # research = research_cities(['lille', 'Paris'], ['art','museums'], 'France', '2024-12-01')
    # itinerary = get_itinerary(['art','museums'], ['louve', 'big ben'], 'France', '2024-12-01', '10')
    # print(asyncio.run(autofillPoI1(PointOfInrest1Request(region="West Europe", interests="art, museums", token="i2JGyVfh3hVdzibdtx63sCnu3Nh4wDNDX3lCSWhkLwlH4wFr7jZQ6oq3wpb5StCR"))))
    # print(asyncio.run(autofillPoI2(PointOfInrest2Request(point_of_interest="The Louvre Museum", interests="art, museums", token="i2JGyVfh3hVdzibdtx63sCnu3Nh4wDNDX3lCSWhkLwlH4wFr7jZQ6oq3wpb5StCR"))))
#pip freeze > requirements.txt