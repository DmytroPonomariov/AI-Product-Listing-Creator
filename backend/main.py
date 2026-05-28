from gemini_client import generate_listing_from_image
from fastapi import FastAPI, Body, Request, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from db import engine, Base, get_user_request
import json



@asynccontextmanager
async def lifespan(app: FastAPI):
    Base.metadata.create_all(engine)
    print("Application has been started!")
    yield
    print("Application has been shutdown!")

app = FastAPI(title="AI Product Listing Assistant",lifespan=lifespan)

@app.get("/users/me/prompt-history")
async def get_my_requests(request: Request):
    user_id_address = request.client.host
    print(f'{user_id_address=}')
    user_request = get_user_request(ip_address = user_id_address)
    return user_request

@app.post("/generate-listing")
async def generate_listing(
    request: Request,
    category: str = Form(...),
    hint: str = Form(""),
    image: UploadFile = File(...)
):

    try:
        image_bytes = await image.read()

        response = generate_listing_from_image(
            image_bytes=image_bytes,
            mime_type=image.content_type,
            category=category.strip(),
            hint=hint.strip()
        )

        if isinstance(response, str):
            response = json.loads(response)

        return {
            "data": response,
            "status": "success"
        }

    except Exception:
        return {
            "data": None,
            "status": "error",
            "message": "Failed to generate listing"
        }

app.add_middleware(CORSMiddleware,allow_origins=['http://localhost:3000','http://127.0.0.1:3000'],allow_credentials=True,allow_methods=["*"],allow_headers=["*"])
