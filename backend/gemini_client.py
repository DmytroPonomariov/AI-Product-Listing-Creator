from google import genai
from google.genai import types
from config import config_obj

client = genai.Client(api_key=config_obj.GEMINI_API_KEY)


def generate_listing_from_image(
    image_bytes: bytes,
    mime_type: str,
    category: str,
    hint: str
):

    prompt = f"""
    Analyze this product image.

    Category: {category}
    Hint: {hint}

    Generate marketplace-ready JSON:

    {{
      "title": "",
      "description": "",
      "tags": ["", "", ""]
    }}

    Rules:
    - concise
    - SEO friendly
    - persuasive
    - no markdown
    - JSON only
    """

    image_part = types.Part(
        inline_data=types.Blob(
            mime_type=mime_type,
            data=image_bytes
        )
    )


    response = client.models.generate_content(
        model=config_obj.GEMINI_MODEL,
        contents=[
            prompt,
            image_part
        ]
    )

    return response.text




