import os

class Settings:
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "Chatbot API"
    SECRET_KEY: str = os.getenv("SECRET_KEY", "your-secret-key")
    BACKEND_CORS_ORIGINS: list = ["*"]

settings = Settings()
