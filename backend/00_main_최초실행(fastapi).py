#pip install fastapi uvicorn python-multipart
import uvicorn
from fastapi import FastAPI,status
from fastapi.responses import JSONResponse

app = FastAPI()

@app.get("/")
async def api_test():
    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content={"message":"서버가 정상 작동중입니다."}
    )

if __name__=="__main__":
    uvicorn.run("main:app",host="0.0.0.0",
                port = 8000, reload=True)

#경로 이동 후
#python main.py 로 실행
#alt + z : 보이는 화면 줄바뀐 것처럼 출력