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
# 35분시작
@app.post("/upload")
async def upload_files(files:List[UploadFile] = File(...)):
    try:
        # 하나라도 파일이름의 길이가 0이면 True로 반환
        logic1 = any([len(i.filename)==0 for i in files])
        logic2 = len(files)!=1
        if logic1:
            message = "파일을 업로드해주세요."
        elif logic2:
            message = "파일을 하나만 업로드해주세요."
        if(logic1 | logic2):
            return JSONResponse(
                status_code=status.HTTP_400_BAD_REQUEST,
                content={"message":message}
            )
        else:
            for file in files:
                # 꺼내온 file을 사람이 알아볼 수 있게 read
                content = await file.read()
                saved_path = file.filename
                with open(saved_path, "wb") as f:
                    f.write(content)
                    
            return JSONResponse(
                status_code=status.HTTP_200_OK,
                content={"message":"파일 업로드에 성공하였습니다."}
            )
    except Exception as e:
        return JSONResponse(
            status_code=status.HTTP_404_NOT_FOUND,
            content={"message":"업로드 과정에서 오류가 발생하였습니다."}
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