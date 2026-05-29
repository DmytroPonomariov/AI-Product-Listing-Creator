# 🚀 SellFaster AI – Product Listing Generator

SellFaster AI is a full-stack SaaS application that generates optimized marketplace product listings from a single product image using AI.

Users upload a photo, and the system automatically generates:
- SEO-optimized product titles
- Descriptions
- Tags/keywords
- Structured listing content ready for marketplaces

---

## ✨ Features

- 📸 Upload product images
- 🧠 AI-powered listing generation
- ⚡ Fast multi-step creation flow
- 📝 Automatic SEO-optimized descriptions
- 💰 Pricing + publishing flow
- 📱 Mobile-first UX design
- 🔄 Step-by-step onboarding experience

---

## 🧱 Tech Stack

### Frontend
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Zustand (state management)
- React Hook Form
- TanStack Query
- Framer Motion

### Backend
- FastAPI
- Python
- Uvicorn
- Pydantic
- SQLite (local DB for MVP)
- AI integration (Gemini/OpenAI client)

### Dev Tools
- uv (Python package manager)
- ESLint
- Prettier
- Git + GitHub

---

## 📁 Project Structure

```

/backend
├── main.py
├── config.py
├── db.py
├── gemini_client.py
├── pyproject.toml

/frontend
├── src/
│   ├── app/
│   ├── features/
│   ├── shared/
│   ├── context/
│   ├── hooks/
├── package.json
├── next.config.ts

````

---

## ⚙️ How it works

1. User uploads a product image
2. Backend sends image to AI model
3. AI generates structured listing data
4. Frontend displays editable result
5. User publishes or copies listing

---

## 🚀 Getting Started

### 1. Clone repository
```bash
git clone https://github.com/DmytroPonomariov/AI-Product-Listing-Creator.git
cd AI-Product-Listing-Creator
````

---

### 2. Backend setup

```bash
cd backend
uv venv
source .venv/Scripts/activate   # Windows Git Bash
uv pip install -r requirements.txt
uvicorn main:app --reload
```

---

### 3. Frontend setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 Environment Variables

### Backend (.env)

```
API_KEY=your_ai_api_key
DATABASE_URL=sqlite:///app.db
```

### Frontend (.env.local)

```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

---

## 🎯 Project Goal

The goal of SellFaster AI is to eliminate manual listing creation and help users generate high-converting marketplace listings in under 10 seconds using AI automation.

---

## 📌 Future Improvements

* Stripe payments integration
* User authentication
* Cloud image storage (S3)
* Multi-marketplace export (eBay, Etsy, Amazon)
* Advanced AI prompt tuning
* Analytics dashboard

---

## 👨‍💻 Author

Built as a full-stack AI SaaS project for learning and production-level experience.

---
