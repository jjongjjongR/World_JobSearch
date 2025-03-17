# Chatbot API

## 설명
이 프로젝트는 자기소개서 첨삭 및 면접 질문 분석을 제공하는 AI 챗봇 API입니다.

## 실행 방법
1. Python 가상 환경을 활성화합니다.
2. `pip install -r requirements.txt`로 필요한 패키지를 설치합니다.
3. `uvicorn main:app --reload`로 서버를 실행합니다.

## API 엔드포인트
- `/api/v1/ask` : 사용자가 질문을 제출합니다.
