import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upload from "./pages/Upload";
import Home from "./pages/Home";
import Others from "./pages/Others";
import TestPage from "./pages/TestPage";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="/test" element={<TestPage />}></Route>
          <Route path="*" element={<Others />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
