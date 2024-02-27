import React from "react";
import ReactDOM from "react-dom/client";
import About from "./pages/About.tsx";
import Work from "./pages/Work.tsx";
import Projects from "./pages/Projects.tsx";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Analytics />
      </main>
    </BrowserRouter>
    {/* <About /> */}
  </React.StrictMode>
);
