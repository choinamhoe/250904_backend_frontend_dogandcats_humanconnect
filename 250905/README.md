# backend

conda create -n fastapi_tf python==3.10 numpy==1.23.1

pip install fastapi uvicorn python-multipart opencv-python tensorflow==2.8.0 keras numpy==1.23.1 protobuf==3.20

# frontend

npx create-react-app frontend
cd frontend
npm run start

## frontend 공유 받았을 때 실행하는 방법

frontend 폴더 이동후
npm install <- node_modules를 설치..삭제하는 이유는 리엑트 기본 실행폴더로 용량이 커서 삭제를 해서 보내고 명령어로 다시 실행하여 새로 생성
npm run start

npm install axios
