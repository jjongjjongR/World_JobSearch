import os

class Config:
    BROKER_URL = os.getenv('BROKER_URL', 'redis://localhost:6379/0')
    RESULT_BACKEND = os.getenv('RESULT_BACKEND', 'redis://localhost:6379/0')
