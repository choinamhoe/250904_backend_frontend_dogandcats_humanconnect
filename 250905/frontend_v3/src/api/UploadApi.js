import axios from "axios";

export const UploadApi = async (uploadFiles) => {
  const files = Array.from(uploadFiles);
  const formData = new FormData();
  files.forEach((f) => {
    formData.append("files", f);
  });
  console.log(files, formData);
  try {
    const URL = "http://localhost:8000/upload";
    const res = await axios.post(URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("res", res);
    return res;
  } catch (e) {
    console.log("error", e);
    alert("API 요청 중에 오류가 발생하였습니다.");
    return null;
  }
};
