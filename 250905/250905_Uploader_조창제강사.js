import { useRef } from "react";
import { UploadApi } from "../api/upload";

const Uploader = () => {
  const fileInputRef = useRef();
  const handleClickDropArea = () => {
    fileInputRef.current.click();
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    console.log("드랍!");
    e.preventDefault();
    console.log(e.dataTransfer.files);
    setUploadFiles(e.dataTransfer.files);
  };
  const handleChange = (event) => {
    const files = event.target.files;
    setUploadFiles(files);
  };
  const handleUpload = async () => {
    console.log("클릭!");
    console.log("uploadFiles", uploadFiles);
    const res = await UploadApi(uploadFiles);
    console.log("res", res);
    setProbability(res.data.prob);
  };

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
};

export default Uploader;
