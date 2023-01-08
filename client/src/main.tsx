import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import Debugger from "pages/Debugger";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/debugger" element={<Debugger />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
