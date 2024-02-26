import React from "react";
import ReactDOM from "react-dom/client";
import About from "./pages/About.tsx";
import Work from "./pages/Work.tsx";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </main>
    </BrowserRouter>
    {/* <About /> */}
  </React.StrictMode>
);
