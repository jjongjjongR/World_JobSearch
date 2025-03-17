from celery import Celery

app = Celery('worker', broker='redis://localhost:6379/0')

@app.task
def long_task():
    # 배치 작업 로직
    return "작업 완료!"
