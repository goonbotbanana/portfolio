import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./Index.tsx";
import About from "./pages/About.tsx";
import Cooks from "./pages/cooks.tsx";
import Projects from "./pages/Projects.tsx";
import "./index.css";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/cooks" element={<Cooks />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </BrowserRouter>
    {/* <About /> */}
  </React.StrictMode>
);
