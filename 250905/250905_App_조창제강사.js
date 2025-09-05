import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upload from "./pages/Upload";
import Home from "./pages/Home";
import TestPage from "./pages/TestPage";
import Others from "./pages/Others";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="/test" element={<TestPage />} />
          <Route path="*" element={<Others />} />
        </Routes>
      </BrowserRouter>
      {/* <Upload /> */}
    </>
  );
};
export default App;
