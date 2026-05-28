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




app.add_middleware(CORSMiddleware,allow_origins=['http://localhost:3000','http://127.0.0.1:3000'],allow_credentials=True,allow_methods=["*"],allow_headers=["*"])
