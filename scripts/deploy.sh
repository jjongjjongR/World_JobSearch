#!/bin/bash

# Docker 이미지를 빌드
docker-compose build

# Docker 컨테이너 실행
docker-compose up -d

# 배포가 완료된 후 실행할 명령어 (예: API 서버 확인)
curl http://localhost:3000/api/healthcheck
