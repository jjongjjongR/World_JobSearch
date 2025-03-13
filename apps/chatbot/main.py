# apps/chatbot/main.py
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "AI 챗봇 시작!"}
