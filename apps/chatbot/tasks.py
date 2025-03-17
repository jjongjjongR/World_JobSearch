from celery import Celery

celery = Celery(
    'tasks',
    broker='redis://localhost:6379/0',  # Redis를 메시지 브로커로 사용
    backend='redis://localhost:6379/0'
)

@celery.task
def analyze_resume(resume_text: str):
    """자기소개서 분석 작업"""
    return f"분석 결과: {resume_text[:10]}..."
