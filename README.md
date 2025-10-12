AI Study Buddy - Scaffold (FastAPI backend + React frontend)

Run backend:
cd backend
python3 -m venv venv
source venv/bin/activate    (Windows: venv\Scripts\activate)
pip install -r requirements.txt
export OPENAI_API_KEY='sk-...'
uvicorn main:app --reload --port 8000

Run frontend:
cd frontend
npm install
npm start

In development you can configure frontend to proxy /api to backend or edit axios base URL to http://localhost:8000