import "./App.css";
import axios from "axios";
import { useState, useRef } from "react";

function App() {
  const [uploadFiles, setUploadFiles] = useState([]);
  const fileInputRef = useRef();
  const handleClickDropArea = () => {
    fileInputRef.current.click();
  };
  const handleDragOver = (e) => {
    console.log("지나가요!");
    e.preventDefault();
  };

  const handleDrop = (e) => {
    console.log("드랍!");
    e.preventDefault();
    console.log(e);
    console.log(e.dataTransfer.files);
    const files = e.dataTransfer.files;
    setUploadFiles(files);
  };
  //onchange
  const handleChange = (event) => {
    // console.log("event", event);
    // console.log("업로드 성공");
    // 웹 사이트는 기본적으로 여러명이서 스는 걸 고려해서 만듬
    // 비동기 : 업무(요청)을 시킨 후 다른 작업을 수행한다는 뜻
    // > 비 직렬적으로 수행
    // async : 비동기 형태로 이 함수를 진행하겠다는 의미
    // await : 비동기 처리 중에 반드시 기다려서 결과를 받아야 하는 경우
    //         잠시만 기다려서 promise가 안나오게 async있으면 포함
    //         await을 기재하여서 결과가 나온 후 다음 줄을 실행
    // promise :
    // 비동기 처리 할 때 업무 결과는 안나왔으나 업무 요청은 왔다는 뜻
    // 결과 나올 때까지는 내용을 못보므로 , await을 달아줘야
    // 결과 확인이 가능
    const files = event.target.files;
    // console.log("upload files:", files);
    setUploadFiles(files);
  };
  const handleUpload = async () => {
    console.log(uploadFiles);
    console.log("클릭");
    const URL = "http://localhost:8000/upload";
    const select_Files = Array.from(uploadFiles);
    const formData = new FormData();
    select_Files.forEach((f) => {
      formData.append("files", f);
    });
    try {
      const res = await axios.post(URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("res:", res);
    } catch (e) {
      console.log("error", e);
      alert("API 요청 중에 오류가 발생하였습니다.");
    }
  };
  // 드래그 앤 드롭 + 클릭을 통한 업로드 구현 시
  // 클릭을 통한 구현은 input 태그를 통해서만 가능
  // input 태그는 디자인 변경이 불가
  // div 태그를 통해서 input를 참조하는 형태로 구현하고
  // input은 display 되지 않게 설정하는 형태로 구현

  // 만약 드래그앤 드롭 + 업로드만 구현한다고 하면
  // 당연히 input 태그 없이 구현이 가능
  return (
    <>
      <div
        className="drop-area"
        onClick={handleClickDropArea}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      ></div>
      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={handleChange}
        style={{ display: "none" }}
      />
      <button onClick={handleUpload}>업로드</button>
    </>
  );
}

export default App;
