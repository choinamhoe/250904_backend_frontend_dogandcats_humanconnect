# pip install fastapi uvicorn python-multipart

import uvicorn
from typing import List
from fastapi import FastAPI, status, UploadFile, File
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
# 25분진행
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # 특정 주소로 접근하는 경우에만 API 허용
    #allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods = ["*"], # GET, POST, DELETE, PUT, PATCH
    allow_headers = ["*"]
)
@app.post("/upload")
async def upload_files(files:List[UploadFile] = File(...)):
    print(files)
    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content={"message":"파일 업로드에 성공하였습니다."}
    )
    
@app.get("/")
async def api_test():
    return JSONResponse(
        status_code=status.HTTP_200_OK,        
        content={"message":"서버가 정상 작동중입니다."}
    )
    
if __name__ =="__main__":
    uvicorn.run(
        # 파일명:app 형태로 기재
        "main:app", host="0.0.0.0", 
        port = 8000, reload=True)
    
# 경로 이동 후 
# python main.py 로 실행
# alt + Z: 보이는 화면 줄바뀐 것처럼 출력