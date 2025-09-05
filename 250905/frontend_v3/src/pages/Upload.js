import { useState } from "react";
import Uploader from "../components/Uploader";
import { UploadApi } from "../api/UploadApi";

const Upload = () => {
  const [uploadFiles, setUploadFiles] = useState([]);
  const [probability, setProbability] = useState("");
  const handleUpload = async () => {
    console.log("클릭!");
    console.log("uploadFiles", uploadFiles);
    const res = await UploadApi(uploadFiles);
    // console.log("res", res);
    // res 안에 data가 없으면 undefined로 출력
    if (res?.data) {
      setProbability(res.data.prob);
    }
  };
  return (
    <>
      <h2>업로드 관련 내용입니다.</h2>
      <Uploader setUploadFiles={setUploadFiles} handleUpload={handleUpload} />
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
  //오전에 개발한 app.js를 upload로 변경
};

export default Upload;
