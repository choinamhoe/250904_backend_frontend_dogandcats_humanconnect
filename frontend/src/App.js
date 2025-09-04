import "./App.css";
import axios from "axios";

function App() {
  const handleChange = async (e) => {
    console.log("event", e);
    console.log(e.target.files);
    const files = Array.from(e.target.files);
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });
    try {
      const res = await axios.post("http://localhost:8000/upload", formData, {
        headers: {
          Content_Type: "multipart/form-data",
        },
      });
      console.log("pred", res);
    } catch (error) {
      console.log(error);
    }
    console.log(files);
    // 32분
    console.log("동작!!");
  };
  return (
    <>
      <input type="file" multiple onChange={handleChange} />
    </>
  );
}

export default App;
