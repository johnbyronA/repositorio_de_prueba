import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About } from "../pages";

const RoutesConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesConfig;
