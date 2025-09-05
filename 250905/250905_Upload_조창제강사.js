import axios from "axios";
import { useState, useRef } from "react";
import { UploadApi } from "../api/upload";

function Upload() {
  const [uploadFiles, setUploadFiles] = useState([]);
  const [probability, setProbability] = useState(null);
  // const fileInputRef = useRef();
  // const handleClickDropArea = () => {
  //   fileInputRef.current.click();
  // };
  // const handleDragOver = (e) => {
  //   e.preventDefault();
  // };
  // const handleDrop = (e) => {
  //   console.log("드랍!");
  //   e.preventDefault();
  //   console.log(e.dataTransfer.files);
  //   setUploadFiles(e.dataTransfer.files);
  // };

  // const handleChange = (event) => {
  //   const files = event.target.files;
  //   setUploadFiles(files);
  // };
  // const handleUpload = async () => {
  //   console.log("클릭!");
  //   console.log("uploadFiles", uploadFiles);
  //   const res = await UploadApi(uploadFiles);
  //   console.log("res", res);
  //   setProbability(res.data.prob);
  //   // const files = Array.from(uploadFiles);
  //   // const formData = new FormData();
  //   // files.forEach((f) => {
  //   //   formData.append("files", f);
  //   // });
  //   // console.log(files, formData);
  //   // try {
  //   //   const URL = "http://localhost:8000/upload";
  //   //   const res = await axios.post(URL, formData, {
  //   //     headers: {
  //   //       "Content-Type": "multipart/form-data",
  //   //     },
  //   //   });
  //   //   // 파일 갯수 제한, 디자인 변경, 파일 확장자 제한
  //   //   console.log("res", res);
  //   //   setProbability(res.data.prob);
  //   // } catch (e) {
  //   //   console.log("error", e);
  //   //   alert("API 요청 중에 오류가 발생하였습니다.");
  //   // }
  // };

  return (
    <>
      <h2>업로드 관련 내용입니다.</h2>
      {/* <div
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
      <button onClick={handleUpload}>업로드</button> */}
      <p>강아지 확률은 {probability * 100}% 입니다.</p>
    </>
  );
  // 아까 주석처놨던 App 함수 내용을 Upload로 변경
}

export default Upload;
