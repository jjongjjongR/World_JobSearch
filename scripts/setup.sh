#!/bin/bash

# 패키지 설치
pnpm install

# Docker 환경 설정
docker-compose up -d

# .env 파일이 없으면 기본 파일을 생성
if [ ! -f .env ]; then
  cp .env.example .env
fi

echo "초기 설정이 완료되었습니다!"
