import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
    GEMINI_MODEL = "gemini-2.5-flash"
    GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/v1beta/"
    DB_URL = "sqlite:///products_form.db"

config_obj = Config()
