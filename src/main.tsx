import React from "react";
import ReactDOM from "react-dom/client";
import About from "./pages/About.tsx";
import Cooks from "./pages/Cooks.tsx";
import Work from "./pages/Work.tsx";
import Resume from "./pages/Resume.tsx";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/cooks" element={<Cooks />} />
          <Route path="/work" element={<Work />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </BrowserRouter>
    {/* <About /> */}
  </React.StrictMode>
);
